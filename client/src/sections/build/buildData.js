import { componentImages } from '../../config/images.js'
import {
  IconKite,
  IconWing,
  IconSurf,
  IconSUP,
  IconTransfer,
  IconYoga,
  IconMassage,
  IconEquipment,
  IconCamera,
} from './BuildIcons.jsx'

const {
  nightcaption,
  DSC05231,
  buildHeroBg,
  DSC05120HDR,
  DSC05085HDR,
  hora0,
  hora3,
  hora6,
  hora10,
  hora15,
  kiteCarousel,
  wingCarousel,
  surfCarousel,
  supCarousel,
} = componentImages["pages/BuildPage.jsx"]

export const ACTIVIDADES = [
  { id: 'Kitesurf', label: 'Kitesurf', taglineKey: 'build.kitesurfTagline', Icon: IconKite },
  { id: 'Wingfoil', label: 'Wingfoil', taglineKey: 'build.wingfoilTagline', Icon: IconWing },
  { id: 'Surf', label: 'Surf', taglineKey: 'build.surfTagline', Icon: IconSurf },
  { id: 'SUP', label: 'SUP', taglineKey: 'build.supTagline', Icon: IconSUP },
]

export const ACTIVIDAD_CAROUSELS = {
  Kitesurf: kiteCarousel,
  Wingfoil: wingCarousel,
  Surf: surfCarousel,
  SUP: supCarousel,
}

export const NOCHES_OPTIONS = [3, 5, 7, 10, 14]
export const NOCHES_IMAGENES = [nightcaption, DSC05231, buildHeroBg.desktop, DSC05120HDR, DSC05085HDR]
export const NOCHES_COPY_KEYS = {
  3: 'build.fastEscape',
  5: 'build.balancedTrip',
  7: 'build.fullWeek',
  10: 'build.deeperStay',
  14: 'build.riderReset',
}

export const HORAS_OPTIONS = [0, 3, 6, 10, 15]
export const HORAS_COPY_KEYS = {
  0: 'build.accomOnly',
  3: 'build.introSession',
  6: 'build.progressionBlock',
  10: 'build.strongUpgrade',
  15: 'build.fullCoaching',
}

export const EXTRAS_OPTIONS = [
  { id: 'Kitesurf full gear rental', labelKey: 'build.kitesurfGearRental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Wingfoil rental', labelKey: 'build.wingfoilRental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Surfboard rental', labelKey: 'build.surfboardRental', Icon: IconSurf, precio: 15, unit: '/day', category: 'gear' },
  { id: 'SUP / Paddle rental', labelKey: 'build.supPaddleRental', Icon: IconSUP, precio: 30, unit: '/day', category: 'gear' },
  { id: 'Day trip to other spots', labelKey: 'build.dayTrip', Icon: IconTransfer, precio: 55, unit: '/day', category: 'experience' },
  { id: 'Water supervision', labelKey: 'build.waterSupervision', Icon: IconYoga, precio: 15, unit: '/hr', category: 'experience' },
  { id: 'Massage', labelKey: 'build.massage', Icon: IconMassage, precio: 21, unit: '', category: 'wellness' },
  { id: 'Airport transfer', labelKey: 'build.airportTransfer', Icon: IconTransfer, precio: 42, unit: '', category: 'logistics' },
  { id: 'Photo & video pack', labelKey: 'build.photoVideoPack', Icon: IconCamera, precio: 40, unit: '', category: 'experience' },
]

export const EXTRAS_CATEGORIES = [
  { id: 'gear', labelKey: 'build.gearEquipment' },
  { id: 'experience', labelKey: 'build.experiences' },
  { id: 'wellness', labelKey: 'build.wellness' },
  { id: 'logistics', labelKey: 'build.logistics' },
]

export const PRECIO_NOCHE_1 = 50
export const PRECIO_NOCHE_2 = 80
export function getPrecioNoche(personas) {
  return personas >= 2 ? PRECIO_NOCHE_2 : PRECIO_NOCHE_1
}
export const PRECIO_HORA_MAP = {
  Kitesurf: 60,
  Wingfoil: 60,
  Surf: 25,
  SUP: 30,
}

export const RENTAL_OPTIONS = EXTRAS_OPTIONS.filter((e) => e.category === 'gear')
export const NON_RENTAL_EXTRAS = EXTRAS_OPTIONS.filter((e) => e.category !== 'gear')
export const NON_RENTAL_CATEGORIES = EXTRAS_CATEGORIES.filter((c) => c.id !== 'gear')

export function calcularPrecio(actividades, noches, extras, extrasQty, personas = 1) {
  const actividadesTotal = Object.entries(actividades).reduce((sum, [id, hrs]) => {
    return sum + (PRECIO_HORA_MAP[id] || 60) * hrs
  }, 0)
  const precioNoche = getPrecioNoche(personas)
  const base = noches * precioNoche + actividadesTotal
  const extrasTotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)
  return base + extrasTotal
}
