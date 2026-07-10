const BUSINESS_EMAIL = 'samslawncare7267@gmail.com'
const FROM_EMAIL = 'Sams Lawn Care <info@hostverna.co>'

function json(body, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

function clean(value, maxLength = 500) {
  return String(value || '')
    .replace(/\r/g, '')
    .trim()
    .slice(0, maxLength)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatLine(label, value) {
  return value ? `${label}: ${value}` : null
}

function buildLeadEmail(fields) {
  const address = `${fields.street}${fields.unit ? `, ${fields.unit}` : ''}`
  const lines = [
    `Name: ${fields.firstName} ${fields.lastName}`,
    formatLine('Company', fields.company),
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    '',
    `Address: ${address}`,
    `City/State/ZIP: ${fields.city}, ${fields.state} ${fields.zip}`,
    '',
    'Service details:',
    fields.details,
    '',
    `Preferred assessment day: ${fields.preferredDay}`,
    formatLine('Alternate day', fields.altDay),
    formatLine('Preferred arrival times', fields.arrivalTimes),
  ].filter((line) => line !== null)

  const htmlLines = lines.map((line) => (line ? escapeHtml(line) : '')).join('<br>')

  return {
    subject: `Service request from ${fields.firstName} ${fields.lastName}`,
    text: lines.join('\n'),
    html: `<p>${htmlLines}</p>`,
  }
}

function buildConfirmationEmail(fields) {
  const text = [
    `Hi ${fields.firstName},`,
    '',
    'Thanks for contacting Sams Lawn Care. We received your request and will respond shortly.',
    '',
    'Here is a copy of what you sent:',
    '',
    buildLeadEmail(fields).text,
    '',
    'Sams Lawn Care',
  ].join('\n')

  return {
    subject: 'We received your Sams Lawn Care request',
    text,
    html: `
      <p>Hi ${escapeHtml(fields.firstName)},</p>
      <p>Thanks for contacting Sams Lawn Care. We received your request and will respond shortly.</p>
      <p><strong>Here is a copy of what you sent:</strong></p>
      <p>${buildLeadEmail(fields).html.replace(/^<p>|<\/p>$/g, '')}</p>
      <p>Sams Lawn Care</p>
    `,
  }
}

async function verifyTurnstile({ token, secret, request }) {
  const formData = new FormData()
  formData.append('secret', secret)
  formData.append('response', token)

  const remoteIp = request.headers.get('CF-Connecting-IP')
  if (remoteIp) {
    formData.append('remoteip', remoteIp)
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) return false

  const result = await response.json()
  return Boolean(result.success)
}

async function sendEmail(apiKey, payload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Resend request failed: ${detail}`)
  }
}

export async function onRequestPost({ request, env }) {
  const turnstileSecret = env.turnstile_secret_key || env.TURNSTILE_SECRET_KEY
  const resendApiKey = env.resend_api_key || env.RESEND_API_KEY

  if (!turnstileSecret || !resendApiKey) {
    return json({ message: 'Contact form is not configured yet.' }, 500)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ message: 'Invalid request.' }, 400)
  }

  const fields = {
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    company: clean(body.company, 120),
    email: clean(body.email, 180),
    phone: clean(body.phone, 80),
    street: clean(body.street, 180),
    unit: clean(body.unit, 80),
    city: clean(body.city, 120),
    state: clean(body.state, 40),
    zip: clean(body.zip, 20),
    details: clean(body.details, 4000),
    preferredDay: clean(body.preferredDay, 40),
    altDay: clean(body.altDay, 40),
    arrivalTimes: clean(body.arrivalTimes, 1000),
  }
  const token = clean(body.turnstileToken || body['cf-turnstile-response'], 4000)

  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'street',
    'city',
    'state',
    'zip',
    'details',
    'preferredDay',
  ]
  const missingField = requiredFields.find((field) => !fields[field])

  if (missingField) {
    return json({ message: 'Please complete all required fields.' }, 400)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return json({ message: 'Please enter a valid email address.' }, 400)
  }

  if (!token) {
    return json({ message: 'Please complete the security check.' }, 400)
  }

  const turnstilePassed = await verifyTurnstile({ token, secret: turnstileSecret, request })

  if (!turnstilePassed) {
    return json({ message: 'Security check failed. Please try again.' }, 400)
  }

  const leadEmail = buildLeadEmail(fields)
  const confirmationEmail = buildConfirmationEmail(fields)

  try {
    await Promise.all([
      sendEmail(resendApiKey, {
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        reply_to: fields.email,
        subject: leadEmail.subject,
        text: leadEmail.text,
        html: leadEmail.html,
      }),
      sendEmail(resendApiKey, {
        from: FROM_EMAIL,
        to: fields.email,
        reply_to: BUSINESS_EMAIL,
        subject: confirmationEmail.subject,
        text: confirmationEmail.text,
        html: confirmationEmail.html,
      }),
    ])
  } catch (error) {
    console.error(error)
    return json({ message: 'Your request could not be sent. Please try again.' }, 502)
  }

  return json({ message: 'Your request was sent.' })
}

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Cache-Control': 'no-store',
    },
  })
}
