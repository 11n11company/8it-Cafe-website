import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

export default function VisitCafeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#003B29] rounded-[32px] overflow-hidden text-white shadow-2xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F5E5C9] bg-white/10 px-3.5 py-1 rounded-full">
              DESTINATION CAFE
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4 leading-tight">
              Visit the Flagship Cafe
            </h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              Step inside our calm sanctuary of forest green banquettes and warm limestone. Watch our roasters at work or enjoy a chilled cold latte at the brew bar.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5E5C9]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Location</h3>
                  <p className="text-sm text-white/75 mt-0.5">{BRAND_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5E5C9]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Cafe Hours</h3>
                  <p className="text-sm text-white/75 mt-0.5">
                    Monday – Friday: {BRAND_INFO.hours.weekdays}<br />
                    Saturday – Sunday: {BRAND_INFO.hours.weekends}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5E5C9]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Reservations & Barista Desk</h3>
                  <p className="text-sm text-white/75 mt-0.5">{BRAND_INFO.phone} · {BRAND_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5E5C9] text-[#003B29] font-heading font-extrabold text-sm px-6 py-3.5 rounded-full hover:bg-white transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#002F20] relative border border-white/10">
              <img
                src="/story/cafe-interior.jpg"
                alt="8itcafe seating area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#002F20]/85 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#F5E5C9] block">High-Speed Fiber Wi-Fi & Seating</span>
                  <span className="text-xs text-white/70">Indoor & Alfresco Outdoor Garden Available</span>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

