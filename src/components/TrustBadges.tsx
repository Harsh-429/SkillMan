import { Shield, CheckCircle, Award, AlertTriangle } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface TrustBadgesProps {
  theme: Theme;
  badges: {
    kycVerified: boolean;
    policeVerified: boolean;
    certificateCount: number;
    trustScore: number;
  };
}

export function TrustBadges({ theme, badges }: TrustBadgesProps) {
  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="flex flex-wrap gap-2">
      {badges.kycVerified && (
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
          isDark ? 'bg-green-900/30 text-green-400 border border-green-700' : 
          isColorful ? 'bg-gradient-to-r from-green-400 to-teal-400 text-white' : 
          'bg-green-100 text-green-700 border border-green-300'
        }`}>
          <CheckCircle className="w-4 h-4" />
          <span>KYC Verified</span>
        </div>
      )}
      
      {badges.policeVerified && (
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
          isDark ? 'bg-blue-900/30 text-blue-400 border border-blue-700' : 
          isColorful ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white' : 
          'bg-blue-100 text-blue-700 border border-blue-300'
        }`}>
          <Shield className="w-4 h-4" />
          <span>Police Verified</span>
        </div>
      )}
      
      {badges.certificateCount > 0 && (
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
          isDark ? 'bg-purple-900/30 text-purple-400 border border-purple-700' : 
          isColorful ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white' : 
          'bg-purple-100 text-purple-700 border border-purple-300'
        }`}>
          <Award className="w-4 h-4" />
          <span>{badges.certificateCount} Jobs Completed</span>
        </div>
      )}
      
      {badges.trustScore >= 80 && (
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
          isDark ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700' : 
          isColorful ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' : 
          'bg-yellow-100 text-yellow-700 border border-yellow-300'
        }`}>
          <Award className="w-4 h-4" />
          <span>Trusted Worker</span>
        </div>
      )}
    </div>
  );
}
