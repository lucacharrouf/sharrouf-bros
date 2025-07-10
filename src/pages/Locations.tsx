import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Beirut Showroom & Service Center",
      address: "ICF Building - Mkalles-Mansourieh Main Road - Beirut, Lebanon",
      phone: "+961 71 667 838",
      email: "info@sharroufbros.com",
      hours: {
        weekdays: "Monday - Saturday: 8:00 AM - 6:00 PM",
        saturday: "",
        sunday: "Sunday: Closed"
      },
      description: "Main showroom and service center with full machinery display",
      features: [
        "Complete Machinery Showroom",
        "Full Service & Repair Center", 
        "Parts Warehouse",
        "Customer Training Facility",
        "Technical Consultation",
        "Financing Department"
      ],
      image: "https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=600&h=400&fit=crop",
      coordinates: { lat: 33.8938, lng: 35.5018 }
    },
    {
      name: "Rachaya Service Center",
      address: "Main Road El Mhaidthe, Rachaya Bekaa, Lebanon",
      phone: "+961 71 667 838",
      email: "info@sharroufbros.com", 
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "",
        sunday: "Sunday: Closed"
      },
      description: "Service center specializing in maintenance and spare parts",
      features: [
        "Specialized Service Center",
        "Emergency Repair Services",
        "Large Parts Inventory", 
        "Mobile Service Units",
        "Regional Distribution Hub",
        "Technical Training"
      ],
      image: "https://images.unsplash.com/photo-1587560699386-d8f3a8b0b4ea?w=600&h=400&fit=crop",
      coordinates: { lat: 33.5067, lng: 35.8431 }
    }
  ];

  const serviceAreas = [
    { region: "Middle East", coverage: "Complete Coverage", description: "Full sales, service, and support across all Middle Eastern countries" },
    { region: "Africa", coverage: "Sales & Support", description: "Machinery sales and technical support throughout Africa" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#02294e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Locations</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Strategically positioned across Lebanon to serve the entire Middle East region 
            with premium Italian woodworking machinery and comprehensive support services.
          </p>
        </div>
      </section>

      {/* Main Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Visit Our Facilities</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Two strategically located facilities providing complete coverage across Lebanon and the region
            </p>
          </div>

          <div className="space-y-16">
            {locations.map((location, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="machinery-shadow overflow-hidden">
                    <div className="relative">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="machinery-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl text-industrial-dark">{location.name}</CardTitle>
                      <p className="text-industrial-gray">{location.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Contact Info */}
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-industrial-blue mt-1" />
                          <span className="text-industrial-gray">{location.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-industrial-blue" />
                          <span className="text-industrial-gray">{location.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-industrial-blue" />
                          <span className="text-industrial-gray">{location.email}</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 text-industrial-blue mt-1" />
                          <div className="text-industrial-gray">
                            <div>{location.hours.weekdays}</div>
                            {location.hours.saturday && <div>{location.hours.saturday}</div>}
                            <div>{location.hours.sunday}</div>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-industrial-dark mb-3">Available Services:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {location.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <span className="text-italian-green font-bold">✓</span>
                              <span className="text-sm text-industrial-gray">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4">
                        <Button 
                          className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                          onClick={() => {
                            const address = encodeURIComponent(location.address);
                            window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                          }}
                        >
                          View on Map
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Regional Coverage</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Our service network extends across the Middle East and Africa, providing support wherever you need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-industrial-dark">{area.region}</span>
                    <span className="text-sm bg-industrial-blue text-white px-3 py-1 rounded-full">
                      {area.coverage}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-gray">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#02294e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Planning a Visit?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule an appointment to see our machinery and discuss your specific requirements with our experts.
          </p>
          <div className="flex justify-center mb-12">
            <a 
              href="https://wa.me/96171667838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block"
            >
              Schedule an Appointment via WhatsApp
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Beirut Showroom</h3>
              <p className="text-gray-300">+961 71 667 838</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Rachaya Showroom</h3>
              <p className="text-gray-300">+961 71 667 838</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
