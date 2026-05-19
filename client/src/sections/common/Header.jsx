import { brandImages } from '../../config/images.js'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaChevronDown, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { localizePath } from '../../lib/routes.js'
import { useUIStore } from '../../store/useUIStore.js'
import { trips } from '../../content/trips.js'

const clubLogo = brandImages.logoComplete

const BASE_NAV_ITEMS = [
  { to: '/home', label: 'nav.home' },
  { to: '/trips', label: 'nav.trips' },
  { to: '/classes', label: 'nav.classes' },
  { to: '/stay', label: 'nav.stay' },
  { to: '/build', label: 'nav.build' },
  { to: '/reviews', label: 'nav.reviews' },
  { to: '/contact', label: 'nav.contact' },
]

const MotionLink = motion.create(Link)

const getTripPath = (slug) =>
  trips.find((trip) => trip.slug === slug)?.path || '/trips'

function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore()

  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isTripsOpen, setIsTripsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePath, setActivePath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  const dropdownRef = useRef(null)
  const headerRef = useRef(null)

  const { changeLanguage, currentLang, t } = useI18n()
  const navigate = useNavigate()

  const NAV_ITEMS = BASE_NAV_ITEMS.map((item) => ({
    ...item,
    to: localizePath(item.to, currentLang),
  }))

  const TRIP_SELECT_OPTIONS = [
    { labelKey: 'trips.dropdown.allTrips', path: '/trips' },
    { labelKey: 'trips.dropdown.kitesurfTrips', path: getTripPath('first-fly') },
    { labelKey: 'trips.dropdown.wingfoilTrips', path: getTripPath('ride-the-coast') },
    { labelKey: 'trips.dropdown.surfSup', path: getTripPath('solo-surf') },
  ]

  const homePath = localizePath('/home', currentLang)
  const whatsappUrl = buildWhatsAppUrl(defaultInquiryMessage('Header'))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll al abrir el menú
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsLangOpen(false)
        setIsTripsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => window.removeEventListener('keydown', handleKey)
  }, [setIsMobileMenuOpen])

  // Cerrar dropdown idioma al hacer click fuera
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  const languages = [
    { code: 'es', labelKey: 'header.spanish' },
    { code: 'en', labelKey: 'header.english' },
    { code: 'fr', labelKey: 'header.french' },
  ]

  const otherLanguages = languages.filter((l) => l.code !== currentLang)

  const currentLanguage = languages.find((l) => l.code === currentLang)

  const currentLanguageLabel = currentLanguage
    ? t(currentLanguage.labelKey)
    : t('header.language')

  const navTextClass = scrolled
    ? 'text-slate-700 dark:text-white/80'
    : 'text-white/80'

  const controlClass = scrolled
    ? 'border-slate-200 bg-white/90 text-slate-900 shadow-sm hover:border-primary hover:bg-primary/10 dark:border-white/10 dark:bg-background-dark/80 dark:text-white'
    : 'border-white/20 bg-white/5 text-white hover:border-primary hover:bg-primary/10'

  const handleNavClick = (path) => {
    setActivePath(path)
    setIsMobileMenuOpen(false)
    setIsTripsOpen(false)
  }

  const handleTripNavigate = (path) => {
    if (!path) return

    const localizedPath = localizePath(path, currentLang || 'en')

    setActivePath(localizedPath)
    setIsMobileMenuOpen(false)
    setIsTripsOpen(false)
    navigate(localizedPath)
  }

  // Animaciones Framer Motion
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? 'border-gray-200 bg-background-light/95 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/95'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <MotionLink
            to={homePath}
            className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsTripsOpen(false)
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={clubLogo}
              alt="THE CLUB logo"
              className="h-8 w-auto shrink-0 sm:h-9 lg:h-10"
            />
          </MotionLink>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {NAV_ITEMS.filter((item) => item.label !== 'nav.home').map((item) =>
              item.label === 'nav.trips' ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setIsTripsOpen(true)}
                  onMouseLeave={() => setIsTripsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsTripsOpen((prev) => !prev)}
                    aria-expanded={isTripsOpen}
                    aria-label="Choose a trip"
                    className={`group relative flex h-10 items-center gap-3 overflow-hidden rounded-full border px-4 text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur-xl transition-all duration-300 ${
                      scrolled
                        ? 'border-slate-200/80 bg-white/85 text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:border-[#38E0C8]/70 hover:bg-white dark:border-[#F4F2EA]/15 dark:bg-[#0A1113]/75 dark:text-[#F4F2EA]'
                        : 'border-[#F4F2EA]/25 bg-[#0A1113]/20 text-[#F4F2EA] shadow-[0_14px_34px_rgba(0,0,0,0.16)] hover:border-[#38E0C8]/70 hover:bg-[#0A1113]/35'
                    }`}
                  >
                    <span className="relative z-10">{t(item.label)}</span>

                    <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#38E0C8]/30 bg-[#38E0C8]/10">
                      <FaChevronDown
                        className={`text-[10px] text-[#38E0C8] transition-transform duration-300 ${
                          isTripsOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#38E0C8]/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>

                  <AnimatePresence>
                    {isTripsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="absolute left-1/2 top-[calc(100%+14px)] z-[80] w-[310px] -translate-x-1/2"
                      >
                        <div className="overflow-hidden rounded-3xl border border-[#F4F2EA]/15 bg-[#071012]/95 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
                          <div className="px-4 pb-3 pt-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#38E0C8]">
                              {t('trips.dropdown.chooseExperience')}
                            </p>
                            <p className="mt-1 text-xs text-[#F4F2EA]/55">
                              {t('trips.dropdown.selectRoute')}
                            </p>
                          </div>

                          <div className="h-px bg-gradient-to-r from-transparent via-[#F4F2EA]/15 to-transparent" />

                          <div className="pt-2">
                            {TRIP_SELECT_OPTIONS.map((option, index) => (
                              <button
                                key={option.path}
                                type="button"
                                onClick={() => handleTripNavigate(option.path)}
                                className="group/item flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-all duration-300 hover:bg-[#38E0C8]/10"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F4F2EA]/10 bg-[#F4F2EA]/5 text-[11px] font-bold text-[#38E0C8] transition-all duration-300 group-hover/item:border-[#38E0C8]/40 group-hover/item:bg-[#38E0C8]/10">
                                  {String(index + 1).padStart(2, '0')}
                                </span>

                                <span className="flex flex-col">
                                  <span className="text-sm font-semibold text-[#F4F2EA] transition-colors duration-300 group-hover/item:text-[#38E0C8]">
                                    {t(option.labelKey)}
                                  </span>
                                  <span className="mt-0.5 text-[11px] text-[#F4F2EA]/45">
                                    {t('trips.dropdown.openTrip')}
                                  </span>
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <MotionLink
                  key={item.to}
                  className={`group relative text-sm font-medium transition-colors ${navTextClass}`}
                  to={item.to}
                  onClick={() => handleNavClick(item.to)}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">{t(item.label)}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionLink>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Selector idioma desktop */}
            <div ref={dropdownRef} className="relative hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
                className={`flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-medium backdrop-blur-md transition-all duration-300 sm:h-11 sm:px-4 sm:text-sm ${controlClass}`}
              >
                <span>{currentLanguageLabel}</span>
                <motion.span
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  className="text-[10px] sm:text-xs"
                >
                  v
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.3 }}
                    className="absolute right-0 mt-3 w-48 origin-top-right rounded-2xl border border-white/10 bg-background-dark/95 shadow-2xl backdrop-blur-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLangOpen(false)
                        }}
                        className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl ${
                          currentLang === lang.code
                            ? 'bg-primary/20 text-primary'
                            : 'text-white hover:bg-primary/10'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="inline-flex min-w-8 items-center justify-center rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                            {lang.code}
                          </span>
                          <span>{t(lang.labelKey)}</span>
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botón hamburguesa - solo mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-300 lg:hidden ${controlClass}`}
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ═══════════ MENÚ MOBILE FULLSCREEN ═══════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Fondo con el color del proyecto */}
            <div className="absolute inset-0 bg-background-dark">
              {/* Glow decorativos premium */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            {/* Contenido */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative flex h-full flex-col"
            >
              {/* HEADER del menú: cerrar + logo */}
              <div className="flex items-center justify-between px-5 py-5">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-3xl text-white/80 transition-all duration-300 hover:rotate-90 hover:text-primary"
                >
                  <FaTimes />
                </button>

                <Link
                  to={homePath}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src={clubLogo}
                    alt="THE CLUB logo"
                    className="h-9 w-auto"
                  />
                </Link>
              </div>

              {/* NAV centrado */}
              <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = activePath === item.to

                  return (
                    <motion.div
                      key={item.to}
                      variants={itemVariants}
                      className="w-full text-center"
                    >
                      <Link
                        to={item.to}
                        onClick={() => handleNavClick(item.to)}
                        className={`group relative inline-block px-4 py-3 text-2xl font-semibold tracking-wide transition-all duration-500 sm:text-3xl ${
                          isActive
                            ? 'text-white'
                            : 'text-white/85 hover:text-primary'
                        }`}
                      >
                        <span className="relative">
                          {t(item.label)}
                          <motion.span
                            className="absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-primary"
                            initial={{ width: isActive ? '100%' : '0%' }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* FOOTER: CTA + idiomas */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-6 px-6 pb-10"
              >
                {/* CTA Reserva */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/95 px-10 py-3.5 text-sm font-bold uppercase tracking-[0.25em] text-background-dark shadow-xl transition-all duration-500 hover:bg-primary hover:text-white hover:shadow-primary/30"
                >
                  <span className="relative z-10">{t('common.bookNow')}</span>
                </motion.a>

                {/* Selector de idioma minimal */}
                <div className="flex items-center gap-6">
                  {otherLanguages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ scale: 1.1, color: '#2A9D8F' }}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsMobileMenuOpen(false)
                      }}
                      className="text-base font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300"
                    >
                      {lang.code}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
