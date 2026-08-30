import React from 'react';
import { Bell, ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import teacherProfileAvatar from '../assets/avatars/teacher_login.png';

export const DashboardHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-[#fcfcfd] dark:bg-[#101014] py-4 px-6 md:px-8 flex justify-end items-center transition-colors">
      <div className="flex items-center space-x-3.5">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          aria-label="Toggle theme" 
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1a1a21] cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400 stroke-[1.8]" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 stroke-[1.8]" />
          )}
        </button>

        {/* Notification Bell */}
        <button 
          className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1a1a21] cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 stroke-[1.8]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#101014]" />
        </button>

        {/* Vertical Divider */}
        <div className="h-5 w-px bg-gray-200 dark:bg-[#27272f]" />

        {/* Profile Dropdown */}
        <div className="flex items-center space-x-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0">
            <img
              src={teacherProfileAvatar}
              alt="Anaya Sharma"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-gray-800 dark:text-[#f5f5f5] group-hover:text-gray-900 dark:group-hover:text-white">
            Anaya Sharma
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 stroke-[2]" />
        </div>
      </div>
    </header>
  );
};
