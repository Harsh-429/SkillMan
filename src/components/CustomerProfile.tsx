import { useState } from 'react';
import { User, Clock, CheckCircle, XCircle, DollarSign, MessageCircle } from 'lucide-react';
import { PaymentModal } from './PaymentModal';

type Theme = 'light' | 'dark' | 'colorful';

interface CustomerProfileProps {
  theme: Theme;
}

type RequestStatus = 'pending' | 'accepted' | 'completed' | 'cancelled';

interface Request {
  id: number;
  workerName: string;
  category: string;
  date: string;
  status: RequestStatus;
  amount: number;
  description: string;
  workerImage: string;
}

const mockRequests: Request[] = [
  {
    id: 1,
    workerName: 'Rajesh Kumar',
    category: 'Electrician',
    date: '2024-12-28',
    status: 'completed',
    amount: 1500,
    description: 'House wiring repair and installation',
    workerImage: 'https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29sc3xlbnwxfHx8fDE3NjcxMDY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    workerName: 'Amit Singh',
    category: 'Carpenter',
    date: '2024-12-25',
    status: 'accepted',
    amount: 3000,
    description: 'Custom furniture for bedroom',
    workerImage: 'https://images.unsplash.com/photo-1626081063434-79a2169791b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya3xlbnwxfHx8fDE3NjY5OTE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    workerName: 'Suresh Patel',
    category: 'Plumber',
    date: '2024-12-30',
    status: 'pending',
    amount: 800,
    description: 'Bathroom pipe fitting',
    workerImage: 'https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MDQ5NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    workerName: 'Vikram Sharma',
    category: 'Electrician',
    date: '2024-12-20',
    status: 'cancelled',
    amount: 1200,
    description: 'Panel board installation',
    workerImage: 'https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29sc3xlbnwxfHx8fDE3NjcxMDY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function CustomerProfile({ theme }: CustomerProfileProps) {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [offerAmount, setOfferAmount] = useState<{ [key: number]: string }>({});

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'completed':
        return isDark ? 'bg-green-900/30 text-green-400 border-green-700' : 
               isColorful ? 'bg-green-100 text-green-700 border-green-300' : 
               'bg-green-100 text-green-700 border-green-300';
      case 'accepted':
        return isDark ? 'bg-blue-900/30 text-blue-400 border-blue-700' : 
               isColorful ? 'bg-blue-100 text-blue-700 border-blue-300' : 
               'bg-blue-100 text-blue-700 border-blue-300';
      case 'pending':
        return isDark ? 'bg-yellow-900/30 text-yellow-400 border-yellow-700' : 
               isColorful ? 'bg-yellow-100 text-yellow-700 border-yellow-300' : 
               'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'cancelled':
        return isDark ? 'bg-red-900/30 text-red-400 border-red-700' : 
               isColorful ? 'bg-red-100 text-red-700 border-red-300' : 
               'bg-red-100 text-red-700 border-red-300';
    }
  };

  const getStatusIcon = (status: RequestStatus) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'accepted': return <Clock className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
    }
  };

  const handleOffer = (requestId: number) => {
    const amount = offerAmount[requestId];
    if (amount) {
      alert(`Offer of ₹${amount} sent successfully!`);
      setOfferAmount({ ...offerAmount, [requestId]: '' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl' : 
        'bg-white border-gray-200 shadow-md'
      } border`}>
        <div className="flex items-center gap-6">
          <div className={`w-24 h-24 rounded-full ${
            isDark ? 'bg-blue-600' : 
            isColorful ? 'bg-white/20 border-2 border-white' : 
            'bg-blue-500'
          } flex items-center justify-center`}>
            <User className={`w-12 h-12 ${isColorful ? 'text-white' : 'text-white'}`} />
          </div>
          <div className="flex-1">
            <h2 className={`mb-1 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
              Priya Sharma
            </h2>
            <p className={`mb-2 ${isColorful ? 'text-white/90' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Customer since December 2024
            </p>
            <div className="flex gap-4">
              <div>
                <span className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Requests: 
                </span>
                <span className={`ml-2 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
                  {requests.length}
                </span>
              </div>
              <div>
                <span className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Completed: 
                </span>
                <span className={`ml-2 ${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
                  {requests.filter(r => r.status === 'completed').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests Section */}
      <div>
        <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>My Requests</h3>
        
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 
                isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg' : 
                'bg-white border-gray-200 shadow-md'
              } border`}
            >
              <div className="flex gap-4">
                {/* Worker Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={request.workerImage} 
                    alt={request.workerName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Request Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className={`mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {request.workerName}
                      </h4>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {request.category}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full border flex items-center gap-2 ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>

                  <p className={`mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {request.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Date: {new Date(request.date).toLocaleDateString()}
                    </span>
                    <span className={`${
                      isDark ? 'text-green-400' : 
                      isColorful ? 'text-purple-600' : 
                      'text-green-600'
                    }`}>
                      ₹{request.amount}
                    </span>
                  </div>

                  {/* Actions based on status */}
                  {request.status === 'pending' && (
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Enter offer amount"
                        value={offerAmount[request.id] || ''}
                        onChange={(e) => setOfferAmount({ ...offerAmount, [request.id]: e.target.value })}
                        className={`flex-1 px-3 py-2 rounded-lg ${
                          isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                          isColorful ? 'bg-white border-purple-200' : 
                          'bg-white border-gray-300'
                        } border`}
                      />
                      <button
                        onClick={() => handleOffer(request.id)}
                        className={`px-4 py-2 rounded-lg ${
                          isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                          isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white' : 
                          'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        Send Offer
                      </button>
                    </div>
                  )}

                  {request.status === 'accepted' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedRequest(request);
                          setShowPayment(true);
                        }}
                        className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                          isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 
                          isColorful ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white' : 
                          'bg-green-500 hover:bg-green-600 text-white'
                        }`}
                      >
                        <DollarSign className="w-4 h-4" />
                        Make Payment
                      </button>
                      <button className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                        isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                        isColorful ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white' : 
                        'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}>
                        <MessageCircle className="w-4 h-4" />
                        Chat
                      </button>
                    </div>
                  )}

                  {request.status === 'completed' && (
                    <button className={`w-full py-2 px-4 rounded-lg ${
                      isDark ? 'bg-gray-700 text-gray-300' : 
                      isColorful ? 'bg-purple-100 text-purple-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      Leave Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedRequest && (
        <PaymentModal
          request={selectedRequest}
          onClose={() => {
            setShowPayment(false);
            setSelectedRequest(null);
          }}
          theme={theme}
        />
      )}
    </div>
  );
}
