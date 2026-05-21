import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import RentGear from '../../sections/ClassesPage/RentGear.jsx'

function RentGearPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.rentGearTitle"
        descKey="seo.rentGearDesc"
        titleFallback="Kitesurf & Wingfoil Gear Rental in Máncora | Mancora Kite Club"
        descFallback="Rent premium kitesurfing and wingfoiling equipment in Máncora, Peru. Top international brands, well-maintained kites, boards, foils, and safety gear."
        canonicalPath={localizePath('/services/rent-gear', currentLang)}
        hreflang={{
          en: '/services/rent-gear',
          es: '/esp/services/rent-gear',
          fr: '/fr/services/rent-gear',
          default: '/services/rent-gear',
        }}
      />
      <SchemaOrg type="Course" serviceKey="rentGear" />

      <RentGear />
    </>
  )
}

export default RentGearPage
