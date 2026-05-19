import { componentImages } from '../../config/images.js'
const { heroKite, introKite, introClassImg, fundamentalClassImg, introClassImgHover, advanceClassImg, masterClassImg, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12 } = componentImages["sections/ClassesPage/classesData.js"]
// HERO
// INTRO
// PRICING IMAGES

// GALLERY FINAL (prototipo con repetidas)

/* ===========================
  HERO SECTION
=========================== */
export const CLASSES_HERO = {
  title: "KITESURF AND WINGFOIL IN THE CLUB",
  subtitle: "Private and small-group sessions without accommodation.",
  image: heroKite
}

/* ===========================
  INTRO SECTION
=========================== */
export const CLASSES_INTRO = {
  title: "Learn Kitesurf in The Club",
  text: "The first time someone was seen practicing wingfoil was in 2019, when Robby Naish appeared in Hawaii on a board with a foil and handling a wing. Those images caused so much emotion that in a few months we began to see videos and photos on all social networks of different types of wings and people practicing this strange sport. Well, it hasn't been long before we can see the rise of this sport and see countless sails all over the beaches and lakes. Without a doubt a sport that will leave many fans.",
  image: introKite
}

/* ===========================
   PRIVATE CLASSES (PRICING)
=========================== */
export const PRIVATE_CLASSES = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "1 day | 2 hours/day",
    price: "$120 USD / person",
    image: introClassImg,
    hoverImage: introClassImgHover,
    features: [
      "Ideal for first experience",
      "Personalized instruction",
      "All premium equipment included",
      "Support via walkie-talkie"
    ]
  },
  {
    id: "beginner",
    title: "Beginner",
    duration: "3 days | 2 hours/day",
    price: "$350 USD / person",
    image: fundamentalClassImg,
    hoverImage: advanceClassImg,
    features: [
      "Designed by old instructors",
      "Personalized progression",
      "Premium equipment included",
      "Professional photo during class"
    ]
  },
  {
    id: "intensive",
    title: "Intensive",
    duration: "3 days | 3 hours/day",
    price: "$500 USD / person",
    image: advanceClassImg,
    hoverImage: masterClassImg,
    features: [
      "Focused on advanced technique",
      "More practice time",
      "Video recording & analysis",
      "Optional drone shots"
    ]
  },
  {
    id: "full-progression",
    title: "Full Progression",
    duration: "5 days | Flexible schedule",
    price: "$600 USD / person",
    image: masterClassImg,
    hoverImage: introClassImg,
    featured: true,
    features: [
      "Complete program",
      "Detailed technique analysis",
      "Performance tracking",
      "Final evaluation session"
    ]
  }
]

/* ===========================
   SEMI-PRIVATE CLASSES (PRICING)
=========================== */
export const SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    title: "Discovery",
    duration: "1 day | 2 hours/day",
    price: "$90 USD / person",
    image: introClassImg,
    hoverImage: introClassImgHover,
    features: [
      "Ideal for first experience",
      "1 instructor shared between 2 students",
      "All premium equipment included",
      "Support via walkie-talkie"
    ]
  },
  {
    id: "beginner-semi",
    title: "Beginner",
    duration: "3 days | 2 hours/day",
    price: "$250 USD / person",
    image: fundamentalClassImg,
    hoverImage: advanceClassImg,
    features: [
      "Designed by old instructors",
      "1 instructor shared between 2 students",
      "Premium equipment included",
      "Professional photo during class"
    ]
  },
  {
    id: "intensive-semi",
    title: "Intensive",
    duration: "3 days | 3 hours/day",
    price: "$350 USD / person",
    image: advanceClassImg,
    hoverImage: masterClassImg,
    features: [
      "Focused on advanced technique",
      "1 instructor shared between 2 students",
      "Video recording & analysis",
      "Optional drone shots"
    ]
  },
  {
    id: "full-progression-semi",
    title: "Full Progression",
    duration: "5 days | Flexible schedule",
    price: "$450 USD / person",
    image: masterClassImg,
    hoverImage: introClassImg,
    featured: true,
    features: [
      "Complete program",
      "1 instructor shared between 2 students",
      "Performance tracking",
      "Final evaluation session"
    ]
  }
]

/* ===========================
   Benefits Section
=========================== */
export const CLASSES_BENEFITS = [
  "Guaranteed Quality – Certified instructors with extensive experience.",
  "Vanguard Team – Latest technologies in wings and boards.",
  "Priority Security – Small groups and constant support.",
  "Unforgettable memories – Professional visual material.",
  "Total Flexibility – Programs adapted to your needs."
]

/* ===========================
   FINAL GALLERY SECTION
=========================== */
export const CLASSES_GALLERY = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12
]
