<script>
  import { reveal } from '../reveal.js'
  import { testimonialMowerImage, googleLogo, googleReviewsUrl, testimonials } from '../site.js'

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
    .testimonial-mower-run,
    .testimonial-mower-bump,
    .testimonial-mower,
    .testimonial-blade-back,
    .testimonial-blade-front {
      animation: none;
    }
  }
</style>
