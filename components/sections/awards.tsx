'use client'

import { useState } from 'react'
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

// ─── Types ───────────────────────────────────────────────────────────────────

interface Award {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface FormState {
  // Section 1: Nominator
  nominatorName: string
  nominatorDesignation: string
  nominatorOrganisation: string
  nominatorEmail: string
  nominatorPhone: string
  // Section 2: Nominee
  nomineeName: string
  nomineeDesignation: string
  nomineeOrganisation: string
  industrySector: string
  industrySectorOther: string
  countryRegion: string
  // Section 3: Category
  awardCategory: string
  // Section 4: Impact
  summaryOfAchievement: string
  innovationDifferentiation: string
  measurableImpact: string
  consentComms: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const delegateAwards: Award[] = [
  {
    title: 'CIO of the Year – Enterprise Transformation',
    description: 'Recognizing exceptional CIO leadership delivering measurable enterprise-wide digital transformation.',
    icon: FaAward,
  },
  {
    title: 'Digital Transformation Leader of the Year',
    description: 'Celebrating visionaries who turn bold digital strategy into scalable, lasting business impact.',
    icon: FaChartLine,
  },
  {
    title: 'AI & Intelligent Automation Leadership',
    description: 'Honoring leaders driving enterprise AI adoption and intelligent automation at scale.',
    icon: FaBrain,
  },
  {
    title: 'Cloud Transformation Excellence',
    description: 'Celebrating cloud-first modernization initiatives that deliver agility and resilience.',
    icon: FaCloud,
  },
  {
    title: 'Cybersecurity & Digital Resilience Leader',
    description: 'Recognizing excellence in enterprise cybersecurity, digital trust, and resilience.',
    icon: FaShieldAlt,
  },
  {
    title: 'Data & Analytics Innovation',
    description: 'Honoring leaders who harness data and analytics for transformative business outcomes.',
    icon: FaDatabase,
  },
  {
    title: 'Enterprise Modernisation Excellence',
    description: 'Spotlighting organisations modernising legacy estates with AI, cloud, and automation.',
    icon: FaCogs,
  },
  {
    title: 'Customer Experience Transformation Leader',
    description: 'Recognizing leaders redefining customer experience through digital innovation.',
    icon: FaUserTie,
  },
  {
    title: 'AI Governance & Responsible Innovation',
    description: 'Celebrating leaders championing ethical AI governance and responsible digital innovation.',
    icon: FaLightbulb,
  },
  {
    title: 'Future-Ready Enterprise Leadership',
    description: 'Honouring leaders building scalable, agile, and resilient digital ecosystems for tomorrow.',
    icon: FaRocket,
  },
  {
    title: 'Women in Technology Leadership',
    description: 'Celebrating women driving innovation, digital transformation, and enterprise technology leadership.',
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function AwardCard({ award }: { award: Award }) {
  const Icon = award.icon
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/[0.03] backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2 hover:border-cyan-500/40
        hover:shadow-[0_20px_60px_rgba(0,174,255,0.15)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="relative p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20">
          <Icon className="text-3xl text-cyan-400" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">{award.title}</h3>
        <p className="leading-relaxed text-slate-400">{award.description}</p>
      </div>
    </div>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white shrink-0">
        {number}
      </span>
      <h3 className="text-base font-semibold text-cyan-300 uppercase tracking-widest">{title}</h3>
    </div>
  )
}

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
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-400">
        {label}{required && ' *'}
      </label>
      <div className={error ? 'ring-1 ring-red-500/60 rounded-xl' : ''}>
        {children}
      </div>
    </div>
  )
}

function NominationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const inputClass =
    'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-cyan-500/50 transition-colors'

  function set(key: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const val = e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value
      setForm((prev) => ({ ...prev, [key]: val }))
      setErrors((prev) => ({ ...prev, [key]: false }))
    }
  }

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    if (s === 1) {
      const required: (keyof FormState)[] = ['nominatorName', 'nominatorDesignation', 'nominatorOrganisation', 'nominatorEmail', 'nominatorPhone']
      required.forEach((k) => { if (!String(form[k]).trim()) newErrors[k] = true })
    }
    if (s === 2) {
      const required: (keyof FormState)[] = ['nomineeName', 'nomineeDesignation', 'nomineeOrganisation', 'industrySector', 'countryRegion']
      required.forEach((k) => { if (!String(form[k]).trim()) newErrors[k] = true })
      if (form.industrySector === 'Other' && !form.industrySectorOther.trim()) newErrors.industrySectorOther = true
    }
    if (s === 3) {
      if (!form.awardCategory) newErrors.awardCategory = true
    }
    if (s === 4) {
      const required: (keyof FormState)[] = ['summaryOfAchievement', 'innovationDifferentiation', 'measurableImpact']
      required.forEach((k) => { if (!String(form[k]).trim()) newErrors[k] = true })
      if (!form.consentComms) newErrors.consentComms = true
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function next() { if (validateStep(step)) setStep((s) => s + 1) }
  function back() { setStep((s) => s - 1) }

  async function handleSubmit() {
    if (!validateStep(4)) return
    try {
      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (result.success) setSubmitted(true)
      else alert(result.message)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    }
  }

  const stepLabels = ['Nominator', 'Nominee', 'Category', 'Impact']

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-cyan-500/20 bg-[#0a0f1e] p-8 shadow-2xl">

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 border border-green-500/30">
              <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Nomination Submitted!</h3>
            <p className="text-slate-400 max-w-sm">
              Thank you — the CIO Tech Leadership Conference team will review your nomination and be in touch before the deadline of <strong className="text-white">15 July 2026</strong>.
            </p>
            <button onClick={onClose} className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105">
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white">CIO Tech Leadership Excellence Awards 2026</h2>
                <p className="text-sm text-slate-400 mt-1">Nomination Deadline: <span className="text-cyan-400 font-medium">15 July 2026</span></p>
              </div>
              <button onClick={onClose} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Close modal">
                ✕
              </button>
            </div>

            {/* Step indicators */}
            <div className="flex items-center gap-2 mb-8">
              {stepLabels.map((label, i) => {
                const s = i + 1
                const active = s === step
                const done = s < step
                return (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all ${done ? 'bg-cyan-500 text-white' : active ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' : 'bg-white/5 border border-white/10 text-slate-500'}`}>
                        {done ? '✓' : s}
                      </div>
                      <span className={`text-xs hidden sm:block ${active ? 'text-cyan-400' : 'text-slate-600'}`}>{label}</span>
                    </div>
                    {i < stepLabels.length - 1 && (
                      <div className={`h-px flex-1 transition-all ${done ? 'bg-cyan-500/50' : 'bg-white/10'}`} />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Step 1: Nominator Details */}
            {step === 1 && (
              <div className="flex flex-col gap-5">
                <SectionHeading number="1" title="Nominator Details" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name" error={errors.nominatorName}>
                    <input type="text" className={inputClass} placeholder="Your full name" value={form.nominatorName} onChange={set('nominatorName')} />
                  </FormField>
                  <FormField label="Designation" error={errors.nominatorDesignation}>
                    <input type="text" className={inputClass} placeholder="e.g. Chief Information Officer" value={form.nominatorDesignation} onChange={set('nominatorDesignation')} />
                  </FormField>
                </div>
                <FormField label="Organisation / Company Name" error={errors.nominatorOrganisation}>
                  <input type="text" className={inputClass} placeholder="Your organisation" value={form.nominatorOrganisation} onChange={set('nominatorOrganisation')} />
                </FormField>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Work Email Address" error={errors.nominatorEmail}>
                    <input type="email" className={inputClass} placeholder="you@company.com" value={form.nominatorEmail} onChange={set('nominatorEmail')} />
                  </FormField>
                  <FormField label="Contact Number" error={errors.nominatorPhone}>
                    <input type="tel" className={inputClass} placeholder="+91 98765 43210" value={form.nominatorPhone} onChange={set('nominatorPhone')} />
                  </FormField>
                </div>
              </div>
            )}

            {/* Step 2: Nominee Details */}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <SectionHeading number="2" title="Nominee Details" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Nominee Name" error={errors.nomineeName}>
                    <input type="text" className={inputClass} placeholder="Full name of nominee" value={form.nomineeName} onChange={set('nomineeName')} />
                  </FormField>
                  <FormField label="Nominee Designation / Role" error={errors.nomineeDesignation}>
                    <input type="text" className={inputClass} placeholder="e.g. CIO, CTO, CISO" value={form.nomineeDesignation} onChange={set('nomineeDesignation')} />
                  </FormField>
                </div>
                <FormField label="Organisation / Company Name" error={errors.nomineeOrganisation}>
                  <input type="text" className={inputClass} placeholder="Nominee's organisation" value={form.nomineeOrganisation} onChange={set('nomineeOrganisation')} />
                </FormField>
                <FormField label="Industry Sector" error={errors.industrySector}>
                  <select className={inputClass} value={form.industrySector} onChange={set('industrySector')}>
                    <option value="">Select a sector…</option>
                    {industrySectors.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </FormField>
                {form.industrySector === 'Other' && (
                  <FormField label="Please specify sector" error={errors.industrySectorOther}>
                    <input type="text" className={inputClass} placeholder="Specify industry sector" value={form.industrySectorOther} onChange={set('industrySectorOther')} />
                  </FormField>
                )}
                <FormField label="Country / Region of Operation" error={errors.countryRegion}>
                  <input type="text" className={inputClass} placeholder="e.g. India, Singapore" value={form.countryRegion} onChange={set('countryRegion')} />
                </FormField>
              </div>
            )}

            {/* Step 3: Category Selection */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <SectionHeading number="3" title="Category Selection" />
                {errors.awardCategory && <p className="text-xs text-red-400 -mt-3">Please select an award category.</p>}

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Industry Delegate Categories</p>
                  <div className="flex flex-col gap-2">
                    {delegateCategories.map((cat) => (
                      <label key={cat} className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${form.awardCategory === cat ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}>
                        <input type="radio" name="awardCategory" value={cat} checked={form.awardCategory === cat} onChange={set('awardCategory')} className="accent-cyan-500" />
                        <span className="text-sm text-white">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Solution Provider Categories</p>
                  <div className="flex flex-col gap-2">
                    {sponsorCategories.map((cat) => (
                      <label key={cat} className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${form.awardCategory === cat ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}>
                        <input type="radio" name="awardCategory" value={cat} checked={form.awardCategory === cat} onChange={set('awardCategory')} className="accent-cyan-500" />
                        <span className="text-sm text-white">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Impact & Achievement */}
            {step === 4 && (
              <div className="flex flex-col gap-5">
                <SectionHeading number="4" title="Impact & Achievement Details" />

                <FormField label="Summary of Achievement" error={errors.summaryOfAchievement}>
                  <textarea
                    className={`${inputClass} min-h-[100px] resize-y`}
                    placeholder="Briefly describe the initiative, leadership, solution, or transformation being nominated. (Max 250 words)"
                    value={form.summaryOfAchievement}
                    onChange={set('summaryOfAchievement')}
                  />
                  <p className="text-xs text-slate-600 mt-1">{form.summaryOfAchievement.split(/\s+/).filter(Boolean).length} / 250 words</p>
                </FormField>

                <FormField label="Innovation & Differentiation" error={errors.innovationDifferentiation}>
                  <textarea
                    className={`${inputClass} min-h-[100px] resize-y`}
                    placeholder="What makes this initiative, leader, or solution stand out within India's or the global enterprise technology ecosystem? (Max 250 words)"
                    value={form.innovationDifferentiation}
                    onChange={set('innovationDifferentiation')}
                  />
                  <p className="text-xs text-slate-600 mt-1">{form.innovationDifferentiation.split(/\s+/).filter(Boolean).length} / 250 words</p>
                </FormField>

                <FormField label="Measurable Business Impact" error={errors.measurableImpact}>
                  <textarea
                    className={`${inputClass} min-h-[120px] resize-y`}
                    placeholder="Share measurable outcomes: revenue growth, operational efficiency, AI adoption impact, customer experience improvement, cost optimisation, cyber resilience, enterprise scalability, digital transformation outcomes. (Max 250 words)"
                    value={form.measurableImpact}
                    onChange={set('measurableImpact')}
                  />
                  <p className="text-xs text-slate-600 mt-1">{form.measurableImpact.split(/\s+/).filter(Boolean).length} / 250 words</p>
                </FormField>

                <label className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${errors.consentComms ? 'border-red-500/60' : form.consentComms ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/10 bg-white/[0.02]'}`}>
                  <input type="checkbox" checked={form.consentComms} onChange={set('consentComms')} className="accent-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">I agree to be contacted by the CIO Tech Leadership Conference team regarding this nomination and related updates.</span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 gap-4">
              {step > 1 ? (
                <button onClick={back} className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-all">
                  ← Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button onClick={next} className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,174,255,0.25)]">
                  Next →
                </button>
              ) : (
                <button onClick={handleSubmit} className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,174,255,0.25)]">
                  Submit Nomination
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Page Component ───────────────────────────────────────────────────────────

export function Awards() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main id='awards' className="relative min-h-screen bg-slate-950 px-6 py-20 overflow-hidden">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Header */}
      <section className="relative mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          <FaAward />
          CIO Tech Leadership Excellence Awards 2026
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-white">
          Honouring India's{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Visionaries
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          A premier recognition platform celebrating leaders, enterprises, and solution providers driving measurable transformation across AI, cloud, cybersecurity, data, and enterprise modernization across India.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />Hosted alongside 2nd CIO Tech Leadership Conference & Awards Bangalore 2026</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />Nomination Deadline: <strong className="text-cyan-400">15 July 2026</strong></span>
        </div>
      </section>

      {/* Who Should Nominate */}
      <section className="relative mb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Who Should Nominate</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'CIOs, CTOs & CDOs', 'CISOs & Risk Leaders', 'Heads of AI, Data & Analytics',
              'Digital Transformation Leaders', 'Enterprise Architecture Leaders', 'Cloud & Infrastructure Leaders',
              'Customer Experience & Innovation Leaders', 'BFSI, Retail, Manufacturing, Healthcare Enterprises', 'AI, Cloud, Cybersecurity & SaaS Solution Providers',
              'Digital Transformation & Consulting Firms', 'Enterprise Technology Innovators',
            ].map((who) => (
              <div key={who} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-cyan-500 mt-0.5 shrink-0">✦</span>
                {who}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Grid — Delegate */}
      <section className="relative mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Industry Delegate Award Categories</h2>
        <p className="text-slate-500 text-center text-sm mb-10">For enterprise technology leaders</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {delegateAwards.map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </div>
      </section>

      {/* Solution Provider note */}
      <section className="relative mb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Solution Provider & Sponsor Categories</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-6">
            Recognizing AI, cloud, cybersecurity, SaaS, digital transformation, infrastructure, and consulting firms enabling measurable enterprise outcomes across India.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {sponsorCategories.map((cat) => (
              <span key={cat} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent p-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,255,0.15),transparent_70%)]" />
        <div className="relative">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Nominations Open · Limited Awards · High Prestige
          </span>
          <h3 className="mt-6 text-4xl font-black text-white">
            Nominate a Leader Engineering<br />India's Digital Future
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Recognition presented live on stage at the 2nd CIO Tech Leadership Conference & Awards Bangalore 2026, before an elite audience of enterprise technology decision-makers.
          </p>
          <p className="mt-3 text-sm text-cyan-400 font-medium">Nomination Deadline: 15 July 2026</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,174,255,0.3)]"
          >
            Submit Your Nomination →
          </button>
        </div>
      </div>

      {showModal && <NominationModal onClose={() => setShowModal(false)} />}
    </main>
  )
}