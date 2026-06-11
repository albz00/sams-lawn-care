/** @param {HTMLElement} node */
export function reveal(node, { delay = 0, threshold = 0.12 } = {}) {
  node.style.setProperty('--reveal-delay', `${delay}ms`)

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (prefersReduced.matches) {
    node.classList.add('revealed')
    return {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('revealed')
          observer.unobserve(node)
        }
      }
    },
    { threshold, rootMargin: '0px 0px -6% 0px' },
  )

  observer.observe(node)

  return {
    destroy() {
      observer.disconnect()
    },
  }
}
