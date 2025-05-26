import React from 'react';

export default function Hero() {
  return (
    <div className="bg-[#1F2A44] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFC] leading-tight mb-6">
            Get Interview-Ready.<br />Join the AI Beta.
          </h1>
          <h2 className="text-xl sm:text-2xl text-[#F9FAFC]/80 max-w-3xl mx-auto mb-12">
            We're giving early access to a small group of engineers. New invites go out weekly. Join now to reserve your spot.
          </h2>

          <div 
              className="ml-embedded"
              data-form="dD1sHm"
            ></div>


          <div className="max-w-2xl mx-auto">

   
            <p className="text-[#F9FAFC]/70 flex items-center justify-center space-x-2 mt-4">
            <span>🔒</span>
            <span>Access is limited. New invites go out weekly.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}