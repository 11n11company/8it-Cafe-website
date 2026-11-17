# 8itcafe (Ate it Cafe) — Premium Coffee Brand Website

A production-grade, visually accurate React application recreating the **8itcafe** visual identity with forest green and warm cream editorial aesthetics.

---

## 🌟 Technology Stack

- **React 18 / 19** with clean, modular, reusable component hierarchy
- **Vite** for sub-second HMR and optimized production bundling
- **Tailwind CSS v4** (`@tailwindcss/vite`) with custom luxury color tokens
- **Framer Motion** for subtle floating coffee cup physics, parallax beans, and page transitions
- **Lucide React** for minimal, modern vector iconography
- **Web Audio API** for acoustic ambient cafe murmur

---

## ☕ Brand Specifications

- **Brand**: 8itcafe
- **Full Name**: Ate it Cafe
- **Tagline**: *Ate It. Loved It. That's It.*
- **Color Palette**:
  - Forest Green: `#004B32`
  - Dark Green: `#003B29`
  - Deep Green: `#002F20`
  - Warm Cream: `#FFF5E6`
  - Light Cream: `#F8EBD8`
  - Coffee Brown: `#75401F`
  - Crisp White: `#FFFFFF`
- **Typography**: `Outfit` (Bold modern geometric headings) & `Plus Jakarta Sans` (Readable editorial body)

---

## 📐 Layout & Structure

1. **Header & Navigation**:
   - Original 8it circular emblem (`8it`, *Ate It. Loved It. That's It.*) + `8itcafe` brand title
   - Smooth navigation: `Home`, `Our Coffee`, `About`, `Contact` with active indicator dot
   - Actions: Instant Search modal trigger, Cart Drawer trigger with live item count badge, Mobile Drawer trigger

2. **Hero Section (Exact Reference Composition)**:
   - **Left**: `GOOD DAYS START WITH —`, large bold `Premium Coffee` title, `Rich aroma. Bold flavor. A better you.` tagline, `INCREDIBLY FRESH AND NATURAL` description, and `EXPLORE NOW →` CTA pill button.
   - **Center**: High-definition takeaway coffee cup with dark green lid, 8it logo badge, realistic dynamic coffee splash, and floating roasted coffee beans with Framer Motion floating physics.
   - **Right**: Oversized low-opacity `Cof fee` typography watermark, `A WORLD OF FLAVORS` feature card, circular Play button with animated dashed ring (opens brewing extraction modal), slide indicator `01`, and social profile links (Instagram, Facebook, Twitter).
   - **Background**: Organic curved SVG vector dividing the warm cream left and forest-green right zones.

3. **Products Section ("The fan favorites, best served cold")**:
   - 4 Card Grid with studio photography, ratings, tags, descriptions, and pricing in Indian Rupees (₹):
     1. **Iced Spanish Latte** (₹260) — Espresso & sweet condensed milk poured over ice.
     2. **Iced Matcha Latte** (₹290) — Ceremonial grade matcha over chilled creamy milk.
     3. **Iced Mango Latte** (₹270) — Ripe Alphonso mango puree with cold milk & espresso.
     4. **Iced Berry Latte** (₹280) — Sweet berries swirled through velvety cold milk.

4. **Additional Complete Sections**:
   - **Our Coffee Standards**: Volcanic elevation, 204°C drum roasting, triple-filtered water, SCA 85+ specialty grade.
   - **Full Menu**: Categorized tabs (Espresso Bar, Cold Bar & Nitro, Pour-Over & Single Origin, Fresh Bakes).
   - **About & Our Story**: The 8it philosophy of uncompromised coffee minimalism, 1:2.15 extraction ratio.
   - **Why Choose Us**: 4 pillars of excellence with feature icons.
   - **Cafe Gallery**: Curated photo grid of the cafe interior, barista pour-over, roasting drum, and iced drinks.
   - **Customer Testimonials**: Verified community feedback with 5-star ratings.
   - **Visit Our Cafe**: Flagship location, opening hours, Google directions, amenities badge.
   - **Contact Us**: Form validation for name, email, topic, and message with instant feedback.
   - **Footer**: Brand links, hours, newsletter subscribe, and copyright.

5. **Interactive Drawers & Modals**:
   - **Cart Drawer**: Quantity adjustments, item deletion, subtotal, 5% GST, and counter pickup checkout.
   - **Search Modal**: Instant search with quick-filter pills (Spanish Latte, Matcha, Mango, Berry, Cold Brew, Espresso, Croissant).
   - **Brewing Showcase Modal**: Espresso extraction simulation with steam particles, water temp, pressure, and extraction time.
   - **Mobile Drawer**: Responsive off-canvas slide-out menu.
   - **Toast Notifications**: Interactive toast alerts on orders and inquiries.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run Vite dev / preview server
npm run preview -- --port 5173
# or
npm run dev
```

Server is live at: **http://localhost:5173/**
