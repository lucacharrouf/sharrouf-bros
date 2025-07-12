import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-industrial-dark via-industrial-blue to-industrial-dark min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className={`relative container mx-auto px-4 text-center text-white ${isRTL ? 'rtl' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text italian-gradient">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link to="/products">
              <Button size="lg" className="bg-white text-industrial-dark hover:bg-gray-100 text-lg px-8 py-4">
                {t('hero.viewProducts')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industrial-dark text-lg px-8 py-4">
                {t('hero.getFreeQuote')}
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-300">{t('hero.yearsExperience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-gray-300">{t('hero.machinesSold')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300">{t('hero.authorizedDealer')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300">{t('hero.expertSupport')}</div>
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
