
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const mainServices = [
    {
      title: "Machinery Sales",
      description: "Complete range of SCM woodworking machinery for all industrial applications",
      icon: "🏭",
      features: [
        "New Machine Sales with Full Warranty",
        "Custom Machine Configurations",
        "Flexible Financing Options",
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
        "100% Genuine SCM Parts Only",
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

  const maintenancePackages = [
    {
      name: "Basic Care",
      price: "Starting at $500/month",
      features: [
        "Quarterly Inspections",
        "Basic Preventive Maintenance",
        "Emergency Support (Business Hours)",
        "Parts Discount (10%)",
        "Technical Phone Support"
      ],
      popular: false
    },
    {
      name: "Professional Care",
      price: "Starting at $1,200/month",
      features: [
        "Monthly Inspections",
        "Complete Preventive Maintenance",
        "Priority Emergency Support",
        "Parts Discount (15%)",
        "Annual Performance Optimization",
        "Operator Training Sessions"
      ],
      popular: true
    },
    {
      name: "Premium Care",
      price: "Contact for Quote",
      features: [
        "Bi-weekly Inspections",
        "Full Maintenance Coverage",
        "24/7 Emergency Response",
        "Parts Discount (20%)",
        "Quarterly Performance Reviews",
        "Unlimited Training & Consultation",
        "Machine Upgrade Planning"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Complete Service Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
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
                  <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Maintenance Packages</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Choose the maintenance package that best fits your operational needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <Card key={index} className={`machinery-shadow hover:shadow-2xl transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-industrial-blue' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-industrial-blue text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-industrial-dark">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-industrial-blue mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-italian-green font-bold">✓</span>
                        <span className="text-industrial-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-industrial-blue hover:bg-industrial-blue/90' : 'bg-industrial-gray hover:bg-industrial-gray/90'}`}>
                    Select Package
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
      <section className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right service package for your machinery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-italian-green hover:bg-italian-green/90">
              Schedule Service Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-dark">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
