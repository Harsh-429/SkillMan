import { useState } from 'react';
import { X, CreditCard, Smartphone, Wallet, CheckCircle } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface Request {
  id: number;
  workerName: string;
  amount: number;
  description: string;
}

interface PaymentModalProps {
  request: Request;
  onClose: () => void;
  theme: Theme;
}

type PaymentMethod = 'card' | 'upi' | 'wallet';

export function PaymentModal({ request, onClose, theme }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className={`max-w-md w-full p-8 rounded-2xl ${
          isDark ? 'bg-gray-800' : 
          isColorful ? 'bg-white' : 
          'bg-white'
        } text-center`}>
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
            isDark ? 'bg-green-900/30' : 
            isColorful ? 'bg-gradient-to-br from-green-400 to-teal-400' : 
            'bg-green-100'
          }`}>
            <CheckCircle className={`w-12 h-12 ${
              isDark ? 'text-green-400' : 
              isColorful ? 'text-white' : 
              'text-green-600'
            }`} />
          </div>
          <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Payment Successful!
          </h3>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            ₹{request.amount} paid to {request.workerName}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
        isDark ? 'bg-gray-800' : 
        isColorful ? 'bg-white' : 
        'bg-white'
      } shadow-2xl`}>
        {/* Header */}
        <div className={`sticky top-0 p-6 border-b ${
          isDark ? 'bg-gray-800 border-gray-700' : 
          isColorful ? 'bg-gradient-to-r from-green-500 to-teal-500' : 
          'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <h2 className={isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}>
              Make Payment
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 
                isColorful ? 'hover:bg-white/20 text-white' : 
                'hover:bg-gray-200 text-gray-600'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Payment Details */}
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700' : 
            isColorful ? 'bg-gradient-to-br from-green-50 to-teal-50' : 
            'bg-gray-50'
          }`}>
            <div className="flex justify-between mb-2">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Worker</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>{request.workerName}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Service</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>{request.description}</span>
            </div>
            <div className={`flex justify-between pt-2 border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Total Amount</span>
              <span className={`${
                isDark ? 'text-green-400' : 
                isColorful ? 'text-green-600' : 
                'text-green-600'
              }`}>₹{request.amount}</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <h3 className={`mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Select Payment Method
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                  paymentMethod === 'upi'
                    ? isDark
                      ? 'border-blue-600 bg-blue-900/20'
                      : isColorful
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-blue-500 bg-blue-50'
                    : isDark
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-br from-purple-100 to-blue-100' : 
                  'bg-gray-100'
                }`}>
                  <Smartphone className={`w-6 h-6 ${
                    isDark ? 'text-gray-400' : 
                    isColorful ? 'text-purple-600' : 
                    'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className={isDark ? 'text-white' : 'text-gray-900'}>UPI Payment</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pay via UPI ID or QR code
                  </p>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                  paymentMethod === 'card'
                    ? isDark
                      ? 'border-blue-600 bg-blue-900/20'
                      : isColorful
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-blue-500 bg-blue-50'
                    : isDark
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-br from-blue-100 to-green-100' : 
                  'bg-gray-100'
                }`}>
                  <CreditCard className={`w-6 h-6 ${
                    isDark ? 'text-gray-400' : 
                    isColorful ? 'text-blue-600' : 
                    'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className={isDark ? 'text-white' : 'text-gray-900'}>Credit/Debit Card</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pay with your card
                  </p>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('wallet')}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                  paymentMethod === 'wallet'
                    ? isDark
                      ? 'border-blue-600 bg-blue-900/20'
                      : isColorful
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-blue-500 bg-blue-50'
                    : isDark
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 
                  isColorful ? 'bg-gradient-to-br from-green-100 to-teal-100' : 
                  'bg-gray-100'
                }`}>
                  <Wallet className={`w-6 h-6 ${
                    isDark ? 'text-gray-400' : 
                    isColorful ? 'text-green-600' : 
                    'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className={isDark ? 'text-white' : 'text-gray-900'}>Digital Wallet</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Paytm, PhonePe, Google Pay
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Payment Input Fields */}
          {paymentMethod === 'upi' && (
            <div>
              <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                UPI ID
              </label>
              <input
                type="text"
                placeholder="example@upi"
                className={`w-full px-4 py-3 rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                  isColorful ? 'bg-white border-purple-200' : 
                  'bg-white border-gray-300'
                } border`}
              />
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div>
                <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                    isColorful ? 'bg-white border-purple-200' : 
                    'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                      isColorful ? 'bg-white border-purple-200' : 
                      'bg-white border-gray-300'
                    } border`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white' : 
                      isColorful ? 'bg-white border-purple-200' : 
                      'bg-white border-gray-300'
                    } border`}
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'wallet' && (
            <div className={`p-4 rounded-lg text-center ${
              isDark ? 'bg-gray-700' : 
              isColorful ? 'bg-gradient-to-br from-purple-50 to-blue-50' : 
              'bg-gray-50'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudCUyMG1vYmlsZXxlbnwxfHx8fDE3NjcwMjIxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Payment"
                className="w-32 h-32 mx-auto mb-3 rounded-lg object-cover"
              />
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                You will be redirected to your wallet app
              </p>
            </div>
          )}

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-4 px-6 rounded-lg transition-all ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : isDark
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : isColorful
                ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isProcessing ? 'Processing...' : `Pay ₹${request.amount}`}
          </button>

          {/* Security Info */}
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-blue-900/20 border-blue-700' : 
            isColorful ? 'bg-blue-50 border-blue-200' : 
            'bg-blue-50 border-blue-200'
          } border`}>
            <p className={`text-center ${
              isDark ? 'text-blue-400' : 
              isColorful ? 'text-blue-700' : 
              'text-blue-700'
            }`}>
              🔒 Your payment information is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
