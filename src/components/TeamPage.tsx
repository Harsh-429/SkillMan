import { Users, Award, Code, Palette as PaletteIcon, MessageSquare } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface TeamPageProps {
  theme: Theme;
}

const team = {
  mentors: [
    { name: 'Mandeep Kaur', role: 'Senior Mentor', expertise: 'Business Strategy & Growth' },
    { name: 'Vishesh', role: 'Technical Mentor', expertise: 'System Architecture' },
  ],
  techHead: {
    name: 'Arveen Khan',
    role: 'Tech Head',
    expertise: 'Full Stack Development',
  },
  subHeads: [
    { name: 'Hemesh', role: 'Technical Sub-Head', expertise: 'Backend Development' },
  ],
  backend: [
    { name: 'Arveen Khan', role: 'Backend Developer' },
    { name: 'Hemesh', role: 'Backend Developer' },
    { name: 'Varnit', role: 'Backend Developer' },
    { name: 'Akshansh', role: 'Backend Developer' },
  ],
  frontend: [
    { name: 'Harsh Chaudhary', role: 'Frontend Developer' },
    { name: 'Samyak Jain', role: 'Frontend Developer' },
    { name: 'Ansh Sharma', role: 'Frontend Developer' },
    { name: 'Arveen Khan', role: 'Full Stack Developer' },
  ],
  design: [
    { name: 'Harsh Chaudhary', role: 'UI/UX Designer' },
    { name: 'Samyak Jain', role: 'UI/UX Designer' },
  ],
  management: [
    { name: 'Harsh Chaudhary', role: 'Project Manager' },
    { name: 'Akshansh Bansal', role: 'Operations Manager' },
    { name: 'Samyak Jain', role: 'Product Manager' },
  ],
};

export function TeamPage({ theme }: TeamPageProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`p-8 rounded-2xl text-center ${
        isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl' : 
        'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
      } border`}>
        <img 
          src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjcwOTQyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team"
          className="w-full h-48 object-cover rounded-xl mb-6"
        />
        <h2 className={`mb-3 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
          Meet Our Team
        </h2>
        <p className={`max-w-2xl mx-auto ${
          isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          A dedicated team of professionals working to revolutionize the labour workforce digitalization
        </p>
      </div>

      {/* Mentors */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className={`w-6 h-6 ${
            isDark ? 'text-yellow-400' : isColorful ? 'text-purple-600' : 'text-yellow-600'
          }`} />
          <h3 className={isDark ? 'text-white' : 'text-gray-900'}>Mentors</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {team.mentors.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border`}
            >
              <div className={`w-16 h-16 rounded-full mb-4 ${
                isDark ? 'bg-yellow-900/30' : 
                isColorful ? 'bg-gradient-to-br from-yellow-400 to-orange-400' : 
                'bg-yellow-100'
              } flex items-center justify-center`}>
                <Award className={`w-8 h-8 ${
                  isDark ? 'text-yellow-400' : isColorful ? 'text-white' : 'text-yellow-600'
                }`} />
              </div>
              <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
              <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Leadership */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Code className={`w-6 h-6 ${
            isDark ? 'text-blue-400' : isColorful ? 'text-blue-600' : 'text-blue-600'
          }`} />
          <h3 className={isDark ? 'text-white' : 'text-gray-900'}>Technical Leadership</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200 shadow-lg' : 
            'bg-white border-gray-200 shadow-md'
          } border`}>
            <div className={`w-16 h-16 rounded-full mb-4 ${
              isDark ? 'bg-blue-900/30' : 
              isColorful ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 
              'bg-blue-100'
            } flex items-center justify-center`}>
              <Code className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : isColorful ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{team.techHead.name}</h4>
            <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{team.techHead.role}</p>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{team.techHead.expertise}</p>
          </div>
          {team.subHeads.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border`}
            >
              <div className={`w-16 h-16 rounded-full mb-4 ${
                isDark ? 'bg-purple-900/30' : 
                isColorful ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 
                'bg-purple-100'
              } flex items-center justify-center`}>
                <Code className={`w-8 h-8 ${
                  isDark ? 'text-purple-400' : isColorful ? 'text-white' : 'text-purple-600'
                }`} />
              </div>
              <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
              <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Development Teams */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Backend Team */}
        <div>
          <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Backend Team</h3>
          <div className="space-y-3">
            {team.backend.map((member, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-green-100 to-teal-100 border-green-200' : 
                  'bg-white border-gray-200'
                } border`}
              >
                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Team */}
        <div>
          <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frontend Team</h3>
          <div className="space-y-3">
            {team.frontend.map((member, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200' : 
                  'bg-white border-gray-200'
                } border`}
              >
                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design & Management */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Design Team */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PaletteIcon className={`w-6 h-6 ${
              isDark ? 'text-pink-400' : isColorful ? 'text-pink-600' : 'text-pink-600'
            }`} />
            <h3 className={isDark ? 'text-white' : 'text-gray-900'}>UI/UX Design</h3>
          </div>
          <div className="space-y-3">
            {team.design.map((member, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200' : 
                  'bg-white border-gray-200'
                } border`}
              >
                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className={`w-6 h-6 ${
              isDark ? 'text-orange-400' : isColorful ? 'text-orange-600' : 'text-orange-600'
            }`} />
            <h3 className={isDark ? 'text-white' : 'text-gray-900'}>Management</h3>
          </div>
          <div className="space-y-3">
            {team.management.map((member, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200' : 
                  'bg-white border-gray-200'
                } border`}
              >
                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-400 to-green-400 shadow-xl' : 
        'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200'
      } border`}>
        <div className="flex items-center gap-4 mb-4">
          <MessageSquare className={`w-8 h-8 ${
            isDark ? 'text-blue-400' : isColorful ? 'text-white' : 'text-blue-600'
          }`} />
          <div>
            <h3 className={`mb-1 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            <p className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Have questions? Our team is here to help!
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-800/50' : isColorful ? 'bg-white/20' : 'bg-white'
          }`}>
            <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
            <p className={`${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              support@labourwork.com
            </p>
          </div>
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-800/50' : isColorful ? 'bg-white/20' : 'bg-white'
          }`}>
            <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
            <p className={`${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              1800-123-4567
            </p>
          </div>
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-800/50' : isColorful ? 'bg-white/20' : 'bg-white'
          }`}>
            <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>WhatsApp</p>
            <p className={`${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              +91-98765-43210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}