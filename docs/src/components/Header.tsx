import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-gray-50 to-white text-gray-900 py-4 px-4 lg:px-8 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">SLC</span> 
         <span className="ml-2 text-gray-900"></span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-gray-700">(307) 312-9076</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-gray-700">info@spirituallyledconsulting.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;