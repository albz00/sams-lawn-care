import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Set SITE_URL to your live domain when building for production, e.g.:
// SITE_URL=https://yourdomain.com npm run build
const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '')
const ogImage = siteUrl
  ? `${siteUrl}/og-image.png`
  : 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/46d0bfb0-088a-4ea6-ebf1-043e3cb31200/public'

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
        if (!siteUrl) return

        const dist = resolve('dist')
        writeFileSync(
          resolve(dist, 'robots.txt'),
          `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
        )
        writeFileSync(
          resolve(dist, 'sitemap.xml'),
          `<?xml version="1.0" charset="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`
        )
      },
    },
  ],
})
