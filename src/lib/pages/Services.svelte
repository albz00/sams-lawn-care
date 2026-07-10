<script>
  import PageHero from '../components/PageHero.svelte'
  import { reveal } from '../reveal.js'
  import { phone, phoneHref, services, gallery } from '../site.js'
</script>

<PageHero
  image={gallery[2]}
  eyebrow="Services"
  title="Everything your property needs, season after season."
  description="A complete outdoor care lineup for homes and properties across the Greenbrier Valley, delivered on schedule with detail-focused results."
/>

<section class="bg-white py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6">
    <div class="space-y-16 md:space-y-24">
      {#each services as service, i}
        <article
          id={service.slug}
          use:reveal
          class="reveal scroll-mt-28 grid items-center gap-10 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-moss-50/35 shadow-2xl shadow-stone-300/30 lg:grid-cols-2"
        >
          <div class="relative min-h-[300px] self-stretch lg:min-h-[420px] {i % 2 === 1 ? 'lg:order-2' : ''}">
            <img
              src={service.image}
              alt={service.imageAlt}
              class="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div class="p-8 md:p-12 {i % 2 === 1 ? 'lg:order-1' : ''}">
            <h2 class="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              {service.title}
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-stone-600">{service.description}</p>
            <ul class="mt-7 space-y-3">
              {#each service.details as detail}
                <li class="flex items-start gap-3">
                  <span class="mt-1 shrink-0 text-moss-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.35 7.38a1 1 0 0 1-1.42-.003l-3.643-3.676a1 1 0 0 1 1.42-1.407l2.934 2.962 6.643-6.67a1 1 0 0 1 1.413 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span class="text-base leading-relaxed text-stone-700">{detail}</span>
                </li>
              {/each}
            </ul>
            <a
              href={phoneHref}
              class="mt-8 inline-block rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
            >
              Get a free quote
            </a>
          </div>
        </article>
      {/each}
    </div>

    <div use:reveal class="reveal mt-16 rounded-3xl border border-moss-200 bg-moss-50/70 p-8 text-center md:p-12">
      <h2 class="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
        Have something else in mind?
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-stone-600">
        If it&rsquo;s on your property, just ask. Call or text {phone} and we&rsquo;ll figure it out together.
      </p>
      <div class="mt-7 flex flex-wrap justify-center gap-4">
        <a
          href={phoneHref}
          class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-7 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
        >
          Call {phone}
        </a>
        <a
          href="/contact"
          class="rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
        >
          Request an assessment
        </a>
      </div>
    </div>
  </div>
</section>
