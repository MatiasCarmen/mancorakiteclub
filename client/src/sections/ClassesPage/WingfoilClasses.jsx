import { componentImages } from '../../config/images.js'
import { motion } from "framer-motion"
import { buildClassInquiryMessage, buildWhatsAppUrl } from "../../lib/whatsapp"

const { wingIntro, wingFundamental, wingAdvanced, wingMaster } = componentImages["sections/ClassesPage/WingfoilClasses.jsx"]
const WINGFOIL_PRIVATE_CLASSES = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "1 day | 2 hours/day",
    price: "$120 USD / person",
    image: wingIntro,
    hoverImage: wingFundamental,
    features: [
      "Discover the basics of Wingfoil",
      "Theory + land balance exercises",
      "Water session for basic maneuvers",
      "Complete equipment provided",
      "Personalized experience"
    ]
  },
  {
    id: "beginner",
    title: "Beginner",
    duration: "3 days | 2 hours/day",
    price: "$350 USD / person",
    image: wingFundamental,
    hoverImage: wingAdvanced,
    features: [
      "Solid foundation & safety techniques",
      "Wing dominance exercises",
      "Foil balance training",
      "Specific water maneuvers",
      "Complete equipment provided"
    ]
  },
  {
    id: "intensive",
    title: "Intensive",
    duration: "3 days | 3 hours/day",
    price: "$500 USD / person",
    image: wingAdvanced,
    hoverImage: wingMaster,
    features: [
      "Perfect advanced maneuvers",
      "Technical + theoretical sessions",
      "Control in varied conditions",
      "Optional video analysis",
      "Premium equipment"
    ]
  },
  {
    id: "full-progression",
    title: "Full Progression",
    duration: "5 days | Flexible schedule",
    price: "$600 USD / person",
    image: wingMaster,
    hoverImage: wingIntro,
    featured: true,
    features: [
      "From fundamentals to advanced",
      "In-depth technical coaching",
      "Advanced Wingfoil drills",
      "Video analysis sessions",
      "Certificate of completion"
    ]
  }
]

const WINGFOIL_SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    title: "Discovery",
    duration: "1 day | 2 hours/day",
    price: "$90 USD / person",
    image: wingIntro,
    hoverImage: wingFundamental,
    features: [
      "Discover the basics of Wingfoil",
      "1 instructor shared between 2 students",
      "Water session for basic maneuvers",
      "Complete equipment provided"
    ]
  },
  {
    id: "beginner-semi",
    title: "Beginner",
    duration: "3 days | 2 hours/day",
    price: "$250 USD / person",
    image: wingFundamental,
    hoverImage: wingAdvanced,
    features: [
      "Solid foundation & safety techniques",
      "1 instructor shared between 2 students",
      "Foil balance training",
      "Complete equipment provided"
    ]
  },
  {
    id: "intensive-semi",
    title: "Intensive",
    duration: "3 days | 3 hours/day",
    price: "$350 USD / person",
    image: wingAdvanced,
    hoverImage: wingMaster,
    features: [
      "Perfect advanced maneuvers",
      "1 instructor shared between 2 students",
      "Control in varied conditions",
      "Premium equipment"
    ]
  },
  {
    id: "full-progression-semi",
    title: "Full Progression",
    duration: "5 days | Flexible schedule",
    price: "$450 USD / person",
    image: wingMaster,
    hoverImage: wingIntro,
    featured: true,
    features: [
      "From fundamentals to advanced",
      "1 instructor shared between 2 students",
      "Advanced Wingfoil drills",
      "Video analysis sessions"
    ]
  }
]

function WingfoilClassCard({ item, index }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white text-[#0E201F] shadow-xl transition hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img
          src={item.hoverImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <span className="mt-1 text-xs uppercase tracking-wider opacity-80">{item.duration}</span>
          <div className="mt-3 text-lg font-bold text-[#8ac43f]">{item.price}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 text-center sm:p-6">
        <ul className="space-y-2 mb-6 text-sm">
          {item.features.map((feature, i) => (
            <li key={i} className="flex justify-center gap-2 text-black/70">
              <span className="text-[#8ac43f]">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={buildWhatsAppUrl(buildClassInquiryMessage(item))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#829988] px-6 py-3 font-bold text-[#0E201F] transition hover:bg-[#0E201F] hover:text-white"
        >
          BOOK NOW
        </a>
      </div>
      {item.featured && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0px rgba(138,196,63,0.0)",
              "0 0 25px rgba(138,196,63,0.8)",
              "0 0 0px rgba(138,196,63,0.0)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 rounded-full bg-[#8ac43f] px-4 py-1 text-xs font-bold text-[#071a19]"
        >
          MOST POPULAR
        </motion.div>
      )}
    </motion.div>
  )
}

function WingfoilClasses() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(130,153,152,0.25),_transparent_65%)]" />

      {/* Private Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          PRIVATE WINGFOIL CLASSES
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Private sessions with expert instructors and premium equipment.
        </p>
      </motion.div>

      {/* Private Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {WINGFOIL_PRIVATE_CLASSES.map((item, index) => (
          <WingfoilClassCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Semi-Private Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto mt-24 mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          SEMI-PRIVATE WINGFOIL CLASSES
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Share the experience — 1 instructor shared between 2 students. Prices per person.
        </p>
      </motion.div>

      {/* Semi-Private Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {WINGFOIL_SEMI_PRIVATE_CLASSES.map((item, index) => (
          <WingfoilClassCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default WingfoilClasses
