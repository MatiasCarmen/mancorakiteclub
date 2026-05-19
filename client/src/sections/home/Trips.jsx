import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { resolveImage } from '../../config/images.js'

const TRIP_PREVIEW_IMAGE = resolveImage("fotos trip/DSC08247.webp")

function Trips() {
  return (
    <section id="trips" className="relative bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.figure
            initial={{ opacity: 0, x: -24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="group relative min-h-[260px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.04] sm:min-h-[360px] lg:min-h-[430px]"
          >
            <img
              src={TRIP_PREVIEW_IMAGE}
              alt="Kitesurf rider in Mancora"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1113]/62 via-[#0A1113]/10 to-transparent" />
          </motion.figure>

          <div>
            <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                  Services
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                  Choose your ocean experience.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Choose your lessons, accommodation, equipment, and extras. Find the service mix that fits your wind, level and time.
              </p>
            </div>

            <div className="mt-10 flex justify-center sm:mt-12 lg:justify-start">
              <Link
                to="/classes"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white sm:w-auto"
              >
                Explore Our Services
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trips
