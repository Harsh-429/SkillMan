import { useState } from 'react';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, PiggyBank, DollarSign } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface WorkerWalletProps {
  theme: Theme;
}

const transactions = [
  { id: 1, type: 'credit', amount: 1500, description: 'Payment from Priya Sharma', date: '2024-01-02', category: 'Job Payment' },
  { id: 2, type: 'debit', amount: 50, description: 'Tool rental - Drill machine', date: '2024-01-02', category: 'Equipment' },
  { id: 3, type: 'credit', amount: 2000, description: 'Payment from Rahul Verma', date: '2024-01-01', category: 'Job Payment' },
  { id: 4, type: 'savings', amount: 100, description: 'Auto-savings (5% of earnings)', date: '2024-01-01', category: 'Savings' },
  { id: 5, type: 'debit', amount: 200, description: 'Insurance premium', date: '2023-12-31', category: 'Insurance' },
];

export function WorkerWallet({ theme }: WorkerWalletProps) {
  const [walletBalance] = useState(15750);
  const [savingsBalance] = useState(3420);
  const [monthlyIncome] = useState(45200);
  const [monthlyExpense] = useState(12350);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl relative overflow-hidden ${
          isDark ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700' : 
          isColorful ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl shadow-purple-300' : 
          'bg-gradient-to-br from-blue-500 to-purple-500'
        } border text-white col-span-2 scale-in`}>
          <img 
            src="https://images.unsplash.com/photo-1764407395696-495d7fb7fc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsZXQlMjBtb25leSUyMGZpbmFuY2V8ZW58MXx8fHwxNjcxODM4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wallet"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="w-6 h-6" />
              <span className="text-white/80">Available Balance</span>
            </div>
            <h2 className="text-white mb-4">₹{walletBalance.toLocaleString()}</h2>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
                Add Money
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
                Withdraw
              </button>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100 border-green-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border fade-in-up`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className={`w-6 h-6 ${
              isDark ? 'text-green-400' : isColorful ? 'text-green-600' : 'text-green-600'
            }`} />
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Auto Savings</span>
          </div>
          <h3 className={isDark ? 'text-white' : 'text-gray-900'}>
            ₹{savingsBalance.toLocaleString()}
          </h3>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            5% from each job
          </p>
        </div>
      </div>

      {/* Income vs Expense */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border slide-in-right`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={isDark ? 'text-white' : 'text-gray-900'}>This Month</h3>
          </div>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-green-900/20 border-green-700' : 
              isColorful ? 'bg-green-100 border-green-300' : 
              'bg-green-50 border-green-200'
            } border`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`flex items-center gap-2 ${
                  isDark ? 'text-green-400' : 'text-green-700'
                }`}>
                  <ArrowUpRight className="w-5 h-5" />
                  Income
                </span>
                <span className={`${
                  isDark ? 'text-green-400' : 'text-green-700'
                }`}>
                  ₹{monthlyIncome.toLocaleString()}
                </span>
              </div>
              <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-full rounded-full bg-green-500" style={{ width: '75%' }} />
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-red-900/20 border-red-700' : 
              isColorful ? 'bg-red-100 border-red-300' : 
              'bg-red-50 border-red-200'
            } border`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`flex items-center gap-2 ${
                  isDark ? 'text-red-400' : 'text-red-700'
                }`}>
                  <ArrowDownRight className="w-5 h-5" />
                  Expenses
                </span>
                <span className={`${
                  isDark ? 'text-red-400' : 'text-red-700'
                }`}>
                  ₹{monthlyExpense.toLocaleString()}
                </span>
              </div>
              <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-full rounded-full bg-red-500" style={{ width: '25%' }} />
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-blue-900/20 border-blue-700' : 
              isColorful ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300' : 
              'bg-blue-50 border-blue-200'
            } border`}>
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Net Savings</span>
                <span className={`${
                  isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'
                }`}>
                  ₹{(monthlyIncome - monthlyExpense).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
          'bg-white border-gray-200 shadow-md'
        } border slide-in-right`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className={`w-6 h-6 ${
              isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'
            }`} />
            <h3 className={isDark ? 'text-white' : 'text-gray-900'}>Financial Health</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Health Score</span>
                <span className={`${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>82/100</span>
              </div>
              <div className={`h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: '82%' }} />
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : isColorful ? 'bg-purple-50' : 'bg-gray-50'
            }`}>
              <h4 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                💡 Smart Tip
              </h4>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                You're saving 27% of your income. Great job! Try to reach 30% for better financial security.
              </p>
            </div>

            <button className={`w-full py-3 rounded-lg ${
              isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
              isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white' : 
              'bg-blue-500 hover:bg-blue-600 text-white'
            }`}>
              View Financial Report
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border fade-in-up`} style={{ animationDelay: '0.4s' }}>
        <h3 className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Recent Transactions
        </h3>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`p-4 rounded-lg ${
                isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 
                isColorful ? 'bg-purple-50 hover:bg-purple-100' : 
                'bg-gray-50 hover:bg-gray-100'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'credit'
                      ? 'bg-green-100 text-green-600'
                      : transaction.type === 'savings'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : transaction.type === 'savings' ? (
                      <PiggyBank className="w-5 h-5" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {transaction.description}
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                </div>
                <span className={`${
                  transaction.type === 'credit'
                    ? 'text-green-600'
                    : transaction.type === 'savings'
                    ? 'text-blue-600'
                    : 'text-red-600'
                }`}>
                  {transaction.type === 'debit' ? '-' : '+'}₹{transaction.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
