import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import RequestQuoteForm from "@/components/RequestQuoteForm";

// Custom hook for counting animation
const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return count;
};

const HeroSection = () => {
  const countries = [
    { name: "Lebanon", flag: "🇱🇧" },
    { name: "Syria", flag: "🇸🇾" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Jordan", flag: "🇯🇴" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Iraq", flag: "🇮🇶" },
    { name: "Morocco", flag: "🇲🇦" },
    { name: "Tunisia", flag: "🇹🇳" }
  ];

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  // Counting animations for statistics
  const yearsExperience = useCountAnimation(15, 1500);
  const machinesSold = useCountAnimation(5000, 2000);
  const authorizedDealer = useCountAnimation(100, 1000);
  const expertSupport = useCountAnimation(100, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCountryIndex((prevIndex) =>
          prevIndex === countries.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [countries.length]);

  useEffect(() => {
    const checkConnectionSpeed = () => {
      if (typeof navigator !== 'undefined' && 'connection' in navigator) {
        // @ts-ignore
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection && connection.effectiveType) {
          const type = connection.effectiveType;
          if (type === "2g" || type === "3g" || type.startsWith("slow")) {
            setShowVideo(false);
          }
        }
      } else {
        // Fallback: try to load a tiny image and measure time
        const start = Date.now();
        const img = new window.Image();
        img.onload = () => {
          const duration = Date.now() - start;
          if (duration > 2000) setShowVideo(false);
        };
        img.onerror = () => setShowVideo(false);
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    checkConnectionSpeed();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-industrial-dark via-industrial-blue to-industrial-dark min-h-[80vh] flex items-center py-16 md:py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 animate-slide-in-left">
              Woodworking Technology in
              <span className="block">
                <span
                  className={`inline-block transition-all duration-600 ease-in-out font-extrabold ${
                    isTransitioning
                      ? 'opacity-0 transform translate-y-4 scale-95'
                      : 'opacity-100 transform translate-y-0 scale-100'
                  }`}
                  style={{
                    minWidth: '280px',
                    display: 'inline-block',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  {countries[currentCountryIndex].flag} {countries[currentCountryIndex].name}
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl">
              Authorized SCM dealer providing state of art Italian woodworking solutions,
              complete service support, and genuine spare parts across Lebanon, the Middle East, and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8 md:mb-12">
              <Link to="/products">
                <Button size="lg" className="bg-white text-industrial-dark hover:bg-gray-100 text-lg px-8 py-4">
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industrial-dark text-lg px-8 py-4">
                    Get Free Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-industrial-dark">Request a Free Quote</DialogTitle>
                  </DialogHeader>
                  <RequestQuoteForm />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{yearsExperience}+</div>
                <div className="text-sm md:text-base text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{machinesSold}+</div>
                <div className="text-sm md:text-base text-gray-300">Machines Sold</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{authorizedDealer}%</div>
                <div className="text-sm md:text-base text-gray-300">Authorized Dealer</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{expertSupport}%</div>
                <div className="text-sm md:text-base text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video or Fallback Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                {showVideo ? (
                  <iframe
                    src="https://www.youtube.com/embed/Zb7GfddyqE8?start=65&autoplay=1&mute=1"
                    title="Woodworking Technology"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src="/mkalles.jpg"
                    alt="Mkalles fallback"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
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
