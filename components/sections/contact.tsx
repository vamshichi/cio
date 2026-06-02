'use client'

import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiMic,
  FiAward,
  FiMail,
  FiPhone,
  FiBriefcase,
} from 'react-icons/fi'
import { useState } from 'react'

export function Contact() {

  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    linkedin: '',

    interestedIn: [] as string[],
    interests: [] as string[],
    objectives: [] as string[],

    attendAwards: '',
    partnerConsent: false,
    eventConsent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckbox = (
    field: 'interestedIn' | 'interests' | 'objectives',
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Registration Submitted Successfully')

        setFormData({
          fullName: '',
          jobTitle: '',
          company: '',
          industry: '',
          email: '',
          phone: '',
          linkedin: '',
          interestedIn: [],
          interests: [],
          objectives: [],
          attendAwards: '',
          partnerConsent: false,
          eventConsent: false,
        })
      } else {
        alert('Submission Failed')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
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
            Join India's leading CIOs, CTOs, CISOs, technology innovators,
            digital transformation leaders and industry pioneers.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {[
            '200+ CIOs',
            '20+ Speakers',
            '20+ Partners',
            'Leadership Awards',
            'Executive Networking',
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">



          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-2xl">
            <h3 className="mb-8 text-3xl font-bold text-white">
              Registration Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">

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
                    className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
                  />

                  <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title *"
                    className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
                  />

                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Organization / Company Name *"
                    className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
                  />

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email Address *"
                    className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number (with country code) *"
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

              {/* Interested In */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                  I am Interested In
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Attending as a Delegate',
                    'Speaking Opportunities',
                    'Sponsorship & Partnership',
                    'Exhibiting',
                    'Awards Participation',
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedIn.includes(item)}
                        onChange={() =>
                          handleCheckbox('interestedIn', item)
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Key Areas */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                  Key Areas Of Interest
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'AI & Enterprise Automation',
                    'Cloud, Multi-Cloud & FinOps',
                    'Cybersecurity & Zero Trust',
                    'Data, Analytics & AI Governance',
                    'Digital Transformation Strategy',
                    'Customer Experience & Personalisation',
                    'Smart Operations & Supply Chain',
                    'Enterprise Modernisation',
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(item)}
                        onChange={() =>
                          handleCheckbox('interests', item)
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                  What Are You Looking To Achieve?
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Networking with CIOs & Industry Leaders',
                    'Exploring Enterprise Technology Solutions',
                    'Learning & Strategic Insights',
                    'Partnerships & Collaborations',
                    'Business & Growth Opportunities',
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                    >
                      <input
                        type="checkbox"
                        checked={formData.objectives.includes(item)}
                        onChange={() =>
                          handleCheckbox('objectives', item)
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Awards Ceremony */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                  Networking & Awards Ceremony
                </h4>

                <p className="mb-4 text-slate-300">
                  Will you attend the Networking High Tea & Awards Ceremony?
                </p>

                <div className="flex gap-8">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input
                      type="radio"
                      name="attendAwards"
                      value="Yes"
                      checked={formData.attendAwards === 'Yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2 text-slate-300">
                    <input
                      type="radio"
                      name="attendAwards"
                      value="No"
                      checked={formData.attendAwards === 'No'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Consent */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                  Data Privacy & Consent
                </h4>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.partnerConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          partnerConsent: e.target.checked,
                        })
                      }
                    />
                    I agree to share my details with event partners for networking purposes
                  </label>

                  <label className="flex items-start gap-3 text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.eventConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventConsent: e.target.checked,
                        })
                      }
                    />
                    I agree to receive updates about this and future events
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.01]"
              >
                Submit Registration
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}