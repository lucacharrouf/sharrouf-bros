
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SCMPartnershipSection from "@/components/SCMPartnershipSection";
import LocationsSection from "@/components/LocationsSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SCMPartnershipSection />
        <LocationsSection />
        <ServicesSection />
        <ProductsShowcase />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
