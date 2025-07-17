import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

const Contact = () => {
  const { toast } = useToast();
  const { categories } = useProducts();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    machineCategory: '',
    productionVolume: '',
    projectDetails: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const quoteData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.company,
      machine_category: formData.machineCategory,
      production_volume: formData.productionVolume,
      project_details: formData.projectDetails,
    };

    try {
      const { error } = await supabase
        .from('requested_quotes')
        .insert([quoteData]);

      if (error) throw error;

      toast({
        title: "Quote Request Submitted",
        description: "Thank you! We'll get back to you within 24 hours with a detailed quote.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        machineCategory: '',
        productionVolume: '',
        projectDetails: ''
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      title: "Email Support", 
      icon: Mail,
      primary: "sales@sharroufbros.com",
      secondary: "Response within 24 hours",
      description: "Send detailed inquiries",
      hours: "24/7 Response",
      action: "Send Email",
      color: "bg-industrial-blue"
    },
    {
      title: "WhatsApp Chat",
      icon: Phone,
      primary: "+961 71 667 838",
      secondary: "Instant messaging support",
      description: "Quick questions and support",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM",
      action: "Chat Now",
      color: "bg-green-600"
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
      <section className="bg-[#02294e] text-white py-20">
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
          <div className="flex justify-center">
            {/* Quote Request Form */}
            <Card className="machinery-shadow w-full max-w-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark">Request a Quote</CardTitle>
                <p className="text-industrial-gray">
                  Get pricing for specific machinery and services
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleQuoteSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">First Name *</label>
                      <Input 
                        value={formData.firstName} 
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Your first name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-industrial-dark">Last Name *</label>
                      <Input 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Your last name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Business Email *</label>
                    <Input 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      type="email" 
                      placeholder="your.email@company.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Phone *</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      type="tel" 
                      placeholder="+961 XX XXX XXX" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Company Name *</label>
                    <Input 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Machine Category</label>
                    <Select value={formData.machineCategory} onValueChange={(value) => handleInputChange('machineCategory', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select machinery type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {categories.map(category => (
                          <SelectItem key={category.id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-industrial-dark">Production Volume</label>
                    <Select value={formData.productionVolume} onValueChange={(value) => handleInputChange('productionVolume', value)}>
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
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                      placeholder="Describe your requirements, timeline, and any specific needs..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-italian-green hover:bg-italian-green/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Quote"}
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
              Visit our showrooms and service centers strategically located across Lebanon 
              to serve the entire Middle East region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((location, index) => (
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

      <Footer />
    </div>
  );
};

export default Contact;
