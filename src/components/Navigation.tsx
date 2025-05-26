import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-[#1F2A44]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-[#FFB100]" />
              <span className="text-[#F9FAFC] text-xl font-semibold">Ladderr</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}