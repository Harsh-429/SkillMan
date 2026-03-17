import { useState } from 'react';
import { ShoppingBag, Clock, DollarSign, Package } from 'lucide-react';

type Theme = 'light' | 'dark' | 'colorful';

interface ToolsMarketplaceProps {
  theme: Theme;
}

const tools = [
  {
    id: 1,
    name: 'Professional Drill Machine',
    image: 'https://images.unsplash.com/photo-1707064892275-a3088e8240be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMGVxdWlwbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjcyNzQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: 150,
    buyPrice: 8500,
    emiPrice: 850,
    category: 'Power Tools',
  },
  {
    id: 2,
    name: 'Aluminium Ladder 12ft',
    image: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMHdvcmtzaG9wJTIwbWVjaGFuaWN8ZW58MXx8fHwxNjczNTk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: 100,
    buyPrice: 4500,
    emiPrice: 450,
    category: 'Equipment',
  },
  {
    id: 3,
    name: 'Professional Tool Kit',
    image: 'https://images.unsplash.com/photo-1612725118809-0bebfb71a551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBoZWxtZXR8ZW58MXx8fHwxNjczNTk1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: 200,
    buyPrice: 12000,
    emiPrice: 1200,
    category: 'Tool Sets',
  },
  {
    id: 4,
    name: 'Electric Saw',
    image: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMHdvcmtzaG9wJTIwbWVjaGFuaWN8ZW58MXx8fHwxNjczNTk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: 180,
    buyPrice: 9500,
    emiPrice: 950,
    category: 'Power Tools',
  },
];

export function ToolsMarketplace({ theme }: ToolsMarketplaceProps) {
  const [selectedTab, setSelectedTab] = useState<'rent' | 'buy'>('rent');

  const isDark = theme === 'dark';
  const isColorful = theme === 'colorful';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-xl relative overflow-hidden ${
        isDark ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-700' : 
        isColorful ? 'bg-gradient-to-r from-orange-400 to-yellow-400 shadow-2xl shadow-orange-300' : 
        'bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200'
      } border scale-in`}>
        <img 
          src="https://images.unsplash.com/photo-1707064892275-a3088e8240be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMGVxdWlwbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjcyNzQ5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tools"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className={`w-8 h-8 ${
              isDark ? 'text-orange-400' : isColorful ? 'text-white' : 'text-orange-600'
            }`} />
            <div>
              <h2 className={`${isColorful ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
                Tools & Equipment Marketplace
              </h2>
              <p className={`${isColorful ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Rent or buy professional tools with easy EMI options
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 fade-in-up">
        <button
          onClick={() => setSelectedTab('rent')}
          className={`flex-1 py-3 px-6 rounded-xl transition-all ${
            selectedTab === 'rent'
              ? isDark
                ? 'bg-blue-600 text-white shadow-lg'
                : isColorful
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl shadow-blue-300'
                : 'bg-blue-500 text-white shadow-lg'
              : isDark
              ? 'bg-gray-800 text-gray-300 border border-gray-700'
              : isColorful
              ? 'bg-white text-gray-700 border border-purple-200'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Rent Tools
        </button>
        <button
          onClick={() => setSelectedTab('buy')}
          className={`flex-1 py-3 px-6 rounded-xl transition-all ${
            selectedTab === 'buy'
              ? isDark
                ? 'bg-green-600 text-white shadow-lg'
                : isColorful
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-xl shadow-green-300'
                : 'bg-green-500 text-white shadow-lg'
              : isDark
              ? 'bg-gray-800 text-gray-300 border border-gray-700'
              : isColorful
              ? 'bg-white text-gray-700 border border-purple-200'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Buy Tools
        </button>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800 border-gray-700' : 
              isColorful ? 'bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg hover:shadow-2xl' : 
              'bg-white border-gray-200 shadow-md hover:shadow-xl'
            } border transition-all hover:scale-105 cursor-pointer scale-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={tool.image}
                alt={tool.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white">
                {tool.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className={`mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {tool.name}
              </h3>

              {selectedTab === 'rent' ? (
                <div className={`p-4 rounded-lg mb-4 ${
                  isDark ? 'bg-blue-900/20 border-blue-700' : 
                  isColorful ? 'bg-blue-100 border-blue-300' : 
                  'bg-blue-50 border-blue-200'
                } border`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Clock className="w-4 h-4" />
                      Per Day
                    </span>
                    <span className={`${
                      isDark ? 'text-blue-400' : isColorful ? 'text-blue-600' : 'text-blue-600'
                    }`}>
                      ₹{tool.rentPrice}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 mb-4">
                  <div className={`p-3 rounded-lg ${
                    isDark ? 'bg-green-900/20 border-green-700' : 
                    isColorful ? 'bg-green-100 border-green-300' : 
                    'bg-green-50 border-green-200'
                  } border`}>
                    <div className="flex items-center justify-between">
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Buy Price</span>
                      <span className={`${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        ₹{tool.buyPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    isDark ? 'bg-purple-900/20 border-purple-700' : 
                    isColorful ? 'bg-purple-100 border-purple-300' : 
                    'bg-purple-50 border-purple-200'
                  } border`}>
                    <div className="flex items-center justify-between">
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>EMI (12 months)</span>
                      <span className={`${
                        isDark ? 'text-purple-400' : isColorful ? 'text-purple-600' : 'text-purple-600'
                      }`}>
                        ₹{tool.emiPrice}/month
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <button className={`w-full py-3 rounded-lg transition-all ${
                selectedTab === 'rent'
                  ? isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : isColorful
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                  : isDark
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : isColorful
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}>
                {selectedTab === 'rent' ? 'Rent Now' : 'Buy Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Section */}
      <div className={`p-6 rounded-xl ${
        isDark ? 'bg-gray-800 border-gray-700' : 
        isColorful ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200 shadow-lg' : 
        'bg-white border-gray-200 shadow-md'
      } border fade-in-up`}>
        <div className="flex items-center gap-4 mb-4">
          <Package className={`w-6 h-6 ${
            isDark ? 'text-blue-400' : isColorful ? 'text-purple-600' : 'text-blue-600'
          }`} />
          <div>
            <h3 className={isDark ? 'text-white' : 'text-gray-900'}>
              Partner Hardware Shops
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Get exclusive discounts from our partner stores
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700' : isColorful ? 'bg-white' : 'bg-gray-50'
          }`}>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Mumbai Tools Co.</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>15% discount</p>
          </div>
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700' : isColorful ? 'bg-white' : 'bg-gray-50'
          }`}>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Hardware Hub</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>20% discount</p>
          </div>
          <div className={`p-4 rounded-lg ${
            isDark ? 'bg-gray-700' : isColorful ? 'bg-white' : 'bg-gray-50'
          }`}>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Pro Tools</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>10% discount</p>
          </div>
        </div>
      </div>
    </div>
  );
}
