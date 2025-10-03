import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4 lg:px-8 border-t border-yellow-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">SLC</span> Spiritually Led Consulting
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Helping churches amplify their ministry through strategic social media management. 
              We handle the digital side so you can focus on what matters most—ministering to your congregation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/spirituallyledconsulting/#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Strategy Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span>(307) 312-9076</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span>info@spirituallyledconsulting.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-600" />
                <span>Serving Churches Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Spiritually Led Consulting. All rights reserved. | Built with faith and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;