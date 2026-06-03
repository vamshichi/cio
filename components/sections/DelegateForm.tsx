'use client'

import { useState } from 'react'

export function DelegateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    linkedin: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
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
      const response = await fetch('/api/delegate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Delegate registration submitted successfully')

        setFormData({
          fullName: '',
          jobTitle: '',
          company: '',
          industry: '',
          email: '',
          phone: '',
          linkedin: '',
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
          Delegate Information
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

          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="h-14 rounded-xl border border-white/10 bg-slate-900 px-4 text-white"
          >
            <option value="">Select Industry *</option>
            <option>BFSI</option>
            <option>Technology</option>
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Healthcare</option>
            <option>Telecom</option>
            <option>Energy</option>
            <option>Consulting</option>
            <option>Government</option>
            <option>Startup</option>
            <option>Others</option>
          </select>

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
            placeholder="Mobile Number *"
            required
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn Profile URL"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white md:col-span-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all hover:opacity-90"
      >
        Register as Delegate
      </button>
    </form>
  )
}