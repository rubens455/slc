import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    churchName: '',
    urgency: '',
    message: '',
    emailOptIn: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Phone Support",
      description: "Speak directly with our ministry consultants for immediate guidance and support.",
      contact: "(555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email Support",
      description: "Send us detailed questions and we'll respond within 24 hours with comprehensive answers.",
      contact: "hello@spirituallyledconsulting.com",
      availability: "24/7 - Response within 24hrs"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Emergency Support",
      description: "For urgent ministry needs requiring immediate attention and crisis support.",
      contact: "Emergency Hotline: (555) 911-HELP",
      availability: "24/7 Emergency Line"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to transform your church's digital presence? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border-2 border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{method.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{method.description}</p>
                <p className="font-semibold text-yellow-600">{method.contact}</p>
                <p className="text-sm text-gray-400 mt-2">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Message</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 p-8 rounded-xl border border-yellow-400/30 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                    placeholder="Pastor John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                    placeholder="pastor@yourcurch.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="churchName" className="block text-sm font-medium text-gray-200 mb-2">
                    Church Name *
                  </label>
                  <input
                    type="text"
                    id="churchName"
                    name="churchName"
                    required
                    value={formData.churchName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                    placeholder="First Baptist Church of..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-200 mb-2">
                  How urgent is your need? *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white"
                >
                  <option value="">Select urgency level</option>
                  <option value="emergency">Emergency - Need immediate assistance</option>
                  <option value="immediate">Immediate - Need to start this week</option>
                  <option value="soon">Soon - Within the next month</option>
                  <option value="planning">Planning - Within the next 3 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Tell us about your current situation and goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                  placeholder="We currently struggle with... Our goals are to..."
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="emailOptIn"
                  name="emailOptIn"
                  checked={formData.emailOptIn}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-500 border-gray-600 rounded focus:ring-yellow-500 bg-gray-900"
                />
                <label htmlFor="emailOptIn" className="text-sm text-gray-300">
                  Yes, I'd like to receive weekly devotional content and church growth tips
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Immediate</span> Help?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
              <Phone className="w-5 h-5" />
              <span>Call Now: (555) 123-4567</span>
            </button>
            <button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
              <Calendar className="w-5 h-5" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;