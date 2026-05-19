import { Link } from 'react-router-dom'
import { FaHome, FaSpa, FaUtensils, FaWater } from 'react-icons/fa'

import bedroomImage from '../../assets/HOSPEDAJE KITE HOUSE/DSC05162.webp'
import loungeImage from '../../assets/HOSPEDAJE KITE HOUSE/DSC04847.webp'
import mainVillaImage from '../../assets/HOSPEDAJE KITE HOUSE/DSC04812.webp'
import nightImage from '../../assets/HOSPEDAJE KITE HOUSE/DSC04839.webp'
import poolImage from '../../assets/HOSPEDAJE KITE HOUSE/piscinabuenarda.webp'

const STAY_GALLERY = {
  main: {
    src: mainVillaImage,
    alt: 'Beachfront kite house villa in Mancora',
  },
  pool: {
    src: poolImage,
    alt: 'Pool terrace at the kite house accommodation',
  },
  bedroom: {
    src: bedroomImage,
    alt: 'Private bedroom at the kite house',
  },
  lounge: {
    src: loungeImage,
    alt: 'Relaxed lounge space at the kite house',
  },
  night: {
    src: nightImage,
    alt: 'Evening atmosphere at the kite house',
  },
}

const STAY_BENEFITS = [
  {
    icon: FaHome,
    title: 'Beachfront Villa',
    description: 'A calm home base designed for riders, friends, and slow coastal mornings.',
  },
  {
    icon: FaWater,
    title: 'Ocean Views',
    description: 'Wake up close to the Pacific and keep the sea in sight throughout the day.',
  },
  {
    icon: FaUtensils,
    title: 'Private Chef',
    description: 'Fresh meals, easy hosting, and recovery-friendly dining after the water.',
  },
  {
    icon: FaSpa,
    title: 'Pure Tranquility',
    description: 'Quiet corners, soft shade, and space to reset between kite sessions.',
  },
]

const STAY_TAGS = ['Boutique Kite House', 'Beachfront Base', 'Slow Luxury']

function Stay() {
  return (
    <section id="stay" className="relative overflow-hidden bg-[#0e1b17] px-5 py-20 text-[#F4F2EA] sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#b7e28a]/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#b7e28a]/5 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-normal text-[#BFA36A]">
              Accommodation
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-normal text-[#F4F2EA] sm:text-5xl lg:text-6xl">
              Stay With Us
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#F4F2EA]/72 sm:text-lg sm:leading-8">
              Relax in our luxurious beachfront villa. Ocean views, private chefs, and pure tranquility.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {STAY_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#F4F2EA]/14 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#F4F2EA]/78"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-lg">
              <div className="border-l border-[#BFA36A]/45 pl-4">
                <p className="font-display text-3xl font-semibold text-[#F4F2EA]">4</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-normal text-[#F4F2EA]/56">Guest rhythms</p>
              </div>
              <div className="border-l border-[#5AF8FB]/35 pl-4">
                <p className="font-display text-3xl font-semibold text-[#F4F2EA]">24/7</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-normal text-[#F4F2EA]/56">Coastal calm</p>
              </div>
            </div>

            <Link
              to="/stay"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full border border-[#F4F2EA]/18 bg-[#F4F2EA] px-6 text-sm font-bold text-[#0A1113] shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[#5AF8FB]/50 hover:bg-[#5AF8FB] focus:outline-none focus:ring-2 focus:ring-[#5AF8FB]/70 focus:ring-offset-2 focus:ring-offset-[#0A1113]"
            >
              Explore Accommodation
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-12">
            <figure className="group relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_34px_90px_rgba(0,0,0,0.38)] sm:col-span-8 sm:min-h-[560px]">
              <img
                src={STAY_GALLERY.main.src}
                alt={STAY_GALLERY.main.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061012]/82 via-[#061012]/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-normal text-[#5AF8FB]">Kite House</p>
                <p className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  A polished base between wind, water and rest.
                </p>
              </div>
            </figure>

            <div className="grid gap-3 sm:col-span-4">
              <figure className="group relative min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:min-h-0">
                <img
                  src={STAY_GALLERY.pool.src}
                  alt={STAY_GALLERY.pool.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                  Poolside recovery
                </figcaption>
              </figure>

              <figure className="group relative min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:min-h-0">
                <img
                  src={STAY_GALLERY.bedroom.src}
                  alt={STAY_GALLERY.bedroom.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                  Quiet private rooms
                </figcaption>
              </figure>
            </div>

            <figure className="group relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:col-span-7">
              <img
                src={STAY_GALLERY.lounge.src}
                alt={STAY_GALLERY.lounge.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                Shared spaces with boutique ease
              </figcaption>
            </figure>

            <figure className="group relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:col-span-5">
              <img
                src={STAY_GALLERY.night.src}
                alt={STAY_GALLERY.night.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/12 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                Warm evenings after the session
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STAY_BENEFITS.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_56px_rgba(0,0,0,0.22)] backdrop-blur"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#BFA36A]/25 bg-[#BFA36A]/10 text-[#E7D19B]">
                  <Icon className="text-lg" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-normal text-[#F4F2EA]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#F4F2EA]/62">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stay
