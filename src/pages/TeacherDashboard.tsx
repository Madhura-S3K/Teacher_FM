import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { ClassSelector } from '../components/ClassSelector';
import { KpiCard } from '../components/KpiCard';
import { ClassProgressChart } from '../components/ClassProgressChart';

import { Users, GraduationCap, TrendingUp, AlertTriangle } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col md:flex-row antialiased selection:bg-purple-100">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Profile Header */}
        <DashboardHeader />

        {/* Dashboard Body */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {/* Greeting & Class Selector Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Good morning, Teacher!
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Here's an overview of your students' learning progress.
              </p>
            </div>

            {/* Class Selector */}
            <ClassSelector />
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* Card 1: Students Enrolled */}
            <KpiCard
              icon={Users}
              iconBgColor="bg-[#ceecdd]"
              iconColor="text-[#15ab5d]"
              value={42}
              label="Students enrolled"
            />

            {/* Card 2: Active This Week */}
            <KpiCard
              icon={GraduationCap}
              iconBgColor="bg-[#dbeafe]"
              iconColor="text-[#3b82f6]"
              value={36}
              subLabel={
                <>
                  <span className="text-[#15ab5d] font-semibold">85.7%</span> active this week
                </>
              }
            />

            {/* Card 3: Average Progress */}
            <KpiCard
              icon={TrendingUp}
              iconBgColor="bg-[#fce7f3]"
              iconColor="text-[#ec4899]"
              value="78%"
              subLabel={
                <>
                  <span className="text-[#15ab5d] font-semibold">↑6%</span> this month
                </>
              }
            />

            {/* Card 4: Require Follow-up */}
            <KpiCard
              icon={AlertTriangle}
              iconBgColor="bg-[#fee2e2]"
              iconColor="text-[#ef4444]"
              value={6}
              subLabel={
                <span className="text-[#ef4444] font-medium">
                  Require follow-up
                </span>
              }
            />
          </div>

          {/* Class Progress Overview Chart */}
          <ClassProgressChart />
        </main>
      </div>
    </div>
  );
};
