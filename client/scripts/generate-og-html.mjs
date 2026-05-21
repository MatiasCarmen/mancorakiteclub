import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_SEO, PAGE_SEO, SEO_ROUTES, toSiteUrl } from '../src/config/seoMeta.js'
import { premiumBlogPosts } from '../src/data/posts.js'
import {
  getLocalBusinessSchema,
  getCourseSchema,
  getFAQPageSchema,
  getBlogPostingSchema,
  getBreadcrumbListSchema,
} from '../src/config/schemas.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientRoot = path.resolve(__dirname, '..')
const distRoot = path.join(clientRoot, 'dist')
const indexPath = path.join(distRoot, 'index.html')

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function removeManagedTags(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, '')
}

function getLangFromPath(routePath) {
  if (routePath.startsWith('/esp/') || routePath === '/esp') return 'es'
  if (routePath.startsWith('/fr/') || routePath === '/fr') return 'fr'
  return 'en'
}

function getBreadcrumbLabel(key, lang) {
  const labels = {
    home: { en: 'Home', es: 'Inicio', fr: 'Accueil' },
    classes: { en: 'Classes', es: 'Clases', fr: 'Cours' },
    trips: { en: 'Trips', es: 'Viajes', fr: 'Voyages' },
    stay: { en: 'Stay', es: 'Hospedaje', fr: 'Hébergement' },
    build: { en: 'Build Trip', es: 'Armar Viaje', fr: 'Créer Voyage' },
    blog: { en: 'Blog', es: 'Blog', fr: 'Blog' },
    faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ' },
    contact: { en: 'Contact', es: 'Contacto', fr: 'Contact' },
    reviews: { en: 'Reviews', es: 'Reseñas', fr: 'Avis' },
    waves: { en: 'Waves & Wind', es: 'Olas & Viento', fr: 'Vagues & Vent' },
    kitesurfLessons: { en: 'Kitesurf Lessons', es: 'Clases de Kitesurf', fr: 'Cours de Kitesurf' },
    wingfoilLessons: { en: 'Wingfoil Lessons', es: 'Clases de Wingfoil', fr: 'Cours de Wingfoil' },
    waveRiding: { en: 'Wave Riding', es: 'Wave Riding', fr: 'Wave Riding' },
    tripsDownwinds: { en: 'Trips & Downwinders', es: 'Viajes & Downwinds', fr: 'Voyages & Downwinds' },
    rentGear: { en: 'Gear Rental', es: 'Alquiler de Equipo', fr: 'Location de Matériel' },
    surfSup: { en: 'Surf & SUP', es: 'Surf & SUP', fr: 'Surf & SUP' },
  }
  return labels[key]?.[lang] || labels[key]?.en || key
}

function buildMetaTags(routePath, meta) {
  const url = toSiteUrl(routePath)
  const image = toSiteUrl(meta.image || DEFAULT_SEO.image)
  const description = meta.description || DEFAULT_SEO.description
  const title = meta.title || DEFAULT_SEO.title
  const hreflang = meta.hreflang || DEFAULT_SEO.hreflang

  const alternateTags = Object.entries({
    en: hreflang.en,
    es: hreflang.es,
    fr: hreflang.fr,
    'x-default': hreflang.default,
  })
    .filter(([, href]) => Boolean(href))
    .map(
      ([lang, href]) =>
        `  <link rel="alternate" hreflang="${escapeHtml(lang)}" href="${escapeHtml(toSiteUrl(href))}" />`,
    )
    .join('\n')

  return [
    `  <title>${escapeHtml(title)}</title>`,
    `  <meta name="description" content="${escapeHtml(description)}" />`,
    `  <link rel="canonical" href="${escapeHtml(url)}" />`,
    alternateTags,
    `  <meta property="og:type" content="${meta.type || 'website'}" />`,
    `  <meta property="og:title" content="${escapeHtml(title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(description)}" />`,
    `  <meta property="og:image" content="${escapeHtml(image)}" />`,
    `  <meta property="og:image:secure_url" content="${escapeHtml(image)}" />`,
    `  <meta property="og:image:type" content="image/webp" />`,
    `  <meta property="og:url" content="${escapeHtml(url)}" />`,
    `  <meta property="og:site_name" content="Mancora Kite Club" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `  <meta name="twitter:image" content="${escapeHtml(image)}" />`,
  ]
    .filter(Boolean)
    .join('\n')
}

function injectMetaAndSchemas(html, routePath, meta, metaKey = '', post = null) {
  const cleaned = removeManagedTags(html)
  const metaTags = buildMetaTags(routePath, meta)
  
  // First inject head meta tags
  let withMeta = cleaned.replace('</head>', `${metaTags}\n</head>`)
  
  // Then inject JSON-LD schemas
  const lang = getLangFromPath(routePath)
  const schemaScripts = []
  
  const addSchema = (schemaObj, type, serviceKey = '', postSlug = '') => {
    if (!schemaObj) return
    const id = `schema-org-${type}${serviceKey ? `-${serviceKey}` : ''}${postSlug ? `-${postSlug}` : ''}`
    schemaScripts.push(`  <script type="application/ld+json" id="${id}">${JSON.stringify(schemaObj)}</script>`)
  }

  // 1. Home
  if (metaKey === 'home' || routePath === '/' || routePath === '/esp/home' || routePath === '/fr/home') {
    addSchema(getLocalBusinessSchema(lang), 'LocalBusiness')
    const breadcrumbs = [{ name: getBreadcrumbLabel('home', lang), path: routePath }]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }
  // 2. Classes (all courses)
  else if (metaKey === 'classes') {
    addSchema(getCourseSchema(lang, 'kitesurfLessons'), 'Course', 'kitesurfLessons')
    addSchema(getCourseSchema(lang, 'wingfoilLessons'), 'Course', 'wingfoilLessons')
    addSchema(getCourseSchema(lang, 'waveRiding'), 'Course', 'waveRiding')
    addSchema(getCourseSchema(lang, 'surfSup'), 'Course', 'surfSup')
    addSchema(getCourseSchema(lang, 'rentGear'), 'Course', 'rentGear')
    addSchema(getCourseSchema(lang, 'tripsDownwinds'), 'Course', 'tripsDownwinds')
    
    const breadcrumbs = [
      { name: getBreadcrumbLabel('home', lang), path: lang === 'en' ? '/home' : `/${lang}/home` },
      { name: getBreadcrumbLabel('classes', lang), path: routePath }
    ]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }
  // 3. Service pages
  else if (['kitesurfLessons', 'wingfoilLessons', 'waveRiding', 'tripsDownwinds', 'rentGear', 'surfSup'].includes(metaKey)) {
    addSchema(getCourseSchema(lang, metaKey), 'Course', metaKey)
    const breadcrumbs = [
      { name: getBreadcrumbLabel('home', lang), path: lang === 'en' ? '/home' : `/${lang}/home` },
      { name: getBreadcrumbLabel('classes', lang), path: lang === 'en' ? '/classes' : `/${lang}/classes` },
      { name: getBreadcrumbLabel(metaKey, lang), path: routePath }
    ]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }
  // 4. FAQ
  else if (metaKey === 'faq') {
    addSchema(getFAQPageSchema(lang), 'FAQPage')
    const breadcrumbs = [
      { name: getBreadcrumbLabel('home', lang), path: lang === 'en' ? '/home' : `/${lang}/home` },
      { name: getBreadcrumbLabel('faq', lang), path: routePath }
    ]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }
  // 5. Blog Post
  else if (post) {
    addSchema(getBlogPostingSchema(lang, post), 'BlogPosting', '', post.slug)
    const breadcrumbs = [
      { name: getBreadcrumbLabel('home', lang), path: lang === 'en' ? '/home' : `/${lang}/home` },
      { name: getBreadcrumbLabel('blog', lang), path: lang === 'en' ? '/blog' : `/${lang}/blog` },
      { name: post.title, path: routePath }
    ]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }
  // 6. Generic breadcrumbs for other pages
  else if (metaKey) {
    const breadcrumbs = [
      { name: getBreadcrumbLabel('home', lang), path: lang === 'en' ? '/home' : `/${lang}/home` },
      { name: getBreadcrumbLabel(metaKey, lang), path: routePath }
    ]
    addSchema(getBreadcrumbListSchema(lang, breadcrumbs), 'BreadcrumbList')
  }

  if (schemaScripts.length > 0) {
    withMeta = withMeta.replace('</head>', `${schemaScripts.join('\n')}\n</head>`)
  }

  return withMeta
}

function toOutputIndex(routePath) {
  if (routePath === '/') return indexPath
  return path.join(distRoot, routePath.replace(/^\/+/, ''), 'index.html')
}

async function writeRouteHtml(baseHtml, routePath, meta, metaKey = '', post = null) {
  const outputPath = toOutputIndex(routePath)
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, injectMetaAndSchemas(baseHtml, routePath, meta, metaKey, post), 'utf8')
}

const baseHtml = await readFile(indexPath, 'utf8')

// 1. Generate root path
await writeRouteHtml(baseHtml, '/', DEFAULT_SEO, 'home')

// 2. Generate static routes defined in PAGE_SEO
let generatedCount = 1
for (const [key, meta] of Object.entries(PAGE_SEO)) {
  for (const routePath of meta.paths) {
    await writeRouteHtml(baseHtml, routePath, meta, key)
    generatedCount++
  }
}

// 3. Generate dynamic blog post routes in all 3 language variants
for (const post of premiumBlogPosts) {
  const langPaths = {
    en: `/blog/${post.slug}`,
    es: `/esp/blog/${post.slug}`,
    fr: `/fr/blog/${post.slug}`,
  }

  for (const [lang, routePath] of Object.entries(langPaths)) {
    const meta = {
      title: post.seoTitle || post.title,
      description: post.description || post.excerpt || '',
      image: post.heroImage || post.image || '/og/blog.webp',
      type: 'article',
      hreflang: {
        en: langPaths.en,
        es: langPaths.es,
        fr: langPaths.fr,
        default: langPaths.en,
      }
    }
    
    await writeRouteHtml(baseHtml, routePath, meta, '', post)
    generatedCount++
  }
}

console.log(`Generated Open Graph HTML and Schema.org scripts for ${generatedCount} routes (including service landing pages and blog posts).`)
