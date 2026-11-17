import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Aarav Mehta',
      role: 'Specialty Coffee Connoisseur',
      avatar: 'AM',
      rating: 5,
      review:
        'The Iced Spanish Latte here is leagues ahead of anything else. The double-shot specialty espresso cuts cleanly through the condensed sweetness. Absolutely top-tier craftsmanship!',
      date: 'Visited Kadappadi Lounge',
      favoriteItem: 'Iced Spanish Latte',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Creative Director & Remote Worker',
      avatar: 'PS',
      rating: 5,
      review:
        '8itcafe has mastered the sweet spot of serene ambience and world-class coffee. High-speed Wi-Fi, peaceful music, and the Iced Matcha Latte is so rich and authentic. My daily work sanctuary.',
      date: 'Visited Calicut Outlet',
      favoriteItem: 'Iced Matcha Latte',
    },
    {
      id: 3,
      name: 'Dr. Rahul Nair',
      role: 'Healthcare Professional',
      avatar: 'RN',
      rating: 5,
      review:
        'As someone meticulous about bean provenance, knowing their Arabica is shade-grown at 1,800m altitude and roasted in 5kg micro-batches makes all the difference in cup acidity and aroma.',
      date: 'Visited Kochi Flagship',
      favoriteItem: 'V60 Ethiopian Yirgacheffe',
    },
    {
      id: 4,
      name: 'Ananya Desai',
      role: 'Food & Lifestyle Journalist',
      avatar: 'AD',
      rating: 5,
      review:
        'The Iced Berry Latte is a revelation—natural berry coulis paired with cold-pressed oat milk. The presentation, the branding, and the staff warmth make 8itcafe an absolute benchmark.',
      date: 'Visited Bangalore Lounge',
      favoriteItem: 'Iced Berry Latte',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#002F20] text-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#004B32]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D4A373]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-8 z-10 flex flex-col items-center">
        {/* Section Heading (without pill badge) */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-3"
          >
            What Our Coffee Lovers Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-xs sm:text-sm max-w-md mx-auto mb-4"
          >
            Real feedback from over 15,000+ happy cafe visitors across all our locations
          </motion.p>

          {/* Star Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#001F15]/80 border border-white/15 shadow-inner"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />
              ))}
            </div>
            <span className="font-heading font-black text-white text-sm">4.9 / 5</span>
            <span className="text-white/50 text-xs border-l border-white/20 pl-2">
              1,240+ verified reviews
            </span>
          </motion.div>
        </div>

        {/* Carousel / Review Grid */}
        <div className="w-full max-w-5xl relative">
          {/* Desktop Grid (3 cards visible) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
            {reviews.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#003829]/90 border border-white/15 p-6 flex flex-col justify-between shadow-xl relative group"
              >
                <Quote className="w-8 h-8 text-[#D4A373]/25 absolute top-5 right-5" />
                
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />
                    ))}
                  </div>
                  <p className="text-white/90 text-[13.5px] leading-relaxed mb-6 font-medium italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4A373] text-[#002418] font-heading font-extrabold flex items-center justify-center text-sm shadow-md">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-bold text-sm text-white">{item.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A373]" />
                      </div>
                      <span className="text-xs text-white/60 block">{item.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Single Card Carousel */}
          <div className="md:hidden w-full relative mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#003829] border border-white/15 p-6 shadow-xl relative"
              >
                <Quote className="w-8 h-8 text-[#D4A373]/25 absolute top-5 right-5" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6 font-medium italic">
                  "{reviews[currentIndex].review}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373] text-[#002418] font-heading font-extrabold flex items-center justify-center text-sm">
                    {reviews[currentIndex].avatar}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-white block">
                      {reviews[currentIndex].name}
                    </span>
                    <span className="text-xs text-white/60 block">
                      {reviews[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-[#D4A373]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

