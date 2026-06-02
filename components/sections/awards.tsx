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
} from 'react-icons/fa'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Award {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface FormState {
  nomineeName: string
  nomineeTitle: string
  nomineeCompany: string
  nomineeCategory: string
  nominatorName: string
  nominatorEmail: string
  nomineeReason: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const awards: Award[] = [
  {
    title: 'CIO of the Year',
    description:
      'Recognizing exceptional leadership and business impact through technology transformation.',
    icon: FaAward,
  },
  {
    title: 'AI & Innovation Excellence',
    description:
      'Honoring leaders driving AI adoption and breakthrough innovation.',
    icon: FaBrain,
  },
  {
    title: 'Cybersecurity Leadership',
    description:
      'Recognizing excellence in enterprise security and resilience.',
    icon: FaShieldAlt,
  },
  {
    title: 'Cloud Transformation Excellence',
    description:
      'Celebrating successful cloud-first modernization initiatives.',
    icon: FaCloud,
  },
  {
    title: 'Data & Analytics Leader',
    description:
      'Honoring data-driven decision making and analytics leadership.',
    icon: FaDatabase,
  },
  {
    title: 'Emerging CIO of the Year',
    description:
      'Recognizing next-generation transformational technology leaders.',
    icon: FaRocket,
  },
  {
    title: 'Women in Technology Leadership',
    description:
      'Celebrating women driving innovation and digital transformation.',
    icon: FaFemale,
  },
  {
    title: 'Digital Transformation Leader',
    description:
      'Recognizing visionary leaders transforming business through technology.',
    icon: FaChartLine,
  },
]

const categories = [
  'CIO of the Year',
  'Digital Transformation Leader',
  'AI & Innovation Excellence',
  'Cybersecurity Leadership',
  'Cloud Transformation Excellence',
  'Data & Analytics Leader',
  'Women in Technology Leadership',
  'Emerging CIO of the Year',
]

const initialForm: FormState = {
  nomineeName: '',
  nomineeTitle: '',
  nomineeCompany: '',
  nomineeCategory: '',
  nominatorName: '',
  nominatorEmail: '',
  nomineeReason: '',
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
      {/* Hover gradient overlay */}
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

function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-400">{label} *</label>
      <div className={error ? 'ring-1 ring-red-500/60 rounded-xl' : ''}>
        {children}
      </div>
    </div>
  )
}

function NominationModal({
  onClose,
}: {
  onClose: () => void
}) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const inputClass =
    'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-cyan-500/50 transition-colors'

  function set(key: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: false }))
    }
  }

  function handleSubmit() {
    const required: (keyof FormState)[] = [
      'nomineeName',
      'nomineeTitle',
      'nomineeCompany',
      'nomineeCategory',
      'nominatorName',
      'nominatorEmail',
      'nomineeReason',
    ]
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    required.forEach((k) => {
      if (!form[k].trim()) newErrors[k] = true
    })
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/20 bg-[#0f1629] p-8 shadow-2xl">

        {submitted ? (
          /* ── Success state ── */
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 border border-green-500/30">
              <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Nomination Submitted!</h3>
            <p className="text-slate-400">
              Thank you — we&apos;ll review your nomination and be in touch.
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all hover:scale-105"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Submit a Nomination</h2>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <FormField label="Nominee Full Name" error={errors.nomineeName}>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Sarah Johnson"
                  value={form.nomineeName}
                  onChange={set('nomineeName')}
                />
              </FormField>

              <FormField label="Nominee Job Title" error={errors.nomineeTitle}>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Chief Information Officer"
                  value={form.nomineeTitle}
                  onChange={set('nomineeTitle')}
                />
              </FormField>

              <FormField label="Company / Organisation" error={errors.nomineeCompany}>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Acme Corp"
                  value={form.nomineeCompany}
                  onChange={set('nomineeCompany')}
                />
              </FormField>

              <FormField label="Award Category" error={errors.nomineeCategory}>
                <select
                  className={inputClass}
                  value={form.nomineeCategory}
                  onChange={set('nomineeCategory')}
                >
                  <option value="">Select a category…</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Your Name (Nominator)" error={errors.nominatorName}>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Your full name"
                  value={form.nominatorName}
                  onChange={set('nominatorName')}
                />
              </FormField>

              <FormField label="Your Email" error={errors.nominatorEmail}>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  value={form.nominatorEmail}
                  onChange={set('nominatorEmail')}
                />
              </FormField>

              <FormField label="Why are you nominating this person?" error={errors.nomineeReason}>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y`}
                  placeholder="Describe their achievements, impact, and why they deserve this award…"
                  value={form.nomineeReason}
                  onChange={set('nomineeReason')}
                />
              </FormField>

              <button
                onClick={handleSubmit}
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,174,255,0.25)]"
              >
                Submit Nomination
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Page Component ───────────────────────────────────────────────────────────

export  function Awards() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20">

      

      {/* ── Header ── */}
      <section className="mb-16 text-center">
         {/* ── Background Effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          <FaAward />
          CIO Excellence Awards 2025
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-white">
          Recognizing{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technology Leaders
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          Celebrating the innovators, visionaries, and changemakers shaping the
          future of enterprise technology.
        </p>
      </section>

      {/* ── Awards Grid ── */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-20">
        {awards.map((award, idx) => (
          <AwardCard key={idx} award={award} />
        ))}
      </div>

      {/* ── Nomination CTA ── */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent p-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,255,0.15),transparent_70%)]" />

        <div className="relative">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Nominations Open
          </span>

          <h3 className="mt-6 text-4xl font-black text-white">
            Nominate an Industry Leader
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Celebrate excellence in technology leadership by nominating
            outstanding CIOs, CTOs, CISOs, CDOs and digital transformation
            leaders.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,174,255,0.3)]"
          >
            Submit Nomination
          </button>
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && <NominationModal onClose={() => setShowModal(false)} />}
    </main>
  )
}