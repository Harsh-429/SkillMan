import { useState } from 'react';
import { Play, Award, Clock, CheckCircle, BookOpen } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface SkillLearningProps {
  theme: Theme;
}

const courses = [
  {
    id: 1,
    title: 'Advanced Electrical Safety',
    duration: '8 mins',
    category: 'Electrician',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29sc3xlbnwxfHx8fDE3NjcxMDY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Modern Carpentry Techniques',
    duration: '10 mins',
    category: 'Carpenter',
    completed: true,
    thumbnail: 'https://images.unsplash.com/photo-1626081063434-79a2169791b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NjY5OTE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Customer Communication Skills',
    duration: '5 mins',
    category: 'All',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGVkdWNhdGlvbiUyMG9ubGluZXxlbnwxfHx8fDE3NjcwODgxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Tool Maintenance & Care',
    duration: '7 mins',
    category: 'All',
    completed: false,
    thumbnail: 'https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MDQ5NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const skillTests = [
  { id: 1, name: 'Electrical Basics', badge: 'Basic Electrician', passed: true },
  { id: 2, name: 'Advanced Wiring', badge: 'Expert Electrician', passed: false },
  { id: 3, name: 'Safety Standards', badge: 'Safety Certified', passed: true },
];

export function SkillLearning({ theme }: SkillLearningProps) {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700' : 
        isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl' : 
        'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'
      } border`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-purple-600' : 
            isColorful ? 'bg-white/20' : 
            'bg-purple-100'
          }`}>
            <BookOpen className={`w-6 h-6 ${
              isDark ? 'text-purple-400' : isColorful ? 'text-white' : 'text-purple-600'
            }`} />
          </div>
          <div className="flex-1">
            <h3 className={`mb-2 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              Skill Development Center
            </h3>
            <p className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Learn new skills, earn certificates, and increase your earning potential
            </p>
          </div>
        </div>
      </div>

      {/* Video Courses */}
      <div>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Video Courses
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-xl overflow-hidden ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border cursor-pointer hover:shadow-xl transition-all`}
              onClick={() => setSelectedCourse(course.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${
                    isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/90'
                  } flex items-center justify-center`}>
                    <Play className={`w-8 h-8 ${isColorful ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </div>
                {course.completed && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Completed
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full ${
                    isDark ? 'bg-gray-700 text-gray-300' : 
                    isColorful ? 'bg-purple-100 text-purple-700' : 
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{course.duration}</span>
                  </div>
                </div>
                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {course.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Tests */}
      <div>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Skill Certification Tests
        </h3>
        <div className="space-y-3">
          {skillTests.map((test) => (
            <div
              key={test.id}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${
                    test.passed
                      ? isDark
                        ? 'bg-green-900/30'
                        : isColorful
                        ? 'bg-gradient-to-br from-green-400 to-teal-400'
                        : 'bg-green-100'
                      : isDark
                      ? 'bg-gray-700'
                      : isColorful
                      ? 'bg-gradient-to-br from-purple-100 to-blue-100'
                      : 'bg-gray-100'
                  } flex items-center justify-center`}>
                    {test.passed ? (
                      <CheckCircle className={`w-6 h-6 ${
                        isDark ? 'text-green-400' : isColorful ? 'text-white' : 'text-green-600'
                      }`} />
                    ) : (
                      <Award className={`w-6 h-6 ${
                        isDark ? 'text-gray-400' : isColorful ? 'text-purple-600' : 'text-gray-600'
                      }`} />
                    )}
                  </div>
                  <div>
                    <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {test.name}
                    </h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {test.passed ? `✓ Earned: ${test.badge}` : `Unlock: ${test.badge}`}
                    </p>
                  </div>
                </div>
                <button className={`px-6 py-2 rounded-lg ${
                  test.passed
                    ? isDark
                      ? 'bg-gray-700 text-gray-400'
                      : isColorful
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                    : isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : isColorful
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}>
                  {test.passed ? 'Completed' : 'Take Test'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-blue-900/20 border-blue-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200 shadow-lg' : 
        'bg-blue-50 border-blue-200'
      } border`}>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Why Learn with Us?
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <div className={`mb-2 ${isDark ? 'text-blue-400' : isColorful ? 'text-blue-600' : 'text-blue-600'}`}>
              📈 Earn 20% More
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Certified workers earn higher rates
            </p>
          </div>
          <div>
            <div className={`mb-2 ${isDark ? 'text-purple-400' : isColorful ? 'text-purple-600' : 'text-purple-600'}`}>
              ⭐ Get Priority
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Appear first in search results
            </p>
          </div>
          <div>
            <div className={`mb-2 ${isDark ? 'text-green-400' : isColorful ? 'text-green-600' : 'text-green-600'}`}>
              🎯 More Jobs
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Customers prefer skilled workers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
