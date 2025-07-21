import React from 'react';
import { Dna, Cloud, Voicemail as Soil, MessageCircle, Wifi, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Dna,
      title: "Genotype-Aware Prediction",
      description: "Analyzes specific blast resistance genes (Pi genes) in your rice variety for accurate risk assessment",
      highlight: "95% accuracy rate"
    },
    {
      icon: Cloud,
      title: "Real-time Weather Integration",
      description: "Continuous monitoring of humidity, temperature, rainfall, and wind patterns affecting blast development",
      highlight: "24/7 monitoring"
    },
    {
      icon: Soil,
      title: "Soil Condition Analysis",
      description: "Considers nitrogen levels, soil moisture, and pH that influence blast susceptibility",
      highlight: "Multi-factor analysis"
    },
    {
      icon: MessageCircle,
      title: "Local Language Alerts",
      description: "Receive WhatsApp/SMS notifications in Odia, Bengali, Tamil, Telugu, and other regional languages",
      highlight: "15+ languages"
    },
    {
      icon: Wifi,
      title: "Offline Capability",
      description: "Works without internet by caching previous alerts and recommendations for spray schedules",
      highlight: "No internet needed"
    },
    {
      icon: Globe,
      title: "Pan-India Coverage",
      description: "Supports all major rice-growing states with region-specific models and recommendations",
      highlight: "17 states covered"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology designed specifically for Indian rice farming conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Icon and Highlight */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {feature.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Rice Varieties Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">Weather Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Soil Factors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">AI</div>
              <div className="text-gray-600">Machine Learning Model</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Future of Rice Farming
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join the thousands of farmers already protecting their crops with AI-powered insights
            </p>
            <button
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;