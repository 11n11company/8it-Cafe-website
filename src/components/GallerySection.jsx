import React from 'react';

export default function GallerySection() {
  const images = [
    { src: '/story/cafe-interior.jpg', title: 'The Architectural Sanctuary', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/products/spanish-latte.jpg', title: 'Signature Iced Spanish Latte', span: 'col-span-1' },
    { src: '/products/matcha-latte.jpg', title: 'Stone Ground Ceremonial Matcha', span: 'col-span-1' },
    { src: '/story/pour-over.jpg', title: 'Manual V60 Extraction', span: 'col-span-1 md:col-span-2' },
    { src: '/story/roasting.jpg', title: 'Cooling Drum Fresh Roast', span: 'col-span-1' },
    { src: '/products/mango-latte.jpg', title: 'Alphonso Mango Cold Layer', span: 'col-span-1' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#004B32] bg-[#004B32]/10 px-3.5 py-1 rounded-full">
          VISUAL MEMORIES
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#003B29] tracking-tight mt-3">
          Moments Inside 8itcafe
        </h2>
        <p className="mt-3 text-[#566E61] text-sm sm:text-base">
          An atmospheric look into our cafe, the baristas at work, and handcrafted daily rituals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[220px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`group relative rounded-3xl overflow-hidden shadow-md bg-[#003B29]/10 ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002F20]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="font-heading font-bold text-white text-sm sm:text-base tracking-wide">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

