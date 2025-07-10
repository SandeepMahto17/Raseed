import React from 'react';
import { Play, Zap, Camera, Smartphone } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Raseed in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience receipt management reimagined with real-time AI processing and intuitive interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-time Receipt Scanning
                </h3>
                <p className="text-gray-600">
                  Point your camera at any receipt and watch as our AI instantly extracts all line items, 
                  prices, and merchant information with incredible accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Instant Split Payments
                </h3>
                <p className="text-gray-600">
                  AI automatically identifies individual orders in group receipts and facilitates 
                  instant Google Pay transfers with detailed expense records.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Notifications
                </h3>
                <p className="text-gray-600">
                  Get contextual alerts about price drops, return deadlines, and eco-friendly 
                  alternatives based on your location and shopping patterns.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Live Demo Preview</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Recording</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Receipt Analysis</span>
                    <span className="text-sm text-green-300">Complete</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-full transition-all duration-2000"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">$127.45</div>
                    <div className="text-sm text-white/80">Total Amount</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-sm text-white/80">Items Found</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Environmental Impact</span>
                    <span className="text-green-300">🌱 -8% CO₂</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-yellow-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;