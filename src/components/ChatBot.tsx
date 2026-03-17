import { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface ChatBotProps {
  theme: Theme;
}

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
}

const quickReplies = [
  'How to verify my profile?',
  'Payment issues',
  'Insurance information',
  'Loan application',
  'Contact support',
];

export function ChatBot({ theme }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 I\'m your LabourWork assistant. How can I help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('verify') || lowerQuery.includes('kyc')) {
      return 'To verify your profile, go to Profile → Verification section. Upload your Aadhaar or PAN card. Verification takes 24-48 hours. ✅';
    } else if (lowerQuery.includes('payment') || lowerQuery.includes('pay')) {
      return 'For payment issues, you can: 1) Check your payment history in Profile section 2) Contact our support at support@labourwork.com 3) Use escrow payment for secure transactions 💳';
    } else if (lowerQuery.includes('insurance')) {
      return 'We offer multiple insurance plans starting from ₹330/year. Visit the Insurance section in your dashboard to explore and apply! 🛡️';
    } else if (lowerQuery.includes('loan') || lowerQuery.includes('finance')) {
      return 'Access affordable loans from ₹10,000 to ₹1,00,000. Check the Finance section for EMI calculator and instant apply! 💰';
    } else if (lowerQuery.includes('support') || lowerQuery.includes('help')) {
      return 'You can reach our support team:\n📞 Call: 1800-123-4567\n📧 Email: support@labourwork.com\n💬 WhatsApp: +91-98765-43210';
    } else {
      return 'Thanks for your message! For detailed assistance, please contact our support team or choose from the quick replies below. 😊';
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-50 ${
          isDark ? 'bg-blue-600 hover:bg-blue-700' : 
          isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' : 
          'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col z-50 ${
      isDark ? 'bg-gray-800 border-gray-700' : 
      isColorful ? 'bg-white border-purple-200' : 
      'bg-white border-gray-200'
    } border`}>
      {/* Header */}
      <div className={`p-4 rounded-t-2xl ${
        isDark ? 'bg-gray-900 border-gray-700' : 
        isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 
        'bg-blue-500'
      } flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${
            isColorful ? 'bg-white/20' : 'bg-white/20'
          } flex items-center justify-center`}>
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white">LabourWork Assistant</h3>
            <p className="text-white/80">Online</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-lg hover:bg-white/10 text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user'
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : isColorful
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-blue-500 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-200'
                  : isColorful
                  ? 'bg-purple-50 text-gray-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-white/70' : isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Quick replies:
          </p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 
                  isColorful ? 'bg-purple-100 hover:bg-purple-200 text-purple-700' : 
                  'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp Link */}
      <div className={`px-4 py-2 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-2 rounded-lg ${
            isDark ? 'bg-green-900/30 hover:bg-green-900/50 text-green-400' : 
            isColorful ? 'bg-green-100 hover:bg-green-200 text-green-700' : 
            'bg-green-100 hover:bg-green-200 text-green-700'
          }`}
        >
          <Phone className="w-4 h-4" />
          Contact via WhatsApp
        </a>
      </div>

      {/* Input */}
      <div className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className={`flex-1 px-4 py-2 rounded-lg ${
              isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
              isColorful ? 'bg-white border-purple-200' : 
              'bg-white border-gray-300'
            } border`}
          />
          <button
            onClick={handleSend}
            className={`p-2 rounded-lg ${
              isDark ? 'bg-blue-600 hover:bg-blue-700' : 
              isColorful ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' : 
              'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
