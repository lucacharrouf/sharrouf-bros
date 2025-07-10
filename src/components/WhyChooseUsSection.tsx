import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "20+ Years Experience",
      description: "Over two decades of expertise in woodworking machinery and industrial solutions",
      icon: "🏆",
    },
    {
      title: "Authorized SCM Dealer",
      description: "Official partnership ensures genuine products, warranty, and factory support",
      icon: "🤝",
    },
    {
      title: "Global Expertise",
      description: "Deep understanding of Middle East and African market needs and business requirements",
      icon: "🌍",
    },
    {
      title: "Complete Service",
      description: "From consultation to installation, maintenance, and ongoing support",
      icon: "🔧",
    },
    {
      title: "Fast Parts Delivery",
      description: "Comprehensive spare parts inventory with rapid delivery across the region",
      icon: "⚡",
    },
    {
      title: "24/7 Ticket Support",
      description: "Round-the-clock technical support to minimize downtime and maximize productivity",
      icon: "📞",
    },
  ];

  return (
    <section className="py-20 bg-industrial-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Sharrouf Bros?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine Italian engineering excellence with local expertise to deliver 
            unmatched woodworking machinery solutions across the Middle East.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workspace?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied customers across the Middle East and Africa who trust 
              Sharrouf Bros for their woodworking machinery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/96171667838" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
