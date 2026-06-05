
'use client'

import { useState } from 'react'

export function DelegateForm() {
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    linkedin: '',
    interests: [] as string[],
    awardNomination: '',
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

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
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

  if (formData.interests.length === 0) {
    setError(
      'Please select at least one area of interest'
    )
    return
  }

  if (!formData.awardNomination) {
    setError(
      'Please select an award nomination option'
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

    const response = await fetch('/api/delegate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (result.success) {
      alert(
        'Delegate registration submitted successfully'
      )

      setFormData({
        fullName: '',
        jobTitle: '',
        company: '',
        email: '',
        phone: '',
        linkedin: '',
        interests: [],
        awardNomination: '',
        shareDetails: false,
        receiveUpdates: false,
      })
    } else {
      setError(
        result.message ||
          'Registration failed'
      )
    }
  } catch (error) {
    console.error(error)
    setError('Something went wrong')
  } finally {
    setLoading(false)
  }
}


  const interests = [
    'AI & Enterprise Automation',
    'Cloud, Multi-Cloud & FinOps',
    'Cybersecurity & Zero Trust',
    'Data, Analytics & AI Governance',
    'Digital Transformation Strategy',
    'Customer Experience & Personalisation',
    'Smart Operations & Supply Chain',
    'Enterprise Modernisation',
    'Others',
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Your Interests & Objectives
        </h4>

        <p className="mb-4 text-sm text-white/70">
          Select all that apply
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 text-white"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(
                  interest
                )}
                onChange={() =>
                  handleInterestChange(interest)
                }
                className="h-4 w-4"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Awards Nomination
        </h4>

        <div className="space-y-4">
          <label className="flex items-start gap-3 text-white">
            <input
              type="radio"
              name="awardNomination"
              value="Yes"
              checked={
                formData.awardNomination === 'Yes'
              }
              onChange={handleChange}
              required
            />

            <span>
              Yes, I want to nominate myself for
              an award (Nomination Registration
              Fee Applies)
            </span>
          </label>

          <label className="flex items-start gap-3 text-white">
            <input
              type="radio"
              name="awardNomination"
              value="No"
              checked={
                formData.awardNomination === 'No'
              }
              onChange={handleChange}
            />

            <span>
              No, I do not intend to nominate for
              the award.
            </span>
          </label>
        </div>
      </div>

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
    'Submit Registration'
  )}
</button>


    </form>
  )
}
