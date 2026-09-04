export async function addDelegateToGoogleSheet(
  data: any
) {
  const scriptUrl =
    process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    throw new Error(
      'GOOGLE_SCRIPT_URL is missing'
    )
  }

  const payload = {
    id: data.id || '',

    fullName: data.fullName || '',

    jobTitle: data.jobTitle || '',

    company: data.company || '',

    industry: data.industry || '',

    email: data.email || '',

    phone: data.phone || '',

    linkedin: data.linkedin || '',

    interests: Array.isArray(data.interests)
      ? data.interests.join(', ')
      : '',

    awardNomination:
      data.awardNomination || '',

    shareDetails:
      data.shareDetails || false,

    receiveUpdates:
      data.receiveUpdates || false,

    utmSource:
      data.utmSource || 'direct',

    utmMedium:
      data.utmMedium || '',

    utmCampaign:
      data.utmCampaign || '',

    registeredAt:
      data.registeredAt
        ? new Date(
            data.registeredAt
          ).toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
          })
        : new Date().toLocaleString(
            'en-IN',
            {
              timeZone: 'Asia/Kolkata',
            }
          ),
  }

  const response = await fetch(
    scriptUrl,
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json',
      },

      body: JSON.stringify(payload),
    }
  )

  if (!response.ok) {
    throw new Error(
      `Google Sheet request failed: ${response.status}`
    )
  }

  return response.json()
}