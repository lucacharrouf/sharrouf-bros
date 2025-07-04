import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      title: "Phone Support",
      icon: Phone,
      primary: "+961 1 234 567 (Beirut)",
      secondary: "+961 8 123 456 (Rachaya)", 
      description: "Speak directly with our experts",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      action: "Call Now",
      color: "bg-italian-green"
    },
    {
      title: "Email Support", 
      icon: Mail,
      primary: "info@sharroufbros.com",
      secondary: "Response within 24 hours",
      description: "Send detailed inquiries",
      hours: "24/7 Response",
      action: "Send Email",
      color: "bg-industrial-blue"
    },
    {
      title: "WhatsApp Chat",
      icon: Phone,
      primary: "+961 1 234 567",
      secondary: "Instant messaging support",
      description: "Quick questions and support",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM",
      action: "Chat Now",
      color: "bg-green-600"
    },
    {
      title: "Visit Showrooms",
      icon: MapPin,
      primary: "Beirut & Rachaya",
      secondary: "See machinery in action",
      description: "Schedule a personal visit",
      hours: "By appointment",
      action: "Schedule Visit",
      color: "bg-industrial-gray"
    }
  ];

  const inquiryTypes = [
    "New Machinery Purchase",
    "Spare Parts Request", 
    "Service & Maintenance",
    "Technical Support",
    "Financing Options",
    "Training Programs",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Ready to discuss your woodworking machinery needs? Our experts are here to help 
            with personalized consultation, competitive quotes, and comprehensive support.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Get In Touch</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <CardHeader>
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-industrial-dark">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-industrial-dark">{method.primary}</p>
                  <p className="text-sm text-industrial-gray">{method.secondary}</p>
                  <p className="text-industrial-gray">{method.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-industrial-gray">
                    <Clock className="h-4 w-4" />
                    <span>{method.hours}</span>
                  </div>
                  <Button className={`w-full ${method.color} hover:opacity-90`}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <Card className="machinery-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark">Send Us a Message</CardTitle>
                <p className="text-industrial-gray">
                  General inquiries and information requests
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Email *</label>
                    <Input type="email" placeholder="your.email@company.com" required />
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
                    <label className="text-sm font-medium text-industrial-dark">Inquiry Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button className="w-full bg-industrial-blue hover:bg-industrial-blue/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quote Request Form */}
            <Card className="machinery-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark">Request a Quote</CardTitle>
                <p className="text-industrial-gray">
                  Get pricing for specific machinery and services
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Business Email *</label>
                    <Input type="email" placeholder="your.email@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Phone *</label>
                    <Input type="tel" placeholder="+961 XX XXX XXX" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Company Name *</label>
                    <Input placeholder="Your company name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Machine Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select machinery type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="panel-saws">Panel Saws</SelectItem>
                        <SelectItem value="edge-banders">Edge Banders</SelectItem>
                        <SelectItem value="cnc-routers">CNC Routers</SelectItem>
                        <SelectItem value="boring-machines">Boring Machines</SelectItem>
                        <SelectItem value="moulders">Moulders</SelectItem>
                        <SelectItem value="sanders">Sanders</SelectItem>
                        <SelectItem value="multiple">Multiple Machines</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Production Volume</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select production volume" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="small">Small (1-10 pieces/day)</SelectItem>
                        <SelectItem value="medium">Medium (10-50 pieces/day)</SelectItem>
                        <SelectItem value="large">Large (50+ pieces/day)</SelectItem>
                        <SelectItem value="industrial">Industrial Scale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Project Details *</label>
                    <Textarea 
                      placeholder="Describe your requirements, timeline, and any specific needs..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button className="w-full bg-italian-green hover:bg-italian-green/90">
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Our Locations</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Visit our showrooms to see our machinery in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Beirut Showroom",
                address: "Industrial District, Sin el Fil, Beirut, Lebanon",
                phone: "+961 1 234 567",
                email: "beirut@sharroufbros.com",
                hours: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 2:00 PM",
                image: "https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=400&h=300&fit=crop"
              },
              {
                name: "Rachaya Service Center", 
                address: "Industrial Zone, Rachaya, Bekaa Valley, Lebanon",
                phone: "+961 8 123 456",
                email: "rachaya@sharroufbros.com",
                hours: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM",
                image: "https://images.unsplash.com/photo-1587560699386-d8f3a8b0b4ea?w=400&h=300&fit=crop"
              }
            ].map((location, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-industrial-dark">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-industrial-blue mt-1" />
                      <span className="text-industrial-gray text-sm">{location.address}</span>
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
                      <span className="text-industrial-gray text-sm whitespace-pre-line">{location.hours}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button className="bg-industrial-blue hover:bg-industrial-blue/90">
                      Get Directions
                    </Button>
                    <Button variant="outline" className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white">
                      Schedule Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-italian-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For urgent technical support or emergency parts requests, contact us immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+9611234567" 
              className="bg-white text-italian-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: +961 1 234 567
            </a>
            <a 
              href="https://wa.me/9611234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
              </svg>
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
