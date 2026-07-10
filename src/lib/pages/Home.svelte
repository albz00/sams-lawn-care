<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { reveal } from '../reveal.js'
  import TestimonialsSection from '../components/TestimonialsSection.svelte'
  import ContactForm from '../components/ContactForm.svelte'
  import {
    owner,
    phone,
    phoneHref,
    email,
    facebookUrl,
    logo,
    heroImage,
    heroServiceAreaMap,
    gallery,
    homeGallery,
    services,
    serviceShowcase,
  } from '../site.js'

  let servicesImageIndex = $state(0)
  let heroImageIndex = $state(0)

  const heroBackgrounds = [
    heroImage,
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a2200f8d-6bab-4d82-79cb-58ff1d229900/public',
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/64103dd0-0779-428e-6c4b-35d45d6a0500/public',
    gallery[4],
  ]
  const galleryAlts = [
    'Landscaping beds refreshed by Sams Lawn Care',
    'Well-maintained lawn by Sams Lawn Care',
    'Fresh mulch installation by Sams Lawn Care',
    'Precisely trimmed and edged property by Sams Lawn Care',
    'Large lawn with clean mowing patterns by Sams Lawn Care',
  ]

  onMount(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let heroGalleryInterval
    if (!prefersReducedMotion && heroBackgrounds.length > 1) {
      heroGalleryInterval = window.setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroBackgrounds.length
      }, 5500)
    }

    let servicesGalleryInterval
    if (!prefersReducedMotion && serviceShowcase.length > 1) {
      servicesGalleryInterval = window.setInterval(() => {
        servicesImageIndex = (servicesImageIndex + 1) % serviceShowcase.length
      }, 4500)
    }

    return () => {
      if (heroGalleryInterval) {
        window.clearInterval(heroGalleryInterval)
      }
      if (servicesGalleryInterval) {
        window.clearInterval(servicesGalleryInterval)
      }
    }
  })

  const nextServiceImage = () => {
    servicesImageIndex = (servicesImageIndex + 1) % serviceShowcase.length
  }

  const prevServiceImage = () => {
    servicesImageIndex = (servicesImageIndex - 1 + serviceShowcase.length) % serviceShowcase.length
  }
</script>

<!-- Hero: full-bleed background -->
<section class="relative flex min-h-screen items-center overflow-hidden">
  {#each heroBackgrounds as image, i}
    <img
      src={image}
      alt=""
      class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out {i === heroImageIndex ? 'opacity-100' : 'opacity-0'}"
      loading={i === 0 ? 'eager' : 'lazy'}
      fetchpriority={i === 0 ? 'high' : 'low'}
      aria-hidden="true"
    />
  {/each}
  <div class="absolute inset-0 bg-gradient-to-t from-black/94 via-black/72 to-black/55"></div>
  <div class="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 via-black/20 to-transparent"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-28 md:pb-14 md:pt-32">
    <div class="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
      <div class="max-w-3xl">
        <h1
          class="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
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
            href="/work"
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

<!-- Reviews -->
<TestimonialsSection />

<!-- Services -->
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
            <div class="flex flex-wrap items-center gap-3">
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
            <div class="mt-5 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                class="inline-block w-fit rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
              >
                Get in touch today
              </a>
              <a
                href="/services"
                class="inline-block w-fit rounded-full border border-moss-300 bg-white px-6 py-2.5 text-sm font-semibold text-moss-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-moss-500 hover:shadow-lg"
              >
                Explore all services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Weekly Service full-bleed background image -->
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

<!-- Work Gallery -->
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
      {#each homeGallery as image, i}
        <div
          use:reveal={{ delay: i * 55 }}
          class="reveal overflow-hidden rounded-2xl shadow-lg shadow-stone-400/30 transition-shadow duration-500 hover:shadow-2xl hover:shadow-stone-500/35
            {i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}"
        >
          <img
            src={image}
            alt={galleryAlts[i]}
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]
              {i === 0 ? 'aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'}"
            loading="lazy"
          />
        </div>
      {/each}
    </div>

    <div use:reveal class="reveal mt-10 text-center">
      <a
        href="/work"
        class="inline-block rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
      >
        See more of our work
      </a>
    </div>
  </div>
</section>

<!-- About: full split with background image -->
<section id="about" class="scroll-mt-20 overflow-hidden">
  <div class="grid lg:grid-cols-2">
    <!-- Image half -->
    <div class="relative min-h-[420px] lg:min-h-0">
      <img
        src={gallery[3]}
        alt="Precisely trimmed and edged property by Sams Lawn Care"
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
          Sams Lawn Care is owned and operated by {owner}, based in Lewisburg, West Virginia,
          serving homeowners and businesses across the Greenbrier Valley and surrounding areas.
        </p>
        <p>
          From weekly mowing routes to full landscaping projects, Nick treats every property like
          it&rsquo;s his own, showing up on time, doing the job right, and leaving it
          better than he found it.
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
          href="/services"
          class="rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
        >
          View services
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Contact -->
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

      <!-- Right: contact info + form -->
      <div use:reveal={{ delay: 130 }} class="reveal flex flex-col gap-5">
        <div class="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-300/30">
          <div class="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-6">
            <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Phone</p>
            <a
              href={phoneHref}
              class="text-xl font-bold tracking-tight transition-colors hover:text-moss-700"
            >
              {phone}
            </a>
          </div>
          <div class="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-6">
            <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Email</p>
            <a
              href="mailto:{email}"
              class="break-all text-base font-semibold transition-colors hover:text-moss-700"
            >
              {email}
            </a>
          </div>
          <div class="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-6">
            <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Area</p>
            <p class="text-base font-semibold">
              Lewisburg, WV, Greenbrier Valley &amp; surrounding areas
            </p>
          </div>
          <div class="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-6">
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

        <ContactForm />
      </div>

    </div>
  </div>
</section>
