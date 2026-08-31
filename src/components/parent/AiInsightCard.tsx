import React from 'react';
import { Lightbulb } from 'lucide-react';

export const AiInsightCard: React.FC = () => {
  return (
    <div className="bg-[#fffdf2] dark:bg-[#1f1a14] rounded-2xl p-6 border border-amber-200/70 dark:border-amber-900/40 shadow-xs flex flex-col justify-between transition-colors h-full">
      {/* Top Header */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950/80 flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400">
            <Lightbulb className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-amber-100 tracking-tight">
            AI Insight
          </h3>
        </div>

        {/* Text Content */}
        <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-amber-200/90 leading-relaxed font-medium">
          <p>Aanya is progressing well overall.</p>
          <p className="font-bold text-gray-900 dark:text-amber-100">
            Recommended focus: Practice Mathematics (specifically fractions and basic algebra) for 15–20 mins daily to improve confidence.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-2">
        <button
          onClick={() => alert('Opening Aanya\'s personalized learning plan...')}
          className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-sm bg-[#0d52ce] hover:bg-[#0b43aa] transition-colors shadow-sm shadow-blue-500/20 cursor-pointer"
        >
          View Learning Plan
        </button>
      </div>
    </div>
  );
};
