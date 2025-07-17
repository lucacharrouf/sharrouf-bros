import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Machine {
  model: string | null;
  brand: string;
  status: 'new' | 'refurbished' | null;
  category_id: number | null;
  serial_no: string;
  image_url?: string | null;
  link?: string | null;
}

interface Category {
  id: number;
  name: string;
}

interface UseProductsReturn {
  machines: Machine[];
  categories: Category[];
  brands: string[];
  conditions: string[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProducts = (): UseProductsReturn => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [conditions, setConditions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cache data in localStorage for better performance
  const getCachedData = (key: string) => {
    try {
      const cached = localStorage.getItem(key);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Cache for 5 minutes
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          return data;
        }
      }
    } catch (e) {
      console.warn('Failed to read cache:', e);
    }
    return null;
  };

  const setCachedData = (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.warn('Failed to write cache:', e);
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // // Try to get cached data first
      // const cachedMachines = getCachedData('machines');
      // const cachedCategories = getCachedData('categories');
      // const cachedBrands = getCachedData('brands');
      // const cachedConditions = getCachedData('conditions');

      // if (cachedMachines && cachedCategories && cachedBrands && cachedConditions) {
      //   setMachines(cachedMachines);
      //   setCategories(cachedCategories);
      //   setBrands(cachedBrands);
      //   setConditions(cachedConditions);
      //   setLoading(false);
      //   return;
      // }

      // Fetch machines and categories in parallel
      const [machinesResult, categoriesResult] = await Promise.all([
        supabase
          .from('machines')
          .select('model, brand, status, category_id, serial_no, image_url, link')
          .limit(1000),
        supabase
          .from('machinery_categories')
          .select('id, category_name')
          .order('category_name')
      ]);

      if (machinesResult.error) throw machinesResult.error;
      if (categoriesResult.error) throw categoriesResult.error;

      const machinesData = machinesResult.data || [];
      
      // Transform categories to match the expected interface
      const categoriesData = (categoriesResult.data || []).map(cat => ({
        id: cat.id,
        name: cat.category_name
      }));

      // Process data efficiently
      const uniqueBrands = [...new Set(machinesData.map(m => m.brand).filter(Boolean))].sort();
      const uniqueConditions = [...new Set(machinesData.map(m => m.status).filter(Boolean))].sort();

      // Cache the results
      setCachedData('machines', machinesData);
      setCachedData('categories', categoriesData);
      setCachedData('brands', uniqueBrands);
      setCachedData('conditions', uniqueConditions);

      setMachines(machinesData);
      setCategories(categoriesData);
      setBrands(uniqueBrands);
      setConditions(uniqueConditions);

    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    machines,
    categories,
    brands,
    conditions,
    loading,
    error,
    refetch: fetchData
  };
}; 