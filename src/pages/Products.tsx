import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

const Products = () => {
  const [machines, setMachines] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('machinery_categories')
        .select('id, category_name');
      if (!error && Array.isArray(data)) {
        setCategories(data);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchMachines() {
      setLoading(true);
      let query = supabase
        .from('machines')
        .select('model, brand, status, image_url, category_id');
      if (selectedCategory) {
        query = query.eq('category_id', Number(selectedCategory));
      }
      const { data, error } = await query;
      if (!error && Array.isArray(data)) {
        setMachines(data);
      }
      setLoading(false);
    }
    fetchMachines();
  }, [selectedCategory]);

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

      {/* Category Filter */}
      <section className="py-6">
        <div className="container mx-auto px-4 flex justify-end">
          <Select
            value={selectedCategory || 'all'}
            onValueChange={val => setSelectedCategory(val === 'all' ? null : val)}
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat: any) => (
                <SelectItem key={cat.id} value={String(cat.id)}>{cat.category_name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div>Loading machines...</div>
          ) : machines.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-industrial-dark mb-4">No machines found</h3>
              <p className="text-industrial-gray">No machines available in the database.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine, idx) => (
                <Card key={idx} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                  {machine.image_url && (
                    <div className="relative w-full h-48 bg-gray-100">
                      <img
                        src={machine.image_url}
                        alt={machine.model || "Machine image"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-industrial-dark">{machine.model || "Unknown Model"}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{machine.brand || "Unknown Brand"}</Badge>
                    <Badge className={`w-fit mt-2 ${machine.status === "new" ? "bg-italian-green" : "bg-industrial-gray"}`}>
                      {machine.status === "new" ? "New" : "Used"}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
