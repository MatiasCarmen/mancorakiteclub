export const SITE_URL = 'https://www.mancorakiteclub.com'

export const OG_IMAGES = Object.freeze({
  home: '/og/home.webp',
  trips: '/og/trips.webp',
  classes: '/og/classes.webp',
  stay: '/og/stay.webp',
  build: '/og/build.webp',
  blog: '/og/blog.webp',
  faq: '/og/faq.webp',
  contact: '/og/contact.webp',
  reviews: '/og/reviews.webp',
  waves: '/og/waves.webp',
})

export const DEFAULT_SEO = Object.freeze({
  title: 'Mancora Kite Club | Kitesurf & Wingfoil School',
  description:
    'Learn kitesurfing and wingfoiling in Mancora, Peru with professional IKO certified coaching, equipment rental, beachfront stays, and epic trips.',
  image: OG_IMAGES.home,
  canonicalPath: '/home',
  hreflang: { en: '/home', es: '/esp/home', fr: '/fr/home', default: '/home' },
})

export const PAGE_SEO = Object.freeze({
  home: Object.freeze({
    paths: ['/home', '/esp/home', '/fr/home'],
    title: 'Kitesurf School in Máncora, Peru | IKO Certified | Mancora Kite Club',
    description:
      'Premium kitesurf and wingfoil school in Máncora, Peru. IKO certified instructors, kite lessons, surf trips, rentals and personalized experiences.',
    keywords: [
      'kitesurf mancora',
      'kite school peru',
      'wingfoil peru',
      'surf mancora',
      'what to do in mancora',
      'mancora activities',
      'iko school peru',
      'kitesurf peru',
      'downwind peru',
    ],
    image: OG_IMAGES.home,
    canonicalPath: '/home',
    hreflang: { en: '/home', es: '/esp/home', fr: '/fr/home', default: '/home' },
  }),
  trips: Object.freeze({
    paths: ['/trips', '/esp/trips', '/fr/trips'],
    title: 'Kitesurf, Wingfoil & Surf Trips in Mancora | Mancora Kite Club',
    description:
      'Explore kitesurf, wingfoil, surf, and downwind trips in northern Peru with coaching, local spot knowledge, and custom travel support.',
    keywords: [
      'kitesurf trips peru',
      'kite vacations',
      'wingfoil camp peru',
      'surf trips mancora',
      'downwind peru',
      'surf safari peru',
    ],
    image: OG_IMAGES.trips,
    canonicalPath: '/trips',
    hreflang: { en: '/trips', es: '/esp/trips', fr: '/fr/trips', default: '/trips' },
  }),
  classes: Object.freeze({
    paths: ['/classes', '/esp/classes', '/fr/classes'],
    title: 'Kitesurfing & Wingfoiling Lessons in Mancora | Mancora Kite Club',
    description:
      'Book kitesurfing and wingfoil classes in Mancora, Peru with IKO certified instructors, quality gear, and coaching for every level.',
    keywords: [
      'kitesurfing lessons mancora',
      'wingfoil lessons peru',
      'iko school mancora',
      'learn kitesurf peru',
      'clases de kitesurf mancora',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/classes',
    hreflang: { en: '/classes', es: '/esp/classes', fr: '/fr/classes', default: '/classes' },
  }),
  stay: Object.freeze({
    paths: ['/stay', '/esp/stay', '/fr/stay'],
    title: 'Stay with Us in Mancora | Beachfront Hotel | Mancora Kite Club',
    description:
      'Stay close to the wind and waves in Mancora with comfortable rooms, rider-friendly amenities, and direct access to Kite Club experiences.',
    keywords: [
      'where to stay in mancora',
      'kitesurf accommodation peru',
      'beach hotel mancora',
      'hospedaje kitesurf mancora',
      'kite house mancora',
    ],
    image: OG_IMAGES.stay,
    canonicalPath: '/stay',
    hreflang: { en: '/stay', es: '/esp/stay', fr: '/fr/stay', default: '/stay' },
  }),
  build: Object.freeze({
    paths: ['/build', '/esp/build', '/fr/build'],
    title: 'Build Your Kite Trip in Mancora | Mancora Kite Club',
    description:
      'Create a custom Mancora trip with kitesurf, wingfoil, surf, accommodation, rentals, and extras matched to your group.',
    keywords: [
      'build your trip mancora',
      'custom kitesurf travel peru',
      'kite trip planner',
      'surf trip organizer peru',
    ],
    image: OG_IMAGES.build,
    canonicalPath: '/build',
    hreflang: { en: '/build', es: '/esp/build', fr: '/fr/build', default: '/build' },
  }),
  blog: Object.freeze({
    paths: ['/blog', '/esp/blog', '/fr/blog'],
    title: 'Kitesurf, Wingfoil & Surf Blog | Mancora Kite Club',
    description:
      'Read guides, spot breakdowns, coaching advice, and trip ideas for kitesurfing, wingfoil, and surf travel in northern Peru.',
    keywords: [
      'mancora blog',
      'kitesurf guides peru',
      'best beaches northern peru',
      'what to do in mancora',
      'surf spots peru',
    ],
    image: OG_IMAGES.blog,
    canonicalPath: '/blog',
    hreflang: { en: '/blog', es: '/esp/blog', fr: '/fr/blog', default: '/blog' },
  }),
  faq: Object.freeze({
    paths: ['/faq', '/esp/faq', '/fr/faq'],
    title: 'Mancora Kite Club FAQ | Kitesurfing & Wingfoiling questions',
    description:
      'Answers about kitesurfing lessons, wingfoil, surf trips, equipment rental, accommodation, booking, and travel in Mancora.',
    keywords: [
      'kitesurf FAQ mancora',
      'is kitesurfing dangerous',
      'best wind season mancora',
      'mancora travel safety',
    ],
    image: OG_IMAGES.faq,
    canonicalPath: '/faq',
    hreflang: { en: '/faq', es: '/esp/faq', fr: '/fr/faq', default: '/faq' },
  }),
  contact: Object.freeze({
    paths: ['/contact', '/esp/contact', '/fr/contact'],
    title: 'Contact Mancora Kite Club | Book Lessons & Accommodation',
    description:
      'Contact Mancora Kite Club for kitesurfing, wingfoil, surf trips, classes, accommodation, rentals, and fast support via WhatsApp.',
    keywords: [
      'contact kite school mancora',
      'book kitesurf lessons peru',
      'whatsapp mancora kite club',
    ],
    image: OG_IMAGES.contact,
    canonicalPath: '/contact',
    hreflang: { en: '/contact', es: '/esp/contact', fr: '/fr/contact', default: '/contact' },
  }),
  reviews: Object.freeze({
    paths: ['/reviews', '/esp/reviews', '/fr/reviews'],
    title: 'Mancora Kite Club Reviews | Testimonials & Stories',
    description:
      'See rider stories, testimonials, and community moments from guests who learned, traveled, and stayed with Mancora Kite Club.',
    keywords: [
      'mancora kite club reviews',
      'best kitesurf school peru reviews',
      'surfer testimonials mancora',
    ],
    image: OG_IMAGES.reviews,
    canonicalPath: '/reviews',
    hreflang: { en: '/reviews', es: '/esp/reviews', fr: '/fr/reviews', default: '/reviews' },
  }),
  waves: Object.freeze({
    paths: ['/waves', '/esp/waves', '/fr/waves'],
    title: 'Waves & Wind Trips in Northern Peru | Mancora Kite Club',
    description:
      'Discover kitesurf, wingfoil, and surf trips across Mancora, Negritos, Los Organos, Cabo Blanco, and Lobitos with local coaching.',
    keywords: [
      'waves and wind peru',
      'lobitos kitesurfing',
      'pacasmayo surf trip',
      'chicama surf guide',
      'cabo blanco surfing',
    ],
    image: OG_IMAGES.waves,
    canonicalPath: '/waves',
    hreflang: { en: '/waves', es: '/esp/waves', fr: '/fr/waves', default: '/waves' },
  }),
  // Service-specific pages
  kitesurfLessons: Object.freeze({
    paths: ['/services/kitesurf-lessons', '/esp/services/kitesurf-lessons', '/fr/services/kitesurf-lessons'],
    title: 'Kitesurf Lessons in Máncora | IKO Certified School | Mancora Kite Club',
    description:
      'Learn kitesurfing in Máncora, Peru with our IKO certified instructors. Beginner to advanced classes, premium equipment, and safe conditions. Book now!',
    keywords: [
      'kitesurf lessons mancora',
      'learn kitesurf peru',
      'kitesurfing mancora',
      'iko school mancora',
      'kitesurf school peru',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/services/kitesurf-lessons',
    hreflang: {
      en: '/services/kitesurf-lessons',
      es: '/esp/services/kitesurf-lessons',
      fr: '/fr/services/kitesurf-lessons',
      default: '/services/kitesurf-lessons',
    },
  }),
  wingfoilLessons: Object.freeze({
    paths: ['/services/wingfoil-lessons', '/esp/services/wingfoil-lessons', '/fr/services/wingfoil-lessons'],
    title: 'Wingfoil Lessons in Máncora | Learn Wingfoiling | Mancora Kite Club',
    description:
      'Master wingfoiling in Máncora, Peru. Safe, structured lessons for beginners and intermediate progression with our experienced coaches. Book your wingfoil class!',
    keywords: [
      'wingfoil lessons mancora',
      'wing foil mancora',
      'learn wingfoil peru',
      'wingfoil school peru',
      'wingfoiling mancora',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/services/wingfoil-lessons',
    hreflang: {
      en: '/services/wingfoil-lessons',
      es: '/esp/services/wingfoil-lessons',
      fr: '/fr/services/wingfoil-lessons',
      default: '/services/wingfoil-lessons',
    },
  }),
  waveRiding: Object.freeze({
    paths: ['/services/wave-riding-coaching', '/esp/services/wave-riding-coaching', '/fr/services/wave-riding-coaching'],
    title: 'Wave Riding Coaching in Máncora | Surf & Kite Waves | Mancora Kite Club',
    description:
      'Take your wave riding to the next level in Northern Peru. Custom wave kitesurfing and surfing coaching on Máncora\'s legendary point breaks. Learn from local pros!',
    keywords: [
      'wave riding coaching mancora',
      'wave kitesurfing peru',
      'surf coaching mancora',
      'learn wave riding peru',
      'wave surfing mancora',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/services/wave-riding-coaching',
    hreflang: {
      en: '/services/wave-riding-coaching',
      es: '/esp/services/wave-riding-coaching',
      fr: '/fr/services/wave-riding-coaching',
      default: '/services/wave-riding-coaching',
    },
  }),
  tripsDownwinds: Object.freeze({
    paths: ['/services/trips-downwinds', '/esp/services/trips-downwinds', '/fr/services/trips-downwinds'],
    title: 'Kitesurf Trips & Downwinders in Northern Peru | Mancora Kite Club',
    description:
      'Embark on epic downwinders and kitesurf trips along the Northern Peruvian coast. Discover secret spots, local guides, and custom support vehicles. Book your trip!',
    keywords: [
      'kitesurf trips peru',
      'downwind peru',
      'downwinders mancora',
      'kite safaris peru',
      'kitesurf travel northern peru',
    ],
    image: OG_IMAGES.trips,
    canonicalPath: '/services/trips-downwinds',
    hreflang: {
      en: '/services/trips-downwinds',
      es: '/esp/services/trips-downwinds',
      fr: '/fr/services/trips-downwinds',
      default: '/services/trips-downwinds',
    },
  }),
  rentGear: Object.freeze({
    paths: ['/services/rent-gear', '/esp/services/rent-gear', '/fr/services/rent-gear'],
    title: 'Kitesurf & Wingfoil Gear Rental in Máncora | Mancora Kite Club',
    description:
      'Rent premium kitesurfing and wingfoiling equipment in Máncora, Peru. Top international brands, well-maintained kites, boards, foils, and safety gear.',
    keywords: [
      'kitesurf rental mancora',
      'rent kite gear peru',
      'wingfoil rental mancora',
      'rent kitesurf equipment peru',
      'gear rental mancora',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/services/rent-gear',
    hreflang: {
      en: '/services/rent-gear',
      es: '/esp/services/rent-gear',
      fr: '/fr/services/rent-gear',
      default: '/services/rent-gear',
    },
  }),
  surfSup: Object.freeze({
    paths: ['/services/surf-sup', '/esp/services/surf-sup', '/fr/services/surf-sup'],
    title: 'Surf & SUP Classes & Rentals in Máncora | Mancora Kite Club',
    description:
      'Experience surfing and Stand Up Paddleboarding (SUP) in Máncora, Peru. Private lessons for all ages, rentals, and daily tours to the best local spots.',
    keywords: [
      'surf school mancora',
      'sup lessons mancora',
      'stand up paddle peru',
      'rent surfboard mancora',
      'surf classes mancora',
    ],
    image: OG_IMAGES.classes,
    canonicalPath: '/services/surf-sup',
    hreflang: {
      en: '/services/surf-sup',
      es: '/esp/services/surf-sup',
      fr: '/fr/services/surf-sup',
      default: '/services/surf-sup',
    },
  }),
})

export const SEO_ROUTES = Object.values(PAGE_SEO).flatMap((meta) =>
  meta.paths.map((path) => ({ path, meta })),
)

export function getSeoMetaByPath(pathname = '/') {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return SEO_ROUTES.find((route) => route.path === normalized)?.meta || DEFAULT_SEO
}

export function toSiteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
