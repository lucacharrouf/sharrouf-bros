
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
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
              <span>+961 71 667 838</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/images/SBlogo.jpeg" 
                alt="Sharrouf Bros Logo" 
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-industrial-dark group-hover:text-industrial-blue transition-colors duration-300">
                Sharrouf Bros
              </h1>
              <p className="text-sm text-industrial-gray font-medium">SCM Authorized Dealer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-industrial-blue hover:bg-industrial-blue/90">
                  Get Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-industrial-dark">Request a Free Quote</DialogTitle>
                </DialogHeader>
                <RequestQuoteForm />
              </DialogContent>
            </Dialog>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-industrial-blue hover:bg-industrial-blue/90 mt-4">
                      Get Quote
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
