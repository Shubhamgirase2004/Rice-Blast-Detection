import React from 'react';
import { Wheat, Phone, Mail, MessageCircle, MapPin, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">RiceGuard AI</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Protecting Indian rice farmers with AI-powered blast disease prediction and real-time alerts.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">12K+</span>
              </div>
              <div>
                <div className="text-sm text-gray-300">Farmers Protected</div>
                <div className="text-xs text-gray-400">Across 17 states</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Support</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <div className="text-white">1800-123-RICE</div>
                  <div className="text-xs text-gray-400">Toll-free helpline</div>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <div className="text-white">+91 7894-561-230</div>
                  <div className="text-xs text-gray-400">WhatsApp support</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <div className="text-white">support@riceguard.ai</div>
                  <div className="text-xs text-gray-400">Email support</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <div className="text-white">Agricultural Research Centre</div>
                  <div className="text-xs text-gray-400">New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#registration" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Register Farm
              </a>
              <a href="#farmer-story" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Success Stories
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Download App
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Training Videos
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Agricultural Officers
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Research Papers
              </a>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal & Compliance</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200">
                <FileText className="w-4 h-4 mr-2" />
                Data Protection
              </a>
            </div>
            
            {/* Government Partnership */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-300 mb-2">In partnership with:</div>
              <div className="text-xs text-gray-400">
                • Ministry of Agriculture<br/>
                • Indian Council of Agricultural Research<br/>
                • State Agricultural Universities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 RiceGuard AI. Built for Indian farmers with ❤️
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Powered by:</span>
              <span className="text-green-400 font-medium">AI/ML Technology</span>
              <span className="text-blue-400 font-medium">Real-time Weather Data</span>
              <span className="text-purple-400 font-medium">Genetic Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;