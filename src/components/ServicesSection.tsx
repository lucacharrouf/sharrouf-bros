
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Machinery Sales",
      description: "Complete range of SCM woodworking machinery for all industrial applications",
      features: ["New Machine Sales", "Custom Configurations", "Financing Options", "Delivery & Installation"],
      icon: "🏭",
    },
    {
      title: "Spare Parts",
      description: "Genuine SCM spare parts with fast delivery across the Middle East",
      features: ["Original Parts Only", "Fast Shipping", "Technical Support", "Parts Identification"],
      icon: "⚙️",
    },
    {
      title: "Maintenance",
      description: "Professional maintenance services to keep your machinery running at peak performance",
      features: ["Preventive Maintenance", "Emergency Repairs", "Performance Optimization", "Safety Inspections"],
      icon: "🔧",
    },
    {
      title: "Technical Support",
      description: "Expert technical support from SCM-trained technicians",
      features: ["24/7 Support Hotline", "Remote Diagnostics", "On-site Service", "Training Programs"],
      icon: "📞",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Complete Service Solutions
          </h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive services 
            to maximize your woodworking machinery investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-industrial-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray mb-6">{service.description}</p>
                <ul className="text-sm text-left space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-italian-green font-bold">✓</span>
                      <span className="text-industrial-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-industrial-blue hover:bg-industrial-blue/90 mr-4">
            Request Service
          </Button>
          <Button size="lg" variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
