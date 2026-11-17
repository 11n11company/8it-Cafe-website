import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Plus, Coffee } from 'lucide-react';
import { useCafe } from '../context/CafeContext';
import { FAN_FAVORITES, FULL_MENU } from '../data/coffeeData';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCafe();
  const [query, setQuery] = useState('');

  // Collect all searchable items
  const allItems = useMemo(() => {
    const list = [...FAN_FAVORITES];
    FULL_MENU.forEach((cat) => {
      cat.items.forEach((item) => {
        if (!list.find((i) => i.id === item.id)) {
          list.push({ ...item, category: cat.category });
        }
      });
    });
    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q))
    );
  }, [query, allItems]);

  const quickTags = ['Spanish Latte', 'Matcha', 'Mango', 'Berry', 'Cold Brew', 'Espresso', 'Croissant'];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-[#001F15]/70 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-[#FCF8F2] rounded-3xl shadow-2xl border border-[#003B29]/15 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-[#003B29]/10 flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-[#004B32]" strokeWidth={2.5} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search coffee, iced lattes, roasts, bakes..."
                autoFocus
                className="flex-1 bg-transparent text-sm sm:text-base text-[#003B29] placeholder-[#566E61]/60 outline-none font-medium"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 text-[#566E61] hover:text-[#003B29] rounded-full hover:bg-[#F2E7D8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Tags */}
            <div className="px-5 py-3 bg-[#F8EBD8]/50 border-b border-[#003B29]/10 flex items-center gap-2 overflow-x-auto">
              <span className="text-[11px] font-bold text-[#566E61] uppercase tracking-wider whitespace-nowrap">
                Popular:
              </span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white hover:bg-[#004B32] hover:text-white text-[#003B29] border border-[#003B29]/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results Box */}
            <div className="max-h-80 overflow-y-auto p-4 sm:p-5">
              {!query.trim() ? (
                <div className="text-center py-8 text-[#566E61] text-xs sm:text-sm">
                  Type a keyword above or select a tag to find handcrafted drinks.
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-8 text-[#566E61] text-sm">
                  No drinks matching "<span className="font-bold text-[#003B29]">{query}</span>". Try another search.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-2xl border border-[#003B29]/10 flex items-center justify-between gap-4 hover:border-[#004B32]/30 transition-all shadow-sm"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold text-sm text-[#003B29]">{item.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F2E7D8] text-[#4A6053]">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#566E61] line-clamp-1 mt-0.5">
                          {item.description || item.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-heading font-black text-sm text-[#004B32]">₹{item.price}</span>
                        <button
                          onClick={() => {
                            addToCart(item);
                            setIsSearchOpen(false);
                          }}
                          className="bg-[#004B32] hover:bg-[#003B29] text-white p-2 rounded-full cursor-pointer shadow transition-all"
                          aria-label={`Add ${item.name} to tray`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

