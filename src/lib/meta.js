// Per-route document metadata for SEO on client-side navigation.

const defaults = {
  title: 'Sams Lawn Care | Lawn & Landscaping in Lewisburg, WV',
  description:
    'Sams Lawn Care provides lawn and landscaping services to the Greenbrier Valley and surrounding areas. Mowing, trimming, landscaping, mulching, snow removal and more. Call (304) 667-4480 for a free quote.',
}

export const routeMeta = {
  '/': defaults,
  '/services': {
    title: 'Services | Sams Lawn Care',
    description:
      'Mowing, trimming and edging, landscaping, mulching, and snow removal across the Greenbrier Valley. See everything Sams Lawn Care can do for your property.',
  },
  '/reviews': {
    title: 'Reviews | Sams Lawn Care',
    description:
      'Read what homeowners across Lewisburg, WV and the Greenbrier Valley say about Sams Lawn Care. Five-star mowing, landscaping, and snow removal service.',
  },
  '/work': {
    title: 'Our Work | Sams Lawn Care',
    description:
      'Recent mowing, landscaping, and mulch installs from around the Greenbrier Valley. See the results Sams Lawn Care delivers.',
  },
  '/about': {
    title: 'About | Sams Lawn Care',
    description:
      'Sams Lawn Care is a local, hands-on lawn and landscaping crew based in Lewisburg, West Virginia, serving the Greenbrier Valley and surrounding areas.',
  },
  '/contact': {
    title: 'Contact | Sams Lawn Care',
    description:
      'Call or message Sams Lawn Care at (304) 667-4480 for a free quote on mowing, landscaping, mulching, or snow removal in the Greenbrier Valley.',
  },
}

function setMetaContent(selector, content) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export function applyMeta(path) {
  const isKnownRoute = Boolean(routeMeta[path])
  const meta = routeMeta[path] || {
    title: 'Page Not Found | Sams Lawn Care',
    description: defaults.description,
  }

  document.title = meta.title
  setMetaContent('meta[name="robots"]', isKnownRoute ? 'index, follow' : 'noindex, nofollow')
  setMetaContent('meta[name="description"]', meta.description)
  setMetaContent('meta[property="og:title"]', meta.title)
  setMetaContent('meta[property="og:description"]', meta.description)
  setMetaContent('meta[name="twitter:title"]', meta.title)
  setMetaContent('meta[name="twitter:description"]', meta.description)

  /** @type {HTMLLinkElement | null} */
  const canonical = document.head.querySelector('link[rel="canonical"]')
  if (canonical) {
    const base = canonical.href ? new URL(canonical.href).origin : window.location.origin
    canonical.setAttribute('href', base + (path === '/' ? '/' : path))
  }

  const ogUrl = document.head.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    try {
      const base = new URL(ogUrl.getAttribute('content')).origin
      ogUrl.setAttribute('content', base + (path === '/' ? '/' : path))
    } catch {
      // og:url had no absolute URL to derive a base from; leave it as-is.
    }
  }
}
