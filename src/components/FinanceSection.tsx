import { useState } from 'react';
import { DollarSign, TrendingUp, Calculator } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface FinanceSectionProps {
  theme: Theme;
}

const loanOptions = [
  {
    id: 1,
    name: 'Tool Purchase Loan',
    provider: 'Mudra Loan Scheme',
    amount: 'Up to ₹50,000',
    interest: '8% p.a.',
    tenure: '1-3 years',
    features: ['No collateral', 'Quick approval', 'Flexible repayment', 'Government backed'],
  },
  {
    id: 2,
    name: 'Skill Development Loan',
    provider: 'Skill India',
    amount: 'Up to ₹1,00,000',
    interest: '6% p.a.',
    tenure: '2-5 years',
    features: ['Training costs', 'Certification fees', 'Low interest', 'Grace period available'],
  },
  {
    id: 3,
    name: 'Emergency Loan',
    provider: 'Workers Welfare Board',
    amount: 'Up to ₹25,000',
    interest: '4% p.a.',
    tenure: '6 months - 2 years',
    features: ['Fast disbursal', 'Minimal documentation', 'Special rates', 'No processing fee'],
  },
];

export function FinanceSection({ theme }: FinanceSectionProps) {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(2);
  const [interestRate] = useState(8);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  // EMI Calculation
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-green-900/20 border-green-700' : 
        isColorful ? 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200 shadow-lg' : 
        'bg-green-50 border-green-200'
      } border`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-green-600' : 
            isColorful ? 'bg-gradient-to-br from-green-500 to-teal-500' : 
            'bg-green-500'
          }`}>
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Financial Assistance for Workers
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Access affordable loans for tool purchase, skill development, and emergencies. 
              Low interest rates and flexible repayment options available.
            </p>
          </div>
        </div>
      </div>

      {/* EMI Calculator */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <div className="flex items-center gap-2 mb-6">
          <Calculator className={`w-6 h-6 ${
            isDark ? 'text-blue-400' : 
            isColorful ? 'text-purple-500' : 
            'text-blue-500'
          }`} />
          <h3 className={isDark ? 'text-white' : 'text-gray-900'}>EMI Calculator</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Loan Amount: ₹{loanAmount.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Tenure: {tenure} years
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Interest Rate: {interestRate}% p.a.
              </label>
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-gray-700' : 
                isColorful ? 'bg-purple-50' : 
                'bg-gray-50'
              }`}>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Fixed rate</p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700' : 
            isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100 border-green-300' : 
            'bg-gradient-to-br from-green-50 to-blue-50 border-green-200'
          } border`}>
            <h4 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Loan Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Monthly EMI</span>
                <span className={`${
                  isDark ? 'text-green-400' : 
                  isColorful ? 'text-green-600' : 
                  'text-green-600'
                }`}>₹{Math.round(emi).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Principal Amount</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>₹{loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Interest</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>₹{Math.round(totalInterest).toLocaleString()}</span>
              </div>
              <div className={`pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Total Payment</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>₹{Math.round(totalPayment).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Options */}
      <div className="grid md:grid-cols-3 gap-6">
        {loanOptions.map((loan) => (
          <div
            key={loan.id}
            className={`p-6 rounded-xl ${
              isDark ? 'bg-gray-800 border-gray-700' : 
              isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
              'bg-white border-gray-200 shadow-md'
            } border`}
          >
            <div className="mb-4">
              <h3 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {loan.name}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {loan.provider}
              </p>
            </div>

            <div className={`p-4 rounded-lg mb-4 ${
              isDark ? 'bg-gray-700' : 
              isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100' : 
              'bg-gray-50'
            }`}>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Amount</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>{loan.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Interest</span>
                  <span className={`${
                    isDark ? 'text-green-400' : 
                    isColorful ? 'text-green-600' : 
                    'text-green-600'
                  }`}>{loan.interest}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tenure</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>{loan.tenure}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {loan.features.map((feature, index) => (
                <li key={index} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <TrendingUp className={`w-4 h-4 ${
                    isDark ? 'text-green-400' : 
                    isColorful ? 'text-purple-500' : 
                    'text-green-500'
                  }`} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-4 rounded-lg ${
              isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
              isColorful ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg' : 
              'bg-green-500 hover:bg-green-600 text-white'
            } transition-all`}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
