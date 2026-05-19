import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { useTripBuilderStore } from '../store/useTripBuilderStore.js'
import { componentImages } from '../config/images.js'

import { calcularPrecio, EXTRAS_OPTIONS } from '../sections/build/buildData.js'
import { StepIndicator, FloatingPrice, MobilePriceBar, stepVariants, stepTransition } from '../sections/build/BuildUI.jsx'

import PasoActividad from '../sections/build/PasoActividad.jsx'
import PasoNoches from '../sections/build/PasoNoches.jsx'
import PasoRental from '../sections/build/PasoRental.jsx'
import PasoExtras from '../sections/build/PasoExtras.jsx'
import PasoResumen from '../sections/build/PasoResumen.jsx'

const { buildHeroBg } = componentImages["pages/BuildPage.jsx"]

function BuildPage() {
  const { t, currentLang } = useI18n()
  const {
    actividades, toggleActividad, setActividadHoras,
    noches, setNoches,
    personas, setPersonas,
    extras, toggleExtra,
    extrasQty, setExtraQty,
    paso, setPaso,
    datosUsuario, setDatosUsuario,
    reset,
  } = useTripBuilderStore()

  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)

  const cambiarPaso = (nuevoPaso) => {
    setDirection(nuevoPaso > paso ? 1 : -1)
    setPaso(nuevoPaso)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generarLinkWhatsApp = () => {
    const total = calcularPrecio(actividades, noches, extras, extrasQty, personas)
    const listActividades = Object.entries(actividades)
      .map(([id, hrs]) => `- ${id}: ${hrs}h`)
      .join('\n')
    const listExtras = EXTRAS_OPTIONS.filter((e) => extras.includes(e.id))
      .map((e) => `- ${e.labelKey} (x${extrasQty[e.id] || 1})`)
      .join('\n')

    const mensaje = `¡Hola! He armado mi viaje en la web:
- Actividades:
${listActividades || '  Ninguna'}
- Noches: ${noches}
- Personas: ${personas}
${listExtras ? `- Extras:\n${listExtras}` : ''}
---
Total estimado: $${total} USD
Nombre: ${datosUsuario.nombre}
Email: ${datosUsuario.email}`

    return `https://wa.me/51996557689?text=${encodeURIComponent(mensaje)}`
  }

  const precioTotal = calcularPrecio(actividades, noches, extras, extrasQty, personas)

  return (
    <div className="min-h-screen bg-[#0e1b17]">
      <SEO
        titleKey="build.heroTitle1"
        descKey="build.heroSubtitle"
        titleFallback="Build Your Trip | Máncora Kite Club"
      />

      <div className="relative overflow-hidden bg-background-dark py-32 sm:py-48 lg:py-56">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet={buildHeroBg.mobile} />
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={buildHeroBg.desktop}
              alt=""
              className="h-full w-full object-cover opacity-40"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b17] via-[#0e1b17]/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#b7e28a]"
          >
            {t('build.heroLabel')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {t('build.heroTitle1')}{' '}
            <span className="text-transparent transition-all [text-shadow:0_0_20px_rgba(183,226,138,0.3)] [-webkit-text-stroke:1px_rgba(183,226,138,0.5)]">
              {t('build.heroTitle2')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm tracking-wide text-white/50 sm:text-base"
          >
            {t('build.heroSubtitle')}
          </motion.p>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8" ref={containerRef}>
        <StepIndicator pasoActual={paso} />

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={paso}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={stepTransition}
            >
              {paso === 1 && <PasoActividad actividades={actividades} toggleActividad={toggleActividad} setActividadHoras={setActividadHoras} />}
              {paso === 2 && <PasoNoches noches={noches} setNoches={setNoches} personas={personas} setPersonas={setPersonas} />}
              {paso === 3 && (
                <PasoRental
                  extras={extras}
                  extrasQty={extrasQty}
                  toggleExtra={toggleExtra}
                  setExtraQty={setExtraQty}
                />
              )}
              {paso === 4 && (
                <PasoExtras
                  extras={extras}
                  extrasQty={extrasQty}
                  toggleExtra={toggleExtra}
                  setExtraQty={setExtraQty}
                />
              )}
              {paso === 5 && (
                <PasoResumen
                  actividades={actividades}
                  noches={noches}
                  personas={personas}
                  extras={extras}
                  extrasQty={extrasQty}
                  datosUsuario={datosUsuario}
                  setDatosUsuario={setDatosUsuario}
                  generarLinkWhatsApp={generarLinkWhatsApp}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/6 pt-8">
          <button
            type="button"
            onClick={() => (paso === 1 ? reset() : cambiarPaso(paso - 1))}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 transition hover:text-white"
          >
            {paso === 1 ? t('build.reset') : t('build.back')}
          </button>

          {paso < 5 && (
            <button
              type="button"
              onClick={() => cambiarPaso(paso + 1)}
              className="group flex h-12 items-center gap-4 rounded-full bg-white/5 pl-8 pr-2 transition-all hover:bg-white/10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                {t('build.next')}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7e28a] text-black transition-transform group-hover:translate-x-1">
                →
              </div>
            </button>
          )}
        </div>
      </main>

      <FloatingPrice paso={paso} precioTotal={precioTotal} />
      <MobilePriceBar paso={paso} precioTotal={precioTotal} />
    </div>
  )
}

export default BuildPage