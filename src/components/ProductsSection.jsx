import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Coffee, Droplets, Check } from 'lucide-react';
import { useCafe } from '../context/CafeContext';
import { FAN_FAVORITES } from '../data/coffeeData';

export default function ProductsSection() {
  const { addToCart, setIsMenuModalOpen } = useCafe();
  const [activeFilter, setActiveFilter] = useState('all');

  const productsList = [
    {
      id: 'iced-spanish-latte',
      category: 'Signature Espresso',
      filterType: 'espresso',
      name: 'Iced Spanish Latte',
      badge: 'Bestseller',
      badgeColor: 'bg-[#C69255] text-[#002418]',
      cardImg: '/products/card_spanish.png',
      alt: 'Iced Spanish Latte — Bestseller ₹260',
      price: 260,
      description: 'Double-shot specialty espresso layered over sweet condensed milk and chilled whole milk.',
      notes: 'Caramel Crema · Silky · Double Shot',
      glow: 'hover:shadow-[0_20px_45px_-10px_rgba(110,75,51,0.35)]',
    },
    {
      id: 'iced-matcha-latte',
      category: 'Ceremonial Bar',
      filterType: 'matcha',
      name: 'Iced Matcha Latte',
      badge: 'Antioxidant Rich',
      badgeColor: 'bg-[#2D6A4F] text-white',
      cardImg: '/products/card_matcha.png',
      alt: 'Iced Matcha Latte — Antioxidant Rich ₹290',
      price: 290,
      description: 'Stone-ground ceremonial Uji matcha layered over velvety cold-frothed creamy milk.',
      notes: 'Uji Matcha · Energizing · Creamy',
      glow: 'hover:shadow-[0_20px_45px_-10px_rgba(0,56,34,0.35)]',
    },
    {
      id: 'iced-mango-latte',
      category: 'Seasonal Reserve',
      filterType: 'seasonal',
      name: 'Iced Mango Latte',
      badge: 'Seasonal Special',
      badgeColor: 'bg-[#D97706] text-white',
      cardImg: '/products/card_mango.png',
      alt: 'Iced Mango Latte — Seasonal Special ₹270',
      price: 270,
      description: 'Real Alphonso mango compote layered with sweet crema and chilled slow-melted ice.',
      notes: 'Alphonso Mango · Tropical · Sweet',
      glow: 'hover:shadow-[0_20px_45px_-10px_rgba(217,119,6,0.35)]',
    },
    {
      id: 'iced-berry-latte',
      category: 'Chef’s Selection',
      filterType: 'seasonal',
      name: 'Iced Berry Latte',
      badge: 'Chef’s Pick',
      badgeColor: 'bg-[#BE123C] text-white',
      cardImg: '/products/card_berry.png',
      alt: 'Iced Berry Latte — Chef’s Pick ₹280',
      price: 280,
      description: 'Handcrafted wild berry reduction swirled into chilled creamy milk and espresso.',
      notes: 'Wild Berries · Velvety · Fruity',
      glow: 'hover:shadow-[0_20px_45px_-10px_rgba(190,18,60,0.35)]',
    },
  ];

  const handleCardClick = (product) => {
    const item = FAN_FAVORITES.find((p) => p.id === product.id) || product;
    addToCart(item);
  };

  const filteredProducts = activeFilter === 'all'
    ? productsList
    : productsList.filter((p) => p.filterType === activeFilter);

  return (
    <section
      id="products"
      className="relative w-full py-20 lg:py-28 bg-[#FDF1E3] text-[#003B29] flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Soft Ambient Background Radiance */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#E8DAC8]/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-[#D4A373]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ==============================================================
            SECTION HEADING (Chick Buck Style Centered & Bold)
            ============================================================== */}
        <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          {/* Pill Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#003B29]/25 bg-white/70 backdrop-blur-sm text-[#003B29] mb-4 shadow-sm"
          >
            <Leaf className="w-3.5 h-3.5 fill-[#003B29] text-[#003B29]" />
            <span className="text-[11px] font-black uppercase tracking-wider">
              Customer Favorites
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-[56px] text-[#003B29] leading-[0.96] tracking-tight uppercase mb-4"
          >
            The Fan Favorites,{' '}
            <span className="block text-[#004B32]">Best Served Cold</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#566E61] text-xs sm:text-[14.5px] leading-relaxed max-w-lg mx-auto"
          >
            Chilled artisan brews and slow-melted cold lattes, handcrafted fresh daily with double-shot specialty Arabica espresso.
          </motion.p>
        </div>

        {/* ==============================================================
            THE 4 HERO CARDS: Clean, Balanced 2x2 Showcase (NO banner images!)
            ============================================================== */}
        <div className="w-full max-w-[1060px] grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-12">
          {filteredProducts.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleCardClick(card)}
              className={`relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg border-2 border-white/95 cursor-pointer group bg-white transition-all duration-300 ${card.glow}`}
            >
              <img
                src={card.cardImg}
                alt={card.alt}
                className="w-full h-auto block select-none group-hover:scale-102 transition-transform duration-500 ease-out"
                draggable="false"
              />

              {/* Subtle Ambient Sheen on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Quick Click Hint Pill on Hover */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002418]/90 text-white text-[11px] font-bold shadow-lg backdrop-blur-sm">
                  <span>Click to Order</span>
                  <ArrowRight className="w-3 h-3 text-[#D4A373]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==============================================================
            CHICK BUCK STYLE VALUE PILLARS (Replaces top & bottom images!)
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="w-full max-w-[1060px] grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {/* Pillar 1 */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/75 border border-[#003B29]/10 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-[#004B32]/10 text-[#004B32] flex items-center justify-center flex-shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-black text-sm text-[#003B29] block">
                100% Arabica
              </span>
              <span className="text-xs text-[#566E61]">
                Single-origin beans, 204°C micro-roast
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/75 border border-[#003B29]/10 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-[#004B32]/10 text-[#004B32] flex items-center justify-center flex-shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-black text-sm text-[#003B29] block">
                18h Cold-Steep
              </span>
              <span className="text-xs text-[#566E61]">
                Slow-melt crystal ice, zero bitterness
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/75 border border-[#003B29]/10 shadow-sm backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-[#004B32]/10 text-[#004B32] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-black text-sm text-[#003B29] block">
                Custom Milk Bar
              </span>
              <span className="text-xs text-[#566E61]">
                Oat, Almond, Coconut & Whole dairy
              </span>
            </div>
          </div>
        </motion.div>

        {/* ==============================================================
            SECTION FOOTER: Call to Action Buttons
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-3 bg-[#003B29] hover:bg-[#00271B] text-white text-[13px] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <span>Explore Full Menu (24 Items)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>

          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-[#003B29]/25 text-[#003B29] text-[13px] font-extrabold px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>View All Cold Beverages</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
