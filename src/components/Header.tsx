import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Raseed</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Demo
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Benefits
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#demo" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Demo
            </a>
            <a href="#benefits" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Benefits
            </a>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;