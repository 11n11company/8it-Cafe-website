import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCafe } from '../context/CafeContext';

export default function ToastNotice() {
  const { toastMessage } = useCafe();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#003B29] text-white px-6 py-3 rounded-full shadow-2xl font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/15 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

