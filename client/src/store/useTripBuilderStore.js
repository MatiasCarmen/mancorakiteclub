import { create } from 'zustand'
import { WHATSAPP_NUMBER } from '../lib/whatsapp.js'

// Step bounds for the trip builder
const MIN_STEP = 1
const MAX_STEP = 5
const INITIAL_STEP = 1

// Minimum quantity for extras
const MIN_EXTRA_QTY = 1

const initialState = {
  paso: INITIAL_STEP,
  actividades: {},
  noches: 0,
  personas: 1,
  extras: [],
  extrasQty: {},
  datosUsuario: {
    nombre: '',
    email: '',
  },
}

export const useTripBuilderStore = create((set, get) => ({
  ...initialState,

  toggleActividad: (id) =>
    set((state) => {
      const acts = { ...state.actividades }
      if (id in acts) {
        delete acts[id]
      } else {
        acts[id] = 3
      }
      return { actividades: acts }
    }),

  setActividadHoras: (id, horas) =>
    set((state) => ({
      actividades: {
        ...state.actividades,
        [id]: Math.max(0, Number(horas) || 0),
      },
    })),

  setNoches: (noches) => set({ noches }),

  setPersonas: (personas) => set({ personas: Math.max(1, Number(personas) || 1) }),

  toggleExtra: (extra) =>
    set((state) => {
      const alreadySelected = state.extras.includes(extra)

      return {
        extras: alreadySelected
          ? state.extras.filter((e) => e !== extra)
          : [...state.extras, extra],

        extrasQty: alreadySelected
          ? Object.fromEntries(
              Object.entries(state.extrasQty).filter(([key]) => key !== extra),
            )
          : {
              ...state.extrasQty,
              [extra]: state.extrasQty[extra] || MIN_EXTRA_QTY,
            },
      }
    }),

  setExtraQty: (extraId, qty) =>
    set((state) => ({
      extrasQty: {
        ...state.extrasQty,
        [extraId]: Math.max(MIN_EXTRA_QTY, Number(qty) || MIN_EXTRA_QTY),
      },
    })),

  setDatosUsuario: (datos) =>
    set((state) => ({
      datosUsuario: {
        ...state.datosUsuario,
        ...datos,
      },
    })),

  siguientePaso: () =>
    set((state) => ({
      paso: Math.min(state.paso + 1, MAX_STEP),
    })),

  anteriorPaso: () =>
    set((state) => ({
      paso: Math.max(state.paso - 1, MIN_STEP),
    })),

  reiniciar: () => set(initialState),

  reset: () => set(initialState),

  setPaso: (paso) =>
    set({ paso: Math.max(MIN_STEP, Math.min(MAX_STEP, paso)) }),

  generarLinkWhatsApp: () => {
    const { actividades, noches, personas, extras, extrasQty, datosUsuario } = get()

    const actividadesDetalle = Object.entries(actividades)
      .map(([id, hrs]) => `${id}: ${hrs}h`)
      .join(', ')

    const extrasDetalle = extras
      .map((id) => {
        const qty = extrasQty[id]
        return qty && qty > MIN_EXTRA_QTY ? `${id} x${qty}` : id
      })
      .join(', ')

    const mensaje = `¡Hola Máncora Kite Club! 🏄
Quiero armar mi paquete:
🏋️ Actividades: ${actividadesDetalle || 'No seleccionada'}
🌙 Noches: ${noches}
👥 Personas: ${personas}
✨ Extras: ${extrasDetalle || 'Sin extras'}
Mi nombre es: ${datosUsuario.nombre || 'No indicado'}
Email: ${datosUsuario.email || 'No indicado'}`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
  },
}))