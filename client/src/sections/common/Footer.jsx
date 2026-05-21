import { brandImages } from '../../config/images.js'
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'

const footerBrandLogo = brandImages.logoComplete
const { duotone: logoDuotone, ozone: logoOzone, ride: logoRide, slingshot: logoSlingshot } = brandImages.sponsors
const SPONSORS = [
  {
    name: 'Slingshot',
    logo: logoSlingshot,
  },
  {
    name: 'Ride Engine',
    logo: logoRide,
  },
  {
    name: 'Duotone',
    logo: logoDuotone,
  },
  {
    name: 'Ozone',
    logo: logoOzone,
  },
]
const ikoLogo = brandImages.ikoLogo

function Footer() {
  const { t, currentLang } = useI18n()

  return (
    <footer className="overflow-hidden bg-[#1e3130] pb-8 pt-16 text-white sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 justify-items-center gap-10 sm:gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:justify-items-start lg:gap-8 xl:gap-10">
          <div className="col-span-1 flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <img
                src={footerBrandLogo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-10 w-auto max-w-[92px] shrink-0 object-contain sm:h-11 sm:max-w-[104px] -ml-2"
              />
            </div>

            <p className="mb-8 max-w-sm text-sm leading-7 text-white">
              {t('footer.tagline')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary"
                href="https://www.instagram.com/kiteclubmancora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary"
                href="https://www.facebook.com/MancoraKiteClub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary"
                href="https://www.youtube.com/@mancorakiteclub4328"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:px-2 lg:text-left xl:pl-4">
            <h4 className="mb-5 text-base font-bold text-white">{t('footer.exploreLabel')}</h4>
            <ul className="space-y-1.5 text-sm text-white">
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/trips', currentLang)}>
                  {t('footer.tripsLink')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/stay', currentLang)}>
                  {t('footer.accommodationLink')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/classes', currentLang)}>
                  {t('footer.kiteLessons')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/build', currentLang)}>
                  {t('footer.packages')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 text-base font-bold text-white">{t('footer.servicesLabel')}</h4>
            <ul className="space-y-1.5 text-sm text-white">
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/kitesurf-lessons', currentLang)}>
                  {t('footer.kitesurfLessons')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/wingfoil-lessons', currentLang)}>
                  {t('footer.wingfoilLessons')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/wave-riding-coaching', currentLang)}>
                  {t('footer.waveRiding')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/trips-downwinds', currentLang)}>
                  {t('footer.tripsDownwinds')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/rent-gear', currentLang)}>
                  {t('footer.rentGear')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/services/surf-sup', currentLang)}>
                  {t('footer.surfSup')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 text-base font-bold text-white">{t('footer.companyLabel')}</h4>
            <ul className="space-y-1.5 text-sm text-white">
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/home', currentLang)}>
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/home', currentLang)}>
                  {t('footer.instructors')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/contact', currentLang)}>
                  {t('footer.contactLink')}
                </Link>
              </li>
              <li>
                <Link className="inline-flex min-h-10 items-center transition-colors hover:text-white" to={localizePath('/faq', currentLang)}>
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 text-base font-bold text-white">{t('footer.contactLink')}</h4>
            <ul className="space-y-3 text-sm leading-7 text-white">
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-white" />
                <a
                  href="https://maps.google.com/?q=M%C3%A1ncora+Piura+Per%C3%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-xs break-words transition-colors hover:text-white"
                >
                  {t('footer.address')}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaEnvelope className="mt-1 shrink-0 text-white" />
                <a
                  href="mailto:kiteclub.mancora@gmail.com"
                  className="max-w-xs break-all transition-colors hover:text-white sm:break-words"
                >
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaWhatsapp className="mt-1 shrink-0 text-white" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-xs break-words transition-colors hover:text-white"
                >
                  {t('footer.phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 text-center lg:flex-row lg:justify-center">
          <p className="max-w-md text-xs leading-6 text-white">
            {t('footer.rights')}
          </p>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white">
            {t('footer.partners')}
          </p>

          <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-6 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-14">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex h-16 w-full max-w-[132px] items-center justify-center sm:max-w-[150px] lg:max-w-[170px]"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  loading="lazy"
                  className={`object-contain opacity-95 [filter:brightness(0)_saturate(100%)_invert(81%)_sepia(20%)_saturate(457%)_hue-rotate(103deg)_brightness(96%)_contrast(89%)] ${
                    sponsor.name === 'Duotone'
                      ? 'max-h-[64px] max-w-[132px] sm:max-w-[150px] lg:max-w-[170px]'
                      : 'max-h-10 max-w-[112px] sm:max-h-12 sm:max-w-[130px] lg:max-w-[145px]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
                <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white">
            {t('footer.certified')}
          </p>
          <div className="mt-5 flex items-center justify-center">
            <img
              src={ikoLogo}
              alt="IKO – International Kiteboarding Organization"
              loading="lazy"
              className="max-h-10 w-auto object-contain opacity-95 [filter:brightness(0)_saturate(100%)_invert(81%)_sepia(20%)_saturate(457%)_hue-rotate(103deg)_brightness(96%)_contrast(89%)]"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
