import { tick } from 'svelte'

// Minimal history-based client-side router for Svelte 5.

const routerState = $state({ path: normalize(window.location.pathname) })

function normalize(path) {
  if (!path) return '/'
  let clean = path.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export function currentPath() {
  return routerState.path
}

export function navigate(to, { replace = false } = {}) {
  const url = new URL(to, window.location.origin)
  const path = normalize(url.pathname)
  const routeChanged = path !== routerState.path
  const target = url.pathname + url.search + url.hash
  const current = window.location.pathname + window.location.search + window.location.hash
  const locationChanged = target !== current

  if (locationChanged) {
    if (replace) {
      window.history.replaceState({}, '', target)
    } else {
      window.history.pushState({}, '', target)
    }
  }

  if (routeChanged) {
    routerState.path = path
  }

  if (url.hash) {
    scrollToHash(url.hash)
  } else if (locationChanged) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

async function scrollToHash(hash) {
  // Route changes remount the page component. Wait for that DOM update before
  // looking up the destination element.
  await tick()
  requestAnimationFrame(() => {
    const el = document.getElementById(hash.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

export function initRouter() {
  const onPopState = () => {
    routerState.path = normalize(window.location.pathname)
    if (window.location.hash) {
      scrollToHash(window.location.hash)
    }
  }
  window.addEventListener('popstate', onPopState)

  if (window.location.hash) {
    scrollToHash(window.location.hash)
  }

  // Intercept clicks on same-origin links so navigation stays client-side.
  const onClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const anchor = event.target.closest('a')
    if (!anchor) return
    if (anchor.target && anchor.target !== '_self') return
    if (anchor.hasAttribute('download')) return

    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return

    const url = new URL(anchor.href, window.location.origin)
    if (url.origin !== window.location.origin) return

    event.preventDefault()

    navigate(url.pathname + url.search + url.hash)
  }
  document.addEventListener('click', onClick)

  return () => {
    window.removeEventListener('popstate', onPopState)
    document.removeEventListener('click', onClick)
  }
}
