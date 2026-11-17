import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, clearCart, cartTotal, showToast } = useCafe();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    showToast(`Order for ₹${cartTotal} placed successfully! Please collect at the brew bar.`);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#001F15]/65 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Slide-out Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FCF8F2] shadow-2xl z-50 flex flex-col justify-between"
            aria-label="Your coffee order tray"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#003B29]/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#004B32] text-white flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-[#003B29]">Your Coffee Tray</h3>
                  <span className="text-xs text-[#566E61]">{cart.length} item{cart.length !== 1 ? 's' : ''} added</span>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#566E61] hover:text-[#003B29] rounded-full hover:bg-[#F2E7D8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-[#004B32]/25 mb-4" />
                  <h4 className="font-heading font-extrabold text-lg text-[#003B29]">Your Tray is Empty</h4>
                  <p className="text-xs text-[#566E61] max-w-xs mt-1 mb-6">
                    Browse our fan favorites or espresso bar to select your handcrafted brew.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#004B32] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow hover:bg-[#003B29] transition-all cursor-pointer"
                  >
                    View Cold Favorites
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-2xl border border-[#003B29]/10 flex items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-sm text-[#003B29]">{item.name}</h4>
                      <span className="text-xs font-extrabold text-[#004B32] block mt-0.5">₹{item.price}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-[#F8EBD8] rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#003B29] hover:bg-white transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-extrabold text-[#003B29] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#003B29] hover:bg-white transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-black text-sm text-[#003B29]">
                        ₹{item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#566E61] hover:text-red-500 transition-colors cursor-pointer p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#003B29]/10 bg-white">
                <div className="space-y-2 mb-4 text-sm text-[#566E61]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#003B29]">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Taxes & GST (5%)</span>
                    <span>₹{Math.round(cartTotal * 0.05)}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-[#003B29] pt-2 border-t border-[#003B29]/10">
                    <span>Estimated Total</span>
                    <span className="font-heading font-black text-xl text-[#004B32]">
                      ₹{cartTotal + Math.round(cartTotal * 0.05)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#004B32] hover:bg-[#003B29] text-white font-heading font-extrabold text-sm py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Proceed to Counter Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

