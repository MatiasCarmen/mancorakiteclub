import { useI18n } from '../app/providers/i18nContext.js'
import { seoImages } from '../config/images.js'
import { localizePath } from '../lib/routes.js'
import SEO from '../components/SEO.jsx'
import BuilderPreview from '../sections/home/BuilderPreview.jsx'
import Hero from '../sections/home/Hero.jsx'
import OurStory from '../sections/home/OurStory.jsx'
import Stay from '../sections/home/Stay.jsx'
import Testimonials from '../sections/home/Testimonials.jsx'
import Team from '../sections/home/Team.jsx'
import Trips from '../sections/home/Trips.jsx'
import CommunityGallery from '../sections/home/CommunityGallery.jsx'

function HomePage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descKey="seo.homeDesc"
        titleFallback="Máncora Kite Club | Kitesurf & Wingfoil School"
        descFallback="Learn kitesurfing and wingfoiling in Máncora, Peru with professional IKO certified coaching, equipment rental, beachfront stays, and epic trips. Book now!"
        image={seoImages.defaultOpenGraph}
        canonicalPath={localizePath('/home', currentLang)}
        hreflang={{ en: '/home', es: '/esp/home', fr: '/fr/home', default: '/home' }}
      />
      <Hero />
      <CommunityGallery />
      <OurStory />
      <Team />
      <Trips />
      <Stay />
      <BuilderPreview />
      <Testimonials />
    </>
  )
}

export default HomePage
