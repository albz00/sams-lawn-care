<script>
  import PageHero from '../components/PageHero.svelte'
  import { reveal } from '../reveal.js'
  import { owner, phone, phoneHref, heroServiceAreaMap, gallery } from '../site.js'

  const values = [
    {
      title: 'Reliable',
      description:
        'We show up when we say we will. Weekly routes stay on schedule, and one-time projects get done on time.',
    },
    {
      title: 'Affordable',
      description:
        'Straightforward, no-pressure quotes with fair pricing for homes and businesses of every size.',
    },
    {
      title: 'Professional',
      description:
        'Clean equipment, careful work, and a crew that treats your property like it is our own.',
    },
  ]

  const serviceAreas = [
    'Lewisburg, WV',
    'Ronceverte, WV',
    'Fairlea, WV',
    'White Sulphur Springs, WV',
    'Greenbrier Valley',
    'Surrounding areas',
  ]
</script>

<PageHero
  image={gallery[3]}
  eyebrow="About"
  title="Local, hands-on, and proud of every property we touch."
  description="Sams Lawn Care is based in Lewisburg, West Virginia, serving homeowners and businesses across the Greenbrier Valley and surrounding areas."
/>

<section class="bg-white py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
      <div use:reveal class="reveal space-y-5 leading-relaxed text-stone-600">
        <h2 class="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          A local crew that gets it done right.
        </h2>
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
        <div class="flex flex-wrap gap-4 pt-3">
          <a
            href={phoneHref}
            class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-7 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
          >
            Call {phone}
          </a>
          <a
            href="/services"
            class="rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
          >
            View services
          </a>
        </div>
      </div>

      <div use:reveal={{ delay: 130 }} class="reveal overflow-hidden rounded-3xl shadow-2xl shadow-stone-400/35">
        <img
          src={gallery[1]}
          alt="Well-maintained property by Sams Lawn Care in the Greenbrier Valley"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div class="mt-20 grid gap-5 md:grid-cols-3">
      {#each values as value, i}
        <div
          use:reveal={{ delay: i * 90 }}
          class="reveal rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-moss-50/40 p-8 shadow-lg shadow-stone-300/25"
        >
          <h3 class="text-2xl font-bold tracking-tight text-moss-700">{value.title}</h3>
          <p class="mt-3 leading-relaxed text-stone-600">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-stone-50 py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div use:reveal class="reveal">
        <h2 class="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          Proudly serving the Greenbrier Valley.
        </h2>
        <p class="mt-5 max-w-lg text-lg leading-relaxed text-stone-600">
          If you&rsquo;re nearby but don&rsquo;t see your town listed, give us a call.
          Chances are we can help.
        </p>
        <ul class="mt-8 grid grid-cols-2 gap-3">
          {#each serviceAreas as area}
            <li class="flex items-center gap-2.5 text-base font-semibold text-stone-700">
              <span class="text-moss-600">
                <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.35 7.38a1 1 0 0 1-1.42-.003l-3.643-3.676a1 1 0 0 1 1.42-1.407l2.934 2.962 6.643-6.67a1 1 0 0 1 1.413 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              {area}
            </li>
          {/each}
        </ul>
      </div>

      <div use:reveal={{ delay: 130 }} class="reveal flex justify-center rounded-3xl bg-gradient-to-b from-moss-950 to-[#0f190c] p-8 shadow-2xl shadow-moss-950/40 md:p-12">
        <img
          src={heroServiceAreaMap}
          alt="West Virginia county service area map for Sams Lawn Care"
          class="h-auto w-full max-w-[420px]"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
