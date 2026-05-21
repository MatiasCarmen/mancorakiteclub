import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import WaveRiding from '../../sections/ClassesPage/WaveRiding.jsx'

function WaveRidingCoachingPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.waveRidingTitle"
        descKey="seo.waveRidingDesc"
        titleFallback="Wave Riding Coaching in Máncora | Surf & Kite Waves | Mancora Kite Club"
        descFallback="Take your wave riding to the next level in Northern Peru. Custom wave kitesurfing and surfing coaching on Máncora's legendary point breaks. Learn from local pros!"
        canonicalPath={localizePath('/services/wave-riding-coaching', currentLang)}
        hreflang={{
          en: '/services/wave-riding-coaching',
          es: '/esp/services/wave-riding-coaching',
          fr: '/fr/services/wave-riding-coaching',
          default: '/services/wave-riding-coaching',
        }}
      />
      <SchemaOrg type="Course" serviceKey="waveRiding" />

      <WaveRiding />
    </>
  )
}

export default WaveRidingCoachingPage
