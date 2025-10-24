import React from 'react';

const FreeResources: React.FC = () => {
  const resourceUrl = 'https://spirtuallyledconsulting.kit.com/52c08168a5';

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8 overflow-hidden">
      {/* Animated background elements (same as Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-6">Free Resources</h1>
        <p className="text-gray-300 mb-8">Explore our free tools and downloadables to help your church's digital ministry.</p>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-yellow-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">7-Day Content Calendar</h2>
                <p className="text-gray-300 mt-2">A plug-and-play weekly content calendar to keep your ministry consistent and engaging.</p>
              </div>
              <div>
                <a
                  href={resourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 inline-flex items-center px-5 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold rounded-lg shadow-md"
                >
                  Get the 7-Day Content Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
