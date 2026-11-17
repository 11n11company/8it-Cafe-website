import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';
import { BRAND_INFO, HERO_SLIDES } from '../data/coffeeData';

// Fullscreen ultra-high-resolution 3D master plate (2560x1144)
import heroBgPlate from '../assets/hero_master_hd.jpg';

export default function Hero() {
  const { activeSlide, setIsVideoOpen } = useCafe();
  const currentSlide = HERO_SLIDES[activeSlide] || HERO_SLIDES[0];

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="snap-section relative w-full h-screen overflow-hidden bg-[#F3E2C4]"
    >
      {/* ==============================================================
          DESKTOP HERO (>= md): Fullscreen Photorealistic Plate (Cup, Splash, Beans, Curve)
          ============================================================== */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={heroBgPlate}
          alt="8itcafe takeaway coffee cup with green lid and dynamic coffee splash"
          className="w-full h-full object-cover object-center"
          draggable="false"
        />
      </div>

      {/* Desktop Main Content Overlay (>= md) */}
      <div className="hidden md:block relative w-full h-full pointer-events-none z-10">
        {/* Giant Low-Opacity Watermark */}
        <div className="flex flex-col absolute right-[5%] xl:right-[6%] top-[8%] lg:top-[10%] select-none pointer-events-none z-0 leading-[0.80] font-heading font-black text-[180px] lg:text-[230px] xl:text-[270px] text-white/[0.07] tracking-tight">
          <span>Cof</span>
          <span>fee</span>
        </div>

        {/* Left Content */}
        <div className="absolute left-[5.5%] top-[24%] lg:top-[26%] w-[320px] lg:w-[340px] flex flex-col justify-start pointer-events-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#003B29]">
              {BRAND_INFO.heroSubtitle}
            </span>
            <span className="text-sm font-bold text-[#003B29]">—</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide.id + 'title-desktop'}
              initial={{ opacity: 0.95, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="font-heading font-black text-[48px] lg:text-[56px] xl:text-[60px] leading-[0.93] tracking-[-0.035em] text-[#003B29] mb-4"
            >
              <span className="block">{currentSlide.title[0]}</span>
              <span className="block">{currentSlide.title[1]}</span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide.id + 'tagline-desktop'}
              initial={{ opacity: 0.95 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[15.5px] font-semibold leading-[1.38] text-[#003B29] whitespace-pre-line mb-7"
            >
              {currentSlide.tagline}
            </motion.p>
          </AnimatePresence>

          <div>
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center bg-[#003B29] text-white rounded-full h-[44px] pl-6 pr-1.5 py-1 shadow-lg hover:bg-[#00271B] transition-all duration-300 cursor-pointer"
              aria-label="Explore our coffee menu"
            >
              <span className="text-[12px] font-extrabold tracking-[0.12em] uppercase mr-4">
                EXPLORE NOW
              </span>
              <span className="w-9 h-9 rounded-full bg-[#F5E5C9] text-[#003B29] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-[#003B29]" strokeWidth={2.8} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Controls */}
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="absolute right-[4%] bottom-[14%] w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer z-20"
            aria-label="Watch coffee extraction video"
          >
            <span className="absolute inset-[-4px] rounded-full border border-dashed border-white/30 animate-[spin_14s_linear_infinite]" />
            <Play className="w-4 h-4 ml-0.5 fill-white text-white" />
          </button>

          <div className="absolute right-[4%] bottom-[5%] flex items-center gap-4 text-white/90 z-20">
            <a
              href={BRAND_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ==============================================================
          MOBILE HERO (< md): Bold, Substantial, Heroic & Perfectly Balanced
          ============================================================== */}
      <div className="md:hidden relative w-full h-full flex flex-col justify-between pt-16 pb-4 px-4 z-10 overflow-hidden bg-[#F3E2C4]">
        {/* Rich Layered Background with Organic Curve & Subtle Watermark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3E2C4] via-[#F0DDC0] to-[#E9D5B7] pointer-events-none z-0" />
        
        {/* Giant Watermark "Coffee" in Background */}
        <div className="absolute -right-2 top-[32%] font-heading font-black text-[120px] leading-none text-[#003B29]/[0.04] select-none pointer-events-none z-0">
          Coffee
        </div>

        {/* Ambient Warm Green Glow */}
        <div className="absolute -right-16 bottom-16 w-64 h-64 rounded-full bg-[#004B32]/10 blur-3xl pointer-events-none z-0" />

        {/* Top: Mobile Typography & Explore Button (Prominent & Bold) */}
        <div className="relative z-10 flex flex-col items-center text-center mt-1 max-w-full">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#003B29]/10 text-[#003B29] text-[10.5px] font-extrabold uppercase tracking-[0.16em] mb-2.5 shadow-xs">
            <span>{BRAND_INFO.heroSubtitle}</span>
            <span className="font-bold">—</span>
          </div>

          <h1 className="font-heading font-black text-[38px] sm:text-[44px] leading-[0.92] tracking-[-0.03em] text-[#003B29] mb-2">
            <span className="block">Premium</span>
            <span className="block text-[#004B32]">Coffee</span>
          </h1>

          <p className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#566E61] max-w-[280px] leading-snug mb-3.5">
            Rich aroma. Bold flavor. A better you.
          </p>

          <button
            onClick={scrollToProducts}
            className="inline-flex items-center bg-[#003B29] hover:bg-[#00271B] text-white rounded-full h-[40px] pl-5 pr-1.5 py-1 shadow-lg hover:shadow-xl transition-all cursor-pointer group active:scale-95"
          >
            <span className="text-[11px] font-extrabold tracking-[0.12em] uppercase mr-3">
              EXPLORE NOW
            </span>
            <span className="w-7 h-7 rounded-full bg-[#F5E5C9] text-[#003B29] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-[#003B29]" strokeWidth={2.8} />
            </span>
          </button>
        </div>

        {/* Center: The Iconic 3D Takeaway Cup with Splash (Heroic Size, Centered, Filling The Middle) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 flex-1 w-full max-w-[310px] sm:max-w-[350px] mx-auto flex items-center justify-center my-auto py-2"
        >
          <img
            src="/hero_cup_isolated.png"
            alt="8itcafe 3D takeaway coffee cup with dynamic coffee splash and roasted beans"
            className="w-full h-full max-h-[340px] sm:max-h-[380px] object-contain drop-shadow-2xl scale-110"
          />
        </motion.div>

        {/* Bottom Bar: Play Video Button + Social Icons */}
        <div className="relative z-10 w-full flex items-center justify-between px-2 pt-1">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003B29] text-white text-[11.5px] font-extrabold shadow-md cursor-pointer hover:bg-[#004B32] transition-colors active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-white text-white" />
            <span>Watch Extraction</span>
          </button>

          <div className="flex items-center gap-3.5 text-[#003B29]">
            <a
              href={BRAND_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#004B32] transition-colors p-1"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#004B32] transition-colors p-1"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#004B32] transition-colors p-1"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
