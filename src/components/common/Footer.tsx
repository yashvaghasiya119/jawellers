import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14213D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Lumière</h3>
            <p className="text-gray-300 mb-4">
              Exquisite jewelry crafted with passion and precision, adorning you with 
              timeless elegance for life's most precious moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Collection</h3>
            <ul className="space-y-2">
              {['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Watches'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products?category=${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-[#D4AF37] flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-[#D4AF37] flex-shrink-0" size={16} />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-[#D4AF37] flex-shrink-0" size={16} />
                <span className="text-gray-300">contact@lumierejewelry.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lumière Jewelry. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link to="#" className="hover:text-[#D4AF37] transition-colors duration-300">Privacy Policy</Link>
            {' | '}
            <Link to="#" className="hover:text-[#D4AF37] transition-colors duration-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;