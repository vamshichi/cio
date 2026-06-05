'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  fullName: string
  jobTitle: string
  company: string
  email: string
  phone: string
  interestedIn: string[]
  briefNote: string
  brochureConsent: boolean
  contactConsent: boolean
}

const initialForm: FormData = {
  fullName: '',
  jobTitle: '',
  company: '',
  email: '',
  phone: '',
  interestedIn: [],
  briefNote: '',
  brochureConsent: false,
  contactConsent: false,
}

const interestOptions = [
  'Attending as a Delegate',
  'Speaking Opportunities',
  'Sponsorship & Partnership',
  'Awards Participation',
  'Media Partner Opportunities',
  'I want to organise a B2B Conference for my organisation',
  'I want to organise Bespoke Roundtable for my organisation',
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const inputClass =
    'h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-colors'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: false }))
  }

  const handleCheckboxGroup = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter((i) => i !== value)
        : [...prev.interestedIn, value],
    }))
  }

  const handleConsent = (field: 'brochureConsent' | 'contactConsent') => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {}
    if (!formData.fullName.trim()) newErrors.fullName = true
    if (!formData.jobTitle.trim()) newErrors.jobTitle = true
    if (!formData.company.trim()) newErrors.company = true
    if (!formData.email.trim()) newErrors.email = true
    if (!formData.phone.trim()) newErrors.phone = true
    if (!formData.brochureConsent) newErrors.brochureConsent = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert(result.message || 'Submission failed. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">
              Registration Open
            </span>
          </div>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            Secure Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Executive Pass
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
            Fill in your details to access the event brochure and join India's leading
            CIOs, CTOs, CISOs, technology innovators, and digital transformation leaders.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {['200+ CIOs', '20+ Speakers', '20+ Partners', 'Leadership Awards', 'Executive Networking'].map((item) => (
            <div key={item} className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              {item}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 backdrop-blur-2xl">

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 border border-green-500/30">
                  <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Registration Submitted!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. The event brochure and further details will be sent to your email shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData(initialForm) }}
                  className="mt-4 rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-all"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>

                {/* Basic Information */}
                <div>
                  <h4 className="mb-1 text-xl font-semibold text-cyan-400">Basic Information</h4>
                  <p className="mb-6 text-sm text-slate-500">Fill in your details to access the event brochure.</p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className={`${inputClass} ${errors.fullName ? 'border-red-500/60' : ''}`}
                      />
                      {errors.fullName && <p className="text-xs text-red-400 px-1">Required</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Job Title *"
                        className={`${inputClass} ${errors.jobTitle ? 'border-red-500/60' : ''}`}
                      />
                      {errors.jobTitle && <p className="text-xs text-red-400 px-1">Required</p>}
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2">
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Organization Name *"
                        className={`${inputClass} ${errors.company ? 'border-red-500/60' : ''}`}
                      />
                      {errors.company && <p className="text-xs text-red-400 px-1">Required</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Work Email Address *"
                        className={`${inputClass} ${errors.email ? 'border-red-500/60' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-400 px-1">Required</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number (with country code) *"
                        className={`${inputClass} ${errors.phone ? 'border-red-500/60' : ''}`}
                      />
                      {errors.phone && <p className="text-xs text-red-400 px-1">Required</p>}
                    </div>
                  </div>
                </div>

                {/* Interest in Event */}
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-cyan-400">Your Interest in the Event</h4>
                  <p className="mb-5 text-sm text-slate-400">I am interested in: <span className="text-slate-600">(select all that apply)</span></p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {interestOptions.map((item) => (
                      <label
                        key={item}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-sm text-slate-300 transition-all ${
                          formData.interestedIn.includes(item)
                            ? 'border-cyan-500/50 bg-cyan-500/10 text-white'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interestedIn.includes(item)}
                          onChange={() => handleCheckboxGroup(item)}
                          className="mt-0.5 shrink-0 accent-cyan-500"
                        />
                        {item}
                      </label>
                    ))}
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm text-slate-400">
                      Please write a brief note about your interest
                    </label>
                    <textarea
                      name="briefNote"
                      value={formData.briefNote}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about what you're looking to achieve or explore at the event…"
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Consent */}
                <div>
                  <h4 className="mb-5 text-xl font-semibold text-cyan-400">Consent & Communication</h4>

                  <div className="space-y-3">
                    <label className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all ${
                      errors.brochureConsent
                        ? 'border-red-500/60 bg-red-500/5'
                        : formData.brochureConsent
                        ? 'border-cyan-500/50 bg-cyan-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.brochureConsent}
                        onChange={() => handleConsent('brochureConsent')}
                        className="mt-0.5 shrink-0 accent-cyan-500"
                      />
                      I agree to receive the brochure and event updates *
                    </label>
                    {errors.brochureConsent && <p className="text-xs text-red-400 px-1">This consent is required to receive the brochure.</p>}

                    <label className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all ${
                      formData.contactConsent
                        ? 'border-cyan-500/50 bg-cyan-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.contactConsent}
                        onChange={() => handleConsent('contactConsent')}
                        className="mt-0.5 shrink-0 accent-cyan-500"
                      />
                      I agree to be contacted for relevant opportunities
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(0,174,255,0.25)]"
                >
                  Submit Registration →
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}