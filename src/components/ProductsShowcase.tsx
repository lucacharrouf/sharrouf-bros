import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProductsShowcase = () => {
  const productCategories = [
    {
      name: "Beam Saws",
      description: "Ideal solution for small-sized companies. Single-blade beam saw with PC/PLC control system for cutting solid wood panels, chipboards, MDF, and multilayer panels.",
      image: "/images/beam_saw.avif",
      badge: "Best Seller",
      features: ["PC/PLC Control System", "Panel Stack Cutting", "Flexstore Integration"],
      categoryFilter: "Panel Saws",
    },
    {
      name: "Edge Banders",
      description: "Industrial edge bander designed for highest quality processing on any panel and material. Highly configurable for continuous operation with Electronic Touch technology and flexible integration capabilities.",
      image: "/images/edge-bander.avif",
      badge: "New Arrival",
      features: ["Electronic Touch Technology", "Multi-Shift Operation", "Flexible Integration"],
      categoryFilter: "Edge Banders",
    },
    {
      name: "CNC Routers",
      description: "Highly modular machining centre providing solutions for all woodworking challenges. Run by Suite Maestro with specific modules for every production cycle, offering unrivalled price-performance ratio and flexible configuration.",
      image: "/images/CNC.avif",
      badge: "High Tech",
      features: ["5-Axis Capability", "Automatic Tool Change", "Vacuum Clamping"],
      categoryFilter: "CNC Routers",
    },
    {
      name: "Drilling Machines",
      description: "Morbidelli ux range combines through-feed drilling efficiency with machining centre flexibility. Designed for drilling, routing and grooving operations with simultaneous dual-panel processing and versatile automation options.",
      image: "/images/boring.avif",
      badge: "Professional",
      features: ["Multi-spindle", "Pneumatic Clamping", "Quick Setup"],
      categoryFilter: "Boring Machines",
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
                <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90" asChild>
                  <Link to={`/products?category=${encodeURIComponent(product.categoryFilter)}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-industrial-blue hover:bg-industrial-blue/90 mr-4" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
