<script>
  import { onMount } from 'svelte'
  import { email } from '../site.js'

  const turnstileSiteKey = '0x4AAAAAADzaY6iIlGPL69h8'

  let status = $state('idle')
  let errorMessage = $state('')
  let turnstileToken = $state('')
  let turnstileElement
  let turnstileWidgetId

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile)

    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[data-turnstile-script]')

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.turnstile), { once: true })
        existingScript.addEventListener('error', reject, { once: true })
        return
      }

      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.dataset.turnstileScript = 'true'
      script.addEventListener('load', () => resolve(window.turnstile), { once: true })
      script.addEventListener('error', reject, { once: true })
      document.head.appendChild(script)
    })
  }

  function resetTurnstile() {
    turnstileToken = ''

    if (window.turnstile && turnstileWidgetId !== undefined) {
      window.turnstile.reset(turnstileWidgetId)
    }
  }

  onMount(() => {
    let cancelled = false

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !turnstileElement) return

        turnstileWidgetId = turnstile.render(turnstileElement, {
          sitekey: turnstileSiteKey,
          theme: 'dark',
          callback: (token) => {
            turnstileToken = token
          },
          'expired-callback': () => {
            turnstileToken = ''
          },
          'error-callback': () => {
            turnstileToken = ''
            status = 'error'
            errorMessage = 'Security check could not load. Please refresh and try again.'
          },
        })
      })
      .catch(() => {
        status = 'error'
        errorMessage = 'Security check could not load. Please refresh and try again.'
      })

    return () => {
      cancelled = true

      if (window.turnstile && turnstileWidgetId !== undefined) {
        window.turnstile.remove(turnstileWidgetId)
      }
    }
  })

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'submitting') return

    if (!turnstileToken) {
      status = 'error'
      errorMessage = 'Please complete the security check before sending your request.'
      return
    }

    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form))
    payload.turnstileToken = turnstileToken

    status = 'submitting'
    errorMessage = ''

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || 'Your request could not be sent. Please try again.')
      }

      form.reset()
      status = 'success'
      resetTurnstile()
    } catch (error) {
      status = 'error'
      errorMessage =
        error instanceof Error
          ? error.message
          : 'Your request could not be sent. Please try again.'
      resetTurnstile()
    }
  }
</script>

<form
  class="w-full max-w-full rounded-2xl bg-moss-950 px-5 py-7 text-white shadow-2xl shadow-moss-950/60 sm:px-8 sm:py-9"
  onsubmit={handleSubmit}
>
  <p class="text-sm font-medium text-moss-300">Request an assessment</p>
  <p class="mt-2 text-2xl font-extrabold tracking-tight">Tell us about the work you need.</p>
  <p class="mt-3 text-sm leading-relaxed text-moss-200/65">
    Complete as much as you can and we&rsquo;ll follow up to confirm details.
  </p>

  <fieldset class="mt-7">
    <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Contact details</legend>
    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">First name</span>
        <input
          type="text"
          name="firstName"
          required
          autocomplete="given-name"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Last name</span>
        <input
          type="text"
          name="lastName"
          required
          autocomplete="family-name"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
    </div>

    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Company name</span>
        <input
          type="text"
          name="company"
          autocomplete="organization"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Email</span>
        <input
          type="email"
          name="email"
          required
          autocomplete="email"
          placeholder="you@example.com"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
    </div>

    <label class="mt-4 block min-w-0">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Phone</span>
      <input
        type="tel"
        name="phone"
        required
        autocomplete="tel"
        placeholder="(___) ___-____"
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
      />
    </label>
    <p class="mt-3 text-xs leading-relaxed text-moss-200/70">
      By providing your phone number, you agree to receive Visit Reminders and other
      transactional text messages (SMS) from Sams Lawn Care. You can unsubscribe at
      anytime by replying STOP. Message and data rates may apply. Message frequency
      varies. Reply HELP for help or STOP to cancel.
    </p>
  </fieldset>

  <fieldset class="mt-7">
    <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Address</legend>
    <div class="mt-4 space-y-4">
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Street address</span>
        <input
          type="text"
          name="street"
          required
          autocomplete="street-address"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Unit, apartment, suite, etc. (optional)</span>
        <input
          type="text"
          name="unit"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
    </div>

    <div class="mt-4 grid gap-4 sm:grid-cols-3">
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">City</span>
        <input
          type="text"
          name="city"
          required
          autocomplete="address-level2"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">State</span>
        <select
          name="state"
          required
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
        >
          <option value="" selected disabled>Select</option>
          <option>WV</option>
          <option>VA</option>
          <option>NC</option>
          <option>TN</option>
        </select>
      </label>
      <label class="block min-w-0">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">ZIP Code</span>
        <input
          type="text"
          name="zip"
          required
          inputmode="numeric"
          maxlength="10"
          autocomplete="postal-code"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
    </div>
  </fieldset>

  <fieldset class="mt-7">
    <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Service details</legend>
    <p class="mt-2 text-xs text-moss-200/70">Please provide as much information as you can.</p>
    <p class="mt-1 text-xs font-semibold text-moss-300">Required</p>
    <label class="mt-3 block min-w-0">
      <textarea
        rows="4"
        name="details"
        required
        placeholder="Describe the service you need and any property details."
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
      ></textarea>
    </label>
  </fieldset>

  <fieldset class="mt-7">
    <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Your availability</legend>
    <label class="mt-4 block min-w-0">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Which day would be best for an assessment of the work?</span>
      <span class="mb-2 block text-xs font-semibold text-moss-300">Required</span>
      <input
        type="date"
        name="preferredDay"
        required
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
      />
    </label>
    <label class="mt-4 block min-w-0">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What is another day that works for you?</span>
      <input
        type="date"
        name="altDay"
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
      />
    </label>
    <label class="mt-4 block min-w-0">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What are your preferred arrival times?</span>
      <textarea
        rows="3"
        name="arrivalTimes"
        placeholder="Example: Weekdays after 3 PM, Saturday mornings."
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
      ></textarea>
    </label>
  </fieldset>

  <div class="mt-7">
    <div bind:this={turnstileElement} class="min-h-[65px]"></div>
  </div>

  <button
    type="submit"
    disabled={status === 'submitting'}
    class="mt-7 inline-block rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
  >
    {status === 'submitting' ? 'Sending request...' : 'Send request'}
  </button>

  {#if status === 'success'}
    <p class="mt-4 text-sm leading-relaxed text-moss-200/80" role="status">
      Thanks, your request was sent. We&rsquo;ll review it and respond shortly.
    </p>
  {:else if status === 'error'}
    <p class="mt-4 text-sm leading-relaxed text-red-100" role="alert">
      {errorMessage} If the problem continues, email us directly at
      <a href="mailto:{email}" class="font-semibold text-red-50 underline">{email}</a>
      or call and we&rsquo;ll take it from there.
    </p>
  {/if}
</form>
