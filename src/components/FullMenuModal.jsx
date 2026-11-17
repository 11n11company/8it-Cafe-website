import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Plus, Check } from 'lucide-react';
import { useCafe } from '../context/CafeContext';
import { FULL_MENU } from '../data/coffeeData';

export default function FullMenuModal() {
  const { isMenuModalOpen, setIsMenuModalOpen, addToCart } = useCafe();
  const [activeCategory, setActiveCategory] = useState(FULL_MENU[0].category);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedId, setAddedId] = useState(null);

  if (!isMenuModalOpen) return null;

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const currentCategoryData = FULL_MENU.find((c) => c.category === activeCategory) || FULL_MENU[0];

  const filteredItems = currentCategoryData.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuModalOpen(false)}
          className="absolute inset-0 bg-[#002F20]/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF5E6] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#003B29]/15"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#003B29]/10 bg-[#F8EBD8] flex items-center justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#004B32]">
                8ITCAFE ARTISANAL MENU
              </span>
              <h2 className="font-heading font-black text-2xl text-[#003B29]">
                Explore Our Handcrafted Menu
              </h2>
            </div>
            <button
              onClick={() => setIsMenuModalOpen(false)}
              className="p-2 rounded-full hover:bg-[#003B29]/10 text-[#003B29] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Categories Bar */}
          <div className="p-5 pb-3 border-b border-[#003B29]/10 bg-[#FFF5E6] flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {FULL_MENU.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setSearchTerm('');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.category
                      ? 'bg-[#003B29] text-white shadow'
                      : 'bg-[#FCF8F2] text-[#2D4A3C] hover:bg-[#F2E7D8] border border-[#003B29]/10'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Quick Filter Search */}
            <div className="relative w-full sm:w-56">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#566E61]" />
              <input
                type="text"
                placeholder="Search this category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FCF8F2] border border-[#003B29]/15 rounded-full pl-9 pr-3 py-1.5 text-xs text-[#003B29] placeholder-[#566E61]/70 focus:outline-none focus:ring-2 focus:ring-[#004B32]"
              />
            </div>
          </div>

          {/* Menu Items List */}
          <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-[#566E61]">
                No items matching "{searchTerm}" in {activeCategory}.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-[#FCF8F2] rounded-2xl border border-[#003B29]/10 hover:border-[#004B32]/30 hover:shadow-md transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-black text-base text-[#003B29] group-hover:text-[#004B32] transition-colors">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#004B32] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#566E61] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-2.5 flex items-center gap-2">
                        <span className="font-heading font-black text-sm text-[#003B29]">
                          ₹{item.price}
                        </span>
                        <span className="text-[10px] text-[#566E61] uppercase tracking-wider">
                          · {item.volume}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`p-2.5 rounded-xl transition-all cursor-pointer flex-shrink-0 ${
                        addedId === item.id
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#003B29] text-white hover:bg-[#00271B]'
                      }`}
                      aria-label={`Add ${item.name} to tray`}
                    >
                      {addedId === item.id ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[3]" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 bg-[#F8EBD8] border-t border-[#003B29]/10 flex items-center justify-between text-xs text-[#566E61]">
            <span>Crafted fresh with 100% Specialty Arabica</span>
            <button
              onClick={() => setIsMenuModalOpen(false)}
              className="text-[#004B32] font-bold hover:underline"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

