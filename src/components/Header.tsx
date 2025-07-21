import React from 'react';
import { Wheat, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-700 rounded-full"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-green-600 p-3 rounded-full shadow-lg">
            <Wheat className="w-8 h-8 text-white" />
          </div>
          <h1 className="ml-3 text-2xl sm:text-3xl font-bold text-green-800">
            RiceGuard AI
          </h1>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Protect Your Rice Crop{' '}
          <span className="text-green-600">Before It's Too Late</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          AI-powered system to alert farmers about rice blast risks using advanced 
          genotype analysis, weather data, and soil conditions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToRegistration}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          >
            Start Protecting Your Crop
          </button>
          <button className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">10,000+</div>
            <div className="text-gray-600">Farmers Protected</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-green-600" />
      </div>
    </header>
  );
};

export default Header;