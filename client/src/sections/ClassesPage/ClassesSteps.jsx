import { motion } from "framer-motion"
import { PRIVATE_CLASSES, SEMI_PRIVATE_CLASSES } from "./classesData"
import { buildClassInquiryMessage, buildWhatsAppUrl } from "../../lib/whatsapp"

function ClassesSteps() {
  return (
    <section className="relative bg-[#0f1416] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          YOUR KITESURF JOURNEY
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          Step by step progression with certified instructors and premium gear.
        </p>
      </motion.div>

      {/* Timeline vertical */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent md:block" />

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {PRIVATE_CLASSES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen con hover swap */}
              <div className="group relative h-[260px] w-full overflow-hidden rounded-3xl shadow-xl sm:h-[320px] md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {item.hoverImage && (
                  <img
                    src={item.hoverImage}
                    alt={`${item.title} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>

              {/* Contenido centrado */}
              <div className="w-full text-center md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {item.duration}
                </span>
                <div className="my-4 text-2xl font-bold text-cyan-400">
                  {item.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 flex items-center justify-center gap-2"
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppUrl(buildClassInquiryMessage(item))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-bold text-[#0f1416] transition hover:bg-white sm:w-auto"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassesSteps
