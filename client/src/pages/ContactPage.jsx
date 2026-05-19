import { componentImages } from '../config/images.js'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FullscreenHero from '../components/ui/FullscreenHero.jsx'
import { createPresetHeroSlides } from '../lib/fullscreenHeroSlides.js'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'
import SEO from '../components/SEO.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'

const { formDecorImg } = componentImages["pages/ContactPage.jsx"]

const contacts = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/51996557689',
    display: '+51 996 557 689',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.856L.057 23.571a.75.75 0 0 0 .943.905l5.915-1.55A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.96-1.356l-.355-.213-3.668.962.978-3.567-.232-.368A9.75 9.75 0 1 1 12 21.75z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:kiteclub.mancora@gmail.com',
    display: 'kiteclub.mancora@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kiteclubmancora?igsh=Zmt6MjQzMXpvOGV5',
    display: '@kiteclubmancora',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1FswjAYj7W/?mibextid=wwXIfr',
    display: 'Mancora Kite Club',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.03 4.388 11.02 10.125 11.927v-8.43H7.078v-3.497h3.047V9.413c0-3.02 1.792-4.688 4.533-4.688 1.313 0 2.686.236 2.686.236v2.963h-1.513c-1.491 0-1.956.928-1.956 1.879v2.254h3.328l-.532 3.497h-2.796v8.43C19.612 23.093 24 18.103 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@kiteclubmancora?_r=1&_t=ZS-965ufttiqJt',
    display: '@kiteclubmancora',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@mancorakiteclub4328?si=FSNBl2Cg95-w2Rvb',
    display: '@mancorakiteclub4328',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

function ContactPage() {
  const { t, currentLang } = useI18n()
  const [formName, setFormName] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleSendWhatsApp = (e) => {
    e.preventDefault()
    if (!formName.trim() || !formMessage.trim()) return
    const texto = `Hola Kite Club!, te habla ${formName.trim()}, ${formMessage.trim()}`
    window.open(buildWhatsAppUrl(texto), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <SEO
        titleKey="seo.contactTitle"
        descKey="seo.contactDesc"
        titleFallback="Contact | Mancora Kite Club"
        descFallback="Contact Máncora Kite Club for kitesurfing, wingfoil, and surf trips, classes, accommodation, and rentals. Get quick answers via WhatsApp. Reach out now."
        canonicalPath={localizePath('/contact', currentLang)}
        hreflang={{ en: '/contact', es: '/esp/contact', fr: '/fr/contact', default: '/contact' }}
      />

      <div className="overflow-hidden bg-white dark:bg-surface-dark">
        {/* HERO */}
        <FullscreenHero
          as="section"
          eyebrow={t('contact.heroEyebrow')}
          title={t('contact.heroTitle')}
          subtitle={t('contact.heroSubtitle')}
          slides={createPresetHeroSlides('community', {
            alt: 'Contact Mancora Kite Club',
            imageClassName: 'object-[52%_center] md:object-center',
          })}
        />

        {/* CONTACT INFO CARD */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-surface-dark sm:p-10 lg:p-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                {t('contact.getInTouch')}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
                Kite Club Máncora
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {t('contact.reachFast')}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {contacts.map(({ label, href, display, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-primary/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                        {display}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEND US A MESSAGE */}
        <section className="px-6 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-surface-dark lg:grid-cols-[1fr_0.8fr]"
            >
              {/* FORM */}
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  {t('contact.sendMessage')}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  {t('contact.loveToHear')}
                </h3>

                <form onSubmit={handleSendWhatsApp} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {t('contact.yourName')}
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {t('contact.yourMessage')}
                    </label>
                    <textarea
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={t('contact.messagePlaceholder')}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!formName.trim() || !formMessage.trim()}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.856L.057 23.571a.75.75 0 0 0 .943.905l5.915-1.55A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.96-1.356l-.355-.213-3.668.962.978-3.567-.232-.368A9.75 9.75 0 1 1 12 21.75z"/>
                    </svg>
                    {t('contact.sendWhatsApp')}
                  </button>
                </form>
              </div>

              {/* DECORATIVE IMAGE */}
              <div className="relative hidden lg:block">
                <img
                  src={formDecorImg}
                  alt="Mancora Kite Club community"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent dark:from-surface-dark/20" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage