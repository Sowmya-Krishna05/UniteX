import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen font-sans bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Testimonials />
      <CTA />
      <Footer />
    </div>;
}