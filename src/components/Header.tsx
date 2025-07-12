
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.locations'), href: "/locations" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-industrial-gray">
              <Mail className="h-4 w-4" />
              <span>info@sharroufbros.com</span>
            </div>
            <div className="flex items-center space-x-2 text-industrial-gray">
              <Phone className="h-4 w-4" />
              <span>+961 1 234 567</span>
            </div>
          </div>
          <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <span className="text-xs text-industrial-gray">{t('nav.language')}</span>
            <Button 
              variant={language === 'en' ? 'default' : 'ghost'} 
              size="sm" 
              className="text-xs px-2 py-1"
              onClick={() => setLanguage('en')}
            >
              EN
            </Button>
            <Button 
              variant={language === 'ar' ? 'default' : 'ghost'} 
              size="sm" 
              className="text-xs px-2 py-1"
              onClick={() => setLanguage('ar')}
            >
              العربية
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className={`flex justify-between items-center py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <img 
              src="/images/SBlogo.jpeg" 
              alt="Sharrouf Bros Logo" 
              className="w-12 h-12 object-cover rounded-t-md"
            />
            <div className={isRTL ? 'text-right' : ''}>
              <h1 className="text-xl font-bold text-industrial-dark">{t('company.name')}</h1>
              <p className="text-sm text-industrial-gray">{t('company.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-industrial-blue ${
                  isActive(item.href) ? "text-industrial-blue" : "text-industrial-gray"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-industrial-blue hover:bg-industrial-blue/90">
              {t('nav.getQuote')}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-industrial-blue ${
                      isActive(item.href) ? "text-industrial-blue" : "text-industrial-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-industrial-blue hover:bg-industrial-blue/90 mt-4">
                  {t('nav.getQuote')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
