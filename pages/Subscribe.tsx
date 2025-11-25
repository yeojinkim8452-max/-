import React, { useState } from 'react';
import { Check, ShoppingBag, Truck } from 'lucide-react';
import { BEANS } from '../constants';

export const Subscribe: React.FC = () => {
  const [weight, setWeight] = useState<number>(200); // grams
  const [frequency, setFrequency] = useState<number>(1); // 1=Weekly, 2=BiWeekly, 4=Monthly
  const [selectedBeanId, setSelectedBeanId] = useState<string>(BEANS[0].id);

  const selectedBean = BEANS.find(b => b.id === selectedBeanId) || BEANS[0];
  
  // Simple pricing logic
  const basePrice = selectedBean.price;
  const weightMultiplier = weight === 200 ? 1 : weight === 500 ? 2.2 : 4; // Bulk discount
  const totalPrice = Math.round(basePrice * weightMultiplier);

  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Subscription</span>
          <h1 className="font-serif text-4xl font-bold text-stone-800 mt-2 mb-4">나만의 커피 구독 만들기</h1>
          <p className="text-stone-600">
            원하는 원두, 용량, 주기를 선택하시면<br/> 
            로스팅 직후 신선함을 담아 보내드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Bean Selection */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-primary text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span>
                원두 선택
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BEANS.map(bean => (
                  <div 
                    key={bean.id}
                    onClick={() => setSelectedBeanId(bean.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      selectedBeanId === bean.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-stone-100 hover:border-stone-300'
                    }`}
                  >
                    <img src={bean.image} alt={bean.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-bold text-stone-800">{bean.name}</div>
                      <div className="text-xs text-stone-500">{bean.roastLevel} Roast</div>
                    </div>
                    {selectedBeanId === bean.id && <Check className="ml-auto w-5 h-5 text-primary" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Weight */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-primary text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span>
                용량 선택
              </h3>
              <div className="flex gap-4">
                {[200, 500, 1000].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`flex-1 py-4 rounded-xl border-2 font-medium transition-all ${
                      weight === w
                        ? 'border-primary bg-primary text-white'
                        : 'border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {w}g
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-stone-500 text-center">
                * 200g은 약 10~13잔의 커피를 추출할 수 있는 양입니다.
              </p>
            </div>

            {/* Step 3: Frequency */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-primary text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">3</span>
                배송 주기
              </h3>
              <div className="relative pt-6 pb-2 px-2">
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={frequency}
                  onChange={(e) => setFrequency(parseInt(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-sm text-stone-600 font-medium">
                  <span className={frequency === 1 ? 'text-primary font-bold' : ''}>1주마다</span>
                  <span className={frequency === 2 ? 'text-primary font-bold' : ''}>2주마다</span>
                  <span className={frequency === 3 ? 'text-primary font-bold' : ''}>3주마다</span>
                  <span className={frequency === 4 ? 'text-primary font-bold' : ''}>4주마다</span>
                </div>
              </div>
            </div>

          </div>

          {/* Summary Sticky Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-24 border border-stone-100">
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">선택 원두</span>
                  <span className="font-medium text-stone-800 text-right w-1/2">{selectedBean.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">용량</span>
                  <span className="font-medium text-stone-800">{weight}g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">배송 주기</span>
                  <span className="font-medium text-stone-800">{frequency}주 간격</span>
                </div>
                <div className="h-px bg-stone-100 my-4"></div>
                <div className="flex justify-between items-end">
                  <span className="font-bold text-stone-800">회당 결제 금액</span>
                  <span className="text-3xl font-bold text-primary">{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="text-xs text-secondary text-right">
                  무료 배송 혜택 적용됨
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-800 transition-colors shadow-lg flex items-center justify-center gap-2 mb-3">
                <ShoppingBag className="w-5 h-5" />
                구독 시작하기
              </button>
              <button className="w-full py-3 bg-stone-100 text-stone-600 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors">
                선물하기
              </button>

              <div className="mt-6 flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <Truck className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <p className="text-xs text-stone-500 leading-relaxed">
                  오늘 주문하시면 내일 로스팅되어 모레 도착합니다. 
                  언제든 해지 위약금 없이 구독을 취소할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};