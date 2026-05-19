import { motion } from "framer-motion"
import { PRIVATE_CLASSES, SEMI_PRIVATE_CLASSES } from "./classesData"
import { buildClassInquiryMessage, buildWhatsAppUrl } from "../../lib/whatsapp"

function ClassCard({ item, index }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0c2523]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {item.hoverImage && (
          <img
            src={item.hoverImage}
            alt={`${item.title} hover`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 text-center sm:p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <span className="text-xs uppercase tracking-wider text-white/50">{item.duration}</span>
        <div className="my-6 text-2xl font-bold text-[#8ac43f]">{item.price}</div>
        <ul className="mb-8 space-y-3 flex-1">
          {item.features.map((feature, i) => (
            <li key={i} className="text-sm text-white/80 flex items-center justify-center gap-2">
              <span className="text-[#8ac43f]">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={buildWhatsAppUrl(buildClassInquiryMessage(item))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#8ac43f] px-6 py-3 font-bold text-[#071a19] transition hover:bg-white"
        >
          BOOK NOW
        </a>
      </div>
      {item.featured && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0px #8ac43f",
              "0 0 25px #8ac43f",
              "0 0 0px #8ac43f"
            ]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-5 right-5 rounded-full bg-[#8ac43f] px-4 py-1 text-xs font-bold text-[#071a19]"
        >
          MOST POPULAR
        </motion.div>
      )}
    </motion.div>
  )
}

function ClassesPricing() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Private Classes Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          PRIVATE KITE CLASSES
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Enjoy 100% personalized experience with IKO certified instructors and premium equipment.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {PRIVATE_CLASSES.map((item, index) => (
          <ClassCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Semi-Private Classes Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-24 mb-16 max-w-3xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          SEMI-PRIVATE KITE CLASSES
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Share the experience — 1 instructor shared between 2 students. Prices per person.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {SEMI_PRIVATE_CLASSES.map((item, index) => (
          <ClassCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ClassesPricing
