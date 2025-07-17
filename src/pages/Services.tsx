import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      title: "Machinery Sales",
      description: "Complete range of woodworking machinery for all industrial applications",
      icon: "🏭",
      features: [
        "New and Used Machine Sales",
        "Custom Machine Configurations",
        "Pay with Installment Options",
        "Professional Delivery & Installation",
        "Complete Setup & Commissioning",
        "Operator Training Programs"
      ],
      benefits: "Get the latest technology with full manufacturer support"
    },
    {
      title: "Spare Parts",
      description: "Genuine SCM spare parts with fast delivery across the Middle East",
      icon: "⚙️",
      features: [
        "100% Genuine Parts Only",
        "Same-Day Shipping Available",
        "Comprehensive Parts Inventory",
        "Technical Parts Identification",
        "Emergency Parts Service",
        "Parts Warranty Coverage"
      ],
      benefits: "Minimize downtime with authentic parts and quick delivery"
    },
    {
      title: "Maintenance Services",
      description: "Professional maintenance services to keep your machinery running at peak performance",
      icon: "🔧",
      features: [
        "Preventive Maintenance Programs",
        "Emergency Repair Services",
        "Performance Optimization",
        "Safety Inspections & Compliance",
        "Upgrade & Retrofit Services",
        "Maintenance Contract Options"
      ],
      benefits: "Extend machine life and maximize productivity"
    },
    {
      title: "Technical Support",
      description: "Expert technical support from SCM-trained technicians",
      icon: "📞",
      features: [
        "24/7 Technical Support Hotline",
        "Remote Diagnostics & Troubleshooting",
        "On-site Technical Service",
        "Machine Operator Training",
        "Technical Documentation",
        "Software Updates & Support"
      ],
      benefits: "Get expert help whenever and wherever you need it"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#02294e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Complete Service Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From initial consultation to ongoing support, we provide comprehensive services 
            to maximize your woodworking machinery investment and ensure optimal performance.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Our Services</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Comprehensive support for your woodworking machinery throughout its entire lifecycle
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-industrial-dark">{service.title}</CardTitle>
                      <p className="text-industrial-gray">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-industrial-dark mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-italian-green font-bold">✓</span>
                          <span className="text-industrial-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-industrial-dark font-medium">{service.benefits}</p>
                  </div>
                  <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Our Service Process</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              A systematic approach to ensure your machinery receives the best care
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Assessment", description: "Comprehensive evaluation of your machinery and requirements" },
              { step: "2", title: "Service Planning", description: "Customized service plan based on your specific needs" },
              { step: "3", title: "Expert Execution", description: "Professional service delivery by certified technicians" },
              { step: "4", title: "Follow-up Support", description: "Ongoing monitoring and support to ensure optimal performance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-industrial-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-industrial-dark mb-3">{process.title}</h3>
                <p className="text-industrial-gray">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#02294e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right service package for your machinery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-italian-green hover:bg-italian-green/90" asChild>
              <Link to="/contact">Schedule Service Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-dark" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
