import { motion } from "framer-motion"

function WaveRiding() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0F14] to-[#0f2e2c] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(222,255,154,0.15),_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          WAVE RIDING COACHING
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Advanced coaching and video analysis to master the waves.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
           initial={{ opacity: 0, y: 25 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#DEFF9A]">Advanced Wave Riding Coaching</h3>
          <p className="text-white/80 mb-6 flex-1 text-lg">
            Coaching avanzado en olas. Incluye transporte a los mejores spots del norte de Perú.
          </p>
          <div className="text-4xl font-bold mb-6">$80 USD <span className="text-lg font-normal text-white/50">/ sesión</span></div>
          <button className="inline-flex min-h-12 w-full max-w-sm mx-auto items-center justify-center rounded-full bg-[#DEFF9A] px-6 py-3 font-bold text-[#0A0F14] transition hover:bg-white">
            BOOK COACHING
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WaveRiding
