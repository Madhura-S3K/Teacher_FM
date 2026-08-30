import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import teacherProfileAvatar from '../assets/avatars/teacher_login.png';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="w-full bg-[#fcfcfd] py-4 px-6 md:px-8 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button 
          className="relative text-gray-600 hover:text-gray-900 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 stroke-[1.8]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
        </button>

        {/* Vertical Divider */}
        <div className="h-5 w-px bg-gray-200" />

        {/* Profile Dropdown */}
        <div className="flex items-center space-x-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src={teacherProfileAvatar}
              alt="Anaya Sharma"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">
            Anaya Sharma
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 stroke-[2]" />
        </div>
      </div>
    </header>
  );
};
