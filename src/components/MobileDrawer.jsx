import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Phone } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';
import { BRAND_INFO } from '../data/coffeeData';

export default function MobileDrawer() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setIsCartOpen, setIsMenuModalOpen } = useCafe();

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    if (id === 'menu') {
      setIsMenuModalOpen(true);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#001F15]/70 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#FCF8F2] shadow-2xl z-50 flex flex-col justify-between p-6"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#003B29]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#003B29] flex flex-col items-center justify-center text-white">
                    <span className="font-heading font-black text-xs leading-none">8it</span>
                  </div>
                  <span className="font-heading font-black text-xl text-[#003B29]">8itcafe</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#566E61] hover:text-[#003B29] rounded-full hover:bg-[#F2E7D8]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="py-6 space-y-4">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Cold Favorites', id: 'products' },
                  { label: 'Our Coffee Standards', id: 'coffee' },
                  { label: 'Full Menu', id: 'menu' },
                  { label: 'Franchise & Contact Us', id: 'franchise' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="block w-full text-left font-heading font-extrabold text-lg text-[#003B29] hover:text-[#004B32] transition-colors cursor-pointer py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Cafe Info */}
            <div className="pt-6 border-t border-[#003B29]/10 space-y-4 text-xs text-[#566E61]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#004B32] flex-shrink-0 mt-0.5" />
                <span>124 Roaster Street, Arts District, Bengaluru</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#004B32] flex-shrink-0 mt-0.5" />
                <span>Mon–Sun: 7:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#004B32] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-4 pt-2 text-[#003B29]">
                <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href={BRAND_INFO.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
