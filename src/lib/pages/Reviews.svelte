<script>
  import PageHero from '../components/PageHero.svelte'
  import { reveal } from '../reveal.js'
  import { phone, phoneHref, googleReviewsUrl, googleLogo, gallery, allReviews } from '../site.js'
</script>

<PageHero
  image={gallery[4]}
  eyebrow="Reviews"
  title="Rated five stars by your neighbors."
  description="Five-star service across Lewisburg, WV and the Greenbrier Valley. Here is what our customers have to say."
/>

<!-- All Reviews Grid -->
<section class="bg-gradient-to-b from-moss-950 to-[#0f190c] py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6">
    <div use:reveal class="reveal flex flex-wrap items-center justify-between gap-6">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          What our customers are saying.
        </h2>
        <p class="mt-2 text-base text-white/60">Real reviews from Google — straight from your neighbors.</p>
      </div>
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

    <div class="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {#each allReviews as review, i}
        <article
          use:reveal={{ delay: i * 50 }}
          class="reveal mb-5 break-inside-avoid rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl shadow-black/25 backdrop-blur"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="font-bold tracking-tight leading-tight">{review.name}</p>
              <p class="mt-0.5 text-xs text-white/50">{review.timeAgo}</p>
            </div>
            <span class="shrink-0 text-sm tracking-wide text-amber-300">{review.rating}</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-white/80">{review.text}</p>
          {#if review.ownerReply}
            <div class="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p class="text-xs font-semibold text-moss-300">Owner response:</p>
              <p class="mt-1 text-xs leading-relaxed text-white/65">{review.ownerReply}</p>
            </div>
          {/if}
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            class="mt-4 inline-block text-xs font-semibold text-moss-300 transition-colors hover:text-white"
          >
            View on Google →
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="bg-white py-20 md:py-28">
  <div class="mx-auto max-w-4xl px-6 text-center">
    <div use:reveal class="reveal">
      <h2 class="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
        Had a great experience with us?
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
        Reviews from neighbors like you help other homeowners in the Greenbrier Valley find
        dependable lawn care. We&rsquo;d love to hear how we did.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-3 rounded-full border border-stone-300/65 bg-white px-6 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
        >
          <img src={googleLogo} alt="Google" class="h-5 w-auto" />
          Leave a Google review
        </a>
        <a
          href={phoneHref}
          class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-7 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
        >
          Call {phone} for a quote
        </a>
      </div>
    </div>
  </div>
</section>
