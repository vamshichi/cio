'use client'

import { useState, useEffect, useRef, useId } from 'react'
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

import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import { Space_Grotesk, Manrope } from 'next/font/google'

// ─── Design tokens — shared dark navy / teal system ──────────────────────────

const COLORS = {
  base: '#050B18',
  panel: '#0A1530',
  raised: '#0E1B33',
  raisedHover: '#122142',
  cream: '#F6F9F8',
  inkSoft: 'rgba(246,249,248,0.66)',
  muted: 'rgba(246,249,248,0.52)',
  faint: 'rgba(246,249,248,0.32)',
  teal: '#2BC4AE',
  tealDeep: '#0F5850',
  tealLight: '#7EE7D3',
  tealGlow: 'rgba(43,196,174,0.18)',
  line: 'rgba(246,249,248,0.10)',
  lineStrong: 'rgba(246,249,248,0.20)',
  // Added: a dedicated warning/error tone, distinct from the teal accent so
  // "something needs attention" never gets confused with "this is selected".
  warn: '#F0A868',
  warnSoft: 'rgba(240,168,104,0.12)',
}

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

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

type FormErrors = Partial<Record<keyof FormState, string>>

// ─── Data ────────────────────────────────────────────────────────────────────

const delegateAwards: Award[] = [
  {
    title: 'CIO of the Year — Enterprise Transformation',
    description:
      'Recognising exceptional CIO leadership delivering measurable enterprise-wide digital transformation.',
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
      'Honouring leaders driving enterprise AI adoption and intelligent automation at scale.',
    icon: FaBrain,
  },
  {
    title: 'Cloud Transformation Excellence',
    description:
      'Celebrating cloud-first modernisation initiatives that deliver agility and resilience.',
    icon: FaCloud,
  },
  {
    title: 'Cybersecurity & Digital Resilience Leader',
    description:
      'Recognising excellence in enterprise cybersecurity, digital trust, and resilience.',
    icon: FaShieldAlt,
  },
  {
    title: 'Data & Analytics Innovation',
    description:
      'Honouring leaders who harness data and analytics for transformative business outcomes.',
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
      'Recognising leaders redefining customer experience through digital innovation.',
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

const whoShouldNominate = [
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

const WORD_LIMIT = 250
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+()\d][\d\s()-]{6,18}\d$/

function wordCount(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0
}

// Focus ring reused on every interactive element so keyboard users always
// get a visible, on-brand indicator — never suppressed, only restyled.
const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
const focusRingStyle: React.CSSProperties = {
  // @ts-expect-error — CSS custom properties for ring color/offset
  '--tw-ring-color': COLORS.tealLight,
  '--tw-ring-offset-color': COLORS.raised,
}

// ─── Monument motif ──────────────────────────────────────────────────────────

function MonumentLine({
  color = COLORS.tealDeep,
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 640 90"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 90V72h640v18H0Z" fill={color} opacity="0.9" />
      <rect x="48" y="22" width="10" height="50" fill={color} />
      <path d="M48 22h10l-2-10h-6l-2 10Z" fill={color} />
      <rect x="45" y="12" width="16" height="4" fill={color} />
      <path
        d="M180 72V34c0-22 18-34 40-34s40 12 40 34v38h14V20h10v52h14V20h10v52h10V10h10v62h10V20h10v52h10v-38c0-22 18-34 40-34s40 12 40 34v38"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M198 72V44c0-13 10-22 22-22s22 9 22 22v28" stroke={color} strokeWidth="5" />
      <path d="M298 72V44c0-13 10-22 22-22s22 9 22 22v28" stroke={color} strokeWidth="5" />
      <circle cx="120" cy="52" r="14" fill={color} />
      <rect x="117" y="60" width="6" height="12" fill={color} />
      <circle cx="410" cy="52" r="14" fill={color} />
      <rect x="407" y="60" width="6" height="12" fill={color} />
    </svg>
  )
}

// ─── Backdrop — hairline grid + glow orbs + scan line ────────────────────────

function GridGlow({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none">
        <defs>
          <pattern id="awards-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke={COLORS.cream} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#awards-grid)" />
      </svg>

      <div
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ background: COLORS.tealGlow }}
      />
      <div
        className="absolute bottom-[-20%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{ background: 'rgba(43,196,174,0.10)' }}
      />

      {!reduceMotion && (
        <motion.div
          animate={{ y: ['-10%', '1000%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 top-0 h-px w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${COLORS.tealLight}33, transparent)` }}
        />
      )}
    </div>
  )
}

function CornerBrackets({ show = 'hover' }: { show?: 'hover' | 'always' }) {
  const base = 'absolute h-4 w-4 transition-opacity duration-300'
  const opacity = show === 'hover' ? 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100' : 'opacity-60'
  return (
    <>
      <span className={`${base} left-3 top-3 border-l border-t ${opacity}`} style={{ borderColor: COLORS.tealLight }} />
      <span className={`${base} right-3 top-3 border-r border-t ${opacity}`} style={{ borderColor: COLORS.tealLight }} />
      <span className={`${base} bottom-3 left-3 border-b border-l ${opacity}`} style={{ borderColor: COLORS.tealLight }} />
      <span className={`${base} bottom-3 right-3 border-b border-r ${opacity}`} style={{ borderColor: COLORS.tealLight }} />
    </>
  )
}

// ─── Shared marks ──────────────────────────────────────────────────────────

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`${display.className} text-[12px] font-semibold`} style={{ color: COLORS.tealLight }}>
        [
      </span>
      <motion.span
        className="h-[7px] w-[7px] rotate-45"
        style={{ background: COLORS.teal, boxShadow: `0 0 10px ${COLORS.teal}` }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <p
        className={`${display.className} text-[13px] font-semibold uppercase tracking-[0.08em]`}
        style={{ color: COLORS.tealLight }}
      >
        {children}
      </p>
      <span className={`${display.className} text-[12px] font-semibold`} style={{ color: COLORS.tealLight }}>
        ]
      </span>
    </div>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className={`${display.className} flex h-6 w-6 items-center justify-center text-[11px] font-bold`}
        style={{ color: COLORS.base, background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.teal})` }}
      >
        {number}
      </span>
      <span className="h-px max-w-8 flex-1" style={{ background: COLORS.line }} />
      <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: COLORS.muted }}>
        {title}
      </h3>
    </div>
  )
}

// ─── Motion presets ──────────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Award card ──────────────────────────────────────────────────────────────

function AwardCard({ award, index }: { award: Award; index: number }) {
  const Icon = award.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.32), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div
        className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-sm border p-7 transition-all duration-300 sm:p-8"
        style={{
          borderColor: COLORS.line,
          background: COLORS.raised,
        }}
      >
        <CornerBrackets />

        <motion.div
          className="absolute left-0 top-0 h-full w-[2px]"
          style={{ background: `linear-gradient(180deg, ${COLORS.tealLight}, ${COLORS.teal})` }}
          initial={{ scaleY: 0.35, opacity: 0.5 }}
          whileHover={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div
          className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `0 0 0 1px ${COLORS.tealLight}33, 0 24px 50px -24px ${COLORS.tealGlow}` }}
        />

        <div className="relative flex items-start justify-between">
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-300"
            style={{ color: COLORS.base, background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.teal})` }}
            whileHover={{ rotate: -6, scale: 1.08 }}
            transition={{ duration: 0.25 }}
          >
            <Icon className="text-base" aria-hidden="true" />
          </motion.div>

          <span
            className={`${display.className} text-[28px] font-bold leading-none transition-colors duration-300`}
            style={{ color: COLORS.line }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="relative mt-auto pt-10">
          <div
            className="mb-4 h-[3px] w-8 transition-all duration-300 group-hover:w-14"
            style={{ background: COLORS.teal }}
          />

          <h3
            className={`${display.className} max-w-[400px] text-[19px] font-semibold leading-[1.2] tracking-[-0.005em]`}
            style={{ color: COLORS.cream }}
          >
            {award.title}
          </h3>

          <p className="mt-3.5 max-w-[400px] text-[13px] leading-[1.65]" style={{ color: COLORS.muted }}>
            {award.description}
          </p>
        </div>

        <div className="relative mt-7 flex items-center justify-between border-t pt-4" style={{ borderColor: COLORS.line }}>
          <span className="text-[11px]" style={{ color: COLORS.faint }}>
            Delhi &middot; 2026
          </span>
          <span
            className="flex items-center gap-1.5 text-[11px] font-semibold"
            style={{ color: COLORS.tealLight }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: COLORS.teal, boxShadow: `0 0 8px ${COLORS.teal}` }}
              aria-hidden="true"
            />
            Open for nomination
          </span>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Form field primitives ────────────────────────────────────────────────────

function FormField({
  label,
  htmlFor,
  required = true,
  error,
  hint,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  const errorId = `${htmlFor}-error`
  const hintId = `${htmlFor}-hint`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[12px] font-semibold" style={{ color: COLORS.cream }}>
        {label}
        {required && (
          <span style={{ color: COLORS.tealLight }} aria-hidden="true">
            {' '}
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      <div
        style={
          error
            ? { boxShadow: `0 0 0 1px ${COLORS.warn}`, borderRadius: 2 }
            : undefined
        }
      >
        {children}
      </div>

      {error ? (
        <p id={errorId} role="alert" className="flex items-center gap-1.5 text-[11.5px] font-medium" style={{ color: COLORS.warn }}>
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 6v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10" cy="13.5" r="1" fill="currentColor" />
          </svg>
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-[11px]" style={{ color: COLORS.faint }}>
          {hint}
        </p>
      ) : null}
    </div>
  )
}

// A custom checkbox/radio indicator that matches the dark theme instead of
// falling back to the browser's default (unstyled, low-contrast) control.
function TileOption({
  type,
  name,
  value,
  checked,
  onChange,
  children,
}: {
  type: 'radio' | 'checkbox'
  name?: string
  value?: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}) {
  const shape = type === 'radio' ? 'rounded-full' : 'rounded-[3px]'

  return (
    <motion.label
      whileHover={{ x: 2 }}
      className={`flex cursor-pointer items-start gap-3 rounded-sm border px-4 py-3 transition-colors ${focusRing} has-[:focus-visible]:ring-2`}
      style={{
        ...focusRingStyle,
        ...(checked
          ? { borderColor: COLORS.teal, background: 'rgba(43,196,174,0.07)' }
          : { borderColor: COLORS.line, background: 'transparent' }),
      }}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${shape}`}
        style={{
          borderColor: checked ? COLORS.teal : COLORS.lineStrong,
          background: checked ? COLORS.teal : 'transparent',
        }}
        aria-hidden="true"
      >
        {checked && type === 'checkbox' && (
          <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
            <path d="M4 10.5 8.2 15 16 6" stroke={COLORS.base} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {checked && type === 'radio' && <span className="h-1.5 w-1.5 rounded-full" style={{ background: COLORS.base }} />}
      </span>
      <span className="text-[13.5px] leading-[1.5]" style={{ color: COLORS.inkSoft }}>
        {children}
      </span>
    </motion.label>
  )
}

// ─── Nomination modal ────────────────────────────────────────────────────────

const stepVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -24 : 24 }),
}

const stepLabels = ['Nominator', 'Nominee', 'Category', 'Impact'] as const

function NominationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const reduceMotion = useReducedMotion()
  const dialogId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const stepHeadingRef = useRef<HTMLHeadingElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  const isEmpty = JSON.stringify(form) === JSON.stringify(initialForm)

  // Focus management: remember what had focus before opening, move focus
  // into the dialog, and restore focus on close — standard modal behaviour
  // that keyboard and screen-reader users depend on.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement
    dialogRef.current?.focus()
    return () => {
      previouslyFocused.current?.focus?.()
    }
  }, [])

  // Escape to close, and a lightweight focus trap so Tab never escapes the dialog.
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Move focus to the new step's heading so screen-reader users get an
  // announcement of where they are, and scroll it into view.
  useEffect(() => {
    stepHeadingRef.current?.focus()
  }, [step])

  const inputStyle: React.CSSProperties = {
    borderColor: COLORS.line,
    background: 'rgba(246,249,248,0.03)',
    color: COLORS.cream,
  }

  const inputClass = `w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-current placeholder:text-[13px] placeholder:text-[rgba(246,249,248,0.35)] ${focusRing}`

  function set(key: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      let val: string | boolean =
        e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value

      // Enforce the stated word limit on long-form fields as the person
      // types, instead of only flagging it after the fact.
      if (typeof val === 'string' && ['summaryOfAchievement', 'innovationDifferentiation', 'measurableImpact'].includes(key)) {
        const words = val.trim().split(/\s+/).filter(Boolean)
        if (words.length > WORD_LIMIT) {
          val = words.slice(0, WORD_LIMIT).join(' ')
        }
      }

      setForm((prev) => ({ ...prev, [key]: val }))
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function setRadio(key: keyof FormState, value: string) {
    return () => {
      setForm((prev) => ({ ...prev, [key]: value }))
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function validateStep(s: number): boolean {
    const newErrors: FormErrors = {}

    if (s === 1) {
      if (!form.nominatorName.trim()) newErrors.nominatorName = 'Enter your full name.'
      if (!form.nominatorDesignation.trim()) newErrors.nominatorDesignation = 'Enter your designation.'
      if (!form.nominatorOrganisation.trim()) newErrors.nominatorOrganisation = 'Enter your organisation.'
      if (!form.nominatorEmail.trim()) newErrors.nominatorEmail = 'Enter your work email.'
      else if (!EMAIL_RE.test(form.nominatorEmail.trim())) newErrors.nominatorEmail = 'Enter a valid email address.'
      if (!form.nominatorPhone.trim()) newErrors.nominatorPhone = 'Enter a contact number.'
      else if (!PHONE_RE.test(form.nominatorPhone.trim())) newErrors.nominatorPhone = 'Enter a valid phone number.'
    }

    if (s === 2) {
      if (!form.nomineeName.trim()) newErrors.nomineeName = 'Enter the nominee\u2019s name.'
      if (!form.nomineeDesignation.trim()) newErrors.nomineeDesignation = 'Enter the nominee\u2019s designation.'
      if (!form.nomineeOrganisation.trim()) newErrors.nomineeOrganisation = 'Enter the nominee\u2019s organisation.'
      if (!form.industrySector.trim()) newErrors.industrySector = 'Select an industry sector.'
      if (form.industrySector === 'Other' && !form.industrySectorOther.trim()) {
        newErrors.industrySectorOther = 'Tell us the industry sector.'
      }
      if (!form.countryRegion.trim()) newErrors.countryRegion = 'Enter a country or region.'
    }

    if (s === 3) {
      if (!form.awardCategory) newErrors.awardCategory = 'Select one award category to continue.'
    }

    if (s === 4) {
      if (!form.summaryOfAchievement.trim()) newErrors.summaryOfAchievement = 'Summarise the achievement being nominated.'
      if (!form.innovationDifferentiation.trim()) newErrors.innovationDifferentiation = 'Describe what sets this apart.'
      if (!form.measurableImpact.trim()) newErrors.measurableImpact = 'Share at least one measurable outcome.'
      if (!form.consentComms) newErrors.consentComms = 'Consent is required to submit a nomination.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function next() {
    if (validateStep(step)) {
      setDirection(1)
      setStep((s) => s + 1)
    }
  }

  function back() {
    setDirection(-1)
    setStep((s) => s - 1)
  }

  function handleBackdropClick(e: React.MouseEvent) {
    // Only let a stray click dismiss the dialog if nothing has been filled
    // in yet — once someone has started, an accidental click outside the
    // card shouldn't discard their answers.
    if (e.target === e.currentTarget && isEmpty) onClose()
  }

  async function handleSubmit() {
    if (!validateStep(4)) return
    setIsSubmitting(true)
    setSubmitError('')

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

      const payload = { ...form, utmSource, utmMedium, utmCampaign, utmContent }

      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setSubmitError('We couldn\u2019t reach the server. Check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${sans.className} fixed inset-0 z-50 flex items-center justify-center p-4`}
      style={{ background: 'rgba(2,6,15,0.82)', backdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${dialogId}-title`}
        tabIndex={-1}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-sm border p-6 outline-none sm:p-9"
        style={{
          background: COLORS.raised,
          borderColor: COLORS.line,
          boxShadow: `0 30px 90px rgba(2,6,15,0.6), 0 0 0 1px ${COLORS.line}`,
        }}
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            role="status"
            className="flex flex-col items-center gap-4 py-14 text-center"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                color: COLORS.base,
                boxShadow: `0 0 40px ${COLORS.tealGlow}`,
              }}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <h3 id={`${dialogId}-title`} className={`${display.className} text-[24px] font-semibold`} style={{ color: COLORS.cream }}>
              Nomination submitted
            </h3>

            <p className="max-w-sm text-[14px] leading-[1.6]" style={{ color: COLORS.muted }}>
              Thank you — the CIO Tech Leadership Conference team will review your
              nomination and be in touch before the deadline of{' '}
              <strong style={{ color: COLORS.tealLight }}>15 October 2026</strong>.
            </p>

            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-3 rounded-sm px-8 py-3 text-[13px] font-semibold transition-colors ${focusRing}`}
              style={{ background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`, color: COLORS.base, ...focusRingStyle }}
            >
              Close
            </motion.button>
          </motion.div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <Kicker>CIO Tech Awards</Kicker>
                <h2 id={`${dialogId}-title`} className={`${display.className} mt-2.5 text-[22px] font-semibold`} style={{ color: COLORS.cream }}>
                  Leadership Excellence Awards 2026
                </h2>
                <p className="mt-2 text-[12px]" style={{ color: COLORS.muted }}>
                  Nomination deadline: <span style={{ color: COLORS.tealLight, fontWeight: 700 }}>15 October 2026</span>
                </p>
              </div>

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.25 }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border text-[13px] transition-colors ${focusRing}`}
                style={{ borderColor: COLORS.line, color: COLORS.muted, ...focusRingStyle }}
                aria-label="Close nomination form"
              >
                ✕
              </motion.button>
            </div>

            {/* Steps */}
            <div className="mb-3 flex items-start gap-1" aria-hidden="true">
              {stepLabels.map((label, i) => {
                const s = i + 1
                const active = s === step
                const done = s < step

                return (
                  <div key={s} className="flex flex-1 items-center gap-1">
                    <div className="flex flex-1 flex-col items-center gap-2">
                      <motion.div
                        animate={{
                          background:
                            done || active
                              ? `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.teal})`
                              : 'rgba(0,0,0,0)',
                          color: done || active ? COLORS.base : COLORS.muted,
                          borderColor: done || active ? COLORS.teal : COLORS.line,
                          scale: active ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold"
                      >
                        {done ? '✓' : s}
                      </motion.div>
                      <span
                        className="hidden text-[10px] sm:block"
                        style={{ color: active ? COLORS.tealLight : COLORS.faint }}
                      >
                        {label}
                      </span>
                    </div>

                    {i < stepLabels.length - 1 && (
                      <div className="relative h-px flex-1" style={{ background: COLORS.line }}>
                        <motion.div
                          className="absolute inset-0"
                          style={{ background: COLORS.teal, originX: 0 }}
                          initial={false}
                          animate={{ scaleX: done ? 1 : 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Mobile-visible + screen-reader step status */}
            <p className="mb-8 text-[11px] sm:hidden" style={{ color: COLORS.faint }} aria-live="polite">
              Step {step} of {stepLabels.length}: {stepLabels[step - 1]}
            </p>
            <p className="sr-only" aria-live="polite">
              Step {step} of {stepLabels.length}, {stepLabels[step - 1]}
            </p>

            {/* Step content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 1 && (
                    <div className="flex flex-col gap-5">
                      <SectionHeading number="01" title="Nominator details" />
                      <h4 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
                        Nominator details
                      </h4>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormField label="Full name" htmlFor="nominatorName" error={errors.nominatorName}>
                          <input id="nominatorName" type="text" autoComplete="name" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="Your full name" value={form.nominatorName} onChange={set('nominatorName')} aria-invalid={!!errors.nominatorName} aria-describedby={errors.nominatorName ? 'nominatorName-error' : undefined} />
                        </FormField>

                        <FormField label="Designation" htmlFor="nominatorDesignation" error={errors.nominatorDesignation}>
                          <input id="nominatorDesignation" type="text" autoComplete="organization-title" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="e.g. Chief Information Officer" value={form.nominatorDesignation} onChange={set('nominatorDesignation')} aria-invalid={!!errors.nominatorDesignation} />
                        </FormField>
                      </div>

                      <FormField label="Organisation" htmlFor="nominatorOrganisation" error={errors.nominatorOrganisation}>
                        <input id="nominatorOrganisation" type="text" autoComplete="organization" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="Your organisation" value={form.nominatorOrganisation} onChange={set('nominatorOrganisation')} aria-invalid={!!errors.nominatorOrganisation} />
                      </FormField>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormField label="Work email" htmlFor="nominatorEmail" error={errors.nominatorEmail}>
                          <input id="nominatorEmail" type="email" inputMode="email" autoComplete="email" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="you@company.com" value={form.nominatorEmail} onChange={set('nominatorEmail')} aria-invalid={!!errors.nominatorEmail} />
                        </FormField>

                        <FormField label="Contact number" htmlFor="nominatorPhone" error={errors.nominatorPhone}>
                          <input id="nominatorPhone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="+91 98765 43210" value={form.nominatorPhone} onChange={set('nominatorPhone')} aria-invalid={!!errors.nominatorPhone} />
                        </FormField>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex flex-col gap-5">
                      <SectionHeading number="02" title="Nominee details" />
                      <h4 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
                        Nominee details
                      </h4>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormField label="Nominee name" htmlFor="nomineeName" error={errors.nomineeName}>
                          <input id="nomineeName" type="text" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="Full name of nominee" value={form.nomineeName} onChange={set('nomineeName')} aria-invalid={!!errors.nomineeName} />
                        </FormField>

                        <FormField label="Nominee designation" htmlFor="nomineeDesignation" error={errors.nomineeDesignation}>
                          <input id="nomineeDesignation" type="text" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="e.g. CIO, CTO, CISO" value={form.nomineeDesignation} onChange={set('nomineeDesignation')} aria-invalid={!!errors.nomineeDesignation} />
                        </FormField>
                      </div>

                      <FormField label="Organisation" htmlFor="nomineeOrganisation" error={errors.nomineeOrganisation}>
                        <input id="nomineeOrganisation" type="text" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="Nominee's organisation" value={form.nomineeOrganisation} onChange={set('nomineeOrganisation')} aria-invalid={!!errors.nomineeOrganisation} />
                      </FormField>

                      <FormField label="Industry sector" htmlFor="industrySector" error={errors.industrySector}>
                        <div className="relative">
                          <select
                            id="industrySector"
                            className={`${inputClass} appearance-none pr-10`}
                            style={{ ...inputStyle, ...focusRingStyle }}
                            value={form.industrySector}
                            onChange={set('industrySector')}
                            aria-invalid={!!errors.industrySector}
                          >
                            <option value="" style={{ color: '#000' }}>
                              Select a sector…
                            </option>
                            {industrySectors.map((s) => (
                              <option key={s} value={s} style={{ color: '#000' }}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <svg
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path d="M1 1.5 6 6.5 11 1.5" stroke={COLORS.tealLight} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </FormField>

                      {form.industrySector === 'Other' && (
                        <FormField label="Please specify sector" htmlFor="industrySectorOther" error={errors.industrySectorOther}>
                          <input id="industrySectorOther" type="text" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="Specify industry sector" value={form.industrySectorOther} onChange={set('industrySectorOther')} aria-invalid={!!errors.industrySectorOther} />
                        </FormField>
                      )}

                      <FormField label="Country / region of operation" htmlFor="countryRegion" error={errors.countryRegion}>
                        <input id="countryRegion" type="text" className={inputClass} style={{ ...inputStyle, ...focusRingStyle }} placeholder="e.g. India, Singapore" value={form.countryRegion} onChange={set('countryRegion')} aria-invalid={!!errors.countryRegion} />
                      </FormField>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="flex flex-col gap-6">
                      <SectionHeading number="03" title="Category selection" />
                      <h4 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
                        Category selection
                      </h4>

                      {errors.awardCategory && (
                        <p role="alert" className="-mt-3 flex items-center gap-1.5 text-[12px] font-medium" style={{ color: COLORS.warn }}>
                          {errors.awardCategory}
                        </p>
                      )}

                      <fieldset>
                        <legend className="mb-3 text-[12px] font-semibold uppercase tracking-[0.04em]" style={{ color: COLORS.cream }}>
                          Industry delegate categories
                        </legend>

                        <div className="flex flex-col gap-2">
                          {delegateCategories.map((cat) => (
                            <TileOption key={cat} type="radio" name="awardCategory" value={cat} checked={form.awardCategory === cat} onChange={setRadio('awardCategory', cat) as unknown as (e: React.ChangeEvent<HTMLInputElement>) => void}>
                              {cat}
                            </TileOption>
                          ))}
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="mb-3 text-[12px] font-semibold uppercase tracking-[0.04em]" style={{ color: COLORS.cream }}>
                          Solution provider categories
                        </legend>

                        <div className="flex flex-col gap-2">
                          {sponsorCategories.map((cat) => (
                            <TileOption key={cat} type="radio" name="awardCategory" value={cat} checked={form.awardCategory === cat} onChange={setRadio('awardCategory', cat) as unknown as (e: React.ChangeEvent<HTMLInputElement>) => void}>
                              {cat}
                            </TileOption>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="flex flex-col gap-5">
                      <SectionHeading number="04" title="Impact & achievement" />
                      <h4 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
                        Impact and achievement
                      </h4>

                      {([
                        ['summaryOfAchievement', 'Summary of achievement', 'Briefly describe the initiative, leadership, solution, or transformation being nominated.'],
                        ['innovationDifferentiation', 'Innovation & differentiation', 'What makes this initiative, leader, or solution stand out within India\u2019s or the global enterprise technology ecosystem?'],
                        ['measurableImpact', 'Measurable business impact', 'Share measurable outcomes: revenue growth, operational efficiency, AI adoption impact, customer experience improvement, cost optimisation, cyber resilience, enterprise scalability, digital transformation outcomes.'],
                      ] as const).map(([key, label, placeholder]) => {
                        const count = wordCount(form[key])
                        const atLimit = count >= WORD_LIMIT
                        return (
                          <FormField key={key} label={label} htmlFor={key} error={errors[key]}>
                            <textarea
                              id={key}
                              className={`${inputClass} min-h-[100px] resize-y`}
                              style={{ ...inputStyle, ...focusRingStyle }}
                              placeholder={placeholder}
                              value={form[key]}
                              onChange={set(key)}
                              aria-invalid={!!errors[key]}
                              aria-describedby={`${key}-count`}
                            />
                            <p
                              id={`${key}-count`}
                              className="mt-1 text-[11px]"
                              style={{ color: atLimit ? COLORS.warn : COLORS.faint }}
                            >
                              {count} / {WORD_LIMIT} words{atLimit ? ' — limit reached' : ''}
                            </p>
                          </FormField>
                        )
                      })}

                      <TileOption type="checkbox" checked={form.consentComms} onChange={set('consentComms') as unknown as (e: React.ChangeEvent<HTMLInputElement>) => void}>
                        I agree to be contacted by the CIO Tech Leadership Conference team
                        regarding this nomination and related updates.
                      </TileOption>
                      {errors.consentComms && (
                        <p role="alert" className="-mt-3 text-[11.5px] font-medium" style={{ color: COLORS.warn }}>
                          {errors.consentComms}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {submitError && (
              <p role="alert" className="mt-6 rounded-sm border px-4 py-3 text-[12.5px] font-medium" style={{ borderColor: COLORS.warn, background: COLORS.warnSoft, color: COLORS.warn }}>
                {submitError}
              </p>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t pt-6" style={{ borderColor: COLORS.line }}>
              {step > 1 ? (
                <motion.button
                  type="button"
                  onClick={back}
                  whileHover={{ x: -3 }}
                  className={`rounded-sm border px-6 py-2.5 text-[13px] font-semibold transition-colors ${focusRing}`}
                  style={{ borderColor: COLORS.line, color: COLORS.muted, ...focusRingStyle }}
                >
                  ← Back
                </motion.button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <motion.button
                  type="button"
                  onClick={next}
                  whileHover={{ x: 2, boxShadow: `0 8px 24px -8px ${COLORS.tealGlow}` }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-sm px-8 py-2.5 text-[13px] font-semibold ${focusRing}`}
                  style={{ background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`, color: COLORS.base, ...focusRingStyle }}
                >
                  Next →
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { boxShadow: `0 8px 24px -8px ${COLORS.tealGlow}` } : undefined}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 rounded-sm px-8 py-2.5 text-[13px] font-semibold disabled:cursor-not-allowed ${focusRing}`}
                  style={{
                    background: isSubmitting
                      ? COLORS.raisedHover
                      : `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                    color: isSubmitting ? COLORS.muted : COLORS.base,
                    ...focusRingStyle,
                  }}
                >
                  {isSubmitting && (
                    <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                  {isSubmitting ? 'Submitting…' : 'Submit nomination'}
                </motion.button>
              )}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

// ─── Page component ──────────────────────────────────────────────────────────

const heroLine: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

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

  function closeModal() {
    setShowModal(false)
    if (window.location.hash === '#awards-form') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <main id="awards" className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.base }}>
      {/* =============================================================== */}
      {/* HERO                                                             */}
      {/* =============================================================== */}

      <section
        className="relative overflow-hidden px-5 pb-0 pt-16 text-center sm:px-8 sm:pt-24 lg:px-12 lg:pt-28"
        style={{
          background: `linear-gradient(175deg, ${COLORS.panel} 0%, ${COLORS.base} 70%)`,
        }}
      >
        <GridGlow />

        <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center pb-24 sm:pb-28 lg:pb-32">
          <motion.div initial="hidden" animate="visible" custom={0} variants={heroLine}>
            <Kicker>The CIO Tech Leadership Awards</Kicker>
          </motion.div>

          <div className="mt-6 flex max-w-[900px] flex-col items-center">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroLine}
              className={`${display.className} text-[38px] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[52px] lg:text-[62px]`}
              style={{ color: COLORS.cream }}
            >
              Recognising the people shaping{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                India&rsquo;s digital future.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroLine}
              className="mt-7 max-w-[680px] text-[15px] leading-[1.7]"
              style={{ color: COLORS.muted }}
            >
              A recognition platform for leaders, enterprises and solution
              providers driving measurable transformation across AI, cloud,
              cybersecurity, data and enterprise modernisation.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={heroLine}
              className="mt-9 flex flex-wrap items-center justify-center gap-6"
            >
              <motion.button
                type="button"
                onClick={() => {
                  window.location.hash = 'awards-form'
                  setShowModal(true)
                }}
                whileHover={{
                  y: -2,
                  boxShadow: `0 14px 34px -12px ${COLORS.tealGlow}`,
                }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center gap-3 rounded-sm px-8 py-3.5 text-[13.5px] font-semibold transition-colors ${focusRing}`}
                style={{
                  background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                  color: COLORS.base,
                  ...focusRingStyle,
                }}
              >
                Submit your nomination
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>

              <div className="flex items-center justify-center gap-3 text-[12.5px]" style={{ color: COLORS.faint }}>
                <span>Deadline</span>
                <span className="h-px w-6" style={{ background: COLORS.lineStrong }} />
                <span style={{ color: COLORS.tealLight, fontWeight: 700 }}>15 October 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* =============================================================== */}
        {/* WHO SHOULD NOMINATE                                             */}
        {/* =============================================================== */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="relative mb-20 lg:mb-24"
        >
          <motion.div variants={reveal}>
            <SectionHeading number="01" title="Who should nominate" />
          </motion.div>

          <motion.div variants={reveal} className="overflow-hidden rounded-sm border-l border-t" style={{ borderColor: COLORS.line }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {whoShouldNominate.map((who, index) => (
                <motion.div
                  key={who}
                  variants={reveal}
                  whileHover={{ backgroundColor: 'rgba(43,196,174,0.06)' }}
                  className="group relative border-b border-r p-6 transition-colors duration-200"
                  style={{ borderColor: COLORS.line }}
                >
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-[2px] scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                    style={{ background: COLORS.teal, boxShadow: `0 0 10px ${COLORS.teal}` }}
                  />
                  <div className="flex gap-3">
                    <span className={`${display.className} text-[12px] font-bold`} style={{ color: COLORS.tealLight }} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13.5px] leading-[1.5]" style={{ color: COLORS.inkSoft }}>
                      {who}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* =============================================================== */}
        {/* AWARDS                                                          */}
        {/* =============================================================== */}

        <section className="relative mb-20 lg:mb-24">
          <div className="mb-9 flex flex-col justify-between gap-5 border-b pb-5 sm:flex-row sm:items-end" style={{ borderColor: COLORS.line }}>
            <div>
              <SectionHeading number="02" title="Delegate categories" />
              <h3 className={`${display.className} -mt-1 text-[26px] font-semibold tracking-[-0.01em]`} style={{ color: COLORS.cream }}>
                Recognising technology leadership.
              </h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {delegateAwards.map((award, index) => (
              <AwardCard key={award.title} award={award} index={index} />
            ))}
          </div>
        </section>

        {/* =============================================================== */}
        {/* SOLUTION PROVIDER                                               */}
        {/* =============================================================== */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="relative mb-20 lg:mb-24"
        >
          <motion.div variants={reveal}>
            <SectionHeading number="03" title="Solution provider categories" />
          </motion.div>

          <motion.div
            variants={reveal}
            className="relative overflow-hidden rounded-sm border p-7 sm:p-10"
            style={{ borderColor: COLORS.line, background: COLORS.raised }}
          >
            <CornerBrackets show="always" />
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <h3 className={`${display.className} text-[26px] font-semibold leading-[1.15] tracking-[-0.01em]`} style={{ color: COLORS.cream }}>
                  Recognising the technology ecosystem.
                </h3>

                <p className="mt-5 max-w-md text-[14px] leading-[1.65]" style={{ color: COLORS.muted }}>
                  For the AI, cloud, cybersecurity, SaaS, digital transformation,
                  infrastructure and consulting firms enabling measurable
                  enterprise outcomes across India.
                </p>
              </div>

              <div className="grid overflow-hidden rounded-sm border-l border-t sm:grid-cols-2" style={{ borderColor: COLORS.line }}>
                {sponsorCategories.map((cat, index) => (
                  <motion.div
                    key={cat}
                    whileHover={{ backgroundColor: 'rgba(43,196,174,0.06)' }}
                    className="group relative border-b border-r p-5 transition-colors duration-200"
                    style={{ borderColor: COLORS.line }}
                  >
                    <div
                      className="pointer-events-none absolute left-0 top-0 h-full w-[2px] scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                      style={{ background: COLORS.teal, boxShadow: `0 0 10px ${COLORS.teal}` }}
                    />
                    <div className="flex gap-3">
                      <span className={`${display.className} text-[11px] font-bold`} style={{ color: COLORS.tealLight }} aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] leading-[1.5]" style={{ color: COLORS.inkSoft }}>
                        {cat}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* =============================================================== */}
        {/* CTA                                                             */}
        {/* =============================================================== */}

        <section className="relative overflow-hidden rounded-sm border" style={{ background: COLORS.panel, borderColor: COLORS.line }}>
          <GridGlow />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] opacity-40">
            <MonumentLine color={COLORS.tealDeep} className="h-full w-full" />
          </div>

          <div className="relative p-8 text-center sm:p-14 lg:p-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mx-auto max-w-3xl"
            >
              <motion.div variants={reveal} className="flex justify-center">
                <Kicker>Nominations open</Kicker>
              </motion.div>

              <motion.h3
                variants={reveal}
                className={`${display.className} mt-6 text-[32px] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[42px] lg:text-[50px]`}
                style={{ color: COLORS.cream }}
              >
                Recognise a leader shaping India&rsquo;s digital future.
              </motion.h3>

              <motion.p variants={reveal} className="mx-auto mt-6 max-w-xl text-[14.5px] leading-[1.7]" style={{ color: COLORS.muted }}>
                Recognition is presented live on stage at the 3rd CIO Tech
                Leadership Conference &amp; Awards, Delhi, before an audience
                of enterprise technology decision-makers.
              </motion.p>

              <motion.div variants={reveal} className="mt-8 flex flex-col items-center gap-6">
                <div className="flex items-center gap-3 text-[12.5px]" style={{ color: COLORS.faint }}>
                  <span>Deadline</span>
                  <span className="h-px w-6" style={{ background: COLORS.lineStrong }} />
                  <span style={{ color: COLORS.tealLight, fontWeight: 700 }}>15 October 2026</span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ y: -3, boxShadow: `0 16px 38px -14px ${COLORS.tealGlow}` }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.location.hash = 'awards-form'
                    setShowModal(true)
                  }}
                  className={`group inline-flex items-center gap-3 rounded-sm px-9 py-3.5 text-[14px] font-semibold ${focusRing}`}
                  style={{ background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`, color: COLORS.base, ...focusRingStyle }}
                >
                  Submit your nomination
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>{showModal && <NominationModal onClose={closeModal} />}</AnimatePresence>
    </main>
  )
}