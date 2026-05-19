import { heroImages, homeImages } from '../../config/images.js'
import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'

const desktopImgs = heroImages.community.desktop
const mobileImgs = heroImages.community.mobile
const founderImg = homeImages.storyFounder

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function CommunityGallery() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-background-dark py-20 md:py-28">
      {/* subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
        >
          {/* ---------- left: text ---------- */}
          <div className="space-y-6">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-primary"
            >
              {t('community.label') || 'The Vibe'}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              {t('community.heading') || 'More Than a Kite School'}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-secondary md:text-lg"
            >
              {t('community.description') ||
                'Máncora Kite Club is a crew. Every session, every downwinder, every sunset — we share the stoke with riders from all over the world. Whether you are just starting or chasing your first wave, you will find a home here.'}
            </motion.p>

            {/* stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-10 gap-y-4 pt-4"
            >
              {[
                { number: '10+', label: t('community.years') || 'Years' },
                { number: '500+', label: t('community.students') || 'Students' },
                { number: 'IKO', label: t('community.certified') || 'Certified' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-white">
                    {stat.number}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---------- right: image collage ---------- */}
          <motion.div
            variants={stagger}
            className="relative grid grid-cols-2 gap-3 md:gap-4"
          >
            {/* top row - 2 photos */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={founderImg}
                alt="Máncora Kite Club community"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-lg md:mt-8"
            >
              <img
                src={mobileImgs[0]}
                alt="Kitesurf community in Máncora"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* bottom row - 2 photos (hidden on mobile, visible on md+) */}
            <motion.div
              variants={fadeUp}
              className="relative -mt-4 hidden aspect-[4/5] overflow-hidden rounded-lg md:block"
            >
              <img
                src={desktopImgs[1]}
                alt="Kite Club lifestyle in Máncora"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative hidden aspect-[4/5] overflow-hidden rounded-lg md:block"
            >
              <img
                src={desktopImgs[2]}
                alt="Wingfoil and kitesurf community"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityGallery