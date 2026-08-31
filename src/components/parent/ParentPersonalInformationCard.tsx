import React from 'react';
import { User, MapPin } from 'lucide-react';
import type { ParentSettingsInfo } from '../../data/parentSettingsData';

interface Props {
  info: ParentSettingsInfo;
  onChangePassword: () => void;
}

export const ParentPersonalInformationCard: React.FC<Props> = ({ info, onChangePassword }) => {
  return (
    <div className="bg-white dark:bg-[#18181b] rounded-2xl p-6 border border-gray-200/70 dark:border-[#27272f] shadow-xs flex flex-col justify-between transition-colors">
      <div>
        {/* Header Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2 text-gray-900 dark:text-white">
            <User className="w-5 h-5 text-[#0d52ce] stroke-[2.2]" />
            <h3 className="text-xl font-extrabold tracking-tight">Personal Information</h3>
          </div>
          <button
            onClick={() => alert('Privacy settings: Parent data is encrypted and private.')}
            className="text-xs font-semibold text-[#0d52ce] dark:text-[#3b82f6] hover:underline cursor-pointer"
          >
            Manage Privacy
          </button>
        </div>

        {/* 2-Column Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Full Name */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              FULL NAME
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.name}
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              EMAIL ADDRESS
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">
              {info.email}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              PHONE
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.phone}
            </div>
          </div>

          {/* School */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              SCHOOL
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">
              {info.school}
            </div>
          </div>

          {/* Relationship */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              RELATIONSHIP
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.relationship}
            </div>
          </div>

          {/* Child */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              CHILD
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.child}
            </div>
          </div>

          {/* Grade/Class */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              GRADE/CLASS
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.gradeClass}
            </div>
          </div>

          {/* Academic Board */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              ACADEMIC BOARD
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.academicBoard}
            </div>
          </div>
        </div>

        {/* Full-width Learning Goal */}
        <div className="mb-4">
          <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            LEARNING GOAL
          </label>
          <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#0d52ce] stroke-[2.2] flex-shrink-0" />
            <span>{info.learningGoal}</span>
          </div>
        </div>

        {/* Password & Portal Role Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Password */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              PASSWORD
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center justify-between">
              <span>••••••••</span>
              <button
                onClick={onChangePassword}
                className="text-[#0d52ce] dark:text-[#3b82f6] text-xs font-semibold hover:underline cursor-pointer"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Portal Role */}
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              PORTAL ROLE
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-[#27272f] bg-[#f8fafc] dark:bg-[#121218] text-xs font-semibold text-gray-800 dark:text-gray-200">
              {info.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
