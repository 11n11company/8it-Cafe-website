import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function GalleryShowcaseSection() {
  const { setIsMenuModalOpen } = useCafe();

  const galleryCards = [
    {
      id: 'spanish',
      category: 'Signature',
      title: 'Spanish Latte',
      img: '/products/card_spanish.png',
      alt: '8itcafe Signature Iced Spanish Latte',
      rotate: -12,
      yOffset: 20,
    },
    {
      id: 'pour-over',
      category: 'Single Origin',
      title: 'Pour-Over Craft',
      img: '/story/pour-over.jpg',
      alt: 'Barista brewing specialty single-origin pour-over',
      rotate: -6,
      yOffset: 5,
    },
    {
      id: 'roastery',
      category: 'Artisan',
      title: 'Micro-Roast 204°C',
      img: '/story/roasting.jpg',
      alt: 'Small-batch 5kg Arabica coffee roasting',
      rotate: 0,
      yOffset: -12,
      featured: true,
    },
    {
      id: 'matcha',
      category: 'Antioxidant',
      title: 'Matcha Latte',
      img: '/products/card_matcha.png',
      alt: 'Uji Matcha cold latte with velvety milk',
      rotate: 6,
      yOffset: 5,
    },
    {
      id: 'lounge',
      category: 'Community',
      title: 'Cafe Ambience',
      img: '/story/cafe-interior.jpg',
      alt: 'Warm Scandinavian aesthetic 8itcafe lounge interior',
      rotate: 12,
      yOffset: 20,
    },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#002418] text-white isolate"
      style={{
        backgroundImage: `
          radial-gradient(circle at 18% 20%, rgba(198, 146, 85, 0.18), transparent 30%),
          radial-gradient(circle at 82% 80%, rgba(0, 75, 50, 0.35), transparent 35%),
          linear-gradient(155deg, #001A11 0%, #002C1E 45%, #003B29 100%)
        `,
      }}
    >
      {/* Decorative Grid Overlay (Chick Buck style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
        }}
      />

      {/* Central Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#D4A373]/20 blur-[120px] pointer-events-none z-0" />

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-8 z-10 flex flex-col items-center text-center">
        {/* Giant Display Headline (Big Sips. Bigger Moments.) without the pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 uppercase mt-2"
        >
          <span className="block font-heading font-black text-4xl sm:text-6xl lg:text-[76px] leading-[0.95] tracking-tight text-white">
            BIG SIPS.
          </span>
          <span
            className="block font-heading font-black text-5xl sm:text-7xl lg:text-[118px] xl:text-[132px] leading-[0.88] tracking-tight text-transparent select-none"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.38)',
              textShadow: '0 0 40px rgba(0, 75, 50, 0.4)',
            }}
          >
            BIGGER MOMENTS.
          </span>
        </motion.div>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed mb-10 sm:mb-14"
        >
          From our signature double-shot cold lattes to the community spaces that inspire connection and great conversations.
        </motion.p>

        {/* ==============================================================
            THE FAN-OUT STAGE: Desktop Curved Arc Deck (Chick Buck style)
            ============================================================== */}
        <div className="hidden md:flex relative w-full max-w-[1200px] h-[400px] lg:h-[450px] items-center justify-center mb-10 sm:mb-14">
          <div className="relative flex items-center justify-center w-full h-full">
            {galleryCards.map((card, idx) => {
              const offsetIndex = idx - 2; // -2, -1, 0, 1, 2
              const desktopX = offsetIndex * 195;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40, x: 0, rotate: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: card.yOffset,
                    x: desktopX,
                    rotate: card.rotate,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    y: -35,
                    x: desktopX,
                    zIndex: 40,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className={`absolute rounded-[20px] overflow-hidden cursor-pointer group shadow-2xl transition-all duration-300 ${
                    card.featured ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    width: 'clamp(160px, 16vw, 210px)',
                    aspectRatio: '4 / 5',
                    border: '5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 24px 50px rgba(0, 0, 0, 0.5), 0 2px 0 rgba(255, 255, 255, 0.6) inset',
                  }}
                  onClick={() => setIsMenuModalOpen(true)}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Card Title Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left z-10 pointer-events-none">
                    <span className="text-[#D4A373] text-[11px] font-extrabold uppercase tracking-wider block">
                      {card.category}
                    </span>
                    <span className="text-white font-heading font-black text-[15px] leading-tight block drop-shadow-md">
                      {card.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Gallery (< md) */}
        <div className="md:hidden w-full overflow-x-auto pb-6 pt-2 mb-8 flex gap-4 snap-x snap-mandatory px-4 no-scrollbar">
          {galleryCards.map((card) => (
            <div
              key={card.id + '-mobile'}
              className="w-[200px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 relative aspect-[4/5]"
              onClick={() => setIsMenuModalOpen(true)}
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-left z-10">
                <span className="text-[#D4A373] text-[10.5px] font-extrabold uppercase tracking-wider block">
                  {card.category}
                </span>
                <span className="text-white font-heading font-black text-sm leading-tight block">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer: Call to Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <span className="text-white/80 text-sm font-semibold tracking-wide">
            One sip. Endless inspiration.
          </span>
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-3 bg-[#D4A373] hover:bg-[#C28E5C] text-[#002418] text-xs sm:text-[13px] font-extrabold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

