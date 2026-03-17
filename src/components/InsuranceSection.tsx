import { useState } from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface InsuranceSectionProps {
  theme: Theme;
}

const insurancePlans = [
  {
    id: 1,
    name: 'Health Insurance',
    provider: 'National Insurance Company',
    coverage: '₹5,00,000',
    premium: '₹8,000/year',
    features: ['Hospitalization', 'OPD Coverage', 'Maternity Benefits', 'Critical Illness'],
  },
  {
    id: 2,
    name: 'Accident Insurance',
    provider: 'LIC of India',
    coverage: '₹10,00,000',
    premium: '₹5,000/year',
    features: ['Accidental Death', 'Permanent Disability', 'Temporary Disability', 'Medical Expenses'],
  },
  {
    id: 3,
    name: 'Life Insurance',
    provider: 'Pradhan Mantri Jeevan Jyoti Bima',
    coverage: '₹2,00,000',
    premium: '₹330/year',
    features: ['Death Benefit', 'Low Premium', 'Government Backed', 'Easy Claims'],
  },
];

export function InsuranceSection({ theme }: InsuranceSectionProps) {
  const [appliedInsurance, setAppliedInsurance] = useState<number[]>([]);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handleApply = (id: number) => {
    setAppliedInsurance(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-blue-900/20 border-blue-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg' : 
        'bg-blue-50 border-blue-200'
      } border`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-blue-600' : 
            isColorful ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 
            'bg-blue-500'
          }`}>
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Insurance Benefits for Workers
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Secure your future with comprehensive insurance plans designed specifically for skilled workers. 
              Government-backed and affordable options available.
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insurancePlans.map((plan) => {
          const isApplied = appliedInsurance.includes(plan.id);
          return (
            <div
              key={plan.id}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border`}
            >
              <div className="mb-4">
                <h3 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.provider}
                </p>
              </div>

              <div className={`p-4 rounded-lg mb-4 ${
                isDark ? 'bg-gray-700' : 
                isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100' : 
                'bg-gray-50'
              }`}>
                <div className="flex justify-between mb-2">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Coverage</span>
                  <span className={`${
                    isDark ? 'text-green-400' : 
                    isColorful ? 'text-purple-600' : 
                    'text-green-600'
                  }`}>{plan.coverage}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Premium</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>{plan.premium}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Features:
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <CheckCircle className={`w-4 h-4 ${
                        isDark ? 'text-green-400' : 
                        isColorful ? 'text-purple-500' : 
                        'text-green-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleApply(plan.id)}
                className={`w-full py-3 px-4 rounded-lg transition-all ${
                  isApplied
                    ? isDark
                      ? 'bg-green-900/30 text-green-400 border border-green-700'
                      : isColorful
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-green-100 text-green-700 border border-green-300'
                    : isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : isColorful
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isApplied ? 'Application Submitted ✓' : 'Apply Now'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-orange-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <div className="flex items-start gap-4">
          <AlertCircle className={`w-6 h-6 ${
            isDark ? 'text-yellow-400' : 
            isColorful ? 'text-orange-500' : 
            'text-yellow-600'
          }`} />
          <div>
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Important Information
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Applications are processed within 7-10 working days</li>
              <li>• Valid ID proof and address proof required</li>
              <li>• Premium can be paid monthly, quarterly, or annually</li>
              <li>• Contact our support team for assistance with applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
