import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, RefreshCw, ExternalLink, Image as ImageIcon } from "lucide-react";
import MachineImage from "@/components/MachineImage";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { machines, categories, brands, conditions, loading, error, refetch } = useProducts();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  // Handle URL parameters on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    const conditionParam = searchParams.get('condition');
    
    if (categoryParam) {
      // Find category by name (for backward compatibility with ProductsShowcase links)
      const category = categories.find(cat => cat.name === categoryParam);
      if (category) {
        setSelectedCategory(String(category.id));
      }
    }
    
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
    
    if (conditionParam) {
      setSelectedCondition(conditionParam);
    }
  }, [searchParams, categories]);

  // Update URL when filters change
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (selectedCategory) {
      const category = categories.find(cat => String(cat.id) === selectedCategory);
      if (category) {
        newSearchParams.set('category', category.name);
      }
    }
    if (selectedBrand) {
      newSearchParams.set('brand', selectedBrand);
    }
    if (selectedCondition) {
      newSearchParams.set('condition', selectedCondition);
    }
    setSearchParams(newSearchParams);
  }, [selectedCategory, selectedBrand, selectedCondition, categories, setSearchParams]);

  // Memoized filtered machines for better performance
  const filteredMachines = useMemo(() => {
    const filtered = machines.filter(machine => {
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

    // Sort machines: those with available images first, then those without
    return filtered.sort((a, b) => {
      const aHasImage = a.image_url && a.image_url.trim() !== '';
      const bHasImage = b.image_url && b.image_url.trim() !== '';
      
      if (aHasImage && !bHasImage) return -1;
      if (!aHasImage && bHasImage) return 1;
      return 0;
    });
  }, [machines, selectedCategory, selectedBrand, selectedCondition]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedCondition(null);
    setSearchParams(new URLSearchParams());
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refetch}
                className="ml-4"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            </AlertDescription>
          </Alert>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#02294e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Product Catalog</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover our complete range of premium Italian woodworking machinery, 
            engineered for precision, reliability, and maximum productivity.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <Select
                value={selectedCategory || 'all'}
                onValueChange={val => setSelectedCategory(val === 'all' ? null : val)}
              >
                <SelectTrigger className="w-48 bg-white border-2 border-gray-200 hover:border-industrial-blue focus:border-industrial-blue">
                  <SelectValue placeholder="Select Category" className="text-industrial-dark font-medium" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-200 z-[9999] max-h-60 overflow-y-auto">
                  <SelectItem value="all" className="text-industrial-dark font-medium hover:bg-gray-50 focus:bg-gray-50">
                    All Categories
                  </SelectItem>
                  {categories.map((cat) => (
                    <SelectItem 
                      key={cat.id} 
                      value={String(cat.id)}
                      className="text-industrial-dark hover:bg-gray-50 focus:bg-gray-50"
                    >
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters Button */}
            {(selectedCategory || selectedBrand || selectedCondition) && (
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="text-industrial-gray hover:text-industrial-dark"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Brand and Condition Filters - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Brand Filter Tags */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-industrial-dark mb-3">Filter by Brand</h3>
              
              {/* SCM Featured Brand - Elevated and Prominent */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedBrand === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBrand(null)}
                    className={`transition-all duration-200 ${
                      selectedBrand === null 
                        ? "bg-industrial-blue text-white shadow-md" 
                        : "text-industrial-gray hover:text-industrial-dark hover:bg-gray-100"
                    }`}
                  >
                    All Brands
                  </Button>
                  
                  {/* SCM Special Button */}
                  {brands.includes('SCM') && (
                    <Button
                      variant={selectedBrand === 'SCM' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedBrand(selectedBrand === 'SCM' ? null : 'SCM')}
                      className={`transition-all duration-200 transform hover:scale-105 ${
                        selectedBrand === 'SCM' 
                          ? "bg-industrial-blue text-white shadow-lg border-2 border-industrial-blue" 
                          : "text-industrial-dark hover:text-industrial-dark hover:bg-blue-50 border-2 border-industrial-blue bg-white font-semibold"
                      }`}
                    >
                      SCM
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Other Brands */}
              <div className="flex flex-wrap gap-2">
                {brands.filter(brand => brand !== 'SCM').map((brand: string) => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                    className={`transition-all duration-200 ${
                      selectedBrand === brand 
                        ? "bg-industrial-blue text-white shadow-md" 
                        : "text-industrial-gray hover:text-industrial-dark hover:bg-gray-100"
                    }`}
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>

            {/* Condition Filter Tags */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-industrial-dark mb-3">Filter by Condition</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCondition === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCondition(null)}
                  className={`transition-all duration-200 ${
                    selectedCondition === null 
                      ? "bg-industrial-blue text-white shadow-md" 
                      : "text-industrial-gray hover:text-industrial-dark hover:bg-gray-100"
                  }`}
                >
                  All Conditions
                </Button>
                {conditions.map((condition: string) => (
                  <Button
                    key={condition}
                    variant={selectedCondition === condition ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCondition(selectedCondition === condition ? null : condition)}
                    className={`transition-all duration-200 ${
                      selectedCondition === condition 
                        ? condition === "new" 
                          ? "bg-italian-green text-white shadow-md" 
                          : "bg-industrial-gray text-white shadow-md"
                        : "text-industrial-gray hover:text-industrial-dark hover:bg-gray-100"
                    }`}
                  >
                    {condition === "new" ? "New" : "Used/Refurbished"}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory || selectedBrand || selectedCondition) && (
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedCategory && (
                <Badge variant="secondary" className="bg-industrial-blue text-white">
                  Category: {categories.find(cat => String(cat.id) === selectedCategory)?.name}
                </Badge>
              )}
              {selectedBrand && (
                <Badge variant="secondary" className="bg-industrial-blue text-white">
                  Brand: {selectedBrand}
                </Badge>
              )}
              {selectedCondition && (
                <Badge variant="secondary" className="bg-industrial-blue text-white">
                  Condition: {selectedCondition === 'new' ? 'New' : 'Used/Refurbished'}
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-2xl font-semibold text-industrial-dark mb-4">Loading machines...</div>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-industrial-blue mx-auto"></div>
            </div>
          ) : filteredMachines.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-industrial-dark mb-4">No machines found</h3>
              <p className="text-industrial-gray mb-6">No machines match your current filters.</p>
              {(selectedCategory || selectedBrand || selectedCondition) && (
                <Button onClick={clearFilters} className="bg-industrial-blue hover:bg-industrial-blue/90">
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <p className="text-industrial-gray">
                  Showing {filteredMachines.length} of {machines.length} machines
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMachines.map((machine, idx) => (
                  <Card key={`${machine.serial_no}-${idx}`} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                    {/* Image Section */}
                    <MachineImage
                      imageUrl={machine.image_url}
                      alt={`${machine.model || machine.brand} - ${machine.serial_no}`}
                    />

                    <CardHeader>
                      <CardTitle className="text-industrial-dark">{machine.model || "Unknown Model"}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="w-fit">{machine.brand || "Unknown Brand"}</Badge>
                        <Badge className={`w-fit ${machine.status === "new" ? "bg-italian-green" : "bg-industrial-gray"}`}>
                          {machine.status === "new" ? "New" : "Used"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {/* Action Buttons */}
                      <div className="mt-auto flex gap-2">
                        {machine.link && (
                          <Button 
                            asChild
                            className="flex-1 bg-industrial-blue hover:bg-industrial-blue/90 text-white"
                          >
                            <a 
                              href={machine.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View Details
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;