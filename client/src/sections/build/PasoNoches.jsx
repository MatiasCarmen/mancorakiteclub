import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { NOCHES_OPTIONS, NOCHES_IMAGENES, NOCHES_COPY_KEYS, getPrecioNoche } from './buildData.js'
import { StepHeading, staggerContainer, staggerItem } from './BuildUI.jsx'

function NightCard({ n, i, selected, onClick, precioNoche }) {
  const { t } = useI18n()
  return (
    <motion.button
      type="button"
      onClick={onClick}
      variants={staggerItem}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative min-h-[180px] overflow-hidden rounded-2xl text-left transition-all duration-300 ${selected
        ? 'ring-2 ring-[#b7e28a] ring-offset-2 ring-offset-[#0e1b17]'
        : 'ring-1 ring-white/8 hover:ring-white/20'
        }`}
    >
      <img
        src={NOCHES_IMAGENES[i]}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${selected ? 'scale-[1.04] opacity-70' : 'scale-100 opacity-45 group-hover:scale-[1.02] group-hover:opacity-60'
          }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      <div className="relative z-10 flex min-h-[180px] flex-col justify-between p-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/60">{t(NOCHES_COPY_KEYS[n])}</p>
        </div>
        <div>
          <div className="flex items-end justify-between gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black leading-none text-white">{n}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('build.nights')}</span>
            </div>
            <span className={`rounded-md px-2 py-1 text-[11px] font-black ${selected ? 'bg-[#b7e28a] text-black' : 'bg-white/10 text-white'}`}>
              ${n * precioNoche}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export default function PasoNoches({ noches, setNoches, personas, setPersonas }) {
  const { t } = useI18n()
  const precioNoche = getPrecioNoche(personas)
  return (
    <div>
      <StepHeading index={2} title={t('build.howManyNights')} subtitle={t('build.howManyNightsSub')} />

      {/* Guest selector */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-white/50">{t('build.guests') || 'Guests'}</span>
        <div className="flex gap-2">
          {[1, 2].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPersonas(p)}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                personas === p
                  ? 'bg-[#b7e28a] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {p} {p === 1 ? (t('build.person') || 'person') : (t('build.people') || 'people')}
            </button>
          ))}
        </div>
        <span className="text-xs text-white/30">${precioNoche} USD / {t('build.night') || 'night'}</span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {NOCHES_OPTIONS.map((n, i) => (
          <NightCard key={n} n={n} i={i} selected={noches === n} onClick={() => setNoches(n)} precioNoche={precioNoche} />
        ))}
      </motion.div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${noches * precioNoche} USD</p>
        <span className="text-xs text-white/30">{t('build.accommodation')}</span>
      </div>
    </div>
  )
}
