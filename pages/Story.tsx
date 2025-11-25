import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IMAGES } from '../constants';
import { Leaf, Users, Globe } from 'lucide-react';

const data = [
  { year: '2020', plasticSaved: 1000 },
  { year: '2021', plasticSaved: 2500 },
  { year: '2022', plasticSaved: 5000 },
  { year: '2023', plasticSaved: 8500 },
  { year: '2024', plasticSaved: 12000 },
];

export const Story: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img src={IMAGES.FARM} alt="Coffee Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-serif text-5xl font-bold mb-4">Farm to Cup</h1>
            <p className="text-xl font-light">커피 한 잔에 담긴 농부의 땀방울과 우리의 진심</p>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-stone mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-8 text-stone-800">지속 가능한 커피를 향한 여정</h2>
          <p>
            에코 브루는 단순한 커피 회사가 아닙니다. 우리는 커피가 생산되고, 소비되고, 버려지는 모든 과정에서 
            지구에 남기는 발자국을 최소화하고자 시작되었습니다.
          </p>
          <p>
            2019년, 우리는 과테말라의 작은 커피 농장을 방문했습니다. 그곳에서 농부들이 겪는 불합리한 거래 관행과 
            플라스틱으로 뒤덮인 커피 소비 문화를 목격했습니다. 우리는 다짐했습니다. "맛있는 커피를 마시는 일이 
            누군가에게는 고통이 되고, 지구에게는 부담이 되어서는 안 된다"고 말입니다.
          </p>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-stone-800">우리가 만든 변화</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                에코 브루 구독자님들과 함께 지난 4년간 우리는 놀라운 변화를 만들어냈습니다.
                생분해성 패키지를 도입하여 매년 플라스틱 사용량을 획기적으로 줄이고 있습니다.
                이 작은 그래프는 우리가 함께 지켜낸 지구의 모습입니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-lg">
                  <Leaf className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-stone-800">12,000+</div>
                  <div className="text-sm text-stone-500">줄인 플라스틱 컵</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <Users className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-stone-800">35</div>
                  <div className="text-sm text-stone-500">파트너 농장 수</div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] w-full bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-inner">
              <h3 className="text-center font-bold text-stone-600 mb-4">연도별 플라스틱 절감 효과 (단위: 개)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#8D6E63'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#8D6E63'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="plasticSaved" stroke="#4A7C59" fill="#4A7C59" fillOpacity={0.2} strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-stone-800 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-white mb-8">100% Earth Friendly</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-stone-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">생분해 봉투</h3>
              <p>옥수수 전분에서 추출한 PLA 소재와 크라프트지를 사용하여 180일 이내에 자연 분해됩니다.</p>
            </div>
            <div className="p-6 border border-stone-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">수성 잉크</h3>
              <p>화학 용제를 사용하지 않은 콩기름 잉크로 인쇄하여 재활용 과정에서 환경 오염을 방지합니다.</p>
            </div>
            <div className="p-6 border border-stone-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">종이 테이프</h3>
              <p>박스 포장 시 비닐 테이프 대신 물로 접착하는 종이 테이프를 사용하여 분리배출이 간편합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};