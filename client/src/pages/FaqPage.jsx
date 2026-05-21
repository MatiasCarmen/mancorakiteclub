import SEO from '../components/SEO.jsx'
import SchemaOrg from '../components/SchemaOrg.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'
import FaqList from '../sections/faq/FaqList.jsx'

function FaqPage() {
  const { currentLang, t } = useI18n()

  return (
    <>
      <SEO
        title="Mancora Kite Club | FAQ"
        description="FAQ about kitesurfing, wingfoil, surf lessons, equipment rental, accommodation, and trips in Máncora, Peru. Find answers and plan your session. Book online."
        canonicalPath={localizePath('/faq', currentLang)}
        hreflang={{ en: '/faq', es: '/esp/faq', fr: '/fr/faq', default: '/faq' }}
      />
      <SchemaOrg type="FAQPage" />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: t('nav.faq') || 'FAQ', path: '/faq' },
        ]}
      />

      <FaqList />
    </>
  )
}

export default FaqPage
