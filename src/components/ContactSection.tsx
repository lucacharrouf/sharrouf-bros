
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            Ready to discuss your woodworking machinery needs? Contact our experts today 
            for personalized consultation and competitive quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="machinery-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-industrial-dark">
                  <Phone className="h-6 w-6 text-industrial-blue" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Beirut: +961 1 234 567</p>
                  <p className="text-lg font-semibold">Rachaya: +961 8 123 456</p>
                  <p className="text-industrial-gray">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
                <Button className="mt-4 bg-italian-green hover:bg-italian-green/90">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="machinery-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-industrial-dark">
                  <Mail className="h-6 w-6 text-industrial-blue" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">info@sharroufbros.com</p>
                <p className="text-industrial-gray mb-4">
                  Send us your requirements and we'll respond within 24 hours
                </p>
                <Button variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="machinery-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-industrial-dark">
                  <MapPin className="h-6 w-6 text-industrial-blue" />
                  Visit Our Showrooms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Beirut Showroom</p>
                    <p className="text-industrial-gray">Industrial District, Beirut, Lebanon</p>
                  </div>
                  <div>
                    <p className="font-semibold">Rachaya Service Center</p>
                    <p className="text-industrial-gray">Industrial Zone, Rachaya, Lebanon</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="machinery-shadow">
            <CardHeader>
              <CardTitle className="text-industrial-dark">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-industrial-dark">Email</label>
                  <Input type="email" placeholder="your.email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-industrial-dark">Phone</label>
                  <Input type="tel" placeholder="+961 XX XXX XXX" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-industrial-dark">Company</label>
                  <Input placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-industrial-dark">Machine Type of Interest</label>
                  <Input placeholder="Panel saw, Edge bander, CNC router, etc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-industrial-dark">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, production volume, and timeline..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <div className="bg-green-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6">Chat with our experts on WhatsApp for instant support</p>
            <a 
              href="https://wa.me/9611234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
              </svg>
              WhatsApp: +961 1 234 567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
