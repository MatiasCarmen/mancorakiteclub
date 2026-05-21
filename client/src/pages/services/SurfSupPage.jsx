import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import SurfSup from '../../sections/ClassesPage/SurfSup.jsx'

function SurfSupPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.surfSupTitle"
        descKey="seo.surfSupDesc"
        titleFallback="Surf & SUP Classes & Rentals in Máncora | Mancora Kite Club"
        descFallback="Experience surfing and Stand Up Paddleboarding (SUP) in Máncora, Peru. Private lessons for all ages, rentals, and daily tours to the best local spots."
        canonicalPath={localizePath('/services/surf-sup', currentLang)}
        hreflang={{
          en: '/services/surf-sup',
          es: '/esp/services/surf-sup',
          fr: '/fr/services/surf-sup',
          default: '/services/surf-sup',
        }}
      />
      <SchemaOrg type="Course" serviceKey="surfSup" />

      <SurfSup />
    </>
  )
}

export default SurfSupPage
