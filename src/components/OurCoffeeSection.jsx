import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Thermometer, ShieldCheck, Droplet, ArrowRight, Play } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function OurCoffeeSection() {
  const { setIsMenuModalOpen, setIsVideoOpen } = useCafe();

  const specs = [
    {
      icon: Compass,
      title: "1,400m – 2,200m",
      label: "Volcanic High Terroir",
      desc: "Shade-grown in Chikmagalur & Yirgacheffe misty canopies."
    },
    {
      icon: Thermometer,
      title: "204°C Drum Roast",
      label: "5kg Micro Batches",
      desc: "Caramelizing natural fruit sugars without scorching delicate florals."
    },
    {
      icon: Droplet,
      title: "140 ppm Water",
      label: "Custom Minerals",
      desc: "Balanced magnesium ions extracting pure chocolate notes."
    },
    {
      icon: ShieldCheck,
      title: "SCA 85+ Grade",
      label: "Specialty Standard",
      desc: "Top 3% of Arabica harvest, hand-sorted and defect-free."
    }
  ];

  return (
    <section
      id="coffee"
      className="snap-section relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#002F20] text-white flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-5 overflow-hidden"
    >
      {/* Subtle Background Radial Highlights */}
      <div className="hidden lg:block absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#004B32]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#004B32]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Our Coffee Story & Brewing Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#F5E5C9] bg-white/10 px-3.5 py-1 rounded-full w-max mb-3">
              THE 8IT COFFEE STANDARD
            </span>

            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] text-white tracking-tight leading-tight mb-3">
              Crafted for Those Who Care About What's in the Cup
            </h2>

            <p className="text-white/80 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mb-5 max-w-2xl">
              Our coffee begins at high-altitude volcanic estates where cool mountain breezes slow berry maturation. Sourced through direct-trade relationships, we roast in small 5kg micro-batches right here in our roastery to protect delicate floral aromatics, juicy wild berries, and rich dark cacao.
            </p>

            {/* Coffee Beans & Brewing Specs (4 grid cards) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mb-6">
              {specs.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3 sm:p-3.5 bg-[#003B29]/70 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#F5E5C9]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#F5E5C9]" />
                      <span className="font-heading font-extrabold text-sm sm:text-base text-white">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10.5px] font-bold text-[#F5E5C9] block">
                      {item.label}
                    </span>
                    <p className="text-[11px] text-white/65 mt-0.5 leading-snug hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs: Explore Menu & Watch Brewing Video */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsMenuModalOpen(true)}
                className="group inline-flex items-center gap-3 bg-[#F5E5C9] hover:bg-[#FFF5E6] text-[#002F20] text-xs sm:text-sm font-extrabold px-6 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>EXPLORE FULL MENU</span>
                <span className="w-6 h-6 rounded-full bg-[#002F20] text-[#F5E5C9] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 text-xs sm:text-sm font-bold px-4 py-3 rounded-full transition-all duration-200 cursor-pointer border border-white/15"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Watch Roasting</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Coffee & Craft Photography Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Primary Coffee Craft Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] xl:aspect-[1/1] max-h-[380px] lg:max-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#003B29]">
              <img
                src="/story/pour-over.jpg"
                alt="Barista hands pouring hot water over fresh artisanal coffee ground bed"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F20]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#002F20]/85 backdrop-blur-md rounded-2xl border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5E5C9] block">
                    MANUAL EXTRACTION BAR
                  </span>
                  <span className="text-xs font-bold text-white block">
                    V60, Chemex & Nitro On Tap
                  </span>
                </div>
                <span className="text-[11px] font-extrabold text-[#F5E5C9] bg-white/10 px-2 py-1 rounded-lg">
                  85+ SCA
                </span>
              </div>
            </div>

            {/* Overlapping Floating Roasting Card */}
            <div className="hidden xl:flex absolute -bottom-5 -left-8 w-48 p-2 bg-[#003B29] border border-white/20 rounded-2xl shadow-2xl items-center gap-2.5 z-20">
              <img
                src="/story/roasting.jpg"
                alt="Fresh coffee beans cooling"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <span className="text-[9px] font-bold text-[#F5E5C9] uppercase tracking-wider block">In-House</span>
                <span className="text-[11px] font-extrabold text-white leading-tight block">Small 5kg Batches</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
