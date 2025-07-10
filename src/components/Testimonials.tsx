import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "No more lost receipts or manual splits after group dinners. Raseed has completely transformed how we handle shared expenses.",
      author: "Sarah Chen",
      role: "Small Business Owner",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Raseed empowers smarter, eco-friendly purchases. The environmental impact insights have changed how I shop.",
      author: "Marcus Rodriguez",
      role: "Environmental Advocate",
      avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The predictive shopping lists are incredibly accurate. I never run out of essentials anymore, and my budget stays on track.",
      author: "Emily Johnson",
      role: "Busy Parent",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who've transformed their receipt management with Raseed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;