<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { reveal } from './lib/reveal.js'

  let headerScrolled = $state(false)
  let servicesImageIndex = $state(0)
  let heroImageIndex = $state(0)

  onMount(() => {
    const onScroll = () => { headerScrolled = window.scrollY > 60 }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let heroGalleryInterval
    if (!prefersReducedMotion && heroBackgrounds.length > 1) {
      heroGalleryInterval = window.setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroBackgrounds.length
      }, 5500)
    }

    const servicesGalleryInterval = window.setInterval(() => {
      servicesImageIndex = (servicesImageIndex + 1) % serviceShowcase.length
    }, 4500)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (heroGalleryInterval) {
        window.clearInterval(heroGalleryInterval)
      }
      window.clearInterval(servicesGalleryInterval)
    }
  })

  const phone = '304-667-4480'
  const phoneHref = 'tel:+13046674480'
  const clientLoginHref =
    'https://clienthub.getjobber.com/client_hubs/a87c84a8-eb21-41a2-899f-d85c592e6d59/login/new?source=share_login'
  const email = 'Samslawncare7267@gmail.com'
  const facebookUrl = 'https://www.facebook.com/profile.php?id=100066570011620'
  const logo =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/6516b86f-5e45-4ef9-ece5-e00967afd500/public'
  const heroImage =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/46d0bfb0-088a-4ea6-ebf1-043e3cb31200/public'
  const heroServiceAreaMap =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d7308f5-ba64-48be-d233-0b3bc24e3300/public'
  const testimonialMowerImage =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/de51d073-be44-4fae-c654-7b0529ccee00/public'

  const gallery = [
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/74f5e255-f330-4238-93a2-874ce0499500/public',
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/942c057d-0b46-4d2b-fa43-aa6708239800/public',
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/4811f94d-1f83-4ba4-fb70-8c336ed1d800/public',
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/952c691d-1e48-4045-31ae-b6d37d4a7000/public',
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bab02907-bb02-4055-d7cb-c496a21df100/public',
  ]

  const heroBackgrounds = [
    heroImage,
    gallery[1],
    gallery[4],
  ]

  const services = [
    {
      title: 'Mowing',
      description:
        'Clean, consistent cuts on a schedule that works for you. Residential and commercial properties of every size.',
    },
    {
      title: 'Trimming & Edging',
      description:
        'Sharp lines along walkways, driveways, and beds, the finishing detail that sets a property apart.',
    },
    {
      title: 'Landscaping',
      description:
        'Bed design, planting, and cleanups that refresh your property and keep it looking its best all season.',
    },
    {
      title: 'Mulching',
      description:
        'Fresh mulch installation that protects your plants, defines your beds, and gives everything a clean, finished look.',
    },
    {
      title: 'Snow Removal',
      description:
        'Dependable winter service to keep your driveways and walkways clear and safe when the weather turns.',
    },
  ]

  const serviceShowcase = [
    {
      src: gallery[2],
      alt: 'Fresh mulch and landscaping bed by Sams Lawn Care',
      caption: 'Refined landscaping and mulch installs for a clean, finished look.',
    },
    {
      src: gallery[3],
      alt: 'Lawn maintenance work completed by Sams Lawn Care',
      caption: 'Consistent lawn maintenance that keeps curb appeal strong.',
    },
    {
      src: gallery[4],
      alt: 'Large maintained lawn by Sams Lawn Care',
      caption: 'Professional mowing patterns that stand out right away.',
    },
    {
      src: gallery[0],
      alt: 'Residential landscaping work by Sams Lawn Care',
      caption: 'Detailed bed work and trimming that makes properties pop.',
    },
  ]

  const nextServiceImage = () => {
    servicesImageIndex = (servicesImageIndex + 1) % serviceShowcase.length
  }

  const prevServiceImage = () => {
    servicesImageIndex = (servicesImageIndex - 1 + serviceShowcase.length) % serviceShowcase.length
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const googleLogo = 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
  const googleReviewsUrl = 'https://www.google.com/search?q=Sams+Lawn+Care+Lewisburg+WV'
  const testimonials = [
    {
      name: 'Merriweather Franklin',
      rating: '★★★★★',
      text: 'I have been using Sams Lawn Care for a few years now and they do a fantastic job! My lawn is always looking nice thanks to them. They also mulched all my flower beds so that they look pristine. It makes me and my neighbors happy! Highly recommend!',
    },
    {
      name: 'Eddie',
      rating: '★★★★★',
      text: 'Highly recommended and absolutely amazing to work with! Responds fast and goes above and beyond to help you accomplish what you are looking for! 10/10.',
    },
    {
      name: 'Jenny Curry',
      rating: '★★★★★',
      text: 'I have used Sams Lawn Care three times this winter due to the amount of snow and drifting I have on my driveway! Nick returns your calls and was able to come quickly and clean off my driveway and parking area at my home. If you are in need of snow removal in the winter or lawn care in the warmer months I would highly recommend!',
    },
  ]

  const grassBladeCount = 72
  const mowerLeadSeconds = 2.1
  const mowerVisibleSweepSeconds = 13.2
  const grassBlades = Array.from({ length: grassBladeCount }, (_, i) => {
    const ratio = i / (grassBladeCount - 1)
    const wave = Math.sin(i * 1.41)
    const sway = Math.cos(i * 0.92)
    const pass = mowerLeadSeconds + (ratio * mowerVisibleSweepSeconds)

    return {
      left: ratio * 100,
      height: 24 + (wave + 1) * 14 + (sway + 1) * 6,
      width: 1.3 + ((i % 5) * 0.27),
      rotate: -8 + sway * 10,
      opacity: 0.46 + ((i % 6) * 0.055),
      root: -10 + ((i * 17) % 13),
      pass,
      jump: 3.6 + ((i % 4) * 0.85) + ((wave + 1) * 0.7),
    }
  })
</script>

<div class="min-h-screen w-full max-w-full overflow-x-clip bg-white font-sans text-stone-900">

  <!-- ─── Header ─────────────────────────────────────────────────────────── -->
  <header
    class="fixed top-0 z-50 w-full transition-all duration-500
      {headerScrolled
        ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-stone-200'
        : ''}"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="#top" class="group flex items-center gap-4 transition-transform duration-300 hover:-translate-y-0.5">
        <img src={logo} alt="Sams Lawn Care logo" class="h-12 w-auto transition-all duration-300 group-hover:scale-[1.03]" />
        <span
          class="text-base font-extrabold tracking-tight uppercase transition-colors md:text-lg
            {headerScrolled ? 'text-stone-900' : 'text-white'}"
        >
          Sams
          <span class="{headerScrolled ? 'text-moss-600' : 'text-moss-300'}">Lawn Care</span>
        </span>
      </a>

      <nav class="hidden items-center gap-10 md:flex">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-link text-base font-semibold transition-all duration-300 hover:-translate-y-0.5
              {headerScrolled
                ? 'text-stone-600 hover:text-moss-700'
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
          class="btn-lift hidden h-12 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-all md:inline-flex
            {headerScrolled
              ? 'border border-stone-300/70 bg-white text-stone-800 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl'
              : 'border border-white/22 bg-white/10 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/20 hover:shadow-xl'}"
        >
          Client Login
        </a>
        <a
          href={phoneHref}
          class="btn-lift inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold shadow-xl transition-all
            {headerScrolled
              ? 'bg-moss-700 text-white hover:bg-moss-800 hover:shadow-2xl hover:-translate-y-0.5'
              : 'border border-white/22 bg-white/15 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-0.5'}"
        >
          <span class="text-base leading-none" aria-hidden="true">#</span>
          <span>{phone}</span>
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="overflow-x-clip">

    <!-- ─── Hero: full-bleed background ──────────────────────────────────── -->
    <section class="relative flex min-h-screen items-end overflow-hidden">
      {#each heroBackgrounds as image, i}
        <div
          class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out {i === heroImageIndex ? 'opacity-100' : 'opacity-0'}"
          style="background-image: url('{image}')"
        ></div>
      {/each}
      <div class="absolute inset-0 bg-gradient-to-t from-black/94 via-black/72 to-black/55"></div>
      <div class="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 via-black/20 to-transparent"></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32">
        <div class="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <div class="max-w-3xl">
            <h1
              class="mt-6 text-6xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              A lawn you&rsquo;ll love<br />coming home to.
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Lawn and landscaping services across the Greenbrier Valley and surrounding areas.
              Reliable. Affordable. Professional.
            </p>
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={phoneHref}
                class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-8 py-3.5 text-base font-semibold text-white shadow-2xl shadow-black/35 ring-1 ring-white/12 transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-[0_24px_45px_-18px_rgba(0,0,0,0.6)]"
              >
                Call for a free quote
              </a>
              <a
                href="#work"
                class="rounded-full border border-white/24 bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/45 hover:bg-white/15 hover:shadow-2xl"
              >
                See our work
              </a>
            </div>
          </div>

          <div class="hidden lg:block lg:justify-self-end">
            <img
              src={heroServiceAreaMap}
              alt="West Virginia county service area map"
              class="h-auto w-full max-w-[380px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Reviews ───────────────────────────────────────────────────── -->
    <section id="reviews" class="relative scroll-mt-24 overflow-x-clip bg-gradient-to-b from-moss-950 to-[#0f190c]">
      <div class="testimonial-grass pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
        <div class="testimonial-grass-base"></div>
        <div class="testimonial-grass-layer testimonial-grass-back">
          {#each grassBlades as blade, i}
            <span
              class="testimonial-blade testimonial-blade-back"
              style={`--blade-left: ${blade.left}%; --blade-root: ${blade.root - 4}px; --blade-height: ${blade.height * 0.84}px; --blade-width: ${blade.width}px; --blade-rotate: ${blade.rotate * 0.7}deg; --blade-opacity: ${blade.opacity * 0.72}; --blade-pass: ${blade.pass + 0.22}s; --blade-jump: ${blade.jump * 0.66}px; --blade-delay-offset: ${(i % 3) * 0.04}s;`}
            ></span>
          {/each}
        </div>
        <div class="testimonial-mower-clip">
          <div class="testimonial-mower-run">
            <div class="testimonial-mower-bump">
              <img
                src={testimonialMowerImage}
                alt=""
                aria-hidden="true"
                class="testimonial-mower"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div class="testimonial-grass-layer testimonial-grass-front">
          {#each grassBlades as blade, i}
            <span
              class="testimonial-blade testimonial-blade-front"
              style={`--blade-left: ${blade.left + (i % 2 === 0 ? -0.35 : 0.35)}%; --blade-root: ${blade.root}px; --blade-height: ${blade.height}px; --blade-width: ${blade.width + 0.4}px; --blade-rotate: ${blade.rotate}deg; --blade-opacity: ${blade.opacity}; --blade-pass: ${blade.pass}s; --blade-jump: ${blade.jump}px; --blade-delay-offset: ${(i % 4) * 0.035}s;`}
            ></span>
          {/each}
        </div>
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div use:reveal class="reveal flex flex-wrap items-center justify-between gap-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Homeowners trust Sams Lawn Care.
          </h2>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            <img src={googleLogo} alt="Google" class="h-5 w-auto" />
            Read all Google reviews
          </a>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          {#each testimonials as testimonial, i}
            <article
              use:reveal={{ delay: i * 90 }}
              class="reveal flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl shadow-black/25 backdrop-blur"
            >
              <p class="text-lg font-bold tracking-tight">{testimonial.name}</p>
              <p class="mt-2 text-base font-bold tracking-wide text-amber-300">{testimonial.rating}</p>
              <p class="mt-4 flex-1 leading-relaxed text-white/85">{testimonial.text}</p>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                class="mt-6 text-sm font-semibold text-moss-200 transition-colors hover:text-white"
              >
                Read more on Google
              </a>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── Services ──────────────────────────────────────────────────────── -->
    <section id="services" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal">
          <h2 class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything your property needs, season after season.
          </h2>
          <p class="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
            A complete outdoor care lineup for homes and properties across the Greenbrier Valley,
            delivered on schedule with detail-focused results.
          </p>
        </div>

        <div class="mt-14 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-moss-50/35 shadow-2xl shadow-stone-300/30">
          <div class="grid lg:grid-cols-[1fr_1.2fr]">
            <div use:reveal class="reveal relative min-h-[320px] lg:min-h-full">
              {#key servicesImageIndex}
                <img
                  src={serviceShowcase[servicesImageIndex].src}
                  alt={serviceShowcase[servicesImageIndex].alt}
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  in:fade={{ duration: 350 }}
                  out:fade={{ duration: 350 }}
                />
              {/key}
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"></div>
              <div class="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p class="max-w-sm text-2xl font-bold leading-tight text-white md:text-3xl">
                  {serviceShowcase[servicesImageIndex].caption}
                </p>
                <div class="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="rounded-full border border-white/22 bg-black/35 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-black/50"
                    onclick={prevServiceImage}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    class="rounded-full border border-white/22 bg-black/35 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-black/50"
                    onclick={nextServiceImage}
                  >
                    Next
                  </button>
                  <div class="ml-1 flex items-center gap-2">
                    {#each serviceShowcase as _, i}
                      <button
                        type="button"
                        aria-label={`View service image ${i + 1}`}
                        class="h-2.5 w-8 rounded-full transition-all {i === servicesImageIndex ? 'bg-white' : 'bg-white/35 hover:bg-white/60'}"
                        onclick={() => (servicesImageIndex = i)}
                      ></button>
                    {/each}
                  </div>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-10">
              <div class="divide-y divide-stone-200">
                {#each services as service, i}
                  <div
                    use:reveal={{ delay: i * 70 }}
                    class="reveal group py-6 transition-all first:pt-0 last:pb-0 hover:translate-x-1"
                  >
                    <div class="flex items-start gap-4">
                      <span class="mt-0.5 shrink-0 text-moss-600 transition-colors group-hover:text-moss-800">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-7 w-7" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.35 7.38a1 1 0 0 1-1.42-.003l-3.643-3.676a1 1 0 0 1 1.42-1.407l2.934 2.962 6.643-6.67a1 1 0 0 1 1.413 0Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <h3 class="text-2xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-moss-700">
                          {service.title}
                        </h3>
                        <p class="mt-3 max-w-xl text-base leading-relaxed text-stone-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>

              <div use:reveal={{ delay: services.length * 70 }} class="reveal mt-8 rounded-2xl border border-moss-200 bg-moss-50/70 p-6">
                <p class="text-base leading-relaxed text-stone-700">
                  Have something else in mind? If it&rsquo;s on your property, just ask.
                </p>
                <a
                  href={phoneHref}
                  class="mt-5 inline-block w-fit rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
                >
                  Get in touch today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Weekly Service full-bleed background image ─────────────────── -->
    <section
      class="relative bg-cover bg-center py-32 md:py-48"
      style="background-image: url('{gallery[1]}')"
    >
      <div class="absolute inset-0 bg-stone-950/78"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <div class="grid gap-14 md:grid-cols-2 md:gap-20">
          <div use:reveal class="reveal">
            <h2
              class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              A great-looking lawn without the time commitment.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              We keep your property clean, consistent, and cared for all season, so you can
              spend your weekends enjoying it instead of working on it.
            </p>
          </div>

          <div use:reveal={{ delay: 150 }} class="reveal flex flex-col justify-center">
            <ul class="divide-y divide-white/10 border-y border-white/10 bg-white/5 px-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <li class="py-6 text-xl font-semibold text-white">Consistent weekly service</li>
              <li class="py-6 text-xl font-semibold text-white">Attention to detail</li>
              <li class="py-6 text-xl font-semibold text-white">Professional, dependable crew</li>
            </ul>
            <p class="mt-6 text-sm text-moss-300/75">
              Limited availability on our weekly routes, get on the schedule today.
            </p>
            <a
              href={phoneHref}
              class="mt-8 inline-block w-fit rounded-full bg-gradient-to-r from-white to-moss-100 px-7 py-3 text-base font-bold text-moss-950 shadow-2xl transition-all hover:-translate-y-1 hover:from-moss-50 hover:to-white hover:shadow-[0_24px_45px_-16px_rgba(0,0,0,0.6)]"
            >
              Call or text {phone}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Work Gallery ───────────────────────────────────────────────────── -->
    <section id="work" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              The results speak for themselves.
            </h2>
          </div>
          <p class="max-w-sm text-base leading-relaxed text-stone-500">
            Mowing, landscaping, and mulch installs from around the Greenbrier Valley.
          </p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each gallery as image, i}
            <div
              use:reveal={{ delay: i * 55 }}
              class="reveal overflow-hidden rounded-2xl shadow-lg shadow-stone-400/30 transition-shadow duration-500 hover:shadow-2xl hover:shadow-stone-500/35
                {i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}"
            >
              <img
                src={image}
                alt="Lawn care and landscaping work by Sams Lawn Care"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]
                  {i === 0 ? 'aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'}"
                loading="lazy"
              />
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── About: full split with background image ───────────────────────── -->
    <section id="about" class="scroll-mt-20 overflow-hidden">
      <div class="grid lg:grid-cols-2">
        <!-- Image half -->
        <div class="relative min-h-[420px] lg:min-h-0">
          <img
            src={gallery[3]}
            alt="Sams Lawn Care team at work in the Greenbrier Valley"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-50/10"></div>
        </div>

        <!-- Text half -->
        <div class="bg-stone-50 px-8 py-16 md:px-14 md:py-24 lg:py-32">
          <div use:reveal class="reveal">
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Local, hands-on, and proud of every property we touch.
            </h2>
          </div>

          <div use:reveal={{ delay: 120 }} class="reveal mt-8 space-y-5 leading-relaxed text-stone-600">
            <p>
              Sams Lawn Care is based in Lewisburg, West Virginia, serving homeowners and
              businesses across the Greenbrier Valley and surrounding areas. Let us take care of
              your lawn so you can enjoy it.
            </p>
            <p>
              From weekly mowing routes to full landscaping projects, we treat every property like
              it&rsquo;s our own, showing up on time, doing the job right, and leaving it
              better than we found it.
            </p>
            <p class="font-bold text-stone-900">Reliable. Affordable. Professional.</p>
          </div>

          <div use:reveal={{ delay: 210 }} class="reveal mt-10 flex flex-wrap gap-4">
            <a
              href={phoneHref}
              class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-7 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              class="rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
            >
              View services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Contact ───────────────────────────────────────────────────────── -->
    <section id="contact" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-start">

          <!-- Left: headline + photo -->
          <div use:reveal class="reveal lg:sticky lg:top-28 self-start">
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Call or message today for a free quote.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              Tell us about your property and what you&rsquo;re looking for, we&rsquo;ll
              get back to you with a straightforward, no-pressure quote.
            </p>
            <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-moss-200 bg-moss-50 px-4 py-2.5 shadow-sm">
              <img src={logo} alt="Sams Lawn Care logo" class="h-7 w-auto" />
              <div>
                <p class="text-sm font-extrabold tracking-tight text-stone-900">Sams Lawn Care</p>
                <p class="text-xs font-semibold text-moss-700">Lewisburg, WV</p>
              </div>
            </div>
            <div class="relative mt-8 overflow-hidden rounded-2xl shadow-xl shadow-stone-400/35">
              <img
                src={gallery[4]}
                alt="Greenbrier Valley lawn care service area"
                class="w-full aspect-[5/4] object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-5">
                <div class="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-black/35 px-4 py-2 backdrop-blur-sm">
                  <img src={logo} alt="Sams Lawn Care logo" class="h-6 w-auto" />
                  <p class="text-sm font-semibold text-white">Sams Lawn Care</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: contact info + CTA box -->
          <div use:reveal={{ delay: 130 }} class="reveal flex flex-col gap-5">
            <div class="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-300/30">
              <div class="grid grid-cols-[5.5rem_1fr] items-center gap-4 px-6 py-5">
                <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Phone</p>
                <a
                  href={phoneHref}
                  class="text-xl font-bold tracking-tight transition-colors hover:text-moss-700"
                >
                  {phone}
                </a>
              </div>
              <div class="grid grid-cols-[5.5rem_1fr] items-center gap-4 px-6 py-5">
                <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Email</p>
                <a
                  href="mailto:{email}"
                  class="break-all text-base font-semibold transition-colors hover:text-moss-700"
                >
                  {email}
                </a>
              </div>
              <div class="grid grid-cols-[5.5rem_1fr] items-center gap-4 px-6 py-5">
                <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Area</p>
                <p class="text-base font-semibold">
                  Lewisburg, WV, Greenbrier Valley &amp; surrounding areas
                </p>
              </div>
              <div class="grid grid-cols-[5.5rem_1fr] items-center gap-4 px-6 py-5">
                <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Facebook</p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-base font-semibold transition-colors hover:text-moss-700"
                >
                  Sams Lawn Care
                </a>
              </div>
            </div>

            <form class="rounded-2xl bg-moss-950 px-8 py-9 text-white shadow-2xl shadow-moss-950/60">
              <p class="text-sm font-medium text-moss-300">Request an assessment</p>
              <p class="mt-2 text-2xl font-extrabold tracking-tight">Tell us about the work you need.</p>
              <p class="mt-3 text-sm leading-relaxed text-moss-200/65">
                Complete as much as you can and we&rsquo;ll follow up to confirm details.
              </p>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Contact details</legend>
                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">First name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Last name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>

                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Company name</span>
                    <input
                      type="text"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>

                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Phone</span>
                  <input
                    type="tel"
                    required
                    placeholder="(___) ___-____"
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                  />
                </label>
                <p class="mt-3 text-xs leading-relaxed text-moss-200/70">
                  By providing your phone number, you agree to receive Visit Reminders and other
                  transactional text messages (SMS) from Sams Lawn Care. You can unsubscribe at
                  anytime by replying STOP. Message and data rates may apply. Message frequency
                  varies. Reply HELP for help or STOP to cancel.
                </p>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Address</legend>
                <div class="mt-4 space-y-4">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Street address</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Unit, apartment, suite, etc. (optional)</span>
                    <input
                      type="text"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>

                <div class="mt-4 grid gap-4 sm:grid-cols-3">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">City</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">State</span>
                    <select
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                    >
                      <option value="" selected disabled>Select</option>
                      <option>WV</option>
                      <option>VA</option>
                      <option>NC</option>
                      <option>TN</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">ZIP Code</span>
                    <input
                      type="text"
                      required
                      inputmode="numeric"
                      maxlength="10"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Service details</legend>
                <p class="mt-2 text-xs text-moss-200/70">Please provide as much information as you can.</p>
                <p class="mt-1 text-xs font-semibold text-moss-300">Required</p>
                <label class="mt-3 block">
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe the service you need and any property details."
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                  ></textarea>
                </label>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Your availability</legend>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Which day would be best for an assessment of the work?</span>
                  <span class="mb-2 block text-xs font-semibold text-moss-300">Required</span>
                  <input
                    type="date"
                    required
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                  />
                </label>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What is another day that works for you?</span>
                  <input
                    type="date"
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                  />
                </label>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What are your preferred arrival times?</span>
                  <textarea
                    rows="3"
                    placeholder="Example: Weekdays after 3 PM, Saturday mornings."
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                  ></textarea>
                </label>
              </fieldset>

              <button
                type="button"
                class="mt-7 inline-block rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl"
              >
                Send request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ─── Footer ────────────────────────────────────────────────────────── -->
  <footer class="bg-moss-950 text-white">
    <div class="mx-auto max-w-7xl px-6 pt-18 pb-10">
      <div class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready for a better-looking lawn?
            </p>
            <p class="mt-3 max-w-2xl text-base leading-relaxed text-moss-100/75">
              Weekly maintenance, detail work, landscaping, and seasonal service from a local crew
              that shows up and gets it done right.
            </p>
          </div>
          <a
            href={phoneHref}
            class="rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl"
          >
            Call {phone}
          </a>
        </div>
      </div>

      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <img src={logo} alt="Sams Lawn Care logo" class="h-10 w-auto" />
            <span class="text-base font-extrabold tracking-tight uppercase">Sams Lawn Care</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-moss-200/60">
            Lawn and landscaping services in Lewisburg, WV and throughout the Greenbrier Valley.
            Reliable. Affordable. Professional.
          </p>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Services</p>
          <ul class="space-y-2.5">
            {#each services as service}
              <li class="text-sm text-moss-200/65">{service.title}</li>
            {/each}
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Company</p>
          <ul class="space-y-2.5">
            <li><a href="#services" class="text-sm text-moss-200/65 transition-colors hover:text-white">Services</a></li>
            <li><a href="#reviews" class="text-sm text-moss-200/65 transition-colors hover:text-white">Reviews</a></li>
            <li><a href="#work" class="text-sm text-moss-200/65 transition-colors hover:text-white">Recent Work</a></li>
            <li><a href="#contact" class="text-sm text-moss-200/65 transition-colors hover:text-white">Get a Quote</a></li>
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Contact</p>
          <div class="space-y-2.5">
            <a
              href={phoneHref}
              class="block text-sm font-semibold text-moss-200/80 transition-colors hover:text-white"
            >
              {phone}
            </a>
            <a
              href="mailto:{email}"
              class="block break-all text-sm font-semibold text-moss-200/80 transition-colors hover:text-white"
            >
              {email}
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm font-semibold text-moss-200/80 transition-colors hover:text-white"
            >
              Facebook
            </a>
            <p class="text-sm text-moss-200/55">Lewisburg, West Virginia</p>
            <p class="text-sm text-moss-200/55">Greenbrier Valley and surrounding areas</p>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-moss-300/45 sm:flex-row"
      >
        <p>&copy; {new Date().getFullYear()} Sams Lawn Care. All rights reserved.</p>
        <p>Great service. Better lawns.</p>
      </div>
    </div>
  </footer>

</div>

<style>
  .testimonial-grass {
    top: -86px;
    z-index: 20;
    height: 98px;
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    overflow-y: visible;
  }

  .testimonial-mower-clip {
    position: absolute;
    inset-inline: 0;
    bottom: -10px;
    height: 180px;
    z-index: 2;
    overflow-x: clip;
    overflow-y: visible;
    container-type: inline-size;
    pointer-events: none;
  }

  .testimonial-grass-base {
    position: absolute;
    inset-inline: 0;
    bottom: -16px;
    height: 44px;
    background: linear-gradient(
      to top,
      rgba(11, 21, 10, 0.86) 0%,
      rgba(13, 28, 12, 0.64) 45%,
      rgba(22, 45, 18, 0) 100%
    );
    filter: blur(0.7px);
    z-index: 0;
  }

  .testimonial-grass-layer {
    position: absolute;
    inset-inline: 0;
    bottom: -2px;
    height: 92px;
  }

  .testimonial-grass-back {
    filter: saturate(0.95);
    z-index: 1;
  }

  .testimonial-grass-front {
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.22));
    z-index: 3;
  }

  .testimonial-mower-run {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    animation: testimonial-mower-drive 18s linear infinite;
  }

  .testimonial-mower-bump {
    animation: testimonial-mower-bump-track 18s ease-in-out infinite;
    will-change: transform;
  }

  .testimonial-mower {
    width: clamp(160px, 21vw, 260px);
    height: auto;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.35));
    animation: testimonial-mower-bob 1.5s ease-in-out infinite;
  }

  .testimonial-blade {
    position: absolute;
    left: var(--blade-left);
    bottom: var(--blade-root);
    height: var(--blade-height);
    width: var(--blade-width);
    opacity: var(--blade-opacity);
    border-radius: 999px 999px 0 0;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(var(--blade-rotate));
    will-change: height, bottom;
  }

  .testimonial-blade-back {
    background: linear-gradient(
      to top,
      rgba(20, 45, 19, 0.96) 0%,
      rgba(45, 88, 38, 0.58) 68%,
      rgba(92, 148, 76, 0) 100%
    );
    animation: testimonial-grass-pop-back 18s linear infinite;
    animation-delay: calc(var(--blade-pass) - 18s + var(--blade-delay-offset));
  }

  .testimonial-blade-front {
    background: linear-gradient(
      to top,
      rgba(22, 56, 22, 0.98) 0%,
      rgba(56, 117, 47, 0.62) 66%,
      rgba(118, 188, 96, 0) 100%
    );
    animation: testimonial-grass-pop-front 18s linear infinite;
    animation-delay: calc(var(--blade-pass) - 18s + var(--blade-delay-offset));
  }

  @keyframes testimonial-mower-drive {
    0% {
      transform: translateX(-120%);
    }

    100% {
      transform: translateX(calc(100cqw + 140%));
    }
  }

  @keyframes testimonial-mower-bob {
    0%,
    100% {
      transform: translateY(0) rotate(-0.25deg);
    }

    50% {
      transform: translateY(-1.5px) rotate(0.35deg);
    }
  }

  @keyframes testimonial-mower-bump-track {
    0%,
    9%,
    100% {
      transform: translateY(0) rotate(0deg);
    }

    13% {
      transform: translateY(-0.6px) rotate(0.18deg);
    }

    17% {
      transform: translateY(-3.1px) rotate(-0.42deg);
    }

    20% {
      transform: translateY(1.2px) rotate(0.36deg);
    }

    34% {
      transform: translateY(-0.5px) rotate(0.15deg);
    }

    39% {
      transform: translateY(-2.4px) rotate(-0.34deg);
    }

    42% {
      transform: translateY(0.8px) rotate(0.3deg);
    }

    58% {
      transform: translateY(-0.5px) rotate(0.2deg);
    }

    64% {
      transform: translateY(-2.8px) rotate(-0.38deg);
    }

    67% {
      transform: translateY(1px) rotate(0.28deg);
    }

    83% {
      transform: translateY(-2.2px) rotate(-0.3deg);
    }

    86% {
      transform: translateY(0.7px) rotate(0.24deg);
    }
  }

  @keyframes testimonial-grass-pop-front {
    0% {
      height: calc(var(--blade-height) + var(--blade-jump));
      bottom: calc(var(--blade-root) - 2px);
    }

    4% {
      height: calc(var(--blade-height) + (var(--blade-jump) * 0.45));
      bottom: calc(var(--blade-root) - 0.5px);
    }

    9%,
    100% {
      height: var(--blade-height);
      bottom: var(--blade-root);
    }
  }

  @keyframes testimonial-grass-pop-back {
    0% {
      height: calc(var(--blade-height) + var(--blade-jump));
      bottom: calc(var(--blade-root) - 1.5px);
    }

    6% {
      height: calc(var(--blade-height) + (var(--blade-jump) * 0.35));
      bottom: calc(var(--blade-root) - 0.3px);
    }

    10%,
    100% {
      height: var(--blade-height);
      bottom: var(--blade-root);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-service-map {
      animation: none;
    }

    .testimonial-mower-run,
    .testimonial-mower-bump,
    .testimonial-mower,
    .testimonial-blade-back,
    .testimonial-blade-front {
      animation: none;
    }
  }
</style>
