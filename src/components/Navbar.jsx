import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function Navbar() {
  const { setIsSearchOpen, setIsMenuModalOpen } = useCafe();
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const sections = ['home', 'gallery', 'products', 'coffee', 'reviews', 'franchise'];
      const scrollPosition = scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Showcase', id: 'gallery' },
    { label: 'Menu', id: 'products' },
    { label: 'Craft', id: 'coffee' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Franchise', id: 'franchise' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 w-full z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div
        className={`w-full max-w-[1240px] pointer-events-auto rounded-full transition-all duration-300 py-2 sm:py-2.5 px-4 sm:px-6 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#002418]/90 backdrop-blur-md border-white/20 shadow-2xl'
            : 'bg-[#003B29]/80 backdrop-blur-md border-white/15 shadow-xl'
        }`}
      >
        {/* Brand Logo Area */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-decoration-none z-10 flex-shrink-0"
          aria-label="8itcafe Home"
        >
          <div className="w-8 h-8 rounded-full bg-white text-[#003B29] flex flex-col items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 flex-shrink-0">
            <span className="font-heading font-black text-[13px] leading-none tracking-tight">8it</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-[16px] sm:text-[18px] leading-tight tracking-tight text-white">
              8itcafe
            </span>
            <span className="text-[8px] font-semibold text-white/70 italic hidden sm:inline">
              Ate It. Loved It.
            </span>
          </div>
        </a>

        {/* Center Nav Links: Visible on Desktop */}
        <nav
          className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-3.5 py-1 text-[12.5px] lg:text-[13px] font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#003B29] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Header Action: Search + Order Now CTA Pill */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Search coffee & beans"
          >
            <Search className="w-4 h-4" strokeWidth={2.3} />
          </button>

          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C28E5C] text-[#002418] text-[11px] sm:text-[12px] font-extrabold px-4 sm:px-5 py-2 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <span>Order Coffee</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
