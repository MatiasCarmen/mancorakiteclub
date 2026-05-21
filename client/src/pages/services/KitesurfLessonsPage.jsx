import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import ClassesHero from '../../sections/ClassesPage/ClassesHero.jsx'
import ClassesIntro from '../../sections/ClassesPage/ClassesIntro.jsx'
import ClassesPricing from '../../sections/ClassesPage/ClassesPricing.jsx'
import ClassesBenefits from '../../sections/ClassesPage/ClassesBenefits.jsx'
import ClassesSteps from '../../sections/ClassesPage/ClassesSteps.jsx'
import EquipmentKite from '../../sections/ClassesPage/equipment/EquipmentKite.jsx'
import ClassesGallery from '../../sections/ClassesPage/ClassesGallery.jsx'

function KitesurfLessonsPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.kitesurfLessonsTitle"
        descKey="seo.kitesurfLessonsDesc"
        titleFallback="Kitesurf Lessons in Máncora | IKO Certified School | Mancora Kite Club"
        descFallback="Learn kitesurfing in Máncora, Peru with our IKO certified instructors. Beginner to advanced classes, premium equipment, and safe conditions. Book now!"
        canonicalPath={localizePath('/services/kitesurf-lessons', currentLang)}
        hreflang={{
          en: '/services/kitesurf-lessons',
          es: '/esp/services/kitesurf-lessons',
          fr: '/fr/services/kitesurf-lessons',
          default: '/services/kitesurf-lessons',
        }}
      />
      <SchemaOrg type="Course" serviceKey="kitesurfLessons" />
      
      <ClassesHero />
      <ClassesIntro />
      <ClassesPricing />
      <ClassesBenefits />
      <ClassesSteps />
      <EquipmentKite />
      <ClassesGallery />
    </>
  )
}

export default KitesurfLessonsPage
