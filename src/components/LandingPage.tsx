import { Sun, Moon, Users, Briefcase, Shield } from 'lucide-react';
import { TeamPage } from './TeamPage';

type Theme = 'light' | 'dark';

interface LandingPageProps {
  onNavigateToAuth: (type: 'customer' | 'worker' | 'admin') => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function LandingPage({ onNavigateToAuth, theme, setTheme }: LandingPageProps) {
  const isDark = theme === 'dark';

  const features = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'KYC verified workers, background checks, and trust scores',
    },
    {
      icon: Users,
      title: 'Smart Earnings',
      description: 'AI-powered pricing, earnings analytics, and demand alerts',
    },
    {
      icon: Briefcase,
      title: 'Digital Identity',
      description: 'Portable worker ID with QR code, verifiable everywhere',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl ${
          'bg-blue-500'
        } float-animation`} style={{ animationDelay: '0s' }} />
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10 blur-3xl ${
          'bg-green-500'
        } float-animation`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl ${
          'bg-purple-500'
        } float-animation`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className={`${
        isDark ? 'bg-gray-800/95 border-gray-700' : 
        'bg-white/95 border-gray-200'
      } border-b sticky top-0 z-50 backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${
              isDark ? 'bg-blue-600' : 'bg-blue-500'
            } flex items-center justify-center shadow-lg`}>
              <span className="text-white text-xl">SM</span>
            </div>
            <div>
              <h1 className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                SkillMan
              </h1>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Digital Labour Platform
              </p>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-lg transition-all ${
                theme === 'light' ? 'bg-blue-100 text-blue-600' : 
                isDark ? 'text-gray-400 hover:bg-gray-700' : 
                'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Sun className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-lg transition-all ${
                theme === 'dark' ? 'bg-blue-600 text-white' : 
                isDark ? 'text-gray-400 hover:bg-gray-700' : 
                'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Image Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-12 shadow-2xl fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1763328044377-d37cd9052d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbGVkJTIwd29ya2VyJTIwdGVhbXxlbnwxfHx8fDE3NjcxMDY3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Skilled Workers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="mb-4 text-white">Empowering Skilled Workers</h1>
                <p className="max-w-2xl mx-auto text-white/90 text-xl">
                  India's First Complete Labour Digitalization Platform
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className={`max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Connect with verified electricians, carpenters, plumbers & more. Access insurance, finance, skill development, and government benefits - all in one platform.
            </p>
          </div>

          {/* Login Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Customer Card */}
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800 border-gray-700' : 
              'bg-white border-gray-200 shadow-xl'
            } border-2 relative overflow-hidden transform hover:scale-105 transition-all cursor-pointer scale-in`}
              onClick={() => onNavigateToAuth('customer')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MDQ5NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`w-16 h-16 rounded-xl ${
                isDark ? 'bg-blue-600' : 'bg-blue-500'
              } flex items-center justify-center mb-6 shadow-lg`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                I'm a Customer
              </h3>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Find and hire skilled workers. Browse profiles, compare prices, and connect with professionals.
              </p>
              <div className={`py-3 px-6 rounded-lg text-center transition-all ${
                isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                Continue as Customer
              </div>
            </div>

            {/* Worker Card */}
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800 border-gray-700' : 
              'bg-white border-gray-200 shadow-xl'
            } border-2 relative overflow-hidden transform hover:scale-105 transition-all cursor-pointer scale-in`}
              onClick={() => onNavigateToAuth('worker')}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29sc3xlbnwxfHx8fDE3NjcxMDY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`w-16 h-16 rounded-xl ${
                isDark ? 'bg-green-600' : 'bg-green-500'
              } flex items-center justify-center mb-6 shadow-lg`}>
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                I'm a Worker
              </h3>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Create profile, access insurance, finance, government benefits, and connect with customers.
              </p>
              <div className={`py-3 px-6 rounded-lg text-center transition-all ${
                isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
                'bg-green-500 hover:bg-green-600 text-white'
              }`}>
                Continue as Worker
              </div>
            </div>

            {/* Admin Card */}
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800 border-gray-700' : 
              'bg-white border-gray-200 shadow-xl'
            } border-2 relative overflow-hidden transform hover:scale-105 transition-all cursor-pointer scale-in`}
              onClick={() => onNavigateToAuth('admin')}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1666790676906-0295230c121d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNjczNTk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`w-16 h-16 rounded-xl ${
                isDark ? 'bg-red-600' : 'bg-red-500'
              } flex items-center justify-center mb-6 shadow-lg`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Admin Access
              </h3>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Platform management, user verification, dispute resolution, and analytics.
              </p>
              <div className={`py-3 px-6 rounded-lg text-center transition-all ${
                isDark ? 'bg-red-600 hover:bg-red-700 text-white' : 
                'bg-red-500 hover:bg-red-600 text-white'
              }`}>
                Admin Login
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className={`text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why Choose SkillMan?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${
                      isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-600' : 
                      'bg-white border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl'
                    } border transition-all fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg mb-4 ${
                      isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                    } flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800/50' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h2>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                SkillMan is more than just a job platform. We're building India's largest digital ecosystem for skilled workers, providing them with:
              </p>
              <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                  <span>Professional digital identity that works everywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                  <span>Access to insurance, finance, and government benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                  <span>Continuous skill development and career growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                  <span>Fair wages and transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                  <span>Safety and security on every job</span>
                </li>
              </ul>
            </div>
            <div className="relative slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1652107937402-20106955a1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjcyNzQ5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Meet Our Team
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Dedicated professionals working to revolutionize the labour workforce
            </p>
          </div>
          <TeamPage theme={theme} />
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${
        isDark ? 'bg-gray-900 border-gray-800' : 
        'bg-gray-50 border-gray-200'
      } border-t relative z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-10 h-10 rounded-lg ${
                  isDark ? 'bg-blue-600' : 'bg-blue-500'
                } flex items-center justify-center`}>
                  <span className="text-white">SM</span>
                </div>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>SkillMan</span>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Digital Labour Platform
              </p>
            </div>
            <div>
              <h4 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>For Workers</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Find Jobs</li>
                <li>Skill Training</li>
                <li>Insurance</li>
                <li>Finance</li>
              </ul>
            </div>
            <div>
              <h4 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>For Customers</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Find Workers</li>
                <li>Track Jobs</li>
                <li>Payments</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>📧 support@skillman.com</li>
                <li>📞 1800-123-4567</li>
                <li>💬 WhatsApp: +91-98765-43210</li>
              </ul>
            </div>
          </div>
          <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p>© 2024 SkillMan. All rights reserved. Made with ❤️ for Indian workers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
