import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import { FAQS } from '../constants';

export const Support: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">고객 지원</h1>
        <p className="opacity-90">무엇을 도와드릴까요? 에코 브루는 항상 열려있습니다.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ Section */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-8 border-b-2 border-secondary inline-block pb-2">
              자주 묻는 질문 (FAQ)
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-stone-100">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-stone-800">{faq.question}</span>
                    {openFaqIndex === idx ? (
                      <ChevronUp className="h-5 w-5 text-secondary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-stone-400" />
                    )}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-4 bg-stone-50 text-stone-600 text-sm leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">직접 연락하기</h3>
              <ul className="space-y-4 text-stone-600">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>02-1234-5678 (평일 10:00 - 17:00)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>help@ecobrew.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>서울시 성동구 성수동 에코빌딩 3층</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-8 border-b-2 border-secondary inline-block pb-2">
              1:1 문의하기
            </h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">문의가 접수되었습니다.</h3>
                  <p className="text-stone-600">빠른 시일 내에 답변 드리겠습니다.</p>
                  <button 
                    type="button" 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-primary font-bold hover:underline"
                  >
                    새로운 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-stone-700 mb-2">이름</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-stone-700 mb-2">이메일</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-stone-700 mb-2">문의 유형</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <option>배송 문의</option>
                      <option>결제/구독 변경</option>
                      <option>원두/상품 문의</option>
                      <option>제휴 문의</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-stone-700 mb-2">내용</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      placeholder="궁금한 내용을 자세히 적어주세요."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-colors ${
                      formStatus === 'submitting' ? 'bg-stone-400 cursor-not-allowed' : 'bg-secondary hover:bg-stone-700'
                    }`}
                  >
                    {formStatus === 'submitting' ? '접수 중...' : '문의하기'}
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};