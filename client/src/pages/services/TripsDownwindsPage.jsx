import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import TripsDownwinds from '../../sections/ClassesPage/TripsDownwinds.jsx'

function TripsDownwindsPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.tripsDownwindsTitle"
        descKey="seo.tripsDownwindsDesc"
        titleFallback="Kitesurf Trips & Downwinders in Northern Peru | Mancora Kite Club"
        descFallback="Embark on epic downwinders and kitesurf trips along the Northern Peruvian coast. Discover secret spots, local guides, and custom support vehicles. Book your trip!"
        canonicalPath={localizePath('/services/trips-downwinds', currentLang)}
        hreflang={{
          en: '/services/trips-downwinds',
          es: '/esp/services/trips-downwinds',
          fr: '/fr/services/trips-downwinds',
          default: '/services/trips-downwinds',
        }}
      />
      <SchemaOrg type="Course" serviceKey="tripsDownwinds" />

      <TripsDownwinds />
    </>
  )
}

export default TripsDownwindsPage
