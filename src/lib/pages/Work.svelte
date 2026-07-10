<script>
  import PageHero from '../components/PageHero.svelte'
  import { reveal } from '../reveal.js'
  import { phone, phoneHref, workGallery, gallery } from '../site.js'
</script>

<PageHero
  image={gallery[0]}
  eyebrow="Our Work"
  title="The results speak for themselves."
  description="Mowing, landscaping, and mulch installs from around the Greenbrier Valley."
/>

<section class="bg-white py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each workGallery as item, i}
        <figure
          use:reveal={{ delay: i * 55 }}
          class="reveal group relative overflow-hidden rounded-2xl shadow-lg shadow-stone-400/30 transition-shadow duration-500 hover:shadow-2xl hover:shadow-stone-500/35
            {i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}"
        >
          <img
            src={item.src}
            alt={item.alt}
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]
              {i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}"
            loading="lazy"
          />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100"></div>
          <figcaption
            class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-0 p-5 text-sm font-semibold text-white opacity-100 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            {item.caption}
          </figcaption>
        </figure>
      {/each}
    </div>

    <div use:reveal class="reveal mt-16 rounded-3xl border border-moss-200 bg-moss-50/70 p-8 text-center md:p-12">
      <h2 class="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
        Want your property to look like this?
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-stone-600">
        Call or text {phone} for a free, no-pressure quote on mowing, landscaping, mulching, or snow removal.
      </p>
      <div class="mt-7 flex flex-wrap justify-center gap-4">
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
  </div>
</section>
