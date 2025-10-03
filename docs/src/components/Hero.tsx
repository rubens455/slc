import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onPageChange: (page: string) => void;
}


const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  const benefits = [
    "Grow your digital ministry through daily posting on Instagram, TikTok, YouTube, Facebook, and more.",
    "We take your raw sermon footage and turn it into optimized short-form content with captions and keywords.",
    "Save hours every week with our 'set it and forget it' approach—record once, we handle the rest.",
    "We manage your comments and drive traffic back to your church's website or online giving platform.",
    "Everything is aligned with Christian values—nothing generic or off-brand."
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Let Us Handle Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Social Media</span> So You Can Focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Ministry</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We help growth-minded churches turn sermon recordings into high-impact, consistent social media content. Designed for pastors who are spiritually led and success driven.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 text-left bg-gradient-to-r from-gray-900/80 to-black/60 p-4 rounded-lg border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 shadow-lg">
              <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <p className="text-gray-200">{benefit}</p>
            </div>
          ))}
        </div>

        <button onClick={() => onPageChange("book")} className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/25 inline-flex items-center space-x-2 border border-yellow-400/30">
          <span>Get Your Free Strategy Call</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;