import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pastor Michael Johnson",
      church: "Grace Community Church",
      text: "SLC transformed our online presence completely. We went from sporadic posts to consistent, engaging content that actually drives people to our services. Our online engagement increased by 300% in just two months.",
      rating: 5
    },
    {
      name: "Pastor Sarah Williams",
      church: "New Hope Baptist",
      text: "As a busy pastor with limited tech skills, I was skeptical about social media. SLC made it effortless. They understand our message and values perfectly. Our Sunday attendance has grown by 40% since we started working with them.",
      rating: 5
    },
    {
      name: "Pastor David Chen",
      church: "City Life Church",
      text: "The team at SLC doesn't just create content—they create ministry opportunities. Every post is strategically designed to reach souls and grow our digital congregation. Highly recommend to any pastor serious about online ministry.",
      rating: 5
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 rounded-full blur-3xl animate-pulse delay-1200"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Pastors</span> Are Saying
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped churches across the country grow their digital ministry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-600 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-4">
                <p className="font-bold text-yellow-600">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.church}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;