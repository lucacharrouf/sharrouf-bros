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
                  <p className="text-lg font-semibold">Beirut: +961 71 667 838</p>
                  <p className="text-lg font-semibold">Rachaya: +961 71 667 838</p>
                  <p className="text-industrial-gray">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
                <a 
                  href="https://wa.me/96171667838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="mt-4 bg-italian-green hover:bg-italian-green/90">
                    WhatsApp Now
                  </Button>
                </a>
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
                <a href="mailto:info@sharroufbros.com">
                  <Button variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                    Send Email
                  </Button>
                </a>
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
                    <p className="text-industrial-gray">ICF Building - Mkalles-Mansourieh Main Road - Beirut, Lebanon</p>
                  </div>
                  <div>
                    <p className="font-semibold">Rachaya Service Center</p>
                    <p className="text-industrial-gray">Main Road El Mhaidthe, Rachaya Bekaa, Lebanon</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                  onClick={() => {
                    window.location.href = '/locations';
                  }}
                >
                  More Info
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
              href="https://wa.me/96171667838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              WhatsApp: +961 71 667 838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
