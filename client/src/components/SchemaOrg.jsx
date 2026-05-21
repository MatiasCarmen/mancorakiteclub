import { useEffect } from 'react'
import { useI18n } from '../app/providers/i18nContext.js'
import {
  getLocalBusinessSchema,
  getCourseSchema,
  getFAQPageSchema,
  getBlogPostingSchema,
  getBreadcrumbListSchema,
} from '../config/schemas.js'

/**
 * Component to inject structured data (JSON-LD) into the document head.
 * Clean up on unmount ensures there is no schema duplication during navigation.
 */
function SchemaOrg({ type, serviceKey, post, breadcrumbs, customSchema }) {
  const { currentLang } = useI18n()

  useEffect(() => {
    let schemaObj = null

    if (customSchema) {
      schemaObj = customSchema
    } else {
      switch (type) {
        case 'LocalBusiness':
          schemaObj = getLocalBusinessSchema(currentLang)
          break
        case 'Course':
          schemaObj = getCourseSchema(currentLang, serviceKey)
          break
        case 'FAQPage':
          schemaObj = getFAQPageSchema(currentLang)
          break
        case 'BlogPosting':
          schemaObj = getBlogPostingSchema(currentLang, post)
          break
        case 'BreadcrumbList':
          schemaObj = getBreadcrumbListSchema(currentLang, breadcrumbs)
          break
        default:
          break
      }
    }

    if (!schemaObj) return

    // Create unique ID for this script type to prevent duplicate schemas
    const scriptId = `schema-org-${type || 'custom'}${serviceKey ? `-${serviceKey}` : ''}${post?.slug ? `-${post.slug}` : ''}`
    let script = document.getElementById(scriptId)

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.text = JSON.stringify(schemaObj)

    return () => {
      // Clean up script on unmount
      const existingScript = document.getElementById(scriptId)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [type, serviceKey, post, breadcrumbs, customSchema, currentLang])

  return null
}

export default SchemaOrg
