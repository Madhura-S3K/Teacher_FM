import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminProfileSummaryCard } from '../../components/admin/AdminProfileSummaryCard';
import { AdminPersonalInformationCard } from '../../components/admin/AdminPersonalInformationCard';
import { AdminAppearanceCard } from '../../components/admin/AdminAppearanceCard';
import { AdminCommunicationPreferencesCard } from '../../components/admin/AdminCommunicationPreferencesCard';
import { AdminEditProfileModal } from '../../components/admin/AdminEditProfileModal';
import { AdminChangePasswordModal } from '../../components/admin/AdminChangePasswordModal';
import { Footer } from '../../components/Footer';

import { useAuth } from '../../context/AuthContext';
import {
  adminSettingsData,
  defaultAdminCommunicationPrefs,
  type AdminSettingsInfo,
  type AdminCommunicationPref,
} from '../../data/adminSettingsData';

export const AdminSettingsPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [info, setInfo] = useState<AdminSettingsInfo>(adminSettingsData);
  const [preferences, setPreferences] = useState<AdminCommunicationPref[]>(
    defaultAdminCommunicationPrefs
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const handleSaveInfo = (updated: Partial<AdminSettingsInfo>) => {
    setInfo((prev) => ({ ...prev, ...updated }));
  };

  const handleTogglePreference = (id: string) => {
    setPreferences((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#101014] flex flex-col md:flex-row antialiased selection:bg-amber-100 dark:selection:bg-amber-900/40 transition-colors">
      {/* Left Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <AdminHeader />

        {/* Settings Body */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {/* Page Heading */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-[#ff8a00] dark:text-[#f97316] tracking-wider uppercase block mb-1">
              ACCOUNT
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Settings & Preferences
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
              Manage your account, profile, preferences, and notifications.
            </p>
          </div>

          {/* Profile Summary Card */}
          <div className="mb-6">
            <AdminProfileSummaryCard
              info={info}
              onEditProfile={() => setIsEditModalOpen(true)}
              onSignOut={handleSignOut}
            />
          </div>

          {/* 2-Column Row: Personal Information & Appearance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6">
            <div className="lg:col-span-2">
              <AdminPersonalInformationCard
                info={info}
                onChangePassword={() => setIsChangePasswordModalOpen(true)}
              />
            </div>
            <div className="lg:col-span-1">
              <AdminAppearanceCard />
            </div>
          </div>

          {/* Bottom Card: Communication Preferences */}
          <div className="mb-8">
            <AdminCommunicationPreferencesCard
              preferences={preferences}
              onToggle={handleTogglePreference}
            />
          </div>
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <AdminEditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        info={info}
        onSave={handleSaveInfo}
      />

      <AdminChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={() => setIsChangePasswordModalOpen(false)}
      />
    </div>
  );
};
