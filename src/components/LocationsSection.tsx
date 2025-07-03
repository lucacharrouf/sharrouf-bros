
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Beirut Showroom",
      address: "Industrial District, Beirut, Lebanon",
      phone: "+961 1 234 567",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 2:00 PM",
      description: "Main showroom and service center with full machinery display",
    },
    {
      name: "Rachaya Service Center",
      address: "Industrial Zone, Rachaya, Lebanon", 
      phone: "+961 8 123 456",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM",
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                    View on Map
                  </Button>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
