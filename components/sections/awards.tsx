'use client'

import { useState, useEffect } from 'react'
import {
  FaAward,
  FaBrain,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaFemale,
  FaChartLine,
  FaCogs,
  FaUserTie,
  FaLightbulb,
} from 'react-icons/fa'

import { motion } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Award {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface FormState {
  nominatorName: string
  nominatorDesignation: string
  nominatorOrganisation: string
  nominatorEmail: string
  nominatorPhone: string
  nomineeName: string
  nomineeDesignation: string
  nomineeOrganisation: string
  industrySector: string
  industrySectorOther: string
  countryRegion: string
  awardCategory: string
  summaryOfAchievement: string
  innovationDifferentiation: string
  measurableImpact: string
  consentComms: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const delegateAwards: Award[] = [
  {
    title: 'CIO of the Year – Enterprise Transformation',
    description:
      'Recognizing exceptional CIO leadership delivering measurable enterprise-wide digital transformation.',
    icon: FaAward,
  },
  {
    title: 'Digital Transformation Leader of the Year',
    description:
      'Celebrating visionaries who turn bold digital strategy into scalable, lasting business impact.',
    icon: FaChartLine,
  },
  {
    title: 'AI & Intelligent Automation Leadership',
    description:
      'Honoring leaders driving enterprise AI adoption and intelligent automation at scale.',
    icon: FaBrain,
  },
  {
    title: 'Cloud Transformation Excellence',
    description:
      'Celebrating cloud-first modernization initiatives that deliver agility and resilience.',
    icon: FaCloud,
  },
  {
    title: 'Cybersecurity & Digital Resilience Leader',
    description:
      'Recognizing excellence in enterprise cybersecurity, digital trust, and resilience.',
    icon: FaShieldAlt,
  },
  {
    title: 'Data & Analytics Innovation',
    description:
      'Honoring leaders who harness data and analytics for transformative business outcomes.',
    icon: FaDatabase,
  },
  {
    title: 'Enterprise Modernisation Excellence',
    description:
      'Spotlighting organisations modernising legacy estates with AI, cloud, and automation.',
    icon: FaCogs,
  },
  {
    title: 'Customer Experience Transformation Leader',
    description:
      'Recognizing leaders redefining customer experience through digital innovation.',
    icon: FaUserTie,
  },
  {
    title: 'AI Governance & Responsible Innovation',
    description:
      'Celebrating leaders championing ethical AI governance and responsible digital innovation.',
    icon: FaLightbulb,
  },
  {
    title: 'Future-Ready Enterprise Leadership',
    description:
      'Honouring leaders building scalable, agile, and resilient digital ecosystems for tomorrow.',
    icon: FaRocket,
  },
  {
    title: 'Women in Technology Leadership',
    description:
      'Celebrating women driving innovation, digital transformation, and enterprise technology leadership.',
    icon: FaFemale,
  },
]

const industrySectors = [
  'Banking & Financial Services',
  'Retail & E-Commerce',
  'Manufacturing & Industrial',
  'Healthcare & Life Sciences',
  'Technology / IT / SaaS',
  'Telecom & Digital Infrastructure',
  'Logistics & Supply Chain',
  'Media & Entertainment',
  'Energy & Utilities',
  'Government & Public Sector',
  'Other',
]

const delegateCategories = [
  'CIO of the Year – Enterprise Transformation',
  'Digital Transformation Leader of the Year',
  'AI & Intelligent Automation Leadership Award',
  'Cloud Transformation Excellence Award',
  'Cybersecurity & Digital Resilience Leader of the Year',
  'Data & Analytics Innovation Award',
  'Enterprise Modernisation Excellence Award',
  'Customer Experience Transformation Leader',
  'AI Governance & Responsible Innovation Award',
  'Future-Ready Enterprise Leadership Award',
  'Women in Technology Leadership Award',
]

const sponsorCategories = [
  'AI Innovation Solution Provider of the Year',
  'Cloud Technology Excellence Award',
  'Cybersecurity Solution Provider of the Year',
  'Enterprise SaaS Platform of the Year',
  'Digital Transformation Partner of the Year',
  'Data & Analytics Innovation Award',
  'Customer Experience Technology Provider of the Year',
  'Enterprise Infrastructure Innovation Award',
  'Emerging Technology Solution Provider of the Year',
  'Digital Workplace Innovation Award',
  'Enterprise Technology Consulting Firm of the Year',
]

const initialForm: FormState = {
  nominatorName: '',
  nominatorDesignation: '',
  nominatorOrganisation: '',
  nominatorEmail: '',
  nominatorPhone: '',
  nomineeName: '',
  nomineeDesignation: '',
  nomineeOrganisation: '',
  industrySector: '',
  industrySectorOther: '',
  countryRegion: '',
  awardCategory: '',
  summaryOfAchievement: '',
  innovationDifferentiation: '',
  measurableImpact: '',
  consentComms: false,
}

// ─── Background ──────────────────────────────────────────────────────────────

function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(85,199,220,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85,199,220,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
        }}
      />

      <div className="absolute left-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="absolute right-[-200px] top-[25%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

      <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      <div className="absolute left-[6%] top-0 hidden h-full w-px bg-cyan-400/[0.05] lg:block" />
      <div className="absolute right-[6%] top-0 hidden h-full w-px bg-cyan-400/[0.05] lg:block" />
    </div>
  )
}

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[2px] text-cyan-700">
        {number}
      </span>

      <span className="h-px w-8 bg-cyan-400/40" />

      <h3 className="text-[10px] font-semibold uppercase tracking-[2.8px] text-zinc-500">
        {title}
      </h3>
    </div>
  )
}

// ─── Award Card ──────────────────────────────────────────────────────────────

function AwardCard({ award, index }: { award: Award; index: number }) {
  const Icon = award.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.045, 0.32),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative min-h-[330px]"
    >
      <div className="pointer-events-none absolute -inset-4 bg-cyan-400/[0.10] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative h-full min-h-[330px] overflow-hidden border border-black bg-[#050505] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_28px_80px_rgba(0,120,180,0.18)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(85,199,220,0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(85,199,220,0.09) 1px, transparent 1px)
            `,
            backgroundSize: '34px 34px',
            maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
          }}
        />

        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300 via-blue-500/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent transition-all duration-700 group-hover:w-full" />

        <span className="absolute left-4 top-4 h-7 w-7 border-l border-t border-white/20 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-300/70" />
        <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/15 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-300/50" />

        <div className="relative flex h-full min-h-[330px] flex-col p-7 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center border border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-300 transition-all duration-500 group-hover:border-cyan-300/70 group-hover:bg-cyan-300/[0.14] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]">
                <Icon className="text-lg" />
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              </div>

              <div className="hidden sm:block">
                <div className="font-mono text-[7px] uppercase tracking-[2.5px] text-white/35">
                  CIO TECH / AWARDS
                </div>
                <div className="mt-1 font-mono text-[7px] uppercase tracking-[2px] text-cyan-300/60">
                  Excellence Series
                </div>
              </div>
            </div>

            <span className="font-mono text-[34px] font-light leading-none tracking-[-0.08em] text-white/15 transition-colors duration-500 group-hover:text-cyan-300/30">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="mt-auto pt-12">
            <div className="mb-4 h-px w-10 bg-cyan-300/50 transition-all duration-500 group-hover:w-20" />

            <h3 className="max-w-[420px] text-[22px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[24px]">
              {award.title}
            </h3>

            <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/50 transition-colors duration-500 group-hover:text-white/70">
              {award.description}
            </p>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="font-mono text-[7px] uppercase tracking-[2.2px] text-white/30">
              Delhi / 2026
            </span>

            <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[2px] text-cyan-300/55">
              <span className="h-1 w-1 bg-cyan-300" />
              Nomination
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Form Field ──────────────────────────────────────────────────────────────

function FormField({
  label,
  required = true,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[1.5px] text-zinc-500">
        {label}
        {required && ' *'}
      </label>

      <div className={error ? 'rounded-xl ring-1 ring-red-500/60' : ''}>
        {children}
      </div>
    </div>
  )
}

// ─── Nomination Modal ────────────────────────────────────────────────────────

function NominationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({})
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inputClass =
    'w-full rounded-xl border border-black/10 bg-white/[0.04] px-4 py-3 text-sm text-black placeholder-slate-600 outline-none transition-all focus:border-cyan-400/50 focus:bg-white/[0.06]'

  function set(key: keyof FormState) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const val =
        e.target.type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : e.target.value

      setForm((prev) => ({ ...prev, [key]: val }))
      setErrors((prev) => ({ ...prev, [key]: false }))
    }
  }

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}

    if (s === 1) {
      const required: (keyof FormState)[] = [
        'nominatorName',
        'nominatorDesignation',
        'nominatorOrganisation',
        'nominatorEmail',
        'nominatorPhone',
      ]

      required.forEach((k) => {
        if (!String(form[k]).trim()) newErrors[k] = true
      })
    }

    if (s === 2) {
      const required: (keyof FormState)[] = [
        'nomineeName',
        'nomineeDesignation',
        'nomineeOrganisation',
        'industrySector',
        'countryRegion',
      ]

      required.forEach((k) => {
        if (!String(form[k]).trim()) newErrors[k] = true
      })

      if (
        form.industrySector === 'Other' &&
        !form.industrySectorOther.trim()
      ) {
        newErrors.industrySectorOther = true
      }
    }

    if (s === 3) {
      if (!form.awardCategory) newErrors.awardCategory = true
    }

    if (s === 4) {
      const required: (keyof FormState)[] = [
        'summaryOfAchievement',
        'innovationDifferentiation',
        'measurableImpact',
      ]

      required.forEach((k) => {
        if (!String(form[k]).trim()) newErrors[k] = true
      })

      if (!form.consentComms) newErrors.consentComms = true
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function next() {
    if (validateStep(step)) setStep((s) => s + 1)
  }

  function back() {
    setStep((s) => s - 1)
  }

  async function handleSubmit() {
    if (!validateStep(4)) return

    setIsSubmitting(true)

    try {
      let utmSource = ''
      let utmMedium = ''
      let utmCampaign = ''
      let utmContent = ''

      const searchParams = new URLSearchParams(window.location.search)

      utmSource = searchParams.get('utm_source') || ''
      utmMedium = searchParams.get('utm_medium') || ''
      utmCampaign = searchParams.get('utm_campaign') || ''
      utmContent = searchParams.get('utm_content') || ''

      if (!utmSource && window.location.hash.includes('?')) {
        const queryString = window.location.hash.split('?')[1]
        const hashParams = new URLSearchParams(queryString)

        utmSource = hashParams.get('utm_source') || ''
        utmMedium = hashParams.get('utm_medium') || ''
        utmCampaign = hashParams.get('utm_campaign') || ''
        utmContent = hashParams.get('utm_content') || ''
      }

      const payload = {
        ...form,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
      }

      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepLabels = ['Nominator', 'Nominee', 'Category', 'Impact']

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-cyan-400/15 bg-[#07111D] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
              <svg
                className="h-10 w-10 text-cyan-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-black">
              Nomination Submitted!
            </h3>

            <p className="max-w-sm text-zinc-500">
              Thank you — the CIO Tech Leadership Conference team will review
              your nomination and be in touch before the deadline of{' '}
              <strong className="text-black">15 October 2026</strong>.
            </p>

            <button
              onClick={onClose}
              className="mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-black transition-all hover:scale-[1.02]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                  <span className="font-mono text-[8px] uppercase tracking-[2.5px] text-slate-600">
                    CIO TECH / AWARDS
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-black">
                  CIO Tech Leadership Excellence Awards 2026
                </h2>

                <p className="mt-2 text-xs text-zinc-500">
                  Nomination Deadline:{' '}
                  <span className="text-cyan-700">15 October 2026</span>
                </p>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white/[0.03] text-zinc-500 transition-colors hover:text-black"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Steps */}
            <div className="mb-9 flex items-start gap-1">
              {stepLabels.map((label, i) => {
                const s = i + 1
                const active = s === step
                const done = s < step

                return (
                  <div key={s} className="flex flex-1 items-center gap-1">
                    <div className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold transition-all ${
                          done
                            ? 'bg-cyan-500 text-black'
                            : active
                              ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-black'
                              : 'border border-black/10 bg-white/[0.03] text-slate-600'
                        }`}
                      >
                        {done ? '✓' : s}
                      </div>

                      <span
                        className={`hidden text-[9px] uppercase tracking-[1.5px] sm:block ${
                          active ? 'text-cyan-700' : 'text-slate-600'
                        }`}
                      >
                        {label}
                      </span>
                    </div>

                    {i < stepLabels.length - 1 && (
                      <div
                        className={`h-px flex-1 transition-all ${
                          done ? 'bg-cyan-500/50' : 'bg-white/10'
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="flex flex-col gap-5">
                <SectionHeading number="01" title="Nominator Details" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    error={errors.nominatorName}
                  >
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Your full name"
                      value={form.nominatorName}
                      onChange={set('nominatorName')}
                    />
                  </FormField>

                  <FormField
                    label="Designation"
                    error={errors.nominatorDesignation}
                  >
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g. Chief Information Officer"
                      value={form.nominatorDesignation}
                      onChange={set('nominatorDesignation')}
                    />
                  </FormField>
                </div>

                <FormField
                  label="Organisation / Company Name"
                  error={errors.nominatorOrganisation}
                >
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Your organisation"
                    value={form.nominatorOrganisation}
                    onChange={set('nominatorOrganisation')}
                  />
                </FormField>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Work Email Address"
                    error={errors.nominatorEmail}
                  >
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="you@company.com"
                      value={form.nominatorEmail}
                      onChange={set('nominatorEmail')}
                    />
                  </FormField>

                  <FormField
                    label="Contact Number"
                    error={errors.nominatorPhone}
                  >
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="+91 98765 43210"
                      value={form.nominatorPhone}
                      onChange={set('nominatorPhone')}
                    />
                  </FormField>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <SectionHeading number="02" title="Nominee Details" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField label="Nominee Name" error={errors.nomineeName}>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Full name of nominee"
                      value={form.nomineeName}
                      onChange={set('nomineeName')}
                    />
                  </FormField>

                  <FormField
                    label="Nominee Designation / Role"
                    error={errors.nomineeDesignation}
                  >
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g. CIO, CTO, CISO"
                      value={form.nomineeDesignation}
                      onChange={set('nomineeDesignation')}
                    />
                  </FormField>
                </div>

                <FormField
                  label="Organisation / Company Name"
                  error={errors.nomineeOrganisation}
                >
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Nominee's organisation"
                    value={form.nomineeOrganisation}
                    onChange={set('nomineeOrganisation')}
                  />
                </FormField>

                <FormField
                  label="Industry Sector"
                  error={errors.industrySector}
                >
                  <select
                    className={`${inputClass} [&>option]:bg-[#07111D]`}
                    value={form.industrySector}
                    onChange={set('industrySector')}
                  >
                    <option value="">Select a sector…</option>

                    {industrySectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </FormField>

                {form.industrySector === 'Other' && (
                  <FormField
                    label="Please specify sector"
                    error={errors.industrySectorOther}
                  >
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Specify industry sector"
                      value={form.industrySectorOther}
                      onChange={set('industrySectorOther')}
                    />
                  </FormField>
                )}

                <FormField
                  label="Country / Region of Operation"
                  error={errors.countryRegion}
                >
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="e.g. India, Singapore"
                    value={form.countryRegion}
                    onChange={set('countryRegion')}
                  />
                </FormField>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <SectionHeading number="03" title="Category Selection" />

                {errors.awardCategory && (
                  <p className="-mt-3 text-xs text-red-400">
                    Please select an award category.
                  </p>
                )}

                <div>
                  <p className="mb-3 font-mono text-[8px] uppercase tracking-[2px] text-slate-600">
                    Industry Delegate Categories
                  </p>

                  <div className="flex flex-col gap-2">
                    {delegateCategories.map((cat) => (
                      <label
                        key={cat}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                          form.awardCategory === cat
                            ? 'border-cyan-500/50 bg-cyan-500/[0.08]'
                            : 'border-white/[0.08] bg-white/[0.02] hover:border-black/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="awardCategory"
                          value={cat}
                          checked={form.awardCategory === cat}
                          onChange={set('awardCategory')}
                          className="accent-cyan-500"
                        />

                        <span className="text-sm text-zinc-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[8px] uppercase tracking-[2px] text-slate-600">
                    Solution Provider Categories
                  </p>

                  <div className="flex flex-col gap-2">
                    {sponsorCategories.map((cat) => (
                      <label
                        key={cat}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                          form.awardCategory === cat
                            ? 'border-cyan-500/50 bg-cyan-500/[0.08]'
                            : 'border-white/[0.08] bg-white/[0.02] hover:border-black/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="awardCategory"
                          value={cat}
                          checked={form.awardCategory === cat}
                          onChange={set('awardCategory')}
                          className="accent-cyan-500"
                        />

                        <span className="text-sm text-zinc-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="flex flex-col gap-5">
                <SectionHeading
                  number="04"
                  title="Impact & Achievement Details"
                />

                <FormField
                  label="Summary of Achievement"
                  error={errors.summaryOfAchievement}
                >
                  <textarea
                    className={`${inputClass} min-h-[100px] resize-y`}
                    placeholder="Briefly describe the initiative, leadership, solution, or transformation being nominated. (Max 250 words)"
                    value={form.summaryOfAchievement}
                    onChange={set('summaryOfAchievement')}
                  />

                  <p className="mt-1 text-xs text-slate-700">
                    {
                      form.summaryOfAchievement
                        .split(/\s+/)
                        .filter(Boolean).length
                    }{' '}
                    / 250 words
                  </p>
                </FormField>

                <FormField
                  label="Innovation & Differentiation"
                  error={errors.innovationDifferentiation}
                >
                  <textarea
                    className={`${inputClass} min-h-[100px] resize-y`}
                    placeholder="What makes this initiative, leader, or solution stand out within India's or the global enterprise technology ecosystem? (Max 250 words)"
                    value={form.innovationDifferentiation}
                    onChange={set('innovationDifferentiation')}
                  />

                  <p className="mt-1 text-xs text-slate-700">
                    {
                      form.innovationDifferentiation
                        .split(/\s+/)
                        .filter(Boolean).length
                    }{' '}
                    / 250 words
                  </p>
                </FormField>

                <FormField
                  label="Measurable Business Impact"
                  error={errors.measurableImpact}
                >
                  <textarea
                    className={`${inputClass} min-h-[120px] resize-y`}
                    placeholder="Share measurable outcomes: revenue growth, operational efficiency, AI adoption impact, customer experience improvement, cost optimisation, cyber resilience, enterprise scalability, digital transformation outcomes. (Max 250 words)"
                    value={form.measurableImpact}
                    onChange={set('measurableImpact')}
                  />

                  <p className="mt-1 text-xs text-slate-700">
                    {
                      form.measurableImpact
                        .split(/\s+/)
                        .filter(Boolean).length
                    }{' '}
                    / 250 words
                  </p>
                </FormField>

                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-all ${
                    errors.consentComms
                      ? 'border-red-500/60'
                      : form.consentComms
                        ? 'border-cyan-500/50 bg-cyan-500/[0.08]'
                        : 'border-white/[0.08] bg-white/[0.02]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.consentComms}
                    onChange={set('consentComms')}
                    className="mt-0.5 shrink-0 accent-cyan-500"
                  />

                  <span className="text-sm leading-5 text-zinc-500">
                    I agree to be contacted by the CIO Tech Leadership
                    Conference team regarding this nomination and related
                    updates.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="rounded-xl border border-black/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-zinc-500 transition-all hover:text-black"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={next}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-2.5 text-sm font-semibold text-black transition-all hover:scale-[1.02]"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 rounded-xl px-8 py-2.5 text-sm font-semibold text-black transition-all ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-zinc-800'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Page Component ──────────────────────────────────────────────────────────

export function Awards() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#awards-form') {
        setShowModal(true)
      }
    }

    checkHash()
  }, [])

  return (
    <main
      id="awards"
      className="relative overflow-hidden bg-white px-5 py-10 sm:px-8 sm:py-15 lg:px-10 lg:py-15"
    >
      <TechBackground />

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* ================================================================ */}
        {/* HERO                                                            */}
        {/* ================================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20 lg:mb-24"
        >
          
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">

            <div>
              <h2 className="text-[46px] font-semibold leading-[0.96] tracking-[-0.055em] text-black sm:text-6xl lg:text-[76px]">
                Recognising the
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  people shaping
                </span>
                <br />
                digital India.
              </h2>
            </div>

            <div className="max-w-md lg:pb-2">
              <div className="mb-5 h-px w-12 bg-cyan-400" />

              <p className="text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
                A recognition platform celebrating leaders, enterprises and
                solution providers driving measurable transformation across
                AI, cloud, cybersecurity, data and enterprise modernisation.
              </p>
            </div>
          </div>

         
        </motion.section>

        {/* ================================================================ */}
        {/* WHO SHOULD NOMINATE                                             */}
        {/* ================================================================ */}

        <section className="relative mb-20 lg:mb-24">
          {/* <SectionHeading number="07.1" title="Who Should Nominate" /> */}

          <div className="relative overflow-hidden border border-black bg-[#050505] shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'CIOs, CTOs & CDOs',
                'CISOs & Risk Leaders',
                'Heads of AI, Data & Analytics',
                'Digital Transformation Leaders',
                'Enterprise Architecture Leaders',
                'Cloud & Infrastructure Leaders',
                'Customer Experience & Innovation Leaders',
                'BFSI, Retail, Manufacturing, Healthcare Enterprises',
                'AI, Cloud, Cybersecurity & SaaS Solution Providers',
                'Digital Transformation & Consulting Firms',
                'Enterprise Technology Innovators',
              ].map((who, index) => (
                <div
                  key={who}
                  className="group relative border-b border-white/[0.09] p-6 transition-all duration-300 hover:bg-white/[0.045] sm:border-l sm:border-white/[0.09] lg:border-l lg:border-white/[0.09]"
                >
                  <div className="flex gap-3">
                    <span className="font-mono text-[9px] text-cyan-700/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-sm leading-5 text-white/65 transition-colors group-hover:text-white">
                      {who}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* AWARDS                                                          */}
        {/* ================================================================ */}

        <section className="relative mb-20 lg:mb-24">
          <div className="mb-9 flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end">
            <div>
              {/* <SectionHeading
                number="07.2"
                title="Industry Delegate Categories"
              /> */}

              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
                Recognising technology leadership.
              </h3>
            </div>

            {/* <span className="font-mono text-[8px] uppercase tracking-[2px] text-slate-700">
              {delegateAwards.length} Categories
            </span> */}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {delegateAwards.map((award, index) => (
              <AwardCard key={award.title} award={award} index={index} />
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SOLUTION PROVIDER                                               */}
        {/* ================================================================ */}

        <section className="relative mb-20 lg:mb-24">
          
          <div className="relative overflow-hidden border border-black bg-[#050505] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">
                  Recognising the
                  <br />
                  <span className="text-cyan-700">
                    technology ecosystem.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                  Recognizing AI, cloud, cybersecurity, SaaS, digital
                  transformation, infrastructure and consulting firms
                  enabling measurable enterprise outcomes across India.
                </p>
              </div>

              <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
                {sponsorCategories.map((cat, index) => (
                  <div
                    key={cat}
                    className="group bg-[#050505] p-5 transition-colors hover:bg-[#0B1D2B]"
                  >
                    <div className="flex gap-3">
                      <span className="font-mono text-[8px] text-cyan-700/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-xs leading-5 text-white/55 transition-colors group-hover:text-white/80">
                        {cat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CTA                                                             */}
        {/* ================================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border border-cyan-400/20 bg-black"
        >
          {/* Technical glow */}
          <div className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(85,199,220,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(85,199,220,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative p-8 text-center sm:p-12 lg:p-16">
            <div className="mx-auto max-w-4xl">

              <span className="font-mono text-[9px] uppercase tracking-[3px] text-cyan-700">
                Nominations Open
              </span>

              <h3 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Recognise a leader
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  shaping India's digital future.
                </span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
                Recognition presented live on stage at the 3rd CIO Tech
                Leadership Conference & Awards Delhi 2026 before an audience
                of enterprise technology decision-makers.
              </p>

              <div className="mt-7 flex flex-col items-center gap-5">
                <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[2px] text-slate-600">
                  <span>Deadline</span>
                  <span className="h-px w-6 bg-cyan-400/40" />
                  <span className="text-cyan-700">
                    15 October 2026
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                 
                  <button
                    onClick={() => {
                      window.location.hash = 'awards-form'
                      setShowModal(true)
                    }}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(34,211,238,0.18)]"
                  >
                    Submit Your Nomination

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom metadata */}
       
      </div>

      {showModal && (
        <NominationModal onClose={() => setShowModal(false)} />
      )}
    </main>
  )
}
