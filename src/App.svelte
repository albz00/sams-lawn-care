<script>
  import { onMount } from 'svelte'
  import { currentPath, initRouter } from './lib/router.svelte.js'
  import { applyMeta } from './lib/meta.js'
  import Header from './lib/components/Header.svelte'
  import Footer from './lib/components/Footer.svelte'
  import Home from './lib/pages/Home.svelte'
  import Services from './lib/pages/Services.svelte'
  import Reviews from './lib/pages/Reviews.svelte'
  import Work from './lib/pages/Work.svelte'
  import About from './lib/pages/About.svelte'
  import Contact from './lib/pages/Contact.svelte'
  import NotFound from './lib/pages/NotFound.svelte'

  const routes = {
    '/': Home,
    '/services': Services,
    '/reviews': Reviews,
    '/work': Work,
    '/about': About,
    '/contact': Contact,
  }

  const path = $derived(currentPath())
  const Page = $derived(routes[path] ?? NotFound)

  $effect(() => {
    applyMeta(path)
  })

  onMount(() => initRouter())
</script>

<div class="min-h-screen w-full max-w-full overflow-x-clip bg-white font-sans text-stone-900">
  <Header />

  <main class="overflow-x-clip">
    {#key path}
      <Page />
    {/key}
  </main>

  <Footer />
</div>
