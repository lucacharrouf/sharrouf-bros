
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#02294e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <img 
                  src="/images/SBlogo.jpeg" 
                  alt="Sharrouf Bros Logo" 
                  className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sharrouf Bros</h3>
                <p className="text-sm text-gray-300 font-medium">SCM Authorized Dealer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Premium Italian woodworking machinery for the Middle East. 
              Over 15 years of excellence in sales, service, and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-white transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Machinery Sales</li>
              <li>Spare Parts</li>
              <li>Maintenance & Repair</li>
              <li>Technical Support</li>
              <li>Installation</li>
              <li>Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-industrial-blue mt-1" />
                <div>
                  <p className="text-white font-medium">Beirut: +961 71 667 838</p>
                  <p className="text-gray-300 text-sm">Rachaya: +961 71 667 838</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-industrial-blue mt-1" />
                <div>
                  <p className="text-white">info@sharroufbros.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-industrial-blue mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Beirut & Rachaya, Lebanon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Sharrouf Bros. All rights reserved. | SCM Authorized Dealer
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
