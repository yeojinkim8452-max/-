import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, Instagram, Facebook, Twitter } from 'lucide-react';
import { PageRoute } from '../types';
import { IMAGES } from '../constants';

const NavLink: React.FC<{ to: string; label: string; current: string; onClick?: () => void }> = ({ to, label, current, onClick }) => {
  const isActive = current === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-primary font-bold border-b-2 border-primary'
          : 'text-stone-600 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to={PageRoute.HOME} className="flex-shrink-0 flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold text-secondary tracking-wide">Eco Brew</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              <NavLink to={PageRoute.BEANS} label="원두 라인업" current={location.pathname} />
              <NavLink to={PageRoute.SUBSCRIBE} label="구독하기" current={location.pathname} />
              <NavLink to={PageRoute.STORY} label="브랜드 스토리" current={location.pathname} />
              <NavLink to={PageRoute.SUPPORT} label="고객지원" current={location.pathname} />
              <Link
                to={PageRoute.SUBSCRIBE}
                className="ml-4 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-green-800 transition-colors shadow-md"
              >
                체험 키트 신청
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-stone-600 hover:text-primary focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <NavLink to={PageRoute.HOME} label="홈" current={location.pathname} onClick={toggleMenu} />
              <NavLink to={PageRoute.BEANS} label="원두 라인업" current={location.pathname} onClick={toggleMenu} />
              <NavLink to={PageRoute.SUBSCRIBE} label="구독하기" current={location.pathname} onClick={toggleMenu} />
              <NavLink to={PageRoute.STORY} label="브랜드 스토리" current={location.pathname} onClick={toggleMenu} />
              <NavLink to={PageRoute.SUPPORT} label="고객지원" current={location.pathname} onClick={toggleMenu} />
              <Link
                to={PageRoute.SUBSCRIBE}
                onClick={toggleMenu}
                className="mt-4 w-full text-center block px-4 py-3 rounded-md bg-primary text-white font-bold"
              >
                체험 키트 신청
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-white">Eco Brew</span>
            </div>
            <p className="text-sm text-stone-400">
              지구를 생각하는 가장 향기로운 습관.<br/>
              당신의 일상에 지속가능한 커피를 배달합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={PageRoute.BEANS} className="hover:text-primary transition-colors">원두 라인업</Link></li>
              <li><Link to={PageRoute.SUBSCRIBE} className="hover:text-primary transition-colors">정기 구독</Link></li>
              <li><Link to={PageRoute.SUBSCRIBE} className="hover:text-primary transition-colors">선물하기</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={PageRoute.STORY} className="hover:text-primary transition-colors">브랜드 스토리</Link></li>
              <li><Link to={PageRoute.SUPPORT} className="hover:text-primary transition-colors">매장 찾기</Link></li>
              <li><Link to={PageRoute.SUPPORT} className="hover:text-primary transition-colors">채용</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
            <p className="text-xs text-stone-500">
              (주)에코브루 | 대표: 김그린<br/>
              사업자등록번호: 123-45-67890<br/>
              서울시 성동구 성수동 에코빌딩 3층
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-stone-700 text-center text-xs text-stone-500">
          © 2024 Eco Brew. All rights reserved.
        </div>
      </footer>
    </div>
  );
};