// ==========================================================
// Jersey Hub Nepal — Master Catalog Data & Store Config
// ==========================================================

export const RETRO_ARCHIVES = [
  {
    id: 'retro-99',
    title: 'Manchester United 1999 Treble',
    era: '1998/99 Season',
    price: 2450,
    tag: 'Limited',
    image: 'images/united-jerseys.jpg',
    story: 'Worn on the historic night in Barcelona when Sheringham and Solskjaer sealed the treble.'
  },
  {
    id: 'retro-98',
    title: 'France 1998 World Cup Zidane',
    era: '1998 World Cup',
    price: 2650,
    tag: 'Archive',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    story: 'Two headers in Saint-Denis made Zizou immortal. The kit that defined a generation.'
  },
  {
    id: 'concept-dragon',
    title: 'Tokyo Street Dragon Edition',
    era: 'Concept Series',
    price: 2550,
    tag: 'Drop',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    story: 'Japanese mythological dragon meets modern football tailoring. Gold foil sublimated embroidery.'
  }
];

export const COMMUNITY_POSTS = [
  {
    id: 1,
    name: 'Suman Shrestha',
    location: 'Kathmandu',
    kit: 'Arsenal 24/25 Home',
    image: 'images/football-jerseys.jpg',
    review: 'The HEAT.RDY fabric quality is genuinely 1:1 authentic player issue. Arrived in Kathmandu in less than 24 hours.'
  },
  {
    id: 2,
    name: 'Prashant Thapa',
    location: 'Pokhara',
    kit: 'Nepal Rhinos T20 Kit',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    review: 'Custom name printing for Dipendra 14 is razor sharp. Wore it during the World Cup watch party!'
  },
  {
    id: 3,
    name: 'Aayush Karki',
    location: 'Lalitpur',
    kit: 'Man United 1999 Treble',
    image: 'images/united-jerseys.jpg',
    review: 'The retro felt SHARP sponsor and collar jacquard details are museum level. Best jersey store in Nepal.'
  },
  {
    id: 4,
    name: 'Kritika Gurung',
    location: 'Butwal',
    kit: 'Real Madrid Mbappé #9',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    review: 'Delivered to Butwal via express courier in 2 days. Sizing is spot on and the badges are pristine.'
  }
];

export const LAB_KITS = [
  {
    id: 'lab-nepal',
    name: 'Nepal National Team 2024',
    category: 'National Pride',
    basePrice: 1950,
    frontImage: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
    backColor: '#C51D34',
    textColor: '#FFFFFF',
    numberColor: '#FFFFFF',
    defaultName: 'BIMAL',
    defaultNumber: '10'
  },
  {
    id: 'lab-arsenal',
    name: 'Arsenal 24/25 Authentic Home',
    category: 'Premier League',
    basePrice: 2650,
    frontImage: 'images/football-jerseys.jpg',
    backColor: '#DB0007',
    textColor: '#FFFFFF',
    numberColor: '#FFFFFF',
    defaultName: 'SAKA',
    defaultNumber: '7'
  },
  {
    id: 'lab-united',
    name: 'Man United 1999 Treble Retro',
    category: 'Retro Classic',
    basePrice: 2450,
    frontImage: 'images/united-jerseys.jpg',
    backColor: '#C70101',
    textColor: '#FBE106',
    numberColor: '#FBE106',
    defaultName: 'BECKHAM',
    defaultNumber: '7'
  },
  {
    id: 'lab-rhinos',
    name: 'Nepal Rhinos T20 Kit',
    category: 'Cricket',
    basePrice: 2200,
    frontImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    backColor: '#003893',
    textColor: '#FFFFFF',
    numberColor: '#FFFFFF',
    defaultName: 'PAUDEL',
    defaultNumber: '45'
  }
];

export const SPORTS_CONFIG = {
  football: {
    id: 'football',
    name: 'Football',
    ballImage: 'images/football-circle.jpg',
    heroImage: 'images/football-jerseys.jpg',
    heroTitle: ['PREMIUM', 'SPORTS', 'WEAR'],
    heroSub: 'Official matchwear and curated club jerseys engineered for Nepali sports enthusiasts who wear the game.',
    badge: '2024/25 Official Matchwear',
    accentColor: '#C51D34',
    secondaryColor: '#003893',
    provenance: 'EST. 2018 • KATHMANDU HUB',
    promo: {
      image: 'images/united-jerseys.jpg',
      heading: 'FIND JERSEYS YOU WANT AND GET THEM DELIVERED',
      buttonText: 'ORDER NOW',
      subtext: 'Special archive drop: Manchester United & Arsenal 2024 Classic Home & Away editions'
    },
    categories: ['All', 'Premier League', 'La Liga', 'Nepal National', 'Retro Classics', 'Player Edition'],
    jerseys: [
      {
        id: 'fb-1',
        name: 'Arsenal 24/25 Home Authentic Match Jersey',
        team: 'Arsenal FC',
        league: 'Premier League',
        category: 'Premier League',
        season: '2024/25 Season',
        spec: 'HEAT.RDY 220 GSM AeroMesh',
        provenance: 'London, England',
        price: 2650,
        originalPrice: 3200,
        rating: 4.9,
        reviews: 48,
        badge: 'Player Issue',
        image: 'images/football-jerseys.jpg',
        description: 'Engineered with HEAT.RDY technology for maximum breathability. Features iconic Cannon crest heat-pressed on high-grade recycled polyester.',
        tags: ['New Arrival', 'Bestseller'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'fb-4',
        name: 'Nepal National Football Team 2024 Official Kit',
        team: 'Nepal National Team',
        league: 'National Teams',
        category: 'Nepal National',
        season: 'National Team Edition',
        spec: 'Everest AirMesh Fabric',
        provenance: 'Kathmandu, Nepal',
        price: 1950,
        originalPrice: 2400,
        rating: 5.0,
        reviews: 130,
        badge: 'Nepal Pride',
        image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
        description: 'Official Crimson Red & Deep Blue jersey of the Nepal National Football Team. Lightweight moisture-wicking fabric with national flag and emblem.',
        tags: ['National Pride', 'Bestseller in Nepal'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'fb-2',
        name: 'Manchester United 24/25 Heritage Trio Kit',
        team: 'Manchester United',
        league: 'Premier League',
        category: 'Retro Classics',
        season: 'Heritage Drop',
        spec: 'Woven Jacquard Fabric',
        provenance: 'Manchester, England',
        price: 2450,
        originalPrice: 2900,
        rating: 4.8,
        reviews: 62,
        badge: 'Retro Classic',
        image: 'images/united-jerseys.jpg',
        description: 'Vintage-inspired design celebrating United heritage with embroidered club crest, woven sponsor, and ribbed crewneck collar.',
        tags: ['Classic', 'Popular in Nepal'],
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      },
      {
        id: 'fb-3',
        name: 'Real Madrid 24/25 Mbappé #9 UCL Edition',
        team: 'Real Madrid',
        league: 'La Liga',
        category: 'La Liga',
        season: '2024/25 Season',
        spec: 'Authentic Slim Fit 210 GSM',
        provenance: 'Madrid, Spain',
        price: 2850,
        originalPrice: 3500,
        rating: 5.0,
        reviews: 84,
        badge: 'Mbappé #9',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
        description: 'The historic new era kit in classic all-white with houndstooth pattern and gold accents. Includes official UEFA Champions League badges.',
        tags: ['Hot', 'Bestseller'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'fb-5',
        name: 'FC Barcelona 24/25 125th Anniversary Kit',
        team: 'FC Barcelona',
        league: 'La Liga',
        category: 'La Liga',
        season: 'Anniversary Special',
        spec: 'Dri-FIT ADV Double Knit',
        provenance: 'Barcelona, Catalonia',
        price: 2750,
        originalPrice: 3300,
        rating: 4.9,
        reviews: 55,
        badge: '125 Years',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
        description: 'Celebratory half-and-half Blaugrana design paying tribute to the club’s founding year 1899 with centrally placed anniversary badge.',
        tags: ['Special Edition'],
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      },
      {
        id: 'fb-6',
        name: 'Inter Miami CF Messi #10 Flamingo Pink Kit',
        team: 'Inter Miami CF',
        league: 'MLS',
        category: 'Player Edition',
        season: '2024/25 Season',
        spec: 'AEROREADY Lightweight',
        provenance: 'Miami, Florida',
        price: 2600,
        originalPrice: 3100,
        rating: 4.9,
        reviews: 92,
        badge: 'Messi #10',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
        description: 'The iconic Flamingo Pink kit with Messi 10 official lettering and numbers. Premium aero-ready stretch fabric.',
        tags: ['Trending', 'Messi 10'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      }
    ]
  },

  cricket: {
    id: 'cricket',
    name: 'Cricket',
    ballImage: 'images/cricket-circle.jpg',
    heroImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85',
    heroTitle: ['ELITE', 'CRICKET', 'APPAREL'],
    heroSub: 'Official ICC World Cup and franchise kits engineered for Nepal Rhinos fans across the globe.',
    badge: 'Nepal Rhinos T20 World Cup Kits',
    accentColor: '#003893',
    secondaryColor: '#C51D34',
    provenance: 'ICC T20 WORLD CUP • OFFICIAL',
    promo: {
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
      heading: 'NEPAL RHINOS T20 WORLD CUP EDITION IN STOCK',
      buttonText: 'SHOP CRICKET',
      subtext: 'Get official name & number customized for Rohit Paudel, Dipendra Singh Airee, or your own squad name'
    },
    categories: ['All', 'Nepal Rhinos', 'T20 World Cup', 'IPL Franchises', 'Test Cricket Whites'],
    jerseys: [
      {
        id: 'ck-1',
        name: 'Nepal National Cricket T20 World Cup 2024 Kit',
        team: 'Nepal Rhinos',
        league: 'ICC World Cup',
        category: 'Nepal Rhinos',
        season: 'T20 World Cup 2024',
        spec: 'RhinoShield Ventilated Poly',
        provenance: 'Kathmandu, Nepal',
        price: 2200,
        originalPrice: 2800,
        rating: 5.0,
        reviews: 185,
        badge: 'Official T20 WC',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
        description: 'The historic jersey worn by the Rhinos at the ICC T20 World Cup. Features the Mount Everest & Rhino motifs in rich navy and crimson.',
        tags: ['#1 Bestseller', 'Rhinos Pride'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'ck-2',
        name: 'India World Champions T20 2024 Blue Jersey',
        team: 'India National Team',
        league: 'ICC World Cup',
        category: 'T20 World Cup',
        season: 'Champions 2024',
        spec: 'Dual-Star Championship Poly',
        provenance: 'Mumbai, India',
        price: 2350,
        originalPrice: 2900,
        rating: 4.9,
        reviews: 74,
        badge: 'Champions Edition',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
        description: 'T20 World Cup winning jersey with tricolor collar highlights and dual star championship badge over the BCCI crest.',
        tags: ['Champions', 'Popular'],
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      },
      {
        id: 'ck-3',
        name: 'Chennai Super Kings IPL 2024 Whistle Podu Kit',
        team: 'Chennai Super Kings',
        league: 'IPL',
        category: 'IPL Franchises',
        season: 'IPL 2024 Matchwear',
        spec: 'Canary Yellow Breathable Knit',
        provenance: 'Chennai, India',
        price: 2150,
        originalPrice: 2600,
        rating: 4.8,
        reviews: 63,
        badge: 'Dhoni #7',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80',
        description: 'Vibrant yellow CSK match jersey featuring camouflage shoulder straps and Dhoni 7 signature numbering option.',
        tags: ['IPL Classic', 'Dhoni 7'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'ck-4',
        name: 'Royal Challengers Bengaluru IPL 2024 Red & Blue',
        team: 'Royal Challengers Bengaluru',
        league: 'IPL',
        category: 'IPL Franchises',
        season: 'IPL 2024 Matchwear',
        spec: 'Dual-Tone SportMesh',
        provenance: 'Bengaluru, India',
        price: 2150,
        originalPrice: 2600,
        rating: 4.8,
        reviews: 58,
        badge: 'Kohli #18',
        image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
        description: 'The dynamic new red and royal blue colorway featuring the roaring lion crest and King Kohli 18 back print.',
        tags: ['Kohli 18', 'IPL'],
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      }
    ]
  },

  basketball: {
    id: 'basketball',
    name: 'Basketball',
    ballImage: 'images/basketball.jpg',
    heroImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85',
    heroTitle: ['VINTAGE', 'HOOP', 'HERITAGE'],
    heroSub: 'Authentic NBA swingman jerseys and vintage hardwood classics for true streetballers and collectors.',
    badge: 'Hardwood Classic NBA Swingman',
    accentColor: '#C51D34',
    secondaryColor: '#003893',
    provenance: 'NBA AUTHENTIC HARDWOOD',
    promo: {
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
      heading: 'NBA HARDWOOD CLASSICS & 2024 PLAYOFF KITS',
      buttonText: 'EXPLORE HOOPS',
      subtext: 'Double-knit mesh jerseys featuring heat-applied twill player names and numbers'
    },
    categories: ['All', 'Lakers', 'Bulls', 'Warriors', 'Celtics', 'Retro Hardwood'],
    jerseys: [
      {
        id: 'bb-1',
        name: 'Los Angeles Lakers LeBron James #23 Icon Edition',
        team: 'LA Lakers',
        league: 'NBA',
        category: 'Lakers',
        season: 'Icon Edition',
        spec: 'Heavyweight Forum Mesh 240 GSM',
        provenance: 'Los Angeles, California',
        price: 2800,
        originalPrice: 3400,
        rating: 4.9,
        reviews: 78,
        badge: 'LeBron #23',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
        description: 'Classic Forum Gold mesh jersey with purple drop-shadow lettering. Breathable, sweat-wicking Nike Dri-FIT technology.',
        tags: ['King James', 'Bestseller'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'bb-2',
        name: 'Chicago Bulls Michael Jordan #23 1996 Red Vintage',
        team: 'Chicago Bulls',
        league: 'NBA',
        category: 'Bulls',
        season: '1996 Finals Throwback',
        spec: 'Mitchell & Ness Retro Double Knit',
        provenance: 'Chicago, Illinois',
        price: 2950,
        originalPrice: 3600,
        rating: 5.0,
        reviews: 142,
        badge: 'MJ #23 GOAT',
        image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
        description: 'Mitchell & Ness quality heavyweight mesh jersey honoring the 72-10 historic championship season.',
        tags: ['Legendary', 'Must Have'],
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
        inStock: true
      },
      {
        id: 'bb-3',
        name: 'Golden State Warriors Stephen Curry #30 Splash Blue',
        team: 'GS Warriors',
        league: 'NBA',
        category: 'Warriors',
        season: 'City Edition',
        spec: 'Dri-FIT Swingman Mesh',
        provenance: 'San Francisco, California',
        price: 2750,
        originalPrice: 3300,
        rating: 4.9,
        reviews: 88,
        badge: 'Curry #30',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
        description: 'Royal blue jersey featuring the Bay Bridge crest with Curry 30 sharp typography and ribbed striped trims.',
        tags: ['Chef Curry', 'Popular'],
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      }
    ]
  }
};

// Full Master Store Schema
export const MASTER_STORE_DATA = {
  ...SPORTS_CONFIG,
  retroArchives: RETRO_ARCHIVES,
  communityPosts: COMMUNITY_POSTS,
  labKits: LAB_KITS
};

// Available Nepal delivery zones
export const NEPAL_REGIONS = [
  { id: 'bagmati-ktm', name: 'Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur)', fee: 100, eta: 'Same Day / 24 Hours' },
  { id: 'outside-ktm', name: 'Outside Kathmandu Valley (Pokhara, Butwal, Biratnagar, Chitwan, etc.)', fee: 180, eta: '2 - 3 Business Days' },
  { id: 'remote-nepal', name: 'Remote & Hill Districts (All Nepal Express Delivery)', fee: 250, eta: '3 - 5 Business Days' }
];

// Payment Gateway Options with Nepali Flag accents
export const PAYMENT_METHODS = [
  {
    id: 'esewa',
    name: 'eSewa Mobile Wallet',
    badge: 'Popular in Nepal',
    description: 'Instant payment via eSewa ID or Web Checkout',
    iconColor: '#60BB46'
  },
  {
    id: 'khalti',
    name: 'Khalti Digital Wallet',
    badge: 'Instant Cashback',
    description: 'Pay securely with your Khalti registered mobile number',
    iconColor: '#5C2D91'
  },
  {
    id: 'fonepay',
    name: 'Fonepay QR / Mobile Banking',
    badge: 'All Banks Supported',
    description: 'Scan & Pay from NIC Asia, Nabil, Global IME, Prabhu or any Nepal bank app',
    iconColor: '#C51D34'
  },
  {
    id: 'cod',
    name: 'Cash on Delivery (COD)',
    badge: 'Doorstep Payment',
    description: 'Inspect your jersey and pay in cash when the courier arrives',
    iconColor: '#003893'
  }
];
