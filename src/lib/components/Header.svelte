<script>
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { currentPath } from '../router.svelte.js'
  import { phone, phoneHref, clientLoginHref, logo } from '../site.js'

  let headerScrolled = $state(false)
  let mobileMenuOpen = $state(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const path = $derived(currentPath())
  const solid = $derived(headerScrolled || mobileMenuOpen)

  $effect(() => {
    // Close the mobile menu whenever the route changes.
    void path
    mobileMenuOpen = false
  })

  onMount(() => {
    const onScroll = () => {
      headerScrolled = window.scrollY > 60
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  })
</script>

<header
  class="fixed top-0 z-50 w-full transition-all duration-500
    {solid ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-stone-200' : ''}"
>
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
    <a href="/" class="group flex items-center gap-4 transition-transform duration-300 hover:-translate-y-0.5">
      <img src={logo} alt="Sams Lawn Care logo" class="h-12 w-auto transition-all duration-300 group-hover:scale-[1.03]" />
      <span
        class="hidden text-base font-extrabold tracking-tight whitespace-nowrap uppercase transition-colors sm:inline md:text-lg
          {solid ? 'text-stone-900' : 'text-white'}"
      >
        Sams
        <span class={solid ? 'text-moss-600' : 'text-moss-300'}>Lawn Care</span>
      </span>
    </a>

    <nav class="hidden items-center gap-10 lg:flex">
      {#each navLinks as link}
        <a
          href={link.href}
          aria-current={path === link.href ? 'page' : undefined}
          class="nav-link text-base font-semibold transition-all duration-300 hover:-translate-y-0.5
            {solid
              ? path === link.href
                ? 'text-moss-700'
                : 'text-stone-600 hover:text-moss-700'
              : path === link.href
                ? 'text-white'
                : 'text-white/85 hover:text-white'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2.5 md:gap-3">
      <a
        href={clientLoginHref}
        target="_blank"
        rel="noreferrer"
        class="btn-lift hidden h-12 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-all lg:inline-flex
          {solid
            ? 'border border-stone-300/70 bg-white text-stone-800 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl'
            : 'border border-white/22 bg-white/10 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/20 hover:shadow-xl'}"
      >
        Client Login
      </a>
      <a
        href={phoneHref}
        class="btn-lift inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold whitespace-nowrap shadow-xl transition-all
          {solid
            ? 'bg-moss-700 text-white hover:bg-moss-800 hover:shadow-2xl hover:-translate-y-0.5'
            : 'border border-white/22 bg-white/15 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-0.5'}"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{phone}</span>
      </a>

      <button
        type="button"
        class="inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors lg:hidden
          {solid ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/15'}"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        {#if mobileMenuOpen}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <nav
      transition:slide={{ duration: 220 }}
      class="border-t border-stone-200 bg-white/95 px-6 pb-6 pt-2 backdrop-blur-md lg:hidden"
    >
      <ul class="divide-y divide-stone-100">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              aria-current={path === link.href ? 'page' : undefined}
              class="block py-3.5 text-base font-semibold transition-colors
                {path === link.href ? 'text-moss-700' : 'text-stone-700 hover:text-moss-700'}"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <a
        href={clientLoginHref}
        target="_blank"
        rel="noreferrer"
        class="mt-4 inline-flex h-11 items-center rounded-full border border-stone-300/70 bg-white px-5 text-sm font-semibold text-stone-800 shadow-sm transition-colors hover:border-moss-500/70 hover:text-moss-700"
      >
        Client Login
      </a>
    </nav>
  {/if}
</header>
