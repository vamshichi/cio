
'use client'

import { useState } from 'react'

export function SponsorForm() {
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
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
        alert(result.message)
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
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

      <button
        type="submit"
        className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all hover:opacity-90"
      >
        Submit Sponsorship Enquiry
      </button>
    </form>
  )
}

