import { DollarSign, TrendingUp, Calendar, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Theme = 'light' | 'dark' | 'colorful';

interface EarningsDashboardProps {
  theme: Theme;
}

const weeklyData = [
  { day: 'Mon', earnings: 1500 },
  { day: 'Tue', earnings: 2000 },
  { day: 'Wed', earnings: 1800 },
  { day: 'Thu', earnings: 2500 },
  { day: 'Fri', earnings: 2200 },
  { day: 'Sat', earnings: 3000 },
  { day: 'Sun', earnings: 1000 },
];

export function EarningsDashboard({ theme }: EarningsDashboardProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const totalWeekly = weeklyData.reduce((sum, day) => sum + day.earnings, 0);
  const avgDaily = Math.round(totalWeekly / 7);
  const suggestedPrice = 650; // Based on experience, location, demand

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100 border-green-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-3 rounded-lg ${
              isDark ? 'bg-green-900/30' : 
              isColorful ? 'bg-gradient-to-br from-green-400 to-teal-400' : 
              'bg-green-100'
            }`}>
              <DollarSign className={`w-6 h-6 ${
                isDark ? 'text-green-400' : isColorful ? 'text-white' : 'text-green-600'
              }`} />
            </div>
            <div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>This Week</p>
              <h3 className={isDark ? 'text-white' : 'text-gray-900'}>₹{totalWeekly.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-3 rounded-lg ${
              isDark ? 'bg-blue-900/30' : 
              isColorful ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 
              'bg-blue-100'
            }`}>
              <Calendar className={`w-6 h-6 ${
                isDark ? 'text-blue-400' : isColorful ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Daily Avg</p>
              <h3 className={isDark ? 'text-white' : 'text-gray-900'}>₹{avgDaily}</h3>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-3 rounded-lg ${
              isDark ? 'bg-purple-900/30' : 
              isColorful ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 
              'bg-purple-100'
            }`}>
              <TrendingUp className={`w-6 h-6 ${
                isDark ? 'text-purple-400' : isColorful ? 'text-white' : 'text-purple-600'
              }`} />
            </div>
            <div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>This Month</p>
              <h3 className={isDark ? 'text-white' : 'text-gray-900'}>₹45,200</h3>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-br from-orange-100 to-yellow-100 border-orange-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-3 rounded-lg ${
              isDark ? 'bg-orange-900/30' : 
              isColorful ? 'bg-gradient-to-br from-orange-400 to-yellow-400' : 
              'bg-orange-100'
            }`}>
              <Award className={`w-6 h-6 ${
                isDark ? 'text-orange-400' : isColorful ? 'text-white' : 'text-orange-600'
              }`} />
            </div>
            <div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Jobs Done</p>
              <h3 className={isDark ? 'text-white' : 'text-gray-900'}>24</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Price */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700' : 
        isColorful ? 'bg-gradient-to-r from-green-400 to-teal-400 shadow-xl' : 
        'bg-gradient-to-r from-green-50 to-teal-50 border-green-200'
      } border`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`mb-2 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              💡 Suggested Price for Today
            </h3>
            <p className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Based on your location, experience, and current demand
            </p>
          </div>
          <div className={`text-right`}>
            <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Recommended Rate
            </p>
            <h2 className={`${isColorful ? 'text-white' : isDark ? 'text-green-400' : 'text-green-600'}`}>
              ₹{suggestedPrice}/day
            </h2>
          </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Weekly Earnings Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
            <XAxis dataKey="day" stroke={isDark ? '#9ca3af' : '#6b7280'} />
            <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                borderRadius: '8px',
                color: isDark ? '#ffffff' : '#000000',
              }}
            />
            <Bar 
              dataKey="earnings" 
              fill={isColorful ? 'url(#colorGradient)' : isDark ? '#3b82f6' : '#3b82f6'} 
              radius={[8, 8, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Peak Demand Alert */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-yellow-900/20 border-yellow-700' : 
        isColorful ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200 shadow-lg' : 
        'bg-yellow-50 border-yellow-200'
      } border`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-yellow-900/30' : 
            isColorful ? 'bg-gradient-to-br from-yellow-400 to-orange-400' : 
            'bg-yellow-100'
          }`}>
            <TrendingUp className={`w-6 h-6 ${
              isDark ? 'text-yellow-400' : isColorful ? 'text-white' : 'text-yellow-600'
            }`} />
          </div>
          <div>
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🔥 High Demand Alert!
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Electricians in Mumbai are in high demand today. Consider increasing your rate by 10-15%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
