import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Machine {
  model: string | null;
  brand: string;
  status: 'new' | 'refurbished' | null;
  category_id: number | null;
  serial_no: string;
}

interface Category {
  id: number;
  name: string;
}

interface ProductsData {
  machines: Machine[];
  categories: Category[];
  brands: string[];
  conditions: string[];
}

// Fetch all products data
const fetchProductsData = async (): Promise<ProductsData> => {
  // Fetch machines and categories in parallel
  const [machinesResult, categoriesResult] = await Promise.all([
    supabase
      .from('machines')
      .select('model, brand, status, category_id, serial_no')
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

  return {
    machines: machinesData,
    categories: categoriesData,
    brands: uniqueBrands,
    conditions: uniqueConditions,
  };
};

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProductsData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

// Hook for filtered machines with React Query
export const useFilteredMachines = (
  machines: Machine[],
  selectedCategory: string | null,
  selectedBrand: string | null,
  selectedCondition: string | null
) => {
  return useQuery({
    queryKey: ['filteredMachines', selectedCategory, selectedBrand, selectedCondition],
    queryFn: () => {
      return machines.filter(machine => {
        if (selectedCategory && machine.category_id !== Number(selectedCategory)) {
          return false;
        }
        if (selectedBrand && machine.brand !== selectedBrand) {
          return false;
        }
        if (selectedCondition && machine.status !== selectedCondition) {
          return false;
        }
        return true;
      });
    },
    enabled: machines.length > 0,
    staleTime: 1 * 60 * 1000, // 1 minute for filtered results
  });
}; 