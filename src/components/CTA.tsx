import React from 'react';
import { ArrowRight, Wallet } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Wallet className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready for smarter receipts and greener purchases?
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of users who've already transformed their expense management 
          with Raseed's AI-powered features and seamless Google Wallet integration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center font-medium">
            <span>Integrate with Google Wallet</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
            Learn More
          </button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm">Receipts Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$50M+</div>
            <div className="text-sm">Money Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;