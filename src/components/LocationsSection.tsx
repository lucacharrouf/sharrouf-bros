import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Beirut Showroom",
      address: "ICF Building - Mkalles-Mansourieh Main Road - Beirut, Lebanon",
      phone: "+961 71 667 838",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      description: "Main showroom and service center with full machinery display",
    },
    {
      name: "Rachaya Service Center",
      address: "Main Road El Mhaidthe, Rachaya Bekaa, Lebanon", 
      phone: "+961 71 667 838",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      description: "Service center specializing in maintenance and spare parts",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Our Locations
          </h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            Visit our showrooms and service centers strategically located across Lebanon 
            to serve the entire Middle East region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="machinery-shadow hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-industrial-dark">
                  <MapPin className="h-6 w-6 text-industrial-blue" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-industrial-gray">{location.description}</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-industrial-gray mt-1" />
                    <span className="text-sm text-industrial-gray">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-industrial-gray" />
                    <span className="text-sm text-industrial-gray">{location.phone}</span>
                  </div>
                  <div className="text-sm text-industrial-gray whitespace-pre-line">
                    <strong>Hours:</strong><br />
                    {location.hours}
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                    onClick={() => {
                      if (location.name === "Rachaya Service Center") {
                        window.open('https://maps.app.goo.gl/xTbmC93tazsXx3wc7', '_blank');
                      } else {
                        const address = encodeURIComponent(location.address);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                      }
                    }}
                  >
                    View on Map
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
