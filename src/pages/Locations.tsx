
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Beirut Showroom & Service Center",
      address: "Industrial District, Sin el Fil, Beirut, Lebanon",
      phone: "+961 1 234 567",
      email: "beirut@sharroufbros.com",
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 8:00 AM - 2:00 PM",
        sunday: "Sunday: Closed"
      },
      description: "Our main showroom featuring the complete range of SCM machinery with full service capabilities.",
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
      address: "Industrial Zone, Rachaya, Bekaa Valley, Lebanon",
      phone: "+961 8 123 456",
      email: "rachaya@sharroufbros.com", 
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
        saturday: "Saturday: 8:00 AM - 1:00 PM",
        sunday: "Sunday: Closed"
      },
      description: "Specialized service center focusing on maintenance, repairs, and spare parts distribution.",
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
    { country: "Lebanon", coverage: "Complete Coverage", description: "Full sales, service, and support" },
    { country: "Syria", coverage: "Sales & Support", description: "Machinery sales and technical support" },
    { country: "Jordan", coverage: "Sales & Parts", description: "New machinery and spare parts delivery" },
    { country: "Iraq", coverage: "Sales Support", description: "Machinery consultation and sales" },
    { country: "Palestine", coverage: "Limited Service", description: "Parts and technical consultation" },
    { country: "Cyprus", coverage: "Sales Support", description: "Equipment sales and basic support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl max-w-3xl mx-auto">
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
                            <div>{location.hours.saturday}</div>
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
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <Button className="bg-industrial-blue hover:bg-industrial-blue/90">
                          Get Directions
                        </Button>
                        <Button variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                          Schedule Visit
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
              Our service network extends across the Middle East, providing support wherever you need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-industrial-dark">{area.country}</span>
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
      <section className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Planning a Visit?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule an appointment to see our machinery in action and discuss your specific requirements with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-italian-green hover:bg-italian-green/90">
              Schedule Showroom Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial-dark">
              Request On-Site Demo
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Beirut Showroom</h3>
              <p className="text-gray-300 mb-2">+961 1 234 567</p>
              <a 
                href="https://wa.me/9611234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                WhatsApp: +961 1 234 567
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Rachaya Service Center</h3>
              <p className="text-gray-300 mb-2">+961 8 123 456</p>
              <a 
                href="https://wa.me/9618123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                WhatsApp: +961 8 123 456
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
