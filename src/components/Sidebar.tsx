import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, TrendingUp, Settings, HelpCircle, LogOut } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <aside className="w-64 bg-[#f7f1ff] dark:bg-[#121218] border-r border-purple-100/60 dark:border-[#27272f] min-h-screen p-6 flex flex-col justify-between flex-shrink-0 transition-colors">
      {/* Top Header & Navigation */}
      <div>
        {/* Brand Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-[#15ab5d] tracking-tight">
            FutureMinds AI
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
            Teacher Portal
          </p>
        </div>

        {/* Main Nav Items */}
        <nav className="space-y-1.5">
          <button
            onClick={() => navigate('/teacher/dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
              location.pathname === '/teacher/dashboard'
                ? 'bg-[#15ab5d] text-white shadow-xs'
                : 'text-gray-700 dark:text-gray-300 hover:bg-purple-100/50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4 stroke-[2.2]" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => {}}
            className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100/50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 stroke-[2.2]" />
            <span>Student Progress</span>
          </button>

          <button
            onClick={() => {}}
            className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100/50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4 stroke-[2.2]" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pt-6">
        <div className="border-t border-gray-200/70 dark:border-[#27272f] mb-4" />

        <div className="space-y-1">
          <button
            onClick={() => {}}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4.5 h-4.5 stroke-[2]" />
            <span>Help Center</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <LogOut className="w-4.5 h-4.5 stroke-[2]" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
