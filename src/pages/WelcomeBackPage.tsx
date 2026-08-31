import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import studentAvatar from '../assets/avatars/student.png';
import teacherAvatar from '../assets/avatars/teacher.png';
import parentAvatar from '../assets/avatars/parent_avatar.png';
import adminAvatar from '../assets/avatars/admin.png';

interface RoleCardProps {
  title: string;
  description: string;
  avatar: string;
  titleColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonShadow: string;
  route: string;
}

const roles: RoleCardProps[] = [
  {
    title: 'Student',
    description: 'Check your assignments, attend classes, and track your learning progress.',
    avatar: studentAvatar,
    titleColor: 'text-[#7b4dff]',
    buttonBg: 'bg-[#7b4dff]',
    buttonHoverBg: 'hover:bg-[#6c3de8]',
    buttonShadow: 'shadow-md shadow-purple-500/20',
    route: '/login/student',
  },
  {
    title: 'Teacher',
    description: 'Manage your curriculum, grade submissions, and interact with your students.',
    avatar: teacherAvatar,
    titleColor: 'text-[#3faf6c]',
    buttonBg: 'bg-[#3faf6c]',
    buttonHoverBg: 'hover:bg-[#34985c]',
    buttonShadow: 'shadow-md shadow-emerald-500/20',
    route: '/login/teacher',
  },
  {
    title: 'Parent',
    description: 'Stay updated with your child\'s performance, attendance, and school news.',
    avatar: parentAvatar,
    titleColor: 'text-[#4c9eeb]',
    buttonBg: 'bg-[#4c9eeb]',
    buttonHoverBg: 'hover:bg-[#3b8ad6]',
    buttonShadow: 'shadow-md shadow-blue-500/20',
    route: '/login/parent',
  },
  {
    title: 'Admin',
    description: 'Configure institutional settings, manage user accounts, and view analytics.',
    avatar: adminAvatar,
    titleColor: 'text-[#e18a2c]',
    buttonBg: 'bg-[#e18a2c]',
    buttonHoverBg: 'hover:bg-[#ce7b22]',
    buttonShadow: 'shadow-md shadow-orange-500/20',
    route: '/login/admin',
  },
];

export const WelcomeBackPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#faf8fd] flex flex-col justify-between antialiased selection:bg-purple-100">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#7032e3] tracking-tight mb-3">
            Welcome Back
          </h1>
          <p className="text-[#6b687a] text-sm sm:text-base font-normal leading-relaxed max-w-md mx-auto">
            Access your personalized learning journey. Select your account type below to continue to your dashboard.
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl mb-12">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#f0ebf8] shadow-md shadow-purple-900/5 flex flex-col items-center text-center justify-between transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/10 min-h-[340px]"
            >
              {/* Circular Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gray-50 flex-shrink-0">
                <img
                  src={role.avatar}
                  alt={`${role.title} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role Title */}
              <h2 className={`text-xl font-bold mb-3 ${role.titleColor}`}>
                {role.title}
              </h2>

              {/* Description */}
              <p className="text-[#716e7f] text-xs sm:text-[13px] leading-relaxed mb-6 flex-grow max-w-[210px]">
                {role.description}
              </p>

              {/* Login Button */}
              <button
                onClick={() => navigate(role.route)}
                className={`w-full py-2.5 px-4 rounded-xl text-white font-semibold text-sm transition-all duration-150 cursor-pointer ${role.buttonBg} ${role.buttonHoverBg} ${role.buttonShadow}`}
              >
                Login
              </button>
            </div>
          ))}
        </div>

        {/* Contact Support Link */}
        <div className="text-center text-xs sm:text-sm text-[#787588]">
          Having trouble signing in?{' '}
          <a
            href="#support"
            onClick={(e) => {
              e.preventDefault();
              alert('Contact support triggered.');
            }}
            className="text-[#7032e3] font-medium hover:underline cursor-pointer transition-colors"
          >
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
