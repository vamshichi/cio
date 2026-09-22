'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { FormModal } from '@/components/common/FormModal'
import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'

/* =========================================================
   DESIGN TOKENS — shared dark navy / teal system
========================================================= */

const COLORS = {
  base: '#050B18',
  panel: '#0A1530',
  raised: '#0E1B33',
  cream: '#F6F9F8',
  inkSoft: 'rgba(246,249,248,0.66)',
  muted: 'rgba(246,249,248,0.52)',
  faint: 'rgba(246,249,248,0.32)',
  teal: '#2BC4AE',
  tealDeep: '#0F5850',
  tealLight: '#7EE7D3',
  tealGlow: 'rgba(43,196,174,0.16)',
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
   MONUMENT MOTIF — the one recurring graphic device,
   used here only as a faint watermark for continuity
========================================================= */

function MonumentLine({ color = COLORS.tealDeep, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 640 90" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`${display.className} text-[12px] font-semibold`} style={{ color: COLORS.tealLight }}>
        [
      </span>
      <span className="h-[6px] w-[6px] rotate-45" style={{ background: COLORS.teal, boxShadow: `0 0 10px ${COLORS.teal}` }} />
      <span className={`${display.className} text-[13px] font-semibold uppercase tracking-[0.08em]`} style={{ color: COLORS.tealLight }}>
        {children}
      </span>
      <span className={`${display.className} text-[12px] font-semibold`} style={{ color: COLORS.tealLight }}>
        ]
      </span>
    </div>
  )
}

/* =========================================================
   CONTACT
========================================================= */

export function Contact() {
  const [showDelegateForm, setShowDelegateForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)

  useEffect(() => {
    const hash = window.location.hash

    if (hash === '#delegateenquiry') {
      setShowDelegateForm(true)
    }

    if (hash === '#sponsorenquiry') {
      setShowSponsorForm(true)
    }
  }, [])

  const openDelegate = () => {
    window.history.pushState(null, '', '#delegateenquiry')
    setShowDelegateForm(true)
  }

  const openSponsor = () => {
    window.history.pushState(null, '', '#sponsorenquiry')
    setShowSponsorForm(true)
  }

  return (
    <section
      id="contact"
      className={`${sans.className} relative overflow-hidden py-20 sm:py-24 lg:py-28`}
      style={{ background: COLORS.base, color: COLORS.cream }}
    >
      {/* A single soft glow — warmth, not a tech grid */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: COLORS.tealGlow }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* ===================================================
            HEADER
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Kicker>Connect · CIO Tech 2026</Kicker>
        </motion.div>

        {/* ===================================================
            MAIN INTRO
        ==================================================== */}
        <div className="grid gap-10 pb-14 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className={`${display.className} max-w-xl text-[42px] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-[56px] lg:text-[66px]`}
              style={{ color: COLORS.cream }}
            >
              Be part of the{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                conversation.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-md text-[15px] leading-[1.7]" style={{ color: COLORS.muted }}>
              Join India&apos;s leading CIOs, CTOs, CISOs and CDOs for focused
              conversations around AI, cybersecurity, cloud, innovation and
              digital transformation.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[12px]" style={{ color: COLORS.faint }}>
              <span>People</span>
              <span className="h-1 w-1 rounded-full" style={{ background: COLORS.teal }} />
              <span>Ideas</span>
              <span className="h-1 w-1 rounded-full" style={{ background: COLORS.teal }} />
              <span>Partnerships</span>
              <span className="h-1 w-1 rounded-full" style={{ background: COLORS.teal }} />
              <span>Progress</span>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            ACTION PANEL — Delegate / Sponsor
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-sm border"
          style={{ borderColor: COLORS.line, background: COLORS.raised }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Delegate */}
            <div className="p-7 sm:p-10 lg:p-12">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: COLORS.tealLight }}>
                01 &middot; Delegate
              </span>

              <h3
                className={`${display.className} mt-6 max-w-sm text-[28px] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[34px]`}
                style={{ color: COLORS.cream }}
              >
                Secure your executive pass.
              </h3>

              <p className="mt-4 max-w-sm text-[13.5px] leading-[1.65]" style={{ color: COLORS.muted }}>
                Attend as a delegate and connect with senior technology
                leaders shaping the next generation of enterprise growth.
              </p>

              <button
                type="button"
                onClick={openDelegate}
                className="group mt-8 inline-flex items-center gap-3 rounded-sm px-6 py-3.5 text-[13px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`, color: COLORS.base }}
              >
                Attend as Delegate
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Sponsor */}
            <div
              className="border-t p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
              style={{ borderColor: COLORS.line }}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: COLORS.muted }}>
                02 &middot; Partnership
              </span>

              <h3
                className={`${display.className} mt-6 max-w-sm text-[28px] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[34px]`}
                style={{ color: COLORS.cream }}
              >
                Put your brand in the room.
              </h3>

              <p className="mt-4 max-w-sm text-[13.5px] leading-[1.65]" style={{ color: COLORS.muted }}>
                Showcase your solutions and build relationships with
                enterprise technology decision-makers.
              </p>

              <button
                type="button"
                onClick={openSponsor}
                className="group mt-8 inline-flex items-center gap-3 rounded-sm border px-6 py-3.5 text-[13px] font-semibold transition-colors duration-300 hover:border-current"
                style={{ borderColor: COLORS.lineStrong, color: COLORS.cream }}
              >
                Become a Sponsor
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            CONTACT STRIP
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid overflow-hidden rounded-sm border md:grid-cols-2"
          style={{ borderColor: COLORS.line }}
        >
          <a
            href="mailto:enquiry@confexmeet.com"
            className="group flex items-center justify-between gap-5 px-6 py-6 transition-colors hover:bg-[rgba(43,196,174,0.05)]"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.08em]" style={{ color: COLORS.faint }}>
                Registration &amp; sponsorship
              </p>
              <p className={`${display.className} mt-1.5 text-[15px] font-medium`} style={{ color: COLORS.cream }}>
                enquiry@confexmeet.com
              </p>
            </div>
            <span className="text-[15px] transition-transform group-hover:translate-x-1" style={{ color: COLORS.tealLight }}>
              →
            </span>
          </a>

          <a
            href="tel:+917975429127"
            className="group flex items-center justify-between gap-5 border-t px-6 py-6 transition-colors hover:bg-[rgba(43,196,174,0.05)] md:border-l md:border-t-0"
            style={{ borderColor: COLORS.line }}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.08em]" style={{ color: COLORS.faint }}>
                Speak with the team
              </p>
              <p className={`${display.className} mt-1.5 text-[15px] font-medium`} style={{ color: COLORS.cream }}>
                +91 7975 429 127
              </p>
            </div>
            <span className="text-[15px] transition-transform group-hover:translate-x-1" style={{ color: COLORS.tealLight }}>
              →
            </span>
          </a>
        </motion.div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left" style={{ borderColor: COLORS.line }}>
          <span className="text-[11px] uppercase tracking-[0.08em]" style={{ color: COLORS.faint }}>
            CIO Tech &middot; 2026
          </span>
          <span className="text-[11px] uppercase tracking-[0.08em]" style={{ color: COLORS.faint }}>
            The intelligent enterprise era
          </span>
        </div>
      </div>

      {/* Faint monument watermark, echoing the other pages */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50px] opacity-25">
        <MonumentLine color={COLORS.tealDeep} className="h-full w-full" />
      </div>

      {/* =========================================================
          MODALS
      ========================================================= */}
      <FormModal
        open={showDelegateForm}
        onClose={() => {
          window.history.pushState({}, '', window.location.pathname)
          setShowDelegateForm(false)
        }}
        title="Delegate Registration"
      >
        <DelegateForm />
      </FormModal>

      <FormModal
        open={showSponsorForm}
        onClose={() => {
          window.history.pushState({}, '', window.location.pathname)
          setShowSponsorForm(false)
        }}
        title="Sponsor Enquiry"
      >
        <SponsorForm />
      </FormModal>
    </section>
  )
}