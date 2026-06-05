
'use client'

import { useState } from 'react'

export function SponsorForm() {
  
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')


  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    linkedin: '',
    objectives: [] as string[],
    sponsoredBefore: '',
    shareDetails: false,
    receiveUpdates: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }))
  }

  const handleObjectiveChange = (
    objective: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      objectives: prev.objectives.includes(
        objective
      )
        ? prev.objectives.filter(
            (item) => item !== objective
          )
        : [...prev.objectives, objective],
    }))
  }

 
const isBusinessEmail = (email: string) => {
  const personalDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'aol.com',
    'icloud.com',
    'proton.me',
    'protonmail.com',
    'rediffmail.com',
  ]

  const domain = email.split('@')[1]?.toLowerCase()

  return domain && !personalDomains.includes(domain)
}



 
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()

  setError('')

  if (
    !formData.fullName ||
    !formData.jobTitle ||
    !formData.company ||
    !formData.email ||
    !formData.phone
  ) {
    setError('Please fill all required fields')
    return
  }

  if (formData.objectives.length === 0) {
    setError(
      'Please select at least one sponsorship objective'
    )
    return
  }

  if (!formData.sponsoredBefore) {
    setError(
      'Please select sponsorship experience'
    )
    return
  }

  if (!isBusinessEmail(formData.email)) {
    setError(
      'Please use your business email address'
    )
    return
  }

  try {
    setLoading(true)

    const response = await fetch('/api/sponsor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (result.success) {
      alert(
        'Sponsorship enquiry submitted successfully'
      )

      setFormData({
        fullName: '',
        jobTitle: '',
        company: '',
        email: '',
        phone: '',
        linkedin: '',
        objectives: [],
        sponsoredBefore: '',
        shareDetails: false,
        receiveUpdates: false,
      })
    } else {
      setError(
        result.message ||
          'Submission failed'
      )
    }
  } catch (error) {
    console.error(error)
    setError('Something went wrong')
  } finally {
    setLoading(false)
  }
}



  const objectives = [
    'Thought Leadership / Speaking Slots',
    'Branding & Logo Promotions',
    'Expo Booth Space & Networking',
    'Curated 1-to-1 Meetings',
    'Exclusive Roundtable Programs',
    'Lead Generation',
    'Product Launch',
    'Workshops / Hackathons',
    'Govt Meet-N-Greet / Gala Dinner Night',
    'Award Nominations',
    'Others',
  ]

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Personal Information */}

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Personal Information
        </h4>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Organization / Company Name *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Work Email Address *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number (with country code) *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn Profile URL"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />
        </div>
      </div>

      {/* Sponsorship Objectives */}

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Your Interests & Objectives
        </h4>

        <p className="mb-4 text-sm text-white/70">
          What are your key objectives of
          Sponsoring? (Select all that apply)
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {objectives.map((objective) => (
            <label
              key={objective}
              className="flex items-center gap-3 text-white"
            >
              <input
                type="checkbox"
                checked={formData.objectives.includes(
                  objective
                )}
                onChange={() =>
                  handleObjectiveChange(
                    objective
                  )
                }
                className="h-4 w-4"
              />

              <span>{objective}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sponsorship Experience */}

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Have you Sponsored any B2B
          Conferences / Events before?
        </h4>

        <div className="space-y-4">
          <label className="flex items-start gap-3 text-white">
            <input
              type="radio"
              name="sponsoredBefore"
              value="Yes"
              checked={
                formData.sponsoredBefore ===
                'Yes'
              }
              onChange={handleChange}
              required
            />

            <span>
              Yes, I have sponsored B2B Events
              before
            </span>
          </label>

          <label className="flex items-start gap-3 text-white">
            <input
              type="radio"
              name="sponsoredBefore"
              value="No"
              checked={
                formData.sponsoredBefore ===
                'No'
              }
              onChange={handleChange}
            />

            <span>
              No, This is the first time I am
              sponsoring a B2B Event
            </span>
          </label>
        </div>
      </div>

      {/* Data Privacy */}

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Data Privacy & Consent
        </h4>

        <div className="space-y-4">
          <label className="flex items-start gap-3 text-white">
            <input
              type="checkbox"
              name="shareDetails"
              checked={formData.shareDetails}
              onChange={handleChange}
            />

            <span>
              I agree to share my details with
              event partners for networking
              purposes
            </span>
          </label>

          <label className="flex items-start gap-3 text-white">
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
            />

            <span>
              I agree to receive updates about
              this and future events
            </span>
          </label>
        </div>
      </div>

   
{error && (
  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
    {error}
  </div>
)}



      
<button
  type="submit"
  disabled={loading}
  className="
    h-14
    w-full
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    font-semibold
    text-white
    transition-all
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
>
  {loading ? (
    <span className="flex items-center justify-center gap-3">
      <svg
        className="h-5 w-5 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.25"
        />
        <path
          d="M22 12a10 10 0 00-10-10"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>

      Submitting...
    </span>
  ) : (
    'Submit Sponsorship Enquiry'
  )}
</button>


    </form>
  )
}

