import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Products = () => {
  const [machines, setMachines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMachines() {
      const { data, error } = await supabase
        .from('machines')
        .select('model, brand, status, image_url');
      if (!error && Array.isArray(data)) {
        setMachines(data);
      }
      setLoading(false);
    }
    fetchMachines();
  }, []);

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
                  <img
                    src={machine.image_url || '/placeholder.png'}
                    alt={machine.model || 'Machine image'}
                    className="w-full h-48 object-cover rounded-t"
                    onError={e => { e.currentTarget.src = '/placeholder.png'; }}
                  />
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
