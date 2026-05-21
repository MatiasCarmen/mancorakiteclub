import { componentImages } from '../../../config/images.js'
import BlogPage1 from '../../../pages/blog/top-20-kitesurf-destinations-part-1.jsx'
import BlogPage2 from '../../../pages/blog/7-different-plans-of-a-kitesurf-trip-to-peru.jsx'
import BlogPage3 from '../../../pages/blog/ChicamaPage.jsx'
import BlogPage4 from '../../../pages/blog/MancoraVsLobitosPage.jsx'
import BlogPage5 from '../../../pages/blog/PeruKitesurfPage.jsx'
import BlogPage6 from '../../../pages/blog/PacasmayoPage.jsx'
import BlogPage7 from '../../../pages/blog/why-mancora-is-different-kitesurf-wave-progression-guide.jsx'
import BlogPage8 from '../../../pages/blog/7-Nights-in-Mancora-Progression-Plan7-Nights-in-Mancora-Progression-Plan.jsx'
import BlogPage9 from '../../../pages/blog/Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level).jsx'
import BlogPage10 from '../../../pages/blog/Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching).jsx'
import BlogPage11 from '../../../pages/blog/Kite-Safari-Northern-Peru.jsx'
import BlogPage12 from '../../../pages/blog/Whale-season-in-northern-Peru-what-its-like-to-sail-with-whales-and-when-it-happens.jsx'
import BlogPage13 from '../../../pages/blog/Mancora-Whale-Season.jsx'
import BlogPage14 from '../../../pages/blog/Wingfoil-vs-Kitesurf-Choosing-Your-Weapon.jsx'
import BlogPage15 from '../../../pages/blog/Data-Strip-Safety.jsx'

const {
  blogHeroDesktop,
  blogHeroMobile,
  topDestinationsDesktop,
  topDestinationsMobile,
  tripPlansDesktop,
  tripPlansMobile,
  chicamaDesktop,
  chicamaMobile,
  lobitosDesktop,
  lobitosMobile,
  peruKitesurfDesktop,
  peruKitesurfMobile,
  pacasmayoDesktop,
  pacasmayoMobile,
  progressionDesktop,
  progressionMobile,
  sevenNightsDesktop,
  sevenNightsMobile,
  techniqueDesktop,
  techniqueMobile,
  coachingDesktop,
  coachingMobile,
  safariDesktop,
  safariMobile,
  whaleNorthDesktop,
  whaleNorthMobile,
  whaleMancoraDesktop,
  whaleMancoraMobile,
  wingChoiceDesktop,
  wingChoiceMobile,
  safetyDesktop,
  safetyMobile,
} = componentImages["sections/blog/BlogLayout/blogContent.js"]

export const BLOGHERO_IMAGE = blogHeroDesktop
export const BLOGHERO_MOBILE_IMAGE = blogHeroMobile
export const POST_1_IMAGE = topDestinationsDesktop
export const POST_2_IMAGE = tripPlansDesktop
export const POST_1_trending = topDestinationsDesktop
export const POST_2_trending = peruKitesurfDesktop

export const POSTS = [
  {
    slug: "top-20-kitesurf-destinations-part-1",
    title: "The 20 World's best destinations...",
    category: "KITESURF WAVE RIDING",
    date: "May 25, 2022",
    author: "Axel",
    image: topDestinationsDesktop,
    desktopImage: topDestinationsDesktop,
    mobileImage: topDestinationsMobile,
    component: BlogPage1,
    metaTitle: "Top 20 Kitesurf Wave Destinations Worldwide",
    metaDescription: "Discover the 20 best kitesurfing wave spots around the globe. From Peru to Indonesia, find your next perfect wave ride.",
    readingTime: 4,
    tags: ["kitesurf", "wave riding", "destinations", "travel", "spots"]
  },
  {
    slug: "7-different-plans-of-a-kitesurf-trip-to-peru",
    title: "7 Different Plans of a Kitesurf Trip to Perú",
    category: "KITESURFING PERU",
    date: "May 16, 2022",
    author: "Sergio Agamez",
    image: tripPlansDesktop,
    desktopImage: tripPlansDesktop,
    mobileImage: tripPlansMobile,
    component: BlogPage2,
    metaTitle: "7 Kitesurf Trip Plans for Peru: Best Itineraries",
    metaDescription: "Plan your perfect kitesurf trip to Peru with 7 different itineraries – from budget to luxury, solo to family, coast to mountains.",
    readingTime: 7,
    tags: ["peru", "kitesurf trip", "itineraries", "travel planning", "spots"]
  },
  {
    slug: "chicama-peru-surf-trip",
    title: "Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip",
    category: "SURFING PERU",
    date: "June 10, 2024",
    author: "Axel",
    image: chicamaDesktop,
    desktopImage: chicamaDesktop,
    mobileImage: chicamaMobile,
    component: BlogPage3,
    metaTitle: "Chicama Peru: Longest Wave & Ultimate Surf Trip Guide",
    metaDescription: "Complete guide to Chicama, Peru – the longest left-hand wave in the world. Best seasons, accommodation, and tips for surfers.",
    readingTime: 6,
    tags: ["surf", "chicama", "peru", "longest wave", "surf trip", "point break"]
  },
  {
    slug: "mancora-vs-lobitos-vs-cabo-blanco",
    title: "Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru",
    category: "KITESURFING PERU",
    date: "June 20, 2024",
    author: "Sergio Agamez",
    image: lobitosDesktop,
    desktopImage: lobitosDesktop,
    mobileImage: lobitosMobile,
    component: BlogPage4,
    metaTitle: "Mancora vs Lobitos vs Cabo Blanco: Best Kitesurf Spot",
    metaDescription: "Compare Mancora, Lobitos and Cabo Blanco for wave kitesurfing in Peru. Wind, waves, season and vibe – which spot wins?",
    readingTime: 6,
    tags: ["kitesurf", "peru", "mancora", "lobitos", "cabo blanco", "wave spots"]
  },
  {
    slug: "peru-kitesurf-north-vs-south",
    title: "Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide",
    category: "KITESURFING PERU",
    date: "June 30, 2024",
    author: "Miguelo",
    image: peruKitesurfDesktop,
    desktopImage: peruKitesurfDesktop,
    mobileImage: peruKitesurfMobile,
    component: BlogPage5,
    metaTitle: "Peru Kitesurf: North vs South – Complete Wind & Spot Guide",
    metaDescription: "North vs South Peru for kitesurfing: compare wind conditions, best spots, seasons, and what suits your level. Expert guide.",
    readingTime: 7,
    tags: ["peru", "kitesurf", "north vs south", "wind guide", "spots"]
  },
  {
    slug: "pacasmayo-peru-the-ultimate-point-break-surf-guide",
    title: "Pacasmayo, Peru: The Ultimate Point Break Surf Guide",
    category: "SURFING PERU",
    date: "July 10, 2024",
    author: "Axel",
    image: pacasmayoDesktop,
    desktopImage: pacasmayoDesktop,
    mobileImage: pacasmayoMobile,
    component: BlogPage6,
    metaTitle: "Pacasmayo Peru: Ultimate Point Break Surf Guide",
    metaDescription: "Everything about Pacasmayo, Peru's legendary point break. Best swell directions, winds, tides, and local tips for surfers.",
    readingTime: 5,
    tags: ["surf", "pacasmayo", "peru", "point break", "longboard", "wave"]
  },
  {
    slug: "why-mancora-is-different-kitesurf-wave-progression-guide",
    title: "Why Mancora is Different: Kitesurf Wave Progression Guide",
    category: "KITESURFING PERU",
    date: "July 20, 2024",
    author: "Sergio Agamez",
    image: progressionDesktop,
    desktopImage: progressionDesktop,
    mobileImage: progressionMobile,
    component: BlogPage7,
    metaTitle: "Why Mancora is Different: Kitesurf Wave Progression",
    metaDescription: "Learn why Mancora is ideal for kitesurf wave progression. Step-by-step guide to improve your wave riding skills in perfect conditions.",
    readingTime: 4,
    tags: ["kitesurf", "mancora", "wave progression", "coaching", "peru"]
  },
  {
    slug: "7-Nights-in-Mancora-Progression-Plan",
    category: 'PROGRESSION',
    title: '7 Nights in Máncora: Progression Plan',
    date: 'June 10, 2023',
    author: 'Axel',
    image: sevenNightsDesktop,
    desktopImage: sevenNightsDesktop,
    mobileImage: sevenNightsMobile,
    component: BlogPage8,
    metaTitle: "7 Nights in Mancora: Kitesurf Progression Plan",
    metaDescription: "A complete 7-day training plan to accelerate your kitesurf progression in Mancora. Daily sessions, drills and video analysis.",
    readingTime: 4,
    tags: ["kitesurf", "mancora", "progression", "training plan", "coaching"]
  },
  {
    slug: "Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level)",
    category: 'TECHNIQUE',
    title: 'Techniques for kitesurfing in waves: reading the swell, timing and control',
    date: 'July 5, 2023',
    author: 'Sergio Agamez',
    image: techniqueDesktop,
    desktopImage: techniqueDesktop,
    mobileImage: techniqueMobile,
    component: BlogPage9,
    metaTitle: "Kitesurf Waves Technique: Read Swell, Timing & Control",
    metaDescription: "Intermediate guide to kitesurfing waves: how to read the swell, perfect your timing, and maintain control in the surf zone.",
    readingTime: 5,
    tags: ["kitesurf", "waves", "technique", "reading swell", "timing", "intermediate"]
  },
  {
    slug: "Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching)",
    category: 'COACHING',
    title: 'Typical mistakes of the intermediate rider in waves and how to correct them',
    date: 'August 12, 2023',
    author: 'Axel',
    image: coachingDesktop,
    desktopImage: coachingDesktop,
    mobileImage: coachingMobile,
    component: BlogPage10,
    metaTitle: "5 Common Kitesurf Wave Mistakes & How to Fix Them",
    metaDescription: "Real coaching advice for intermediate kitesurfers: avoid typical wave riding errors, improve your technique and ride cleaner.",
    readingTime: 4,
    tags: ["kitesurf", "wave mistakes", "coaching", "intermediate", "correction"]
  },
  {
    slug: "Kite-Safari-Northern-Peru",
    category: 'EXPEDITIONS',
    title: 'Kite Safari Northern Peru — Expedition Series',
    date: 'September 3, 2023',
    author: 'Sergio Agamez',
    image: safariDesktop,
    desktopImage: safariDesktop,
    mobileImage: safariMobile,
    component: BlogPage11,
    metaTitle: "Kite Safari Northern Peru: Expedition Experience",
    metaDescription: "Join a kite safari through Northern Peru's hidden spots. Multi-day expedition with downwinders, wild camps and pristine waves.",
    readingTime: 4,
    tags: ["kite safari", "northern peru", "expedition", "downwinder", "adventure"]
  },
  {
    slug: "Whale-Season-in-Northern-Peru",
    category: 'LIFESTYLE',
    title: 'Whale Season in Northern Peru: sail with whales',
    date: 'October 1, 2023',
    author: 'Axel',
    image: whaleNorthDesktop,
    desktopImage: whaleNorthDesktop,
    mobileImage: whaleNorthMobile,
    component: BlogPage12,
    metaTitle: "Whale Season Northern Peru: Sail with Humpbacks",
    metaDescription: "Experience whale season in Northern Peru. When and where to see humpback whales while kitesurfing – a magical encounter.",
    readingTime: 4,
    tags: ["whales", "northern peru", "wildlife", "kitesurf", "lifestyle"]
  },
  {
    slug: "Mancora-Whale-Season",
    category: 'LIFESTYLE',
    title: 'Mancora Whale Season — The Kinetic Tide',
    date: 'October 20, 2023',
    author: 'Sergio Agamez',
    image: whaleMancoraDesktop,
    desktopImage: whaleMancoraDesktop,
    mobileImage: whaleMancoraMobile,
    component: BlogPage13,
    metaTitle: "Mancora Whale Season: Kitesurf with Humpbacks",
    metaDescription: "Detailed guide to whale season in Mancora. Best months, safety tips, and how to share the waves with gentle giants.",
    readingTime: 4,
    tags: ["mancora", "whale season", "humpbacks", "kitesurf", "safety"]
  },
  {
    slug: "Wingfoil-vs-Kitesurf-Choosing-Your-Weapon",
    category: 'WINGFOIL',
    title: 'Wingfoil vs Kitesurf: Choosing Your Weapon',
    date: 'November 15, 2023',
    author: 'Axel',
    image: wingChoiceDesktop,
    desktopImage: wingChoiceDesktop,
    mobileImage: wingChoiceMobile,
    component: BlogPage14,
    metaTitle: "Wingfoil vs Kitesurf: Which Sport is Right for You?",
    metaDescription: "Compare wingfoil and kitesurf: learning curve, gear, conditions, and fun factor. Help choosing the best foil sport.",
    readingTime: 4,
    tags: ["wingfoil", "kitesurf", "comparison", "foil", "beginner guide"]
  },
  {
    slug: "Safety-and-Progression-The-Technical-Edge",
    category: 'SAFETY',
    title: 'Safety & Progression: The Technical Edge',
    date: 'December 5, 2023',
    author: 'Sergio Agamez',
    image: safetyDesktop,
    desktopImage: safetyDesktop,
    mobileImage: safetyMobile,
    component: BlogPage15,
    metaTitle: "Kitesurf Safety & Progression: Technical Edge Guide",
    metaDescription: "Essential safety practices and technical drills to progress faster in kitesurfing. Reduce risk and improve performance.",
    readingTime: 4,
    tags: ["safety", "progression", "kitesurf technique", "drills", "gear"]
  },
]

export const TRENDING_POSTS = [
  {
    slug: "top-20-kitesurf-destinations-part-1",
    title: "The 20 World's best destinations for kitesurfing waves",
    image: topDestinationsDesktop,
    desktopImage: topDestinationsDesktop,
    mobileImage: topDestinationsMobile,
    alt: 'Kitesurfing wave destination',
  },
  {
    slug: "peru-kitesurf-north-vs-south",
    title: 'The guide of the best Kitesurfing Spots in Peru',
    image: peruKitesurfDesktop,
    desktopImage: peruKitesurfDesktop,
    mobileImage: peruKitesurfMobile,
    alt: 'Kitesurfing in Peru',
  },
  {
    slug: "chicama-peru-surf-trip",
    title: "Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip",
    image: chicamaDesktop,
    desktopImage: chicamaDesktop,
    mobileImage: chicamaMobile,
    alt: 'Chicama surf trip',
  },
  {
    slug: "mancora-vs-lobitos-vs-cabo-blanco",
    title: "Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru",
    image: lobitosDesktop,
    desktopImage: lobitosDesktop,
    mobileImage: lobitosMobile,
    alt: 'Mancora vs Lobitos vs Cabo Blanco',
  },
  {
    title: "Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide",
    slug: "peru-kitesurf-north-vs-south",
    image: peruKitesurfDesktop,
    desktopImage: peruKitesurfDesktop,
    mobileImage: peruKitesurfMobile,
    alt: 'Peru Kitesurf North vs South',  
  },
  {
    slug: "pacasmayo-peru-the-ultimate-point-break-surf-guide",
    title: "Pacasmayo, Peru: The Ultimate Point Break Surf Guide",
    image: pacasmayoDesktop,
    desktopImage: pacasmayoDesktop,
    mobileImage: pacasmayoMobile,
    alt: 'Pacasmayo surf guide',  
  },
  {
    slug: "why-mancora-is-different-kitesurf-wave-progression-guide",
    title: "Why Mancora is Different: Kitesurf Wave Progression Guide",
    image: progressionDesktop,
    desktopImage: progressionDesktop,
    mobileImage: progressionMobile,
    alt: 'Mancora wave progression guide',  
  },  
]
