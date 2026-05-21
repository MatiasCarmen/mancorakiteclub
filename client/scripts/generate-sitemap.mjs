import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGE_SEO, SITE_URL } from '../src/config/seoMeta.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientRoot = path.resolve(__dirname, '..')
const distRoot = path.join(clientRoot, 'dist')
const sitemapPath = path.join(distRoot, 'sitemap.xml')

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

async function getBlogSlugs() {
  const slugs = new Set()

  try {
    // Read blogContent.js
    const blogContentPath = path.join(clientRoot, 'src/sections/blog/BlogLayout/blogContent.js')
    const blogContent = await readFile(blogContentPath, 'utf8')
    const slugRegex = /slug:\s*["']([^"']+)["']/g
    let match
    while ((match = slugRegex.exec(blogContent)) !== null) {
      slugs.add(match[1])
    }
  } catch (error) {
    console.error('Error reading blogContent.js for sitemap:', error)
  }

  try {
    // Read posts.js
    const postsPath = path.join(clientRoot, 'src/data/posts.js')
    const postsContent = await readFile(postsPath, 'utf8')
    const slugRegex = /slug:\s*["']([^"']+)["']/g
    let match
    while ((match = slugRegex.exec(postsContent)) !== null) {
      slugs.add(match[1])
    }

    // Also get aliases if any
    const aliasesRegex = /aliases:\s*\[([^\]]+)\]/g
    let aliasMatch
    while ((aliasMatch = aliasesRegex.exec(postsContent)) !== null) {
      const aliasList = aliasMatch[1]
        .split(',')
        .map((s) => s.trim().replace(/['"]/g, ''))
        .filter(Boolean)
      for (const alias of aliasList) {
        slugs.add(alias)
      }
    }
  } catch (error) {
    console.error('Error reading posts.js for sitemap:', error)
  }

  return Array.from(slugs)
}

async function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0]
  const blogSlugs = await getBlogSlugs()

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  // 1. Add static & service pages from PAGE_SEO
  for (const [key, meta] of Object.entries(PAGE_SEO)) {
    // Each page has multiple path versions (EN, ES, FR)
    // We want to generate a <url> entry for each language variant path
    const isHome = key === 'home'
    const priority = isHome ? '1.0' : meta.paths[0].startsWith('/services/') ? '0.9' : '0.8'
    const changefreq = isHome ? 'daily' : 'weekly'

    for (const routePath of meta.paths) {
      const fullUrl = `${SITE_URL}${routePath}`
      
      xml += '  <url>\n'
      xml += `    <loc>${escapeXml(fullUrl)}</loc>\n`
      xml += `    <lastmod>${currentDate}</lastmod>\n`
      xml += `    <changefreq>${changefreq}</changefreq>\n`
      xml += `    <priority>${priority}</priority>\n`
      
      // Hreflang alternates
      if (meta.hreflang) {
        if (meta.hreflang.en) {
          xml += `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(SITE_URL + meta.hreflang.en)}"/>\n`
        }
        if (meta.hreflang.es) {
          xml += `    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(SITE_URL + meta.hreflang.es)}"/>\n`
        }
        if (meta.hreflang.fr) {
          xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${escapeXml(SITE_URL + meta.hreflang.fr)}"/>\n`
        }
        if (meta.hreflang.default) {
          xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(SITE_URL + meta.hreflang.default)}"/>\n`
        }
      }
      xml += '  </url>\n'
    }
  }

  // 2. Add dynamic blog posts
  for (const slug of blogSlugs) {
    const priority = '0.7'
    const changefreq = 'monthly'

    const langPaths = {
      en: `/blog/${slug}`,
      es: `/esp/blog/${slug}`,
      fr: `/fr/blog/${slug}`,
    }

    // Add entries for EN, ES, FR versions of the blog post
    for (const [lang, relPath] of Object.entries(langPaths)) {
      const fullUrl = `${SITE_URL}${relPath}`

      xml += '  <url>\n'
      xml += `    <loc>${escapeXml(fullUrl)}</loc>\n`
      xml += `    <lastmod>${currentDate}</lastmod>\n`
      xml += `    <changefreq>${changefreq}</changefreq>\n`
      xml += `    <priority>${priority}</priority>\n`
      
      // Multilingual alternate links
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(SITE_URL + langPaths.en)}"/>\n`
      xml += `    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(SITE_URL + langPaths.es)}"/>\n`
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${escapeXml(SITE_URL + langPaths.fr)}"/>\n`
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(SITE_URL + langPaths.en)}"/>\n`
      
      xml += '  </url>\n'
    }
  }

  xml += '</urlset>\n'

  await writeFile(sitemapPath, xml, 'utf8')
  console.log(`Generated sitemap.xml with ${Object.keys(PAGE_SEO).length} pages and ${blogSlugs.length} blog posts in all language variants.`)
}

generateSitemap().catch(console.error)
