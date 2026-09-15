'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function DelegateForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    linkedin: '',
    message: '',
    interests: [] as string[],
    awardNomination: '',
    shareDetails: false,
    receiveUpdates: false,
  })

  const [utmData, setUtmData] = useState({
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
  })

  // --------------------------------------------------
  // UTM TRACKING
  // --------------------------------------------------

  useEffect(() => {
    const hash = window.location.hash

    if (!hash.includes('?')) return

    const queryString = hash.split('?')[1]
    const params = new URLSearchParams(queryString)

    const data = {
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmContent: params.get('utm_content') || '',
    }

    setUtmData(data)

    console.log('UTM:', data)
  }, [])

  // --------------------------------------------------
  // FORM CHANGE
  // --------------------------------------------------

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

  // --------------------------------------------------
  // INTERESTS
  // --------------------------------------------------

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  // --------------------------------------------------
  // BUSINESS EMAIL VALIDATION
  // --------------------------------------------------

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

    const domain = email
      .split('@')[1]
      ?.toLowerCase()

    return (
      domain &&
      !personalDomains.includes(domain)
    )
  }

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setError('')

    // Required fields
    if (
      !formData.fullName ||
      !formData.jobTitle ||
      !formData.company ||
      !formData.industry ||
      !formData.email ||
      !formData.phone
    ) {
      setError('Please fill all required fields')
      return
    }

    // Interests
    if (formData.interests.length === 0) {
      setError(
        'Please select at least one area of interest'
      )
      return
    }

    // Award nomination
    if (!formData.awardNomination) {
      setError(
        'Please select an award nomination option'
      )
      return
    }

    // Business email
    if (!isBusinessEmail(formData.email)) {
      setError(
        'Please use your business email address'
      )
      return
    }

    try {
      setLoading(true)

      const payload = {
        ...formData,

        registeredAt: new Date().toISOString(),

        utmSource: utmData.utmSource,
        utmMedium: utmData.utmMedium,
        utmCampaign: utmData.utmCampaign,
        utmContent: utmData.utmContent,
      }

      console.log('PAYLOAD', payload)

      const response = await fetch('/api/delegate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      console.log('API RESULT:', result)

      if (result.success) {
        /*
         * IMPORTANT:
         *
         * Instead of alert() and resetting the form,
         * show the Thank You card.
         */
        setSubmitted(true)
      } else {
        setError(
          result.message ||
            'Registration failed'
        )
      }
    } catch (error) {
      console.error(error)

      setError(
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  // --------------------------------------------------
  // INTEREST OPTIONS
  // --------------------------------------------------

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

  // --------------------------------------------------
  // RETURN
  // --------------------------------------------------

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">

        {/* ==================================================
            REGISTRATION FORM
        ================================================== */}

        {!submitted ? (
          <motion.form
            key="registration-form"
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: -100,
              opacity: 0,
              scale: 0.97,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* --------------------------------------------
                PERSONAL INFORMATION
            --------------------------------------------- */}

            <div>
              <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                Personal Information
              </h4>

              <div className="grid gap-5 md:grid-cols-2">

                {/* Full Name */}
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                {/* Job Title */}
                <input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title *"
                  required
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                {/* Company */}
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Organization / Company Name *"
                  required
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                {/* Industry */}
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      industry: e.target.value,
                    }))
                  }
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                >
                  <option
                    value=""
                    className="bg-slate-900 text-white"
                  >
                    Select Industry
                  </option>

                  <option
                    value="Banking & Financial Services"
                    className="bg-slate-900 text-white"
                  >
                    Banking & Financial Services
                  </option>

                  <option
                    value="Information Technology"
                    className="bg-slate-900 text-white"
                  >
                    Information Technology
                  </option>

                  <option
                    value="Manufacturing"
                    className="bg-slate-900 text-white"
                  >
                    Manufacturing
                  </option>

                  <option
                    value="Healthcare"
                    className="bg-slate-900 text-white"
                  >
                    Healthcare
                  </option>

                  <option
                    value="Telecommunications"
                    className="bg-slate-900 text-white"
                  >
                    Telecommunications
                  </option>

                  <option
                    value="Retail & E-commerce"
                    className="bg-slate-900 text-white"
                  >
                    Retail & E-commerce
                  </option>

                  <option
                    value="Education"
                    className="bg-slate-900 text-white"
                  >
                    Education
                  </option>

                  <option
                    value="Government"
                    className="bg-slate-900 text-white"
                  >
                    Government
                  </option>

                  <option
                    value="Energy & Utilities"
                    className="bg-slate-900 text-white"
                  >
                    Energy & Utilities
                  </option>

                  <option
                    value="Others"
                    className="bg-slate-900 text-white"
                  >
                    Others
                  </option>
                </select>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work Email Address *"
                  required
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                {/* Phone */}
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number (with country code) *"
                  required
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                {/* LinkedIn */}
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn Profile URL"
                  className="
                    h-14
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/40
                    focus:border-cyan-400/50
                    focus:bg-white/[0.07]
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />
              </div>
            </div>

            {/* --------------------------------------------
                MESSAGE
            --------------------------------------------- */}

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder="Message / Comments"
                rows={4}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition-all
                  placeholder:text-white/40
                  focus:border-cyan-400/50
                  focus:bg-white/[0.07]
                  focus:ring-2
                  focus:ring-cyan-400/10
                "
              />
            </div>

            {/* --------------------------------------------
                INTERESTS
            --------------------------------------------- */}

            <div>
              <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                Your Interests & Objectives
              </h4>

              <p className="mb-4 text-sm text-white/70">
                Select all that apply
              </p>

              <div className="grid gap-3 md:grid-cols-2">

                {interests.map((interest) => {
                  const selected =
                    formData.interests.includes(
                      interest
                    )

                  return (
                    <label
                      key={interest}
                      className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-white/5
                        bg-white/[0.02]
                        p-3
                        text-white
                        transition-all
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/[0.03]
                      "
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() =>
                          handleInterestChange(
                            interest
                          )
                        }
                        className="
                          h-4
                          w-4
                          accent-cyan-400
                        "
                      />

                      <span className="text-sm text-white/80">
                        {interest}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* --------------------------------------------
                AWARDS NOMINATION
            --------------------------------------------- */}

            <div>
              <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                Awards Nomination
              </h4>

              <div className="space-y-4">

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    p-4
                    text-white
                    transition-all
                    hover:border-cyan-400/20
                  "
                >
                  <input
                    type="radio"
                    name="awardNomination"
                    value="Yes"
                    checked={
                      formData.awardNomination ===
                      'Yes'
                    }
                    onChange={handleChange}
                    required
                    className="
                      mt-1
                      h-4
                      w-4
                      accent-cyan-400
                    "
                  />

                  <span className="text-sm leading-6 text-white/80">
                    Yes, I want to nominate myself
                    for an award (Nomination
                    Registration Fee Applies)
                  </span>
                </label>

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    p-4
                    text-white
                    transition-all
                    hover:border-cyan-400/20
                  "
                >
                  <input
                    type="radio"
                    name="awardNomination"
                    value="No"
                    checked={
                      formData.awardNomination ===
                      'No'
                    }
                    onChange={handleChange}
                    className="
                      mt-1
                      h-4
                      w-4
                      accent-cyan-400
                    "
                  />

                  <span className="text-sm leading-6 text-white/80">
                    No, I do not intend to nominate
                    for the award.
                  </span>
                </label>

              </div>
            </div>

            {/* --------------------------------------------
                DATA PRIVACY
            --------------------------------------------- */}

            <div>
              <h4 className="mb-5 text-xl font-semibold text-cyan-400">
                Data Privacy & Consent
              </h4>

              <div className="space-y-4">

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    text-white
                  "
                >
                  <input
                    type="checkbox"
                    name="shareDetails"
                    checked={
                      formData.shareDetails
                    }
                    onChange={handleChange}
                    className="
                      mt-1
                      h-4
                      w-4
                      accent-cyan-400
                    "
                  />

                  <span className="text-sm leading-6 text-white/70">
                    I agree to share my details
                    with event partners for
                    networking purposes
                  </span>
                </label>

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    text-white
                  "
                >
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={
                      formData.receiveUpdates
                    }
                    onChange={handleChange}
                    className="
                      mt-1
                      h-4
                      w-4
                      accent-cyan-400
                    "
                  />

                  <span className="text-sm leading-6 text-white/70">
                    I agree to receive updates
                    about this and future events
                  </span>
                </label>

              </div>
            </div>

            {/* --------------------------------------------
                ERROR
            --------------------------------------------- */}

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="
                    rounded-xl
                    border
                    border-red-500/30
                    bg-red-500/10
                    p-4
                    text-sm
                    text-red-300
                  "
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* --------------------------------------------
                SUBMIT BUTTON
            --------------------------------------------- */}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={
                !loading
                  ? {
                      scale: 1.01,
                    }
                  : {}
              }
              whileTap={
                !loading
                  ? {
                      scale: 0.99,
                    }
                  : {}
              }
              className="
                h-14
                w-full
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(6,182,212,0.12)]
                transition-all
                hover:shadow-[0_10px_45px_rgba(6,182,212,0.22)]
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
                <span className="flex items-center justify-center gap-2">
                  Submit Registration

                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </motion.button>

          </motion.form>

        ) : (

          /* ==================================================
             THANK YOU CARD
          ================================================== */

          <motion.div
            key="thank-you-card"
            initial={{
              x: 100,
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[520px]
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-cyan-400/20
              bg-[#06111f]
              p-8
              text-center
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
            "
          >

            {/* --------------------------------------------
                BACKGROUND GLOWS
            --------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-24
                h-72
                w-72
                rounded-full
                bg-blue-600/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-96
                w-96
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.025]
                blur-3xl
              "
            />

            {/* --------------------------------------------
                CONTENT
            --------------------------------------------- */}

            <div className="relative z-10 max-w-xl">

              {/* Success Icon */}

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 180,
                  damping: 12,
                }}
                className="
                  mx-auto
                  mb-8
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                  shadow-[0_0_60px_rgba(34,211,238,0.18)]
                "
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-400/10
                  "
                >
                  <svg
                    className="h-9 w-9 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12.5L9.5 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Label */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
                className="
                  mb-3
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                "
              >
                Registration Confirmed
              </motion.p>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.45,
                }}
                className="
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                  md:text-5xl
                "
              >
                Thank You!
              </motion.h2>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.45,
                }}
                className="
                  mx-auto
                  mt-5
                  max-w-lg
                  text-base
                  leading-7
                  text-white/60
                "
              >
                Thank you for registering for the{' '}
                <span className="font-medium text-white">
                  CIO Tech Leadership Conference
                  & Awards.
                </span>{' '}
                Your registration has been
                successfully received.
              </motion.p>

              {/* ------------------------------------------
                  CONFIRMATION BOX
              ------------------------------------------- */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.45,
                }}
                className="
                  mx-auto
                  mt-8
                  max-w-md
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  text-left
                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-4">

                  {/* Mail Icon */}

                  <div
                    className="
                      mt-1
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/10
                      bg-cyan-400/10
                    "
                  >
                    <svg
                      className="h-5 w-5 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M4 7l8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      What&apos;s next?
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/50">
                      Our team will review your
                      registration and contact you
                      with the next steps.
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* ------------------------------------------
                  BOTTOM MESSAGE
              ------------------------------------------- */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
                className="
                  mt-8
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                We look forward to welcoming you
              </motion.p>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}