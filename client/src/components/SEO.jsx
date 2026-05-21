import { useEffect } from 'react'
import { useI18n } from '../app/providers/i18nContext.js'
import { seoImages } from '../config/images.js'
import { getSeoMetaByPath } from '../config/seoMeta.js'
import { setSeoTags } from '../lib/seo.js'

/**
 * Componente SEO mejorado con soporte multi-idioma y Open Graph
 * Usa el sistema i18n (t()) para traducciones dinámicas de meta tags
 *
 * @param {string} titleKey - Clave del JSON para el título (ej: 'seo.homeTitle')
 * @param {string} descKey - Clave del JSON para la descripción (ej: 'seo.homeDesc')
 * @param {string} titleFallback - Fallback si la key no existe
 * @param {string} descFallback - Fallback si la key no existe
 * @param {string} image - URL de imagen para Open Graph (og:image)
 * @param {string} canonicalPath - Ruta canónica relativa (ej: '/', '/trips')
 * @param {object} hreflang - Objeto con rutas por idioma {en: '/', es: '/esp', default: '/'}
 */
function SEO({
  title,
  description,
  image,
  titleKey = 'seo.homeTitle',
  descKey = 'seo.homeDesc',
  titleFallback = 'Máncora Kite Club',
  descFallback = 'Escuela de Kitesurf y Wingfoil en Máncora, Perú',
  canonicalPath,
  hreflang,
  keywords,
  author,
  type = 'website',
  publishedTime,
  section,
}) {
  const { t } = useI18n()
  const pathMeta = getSeoMetaByPath(canonicalPath)

  // Obtener título y descripción del i18n o fallback
  const resolvedTitle = title ?? (t(titleKey) !== titleKey ? t(titleKey) : pathMeta.title || titleFallback)
  const resolvedDescription =
    description ?? (t(descKey) !== descKey ? t(descKey) : pathMeta.description || descFallback)
  const resolvedImage = image || pathMeta.image || seoImages.defaultOpenGraph
  const resolvedCanonicalPath = canonicalPath || pathMeta.canonicalPath
  const resolvedHreflang = hreflang || pathMeta.hreflang
  const resolvedKeywords = keywords || pathMeta.keywords
  const resolvedAuthor = author || pathMeta.author
  const resolvedType = type || pathMeta.type || 'website'

  useEffect(() => {
    setSeoTags({
      title: resolvedTitle,
      description: resolvedDescription,
      image: resolvedImage,
      canonicalPath: resolvedCanonicalPath,
      hreflang: resolvedHreflang,
      keywords: resolvedKeywords,
      author: resolvedAuthor,
      type: resolvedType,
      publishedTime,
      section,
    })
  }, [
    resolvedTitle,
    resolvedDescription,
    resolvedImage,
    resolvedCanonicalPath,
    resolvedHreflang,
    resolvedKeywords,
    resolvedAuthor,
    resolvedType,
    publishedTime,
    section,
  ])

  return null
}

export default SEO
