import { componentImages } from '../config/images.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SEO from '../components/SEO.jsx'
import FullscreenHero from '../components/ui/FullscreenHero.jsx'
import { createPresetHeroSlides } from '../lib/fullscreenHeroSlides.js'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'


const { heroImg, firstFlyImg, olasVientoImg, soloSurfImg, rideCoastImg } = componentImages["pages/TripsPage.jsx"]

function TripsPage() {
  const { t, currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.tripsTitle"
        descKey="seo.tripsDesc"
        titleFallback="Build Your Trip in Máncora, Peru | Máncora Kite Club"
        descFallback="Create your custom kitesurfing, wingfoil, or surf trip in Máncora, Peru. Choose your classes, accommodation, and extras. Build your perfect trip now."
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

        {/* CTA to Build Your Trip */}
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
