import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Gauge, Clock, Droplets } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function BrewingVideoModal() {
  const { isVideoOpen, setIsVideoOpen } = useCafe();

  return (
    <AnimatePresence>
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-[#001F15]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#002F20] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/15 p-6 sm:p-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Brewing Extraction Simulation Visual */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-[#001F15] to-[#002F20] border border-white/10 flex flex-col items-center justify-center mb-6 p-6">
              {/* Animated Steam Particles */}
              <div className="flex gap-4 mb-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-10 bg-white/25 rounded-full blur-[3px]"
                    animate={{
                      y: [15, -25],
                      opacity: [0, 0.7, 0],
                      scale: [0.7, 1.3],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              {/* Espresso Portafilter / Cup Visual */}
              <div className="w-28 h-16 rounded-b-[40px] bg-[#F8EEDB] relative shadow-inner flex items-center justify-center border-t-2 border-[#D97706]">
                <div className="absolute inset-x-2 top-1.5 h-6 rounded-full bg-[#3E210B] flex items-center justify-center overflow-hidden">
                  <div className="w-6 h-3 rounded-full bg-[#D97706]/70 blur-[1px]" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] font-extrabold tracking-widest text-[#F5E5C9] uppercase bg-white/10 px-3 py-1 rounded-full">
                  LIVE EXTRACTION PROFILE
                </span>
                <h4 className="font-heading font-black text-xl text-white mt-2">
                  La Marzocco KB90 Double Shot
                </h4>
              </div>
            </div>

            {/* Brew Telemetry Stats */}
            <div className="grid grid-cols-4 gap-3 text-center border-t border-white/10 pt-5">
              <div className="bg-white/5 p-3 rounded-xl">
                <Flame className="w-4 h-4 mx-auto text-[#F5E5C9] mb-1" />
                <span className="font-heading font-black text-lg text-white block">93.2°C</span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider">Water Temp</span>
              </div>

              <div className="bg-white/5 p-3 rounded-xl">
                <Gauge className="w-4 h-4 mx-auto text-[#F5E5C9] mb-1" />
                <span className="font-heading font-black text-lg text-white block">9.2 bar</span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider">Pump Pressure</span>
              </div>

              <div className="bg-white/5 p-3 rounded-xl">
                <Clock className="w-4 h-4 mx-auto text-[#F5E5C9] mb-1" />
                <span className="font-heading font-black text-lg text-white block">27.5s</span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider">Pull Duration</span>
              </div>

              <div className="bg-white/5 p-3 rounded-xl">
                <Droplets className="w-4 h-4 mx-auto text-[#F5E5C9] mb-1" />
                <span className="font-heading font-black text-lg text-white block">42.0g</span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider">Yield (1:2.15)</span>
              </div>
            </div>

            <p className="text-xs text-white/70 text-center mt-5 leading-relaxed">
              Every bean batch is ground fresh on a Mahlkönig EK43 grinder calibrated at 180 microns to maximize aroma without over-extracting bitter tannins.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

