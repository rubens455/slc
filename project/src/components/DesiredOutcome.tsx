import React from 'react';
import { TrendingUp, Heart, Shield } from 'lucide-react';

const DesiredOutcome = () => {
  const outcomes = [
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: "Consistent Growth",
      description: "Consistent content every week, reaching thousands more people online—without you lifting a finger."
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-400" />,
      title: "Thriving Community",
      description: "A growing online community, increased Sunday attendance, and stronger engagement across platforms."
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-400" />,
      title: "Peace of Mind",
      description: "Peace of mind knowing your church is present online, expanding its reach, and staying spiritually aligned."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Imagine Your Church <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Thriving Online</span>—Without the Burnout
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/60 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <div className="flex justify-center mb-6">
                {outcome.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">
                {outcome.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-8 rounded-xl text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-white">A New Paradigm</h3>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-white">
            It's time to stop guessing and start growing. Spiritually Led Consulting helps churches focus on what matters most—ministering—while we handle the digital side.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesiredOutcome;