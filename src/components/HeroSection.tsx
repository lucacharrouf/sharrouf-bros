import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-industrial-dark via-industrial-blue to-industrial-dark min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            Woodworking Technology
            <span className="block text-transparent bg-clip-text italian-gradient">
              for the Middle East
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Authorized SCM dealer providing state of art Italian woodworking solutions, 
            complete service support, and genuine spare parts across Lebanon, the Middle East, and Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button size="lg" className="bg-white text-industrial-dark hover:bg-gray-100 text-lg px-8 py-4">
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industrial-dark text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-gray-300">Machines Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300">Authorized Dealer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
