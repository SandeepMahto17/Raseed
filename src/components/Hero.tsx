import React from 'react';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Google AI
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Raseed: Smarter Receipts.
            <br />
            <span className="text-green-600">Greener Purchases.</span>
            <br />
            <span className="text-blue-600">Better Insights.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Project Raseed for Google Wallet revolutionizes receipt management with AI-powered features 
            to simplify expenses and reduce environmental impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center font-medium">
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Receipt Scanning</h3>
                  <p className="text-gray-600 text-sm">Real-time AI analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">Environmental Impact</span>
                <span className="text-sm text-green-600 font-medium">-12% Carbon Footprint</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">$2,340</div>
                <div className="text-sm text-gray-600">Monthly Savings</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-sm text-gray-600">Receipts Scanned</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">23</div>
                <div className="text-sm text-gray-600">Price Alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;