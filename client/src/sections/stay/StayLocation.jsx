import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

function StayLocation() {
  const { t } = useI18n()

  return (
    <section className="relative bg-slate-50 px-6 py-20 sm:px-10 lg:px-16 dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-white/10"
        >
          <div style={{ height: "400px" }} className="w-full">
            <iframe
              title="Bali Lodge - Máncora Kite Club"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.8!2d-81.0531!3d-4.1021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNicwNy42IlMgODHCsDAzJzExLjIiVw!5e0!3m2!1sen!2spe!4v1778131649396"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                filter: "invert(0.95) hue-rotate(180deg) saturate(0.8)",
              }}
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2A9D8F]">
            {t('stay.locationLabel')}
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
            {t('stay.locationTitle')}
          </h2>

          <p className="mt-6 flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-200">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-lg text-[#2A9D8F]" />
            {t('stay.locationAddress')}
          </p>

          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
            {t('stay.locationDesc')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default StayLocation
