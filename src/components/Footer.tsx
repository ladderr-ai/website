import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#E5DED5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-[#1F2A44]" />
            <span className="text-[#1F2A44] text-xl font-semibold">Ladderr</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-[#2E2E33] hover:text-[#1F2A44]">Terms</Link>
            <Link to="/privacy" className="text-[#2E2E33] hover:text-[#1F2A44]">Privacy</Link>
            <Link to="/contact" className="text-[#2E2E33] hover:text-[#1F2A44]">Contact</Link>
          </div>
          <p className="text-[#2E2E33]">Made with ❤️ by Ladderr</p>
        </div>
      </div>
    </footer>
  );
}