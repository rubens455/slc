import React from 'react';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import DesiredOutcome from '../components/DesiredOutcome';
import ProductIntro from '../components/ProductIntro';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      <Hero onPageChange={onPageChange}  />
      <PainPoints />
      <DesiredOutcome />
      <ProductIntro onPageChange={onPageChange} />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Digital Ministry</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of churches already growing their online presence with our proven system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => onPageChange('book')}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onPageChange('book')}
              className="bg-gray-900 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 border-2 border-yellow-500 hover:border-yellow-400 inline-flex items-center justify-center space-x-2"
            >
              <span>Learn More About Us</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-200">No Long-Term Contracts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-200">Faith-Based Approach</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-200">Proven Results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;