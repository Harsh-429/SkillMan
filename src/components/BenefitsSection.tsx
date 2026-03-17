import { BookOpen, Award, Heart, GraduationCap, Home, Briefcase } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface BenefitsSectionProps {
  theme: Theme;
}

const governmentSchemes = [
  {
    id: 1,
    name: 'Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM)',
    icon: Award,
    description: 'Old age pension scheme for unorganized workers',
    benefits: [
      'Monthly pension of ₹3,000 after 60 years',
      'Contribution based on age (₹55-₹200 per month)',
      'Equal contribution by Government',
      'Life insurance coverage',
    ],
    eligibility: 'Age 18-40 years, monthly income less than ₹15,000',
  },
  {
    id: 2,
    name: 'Ayushman Bharat - PMJAY',
    icon: Heart,
    description: 'Free health insurance for poor and vulnerable families',
    benefits: [
      'Health cover of ₹5 lakh per family per year',
      'Cashless treatment at empanelled hospitals',
      'Covers pre and post hospitalization',
      'No cap on family size, age, or gender',
    ],
    eligibility: 'SECC database listed families',
  },
  {
    id: 3,
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
    icon: GraduationCap,
    description: 'Skill development and training program',
    benefits: [
      'Free skill training courses',
      'Certificate on course completion',
      'Monetary reward on certification',
      'Placement assistance',
    ],
    eligibility: 'Indian citizens, especially youth',
  },
  {
    id: 4,
    name: 'Pradhan Mantri Awas Yojana (PMAY)',
    icon: Home,
    description: 'Affordable housing scheme for all',
    benefits: [
      'Interest subsidy on home loans',
      'Subsidy up to ₹2.67 lakh',
      'All women ownership or co-ownership',
      'Affordable EMI options',
    ],
    eligibility: 'EWS, LIG, and MIG categories',
  },
  {
    id: 5,
    name: 'Atal Pension Yojana (APY)',
    icon: Briefcase,
    description: 'Pension scheme for unorganized sector',
    benefits: [
      'Guaranteed pension: ₹1,000 to ₹5,000',
      'Low monthly contribution',
      'Government co-contribution',
      'Pension to spouse on death',
    ],
    eligibility: 'Age 18-40 years, bank account holder',
  },
  {
    id: 6,
    name: 'Building and Other Construction Workers Act',
    icon: BookOpen,
    description: 'Welfare schemes for construction workers',
    benefits: [
      'Medical assistance up to ₹3,000',
      'Education assistance for children',
      'Maternity benefits',
      'Skill upgradation training',
    ],
    eligibility: 'Registered construction workers',
  },
];

export function BenefitsSection({ theme }: BenefitsSectionProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-purple-900/20 border-purple-700' : 
        isColorful ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-lg' : 
        'bg-purple-50 border-purple-200'
      } border`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-purple-600' : 
            isColorful ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 
            'bg-purple-500'
          }`}>
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Government Benefits & Schemes
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Explore various government schemes and benefits available for skilled workers. 
              These programs provide financial security, healthcare, skill development, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Government Schemes */}
      <div className="grid md:grid-cols-2 gap-6">
        {governmentSchemes.map((scheme) => {
          const Icon = scheme.icon;
          return (
            <div
              key={scheme.id}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100' : 
                  'bg-gray-50'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isDark ? 'text-purple-400' : 
                    isColorful ? 'text-purple-600' : 
                    'text-purple-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {scheme.name}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {scheme.description}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  {scheme.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <span className={`mt-1 ${
                        isDark ? 'text-purple-400' : 
                        isColorful ? 'text-purple-500' : 
                        'text-purple-500'
                      }`}>•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-3 rounded-lg mb-4 ${
                isDark ? 'bg-gray-700/50' : 
                isColorful ? 'bg-purple-50' : 
                'bg-gray-50'
              }`}>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong className={isDark ? 'text-gray-300' : 'text-gray-700'}>Eligibility:</strong> {scheme.eligibility}
                </p>
              </div>

              <button className={`w-full py-3 px-4 rounded-lg ${
                isDark ? 'bg-purple-600 hover:bg-purple-700 text-white' : 
                isColorful ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg' : 
                'bg-purple-500 hover:bg-purple-600 text-white'
              } transition-all`}>
                Learn More & Apply
              </button>
            </div>
          );
        })}
      </div>

      {/* Additional Resources */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Important Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#" className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 
            isColorful ? 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200' : 
            'bg-gray-50 hover:bg-gray-100'
          } transition-all`}>
            <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Labour Ministry</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>labour.gov.in</p>
          </a>
          <a href="#" className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 
            isColorful ? 'bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200' : 
            'bg-gray-50 hover:bg-gray-100'
          } transition-all`}>
            <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skill India</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>skillindia.gov.in</p>
          </a>
          <a href="#" className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 
            isColorful ? 'bg-gradient-to-br from-pink-100 to-orange-100 hover:from-pink-200 hover:to-orange-200' : 
            'bg-gray-50 hover:bg-gray-100'
          } transition-all`}>
            <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>EPFO</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>epfindia.gov.in</p>
          </a>
        </div>
      </div>
    </div>
  );
}
