import { useState } from 'react';
import { LogOut, Sun, Moon, Palette, Users, AlertTriangle, TrendingUp, DollarSign, Shield } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface AdminDashboardProps {
  onLogout: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function AdminDashboard({ onLogout, theme, setTheme }: AdminDashboardProps) {
  const [stats] = useState({
    totalWorkers: 1247,
    totalCustomers: 3421,
    activeJobs: 156,
    revenue: 2345000,
    disputes: 12,
    pendingVerifications: 34,
  });

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const recentDisputes = [
    { id: 1, customer: 'Priya Sharma', worker: 'Rajesh Kumar', issue: 'Payment delay', status: 'pending' },
    { id: 2, customer: 'Rahul Verma', worker: 'Amit Singh', issue: 'Work quality', status: 'resolved' },
    { id: 3, customer: 'Anjali Desai', worker: 'Suresh Patel', issue: 'Late arrival', status: 'investigating' },
  ];

  const suspiciousActivity = [
    { id: 1, user: 'Worker #1234', activity: 'Multiple profile updates', risk: 'medium' },
    { id: 2, user: 'Customer #5678', activity: 'Unusual payment pattern', risk: 'high' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/80 backdrop-blur-sm border-purple-200' : 
        'bg-white border-gray-200'
      } border-b sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg ${
                isDark ? 'bg-red-600' : 
                isColorful ? 'bg-gradient-to-br from-red-500 to-pink-500' : 
                'bg-red-500'
              } flex items-center justify-center`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className={`${
                isDark ? 'text-white' : 
                isColorful ? 'bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent' : 
                'text-gray-900'
              }`}>Admin Dashboard</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Switcher */}
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-600 text-white' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Moon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTheme('colorful')}
                className={`p-2 rounded-lg ${
                  theme === 'colorful' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Palette className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className={`p-2 rounded-lg ${
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  isColorful ? 'text-gray-600 hover:bg-purple-100' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200 shadow-lg' : 
            'bg-white border-gray-200 shadow-md'
          } border`}>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-blue-900/30' : 
                isColorful ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 
                'bg-blue-100'
              }`}>
                <Users className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : isColorful ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              <div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Workers</p>
                <h3 className={isDark ? 'text-white' : 'text-gray-900'}>{stats.totalWorkers}</h3>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100 border-green-200 shadow-lg' : 
            'bg-white border-gray-200 shadow-md'
          } border`}>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-green-900/30' : 
                isColorful ? 'bg-gradient-to-br from-green-400 to-teal-400' : 
                'bg-green-100'
              }`}>
                <Users className={`w-6 h-6 ${
                  isDark ? 'text-green-400' : isColorful ? 'text-white' : 'text-green-600'
                }`} />
              </div>
              <div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Customers</p>
                <h3 className={isDark ? 'text-white' : 'text-gray-900'}>{stats.totalCustomers}</h3>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200 shadow-lg' : 
            'bg-white border-gray-200 shadow-md'
          } border`}>
            <div className="flex items-center gap-3">
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
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Active Jobs</p>
                <h3 className={isDark ? 'text-white' : 'text-gray-900'}>{stats.activeJobs}</h3>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-orange-100 to-yellow-100 border-orange-200 shadow-lg' : 
            'bg-white border-gray-200 shadow-md'
          } border`}>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-orange-900/30' : 
                isColorful ? 'bg-gradient-to-br from-orange-400 to-yellow-400' : 
                'bg-orange-100'
              }`}>
                <DollarSign className={`w-6 h-6 ${
                  isDark ? 'text-orange-400' : isColorful ? 'text-white' : 'text-orange-600'
                }`} />
              </div>
              <div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Revenue</p>
                <h3 className={isDark ? 'text-white' : 'text-gray-900'}>₹{(stats.revenue / 100000).toFixed(1)}L</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Alert Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-red-900/20 border-red-700' : 
            isColorful ? 'bg-gradient-to-r from-red-100 to-pink-100 border-red-200 shadow-lg' : 
            'bg-red-50 border-red-200'
          } border`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                Pending Disputes
              </h3>
              <span className={`px-3 py-1 rounded-full ${
                isDark ? 'bg-red-900/50 text-red-400' : 
                isColorful ? 'bg-red-200 text-red-700' : 
                'bg-red-200 text-red-700'
              }`}>
                {stats.disputes}
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Requires immediate attention
            </p>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-yellow-900/20 border-yellow-700' : 
            isColorful ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200 shadow-lg' : 
            'bg-yellow-50 border-yellow-200'
          } border`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                Pending Verifications
              </h3>
              <span className={`px-3 py-1 rounded-full ${
                isDark ? 'bg-yellow-900/50 text-yellow-400' : 
                isColorful ? 'bg-yellow-200 text-yellow-700' : 
                'bg-yellow-200 text-yellow-700'
              }`}>
                {stats.pendingVerifications}
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              KYC & document verification pending
            </p>
          </div>
        </div>

        {/* Recent Disputes */}
        <div className={`p-6 rounded-xl mb-8 ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Recent Disputes
          </h3>
          <div className="space-y-3">
            {recentDisputes.map((dispute) => (
              <div
                key={dispute.id}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-purple-50 to-blue-50' : 
                  'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {dispute.customer} ↔ {dispute.worker}
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Issue: {dispute.issue}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full ${
                      dispute.status === 'resolved'
                        ? 'bg-green-100 text-green-700'
                        : dispute.status === 'investigating'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {dispute.status}
                    </span>
                    <button className={`px-4 py-2 rounded-lg ${
                      isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                      isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 
                      'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}>
                      Review
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fraud Detection */}
        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-white/90 backdrop-blur-sm border-red-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border`}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className={`w-6 h-6 ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`} />
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
              Suspicious Activity
            </h3>
          </div>
          <div className="space-y-3">
            {suspiciousActivity.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-red-50 to-orange-50' : 
                  'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {item.user}
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.activity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full ${
                      item.risk === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.risk} risk
                    </span>
                    <button className={`px-4 py-2 rounded-lg ${
                      isDark ? 'bg-red-600 hover:bg-red-700 text-white' : 
                      isColorful ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' : 
                      'bg-red-500 hover:bg-red-600 text-white'
                    }`}>
                      Investigate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
