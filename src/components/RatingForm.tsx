import { useState } from 'react';
import { X, Star } from 'lucide-react';

type Theme = 'light' | 'dark';

interface RatingFormProps {
  workerName: string;
  workerId: number;
  onClose: () => void;
  onSubmit: (rating: any) => void;
  theme: Theme;
}

export function RatingForm({ workerName, workerId, onClose, onSubmit, theme }: RatingFormProps) {
  const isDark = theme === 'dark';
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [categories, setCategories] = useState({
    quality: 0,
    punctuality: 0,
    professionalism: 0,
    communication: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit({
      workerId,
      workerName,
      rating,
      review,
      categories,
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  const renderStars = (count: number, value: number, onChange: (val: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => count === 5 && setHoveredRating(star)}
            onMouseLeave={() => count === 5 && setHoveredRating(0)}
            className="focus:outline-none"
          >
            <Star
              className={`w-${count === 5 ? '8' : '5'} h-${count === 5 ? '8' : '5'} ${
                star <= (count === 5 ? (hoveredRating || rating) : value)
                  ? 'fill-yellow-400 text-yellow-400'
                  : isDark
                  ? 'text-gray-600'
                  : 'text-gray-300'
              } transition-colors`}
            />
          </button>
        ))}
      </div>
    );
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
              <strong>Rate {workerName}</strong>
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Share your experience with this worker
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Overall Rating */}
          <div className="text-center">
            <label className={`block mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Overall Rating *</strong>
            </label>
            <div className="flex justify-center mb-2">
              {renderStars(5, rating, setRating)}
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {rating === 0 ? 'Select a rating' : 
               rating === 1 ? 'Poor' :
               rating === 2 ? 'Fair' :
               rating === 3 ? 'Good' :
               rating === 4 ? 'Very Good' :
               'Excellent'}
            </p>
          </div>

          {/* Category Ratings */}
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <h4 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <strong>Rate by Category</strong>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Quality of Work</span>
                {renderStars(5, categories.quality, (val) => setCategories({ ...categories, quality: val }))}
              </div>
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Punctuality</span>
                {renderStars(5, categories.punctuality, (val) => setCategories({ ...categories, punctuality: val }))}
              </div>
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Professionalism</span>
                {renderStars(5, categories.professionalism, (val) => setCategories({ ...categories, professionalism: val }))}
              </div>
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Communication</span>
                {renderStars(5, categories.communication, (val) => setCategories({ ...categories, communication: val }))}
              </div>
            </div>
          </div>

          {/* Review */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>Write a Review (Optional)</strong>
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share details about your experience..."
              rows={4}
              className={`w-full px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
                'bg-gray-50 border-gray-300 text-gray-900'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div className="flex gap-3">
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
              <strong>Submit Rating</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
