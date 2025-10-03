import React from 'react';
import { Clock, TrendingDown, Users } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <Clock className="w-12 h-12 text-red-400" />,
      quote: "I barely have time to preach—how am I supposed to post every day?",
      description: "Between pastoring, preaching, and family responsibilities, managing content often falls through the cracks."
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-red-400" />,
      quote: "We post sometimes, but no one's really engaging.",
      description: "Inconsistent posting and unedited content make it hard to build momentum, even with a strong message."
    },
    {
      icon: <Users className="w-12 h-12 text-red-400" />,
      quote: "We don't have a media team or fancy cameras.",
      description: "Most churches don't need expensive gear—they need guidance, structure, and high-quality editing."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-600/30 to-amber-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-600/20 to-yellow-600/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Feeling <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">Overwhelmed</span> Trying to Grow Your Church Online?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                {point.icon}
              </div>
              <blockquote className="text-xl font-semibold text-white mb-4 italic">
                "{point.quote}"
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-white p-8 rounded-xl text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-white">The Truth Is...</h3>
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
            You don't need to be a tech expert or have a big team. You just need the right partner who understands your message, shares your values, and can turn what you already have into something powerful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;