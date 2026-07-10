<script>
  import { email } from '../site.js'

  let submitted = $state(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const lines = [
      `Name: ${data.get('firstName')} ${data.get('lastName')}`,
      data.get('company') ? `Company: ${data.get('company')}` : null,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      '',
      `Address: ${data.get('street')}${data.get('unit') ? ', ' + data.get('unit') : ''}`,
      `City/State/ZIP: ${data.get('city')}, ${data.get('state')} ${data.get('zip')}`,
      '',
      'Service details:',
      `${data.get('details')}`,
      '',
      `Preferred assessment day: ${data.get('preferredDay')}`,
      data.get('altDay') ? `Alternate day: ${data.get('altDay')}` : null,
      data.get('arrivalTimes') ? `Preferred arrival times: ${data.get('arrivalTimes')}` : null,
    ].filter((line) => line !== null)

    const subject = encodeURIComponent('Service request from ' + data.get('firstName') + ' ' + data.get('lastName'))
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    submitted = true
  }
</script>

<form
  class="rounded-2xl bg-moss-950 px-8 py-9 text-white shadow-2xl shadow-moss-950/60"
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
      <label class="block">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">First name</span>
        <input
          type="text"
          name="firstName"
          required
          autocomplete="given-name"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block">
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
      <label class="block">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Company name</span>
        <input
          type="text"
          name="company"
          autocomplete="organization"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block">
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

    <label class="mt-4 block">
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
      <label class="block">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Street address</span>
        <input
          type="text"
          name="street"
          required
          autocomplete="street-address"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Unit, apartment, suite, etc. (optional)</span>
        <input
          type="text"
          name="unit"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
    </div>

    <div class="mt-4 grid gap-4 sm:grid-cols-3">
      <label class="block">
        <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">City</span>
        <input
          type="text"
          name="city"
          required
          autocomplete="address-level2"
          class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
        />
      </label>
      <label class="block">
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
      <label class="block">
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
    <label class="mt-3 block">
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
    <label class="mt-4 block">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Which day would be best for an assessment of the work?</span>
      <span class="mb-2 block text-xs font-semibold text-moss-300">Required</span>
      <input
        type="date"
        name="preferredDay"
        required
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
      />
    </label>
    <label class="mt-4 block">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What is another day that works for you?</span>
      <input
        type="date"
        name="altDay"
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
      />
    </label>
    <label class="mt-4 block">
      <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What are your preferred arrival times?</span>
      <textarea
        rows="3"
        name="arrivalTimes"
        placeholder="Example: Weekdays after 3 PM, Saturday mornings."
        class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
      ></textarea>
    </label>
  </fieldset>

  <button
    type="submit"
    class="mt-7 inline-block rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl"
  >
    Send request
  </button>

  {#if submitted}
    <p class="mt-4 text-sm leading-relaxed text-moss-200/80" role="status">
      Your email app should open with the request filled in. If it doesn&rsquo;t, email us
      directly at <a href="mailto:{email}" class="font-semibold text-moss-200 underline">{email}</a>
      or call and we&rsquo;ll take it from there.
    </p>
  {/if}
</form>
