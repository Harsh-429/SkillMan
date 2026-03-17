import { useState } from 'react';
import { Save, Crown, Check, Upload, Shield, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import { TrustBadges } from './TrustBadges';

type Theme = 'light' | 'dark' | 'colorful';

interface ProfileManagementProps {
  theme: Theme;
  isVipMember: boolean;
  setIsVipMember: (value: boolean) => void;
}

const categories = ['Electrician', 'Carpenter', 'Plumber', 'Painter', 'Mason', 'Welder'];
const skillOptions = {
  Electrician: ['Wiring', 'Panel Work', 'Repairs', 'Installation', 'Maintenance'],
  Carpenter: ['Furniture', 'Doors', 'Windows', 'Cabinets', 'Flooring'],
  Plumber: ['Pipe Fitting', 'Repairs', 'Installation', 'Drainage', 'Water Supply'],
  Painter: ['Interior', 'Exterior', 'Texture', 'Polish', 'Spray Painting'],
  Mason: ['Brickwork', 'Plastering', 'Tiling', 'Concrete Work', 'Stone Work'],
  Welder: ['Arc Welding', 'Gas Welding', 'TIG', 'MIG', 'Fabrication'],
};

export function ProfileManagement({ theme, isVipMember, setIsVipMember }: ProfileManagementProps) {
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    category: 'Electrician',
    experience: 8,
    location: 'Mumbai',
    dailyRate: 500,
    skills: ['Wiring', 'Repairs', 'Installation'],
    about: 'Experienced electrician with 8 years of expertise in residential and commercial projects.',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
  });

  const [verificationStatus, setVerificationStatus] = useState({
    kycVerified: true,
    policeVerified: false,
    certificateCount: 24,
    trustScore: 85,
    kycPending: false,
    policePending: false,
  });

  const [showSOSAlert, setShowSOSAlert] = useState(false);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handleSkillToggle = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleKYCUpload = () => {
    setVerificationStatus(prev => ({ ...prev, kycPending: true }));
    // Simulate upload
    setTimeout(() => {
      setVerificationStatus(prev => ({ ...prev, kycPending: false, kycVerified: true, trustScore: prev.trustScore + 10 }));
    }, 2000);
  };

  const handlePoliceVerification = () => {
    setVerificationStatus(prev => ({ ...prev, policePending: true }));
    // Simulate verification request
    setTimeout(() => {
      alert('Police verification request submitted. You will be contacted within 48 hours.');
      setVerificationStatus(prev => ({ ...prev, policePending: false }));
    }, 1500);
  };

  const handleSOS = () => {
    setShowSOSAlert(true);
    // Simulate emergency notification
    setTimeout(() => {
      alert('🚨 Emergency services notified! Your location has been shared. Help is on the way!');
      setShowSOSAlert(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Trust & Safety Section */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-400 to-green-400 shadow-xl' : 
        'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200'
      } border-2`}>
        <div className="flex items-center gap-3 mb-4">
          <Shield className={`w-6 h-6 ${
            isDark ? 'text-blue-400' : isColorful ? 'text-white' : 'text-blue-600'
          }`} />
          <h3 className={isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}>
            Trust & Safety
          </h3>
        </div>

        {/* Trust Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Trust Score
            </span>
            <span className={`${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              {verificationStatus.trustScore}/100
            </span>
          </div>
          <div className={`w-full h-3 rounded-full ${isDark ? 'bg-gray-700' : isColorful ? 'bg-white/30' : 'bg-gray-200'}`}>
            <div 
              className={`h-full rounded-full ${
                verificationStatus.trustScore >= 80 
                  ? 'bg-gradient-to-r from-green-400 to-green-600' 
                  : 'bg-gradient-to-r from-yellow-400 to-orange-400'
              }`}
              style={{ width: `${verificationStatus.trustScore}%` }}
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-4">
          <TrustBadges theme={theme} badges={verificationStatus} />
        </div>

        {/* Verification Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-800/50' : isColorful ? 'bg-white/20' : 'bg-white'
          }`}>
            <h4 className={`mb-2 flex items-center gap-2 ${
              isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <CheckCircle className="w-5 h-5" />
              KYC Verification
            </h4>
            {verificationStatus.kycVerified ? (
              <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                ✓ Aadhaar/PAN verified
              </p>
            ) : (
              <>
                <p className={`mb-3 ${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Upload Aadhaar or PAN card
                </p>
                <button
                  onClick={handleKYCUpload}
                  disabled={verificationStatus.kycPending}
                  className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                    verificationStatus.kycPending
                      ? 'bg-gray-400 cursor-not-allowed'
                      : isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : isColorful
                      ? 'bg-white hover:bg-white/90 text-blue-600'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  {verificationStatus.kycPending ? 'Uploading...' : 'Upload Document'}
                </button>
              </>
            )}
          </div>

          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-800/50' : isColorful ? 'bg-white/20' : 'bg-white'
          }`}>
            <h4 className={`mb-2 flex items-center gap-2 ${
              isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <Shield className="w-5 h-5" />
              Police Verification
            </h4>
            {verificationStatus.policeVerified ? (
              <p className={`${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                ✓ Background verified
              </p>
            ) : (
              <>
                <p className={`mb-3 ${isColorful ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Get background verified
                </p>
                <button
                  onClick={handlePoliceVerification}
                  disabled={verificationStatus.policePending}
                  className={`w-full py-2 px-4 rounded-lg ${
                    verificationStatus.policePending
                      ? 'bg-gray-400 cursor-not-allowed'
                      : isDark
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : isColorful
                      ? 'bg-white hover:bg-white/90 text-purple-600'
                      : 'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}
                >
                  {verificationStatus.policePending ? 'Processing...' : 'Apply Now'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* SOS Emergency Button */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-red-900/20 border-red-700' : 
        isColorful ? 'bg-gradient-to-r from-red-100 to-orange-100 border-red-200 shadow-lg' : 
        'bg-red-50 border-red-200'
      } border-2`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className={`w-6 h-6 ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`} />
            <div>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                Emergency SOS
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Use if you feel unsafe on job site
              </p>
            </div>
          </div>
          <button
            onClick={handleSOS}
            disabled={showSOSAlert}
            className={`px-6 py-3 rounded-lg transition-all ${
              showSOSAlert
                ? 'bg-gray-400 cursor-not-allowed'
                : isDark
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : isColorful
                ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            {showSOSAlert ? 'Alerting...' : '🚨 SOS'}
          </button>
        </div>
      </div>

      {/* VIP Membership Card */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-700' : 
        isColorful ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 shadow-xl shadow-orange-200' : 
        'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
      } border-2`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Crown className={`w-6 h-6 ${
                isColorful ? 'text-white' : isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`} />
              <h3 className={isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}>
                VIP Membership
              </h3>
            </div>
            <p className={`mb-4 ${
              isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Get in-app video and audio calls, priority listing, and verified badge
            </p>
            <ul className={`space-y-2 mb-4 ${
              isColorful ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                Video & Audio calls in platform
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                Priority in search results
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                Verified badge on profile
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                Advanced analytics
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => setIsVipMember(!isVipMember)}
          className={`w-full py-3 px-6 rounded-lg ${
            isVipMember
              ? isDark
                ? 'bg-gray-700 text-white'
                : isColorful
                ? 'bg-white/20 text-white border-2 border-white/50'
                : 'bg-white text-gray-900 border-2 border-gray-200'
              : isDark
              ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
              : isColorful
              ? 'bg-white hover:bg-white/90 text-orange-600 shadow-lg'
              : 'bg-yellow-500 hover:bg-yellow-600 text-white'
          } transition-all`}
        >
          {isVipMember ? 'VIP Active ✓' : 'Upgrade to VIP - ₹999/month'}
        </button>
      </div>

      {/* Profile Form */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <h3 className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Profile Information
        </h3>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                'bg-white border-gray-300 text-gray-900'
              } border`}
            />
          </div>

          {/* Category */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Category
            </label>
            <select
              value={profile.category}
              onChange={(e) => setProfile({ ...profile, category: e.target.value, skills: [] })}
              className={`w-full px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                'bg-white border-gray-300 text-gray-900'
              } border`}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Experience & Daily Rate */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Experience (years)
              </label>
              <input
                type="number"
                value={profile.experience}
                onChange={(e) => setProfile({ ...profile, experience: Number(e.target.value) })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                  'bg-white border-gray-300 text-gray-900'
                } border`}
              />
            </div>
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Daily Rate (₹)
              </label>
              <input
                type="number"
                value={profile.dailyRate}
                onChange={(e) => setProfile({ ...profile, dailyRate: Number(e.target.value) })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                  'bg-white border-gray-300 text-gray-900'
                } border`}
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                'bg-white border-gray-300 text-gray-900'
              } border`}
            />
          </div>

          {/* Skills */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Skills
            </label>
            <div className="flex flex-wrap gap-2">
              {skillOptions[profile.category as keyof typeof skillOptions]?.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    profile.skills.includes(skill)
                      ? isDark
                        ? 'bg-green-600 text-white'
                        : isColorful
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                        : 'bg-green-500 text-white'
                      : isDark
                      ? 'bg-gray-700 text-gray-300 border border-gray-600'
                      : isColorful
                      ? 'bg-purple-100 text-purple-700 border border-purple-200'
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              About
            </label>
            <textarea
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              rows={4}
              className={`w-full px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                'bg-white border-gray-300 text-gray-900'
              } border`}
            />
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                  'bg-white border-gray-300 text-gray-900'
                } border`}
              />
            </div>
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  isColorful ? 'bg-white border-purple-200 text-gray-900' : 
                  'bg-white border-gray-300 text-gray-900'
                } border`}
              />
            </div>
          </div>

          {/* Save Button */}
          <button className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
            isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
            isColorful ? 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white shadow-lg' : 
            'bg-green-500 hover:bg-green-600 text-white'
          } transition-all`}>
            <Save className="w-5 h-5" />
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}