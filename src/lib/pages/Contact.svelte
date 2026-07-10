<script>
  import PageHero from '../components/PageHero.svelte'
  import ContactForm from '../components/ContactForm.svelte'
  import { reveal } from '../reveal.js'
  import { phone, phoneHref, email, facebookUrl, logo, gallery, hours } from '../site.js'
</script>

<PageHero
  image={gallery[1]}
  eyebrow="Contact"
  title="Call or message today for a free quote."
  description="Tell us about your property and what you're looking for, we'll get back to you with a straightforward, no-pressure quote."
/>

<section class="bg-white py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">

      <!-- Left: contact info + photo -->
      <div use:reveal class="reveal lg:sticky lg:top-28 self-start">
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
          <div class="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-start sm:gap-4 sm:px-6">
            <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase pt-0.5">Hours</p>
            <div class="space-y-1">
              {#each hours as { day, time }}
                <div class="flex justify-between gap-4 text-sm">
                  <span class="font-medium text-stone-700">{day}</span>
                  <span class="{time === 'Closed' ? 'text-stone-400' : 'font-semibold'}">{time}</span>
                </div>
              {/each}
            </div>
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

      <!-- Right: form -->
      <div use:reveal={{ delay: 130 }} class="reveal">
        <ContactForm />
      </div>

    </div>
  </div>
</section>
