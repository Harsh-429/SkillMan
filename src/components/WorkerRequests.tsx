import { useState } from 'react';
import { User, Clock, CheckCircle, XCircle, MapPin, Calendar } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface WorkerRequestsProps {
  theme: Theme;
}

type RequestStatus = 'new' | 'accepted' | 'rejected';

interface IncomingRequest {
  id: number;
  customerName: string;
  customerImage: string;
  service: string;
  description: string;
  location: string;
  date: string;
  offeredAmount: number;
  status: RequestStatus;
}

const mockRequests: IncomingRequest[] = [
  {
    id: 1,
    customerName: 'Priya Sharma',
    customerImage: 'https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MDQ5NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    service: 'Electrical Work',
    description: 'Need complete house wiring for new construction',
    location: 'Andheri, Mumbai',
    date: '2024-01-05',
    offeredAmount: 5000,
    status: 'new',
  },
  {
    id: 2,
    customerName: 'Rahul Verma',
    customerImage: 'https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29sc3xlbnwxfHx8fDE3NjcxMDY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    service: 'Panel Installation',
    description: 'Replace old electrical panel with new one',
    location: 'Bandra, Mumbai',
    date: '2024-01-03',
    offeredAmount: 3500,
    status: 'new',
  },
  {
    id: 3,
    customerName: 'Anjali Desai',
    customerImage: 'https://images.unsplash.com/photo-1626081063434-79a2169791b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NjY5OTE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    service: 'Emergency Repair',
    description: 'Urgent electrical repair needed for office',
    location: 'Powai, Mumbai',
    date: '2024-01-02',
    offeredAmount: 2000,
    status: 'accepted',
  },
  {
    id: 4,
    customerName: 'Vikram Malhotra',
    customerImage: 'https://images.unsplash.com/photo-1763328044377-d37cd9052d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbGVkJTIwd29ya2VyJTIwdGVhbXxlbnwxfHx8fDE3NjcxMDY3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    service: 'Light Fixtures',
    description: 'Install decorative lights in living room',
    location: 'Juhu, Mumbai',
    date: '2023-12-28',
    offeredAmount: 1500,
    status: 'rejected',
  },
];

export function WorkerRequests({ theme }: WorkerRequestsProps) {
  const [requests, setRequests] = useState<IncomingRequest[]>(mockRequests);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handleAccept = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'accepted' as RequestStatus } : req
    ));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' as RequestStatus } : req
    ));
  };

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'new':
        return (
          <span className={`px-3 py-1 rounded-full ${
            isDark ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700' : 
            isColorful ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 
            'bg-yellow-100 text-yellow-700 border border-yellow-300'
          }`}>
            <Clock className="w-4 h-4 inline mr-1" />
            New Request
          </span>
        );
      case 'accepted':
        return (
          <span className={`px-3 py-1 rounded-full ${
            isDark ? 'bg-green-900/30 text-green-400 border border-green-700' : 
            isColorful ? 'bg-green-100 text-green-700 border border-green-300' : 
            'bg-green-100 text-green-700 border border-green-300'
          }`}>
            <CheckCircle className="w-4 h-4 inline mr-1" />
            Accepted
          </span>
        );
      case 'rejected':
        return (
          <span className={`px-3 py-1 rounded-full ${
            isDark ? 'bg-red-900/30 text-red-400 border border-red-700' : 
            isColorful ? 'bg-red-100 text-red-700 border border-red-300' : 
            'bg-red-100 text-red-700 border border-red-300'
          }`}>
            <XCircle className="w-4 h-4 inline mr-1" />
            Rejected
          </span>
        );
    }
  };

  const newRequests = requests.filter(r => r.status === 'new');
  const acceptedRequests = requests.filter(r => r.status === 'accepted');
  const pastRequests = requests.filter(r => r.status === 'rejected');

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-xl ${
          isDark ? 'bg-yellow-900/20 border-yellow-700' : 
          isColorful ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200' : 
          'bg-yellow-50 border-yellow-200'
        } border`}>
          <div className={`mb-1 ${isDark ? 'text-yellow-400' : isColorful ? 'text-yellow-700' : 'text-yellow-600'}`}>
            New Requests
          </div>
          <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{newRequests.length}</div>
        </div>
        <div className={`p-4 rounded-xl ${
          isDark ? 'bg-green-900/20 border-green-700' : 
          isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100 border-green-200' : 
          'bg-green-50 border-green-200'
        } border`}>
          <div className={`mb-1 ${isDark ? 'text-green-400' : isColorful ? 'text-green-700' : 'text-green-600'}`}>
            Accepted
          </div>
          <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{acceptedRequests.length}</div>
        </div>
        <div className={`p-4 rounded-xl ${
          isDark ? 'bg-blue-900/20 border-blue-700' : 
          isColorful ? 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200' : 
          'bg-blue-50 border-blue-200'
        } border`}>
          <div className={`mb-1 ${isDark ? 'text-blue-400' : isColorful ? 'text-blue-700' : 'text-blue-600'}`}>
            Total Requests
          </div>
          <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{requests.length}</div>
        </div>
      </div>

      {/* New Requests Section */}
      {newRequests.length > 0 && (
        <div>
          <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            New Requests
          </h3>
          <div className="space-y-4">
            {newRequests.map((request) => (
              <div
                key={request.id}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                  'bg-white border-gray-200 shadow-md'
                } border`}
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={request.customerImage} 
                      alt={request.customerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {request.customerName}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {request.service}
                        </p>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                </div>

                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {request.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {request.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {new Date(request.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${
                      isDark ? 'text-green-400' : 
                      isColorful ? 'text-purple-600' : 
                      'text-green-600'
                    }`}>
                      Offered: ₹{request.offeredAmount}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(request.id)}
                    className={`flex-1 py-2 px-4 rounded-lg ${
                      isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
                      isColorful ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white' : 
                      'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className={`flex-1 py-2 px-4 rounded-lg ${
                      isDark ? 'bg-red-600 hover:bg-red-700 text-white' : 
                      isColorful ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white' : 
                      'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Accepted Requests */}
      {acceptedRequests.length > 0 && (
        <div>
          <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Accepted Requests
          </h3>
          <div className="space-y-4">
            {acceptedRequests.map((request) => (
              <div
                key={request.id}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800 border-gray-700' : 
                  isColorful ? 'bg-white/90 backdrop-blur-sm border-green-200 shadow-lg' : 
                  'bg-white border-gray-200 shadow-md'
                } border`}
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={request.customerImage} 
                      alt={request.customerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {request.customerName}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {request.service}
                        </p>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className={`mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {request.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {request.location}
                      </span>
                      <span className={`${
                        isDark ? 'text-green-400' : 
                        isColorful ? 'text-green-600' : 
                        'text-green-600'
                      }`}>
                        ₹{request.offeredAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
