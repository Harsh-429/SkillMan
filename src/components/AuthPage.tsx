import { useState } from 'react';
import { Mail, Phone, Lock, User, ArrowLeft, Shield } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';
type UserType = 'customer' | 'worker' | 'admin' | null;

interface AuthPageProps {
  theme: Theme;
  onLogin: (type: UserType) => void;
  onBack: () => void;
  userType: 'customer' | 'worker' | 'admin';
}

const adminCredentials = [
  { username: '@mandeepkaur', password: 'sm@mandeepkaur', name: 'Mandeep Kaur' },
  { username: '@vishesh', password: 'sm@vishesh', name: 'Vishesh' },
  { username: '@arveenkhan', password: 'sm@arveenkhan', name: 'Arveen Khan' },
  { username: '@hemesh', password: 'sm@hemesh', name: 'Hemesh' },
  { username: '@varnit', password: 'sm@varnit', name: 'Varnit' },
  { username: '@akshansh', password: 'sm@akshansh', name: 'Akshansh' },
  { username: '@harshchaudhary', password: 'sm@harshchaudhary', name: 'Harsh Chaudhary' },
  { username: '@samyakjain', password: 'sm@samyakjain', name: 'Samyak Jain' },
  { username: '@anshsharma', password: 'sm@anshsharma', name: 'Ansh Sharma' },
  { username: '@akshanshbansal', password: 'sm@akshanshbansal', name: 'Akshansh Bansal' },
];

export function AuthPage({ theme, onLogin, onBack, userType }: AuthPageProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  const [error, setError] = useState('');

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (userType === 'admin') {
      const admin = adminCredentials.find(
        a => a.username === formData.username && a.password === formData.password
      );
      if (admin) {
        alert(`Welcome ${admin.name}!`);
        onLogin('admin');
      } else {
        setError('Invalid admin credentials');
      }
      return;
    }

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      alert('Account created successfully! Please verify your email/phone.');
      setIsSignup(false);
    } else {
      // Login logic
      onLogin(userType);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`mb-6 flex items-center gap-2 ${
            isDark ? 'text-gray-400 hover:text-white' : 
            isColorful ? 'text-purple-600 hover:text-purple-700' : 
            'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Auth Card */}
        <div className={`p-8 rounded-2xl ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-2xl' : 
          'bg-white border-gray-200 shadow-xl'
        } border-2`}>
          {/* Logo */}
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-4 ${
              isDark ? 'bg-blue-600' : 
              isColorful ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 
              'bg-blue-500'
            } flex items-center justify-center`}>
              <span className="text-white text-2xl">SM</span>
            </div>
            <h2 className={isDark ? 'text-white' : 'text-gray-900'}>
              {userType === 'admin' ? 'Admin Access' : isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {userType === 'customer' ? 'Customer Portal' : userType === 'worker' ? 'Worker Portal' : 'System Administration'}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-300 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {userType === 'admin' ? (
              <>
                {/* Admin Login */}
                <div>
                  <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Username
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      placeholder="@username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                        isColorful ? 'bg-white border-purple-200' : 
                        'bg-white border-gray-300'
                      } border`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="password"
                      placeholder="sm@username"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                        isColorful ? 'bg-white border-purple-200' : 
                        'bg-white border-gray-300'
                      } border`}
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Customer/Worker Login */}
                {isSignup && (
                  <div>
                    <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                          isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                          isColorful ? 'bg-white border-purple-200' : 
                          'bg-white border-gray-300'
                        } border`}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Login Method Toggle */}
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setLoginMethod('email')}
                    className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                      loginMethod === 'email'
                        ? isDark
                          ? 'bg-blue-600 text-white'
                          : isColorful
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                          : 'bg-blue-500 text-white'
                        : isDark
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginMethod('phone')}
                    className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                      loginMethod === 'phone'
                        ? isDark
                          ? 'bg-blue-600 text-white'
                          : isColorful
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                          : 'bg-blue-500 text-white'
                        : isDark
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    Phone
                  </button>
                </div>

                {loginMethod === 'email' ? (
                  <div>
                    <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                          isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                          isColorful ? 'bg-white border-purple-200' : 
                          'bg-white border-gray-300'
                        } border`}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="tel"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                          isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                          isColorful ? 'bg-white border-purple-200' : 
                          'bg-white border-gray-300'
                        } border`}
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                        isColorful ? 'bg-white border-purple-200' : 
                        'bg-white border-gray-300'
                      } border`}
                      required
                    />
                  </div>
                </div>

                {isSignup && (
                  <div>
                    <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                          isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                          isColorful ? 'bg-white border-purple-200' : 
                          'bg-white border-gray-300'
                        } border`}
                        required
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg transition-all ${
                isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg' : 
                'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {userType === 'admin' ? 'Admin Login' : isSignup ? 'Create Account' : 'Login'}
            </button>
          </form>

          {userType !== 'admin' && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className={`${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 
                  isColorful ? 'text-purple-600 hover:text-purple-700' : 
                  'text-blue-600 hover:text-blue-700'
                }`}
              >
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
              </button>
            </div>
          )}

          {userType === 'admin' && (
            <div className={`mt-4 p-3 rounded-lg ${
              isDark ? 'bg-blue-900/20 border-blue-700' : 
              isColorful ? 'bg-blue-50 border-blue-200' : 
              'bg-blue-50 border-blue-200'
            } border`}>
              <p className={`text-center flex items-center justify-center gap-2 ${
                isDark ? 'text-blue-400' : 'text-blue-700'
              }`}>
                <Shield className="w-4 h-4" />
                Authorized team members only
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
