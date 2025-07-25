import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

const ContactSection = () => {
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
                  <p className="text-lg font-semibold">Rachaya: +961 3 667 838</p>
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
                  className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Quote"}
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
