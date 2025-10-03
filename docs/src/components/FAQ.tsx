import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "After our strategy call, we can typically have your account set up and first content scheduled within 48-72 hours. We understand the urgency of ministry and move quickly to get you online."
    },
    {
      question: "What if we don't have professional video equipment?",
      answer: "That's perfectly fine! Most of our clients start with basic smartphone recordings or simple camera setups. We specialize in taking raw, unpolished footage and transforming it into professional-quality content. Your message matters more than your equipment."
    },
    {
      question: "Do you handle all the posting and scheduling?",
      answer: "Absolutely. Once we create your content, we handle all scheduling, posting, hashtag research, and platform optimization. You'll receive a content calendar so you know what's going live, but the execution is completely hands-off for you."
    },
    {
      question: "How do you ensure content stays aligned with our church's values?",
      answer: "This is crucial to us. During onboarding, we do a deep dive into your church's mission, values, and theological stance. Every piece of content is reviewed through this lens before posting. We're not just marketers—we're believers who understand the weight of representing your ministry."
    },
    {
      question: "What platforms do you post on?",
      answer: "We handle all major platforms: Instagram, Facebook, TikTok, YouTube Shorts, Twitter, and LinkedIn. We optimize content specifically for each platform's algorithm and audience behavior to maximize reach and engagement."
    },
    {
      question: "Can we see the content before it goes live?",
      answer: "Yes! We offer approval workflows where you can review content before it's scheduled. Many clients choose our 'set it and forget it' option after building trust, but you always have the option to review and approve content in advance."
    },
    {
      question: "What kind of results can we expect?",
      answer: "While results vary, most clients see increased online engagement within the first month, with many reporting growth in Sunday attendance, online giving, and community involvement within 60-90 days. We focus on metrics that matter for ministry, not just vanity numbers."
    },
    {
      question: "Is there a contract or can we cancel anytime?",
      answer: "We offer month-to-month service with no long-term contracts. We believe in earning your business every month through results and exceptional service. You can pause or cancel with 30 days notice."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-600/30 to-amber-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/20 to-yellow-600/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We understand you have questions. Here are the answers to what pastors ask us most.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg backdrop-blur-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gradient-to-r from-gray-900 to-black">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;