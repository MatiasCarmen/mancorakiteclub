import { seoImages } from '../config/images.js'

function ensureMetaTag(selector, attributeName, attributeValue) {
  let tag = document.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attributeName, attributeValue)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureLinkTag(selector, rel) {
  let linkTag = document.querySelector(selector)

  if (!linkTag) {
    linkTag = document.createElement('link')
    linkTag.setAttribute('rel', rel)
    document.head.appendChild(linkTag)
  }

  return linkTag
}

function toAbsoluteUrl(path) {
  if (/^https?:\/\//i.test(path)) return path
  const origin = window.location.origin
  return new URL(path, origin).toString()
}

export function setSeoTags({
  title,
  description,
  image,
  canonicalPath,
  hreflang,
  keywords,
  author,
  type = 'website',
  publishedTime,
  section,
}) {
  if (title) {
    document.title = title
  }

  // Meta description
  const descriptionTag = ensureMetaTag('meta[name="description"]', 'name', 'description')
  descriptionTag.setAttribute('content', description || 'TODO: contenido real')

  // Meta keywords
  if (keywords) {
    const keywordsTag = ensureMetaTag('meta[name="keywords"]', 'name', 'keywords')
    keywordsTag.setAttribute('content', Array.isArray(keywords) ? keywords.join(', ') : keywords)
  }

  // Meta author
  const authorTag = ensureMetaTag('meta[name="author"]', 'name', 'author')
  authorTag.setAttribute('content', author || 'Mancora Kite Club')

  // Open Graph tags
  const ogTitle = ensureMetaTag('meta[property="og:title"]', 'property', 'og:title')
  ogTitle.setAttribute('content', title || 'Máncora Kite Club')

  const ogDescription = ensureMetaTag('meta[property="og:description"]', 'property', 'og:description')
  ogDescription.setAttribute('content', description || 'Escuela de Kitesurf y Wingfoil en Máncora, Perú')

  const ogImage = ensureMetaTag('meta[property="og:image"]', 'property', 'og:image')
  ogImage.setAttribute('content', toAbsoluteUrl(image || seoImages.defaultOpenGraph))

  const ogUrl = ensureMetaTag('meta[property="og:url"]', 'property', 'og:url')
  ogUrl.setAttribute('content', canonicalPath ? toAbsoluteUrl(canonicalPath) : window.location.href)

  const ogType = ensureMetaTag('meta[property="og:type"]', 'property', 'og:type')
  ogType.setAttribute('content', type || 'website')

  // Article metadata
  if (type === 'article') {
    if (publishedTime) {
      const pubTimeTag = ensureMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time')
      pubTimeTag.setAttribute('content', publishedTime)
    }
    if (author) {
      const artAuthorTag = ensureMetaTag('meta[property="article:author"]', 'property', 'article:author')
      artAuthorTag.setAttribute('content', author)
    }
    if (section) {
      const artSectionTag = ensureMetaTag('meta[property="article:section"]', 'property', 'article:section')
      artSectionTag.setAttribute('content', section)
    }
  } else {
    // Remove article tags on non-article pages
    document.querySelector('meta[property="article:published_time"]')?.remove()
    document.querySelector('meta[property="article:author"]')?.remove()
    document.querySelector('meta[property="article:section"]')?.remove()
  }

  const ogSiteName = ensureMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name')
  ogSiteName.setAttribute('content', 'Máncora Kite Club')

  // Twitter Card tags
  const twitterCard = ensureMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card')
  twitterCard.setAttribute('content', 'summary_large_image')

  const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title')
  twitterTitle.setAttribute('content', title || 'Máncora Kite Club')

  const twitterDescription = ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description')
  twitterDescription.setAttribute('content', description || 'Escuela de Kitesurf y Wingfoil en Máncora, Perú')

  const twitterImage = ensureMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image')
  twitterImage.setAttribute('content', toAbsoluteUrl(image || seoImages.defaultOpenGraph))

  if (canonicalPath) {
    const canonicalTag = ensureLinkTag('link[rel="canonical"]', 'canonical')
    canonicalTag.setAttribute('href', toAbsoluteUrl(canonicalPath))
  }

  const hreflangEn = ensureLinkTag('link[rel="alternate"][hreflang="en"]', 'alternate')
  hreflangEn.setAttribute('hreflang', 'en')
  hreflangEn.setAttribute('href', toAbsoluteUrl(hreflang.en || hreflang.default))

  const hreflangEs = ensureLinkTag('link[rel="alternate"][hreflang="es"]', 'alternate')
  hreflangEs.setAttribute('hreflang', 'es')
  hreflangEs.setAttribute('href', toAbsoluteUrl(hreflang.es || hreflang.default))

  const hreflangFr = ensureLinkTag('link[rel="alternate"][hreflang="fr"]', 'alternate')
  hreflangFr.setAttribute('hreflang', 'fr')
  hreflangFr.setAttribute('href', toAbsoluteUrl(hreflang.fr || hreflang.default))

  const hreflangDefault = ensureLinkTag(
    'link[rel="alternate"][hreflang="x-default"]',
    'alternate',
  )
  hreflangDefault.setAttribute('hreflang', 'x-default')
  hreflangDefault.setAttribute('href', toAbsoluteUrl(hreflang.default))
}
