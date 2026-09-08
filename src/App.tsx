import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MaterialsGuide } from './components/MaterialsGuide';
import { PriceCalculator } from './components/PriceCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { SizeChart } from './components/SizeChart';
import { WorkflowSection } from './components/WorkflowSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <MaterialsGuide />
        <PriceCalculator />
        <PortfolioSection />
        <SizeChart />
        <WorkflowSection />
        <Testimonials />
        <FAQSection />
        <LocationContact />
      </main>

      {/* Footer & Floating Actions */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
