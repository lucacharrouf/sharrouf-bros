import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "SCM Panel Saw SI 400EP",
      category: "Panel Saws",
      image: "https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["Digital Display", "Automatic Scoring", "Dust Collection", "Safety Systems"],
      description: "Professional panel saw for precise cutting of wood panels and boards.",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "SCM Edge Bander Olimpic K 230",
      category: "Edge Banders",
      image: "https://images.unsplash.com/photo-1612437169020-3b6a4c70be0d?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["Pre-milling Unit", "Corner Rounding", "Scraper Unit", "Fine Trimming"],
      description: "Compact edge banding machine with professional finishing capabilities.",
      badge: "New Model"
    },
    {
      id: 3,
      name: "SCM CNC Router Pratix N15",
      category: "CNC Routers",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["5-Axis Capability", "Automatic Tool Change", "Vacuum Clamping", "CAD/CAM Integration"],
      description: "Advanced CNC routing system for complex woodworking operations.",
      badge: "High Tech"
    },
    {
      id: 4,
      name: "SCM Boring Machine Cyflex F900",
      category: "Boring Machines",
      image: "https://images.unsplash.com/photo-1587560699386-d8f3a8b0b4ea?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["Multi-spindle", "Pneumatic Clamping", "Quick Setup", "Digital Controls"],
      description: "High-precision boring machine for cabinet and furniture production.",
      badge: "Professional"
    },
    {
      id: 5,
      name: "SCM Moulder Superset NT",
      category: "Moulders",
      image: "https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["4-Spindle Configuration", "Digital Fence", "Power Feed", "Safety Guards"],
      description: "Professional moulding machine for profile cutting and shaping.",
      badge: "Industrial"
    },
    {
      id: 6,
      name: "SCM Wide Belt Sander DMC SD43",
      category: "Sanders",
      image: "https://images.unsplash.com/photo-1612437169020-3b6a4c70be0d?w=600&h=400&fit=crop",
      price: "Contact for Price",
      features: ["Wide Belt System", "Variable Speed", "Thickness Control", "Dust Extraction"],
      description: "Industrial wide belt sander for surface finishing and calibration.",
      badge: "Quality Plus"
    }
  ];

  const categories = ["all", "Panel Saws", "Edge Banders", "CNC Routers", "Boring Machines", "Moulders", "Sanders"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">SCM Product Catalog</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover our complete range of premium Italian woodworking machinery, 
            engineered for precision, reliability, and maximum productivity.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-industrial-blue text-white">
                    {product.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-industrial-dark">{product.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-gray mb-4">{product.description}</p>
                  <ul className="text-sm space-y-1 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-italian-green font-bold">•</span>
                        <span className="text-industrial-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-industrial-blue">{product.price}</span>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                      Request Quote
                    </Button>
                    <Button variant="outline" className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-industrial-dark mb-4">No products found</h3>
              <p className="text-industrial-gray">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts can help you select the perfect machinery for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-italian-green hover:bg-italian-green/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-dark">
              Download Full Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
