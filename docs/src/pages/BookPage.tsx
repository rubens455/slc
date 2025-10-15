import React, { useState, useRef } from 'react';
import { Calendar, Clock, Users, CheckCircle, Phone, ArrowRight } from 'lucide-react';

const BookPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    churchName: '',
    churchSize: '',
    currentChallenges: '',
    timeline: '',
    budget: '',
    preferredTime: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Prepare FormData
  const formDataToSend = new FormData();
  formDataToSend.append('selectedService', selectedService);
  Object.entries(formData).forEach(([key, value]) => {
    formDataToSend.append(key, value as string);
  });
  formDataToSend.append('submittedAt', new Date().toISOString());

  // Send to Zapier webhook
  fetch('https://hooks.zapier.com/hooks/catch/23728245/u9rt7ln/', {
    method: 'POST',
    body: formDataToSend
  })
  .then(response => {
    if (response.ok) {
      alert("Booking submitted successfully! We'll contact you within 24 hours.");
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        churchName: '',
        churchSize: '',
        currentChallenges: '',
        timeline: '',
        budget: '',
        preferredTime: '',
        additionalInfo: ''
      });
      setSelectedService('');
    } else {
      throw new Error('Failed to submit booking');
    }
  })
  .catch(error => {
    console.error('Error submitting booking:', error);
    alert('There was an error submitting your booking. Please try again or call us directly.');
  });
};
  const services = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      price: 'FREE',
      duration: '30 minutes',
      description: 'Perfect for churches just starting their digital transformation journey',
      features: [
        'Assessment of current digital presence',
        'Identification of immediate opportunities',
        'Custom roadmap recommendations',
        'Resource and timeline planning',
        'No obligation consultation'
      ],
      ideal: 'Churches exploring digital ministry options'
    },
    {
      id: 'strategy',
      title: 'Strategy Deep Dive',
      price: '$197',
      duration: '90 minutes',
      description: 'Comprehensive strategy session for churches ready to take action',
      features: [
        'Complete digital ministry audit',
        'Detailed implementation roadmap',
        'Platform and tool recommendations',
        'Content strategy framework',
        '30-day action plan',
        'Follow-up support email'
      ],
      ideal: 'Churches ready to implement within 30 days'
    },
    {
      id: 'workshop',
      title: 'Team Workshop',
      price: '$597',
      duration: '3 hours',
      description: 'Hands-on training session for your entire ministry team',
      features: [
        'Team training on digital tools',
        'Content creation workshop',
        'Social media strategy session',
        'Website optimization review',
        'Ongoing support plan',
        'Resource library access',
        '90-day implementation guide'
      ],
      ideal: 'Churches with dedicated ministry teams'
    }
  ];

  const getButtonText = () => {
    if (!selectedService) return 'Select a Service Above';
    const service = services.find(s => s.id === selectedService);
    return service?.price === 'FREE' ? 'Book Free Discovery Call' : `Book ${service?.title} - ${service?.price}`;
  };

  const bookingRef = useRef<HTMLDivElement | null>(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Strategy</span> Session
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Choose the consultation that best fits your church's needs and timeline
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-yellow-600" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-yellow-600" />
              <span>Faith-Based Approach</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-yellow-600" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation</h2>
            <p className="text-gray-300">Select the option that best matches your church's current needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedService === service.id 
                    ? 'border-yellow-500 ring-2 ring-yellow-500/30' 
                    : 'border-yellow-500/30 hover:border-yellow-400'
                }`}
                onClick={() => {
                  setSelectedService(service.id);
                  // scroll to booking form
                  scrollToBooking();
                }}
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      {service.id === 'discovery' && <Calendar className="w-8 h-8 text-white" />}
                      {service.id === 'strategy' && <Clock className="w-8 h-8 text-white" />}
                      {service.id === 'workshop' && <Users className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 mb-4">{service.duration}</div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-4">
                    <strong>Ideal for:</strong> {service.ideal}
                  </div>
                  <div className={`w-4 h-4 mx-auto rounded-full border-2 ${
                    selectedService === service.id 
? 'bg-yellow-500 border-yellow-500' 
                      : 'border-gray-600'
                  }`}>
                    {selectedService === service.id && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Booking Form */}
  <section ref={bookingRef} id="booking-form" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Complete Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Booking</span>
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the details below and we'll confirm your session within 24 hours
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500"
                    placeholder="(307) 312-9076"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500"
                    placeholder="First Baptist Church of..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="churchSize" className="block text-sm font-medium text-gray-200 mb-2">
                    Church Size *
                  </label>
                  <select
                    id="churchSize"
                    name="churchSize"
                    required
                    value={formData.churchSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white"
                  >
                    <option value="">Select church size</option>
                    <option value="under-100">Under 100 members</option>
                    <option value="100-300">100-300 members</option>
                    <option value="300-500">300-500 members</option>
                    <option value="500-1000">500-1000 members</option>
                    <option value="over-1000">Over 1000 members</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-200 mb-2">
                    Implementation Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (this week)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-200 mb-2">
                  Current Digital Ministry Challenges *
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  required
                  rows={3}
                  value={formData.currentChallenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                  placeholder="Describe your current challenges with digital ministry, online presence, or technology..."
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-200 mb-2">
                  Preferred Meeting Time
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                  placeholder="e.g., Weekday mornings, Tuesday afternoons, etc."
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-200 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-gray-900/80 text-white placeholder-gray-400"
                  placeholder="Any additional information you'd like us to know before our session..."
                />
              </div>

              <button
                type="submit"
                disabled={!selectedService}
                className={`w-full font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl ${
                  selectedService
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>{getButtonText()}</span>
                {selectedService && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Have questions before booking? We're here to help!
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
              <Phone className="w-4 h-4" />
              <span>Call (307) 312-9076</span>
            </button>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            What Happens <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Next?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold text-white mb-2">Confirmation</h3>
              <p className="text-gray-300">We'll confirm your booking within 24 hours and send calendar invite</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold text-white mb-2">Preparation</h3>
              <p className="text-gray-300">We'll send a pre-session questionnaire to maximize our time together</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold text-white mb-2">Session</h3>
              <p className="text-gray-300">We'll meet via video call and create your custom digital ministry plan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;