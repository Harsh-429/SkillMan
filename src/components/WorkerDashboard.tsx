import { useState } from 'react';
import { LogOut, Sun, Moon, User, Shield, DollarSign, BookOpen, Crown, Inbox, TrendingUp, GraduationCap, Users, Wallet, ShoppingBag } from 'lucide-react';
import { ProfileManagement } from './ProfileManagement';
import { InsuranceSection } from './InsuranceSection';
import { FinanceSection } from './FinanceSection';
import { BenefitsSection } from './BenefitsSection';
import { WorkerRequests } from './WorkerRequests';
import { EarningsDashboard } from './EarningsDashboard';
import { SkillLearning } from './SkillLearning';
import { TeamPage } from './TeamPage';
import { WorkerWallet } from './WorkerWallet';
import { ToolsMarketplace } from './ToolsMarketplace';

type Theme = 'light' | 'dark';

interface WorkerDashboardProps {
  onLogout: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

type ActiveTab = 'profile' | 'requests' | 'earnings' | 'skills' | 'insurance' | 'finance' | 'benefits' | 'team' | 'wallet' | 'marketplace';

export function WorkerDashboard({ onLogout, theme, setTheme }: WorkerDashboardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  const [isVipMember, setIsVipMember] = useState(false);

  const isDark = theme === 'dark';

  const tabs = [
    { id: 'profile' as ActiveTab, name: 'My Profile', icon: User },
    { id: 'requests' as ActiveTab, name: 'Requests', icon: Inbox },
    { id: 'earnings' as ActiveTab, name: 'Earnings', icon: TrendingUp },
    { id: 'wallet' as ActiveTab, name: 'Wallet', icon: Wallet },
    { id: 'skills' as ActiveTab, name: 'Skills', icon: GraduationCap },
    { id: 'marketplace' as ActiveTab, name: 'Tools', icon: ShoppingBag },
    { id: 'insurance' as ActiveTab, name: 'Insurance', icon: Shield },
    { id: 'finance' as ActiveTab, name: 'Finance', icon: DollarSign },
    { id: 'benefits' as ActiveTab, name: 'Benefits', icon: BookOpen },
    { id: 'team' as ActiveTab, name: 'Team', icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl bg-blue-500 float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10 blur-3xl bg-green-500 float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl bg-purple-500 float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className={`${
        isDark ? 'bg-gray-800/95 border-gray-700' : 
        'bg-white/95 border-gray-200'
      } border-b sticky top-0 z-50 backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 fade-in-up">
              <div className={`w-12 h-12 rounded-xl ${
                isDark ? 'bg-green-600' : 'bg-green-500'
              } flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg`}>
                <span className="text-white text-xl">SM</span>
              </div>
              <div>
                <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Worker Dashboard
                </span>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Welcome back! 👋
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 slide-in-right">
              {/* VIP Badge */}
              {isVipMember && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl pulse-animation ${
                  isDark ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700' : 
                  'bg-yellow-100 text-yellow-700 border border-yellow-300'
                }`}>
                  <Crown className="w-5 h-5" />
                  <span>VIP</span>
                </div>
              )}

              {/* Theme Switcher */}
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  theme === 'dark' ? 'bg-blue-600 text-white' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Moon className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 
                  'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all hover:scale-105 ${
                  activeTab === tab.id
                    ? isDark
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-green-500 text-white shadow-lg'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon className="w-5 h-5" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="scale-in">
          {activeTab === 'profile' && (
            <ProfileManagement 
              theme={theme} 
              isVipMember={isVipMember} 
              setIsVipMember={setIsVipMember}
            />
          )}
          {activeTab === 'requests' && <WorkerRequests theme={theme} />}
          {activeTab === 'earnings' && <EarningsDashboard theme={theme} />}
          {activeTab === 'wallet' && <WorkerWallet theme={theme} />}
          {activeTab === 'skills' && <SkillLearning theme={theme} />}
          {activeTab === 'marketplace' && <ToolsMarketplace theme={theme} />}
          {activeTab === 'insurance' && <InsuranceSection theme={theme} />}
          {activeTab === 'finance' && <FinanceSection theme={theme} />}
          {activeTab === 'benefits' && <BenefitsSection theme={theme} />}
          {activeTab === 'team' && <TeamPage theme={theme} />}
        </div>
      </div>
    </div>
  );
}