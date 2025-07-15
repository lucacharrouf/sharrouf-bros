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

// Category name mapping based on common woodworking machinery categories
const CATEGORY_NAMES: Record<number, string> = {
  1: 'Panel Saws',
  2: 'Edge Banders', 
  3: 'CNC Routers',
  4: 'Boring Machines',
  5: 'Sanding Machines',
  6: 'Assembly Equipment',
  7: 'Dust Collection',
  8: 'Finishing Equipment',
  9: 'Material Handling',
  10: 'Safety Equipment',
  11: 'Spare Parts',
  12: 'Accessories',
  13: 'Software & Controls',
  14: 'Measurement Tools',
  15: 'Workshop Equipment',
  16: 'Panel Processing',
  17: 'Woodworking Tools',
  18: 'Industrial Machinery',
  19: 'Production Lines',
  20: 'Custom Solutions'
};

// Fetch all products data
const fetchProductsData = async (): Promise<ProductsData> => {
  // Fetch only machines data since machine_categories table doesn't exist
  const machinesResult = await supabase
    .from('machines')
    .select('model, brand, status, category_id, serial_no')
    .limit(1000);

  if (machinesResult.error) throw machinesResult.error;

  const machinesData = machinesResult.data || [];

  // Extract categories from machines data with proper names
  const categoryMap = new Map<number, Category>();
  machinesData.forEach(machine => {
    if (machine.category_id && !categoryMap.has(machine.category_id)) {
      const categoryName = CATEGORY_NAMES[machine.category_id] || `Category ${machine.category_id}`;
      categoryMap.set(machine.category_id, {
        id: machine.category_id,
        name: categoryName
      });
    }
  });
  
  const categoriesData = Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));

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