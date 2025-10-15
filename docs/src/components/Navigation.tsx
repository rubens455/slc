import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import slclogo from "../../images/SLCLOGO.png"

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-4 lg:px-8 border-b border-yellow-500/20 sticky top-0 z-50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500"></span> 
          <button
            onClick={() => {
              onPageChange('home');
              setIsMenuOpen(false);
            }}
            aria-label="Go to home"
            className="flex items-center p-0 m-0 focus:outline-none"
          >
            <span className="ml-2 text-white sr-only">Home</span>
            <img src={slclogo} alt="Spiritually Led Consulting logo" className="h-30 w-28 cursor-pointer" />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            {[
              { label: 'Home', value: 'home' },
              { label: 'Book', value: 'book' }
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`font-medium transition-all duration-300 hover:text-yellow-400 ${
                  currentPage === item.value ? 'text-yellow-400 font-bold' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-gray-300">(307) 312-9076</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-gray-300">info@spirituallyledconsulting.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-yellow-500/20 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {[
              { label: 'Home', value: 'home' },
              { label: 'Book', value: 'book' }
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onPageChange(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left font-medium transition-all duration-300 hover:text-yellow-400 ${
                  currentPage === item.value ? 'text-yellow-400 font-bold' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-yellow-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span>(307) 312-9076</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span>hello@spirituallyledconsulting.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;