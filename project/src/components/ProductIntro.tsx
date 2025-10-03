import React from 'react';
import { Upload, CreditCard as Edit, TrendingUp, ArrowRight } from 'lucide-react';

interface ProductIntroProps {
  onPageChange: (page: string) => void;
}

const ProductIntro: React.FC<ProductIntroProps> = ({ onPageChange }) => {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-cyan-400" />,
      title: "Upload",
      description: "Upload your sermon or event footage to our shared folder."
    },
    {
      icon: <Edit className="w-12 h-12 text-purple-400" />,
      title: "We Edit",
      description: "We edit, caption, schedule, and optimize it for every platform."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-teal-400" />,
      title: "You Grow",
      description: "You get consistent online growth—without the hassle."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-amber-600/20 to-yellow-600/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Spiritually Led Consulting</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We help churches transform raw footage into spiritually aligned, highly engaging short-form content—posted consistently across all major platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full transform -translate-x-1/2 translate-x-12 z-10">
                  <ArrowRight className="w-8 h-8 text-yellow-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-white p-8 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Message from the Founder</h3>
            <blockquote className="text-lg italic text-white/90 max-w-4xl mx-auto leading-relaxed">
              "This business started with prayer, purpose, and a desire to help churches stay relevant in a digital world without compromising their message. If you're called to shepherd people, we're called to support you."
            </blockquote>
            <p className="text-white font-semibold mt-4">— The Spiritually Led Consulting Team</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-6 text-white">Ready to amplify your ministry online?</h4>
            <button onClick={() => onPageChange('book')} className="bg-gray-900 text-yellow-400 hover:bg-gray-800 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2 border border-yellow-500">
              <span>Book Your Free Strategy Call Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;