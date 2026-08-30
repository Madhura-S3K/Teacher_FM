import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const chartData = [
  { week: 'W1', value: 52 },
  { week: 'W2', value: 60 },
  { week: 'W3', value: 65 },
  { week: 'W4', value: 67 },
  { week: 'W5', value: 72 },
  { week: 'W6', value: 78 },
];

const CustomDot = (props: any) => {
  const { cx, cy } = props;
  if (!cx || !cy) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill="#ffffff"
      stroke="#15ab5d"
      strokeWidth={2.5}
      className="transition-all hover:r-6"
    />
  );
};

export const ClassProgressChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100/80 shadow-md shadow-purple-900/5 mt-6">
      {/* Header inside Chart Card */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Class Progress Overview
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Track how your class is progressing over time.
          </p>
        </div>

        {/* Timeframe Selector */}
        <button
          type="button"
          className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
        >
          <span>Last 6 Weeks</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-500 stroke-[2]" />
        </button>
      </div>

      {/* Chart Canvas Area */}
      <div className="w-full border border-gray-200/90 rounded-xl p-3 sm:p-5 bg-white h-[260px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#15ab5d" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#15ab5d" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#15ab5d"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorGreen)"
              dot={<CustomDot />}
              activeDot={{ r: 7, fill: '#ffffff', stroke: '#15ab5d', strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
