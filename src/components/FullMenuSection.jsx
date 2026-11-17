import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Coffee, Utensils, Check } from 'lucide-react';
import { useCafe } from '../context/CafeContext';
import { FULL_MENU } from '../data/coffeeData';

export default function FullMenuSection() {
  const [activeCategory, setActiveCategory] = useState(FULL_MENU[0].category);
  const { addToCart } = useCafe();
  const [addedId, setAddedId] = useState(null);

  const currentCategoryData = FULL_MENU.find((c) => c.category === activeCategory) || FULL_MENU[0];

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#003B29] tracking-tight">
          Explore Our Full Cafe Menu
        </h2>
        <p className="mt-3 text-[#566E61] text-sm sm:text-base">
          From velvety espresso classics to cold brew infusions and freshly baked morning viennoiserie.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
        {FULL_MENU.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
              activeCategory === cat.category
                ? 'bg-[#003B29] text-white shadow-md'
                : 'bg-[#FCF8F2] text-[#2D4A3C] hover:bg-[#F2E7D8] border border-[#003B29]/10'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {currentCategoryData.items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FCF8F2] p-5 sm:p-6 rounded-2xl border border-[#003B29]/10 hover:border-[#004B32]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-heading font-bold text-lg text-[#003B29]">
                    {item.name}
                  </h3>
                  <span className="font-heading font-extrabold text-lg text-[#004B32] whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#566E61] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#003B29]/10">
                <span className="text-[11px] font-semibold text-[#4A6053] bg-[#F2E7D8] px-2.5 py-0.5 rounded-full">
                  100% Arabica
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    addedId === item.id
                      ? 'bg-[#004B32] text-white'
                      : 'bg-[#003B29] text-white hover:bg-[#00271B]'
                  }`}
                  aria-label={`Add ${item.name} to tray`}
                >
                  {addedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Tray</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

