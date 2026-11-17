import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';
import { BRAND_INFO } from '../data/coffeeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002419] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#004B32] border border-white/20 flex flex-col items-center justify-center text-white">
                <span className="font-heading font-black text-sm leading-none">8it</span>
                <span className="text-[3.5px] opacity-75 whitespace-nowrap">Ate It. Loved It. That's It.</span>
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">8itcafe</span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed mb-6">
              Ate It. Loved It. That's It. A specialized modern sanctuary dedicated to authentic specialty coffee, cold handcrafted creations, and minimal living.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={BRAND_INFO.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" aria-label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-[#F5E5C9] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Cold Favorites</a></li>
              <li><a href="#coffee" className="hover:text-white transition-colors">Our Coffee</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Hours & Info */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-[#F5E5C9] uppercase tracking-wider mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="font-semibold text-white">Mon – Fri:</li>
              <li className="text-xs text-white/60 mb-2">{BRAND_INFO.hours.weekdays}</li>
              <li className="font-semibold text-white">Sat – Sun:</li>
              <li className="text-xs text-white/60">{BRAND_INFO.hours.weekends}</li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-[#F5E5C9] uppercase tracking-wider mb-4">
              Coffee Journal
            </h4>
            <p className="text-xs text-white/70 mb-3 leading-relaxed">
              Subscribe for seasonal micro-lot drops and secret tasting events.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to 8itcafe Journal!'); }} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 bg-white/10 px-3.5 py-2.5 rounded-full text-xs text-white placeholder-white/40 outline-none border border-white/15 focus:border-[#F5E5C9]"
              />
              <button
                type="submit"
                className="bg-[#F5E5C9] text-[#003B29] font-bold text-xs px-4 py-2.5 rounded-full hover:bg-white transition-all cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} 8itcafe (Ate it Cafe). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
