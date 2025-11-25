import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Truck, CheckCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { IMAGES, BEANS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.HERO} 
            alt="Warm coffee moment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              지구를 위한<br/>
              가장 향기로운 습관
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
              갓 볶은 공정무역 원두를<br/>
              제로 웨이스트 패키지에 담아 전해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={PageRoute.SUBSCRIBE} className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-green-800 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg">
                무료 체험 키트 신청하기
              </Link>
              <Link to={PageRoute.STORY} className="inline-flex justify-center items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 font-medium rounded-full transition-all">
                브랜드 이야기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 font-bold mb-4">Why Eco Brew?</h2>
            <p className="text-stone-600">우리가 커피를 즐기는 방식이 세상에 도움이 되도록</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Leaf className="h-12 w-12 text-primary" />, 
                title: "100% 생분해성 패키지", 
                desc: "비닐과 알루미늄 코팅 없이, 자연으로 돌아가는 종이 패키지만을 사용합니다." 
              },
              { 
                icon: <Heart className="h-12 w-12 text-secondary" />, 
                title: "공정 무역 원두", 
                desc: "커피 농가의 지속 가능한 삶을 위해 정당한 대가를 지불하고 직수입합니다." 
              },
              { 
                icon: <Truck className="h-12 w-12 text-stone-700" />, 
                title: "당일 로스팅 & 배송", 
                desc: "주문 즉시 볶아 가장 신선한 상태로 당신의 문 앞까지 배송합니다." 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                <div className="mb-6 p-4 bg-background rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase (Horizontal Scroll) */}
      <section className="py-24 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 font-bold mb-2">이달의 원두 큐레이션</h2>
            <p className="text-stone-600">전문 큐레이터가 엄선한 스페셜티 라인업</p>
          </div>
          <Link to={PageRoute.BEANS} className="hidden md:flex items-center text-primary font-bold hover:underline">
            전체 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex space-x-6 px-4 sm:px-6 lg:px-8 w-max">
            {BEANS.map((bean) => (
              <div key={bean.id} className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 group cursor-pointer">
                <div className="h-[200px] overflow-hidden relative">
                  <img src={bean.image} alt={bean.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 text-xs font-bold rounded text-stone-800 uppercase">
                    {bean.roastLevel}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-bold mb-1">{bean.origin}</div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{bean.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bean.notes.map((note, i) => (
                      <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">{note}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                    <span className="font-bold text-stone-800">{bean.price.toLocaleString()}원</span>
                    <button className="text-sm text-secondary font-semibold hover:text-primary transition-colors">담기 +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 md:hidden">
          <Link to={PageRoute.BEANS} className="inline-flex items-center text-primary font-bold">
            전체 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Subscription Steps */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">가장 신선한 커피를 만나는 과정</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "구독 신청", desc: "취향에 맞는 원두와 배송 주기를 선택해주세요." },
              { step: "02", title: "당일 로스팅", desc: "매일 오전, 큐그레이더가 세심하게 로스팅합니다." },
              { step: "03", title: "친환경 포장", desc: "숨쉬는 종이 패키지에 담아 밀봉합니다." },
              { step: "04", title: "문 앞 도착", desc: "가장 향기로운 상태로 고객님께 도착합니다." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-serif font-bold text-white/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link 
              to={PageRoute.SUBSCRIBE} 
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg"
            >
              지금 시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-stone-800 font-bold mb-12">에코 브루어들의 이야기</h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm relative">
            <div className="text-4xl text-primary absolute top-4 left-6 opacity-30 font-serif">"</div>
            <p className="text-lg md:text-xl text-stone-700 italic mb-6 leading-relaxed">
              매일 마시는 커피로 환경 보호에 동참할 수 있다는 게 너무 좋아요. 
              무엇보다 커피 맛이 정말 훌륭합니다. 마트 원두와는 차원이 다른 신선함이에요.
              포장지를 뜯을 때 퍼지는 향기가 아침의 즐거움이 되었습니다.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=eco" alt="User" />
              </div>
              <div className="text-left">
                <div className="font-bold text-stone-800">김지영 님</div>
                <div className="text-xs text-stone-500">3개월째 구독 중 • 서울 마포구</div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-stone-300">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1,204</div>
              <div className="text-sm text-stone-600">누적 구독자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">5,000+</div>
              <div className="text-sm text-stone-600">줄인 플라스틱 컵</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-stone-600">재구독 의사</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};