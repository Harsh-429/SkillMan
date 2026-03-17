import { X, Star, MapPin, Calendar, Award, Phone, Mail, Video, MessageCircle } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface Worker {
  id: number;
  name: string;
  category: string;
  experience: number;
  rating: number;
  price: number;
  location: string;
  skills: string[];
  isVip: boolean;
}

interface WorkerProfileProps {
  worker: Worker;
  onClose: () => void;
  theme: Theme;
}

export function WorkerProfile({ worker, onClose, theme }: WorkerProfileProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
        isDark ? 'bg-gray-800' : 
        isColorful ? 'bg-white/95 backdrop-blur-sm' : 
        'bg-white'
      } shadow-2xl`}>
        {/* Header */}
        <div className={`sticky top-0 p-6 border-b ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-400' : 
          'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className={isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}>
                  {worker.name}
                </h2>
                {worker.isVip && (
                  <span className={`px-3 py-1 rounded-full flex items-center gap-1 ${
                    isDark ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700' : 
                    isColorful ? 'bg-white/20 text-white border border-white/30' : 
                    'bg-yellow-100 text-yellow-700 border border-yellow-300'
                  }`}>
                    <Star className="w-4 h-4" />
                    VIP
                  </span>
                )}
              </div>
              <p className={isColorful ? 'text-purple-100' : isDark ? 'text-gray-400' : 'text-gray-600'}>
                {worker.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 
                isColorful ? 'hover:bg-white/20 text-white' : 
                'hover:bg-gray-200 text-gray-600'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 
              isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100' : 
              'bg-gray-50'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Star className={`w-5 h-5 ${
                  isDark ? 'text-yellow-400' : 
                  isColorful ? 'text-purple-600' : 
                  'text-yellow-500'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Rating</span>
              </div>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>{worker.rating}/5.0</p>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 
              isColorful ? 'bg-gradient-to-br from-blue-100 to-pink-100' : 
              'bg-gray-50'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className={`w-5 h-5 ${
                  isDark ? 'text-blue-400' : 
                  isColorful ? 'text-blue-600' : 
                  'text-blue-500'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Experience</span>
              </div>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>{worker.experience} years</p>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 
              isColorful ? 'bg-gradient-to-br from-pink-100 to-orange-100' : 
              'bg-gray-50'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className={`w-5 h-5 ${
                  isDark ? 'text-green-400' : 
                  isColorful ? 'text-pink-600' : 
                  'text-green-500'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Location</span>
              </div>
              <p className={isDark ? 'text-white' : 'text-gray-900'}>{worker.location}</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className={`mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Award className="w-5 h-5" />
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700 text-gray-300' : 
                    isColorful ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700' : 
                    'bg-blue-50 text-blue-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700 border-gray-600' : 
            isColorful ? 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200' : 
            'bg-green-50 border-green-200'
          } border-2`}>
            <div className="flex items-center justify-between">
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Daily Rate</span>
              <span className={`${
                isDark ? 'text-green-400' : 
                isColorful ? 'text-green-600' : 
                'text-green-600'
              }`}>₹{worker.price} per day</span>
            </div>
          </div>

          {/* Contact Options */}
          <div>
            <h3 className={`mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact {worker.name}
            </h3>
            {worker.isVip ? (
              <div className="space-y-2">
                <button className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
                  isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                  isColorful ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg' : 
                  'bg-blue-500 hover:bg-blue-600 text-white'
                }`}>
                  <Video className="w-5 h-5" />
                  Start Video Call
                </button>
                <button className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
                  isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
                  isColorful ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg' : 
                  'bg-green-500 hover:bg-green-600 text-white'
                }`}>
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                </button>
                <p className={`text-center mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  VIP members can make calls directly through the platform
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-purple-50' : 
                  'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-3">
                    <Phone className={`w-5 h-5 ${
                      isDark ? 'text-gray-400' : 
                      isColorful ? 'text-purple-600' : 
                      'text-gray-600'
                    }`} />
                    <div>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                      <p className={isDark ? 'text-white' : 'text-gray-900'}>+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-blue-50' : 
                  'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-3">
                    <Mail className={`w-5 h-5 ${
                      isDark ? 'text-gray-400' : 
                      isColorful ? 'text-blue-600' : 
                      'text-gray-600'
                    }`} />
                    <div>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                      <p className={isDark ? 'text-white' : 'text-gray-900'}>{worker.name.toLowerCase().replace(' ', '.')}@email.com</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-blue-900/20 border-blue-700' : 
                  isColorful ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300' : 
                  'bg-blue-50 border-blue-200'
                } border`}>
                  <p className={`text-center ${
                    isDark ? 'text-blue-400' : 
                    isColorful ? 'text-purple-700' : 
                    'text-blue-700'
                  }`}>
                    Upgrade to VIP for in-app video and audio calls
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
