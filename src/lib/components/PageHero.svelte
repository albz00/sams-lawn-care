<script>
  let { image, eyebrow, title, description } = $props()
</script>

<section class="relative flex min-h-[52vh] items-end overflow-hidden pt-32">
  <img
    src={image}
    alt=""
    class="absolute inset-0 h-full w-full object-cover"
    loading="eager"
    fetchpriority="high"
    aria-hidden="true"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-black/94 via-black/72 to-black/55"></div>
  <div class="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 via-black/20 to-transparent"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:pb-20">
    {#if eyebrow}
      <p class="text-sm font-bold tracking-[0.22em] text-moss-300 uppercase">{eyebrow}</p>
    {/if}
    <h1 class="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">
      {title}
    </h1>
    {#if description}
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
        {description}
      </p>
    {/if}
  </div>
</section>
