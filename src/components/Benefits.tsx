import React from 'react';
import { Clock, DollarSign, Leaf } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Efficiency",
      description: "Save time with instant digitization",
      details: "Eliminate manual receipt entry and expense categorization. Our AI processes receipts in seconds, not minutes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Financial Awareness",
      description: "Visual insights and budget tracking",
      details: "Get comprehensive spending analytics with intuitive graphs and alerts that help you make informed financial decisions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Make greener choices with actionable eco-data",
      details: "Track your environmental impact and receive personalized suggestions for more sustainable purchasing decisions.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Raseed?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your receipt management experience with three core benefits that matter most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-4">
                {benefit.description}
              </p>
              
              <p className="text-gray-500 leading-relaxed">
                {benefit.details}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.3K</div>
              <div className="text-gray-600">Avg. Monthly Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-gray-600">Reduced Carbon Footprint</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;