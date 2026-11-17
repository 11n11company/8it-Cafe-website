/**
 * 8itcafe (Ate it Cafe) Data Store
 * Brand constants, menu items, testimonials, and story data.
 */

export const BRAND_INFO = {
  name: "8itcafe",
  fullName: "Ate it Cafe",
  tagline: "Ate It. Loved It. That's It.",
  heroHeading: "Premium Coffee",
  heroSubtitle: "GOOD DAYS START WITH",
  heroTagline: "Rich aroma. Bold flavor.\nA better you.",
  heroDescriptionHeading: "INCREDIBLY FRESH\nAND NATURAL",
  heroDescription: "Our coffee is made from carefully selected beans, roasted to perfection to bring you a rich and memorable experience in every sip.",
  heroWorldFlavorsHeading: "A WORLD\nOF FLAVORS",
  heroWorldFlavorsText: "From classic espresso to creamy lattes, discover a range of handcrafted coffee drinks made to match your mood.",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  address: "124 Roaster Street, Arts District, Bengaluru, Karnataka 560001",
  hours: {
    weekdays: "7:00 AM – 10:00 PM",
    weekends: "7:30 AM – 11:00 PM",
  },
  phone: "+91 98450 88219",
  email: "hello@8itcafe.com"
};

export const HERO_SLIDES = [
  {
    id: "01",
    title: ["Premium", "Coffee"],
    tagline: "Rich aroma. Bold flavor.\nA better you.",
    featureDesc: "Our coffee is made from carefully selected beans, roasted to perfection to bring you a rich and memorable experience in every sip.",
    flavorHeading: "A WORLD\nOF FLAVORS",
    flavorSubtext: "From classic espresso to creamy lattes, discover a range of handcrafted coffee drinks made to match your mood.",
    roastOrigin: "House Signature Blend · Chikmagalur & Yirgacheffe",
  },
  {
    id: "02",
    title: ["Artisan", "Roastery"],
    tagline: "Single origin beans.\nRoasted fresh daily.",
    featureDesc: "Direct-trade beans micro-roasted in small 5kg batches at 204°C to unlock notes of wild blackberry, dark cacao, and toasted hazelnut.",
    flavorHeading: "SINGLE ORIGIN\nEXCELLENCE",
    flavorSubtext: "Experience pour-overs and siphon brews highlighting the authentic volcanic terroir of high-altitude estates.",
    roastOrigin: "Ethiopia Yirgacheffe Grade 1 · Natural Process",
  },
  {
    id: "03",
    title: ["Velvet", "Cold Brew"],
    tagline: "Slow steeped 18 hours.\nNaturally sweet & smooth.",
    featureDesc: "Steeped in triple-filtered cold spring water and charged with pure nitrogen for a cascading creamy foam head with zero bitterness.",
    flavorHeading: "CHILLED\nPERFECTION",
    flavorSubtext: "Served ice-cold on tap or handcrafted with seasonal purees for the ultimate refreshing lift.",
    roastOrigin: "100% Arabica Bourbon · Washed Process",
  }
];

export const FAN_FAVORITES = [
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    category: "Cold Favorites",
    description: "Espresso and sweet condensed milk, poured over ice. Rich, silky and dangerously smooth.",
    price: 260,
    rating: 4.9,
    badge: "Bestseller",
    image: "/products/spanish-latte.jpg",
    tags: ["Silky Sweet", "Double Shot", "Cold"]
  },
  {
    id: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    category: "Cold Favorites",
    description: "Stone-ground matcha swirled into cold, creamy milk. Clean energy in every sip.",
    price: 290,
    rating: 4.8,
    badge: "Antioxidant Rich",
    image: "/products/matcha-latte.jpg",
    tags: ["Uji Matcha", "Creamy", "Energizing"]
  },
  {
    id: "iced-mango-latte",
    name: "Iced Mango Latte",
    category: "Cold Favorites",
    description: "Ripe mango blended with smooth, chilled milk.",
    price: 270,
    rating: 4.9,
    badge: "Seasonal Special",
    image: "/products/mango-latte.jpg",
    tags: ["Alphonso Mango", "Tropical", "Sweet Crema"]
  },
  {
    id: "iced-berry-latte",
    name: "Iced Berry Latte",
    category: "Cold Favorites",
    description: "Sweet berries swirled through cold, creamy milk.",
    price: 280,
    rating: 4.9,
    badge: "Chef's Pick",
    image: "/products/berry-latte.jpg",
    tags: ["Wild Berries", "Velvety", "Fruity"]
  }
];

export const FULL_MENU = [
  {
    category: "Espresso Bar",
    items: [
      { id: "esp-1", name: "Signature 8it Espresso", desc: "Double ristretto with dense hazelnut crema and cocoa finish", price: 160, isVeg: true },
      { id: "esp-2", name: "Cortado", desc: "Equal parts espresso and steamed textured milk in an authentic gibraltar glass", price: 190, isVeg: true },
      { id: "esp-3", name: "Velvet Flat White", desc: "Thin microfoam layer over intense double shot ristretto", price: 220, isVeg: true },
      { id: "esp-4", name: "Caffe Latte", desc: "Creamy steamed milk poured through dark roasted espresso", price: 230, isVeg: true },
      { id: "esp-5", name: "Spanish Latte (Hot)", desc: "Sweet condensed milk melted under steaming hot espresso", price: 250, isVeg: true },
      { id: "esp-6", name: "Madagascar Vanilla Bean Latte", desc: "Infused with genuine cured vanilla bean syrup and oat milk", price: 260, isVeg: true },
    ]
  },
  {
    category: "Cold Bar & Nitro",
    items: [
      { id: "cld-1", name: "Iced Spanish Latte", desc: "Espresso and sweet condensed milk poured over crystal ice", price: 260, isVeg: true },
      { id: "cld-2", name: "Iced Matcha Latte", desc: "Uji ceremonial grade stone-ground matcha with chilled milk", price: 290, isVeg: true },
      { id: "cld-3", name: "Iced Mango Latte", desc: "Alphonso mango puree swirled into chilled milk and espresso", price: 270, isVeg: true },
      { id: "cld-4", name: "Iced Berry Latte", desc: "Crushed wild berry compote with cold creamy milk", price: 280, isVeg: true },
      { id: "cld-5", name: "Nitro Cold Brew on Tap", desc: "18-hour cold brew infused with nitrogen for a cascading stout pour", price: 270, isVeg: true },
      { id: "cld-6", name: "Yuzu Cold Espresso Tonic", desc: "Fever-Tree tonic, candied yuzu peel, float of Ethiopian espresso", price: 280, isVeg: true },
    ]
  },
  {
    category: "Pour-Over & Single Origin",
    items: [
      { id: "po-1", name: "Ethiopia Yirgacheffe (V60)", desc: "Floral jasmine aroma, bergamot citrus, and honey sweetness", price: 280, isVeg: true },
      { id: "po-2", name: "Colombia Huila Supremo (Aeropress)", desc: "Red apple, caramel toffee, and smooth balanced acidity", price: 270, isVeg: true },
      { id: "po-3", name: "Panama Geisha Reserve (Chemex for 2)", desc: "Exquisite peach blossom, lemongrass, and tea-like elegance", price: 580, isVeg: true },
      { id: "po-4", name: "Chikmagalur Estate Peaberry", desc: "Cardamom spice, dark chocolate, and roasted almond notes", price: 250, isVeg: true },
    ]
  },
  {
    category: "Fresh Bakes & Viennoiserie",
    items: [
      { id: "bk-1", name: "French Butter Croissant", desc: "Laminated with 82% Normandy cultured butter, flaky & golden", price: 180, isVeg: true },
      { id: "bk-2", name: "Pain au Chocolat", desc: "Filled with double sticks of Belgian Valrhona dark chocolate", price: 220, isVeg: true },
      { id: "bk-3", name: "Almond Frangipane Croissant", desc: "Twice baked with almond cream and toasted sliced almonds", price: 240, isVeg: true },
      { id: "bk-4", name: "San Sebastian Burnt Cheesecake", desc: "Caramelized exterior with an ultra-creamy melting center", price: 290, isVeg: true },
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The Iced Spanish Latte here ruined all other coffee for me. The balance of high-grade espresso and creamy milk is unrivaled.",
    name: "Aarav Mehra",
    role: "Architect & Specialty Coffee Enthusiast",
    rating: 5,
    location: "Indiranagar"
  },
  {
    id: 2,
    quote: "8itcafe sets the benchmark for coffee architecture. The minimalist green and cream space combined with their single origin pour-overs is perfection.",
    name: "Pooja Varma",
    role: "Brand Director",
    rating: 5,
    location: "Koramangala"
  },
  {
    id: 3,
    quote: "Every morning starts with their Nitro Cold Brew. Super silky, zero acidity, and gives you that crisp clean focus for the day.",
    name: "Rohan Singhal",
    role: "Tech Founder",
    rating: 5,
    location: "Lavelle Road"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Specialty Grade Arabica",
    desc: "We source only beans scoring 85+ on the Specialty Coffee Association (SCA) cupping scale from organic shade-grown estates.",
    icon: "Coffee"
  },
  {
    title: "In-House Micro Roasting",
    desc: "Roasted weekly in precision 5kg batches to guarantee that the peak aroma and terroir profiles reach your cup at optimal freshness.",
    icon: "Flame"
  },
  {
    title: "Barista Championship Craft",
    desc: "Every cup is weighed to the decimal gram, extracted at 9.2 bars on custom calibrated La Marzocco KB90 machines.",
    icon: "Award"
  },
  {
    title: "Ethical Direct Trade",
    desc: "We pay 40% above fair-trade floor prices directly to family-owned estates in Chikmagalur, Coorg, and Yirgacheffe.",
    icon: "Leaf"
  }
];

