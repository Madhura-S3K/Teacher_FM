import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ClassSelector: React.FC = () => {
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs flex items-center space-x-2 transition-colors cursor-pointer"
      >
        <span>Class: Grade 6 – Section A</span>
        <ChevronDown className="w-4 h-4 text-gray-500 stroke-[2]" />
      </button>
    </div>
  );
};
