import { motion } from "framer-motion"

function SurfSup() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F14] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl text-white/90">
          SURF & SUP
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
          No wind? No problem. Enjoy the pristine waves of Máncora with our Surfing and Stand Up Paddleboard sessions.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/5 p-8 hover:border-[#DEFF9A]/50 transition duration-500"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl">🌊</div>
          <h3 className="text-2xl font-bold mb-3 text-white">Surf Lessons</h3>
          <p className="text-white/70 mb-6 flex-1">
            Perfect for beginners and intermediates. Learn the basics of paddling, popping up, and riding the clean waves of northern Peru.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-[#DEFF9A]">$45 USD <span className="text-sm font-normal text-white/50">/ 2 hours</span></span>
            <span className="text-sm tracking-wider font-semibold text-white/80 group-hover:text-[#DEFF9A] transition">BOOK NOW →</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.15 }}
           className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/5 p-8 hover:border-[#DEFF9A]/50 transition duration-500"
        >
           <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl">🏄</div>
          <h3 className="text-2xl font-bold mb-3 text-white">SUP Tours</h3>
          <p className="text-white/70 mb-6 flex-1">
            Explore the coastline from a different perspective. Morning sessions with calm waters, marine life, and a relaxing workout.
          </p>
          <div className="flex items-center justify-between mt-auto">
             <span className="text-2xl font-bold text-[#DEFF9A]">$35 USD <span className="text-sm font-normal text-white/50">/ 1.5 hours</span></span>
            <span className="text-sm tracking-wider font-semibold text-white/80 group-hover:text-[#DEFF9A] transition">BOOK NOW →</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SurfSup
