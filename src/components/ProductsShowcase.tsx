
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductsShowcase = () => {
  const productCategories = [
    {
      name: "Panel Saws",
      description: "Precision panel saws for accurate cutting of wood panels and boards",
      image: "https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=400&h=300&fit=crop",
      badge: "Best Seller",
      features: ["Digital Display", "Automatic Feed", "Dust Collection"],
    },
    {
      name: "Edge Banders",
      description: "Professional edge banding machines for perfect finishing",
      image: "https://images.unsplash.com/photo-1612437169020-3b6a4c70be0d?w=400&h=300&fit=crop",
      badge: "New Arrival",
      features: ["Pre-milling Unit", "Corner Rounding", "Scraper Unit"],
    },
    {
      name: "CNC Routers",
      description: "Advanced CNC routing systems for complex woodworking operations",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
      badge: "High Tech",
      features: ["5-Axis Capability", "Automatic Tool Change", "Vacuum Clamping"],
    },
    {
      name: "Boring Machines",
      description: "High-precision boring machines for cabinet and furniture production",
      image: "https://images.unsplash.com/photo-1587560699386-d8f3a8b0b4ea?w=400&h=300&fit=crop",
      badge: "Professional",
      features: ["Multi-spindle", "Pneumatic Clamping", "Quick Setup"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            SCM Machinery Collection
          </h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            Discover our comprehensive range of premium Italian woodworking machinery, 
            engineered for precision, reliability, and maximum productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((product, index) => (
            <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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
                <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-industrial-blue hover:bg-industrial-blue/90 mr-4">
            View All Products
          </Button>
          <Button size="lg" variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
            Download Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
