import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { BEANS, IMAGES } from '../constants';

export const Beans: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Light', 'Medium', 'Dark'];

  const filteredBeans = useMemo(() => {
    if (activeFilter === 'All') return BEANS;
    return BEANS.filter(bean => bean.roastLevel === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16 md:py-24 relative overflow-hidden">
        <img src={IMAGES.BEANS_BG} alt="Beans" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Bean Lineup</h1>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            세계 각지의 농장에서 공정하게 거래된 최상급 원두.<br/>
            전문 큐그레이더가 원두의 개성을 살려 완벽하게 로스팅합니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center text-stone-500 mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Roast Level:</span>
          </div>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBeans.map(bean => (
            <div key={bean.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative bg-stone-100">
                <img 
                  src={bean.image} 
                  alt={bean.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {bean.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-stone-800 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs text-secondary font-bold uppercase tracking-wider">{bean.origin}</span>
                    <h3 className="text-xl font-bold text-stone-800 leading-tight">{bean.name}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-stone-600 mb-4 line-clamp-2 min-h-[40px]">
                  {bean.description}
                </p>

                {/* Flavor Profile Bars */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-stone-500">
                    <span className="w-16">Acidity</span>
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${bean.acidity * 20}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-stone-500">
                    <span className="w-16">Body</span>
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-800 rounded-full" style={{ width: `${bean.body * 20}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                  <span className="text-lg font-bold text-stone-800">{bean.price.toLocaleString()}원</span>
                  <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-green-800 transition-colors">
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};