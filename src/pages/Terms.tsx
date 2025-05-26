import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1F2A44] mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
            <p className="text-[#2E2E33]">
              Last updated: March 2024
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">1. Terms</h2>
            <p className="text-[#2E2E33] mb-4">
              By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">2. Use License</h2>
            <p className="text-[#2E2E33] mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Ladderr's website for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-[#2E2E33] mb-4">
              The materials on Ladderr's website are provided on an 'as is' basis. Ladderr makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}