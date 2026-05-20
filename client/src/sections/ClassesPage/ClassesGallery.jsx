import { CLASSES_GALLERY } from "./classesData"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const MotionLink = motion.create(Link)

import { useEffect } from "react"

function ClassesGallery() {
  const galleryItems = CLASSES_GALLERY.map((image, index) => ({
    image,
    label: [
      "Ocean Energy",
      "Wingfoil Flow",
      "Kite Sessions",
      "Club Lifestyle",
      "Progression",
      "Training Days",
      "Wind Culture",
      "Raw Adventure",
      "Mancora Mood",
      "The Club",
      "Ride Together",
    ][index] || "Mancora Kite Club",
  }))

  useEffect(() => {
    console.log("ClassesGallery items:", galleryItems)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#071a19] py-16 text-white sm:py-20 lg:py-28">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,157,143,0.18),_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#5af8fb]"
        >
          Visual Manifesto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-7xl"
        >
          Mancora Kite Club
          <br />
          <span className="text-cyan-400">Raw Adventure Manifesto</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg"
        >
          Real stories, real adrenaline, and the tribe that rides with the wind.
        </motion.p>

        <MotionLink
          to="/build"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-400 transition hover:bg-cyan-400 hover:text-black sm:w-auto"
        >
          Join the Tribe
        </MotionLink>
      </div>

      {/* MOBILE / TABLET: se mantiene simple y limpio */}
      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 px-4 sm:mt-20 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:hidden">
        {galleryItems.map((item, index) => (
          <motion.article
            key={`${item.label}-${index}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group relative h-[280px] overflow-hidden rounded-3xl shadow-xl sm:h-[320px]"
          >
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-xl font-bold text-white">
                {item.label}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>

      {/* DESKTOP: galería editorial profesional */}
      <div className="relative z-10 mx-auto mt-24 hidden max-w-7xl px-8 lg:block">
        <div className="grid auto-rows-[165px] grid-cols-12 gap-5">
          {galleryItems.map((item, index) => {
            const layoutClasses = [
              "col-span-5 row-span-3",
              "col-span-3 row-span-2",
              "col-span-4 row-span-2",
              "col-span-3 row-span-3",
              "col-span-4 row-span-2",
              "col-span-5 row-span-2",
              "col-span-4 row-span-3",
              "col-span-3 row-span-2",
              "col-span-5 row-span-2",
              "col-span-4 row-span-2",
              "col-span-3 row-span-2",
              "col-span-5 row-span-2",
            ]

            return (
              <motion.article
                key={`${item.label}-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`
                  group relative overflow-hidden rounded-[2rem]
                  border border-white/10 bg-white/5
                  shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  ${layoutClasses[index % layoutClasses.length]}
                `}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-cyan-400/10" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-90 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                    {item.label}
                  </h3>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ClassesGallery
