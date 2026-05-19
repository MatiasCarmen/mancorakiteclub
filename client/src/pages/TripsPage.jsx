import { componentImages } from '../config/images.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWind } from 'react-icons/fa'
import SEO from '../components/SEO.jsx'
import FullscreenHero from '../components/ui/FullscreenHero.jsx'
import { trips } from '../content/trips.js'
import { createPresetHeroSlides } from '../lib/fullscreenHeroSlides.js'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'


const { heroImg, firstFlyImg, olasVientoImg, soloSurfImg, rideCoastImg } = componentImages["pages/TripsPage.jsx"]
const tripImages = [
  firstFlyImg,
  olasVientoImg,
  soloSurfImg,
  rideCoastImg,
]

// Trip names are product/brand names — kept as-is across all languages
const tripLabels = [
  'First Fly',
  'Olas y Viento',
  'Solo Surf',
  'Ride the Coast',
]

function TripsPage() {
  const { t, currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.tripsTitle"
        descKey="seo.tripsDesc"
        titleFallback="Kitesurf Trips in Máncora, Peru | Core Packages"
        descFallback="Discover kitesurfing, wingfoil, and surf trips in northern Peru. Full-day, 3-day, and 7-day packages with accommodation, coaching, and gear. Book your trip now."
        canonicalPath={localizePath('/trips', currentLang)}
        hreflang={{ en: '/trips', es: '/esp/trips', fr: '/fr/trips', default: '/trips' }}
      />

      <main className="overflow-hidden bg-[#031015] text-white">
        <FullscreenHero
          as="section"
          eyebrow={t('trips.heroEyebrow')}
          title={t('trips.heroTitle')}
          subtitle={t('trips.heroSubtitle')}
          slides={createPresetHeroSlides('kite', {
            desktop: [heroImg, firstFlyImg, olasVientoImg, soloSurfImg, rideCoastImg],
            alt: 'Mancora Kite Club trips',
            imageClassName: 'object-[52%_center] md:object-center',
          })}
        />

        {/* TRIP LIST */}
        <section id="trip-list" className="relative">
          {trips.map((trip, index) => {
            const image = tripImages[index % tripImages.length]
            const label = tripLabels[index] || trip.title
            const isEven = index % 2 === 0

            return (
              <Link
                key={trip.slug}
                to={localizePath(trip.path, currentLang)}
                className="group block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative flex min-h-[68vh] items-center overflow-hidden border-t border-white/10 px-5 py-20 sm:min-h-[76vh] sm:px-8 lg:min-h-screen lg:px-16"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={image}
                      alt={trip.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/25 to-transparent" />
                    <div
                      className={`absolute inset-0 ${
                        isEven
                          ? 'bg-gradient-to-r from-[#031015]/75 via-[#031015]/20 to-transparent'
                          : 'bg-gradient-to-l from-[#031015]/75 via-[#031015]/20 to-transparent'
                      }`}
                    />
                  </div>

                  {/* Number */}
                  <div
                    className={`absolute top-8 z-10 text-6xl font-black leading-none text-white/15 transition duration-500 group-hover:text-[#5af8fb]/25 sm:text-8xl lg:text-9xl ${
                      isEven ? 'right-6 lg:right-16' : 'left-6 lg:left-16'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div
                    className={`relative z-10 mx-auto flex w-full max-w-7xl ${
                      isEven ? 'justify-start text-left' : 'justify-end text-right'
                    }`}
                  >
                    <div className="max-w-4xl">
                      <p
                        className={`mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.35em] text-[#5af8fb] ${
                          isEven ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <FaWind />
                        {trip.subtitle || 'Trip Experience'}
                      </p>

                      <h2
                        className="
                          font-display text-5xl font-black uppercase leading-[0.82] tracking-tighter
                          text-transparent transition duration-500
                          [-webkit-text-stroke:1.5px_rgba(255,255,255,0.78)]
                          group-hover:text-white group-hover:[-webkit-text-stroke:1.5px_rgba(90,248,251,0.35)]
                          sm:text-7xl md:text-8xl lg:text-[8.5rem]
                        "
                      >
                        {label}
                      </h2>

                      <p
                        className={`mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base ${
                          isEven ? 'mr-auto' : 'ml-auto'
                        }`}
                      >
                        {trip.summary}
                      </p>

                      <div
                        className={`mt-8 flex ${
                          isEven ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <span className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5af8fb] px-7 text-sm font-black uppercase tracking-[0.2em] text-black transition group-hover:bg-white">
                          {t('trips.viewDetails')}
                          <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#5af8fb]/50 to-transparent" />
                </motion.article>
              </Link>
            )
          })}
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,248,251,0.18),_transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#5af8fb]">
              {t('trips.ctaEyebrow')}
            </p>

            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              {t('trips.ctaTitle')}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {t('trips.ctaDesc')}
            </p>

            <Link
              to={localizePath('/build', currentLang)}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#5af8fb] px-8 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-white sm:w-auto"
            >
              {t('trips.ctaButton')}
              <FaArrowRight />
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default TripsPage
