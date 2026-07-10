<script>
  import { phone, phoneHref, heroImage } from '../site.js'
</script>

<section class="relative flex min-h-screen items-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('{heroImage}')"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-black/94 via-black/78 to-black/60"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 text-center">
    <p class="text-sm font-bold tracking-[0.22em] text-moss-300 uppercase">404</p>
    <h1 class="mt-4 text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">
      This page got mowed over.
    </h1>
    <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
      The page you&rsquo;re looking for doesn&rsquo;t exist. Head back home or give us a call,
      we&rsquo;re happy to help.
    </p>
    <div class="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="/"
        class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-8 py-3.5 text-base font-semibold text-white shadow-2xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
      >
        Back to home
      </a>
      <a
        href={phoneHref}
        class="rounded-full border border-white/24 bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/45 hover:bg-white/15 hover:shadow-2xl"
      >
        Call {phone}
      </a>
    </div>
  </div>
</section>
