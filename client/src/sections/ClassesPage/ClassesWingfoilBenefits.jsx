import { motion } from "framer-motion"
import { PRIVATE_CLASSES, SEMI_PRIVATE_CLASSES } from "./classesData"
import { buildClassInquiryMessage, buildWhatsAppUrl } from "../../lib/whatsapp"

function ClassesWingfoilBenefits() {
  return (
    <section className="relative bg-gradient-to-b from-[#829988]/25 to-[#0E201F] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          KITE CLASSES
        </h2>
        <p className="mt-6 text-sm font-bold leading-relaxed text-white sm:text-base md:text-lg">
          Enjoy 100% personalized experience with IKO certified instructors and premium equipment.
        </p>
      </motion.div>

      {/* GRID → 4 HORIZONTALES */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
        {PRIVATE_CLASSES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0E201F]"
          >
            {/* IMAGE HOVER CHANGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={`${item.title} hover`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-4 text-center sm:p-6">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <span className="text-xs uppercase tracking-wider text-white/50">
                {item.duration}
              </span>
              <div className="my-6 text-2xl font-bold text-[#829988]">
                {item.price}
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2 text-sm text-white/80"
                  >
                    <span className="text-[#829988]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppUrl(buildClassInquiryMessage(item))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#829988] px-6 py-3 font-bold text-[#0E201F] transition hover:bg-white hover:text-[#0E201F] sm:w-auto sm:self-center"
              >
                BOOK NOW
              </a>
            </div>

            {/* ⭐ FEATURED CHIP ANIMATION */}
            {item.featured && (
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 0px #829988",
                    "0 0 25px #829988",
                    "0 0 0px #829988"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-5 right-5 rounded-full bg-[#829988] px-4 py-1 text-xs font-bold text-[#0E201F]"
              >
                MOST POPULAR
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClassesWingfoilBenefits
