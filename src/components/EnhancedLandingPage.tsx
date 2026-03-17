import { Sun, Moon, Palette, ArrowRight, Shield, TrendingUp, Award, Users, Briefcase, Globe, MapPin } from 'lucide-react';
import { TeamPage } from './TeamPage';

type Theme = 'light' | 'dark' | 'colorful';

interface EnhancedLandingPageProps {
  onNavigate: (destination: 'customer' | 'worker' | 'admin' | 'auth') => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function EnhancedLandingPage({ onNavigate, theme, setTheme }: EnhancedLandingPageProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const features = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'KYC verified workers, background checks, and trust scores for complete peace of mind',
    },
    {
      icon: TrendingUp,
      title: 'Smart Earnings',
      description: 'AI-powered price suggestions, earnings analytics, and peak demand alerts',
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Free courses, certifications, and skill badges to boost your career',
    },
    {
      icon: Users,
      title: 'Community Hiring',
      description: 'Society accounts, bulk hiring, and long-term contracts available',
    },
    {
      icon: Briefcase,
      title: 'Digital Identity',
      description: 'Portable worker ID with QR code, verifiable outside platform',
    },
    {
      icon: Globe,
      title: 'Inter-City Support',
      description: 'Migration assistance, city-wise demand, and temporary stay partners',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Active Workers' },
    { value: '50,000+', label: 'Jobs Completed' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '25+', label: 'Cities' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`${
        isDark ? 'bg-gray-800/95 border-gray-700' : 
        isColorful ? 'bg-white/95 backdrop-blur-md border-purple-200' : 
        'bg-white/95 border-gray-200'
      } border-b sticky top-0 z-50 backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${
              isDark ? 'bg-blue-600' : 
              isColorful ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 
              'bg-blue-500'
            } flex items-center justify-center shadow-lg`}>
              <span className="text-white text-xl">SM</span>
            </div>
            <div>
              <h1 className={`text-xl ${
                isDark ? 'text-white' : 
                isColorful ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' : 
                'text-gray-900'
              }`}>SkillMan</h1>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Digital Labour Platform</p>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="flex gap-2">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1763328044377-d37cd9052d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbGVkJTIwd29ya2VyJTIwdGVhbXxlbnwxfHx8fDE3NjcxMDY3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Workers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${
            isDark ? 'bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900' : 
            isColorful ? 'bg-gradient-to-b from-purple-50/90 via-blue-50/95 to-pink-50' : 
            'bg-gradient-to-b from-white via-white/95 to-gray-50'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className={`inline-block mb-4 px-4 py-2 rounded-full ${
              isDark ? 'bg-blue-900/30 text-blue-400 border border-blue-700' : 
              isColorful ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-300' : 
              'bg-blue-100 text-blue-700 border border-blue-300'
            }`}>
              🚀 India's First Complete Labour Digitalization Platform
            </div>
            <h2 className={`mb-6 ${
              isDark ? 'text-white' : 
              isColorful ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent' : 
              'text-gray-900'
            }`}>
              Empowering Skilled Workers,<br />Building Trust with Customers
            </h2>
            <p className={`max-w-3xl mx-auto mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Connect with verified electricians, carpenters, plumbers & more. Access insurance, finance, skill development, and government benefits - all in one platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('auth')}
                className={`px-8 py-4 rounded-xl flex items-center gap-2 ${
                  isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                  isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-2xl shadow-purple-300' : 
                  'bg-blue-500 hover:bg-blue-600 text-white shadow-xl'
                }`}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.location.href = '#features'}
                className={`px-8 py-4 rounded-xl ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 
                  isColorful ? 'bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-200' : 
                  'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300'
                }`}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 
                  isColorful ? 'bg-white/80 backdrop-blur-sm border-purple-200' : 
                  'bg-white/80 backdrop-blur-sm border-gray-200'
                } border`}
              >
                <div className={`mb-2 ${
                  isDark ? 'text-blue-400' : 
                  isColorful ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' : 
                  'text-blue-600'
                }`}>
                  {stat.value}
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why Choose SkillMan?
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Revolutionary features designed specifically for Indian labour market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-600' : 
                    isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-xl' : 
                    'bg-white border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg'
                  } border transition-all`}
                >
                  <div className={`w-12 h-12 rounded-lg mb-4 ${
                    isDark ? 'bg-blue-900/30' : 
                    isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100' : 
                    'bg-blue-100'
                  } flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${
                      isDark ? 'text-blue-400' : 
                      isColorful ? 'text-purple-600' : 
                      'text-blue-600'
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
      </section>

      {/* Our Vision Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800/50' : 
        isColorful ? 'bg-gradient-to-r from-purple-100 to-blue-100' : 
        'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h2>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                SkillMan is more than just a job platform. We're building India's largest digital ecosystem for skilled workers, providing them with:
              </p>
              <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'}`}>✓</span>
                  <span>Professional digital identity that works everywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'}`}>✓</span>
                  <span>Access to insurance, finance, and government benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'}`}>✓</span>
                  <span>Continuous skill development and career growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'}`}>✓</span>
                  <span>Fair wages and transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'}`}>✓</span>
                  <span>Safety and security on every job</span>
                </li>
              </ul>
            </div>
            <div className="relative">
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
      <section className="py-20">
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

      {/* CTA Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 
        isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 
        'bg-gradient-to-r from-blue-500 to-purple-500'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your Career or Find the Right Worker?
          </h2>
          <p className="text-white/90 mb-8 text-xl">
            Join thousands of skilled workers and satisfied customers on SkillMan
          </p>
          <button
            onClick={() => onNavigate('auth')}
            className={`px-8 py-4 rounded-xl ${
              isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 
              'bg-white text-purple-600 hover:bg-gray-100'
            } shadow-2xl transition-all`}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${
        isDark ? 'bg-gray-900 border-gray-800' : 
        isColorful ? 'bg-white border-purple-200' : 
        'bg-gray-50 border-gray-200'
      } border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-10 h-10 rounded-lg ${
                  isDark ? 'bg-blue-600' : 
                  isColorful ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 
                  'bg-blue-500'
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
