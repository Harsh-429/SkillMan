import { useState } from 'react';
import { X, Calendar, Clock, MapPin, FileText } from 'lucide-react';

type Theme = 'light' | 'dark';

interface RequestFormProps {
  workerName: string;
  workerId: number;
  onClose: () => void;
  onSubmit: (request: any) => void;
  theme: Theme;
}

export function RequestForm({ workerName, workerId, onClose, onSubmit, theme }: RequestFormProps) {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    description: '',
    budget: '',
    duration: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      workerId,
      workerName,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-2xl rounded-2xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border shadow-2xl`}>
        {/* Header */}
        <div className={`px-6 py-4 border-b ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        } flex items-center justify-between`}>
          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
              <strong>Send Request to {workerName}</strong>
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Fill in the details for your work requirement
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${
              isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Date *</strong>
              </label>
              <div className="relative">
                <Calendar className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                    'bg-gray-50 border-gray-300 text-gray-900'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Time *</strong>
              </label>
              <div className="relative">
                <Clock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                    'bg-gray-50 border-gray-300 text-gray-900'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>
          </div>

          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Location *</strong>
            </label>
            <div className="relative">
              <MapPin className={`absolute left-3 top-3 w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Enter work location address"
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
                  'bg-gray-50 border-gray-300 text-gray-900'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Work Description *</strong>
            </label>
            <div className="relative">
              <FileText className={`absolute left-3 top-3 w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the work you need done..."
                rows={4}
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
                  'bg-gray-50 border-gray-300 text-gray-900'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Budget (₹) *</strong>
              </label>
              <input
                type="number"
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="Enter your budget"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
                  'bg-gray-50 border-gray-300 text-gray-900'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Duration (days) *</strong>
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  'bg-gray-50 border-gray-300 text-gray-900'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 py-3 rounded-lg ${
                isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 
                'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex-1 py-3 rounded-lg ${
                isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <strong>Send Request</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
