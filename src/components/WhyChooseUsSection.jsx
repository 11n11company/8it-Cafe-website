import React from 'react';
import { Coffee, Flame, Award, Leaf } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/coffeeData';

export default function WhyChooseUsSection() {
  const iconMap = {
    Coffee: Coffee,
    Flame: Flame,
    Award: Award,
    Leaf: Leaf,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#004B32] bg-[#004B32]/10 px-3.5 py-1 rounded-full">
          WHY 8ITCAFE
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#003B29] tracking-tight mt-3">
          The Pillars Behind Every Cup
        </h2>
        <p className="mt-4 text-[#566E61] text-sm sm:text-base">
          We obsess over every stage of the coffee value chain so you never have to guess whether your morning cup will be extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WHY_CHOOSE_US.map((item) => {
          const Icon = iconMap[item.icon] || Coffee;
          return (
            <div
              key={item.title}
              className="bg-[#FCF8F2] rounded-3xl p-7 border border-[#003B29]/10 shadow-sm hover:shadow-xl hover:border-[#004B32]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004B32] text-white flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-6 h-6 text-[#F5E5C9]" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#003B29] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#566E61] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

