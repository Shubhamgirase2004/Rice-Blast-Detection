import React from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import RegistrationForm from './components/RegistrationForm';
import FarmerStory from './components/FarmerStory';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HowItWorks />
      <RegistrationForm />
      <FarmerStory />
      <Dashboard />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;