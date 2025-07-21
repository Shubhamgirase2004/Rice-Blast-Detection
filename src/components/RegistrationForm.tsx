import React, { useState } from 'react';
import { User, Phone, MapPin, Wheat, Calendar, CheckCircle } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    state: '',
    district: '',
    village: '',
    riceVariety: '',
    plantationMonth: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const states = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Gujarat', 'Haryana',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Odisha', 'Punjab', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'
  ];

  const riceVarieties = [
    'IR64', 'Swarna', 'BPT 5204', 'MTU 7029', 'Samba Mahsuri', 'ADT 43',
    'CR Dhan 310', 'Pusa Basmati 1121', 'CSR 30', 'Improved Lalat'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Scroll to farmer story after submission
    setTimeout(() => {
      const element = document.getElementById('farmer-story');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Registration Successful!
            </h3>
            <p className="text-green-600 mb-6">
              Welcome {formData.fullName}! Your farm has been registered with {formData.riceVariety} variety.
              You'll start receiving blast risk alerts on your mobile number.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Risk assessment is being processed. You'll receive your first alert within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Register Your Farm
          </h2>
          <p className="text-lg text-gray-600">
            Help us protect your crop by providing basic farm information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                placeholder="District"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              />
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                required
                placeholder="Village"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              />
            </div>
          </div>

          {/* Rice Variety */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Wheat className="w-4 h-4 inline mr-2" />
              Rice Variety *
            </label>
            <select
              name="riceVariety"
              value={formData.riceVariety}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
            >
              <option value="">Select Rice Variety</option>
              {riceVarieties.map(variety => (
                <option key={variety} value={variety}>{variety}</option>
              ))}
            </select>
          </div>

          {/* Plantation Month */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Month of Plantation *
            </label>
            <select
              name="plantationMonth"
              value={formData.plantationMonth}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
            >
              <option value="">Select Month</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Submit & Check Risk
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;