import React from 'react';
import { Users, Heart, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Spiritually Led Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Empowering churches and ministries to thrive in the digital age through faith-centered marketing strategies and authentic online presence.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Story</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded by a team of marketing professionals and ministry leaders, Spiritual Life Consulting was born from a simple observation: churches were struggling to connect with their communities online while maintaining their authentic spiritual message.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We saw pastors spending countless hours trying to figure out social media, website design, and digital marketing instead of focusing on what they do best - shepherding their flock and spreading God's word.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                That's when we knew we had to bridge the gap between faith and digital marketing, creating strategies that honor both spiritual authenticity and marketing effectiveness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30">
              <div className="text-center">
                <Heart className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To help churches and ministries grow their digital presence while staying true to their spiritual calling, creating authentic connections that lead to transformed lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unique blend of marketing expertise and ministry experience, dedicated to serving the church community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jabetsky Edouard</h3>
              <p className="text-yellow-600 font-semibold mb-4">Founder & Lead Strategist</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Former youth pastor turned digital marketing expert. 15+ years in ministry, 10+ years in digital marketing. Specializes in authentic brand storytelling for faith-based organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rubens Nherisson</h3>
              <p className="text-yellow-600 font-semibold mb-4">Digital Marketing Director</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Google Ads certified specialist with a heart for ministry. Helped over 200 churches increase their online visibility and community engagement through strategic digital campaigns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chrislord Pierre</h3>
              <p className="text-yellow-600 font-semibold mb-4">Ministry Consultant</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                25 years in pastoral ministry, church planter, and author. Ensures all our strategies align with biblical principles and authentic ministry practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Impact</span>
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by churches across the nation to grow their digital ministry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-2">500+</div>
              <p className="text-gray-300 font-semibold">Churches Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-2">2.5M+</div>
              <p className="text-gray-300 font-semibold">Lives Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-2">85%</div>
              <p className="text-gray-300 font-semibold">Growth Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-2">7</div>
              <p className="text-gray-300 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30">
              <CheckCircle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Faith-Centered Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Every strategy we develop is rooted in biblical principles and designed to honor God while effectively reaching your community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30">
              <CheckCircle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Authentic Messaging</h3>
              <p className="text-gray-300 leading-relaxed">
                We help you communicate your ministry's heart and mission in ways that resonate authentically with your target audience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30">
              <CheckCircle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Results-Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                We measure success not just in metrics, but in lives transformed and communities strengthened through your ministry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-500/30">
              <CheckCircle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Partnership Mindset</h3>
              <p className="text-gray-300 leading-relaxed">
                We're not just consultants - we're ministry partners committed to your long-term success and spiritual impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-black/40 to-amber-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Us</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's work together to expand your ministry's digital reach and impact more lives for Christ.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2">
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 border-2 border-yellow-500 inline-flex items-center justify-center space-x-2">
              <span>View Our Services</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;