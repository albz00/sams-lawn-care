import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync, copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Live production domain. Override with SITE_URL when building for a different
// environment, e.g. SITE_URL=https://staging.example.com npm run build
const siteUrl = (process.env.SITE_URL || 'https://samslawncarewv.com').replace(/\/$/, '')

// The homepage screenshot lives at public/og-image.png. Open Graph images must be
// absolute URLs.
const ogImage = `${siteUrl}/og-image.png`

const routes = ['/', '/services', '/reviews', '/work', '/about', '/contact']

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    {
      name: 'html-seo-inject',
      transformIndexHtml(html) {
        let result = html.replaceAll('%OG_IMAGE%', ogImage)

        if (siteUrl) {
          result = result.replaceAll('%SITE_URL%', siteUrl)
        } else {
          result = result.replace(/\s*<link rel="canonical"[^>]*>\n?/g, '')
          result = result.replaceAll('%SITE_URL%', '')
          result = result.replace(/\s*<meta property="og:url"[^>]*>\n?/g, '')
        }

        return result
      },
      closeBundle() {
        const dist = resolve('dist')

        // SPA fallback so deep links like /services resolve on static hosts.
        // _redirects covers Netlify and Cloudflare Pages; 404.html covers GitHub Pages.
        writeFileSync(resolve(dist, '_redirects'), '/*    /index.html   200\n')
        const indexPath = resolve(dist, 'index.html')
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, resolve(dist, '404.html'))
        }

        if (!siteUrl) return

        writeFileSync(
          resolve(dist, 'robots.txt'),
          [
            '# https://www.robotstxt.org/robotstxt.html',
            'User-agent: *',
            'Allow: /',
            '',
            '# Block known bad/aggressive scrapers',
            'User-agent: AhrefsBot',
            'Disallow: /',
            '',
            'User-agent: SemrushBot',
            'Disallow: /',
            '',
            'User-agent: MJ12bot',
            'Disallow: /',
            '',
            `Sitemap: ${siteUrl}/sitemap.xml`,
            '',
          ].join('\n')
        )

        const lastmod = new Date().toISOString().slice(0, 10)
        const urlEntries = routes
          .map(
            (route) =>
              `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
          )
          .join('\n')
        writeFileSync(
          resolve(dist, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
        )

        // llms.txt — structured summary for AI crawlers/assistants.
        // Spec: https://llmstxt.org/
        const pageDescriptions = {
          '/': 'Overview of Sams Lawn Care, service highlights, and service area across the Greenbrier Valley.',
          '/services':
            'Full list of services: mowing, trimming & edging, landscaping, mulching, snow removal, leaf removal, and field mowing.',
          '/reviews': 'Verified five-star customer reviews from homeowners and businesses across Lewisburg, WV.',
          '/work': 'Photo gallery of completed mowing, landscaping, mulching, and snow removal projects.',
          '/about': 'About Sams Lawn Care, a local, family-run lawn and landscaping crew based in Lewisburg, WV.',
          '/contact': 'Phone, email, hours, and free-quote request form for Sams Lawn Care.',
        }
        const routeLabels = {
          '/': 'Home',
          '/services': 'Services',
          '/reviews': 'Reviews',
          '/work': 'Our Work',
          '/about': 'About',
          '/contact': 'Contact',
        }
        const pageLines = routes
          .map((route) => `- [${routeLabels[route]}](${siteUrl}${route}): ${pageDescriptions[route]}`)
          .join('\n')
        writeFileSync(
          resolve(dist, 'llms.txt'),
          [
            '# Sams Lawn Care',
            '',
            '> Locally owned lawn care and landscaping company serving Lewisburg, West Virginia and the surrounding Greenbrier Valley. Services include mowing, trimming and edging, landscaping, mulching, snow removal, leaf removal, and field mowing for residential and commercial properties.',
            '',
            '- Location: Lewisburg, WV (serves the Greenbrier Valley, Ronceverte, White Sulphur Springs, and Fairlea)',
            '- Phone: (304) 667-4480',
            '- Email: Samslawncare7267@gmail.com',
            '- Hours: Monday–Saturday, 7 AM – 7 PM (closed Sunday)',
            '',
            '## Pages',
            '',
            pageLines,
            '',
            '## Services',
            '',
            '- Mowing — weekly and bi-weekly routes for residential and commercial properties',
            '- Trimming & Edging — crisp edges along walkways, driveways, and beds',
            '- Landscaping — bed design, planting, and seasonal cleanups',
            '- Mulching — fresh mulch delivery and installation',
            '- Snow Removal — driveway/walkway clearing and de-icing',
            '- Leaf Removal — truck-mounted vacuum fall cleanups',
            '- Field Mowing — large-area and hillside mowing with heavy-duty equipment',
            '',
          ].join('\n')
        )
      },
    },
  ],
})
