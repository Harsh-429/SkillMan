import { useState } from 'react';
import { Search, Filter, LogOut, Sun, Moon, MessageCircle, Star, User as UserIcon, MapPin, Send, History } from 'lucide-react';
import { WorkerProfile } from './WorkerProfile';
import { CustomerProfile } from './CustomerProfile';
import { LocationSearch } from './LocationSearch';
import { ChatWindow } from './ChatWindow';
import { RequestForm } from './RequestForm';
import { RatingForm } from './RatingForm';

type Theme = 'light' | 'dark';

interface CustomerDashboardProps {
  onLogout: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const workerCategories = [
  'All Workers',
  'Electricians',
  'Carpenters',
  'Plumbers',
  'Painters',
  'Masons',
  'Welders',
  'Daily Wage Laborers',
  'Tech Workers',
  'Professional Artists',
  'Cameramen',
  'Farming Laborers',
];

const mockWorkers = [
  { id: 1, name: 'Rajesh Kumar', category: 'Electricians', experience: 8, rating: 4.8, price: 500, location: 'Andheri, Mumbai', distance: 2.5, skills: ['Wiring', 'Repairs', 'Installation'], isVip: true },
  { id: 2, name: 'Amit Singh', category: 'Carpenters', experience: 12, rating: 4.9, price: 600, location: 'Bandra, Mumbai', distance: 5.2, skills: ['Furniture', 'Doors', 'Windows'], isVip: true },
  { id: 3, name: 'Suresh Patel', category: 'Plumbers', experience: 5, rating: 4.5, price: 400, location: 'Andheri, Mumbai', distance: 1.8, skills: ['Pipe Fitting', 'Repairs', 'Installation'], isVip: false },
  { id: 4, name: 'Vikram Sharma', category: 'Tech Workers', experience: 10, rating: 4.7, price: 1200, location: 'Powai, Mumbai', distance: 8.3, skills: ['IT Support', 'Network Setup', 'Software'], isVip: true },
  { id: 5, name: 'Ramesh Yadav', category: 'Professional Artists', experience: 6, rating: 4.6, price: 1500, location: 'Kurla, Mumbai', distance: 6.7, skills: ['Portrait', 'Murals', 'Digital Art'], isVip: false },
  { id: 6, name: 'Dinesh Verma', category: 'Cameramen', experience: 15, rating: 4.9, price: 2000, location: 'Andheri, Mumbai', distance: 3.1, skills: ['Wedding', 'Events', 'Documentary'], isVip: true },
  { id: 7, name: 'Mohan Lal', category: 'Farming Laborers', experience: 20, rating: 4.6, price: 350, location: 'Vasai, Mumbai', distance: 12.5, skills: ['Harvesting', 'Plowing', 'Irrigation'], isVip: false },
  { id: 8, name: 'Ravi Gupta', category: 'Daily Wage Laborers', experience: 3, rating: 4.4, price: 300, location: 'Dahisar, Mumbai', distance: 9.8, skills: ['General Work', 'Loading', 'Cleaning'], isVip: false },
];

export function CustomerDashboard({ onLogout, theme, setTheme }: CustomerDashboardProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Workers');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [minExperience, setMinExperience] = useState(0);
  const [selectedWorker, setSelectedWorker] = useState<typeof mockWorkers[0] | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [maxDistance, setMaxDistance] = useState(50);
  const [showChat, setShowChat] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [chatWorker, setChatWorker] = useState<typeof mockWorkers[0] | null>(null);
  const [showMyRequests, setShowMyRequests] = useState(false);
  const [myRequests, setMyRequests] = useState<any[]>([]);

  const isDark = theme === 'dark';

  const handleLocationSelect = (lat: number, lng: number, radius: number) => {
    setMaxDistance(radius);
    setShowLocationSearch(false);
  };

  const handleOpenChat = (worker: typeof mockWorkers[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setChatWorker(worker);
    setShowChat(true);
  };

  const handleSendRequest = (worker: typeof mockWorkers[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWorker(worker);
    setShowRequestForm(true);
  };

  const handleRequestSubmit = (request: any) => {
    setMyRequests([...myRequests, request]);
    alert('Request sent successfully! The worker will respond soon.');
  };

  const handleRateWorker = (worker: typeof mockWorkers[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWorker(worker);
    setShowRatingForm(true);
  };

  const handleRatingSubmit = (rating: any) => {
    alert('Thank you for your rating!');
  };

  const filteredWorkers = mockWorkers.filter(worker => {
    const matchesCategory = selectedCategory === 'All Workers' || worker.category === selectedCategory;
    const matchesSearch = worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         worker.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = worker.price >= priceRange[0] && worker.price <= priceRange[1];
    const matchesExperience = worker.experience >= minExperience;
    const matchesDistance = worker.distance <= maxDistance;
    return matchesCategory && matchesSearch && matchesPrice && matchesExperience && matchesDistance;
  }).sort((a, b) => a.distance - b.distance);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg ${
                isDark ? 'bg-blue-600' : 'bg-blue-500'
              } flex items-center justify-center shadow-lg`}>
                <span className="text-white">SM</span>
              </div>
              <h2 className={isDark ? 'text-white' : 'text-gray-900'}>
                <strong>Customer Dashboard</strong>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* My Requests */}
              <button
                onClick={() => setShowMyRequests(!showMyRequests)}
                className={`p-2 rounded-lg flex items-center gap-2 ${
                  showMyRequests
                    ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                    : isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <History className="w-5 h-5" />
                {myRequests.length > 0 && (
                  <span className="px-2 py-1 rounded-full bg-red-500 text-white text-xs">
                    {myRequests.length}
                  </span>
                )}
              </button>
              {/* Profile */}
              <button
                onClick={() => setShowProfile(!showProfile)}
                className={`p-2 rounded-lg ${
                  showProfile
                    ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                    : isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <UserIcon className="w-5 h-5" />
              </button>
              {/* Theme */}
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-600 text-white' : 
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Moon className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className={`p-2 rounded-lg ${
                  isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showProfile ? (
          <CustomerProfile theme={theme} />
        ) : showMyRequests ? (
          <div className={`p-6 rounded-xl ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
          } border`}>
            <h2 className={`mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <strong>My Requests</strong>
            </h2>
            {myRequests.length === 0 ? (
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                No requests sent yet. Browse workers and send requests!
              </p>
            ) : (
              <div className="space-y-4">
                {myRequests.map((request, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className={isDark ? 'text-white' : 'text-gray-900'}>
                          <strong>{request.workerName}</strong>
                        </h4>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {request.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${
                        isDark ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Pending
                      </span>
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <p>📅 {request.date} at {request.time}</p>
                      <p>📍 {request.location}</p>
                      <p>💰 Budget: ₹{request.budget}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {showLocationSearch && (
              <div className="mb-6">
                <LocationSearch theme={theme} onLocationSelect={handleLocationSelect} />
              </div>
            )}

            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    placeholder="🔍 Search workers by name or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 
                      'bg-white border-gray-300 text-gray-900'
                    } border focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <button
                  onClick={() => setShowLocationSearch(!showLocationSearch)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                    showLocationSearch
                      ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                      : isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-700 border-gray-300'
                  } border`}
                >
                  <MapPin className="w-5 h-5" />
                  <strong>Nearby</strong>
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                    isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-blue-500 text-white'
                  } border`}
                >
                  <Filter className="w-5 h-5" />
                  <strong>Filters</strong>
                </button>
              </div>

              {showFilters && (
                <div className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } border mb-4`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</strong>
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="2500"
                          step="100"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="0"
                          max="2500"
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong>Minimum Experience: {minExperience} years</strong>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={minExperience}
                        onChange={(e) => setMinExperience(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {workerCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                      : isDark ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <strong>{category}</strong>
                </button>
              ))}
            </div>

            {/* Workers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkers.map((worker) => (
                <div
                  key={worker.id}
                  className={`p-6 rounded-xl ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md'
                  } border hover:shadow-xl transition-all`}
                >
                  {worker.isVip && (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 ${
                      isDark ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700' : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                    }`}>
                      <Star className="w-4 h-4" />
                      <span><strong>VIP Member</strong></span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <strong>{worker.name}</strong>
                      </h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{worker.category}</p>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 mb-1 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}>
                        <Star className="w-4 h-4 fill-current" />
                        <span className={isDark ? 'text-white' : 'text-gray-900'}><strong>{worker.rating}</strong></span>
                      </div>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{worker.experience} yrs</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {worker.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4" />
                      {worker.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className={
                      worker.distance <= 3 ? 'text-green-600' : worker.distance <= 7 ? 'text-blue-600' : 'text-gray-600'
                    }>
                      <strong>{worker.distance}km away</strong>
                    </span>
                    <span className={isDark ? 'text-green-400' : 'text-green-600'}>
                      <strong>₹{worker.price}/day</strong>
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => handleOpenChat(worker, e)}
                        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 ${
                          isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <strong>Chat</strong>
                      </button>
                      <button
                        onClick={(e) => handleRateWorker(worker, e)}
                        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 ${
                          isDark ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        }`}
                      >
                        <Star className="w-4 h-4" />
                        <strong>Rate</strong>
                      </button>
                    </div>
                    <button
                      onClick={(e) => handleSendRequest(worker, e)}
                      className={`w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 ${
                        isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <strong>Send Request</strong>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredWorkers.length === 0 && (
              <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p><strong>No workers found matching your criteria.</strong></p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modals */}
      {showChat && chatWorker && (
        <ChatWindow
          workerName={chatWorker.name}
          workerId={chatWorker.id}
          onClose={() => setShowChat(false)}
          theme={theme}
          userType="customer"
        />
      )}

      {showRequestForm && selectedWorker && (
        <RequestForm
          workerName={selectedWorker.name}
          workerId={selectedWorker.id}
          onClose={() => setShowRequestForm(false)}
          onSubmit={handleRequestSubmit}
          theme={theme}
        />
      )}

      {showRatingForm && selectedWorker && (
        <RatingForm
          workerName={selectedWorker.name}
          workerId={selectedWorker.id}
          onClose={() => setShowRatingForm(false)}
          onSubmit={handleRatingSubmit}
          theme={theme}
        />
      )}
    </div>
  );
}
