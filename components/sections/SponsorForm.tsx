'use client'

import { useState } from 'react'

export function SponsorForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    companyDescription: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        alert('Sponsorship enquiry submitted successfully')

        setFormData({
          companyName: '',
          website: '',
          contactPerson: '',
          designation: '',
          email: '',
          phone: '',
          companyDescription: '',
        })
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Sponsor Information
        </h4>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Company Website *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Contact Person *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Business Email *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />
        </div>

        <textarea
          rows={4}
          name="companyDescription"
          value={formData.companyDescription}
          onChange={handleChange}
          placeholder="Tell us about your company..."
          className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
        />
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