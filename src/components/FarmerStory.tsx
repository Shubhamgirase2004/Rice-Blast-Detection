import React from 'react';
import { CheckCircle, Smartphone, CloudRain, Droplets, AlertTriangle } from 'lucide-react';

const FarmerStory: React.FC = () => {
  const storySteps = [
    {
      title: "Registration",
      description: "Ramesh from Odisha registers his 2-acre farm",
      details: "Variety: IR64 | Planted: June 2024",
      icon: CheckCircle,
      status: "completed"
    },
    {
      title: "Weather Analysis",
      description: "System detects high-risk conditions",
      details: "Humidity: 93% | Temperature: 28°C",
      icon: CloudRain,
      status: "warning"
    },
    {
      title: "Soil Assessment",
      description: "High nitrogen levels detected",
      details: "N: 280 kg/ha | Favorable for blast",
      icon: Droplets,
      status: "warning"
    },
    {
      title: "Risk Alert",
      description: "High blast risk calculated",
      details: "Risk Score: 8.7/10 | Action needed",
      icon: AlertTriangle,
      status: "danger"
    },
    {
      title: "WhatsApp Alert",
      description: "Instant notification sent",
      details: "\"ଏବେ Tricyclazole spray କରନ୍ତୁ\" (Spray Tricyclazole now)",
      icon: Smartphone,
      status: "success"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 border-green-300 text-green-800';
      case 'warning': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'danger': return 'bg-red-100 border-red-300 text-red-800';
      case 'success': return 'bg-blue-100 border-blue-300 text-blue-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'danger': return 'text-red-600';
      case 'success': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="farmer-story" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Story: Ramesh's Farm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how RiceGuard AI helped prevent a major blast outbreak on a real farm in Odisha
          </p>
        </div>

        {/* Farmer Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              R
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900">Ramesh Patra</h3>
              <p className="text-gray-600">Cuttack District, Odisha</p>
              <p className="text-sm text-green-600">2 acres • IR64 variety</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-300 to-green-600"></div>

          <div className="space-y-8">
            {storySteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`border-2 rounded-xl p-6 ${getStatusColor(step.status)}`}>
                    <div className="flex items-center mb-3">
                      <step.icon className={`w-6 h-6 mr-3 ${getIconColor(step.status)}`} />
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="font-medium mb-2">{step.description}</p>
                    <p className="text-sm opacity-90">{step.details}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-8 h-8 bg-white border-4 border-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Card */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Result: Zero Crop Loss!</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Thanks to early detection and timely spraying, Ramesh prevented complete crop failure. 
            His neighbor's unprotected field lost 60% of the crop to blast disease.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">₹45,000</div>
              <div className="text-green-100">Saved from Loss</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">2 Days</div>
              <div className="text-green-100">Early Warning</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-green-100">Crop Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerStory;