import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    churchName: '',
    message: '',
    emailOptIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 via-purple-50 to-cyan-50 py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-200/30 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-yellow-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Digital Ministry</span> Journey
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your church's online presence? Get in touch and let's discuss how we can help you reach more souls.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-2xl border-2 border-yellow-300/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Pastor John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="pastor@yourcurch.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="churchName" className="block text-sm font-medium text-gray-700 mb-2">
                Church Name *
              </label>
              <input
                type="text"
                id="churchName"
                name="churchName"
                required
                value={formData.churchName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="First Baptist Church of..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your current social media challenges
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="We currently struggle with..."
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="emailOptIn"
                name="emailOptIn"
                checked={formData.emailOptIn}
                onChange={handleChange}
                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="emailOptIn" className="text-sm text-gray-600">
                Yes, I'd like to receive weekly devotional content and church growth tips
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl"
            >
              <span>Send Message & Book Strategy Call</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;