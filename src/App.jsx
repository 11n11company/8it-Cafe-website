import React from 'react';
import { CafeProvider } from './context/CafeContext';

// Navigation & Showcase Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryShowcaseSection from './components/GalleryShowcaseSection';
import ProductsSection from './components/ProductsSection';
import OurCoffeeSection from './components/OurCoffeeSection';
import ReviewsSection from './components/ReviewsSection';
import AboutStorySection from './components/AboutStorySection';

// Interactive Modals, Drawers & Toast
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import BrewingVideoModal from './components/BrewingVideoModal';
import MobileDrawer from './components/MobileDrawer';
import FullMenuModal from './components/FullMenuModal';
import ToastNotice from './components/ToastNotice';

export default function App() {
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, []);

  return (
    <CafeProvider>
      <div className="relative w-full min-h-screen bg-[#EDE4D7] text-[#003B29] selection:bg-[#004B32] selection:text-[#FFF5E6]">
        {/* Floating Header */}
        <Navbar />

        {/* Sections */}
        <main id="main-content" className="w-full">
          {/* SECTION 1 – COLD BREW HERO (Takeaway Cup & Splash) */}
          <Hero />

          {/* SECTION 2 – BIG SIPS. BIGGER MOMENTS. (Fan-Out Showcase Deck) */}
          <GalleryShowcaseSection />

          {/* SECTION 3 – FAN FAVORITES (Iced Lattes Bento Grid) */}
          <ProductsSection />

          {/* SECTION 4 – OUR COFFEE (Single-Origin Arabica Craft & Roasting) */}
          <OurCoffeeSection />

          {/* SECTION 5 – CUSTOMER REVIEWS (4.9-Star Verified Reviews) */}
          <ReviewsSection />

          {/* SECTION 6 – FRANCHISE & STORY (Lounge Footprint & Footer) */}
          <AboutStorySection />
        </main>

        {/* Floating Interactive Drawers, Modals & Toast */}
        <CartDrawer />
        <SearchModal />
        <BrewingVideoModal />
        <MobileDrawer />
        <FullMenuModal />
        <ToastNotice />
      </div>
    </CafeProvider>
  );
}
