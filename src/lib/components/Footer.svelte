<script>
  import { phone, phoneHref, email, facebookUrl, logo, services, hours } from '../site.js'
</script>

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
            <li>
              <a
                href={`/services#${service.slug}`}
                class="text-sm text-moss-200/65 transition-colors hover:text-white"
              >
                {service.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Company</p>
        <ul class="space-y-2.5">
          <li><a href="/" class="text-sm text-moss-200/65 transition-colors hover:text-white">Home</a></li>
          <li><a href="/services" class="text-sm text-moss-200/65 transition-colors hover:text-white">Services</a></li>
          <li><a href="/reviews" class="text-sm text-moss-200/65 transition-colors hover:text-white">Reviews</a></li>
          <li><a href="/work" class="text-sm text-moss-200/65 transition-colors hover:text-white">Recent Work</a></li>
          <li><a href="/about" class="text-sm text-moss-200/65 transition-colors hover:text-white">About</a></li>
          <li><a href="/contact" class="text-sm text-moss-200/65 transition-colors hover:text-white">Get a Quote</a></li>
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
          <div class="pt-2">
            <p class="mb-2 text-xs font-bold tracking-[0.18em] text-moss-400 uppercase">Hours</p>
            <div class="space-y-1">
              {#each hours as { day, time }}
                <div class="flex justify-between gap-3 text-xs">
                  <span class="text-moss-200/65">{day}</span>
                  <span class="{time === 'Closed' ? 'text-moss-200/40' : 'text-moss-200/80 font-semibold'}">{time}</span>
                </div>
              {/each}
            </div>
          </div>
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
