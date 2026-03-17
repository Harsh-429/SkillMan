import { useState } from 'react';
import { X, Send, Paperclip, Smile } from 'lucide-react';

type Theme = 'light' | 'dark';

interface ChatWindowProps {
  workerName: string;
  workerId: number;
  onClose: () => void;
  theme: Theme;
  userType: 'customer' | 'worker';
}

interface Message {
  id: number;
  text: string;
  sender: 'customer' | 'worker';
  timestamp: string;
}

// Shared message store (in a real app, this would be from a database)
const messageStore: { [key: number]: Message[] } = {};

export function ChatWindow({ workerName, workerId, onClose, theme, userType }: ChatWindowProps) {
  const isDark = theme === 'dark';
  
  // Initialize messages for this worker if not exists
  if (!messageStore[workerId]) {
    messageStore[workerId] = [
      {
        id: 1,
        text: 'Hello! How can I help you today?',
        sender: 'worker',
        timestamp: new Date(Date.now() - 3600000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }

  const [messages, setMessages] = useState<Message[]>(messageStore[workerId] || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: userType,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    messageStore[workerId] = updatedMessages; // Update shared store
    setNewMessage('');

    // Simulate response (in real app, this would be actual messages from the other party)
    if (userType === 'customer') {
      setTimeout(() => {
        const response: Message = {
          id: updatedMessages.length + 1,
          text: 'Thank you for your message. I will get back to you shortly!',
          sender: 'worker',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        const withResponse = [...updatedMessages, response];
        setMessages(withResponse);
        messageStore[workerId] = withResponse;
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-2xl rounded-2xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border shadow-2xl flex flex-col`} style={{ height: '600px' }}>
        {/* Header */}
        <div className={`px-6 py-4 border-b ${
          isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
        } rounded-t-2xl flex items-center justify-between`}>
          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
              Chat with <strong>{workerName}</strong>
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Online • Responds quickly
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${
              isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className={`flex-1 overflow-y-auto p-6 space-y-4 ${
          isDark ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === userType ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${
                message.sender === userType
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-100'
                  : 'bg-white text-gray-900 border border-gray-200'
              } rounded-2xl px-4 py-2`}>
                <p className="mb-1">{message.text}</p>
                <p className={`text-xs ${
                  message.sender === userType
                    ? 'text-blue-100'
                    : isDark
                    ? 'text-gray-400'
                    : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className={`px-6 py-4 border-t ${
          isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
        } rounded-b-2xl`}>
          <div className="flex items-center gap-2">
            <button className={`p-2 rounded-lg ${
              isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className={`flex-1 px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 
                'bg-gray-100 border-gray-300 text-gray-900'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button className={`p-2 rounded-lg ${
              isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
            }`}>
              <Smile className="w-5 h-5" />
            </button>
            <button
              onClick={handleSendMessage}
              className={`p-2 rounded-lg ${
                isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
