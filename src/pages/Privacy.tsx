import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1F2A44] mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p className="text-[#2E2E33]">
              Last updated: March 2024
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-[#2E2E33] mb-4">
              We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide.
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-[#2E2E33] mb-4">
              We use the information we collect to operate, maintain, and provide you with the features and functionality of our Service, as well as to communicate directly with you, such as to send you email messages about products and services that may be of interest to you.
            </p>
            <h2 className="text-2xl font-semibold text-[#1F2A44] mt-8 mb-4">3. Data Security</h2>
            <p className="text-[#2E2E33] mb-4">
              We use appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}