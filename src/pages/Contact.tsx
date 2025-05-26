import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1F2A44] mb-8">Contact Us</h1>
          <div className="prose prose-lg">
            <p className="text-[#2E2E33] mb-8">
              Have questions about Ladderr? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-[#2E2E33]">
                For any inquiries, please email us at:{' '}
                <a 
                  href="mailto:hello@stackblitz.com" 
                  className="text-[#FFB100] hover:text-[#FF5A3C] transition-colors duration-300"
                >
                  hello@stackblitz.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}