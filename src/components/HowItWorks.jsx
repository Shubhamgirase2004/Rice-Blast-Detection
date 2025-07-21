import React from 'react';
import { UserPlus, Database, CloudRain, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register Your Farm",
      description: "Provide farm location, rice variety, and plantation details to create your profile"
    },
    {
      icon: Database,
      title: "Gene Analysis",
      description: "System checks blast resistance genes of your selected rice variety automatically"
    },
    {
      icon: CloudRain,
      title: "Real-time Monitoring",
      description: "Weather and soil data are analyzed continuously using AI algorithms"
    },
    {
      icon: MessageSquare,
      title: "Instant Alerts",
      description: "Receive WhatsApp/SMS alerts with spray recommendations in your local language"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI system combines genetic data, weather patterns, and soil conditions 
            to predict rice blast risks with 95% accuracy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-green-500 z-0"></div>
              )}

              <div className="relative bg-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 z-10">
                <div className="absolute -top-3 -left-3 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Protect Your Crop?
            </h3>
            <p className="text-green-100 mb-6">
              Join thousands of farmers already using RiceGuard AI
            </p>
            <button
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
