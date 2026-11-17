import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/coffeeData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F8EBD8] text-[#003B29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#004B32] bg-[#004B32]/10 px-3.5 py-1 rounded-full">
            COMMUNITY VOICE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#003B29] tracking-tight mt-3">
            What Coffee Lovers Are Saying
          </h2>
          <p className="mt-3 text-[#566E61] text-sm sm:text-base">
            Honest reflections from everyday coffee drinkers and certified specialty coffee enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FCF8F2] rounded-3xl p-7 sm:p-8 border border-[#003B29]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#004B32]/20 mb-3" />
                <p className="text-base text-[#003B29] font-medium leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#003B29]/10">
                <span className="font-heading font-extrabold text-base text-[#003B29] block">
                  {t.name}
                </span>
                <span className="text-xs text-[#566E61] font-semibold block mt-0.5">
                  {t.role} · {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

