import { motion } from "framer-motion"

function TripsDownwinds() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F14] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background Image / Overlay placeholder */}
      <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: "url('/images/downwind-hero.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl text-[#DEFF9A]">
          TRIPS & DOWNWINDS
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          Explore the epic Peruvian coastline with our guided downwind trips and 4x4 safaris to secret spots.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        {[
          { title: "Day Trips / Spot Trips", desc: "Explora los mejores wave spots y realiza surf safaris a lo largo del norte de Perú.", price: "$50 - $60 USD / día" },
          { title: "Guided Downwinds", desc: "Emocionantes rutas de downwind con apoyo logístico completo.", price: "$50 - $60 USD / día" }
        ].map((trip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
              <p className="text-white/70">{trip.desc}</p>
            </div>
            <div className="flex flex-col items-end gap-3 min-w-[160px]">
              <span className="text-xl font-bold text-[#DEFF9A]">{trip.price}</span>
              <button className="text-sm font-bold tracking-wider text-white border-b border-[#DEFF9A] pb-1 hover:text-[#DEFF9A] transition">
                LEARN MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TripsDownwinds
