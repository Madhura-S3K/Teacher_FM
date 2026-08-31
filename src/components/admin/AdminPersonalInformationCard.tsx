import React from 'react';
import { User, CheckCircle2 } from 'lucide-react';
import type { AdminSettingsInfo } from '../../data/adminSettingsData';

interface Props {
  info: AdminSettingsInfo;
  onChangePassword: () => void;
}

export const AdminPersonalInformationCard: React.FC<Props> = ({
  info,
  onChangePassword,
}) => {
  return (
    <div className="bg-white dark:bg-[#18181b] rounded-2xl p-6 border border-gray-200/70 dark:border-[#27272f] shadow-xs transition-colors h-full flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2.5">
            <User className="w-5 h-5 text-[#ff8a00] dark:text-[#f97316] stroke-[2.2]" />
            <h3 className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
              Personal Information
            </h3>
          </div>

          <button
            onClick={() => alert('Opening Privacy & Security settings...')}
            className="text-xs font-semibold text-[#ff8a00] dark:text-[#f97316] hover:underline cursor-pointer"
          >
            Manage Privacy
          </button>
        </div>

        {/* 2-Column Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* FULL NAME */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              FULL NAME
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.name}
            </div>
          </div>

          {/* EMAIL ADDRESS */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              EMAIL ADDRESS
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.email}
            </div>
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              PHONE
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.phone}
            </div>
          </div>

          {/* ORGANIZATION */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              ORGANIZATION
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.organization}
            </div>
          </div>

          {/* ROLE */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              ROLE
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.role}
            </div>
          </div>

          {/* DEPARTMENT */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              DEPARTMENT
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.department}
            </div>
          </div>

          {/* EMPLOYEE ID */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              EMPLOYEE ID
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.employeeId}
            </div>
          </div>

          {/* ACCESS LEVEL */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              ACCESS LEVEL
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.accessLevel}
            </div>
          </div>
        </div>

        {/* Full-width Row: MANAGE ACCESS FOR */}
        <div className="mb-4">
          <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
            MANAGE ACCESS FOR
          </label>
          <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#ff8a00] dark:text-[#f97316] stroke-[2.2] flex-shrink-0" />
            <span>{info.manageAccessFor}</span>
          </div>
        </div>

        {/* Bottom 2 Fields: PASSWORD & PORTAL ROLE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* PASSWORD */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              PASSWORD
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white flex items-center justify-between">
              <span>••••••••</span>
              <button
                type="button"
                onClick={onChangePassword}
                className="text-xs font-semibold text-[#ff8a00] dark:text-[#f97316] hover:underline cursor-pointer"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* PORTAL ROLE */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
              PORTAL ROLE
            </label>
            <div className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-[#fdfcf9] dark:bg-[#121218] text-sm font-semibold text-gray-900 dark:text-white">
              {info.portalRole}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
