import React from 'react';
import { Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#fdf8ff] border-b border-[#ecebf3] py-3.5 px-6 sm:px-12 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-1">
        <span className="text-[#7032e3] text-2xl font-bold tracking-tight">
          FutureMinds
        </span>
      </Link>

      <div className="flex items-center space-x-3">
        <button 
          className="bg-[#7c46f6] hover:bg-[#6c36e6] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-150 shadow-xs cursor-pointer"
        >
          Sign In
        </button>
        <button 
          aria-label="Toggle theme" 
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          <Moon className="w-4 h-4 text-gray-700 stroke-[1.8]" />
        </button>
      </div>
    </header>
  );
};
