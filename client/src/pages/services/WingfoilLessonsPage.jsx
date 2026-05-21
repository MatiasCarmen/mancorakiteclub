import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import WingfoilIntro from '../../sections/ClassesPage/WingfoilIntro.jsx'
import WingfoilWithUs from '../../sections/ClassesPage/WingfoilWithUs.jsx'
import WingfoilClasses from '../../sections/ClassesPage/WingfoilClasses.jsx'
import WingfoilBenefits from '../../sections/ClassesPage/WingfoilBenefits.jsx'
import EquipmentWing from '../../sections/ClassesPage/equipment/EquipmentWing.jsx'

function WingfoilLessonsPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.wingfoilLessonsTitle"
        descKey="seo.wingfoilLessonsDesc"
        titleFallback="Wingfoil Lessons in Máncora | Learn Wingfoiling | Mancora Kite Club"
        descFallback="Master wingfoiling in Máncora, Peru. Safe, structured lessons for beginners and intermediate progression with our experienced coaches. Book your wingfoil class!"
        canonicalPath={localizePath('/services/wingfoil-lessons', currentLang)}
        hreflang={{
          en: '/services/wingfoil-lessons',
          es: '/esp/services/wingfoil-lessons',
          fr: '/fr/services/wingfoil-lessons',
          default: '/services/wingfoil-lessons',
        }}
      />
      <SchemaOrg type="Course" serviceKey="wingfoilLessons" />

      <WingfoilIntro />
      <WingfoilWithUs />
      <WingfoilClasses />
      <WingfoilBenefits />
      <EquipmentWing />
    </>
  )
}

export default WingfoilLessonsPage
