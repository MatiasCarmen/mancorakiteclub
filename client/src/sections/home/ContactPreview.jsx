import { Link } from 'react-router-dom'
import { useI18n } from '../../app/providers/i18nContext.js'
import { resolveImage } from '../../config/images.js'
import { localizePath } from '../../lib/routes.js'

const CONTACT_IMAGE = resolveImage("fotos home/IMG_5230.webp")

const highlights = [
  {
    title: 'Fast availability response',
    text: 'Dates, wind window, and next steps.',
  },
  {
    title: 'Lessons, stays & trips',
    text: 'Shape one plan around your visit.',
  },
  {
    title: 'Local guidance',
    text: 'Clear advice from the Mancora team.',
  },
]

function ContactPreview() {
  const { currentLang } = useI18n()
  const contactPath = localizePath('/contact', currentLang)

  return (
    <section className="relative overflow-hidden bg-[#0A1113] px-5 py-10 text-[#F4F2EA] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-lg border border-[#F4F2EA]/10 bg-[#0F181A] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38E0C8]/70 to-transparent" />
          <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#38E0C8]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#C19B6C]/10 blur-3xl" />

          <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:p-7">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#38E0C8]">
                  GET IN TOUCH
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#F4F2EA] sm:text-4xl lg:text-[2.65rem]">
                  Ready to plan your next ocean experience?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#F4F2EA]/72 sm:text-base">
                  Reach us for availability, pricing, lessons, stays, and trip guidance. Our team will help you choose the best experience for your dates and level.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-lg border border-[#F4F2EA]/10 bg-[#F4F2EA]/[0.04] p-3"
                  >
                    <span className="mb-3 block h-1.5 w-8 rounded-full bg-[#38E0C8]" />
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#F4F2EA]/90">
                      {highlight.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#F4F2EA]/58">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-[#F4F2EA]/10 pt-4 sm:flex-row sm:items-center">
                <Link
                  to={contactPath}
                  className="inline-flex items-center justify-center rounded-full border border-[#38E0C8]/60 bg-[#38E0C8] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0A1113] shadow-[0_16px_40px_rgba(56,224,200,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F2EA] hover:text-[#0A1113] sm:text-sm"
                >
                  Contact Us
                </Link>
                <p className="max-w-sm text-sm leading-6 text-[#F4F2EA]/60">
                  Tell us your dates, level, and travel idea. We will help you shape the best ocean experience.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <figure className="relative h-[220px] overflow-hidden rounded-lg border border-[#F4F2EA]/10 shadow-[0_22px_64px_rgba(0,0,0,0.3)] sm:h-[260px] lg:h-full lg:min-h-[320px]">
                <img
                  src={CONTACT_IMAGE}
                  alt="Kitesurf session in Mancora"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1113]/72 via-[#0A1113]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38E0C8]">
                      Contact support
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#F4F2EA]">
                      Lessons, stays, and full trip planning.
                    </p>
                  </div>
                  <span className="rounded-full border border-[#C19B6C]/40 bg-[#0A1113]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C19B6C] backdrop-blur">
                    Mancora
                  </span>
                </div>
              </figure>

              <div className="rounded-lg border border-[#C19B6C]/30 bg-[#C19B6C]/10 p-4">
                <p className="text-sm leading-7 text-[#F4F2EA]/70">
                  Plan your stay, lessons, or full kite trip with us. One message is enough to get the right recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
