import { useState } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface LocationSearchProps {
  theme: Theme;
  onLocationSelect: (lat: number, lng: number, radius: number) => void;
}

export function LocationSearch({ theme, onLocationSelect }: LocationSearchProps) {
  const [radius, setRadius] = useState(5);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          onLocationSelect(location.lat, location.lng, radius);
          alert(`Location detected! Searching for workers within ${radius}km`);
        },
        (error) => {
          alert('Unable to get location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className={`p-6 rounded-xl ${
      isDark ? 'bg-gray-800 border-gray-700' : 
      isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200 shadow-lg' : 
      'bg-white border-gray-200 shadow-md'
    } border`}>
      <div className="flex items-center gap-3 mb-4">
        <MapPin className={`w-6 h-6 ${
          isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'
        }`} />
        <h3 className={isDark ? 'text-white' : 'text-gray-900'}>
          Find Workers Nearby
        </h3>
      </div>

      <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Find skilled workers in your neighborhood to save time and cost
      </p>

      {userLocation && (
        <div className={`mb-4 p-3 rounded-lg ${
          isDark ? 'bg-green-900/20 border-green-700' : 
          isColorful ? 'bg-green-100 border-green-300' : 
          'bg-green-100 border-green-300'
        } border`}>
          <p className={`flex items-center gap-2 ${
            isDark ? 'text-green-400' : 'text-green-700'
          }`}>
            <Navigation className="w-4 h-4" />
            Location detected: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
          </p>
        </div>
      )}

      <div className="mb-4">
        <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Search Radius: {radius}km
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between mt-1">
          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>1km</span>
          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>50km</span>
        </div>
      </div>

      <button
        onClick={getCurrentLocation}
        className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
          isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
          isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg' : 
          'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        <Navigation className="w-5 h-5" />
        Use My Location
      </button>

      {/* Map Preview */}
      <div className={`mt-4 rounded-lg overflow-hidden ${
        isDark ? 'bg-gray-700' : isColorful ? 'bg-purple-50' : 'bg-gray-100'
      } h-48 flex items-center justify-center`}>
        <img 
          src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMG5hdmlnYXRpb258ZW58MXx8fHwxNjcyNzQ5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Map"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute">
          <MapPin className={`w-12 h-12 ${
            isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'
          }`} />
        </div>
      </div>

      <div className={`mt-4 p-3 rounded-lg ${
        isDark ? 'bg-blue-900/20 border-blue-700' : 
        isColorful ? 'bg-blue-50 border-blue-200' : 
        'bg-blue-50 border-blue-200'
      } border`}>
        <p className={`flex items-center gap-2 ${
          isDark ? 'text-blue-400' : 'text-blue-700'
        }`}>
          <Clock className="w-4 h-4" />
          Workers within {radius}km can reach you in ~{Math.round(radius * 4)}-{Math.round(radius * 6)} minutes
        </p>
      </div>
    </div>
  );
}
