'use client'

import { motion } from 'framer-motion'
import {
  FiTarget,
  FiShield,
  FiCloud,
  FiZap,
  FiUsers,
  FiGlobe,
  FiAward,
  FiTrendingUp,
  FiBriefcase,
  FiCheckCircle,
} from 'react-icons/fi'

// ─── Data ────────────────────────────────────────────────────────────────────

const focusAreas = [
  { title: 'AI-Led Enterprise Transformation', icon: FiZap },
  { title: 'Cloud, Data & FinOps Strategy', icon: FiCloud },
  { title: 'Cybersecurity & Digital Resilience', icon: FiShield },
  { title: 'Customer Experience & Innovation', icon: FiTrendingUp },
  { title: 'CIO Leadership & Business Alignment', icon: FiTarget },
]

const highlights = [
  {
    title: 'Global Thought Leaders',
    description: 'Learn from 25+ elite speakers across industries and technology domains.',
    icon: FiUsers,
  },
  {
    title: 'Cross-Industry Insights',
    description: 'Gain practical insights from BFSI, Retail, Manufacturing, Healthcare and Telecom leaders.',
    icon: FiGlobe,
  },
  {
    title: 'Strategic Learning',
    description: 'Actionable strategies on AI, Cloud, Cybersecurity and Digital Transformation.',
    icon: FiBriefcase,
  },
  {
    title: 'Executive Networking',
    description: 'Build meaningful relationships with CIOs, CTOs, CISOs and technology executives.',
    icon: FiUsers,
  },
  {
    title: 'Leadership Excellence',
    description: 'Recognizing innovation, leadership and technology excellence.',
    icon: FiAward,
  },
  {
    title: 'Premium Experience',
    description: 'Luxury venue, curated sessions and world-class hospitality.',
    icon: FiCheckCircle,
  },
]

const bangaloreReasons = [
  { label: "India's Leading Technology Hub", icon: FiZap },
  { label: 'Home To Global Capability Centers', icon: FiGlobe },
  { label: 'Largest Startup Ecosystem', icon: FiTrendingUp },
  { label: 'Cross-Industry Innovation Capital', icon: FiBriefcase },
  { label: "India's Largest GCC Ecosystem", icon: FiTarget },
]

const benefits = [
  "Learn directly from India's leading CIOs and technology pioneers",
  'Gain practical AI and Digital Transformation strategies',
  'Connect with enterprise decision makers and industry peers',
  'Discover emerging technologies and future trends',
  'Explore innovative solutions from technology partners',
  'Celebrate leadership and innovation excellence',
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay },
})

// ─── Small reusable pill ──────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-indigo-600">
      {children}
    </span>
  )
}

// ─── Section divider line ─────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="mx-auto mt-6 flex items-center gap-3 justify-center">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden  bg-slate-950  py-28"
    >
      {/* Subtle dot-grid texture
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      {/* ── Background Effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>
      {/* Soft color washes */}
      {/* <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[120px]" />  */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div {...fadeUp()} className="mb-24 text-center">
          <Eyebrow>About The Event</Eyebrow>
          <h2 className="mt-7 text-5xl font-black tracking-tight text-slate-100 md:text-6xl">
            CIO Tech Leadership Conference & Awards {' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              - Bengaluru 2026
            </span>
          </h2>
          <Divider />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-500 md:text-xl">
            India's most influential CIOs, CTOs, CISOs, CDOs and technology
            leaders converge to explore AI, Digital Transformation,
            Cybersecurity, Cloud Innovation and Enterprise Leadership.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
            Designed exclusively for senior technology decision makers — a
            powerful platform for executive networking, strategic learning,
            innovation showcase and recognition of technology excellence.
          </p>
        </motion.div>

        {/* ── Focus + Highlights ── */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Focus Areas */}
          <motion.div {...fadeLeft()}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-indigo-500">Agenda</p>
            <h3 className="mb-8 text-3xl font-black text-slate-100">Our Focus</h3>
            <div className="flex flex-col gap-3">
              {focusAreas.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    {...fadeLeft(i * 0.08)}
                    className="group flex items-center gap-5 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-indigo-200 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100 transition-all duration-300 group-hover:from-indigo-100 group-hover:to-sky-100">
                      <Icon className="text-lg text-indigo-600" />
                    </div>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                    <div className="ml-auto h-4 w-4 flex-shrink-0 rounded-full border-2 border-slate-200 transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-indigo-50" />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div {...fadeRight()}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-indigo-500">Experience</p>
            <h3 className="mb-8 text-3xl font-black text-slate-100">Key Highlights</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp(i * 0.08)}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100">
                      <Icon className="text-lg text-indigo-600" />
                    </div>
                    <h4 className="mb-1.5 font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>

        {/* ── Why Bengaluru ── */}
        <motion.div {...fadeUp()} className="mt-32 ">
          <div className="text-center">
            <Eyebrow>Location</Eyebrow>
            <h3 className="mt-6 text-4xl font-black text-slate-100 md:text-5xl">
              Why{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Bengaluru
              </span>
            </h3>
            <Divider />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
              India's technology capital continues to lead the country's digital
              transformation journey — the perfect host for innovation leaders
              and global enterprises.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {bangaloreReasons.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  {...fadeUp(i * 0.1)}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-lg"
                >
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-sky-50/0 transition-all duration-300 group-hover:from-indigo-50/80 group-hover:to-sky-50/80" />
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50">
                      <Icon className="text-2xl text-indigo-600" />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-slate-800">{item.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div {...fadeUp()} className="mt-20 md:mt-32">
  <div className="overflow-hidden rounded-3xl md:rounded-[40px] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 shadow-xl">

    {/* Top accent bar */}
    <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-sky-500" />

    <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-14 lg:p-16">

      {/* Left */}
      <motion.div {...fadeLeft()}>
        <Eyebrow>Why Attend</Eyebrow>

        <h3 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          Unlock Strategic{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
            Business Advantage
          </span>
        </h3>

        <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
          Gain actionable insights, connect with industry leaders and discover
          the strategies shaping the future of enterprise technology.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-10 md:gap-4">
          {[
            { num: '20+', label: 'Speakers' },
            { num: '200+', label: 'Delegates' },
            { num: '1 Day', label: 'Intensive' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-indigo-100 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-2xl font-black text-indigo-600">
                {s.num}
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 md:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div {...fadeRight()} className="flex flex-col gap-3">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit}
            {...fadeRight(i * 0.07)}
            className="
              flex items-start gap-3
              rounded-2xl
              border border-slate-100
              bg-white
              px-4 py-4
              md:px-5
              shadow-sm
              transition-all duration-300
              hover:border-indigo-200
              hover:shadow-md
            "
          >
            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500">
              <FiCheckCircle className="text-xs text-white" />
            </div>

            <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">
              {benefit}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </div>
</motion.div>
      </div>
    </section>
  )
}