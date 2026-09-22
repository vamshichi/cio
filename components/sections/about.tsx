'use client'

import {
  motion,
  Variants,
  animate,
  useInView,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Space_Grotesk, Manrope } from 'next/font/google'
import type { IconType } from 'react-icons'

import {
  FiArrowUpRight,
  FiUsers,
  FiCompass,
  FiAward,
  FiGift,
} from 'react-icons/fi'

import Image from 'next/image'

/* =========================================================
   DESIGN TOKENS — all-dark navy system
   ---------------------------------------------------------
   Every section now lives on the same deep-navy ground, with
   three tonal steps (base / panel / raised) for depth instead
   of switching between light and dark. Teal stays the single
   accent; a hairline grid + soft glow orbs carry the "advanced
   event" feel instead of colour changes.
========================================================= */

const COLORS = {
  base: '#050B18', // deepest — page background
  panel: '#0A1530', // one step up — alternating section ground
  raised: '#0E1B33', // cards, raised surfaces
  raisedHover: '#122142',
  cream: '#F6F9F8',
  ink: '#F6F9F8',
  inkSoft: 'rgba(246,249,248,0.66)',
  muted: 'rgba(246,249,248,0.52)',
  faint: 'rgba(246,249,248,0.32)',
  teal: '#2BC4AE', // primary accent
  tealDeep: '#0F5850',
  tealLight: '#7EE7D3',
  tealGlow: 'rgba(43,196,174,0.18)',
  line: 'rgba(246,249,248,0.10)',
  lineStrong: 'rgba(246,249,248,0.18)',
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

/* =========================================================
   BACKDROP — hairline grid + glow orb, used across sections
   to give the dark ground texture without lightening it
========================================================= */

function GridGlow({
  glow = true,
  className = '',
}: {
  glow?: boolean
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none">
        <defs>
          <pattern id="cio-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke={COLORS.cream} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cio-grid)" />
      </svg>
      {glow && (
        <>
          <div
            className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[140px]"
            style={{ background: COLORS.tealGlow }}
          />
          <div
            className="absolute bottom-[-20%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[130px]"
            style={{ background: 'rgba(43,196,174,0.10)' }}
          />
        </>
      )}
    </div>
  )
}

/* =========================================================
   MONUMENT MOTIF — recoloured for a glowing teal-on-navy line
========================================================= */

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

/* =========================================================
   DATA
========================================================= */

const metrics = [
  { number: '20+', label: 'Speakers', caption: 'On the programme' },
  { number: '200+', label: 'Delegates', caption: 'In the room' },
  { number: '40+', label: 'Introductions', caption: 'Made on the day' },
]

const tracks = [
  {
    order: '01',
    title: 'Artificial Intelligence',
    text: 'What AI is actually changing inside the enterprise — and what it isn\u2019t, yet.',
  },
  {
    order: '02',
    title: 'Cloud, Data & Cost',
    text: 'Building infrastructure that is scalable and answerable to the CFO.',
  },
  {
    order: '03',
    title: 'Security & Resilience',
    text: 'Digital trust as a leadership responsibility, not a compliance line item.',
  },
  {
    order: '04',
    title: 'Customer Experience',
    text: 'Where technology investment actually meets the customer.',
  },
  {
    order: '05',
    title: 'The CIO Role',
    text: 'Technology leadership\u2019s changing seat at the business table.',
  },
]

const industries = [
  'Banking & Financial Services',
  'Insurance',
  'FinTech',
  'Manufacturing',
  'Automotive',
  'Healthcare',
  'IT & Technology',
  'Telecom',
  'Retail & E-commerce',
  'Energy & Utilities',
  'Infrastructure',
  'Logistics & Transportation',
  'Government & Public Sector',
  'Media & Entertainment',
  'Real Estate',
  'Education',
  'Travel & Hospitality',
  'Consumer & FMCG',
]

const benefits = [
  {
    title: 'Hear it first',
    text: 'Real perspectives on the decisions shaping enterprise technology, from people making them.',
    icon: FiCompass,
  },
  {
    title: 'Meet the room',
    text: 'A closed gathering of senior technology leaders and the partners who work with them.',
    icon: FiUsers,
  },
  {
    title: 'Recognise the work',
    text: 'The Awards mark the teams and leaders who turned strategy into results this year.',
    icon: FiAward,
  },
  {
    title: 'Leave with something',
    text: 'Conversations built to continue after the day ends — not just business cards.',
    icon: FiGift,
  },
]

/* =========================================================
   MOTION
========================================================= */

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

/* =========================================================
   SHARED MARKS
========================================================= */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`${display.className} text-[12px] font-semibold tracking-[0.01em]`}
        style={{ color: COLORS.tealLight }}
      >
        [
      </span>
      <span
        className="h-[6px] w-[6px] rotate-45"
        style={{ background: COLORS.teal, boxShadow: `0 0 12px ${COLORS.teal}` }}
      />
      <p
        className={`${display.className} text-[13px] font-semibold tracking-[0.08em] uppercase`}
        style={{ color: COLORS.tealLight }}
      >
        {children}
      </p>
      <span
        className={`${display.className} text-[12px] font-semibold tracking-[0.01em]`}
        style={{ color: COLORS.tealLight }}
      >
        ]
      </span>
    </div>
  )
}

function EventStamp() {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`${sans.className} text-[11px] font-semibold tracking-[0.02em]`}
        style={{ color: COLORS.cream }}
      >
        New Delhi
      </span>
      <span
        className="h-[3px] w-[3px] rounded-full"
        style={{ background: COLORS.teal, boxShadow: `0 0 6px ${COLORS.teal}` }}
      />
      <span
        className={`${sans.className} text-[11px] tracking-[0.02em]`}
        style={{ color: COLORS.muted }}
      >
        2026 Edition
      </span>
    </div>
  )
}

/* =========================================================
   1 — HERO
========================================================= */

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, numericValue, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, numericValue])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

function Hero() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.base }}>
      <GridGlow />
      <div className="relative mx-auto max-w-[1240px] px-5 pb-14 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
            <motion.div variants={reveal}>
              <Kicker>The CIO Tech Leadership Conference &amp; Awards</Kicker>

              <h1
                className={`${display.className} mt-5 max-w-2xl text-[44px] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-[58px] lg:text-[70px]`}
                style={{ color: COLORS.cream }}
              >
                More than an event.
                <br />
                <span
                  style={{
                    background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  A room, once a year.
                </span>
              </h1>

              <p
                className="mt-7 max-w-[480px] text-[16px] leading-[1.65] sm:text-[17px]"
                style={{ color: COLORS.inkSoft }}
              >
                Senior technology leaders, the people building alongside them, and one
                day set aside to talk plainly about what&rsquo;s working, what isn&rsquo;t,
                and what comes next.
              </p>

              <div className="mt-9">
                <a
                  href="#delegateenquiry"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm px-5 py-3 text-[14px] font-semibold"
                  style={{
                    color: COLORS.base,
                    background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                    boxShadow: `0 0 0 1px ${COLORS.lineStrong}, 0 12px 30px -12px ${COLORS.tealGlow}`,
                  }}
                >
                  Request a delegate seat
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div variants={reveal} className="relative">
              <div
                className="relative overflow-hidden rounded-sm border"
                style={{ borderColor: COLORS.line, background: COLORS.raised }}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-sm"
                  style={{ boxShadow: `inset 0 0 0 1px ${COLORS.line}` }}
                />
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/about-event-collage.png"
                    alt="Delegates and speakers at the CIO Tech Leadership Conference"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover opacity-95"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 55%, ${COLORS.base} 130%)` }}
                  />
                </div>
                {/* corner brackets — "advanced" dashboard framing */}
                <span className="absolute left-3 top-3 h-4 w-4 border-l border-t" style={{ borderColor: COLORS.tealLight }} />
                <span className="absolute right-3 top-3 h-4 w-4 border-r border-t" style={{ borderColor: COLORS.tealLight }} />
                <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l" style={{ borderColor: COLORS.tealLight }} />
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r" style={{ borderColor: COLORS.tealLight }} />
              </div>
            </motion.div>
          </div>

          {/* Programme details bar */}
          <motion.div
            variants={reveal}
            className="relative mt-14 grid overflow-hidden rounded-sm border sm:grid-cols-3"
            style={{ borderColor: COLORS.line, background: COLORS.raised }}
          >
            {metrics.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative py-7 transition-colors duration-300 hover:bg-[rgba(43,196,174,0.05)] sm:px-8 sm:py-8 ${
                  index !== 0 ? 'border-t sm:border-l sm:border-t-0' : ''
                }`}
                style={{ borderColor: COLORS.line }}
              >
                <span
                  className={`${display.className} absolute right-6 top-6 hidden text-[11px] font-semibold tracking-[0.05em] sm:block`}
                  style={{ color: COLORS.faint }}
                >
                  0{index + 1}
                </span>
                <p
                  className={`${display.className} text-[44px] font-semibold leading-none tracking-[-0.015em] sm:text-[52px]`}
                  style={{ color: COLORS.cream }}
                >
                  <AnimatedNumber value={stat.number} />
                </p>
                <div className="mt-3 flex items-baseline gap-2.5">
                  <span className="text-[13px] font-semibold" style={{ color: COLORS.teal }}>
                    {stat.label}
                  </span>
                  <span className="text-[13px]" style={{ color: COLORS.muted }}>
                    — {stat.caption}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   2 — THE GATHERING (statement + image)
========================================================= */

function Gathering() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.panel }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: COLORS.line }} />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16"
        >
          <motion.div variants={reveal} className="relative overflow-hidden rounded-sm border" style={{ borderColor: COLORS.line }}>
            <div className="relative aspect-[5/6]">
              <Image
                src="/images/technology-leadership.png"
                alt="Technology leaders in conversation at the conference"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-95"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(0deg, ${COLORS.panel}, transparent 45%)` }}
              />
            </div>
          </motion.div>

          <motion.div variants={reveal}>
            <Kicker>Why we still do this in a room</Kicker>

            <p
              className={`${display.className} mt-5 max-w-[560px] text-[30px] font-semibold leading-[1.25] tracking-[-0.01em] sm:text-[38px]`}
              style={{ color: COLORS.cream }}
            >
              The good decisions in this industry still start as a conversation
              between two people who trust each other &mdash; not a feed, and not a form.
            </p>

            <p
              className="mt-7 max-w-[480px] text-[15px] leading-[1.7]"
              style={{ color: COLORS.muted }}
            >
              CIO Tech exists to put those two people in the same room, on
              purpose, for one day. Everything on the programme &mdash; the
              sessions, the awards, the time between them &mdash; is built
              around that.
            </p>

            <div className="mt-10 h-px w-full" style={{ background: COLORS.line }} />

            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              <EventStamp />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   3 — TRACKS (programme, numbered running order)
========================================================= */

function Tracks() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.base }}>
      <GridGlow glow={false} />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Kicker>On the programme</Kicker>
              <h2
                className={`${display.className} mt-4 max-w-lg text-[36px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[46px] lg:text-[52px]`}
                style={{ color: COLORS.cream }}
              >
                Five conversations, one day.
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.7] lg:justify-self-end" style={{ color: COLORS.muted }}>
              Every session is built around a question a technology leader is
              actually being asked at home this year — not a trend piece.
            </p>
          </motion.div>

          <motion.div variants={reveal} className="mt-12 border-t" style={{ borderColor: COLORS.line }}>
            {tracks.map((track) => (
              <div
                key={track.order}
                className="group relative grid gap-3 border-b py-7 transition-colors duration-300 hover:bg-[rgba(43,196,174,0.04)] sm:grid-cols-[80px_1fr_1.1fr] sm:items-center sm:gap-8 sm:px-4"
                style={{ borderColor: COLORS.line }}
              >
                <span
                  className="absolute left-0 top-0 h-full w-[2px] scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ background: COLORS.teal, boxShadow: `0 0 10px ${COLORS.teal}` }}
                />
                <span
                  className={`${display.className} text-[15px] font-bold`}
                  style={{ color: COLORS.teal }}
                >
                  {track.order}
                </span>

                <h3
                  className={`${display.className} text-[22px] font-semibold tracking-[-0.01em] sm:text-[25px]`}
                  style={{ color: COLORS.cream }}
                >
                  {track.title}
                </h3>

                <p className="text-[14px] leading-[1.65]" style={{ color: COLORS.muted }}>
                  {track.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   4 — INDUSTRIES
========================================================= */

function Industries() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.panel }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: COLORS.line }} />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Kicker>One room, eighteen industries</Kicker>
              <h2
                className={`${display.className} mt-4 max-w-md text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[40px]`}
                style={{ color: COLORS.cream }}
              >
                Technology leadership doesn&rsquo;t stay in its lane. Neither do we.
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.7]" style={{ color: COLORS.muted }}>
              Delegates come from every sector wrestling with the same
              questions right now &mdash; which is exactly why the
              conversations outlast the day.
            </p>
          </motion.div>

          <motion.div variants={reveal} className="mt-11 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border px-4 py-2 text-[13px] leading-none transition-colors duration-300 hover:border-[rgba(43,196,174,0.5)] hover:text-[#7EE7D3]"
                style={{ color: COLORS.inkSoft, borderColor: COLORS.line, background: COLORS.raised }}
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   5 — WHY ATTEND
========================================================= */

function WhyAttend() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.base }}>
      <GridGlow glow={false} />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={reveal}>
            <Kicker>Why leaders come back</Kicker>
            <h2
              className={`${display.className} mt-4 max-w-xl text-[36px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[46px] lg:text-[52px]`}
              style={{ color: COLORS.cream }}
            >
              Built around what a day like this is actually for.
            </h2>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-12 grid gap-5 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: COLORS.line }}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="group rounded-sm border p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: COLORS.line, background: COLORS.raised }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-sm transition-shadow duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                      color: COLORS.base,
                    }}
                  >
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <h3
                    className={`${display.className} mt-5 text-[19px] font-semibold tracking-[-0.01em]`}
                    style={{ color: COLORS.cream }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6]" style={{ color: COLORS.muted }}>
                    {benefit.text}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   6 — FINAL CTA (invitation)
========================================================= */

function FinalCTA() {
  return (
    <section className={`${sans.className} relative overflow-hidden`} style={{ background: COLORS.panel }}>
      <GridGlow />
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56px] opacity-40">
        <MonumentLine color={COLORS.tealDeep} className="h-full w-full" />
      </div> */}

      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16"
        >
          <motion.div variants={reveal}>
            <EventStamp />

            <h2
              className={`${display.className} mt-6 max-w-lg text-[38px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[48px] lg:text-[56px]`}
              style={{ color: COLORS.cream }}
            >
              Come as a guest.
              <br />
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Leave with a network.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-[1.7]" style={{ color: COLORS.muted }}>
              Seats are limited to keep the room focused. Delegate places are
              confirmed by application.
            </p>

            <a
              href="#delegateenquiry"
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-sm px-5 py-3 text-[14px] font-semibold"
              style={{
                color: COLORS.base,
                background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                boxShadow: `0 0 0 1px ${COLORS.lineStrong}, 0 12px 30px -12px ${COLORS.tealGlow}`,
              }}
            >
              Request a delegate seat
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div variants={reveal} className="relative overflow-hidden rounded-sm border" style={{ borderColor: COLORS.line }}>
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/about-cta.png"
                alt="A speaker addressing delegates at the conference"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-95"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(180deg, transparent 55%, ${COLORS.panel} 130%)` }}
              />
            </div>
            <span className="absolute left-3 top-3 h-4 w-4 border-l border-t" style={{ borderColor: COLORS.tealLight }} />
            <span className="absolute right-3 top-3 h-4 w-4 border-r border-t" style={{ borderColor: COLORS.tealLight }} />
            <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l" style={{ borderColor: COLORS.tealLight }} />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r" style={{ borderColor: COLORS.tealLight }} />
          </motion.div>
        </motion.div>

        {/* <div className="relative mt-16 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: COLORS.line }}>
          <span className="text-[12px]" style={{ color: COLORS.faint }}>
            CIO Tech &middot; New Delhi &middot; 2026
          </span>
          <span className="text-[12px]" style={{ color: COLORS.faint }}>
            Leadership Conference &amp; Awards
          </span>
        </div> */}
      </div>
    </section>
  )
}

/* =========================================================
   PAGE
========================================================= */

export default function About() {
  return (
    <main id="about" className={`${sans.className} overflow-hidden`} style={{ background: COLORS.base }}>
      <Hero />
      <Gathering />
      <Tracks />
      <Industries />
      <WhyAttend />
      <FinalCTA />
    </main>
  )
}