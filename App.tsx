import React from 'react';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Problems from './components/Problems';
import HowItWorks from './components/HowItWorks';
import Clients from './components/Clients';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <Hero />
      <Differentials />
      <Services />
      <Problems />
      <HowItWorks />
      <About />
      <Testimonials />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;