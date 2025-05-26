import React from 'react';
import { Mic, Bot, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-12 h-12" />,
    title: 'Speak',
    description: 'Practice real interviews out loud'
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: 'Get Feedback',
    description: 'Receive instant structured feedback from AI'
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Grow',
    description: 'Improve over time with tracked progress'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-[#1F2A44] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#1F2A44] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#2E2E33]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}