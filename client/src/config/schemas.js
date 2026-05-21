import { SITE_URL } from './seoMeta.js'

/**
 * Builds a LocalBusiness / SportsActivityLocation schema
 * @param {string} lang - 'en', 'es', 'fr'
 */
export function getLocalBusinessSchema(lang = 'en') {
  const name = 'Mancora Kite Club'
  const telephone = '+51996557689'
  const email = 'kiteclub.mancora@gmail.com'
  const logo = `${SITE_URL}/logo.png`
  const image = `${SITE_URL}/og/home.webp`
  
  const descriptions = {
    en: 'Premium kitesurf and wingfoil school in Máncora, Peru. IKO certified instructors, kite lessons, surf trips, gear rental, and beachfront stays.',
    es: 'Escuela premium de kitesurf y wingfoil en Máncora, Perú. Instructores certificados IKO, clases de kite, surf trips, alquiler de equipo y hospedaje frente al mar.',
    fr: 'École premium de kitesurf et wingfoil à Máncora, Pérou. Instructeurs certifiés IKO, cours de kite, trips de surf, location de matériel et hébergement en bord de mer.',
  }

  const locality = {
    en: 'Máncora',
    es: 'Máncora',
    fr: 'Máncora',
  }

  const region = {
    en: 'Piura',
    es: 'Piura',
    fr: 'Piura',
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsActivityLocation',
        '@id': `${SITE_URL}/#sports-location`,
        name,
        image,
        description: descriptions[lang] || descriptions.en,
        telephone,
        email,
        url: SITE_URL,
        logo,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Los Talleres 145',
          addressLocality: locality[lang] || locality.en,
          addressRegion: region[lang] || region.en,
          addressCountry: 'PE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -4.1078,
          longitude: -81.0475,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '08:00',
          closes: '18:00',
        },
        sameAs: [
          'https://www.instagram.com/mancorakiteclub/',
          'https://www.facebook.com/mancorakiteclub/',
        ],
      },
      {
        '@type': 'TouristAttraction',
        '@id': `${SITE_URL}/#tourist-attraction`,
        name: {
          en: 'Mancora Kite Club Watersports Center',
          es: 'Centro de Deportes Acuáticos Mancora Kite Club',
          fr: 'Centre de Sports Nautiques Mancora Kite Club',
        }[lang] || 'Mancora Kite Club Watersports Center',
        description: descriptions[lang] || descriptions.en,
        location: {
          '@id': `${SITE_URL}/#sports-location`,
        },
        touristType: {
          en: 'Adventure Travelers, Kitesurfers, Surfers',
          es: 'Viajeros de aventura, kitesurfistas, surfistas',
          fr: 'Voyageurs d\'aventure, kitesurfeurs, surfeurs',
        }[lang] || 'Adventure Travelers, Kitesurfers, Surfers',
      }
    ]
  }
}

/**
 * Builds a Course schema for individual classes
 * @param {string} lang - 'en', 'es', 'fr'
 * @param {string} serviceKey - 'kitesurfLessons', 'wingfoilLessons', 'waveRiding', etc.
 */
export function getCourseSchema(lang = 'en', serviceKey) {
  const courses = {
    kitesurfLessons: {
      name: {
        en: 'IKO Certified Kitesurfing Lessons in Máncora',
        es: 'Clases de Kitesurf Certificadas IKO en Máncora',
        fr: 'Cours de Kitesurf Certifiés IKO à Máncora',
      },
      description: {
        en: 'Learn kitesurfing from certified IKO instructors in Máncora, Peru. High-quality equipment, radio helmets, and personalized coaching for all levels.',
        es: 'Aprende kitesurf con instructores certificados por la IKO en Máncora, Perú. Equipamiento de alta calidad, cascos con radio y coaching personalizado para todos los niveles.',
        fr: 'Apprenez le kitesurf avec des instructeurs certifiés IKO à Máncora, Pérou. Équipement de qualité, casques radio et coaching personnalisé pour tous les niveaux.',
      },
    },
    wingfoilLessons: {
      name: {
        en: 'Wingfoil Lessons in Máncora',
        es: 'Clases de Wingfoil en Máncora',
        fr: 'Cours de Wingfoil à Máncora',
      },
      description: {
        en: 'Master wingfoiling in Máncora, Peru. Structured lessons covering foil control, wing handling, and riding, led by experienced watersport coaches.',
        es: 'Domina el wingfoil en Máncora, Perú. Clases estructuradas que cubren control del foil, manejo de la vela y navegación, lideradas por entrenadores experimentados.',
        fr: 'Maîtrisez le wingfoil à Máncora, Pérou. Cours structurés couvrant le contrôle du foil, le maniement de l\'aile et la glisse, dispensés par des coachs expérimentés.',
      },
    },
    waveRiding: {
      name: {
        en: 'Wave Riding and Surf-Kite Coaching',
        es: 'Coaching de Wave Riding y Surf-Kite',
        fr: 'Coaching de Wave Riding et Surf-Kite',
      },
      description: {
        en: 'Take your wave riding to the next level on Máncora\'s point breaks. Specialized coaching in strapless riding, wave selection, and carving.',
        es: 'Lleva tu navegación en olas al siguiente nivel en los point breaks de Máncora. Coaching especializado en navegación strapless, selección de olas y giros.',
        fr: 'Passez au niveau supérieur en surf-kite sur les point breaks de Máncora. Coaching spécialisé en navigation strapless, sélection de vagues et virages.',
      },
    },
    surfSup: {
      name: {
        en: 'Surf & SUP Lessons & Tours',
        es: 'Clases y Tours de Surf & SUP',
        fr: 'Cours et Tours de Surf & SUP',
      },
      description: {
        en: 'Learn to surf or Stand-Up Paddleboard in the warm waters of Máncora. Private lessons for beginners and daily tours to secret spots.',
        es: 'Aprende a surfear o hacer Stand-Up Paddle en las cálidas aguas de Máncora. Clases privadas para principiantes y tours diarios a spots secretos.',
        fr: 'Apprenez le surf ou le Stand-Up Paddle dans les eaux chaudes de Máncora. Cours privés pour débutants et tours quotidiens vers des spots secrets.',
      },
    },
    rentGear: {
      name: {
        en: 'Kitesurf & Wingfoil Equipment Rental',
        es: 'Alquiler de Equipamiento de Kitesurf & Wingfoil',
        fr: 'Location de Matériel de Kitesurf & Wingfoil',
      },
      description: {
        en: 'Rent premium kitesurfing and wingfoiling equipment in Máncora, Peru. Premium international brands, well-maintained kites, boards, foils, and safety gear.',
        es: 'Alquila equipamiento premium de kitesurf y wingfoil en Máncora, Perú. Marcas internacionales de primer nivel, equipos mantenidos y seguridad garantizada.',
        fr: 'Louez du matériel de kitesurf et de wingfoil haut de gamme à Máncora, Pérou. Marques internationales de premier plan et équipement parfaitement entretenu.',
      },
    },
    tripsDownwinds: {
      name: {
        en: 'Kitesurf Trips & Downwinders',
        es: 'Viajes de Kitesurf & Downwinds',
        fr: 'Voyages de Kitesurf & Downwinds',
      },
      description: {
        en: 'Guided kitesurf trips and downwinders along the Northern Peruvian coast. Explore secret spots with local guides and safety support.',
        es: 'Viajes guiados de kitesurf y downwinds a lo largo de la costa norte de Perú. Explora spots secretos con guías locales y soporte de seguridad.',
        fr: 'Séjours kitesurf guidés et downwinds le long de la côte nord du Pérou. Explorez des spots secrets avec des guides locaux et une assistance sécurité.',
      },
    }
  }

  const courseData = courses[serviceKey]
  if (!courseData) return null

  const resolvedName = courseData.name[lang] || courseData.name.en
  const resolvedDesc = courseData.description[lang] || courseData.description.en

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: resolvedName,
    description: resolvedDesc,
    provider: {
      '@type': 'SportsActivityLocation',
      name: 'Mancora Kite Club',
      url: SITE_URL,
    },
  }
}

/**
 * Builds an FAQPage schema using translated questions
 * @param {string} lang - 'en', 'es', 'fr'
 */
export function getFAQPageSchema(lang = 'en') {
  const faqs = {
    en: [
      {
        q: 'Is Kitesurfing dangerous?',
        a: 'With the right equipment, certified instructors, and safety protocols, kitesurfing is a very safe sport. At Mancora Kite Club, we prioritize safety in every session with helmets, radio communication, and rescue boat support.',
      },
      {
        q: 'Do I need previous experience to learn?',
        a: 'No. Our courses are designed for absolute beginners as well as intermediate and advanced riders looking to progress.',
      },
      {
        q: 'Is Máncora a good place to learn kitesurfing?',
        a: 'Yes! Máncora is one of the best spots in South America due to its warm water, constant side-shore wind, and sandy beaches.',
      },
      {
        q: 'How long does it take to stand up and ride?',
        a: 'Most students can get their first rides up on the board within 9 to 12 hours of lessons, typically spread over 3 to 4 days.',
      },
      {
        q: 'Is kitesurf gear included in the lessons?',
        a: 'Yes, all necessary professional equipment (kites, boards, harnesses, helmets, vests, and wetsuits) is fully included in the price of our classes.',
      },
    ],
    es: [
      {
        q: '¿Es peligroso el kitesurf?',
        a: 'Con el equipo adecuado, instructores certificados y protocolos de seguridad, el kitesurf es un deporte muy seguro. En Mancora Kite Club, priorizamos la seguridad en cada sesión con cascos, comunicación por radio y asistencia de bote de rescate.',
      },
      {
        q: '¿Necesito experiencia previa para aprender?',
        a: 'No. Nuestros cursos están diseñados tanto para principiantes absolutos como para navegantes intermedios y avanzados que buscan progresar.',
      },
      {
        q: '¿Es Máncora un buen lugar para aprender kitesurf?',
        a: '¡Sí! Máncora es uno de los mejores spots de Sudamérica gracias a su agua cálida, viento constante de dirección side-shore y playas de arena.',
      },
      {
        q: '¿Cuánto tiempo se tarda en pararse y navegar?',
        a: 'La mayoría de los estudiantes logran sus primeras navegadas en la tabla dentro de las 9 a 12 horas de clase, típicamente distribuidas en 3 a 4 días.',
      },
      {
        q: '¿El equipo de kitesurf está incluido en las clases?',
        a: 'Sí, todo el equipamiento profesional necesario (kites, tablas, arneses, cascos, chalecos y trajes de neopreno) está completamente incluido en el precio de nuestras clases.',
      },
    ],
    fr: [
      {
        q: 'Le kitesurf est-il dangereux?',
        a: 'Avec l\'équipement approprié, des instructeurs certifiés et des protocoles de sécurité, le kitesurf est un sport très sûr. Chez Mancora Kite Club, nous privilégions la sécurité avec des casques, une communication radio et un bateau de sauvetage.',
      },
      {
        q: 'Ai-je besoin d\'une expérience préalable pour apprendre?',
        a: 'Non. Nos cours sont conçus pour les débutants complets ainsi que pour les riders intermédiaires et avancés souhaitant progresser.',
      },
      {
        q: 'Máncora est-il un bon endroit pour apprendre le kitesurf?',
        a: 'Oui ! Máncora est l\'un des meilleurs spots d\'Amérique du Sud en raison de son eau chaude, de son vent régulier side-shore et de ses plages de sable.',
      },
      {
        q: 'Combien de temps faut-il pour se lever et glisser?',
        a: 'La plupart des élèves parviennent à faire leurs premiers bords sur la planche en 9 à 12 heures de cours, généralement réparties sur 3 à 4 jours.',
      },
      {
        q: 'Le matériel de kitesurf est-il inclus dans les cours?',
        a: 'Oui, tout l\'équipement professionnel nécessaire (ailes, planches, harnais, casques, gilets et combinaisons) est entièrement inclus dans le tarif de nos cours.',
      },
    ],
  }

  const list = faqs[lang] || faqs.en
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/**
 * Builds a BlogPosting schema for articles
 * @param {string} lang - 'en', 'es', 'fr'
 * @param {object} post - The post object containing slug, title, description, excerpt, date, author, heroImage, etc.
 */
export function getBlogPostingSchema(lang = 'en', post) {
  if (!post) return null

  const urlPrefix = lang === 'en' ? '' : lang === 'es' ? '/esp' : `/${lang}`
  const postUrl = `${SITE_URL}${urlPrefix}/blog/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#blogposting`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.seoTitle || post.title,
    description: post.description || post.excerpt || post.metaDescription || '',
    image: post.heroImage 
      ? (post.heroImage.startsWith('http') ? post.heroImage : `${SITE_URL}${post.heroImage}`)
      : post.image 
        ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`)
        : `${SITE_URL}/og/blog.webp`,
    datePublished: post.date ? (isNaN(Date.parse(post.date)) ? new Date().toISOString().split('T')[0] : new Date(post.date).toISOString().split('T')[0]) : new Date().toISOString().split('T')[0],
    // Set a modification date similar to publish date
    dateModified: post.date ? (isNaN(Date.parse(post.date)) ? new Date().toISOString().split('T')[0] : new Date(post.date).toISOString().split('T')[0]) : new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: post.author || 'Mancora Kite Club Editorial',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'SportsActivityLocation',
      name: 'Mancora Kite Club',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}

/**
 * Builds a BreadcrumbList schema
 * @param {string} lang - 'en', 'es', 'fr'
 * @param {Array<{name: string, path: string}>} items - List of names and paths relative to the domain (e.g. [{ name: 'Home', path: '/' }])
 */
export function getBreadcrumbListSchema(lang = 'en', items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  }
}
