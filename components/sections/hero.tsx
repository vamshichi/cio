'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiMenu,
  FiX,
  FiCpu,
  FiShield,
  FiCloud,
  FiActivity,
} from 'react-icons/fi'

import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'
import { FormModal } from '@/components/common/FormModal'
import { AIGlobe } from './AIGlobe'

export function Hero() {
  const [showDelegateForm, setShowDelegateForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenu(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#02070A] text-white selection:bg-cyan-300/30"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_42%,rgba(34,211,238,0.13),transparent_27%),radial-gradient(circle_at_20%_75%,rgba(14,116,144,0.09),transparent_30%),linear-gradient(115deg,#020608_0%,#061217_52%,#02070A_100%)]" />

      <motion.div
        animate={{
          x: mousePosition.x * -22,
          y: mousePosition.y * -12,
        }}
        transition={{ type: 'spring', stiffness: 25, damping: 28 }}
        className="pointer-events-none absolute left-[48%] top-[8%] h-[760px] w-[760px] rounded-full bg-cyan-400/[0.055] blur-[150px]"
      />

      {/* Large editorial grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:100px_100px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      {/* Fine technical grid only around globe */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_73%_45%,black,transparent_40%)]" />

      {/* Top vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />

      {/* ============================================================
          HEADER
      ============================================================ */}

      <header className="relative z-50 mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-20">
      </header>

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-82px)] max-w-[1600px] items-center px-6 pb-12 pt-8 sm:px-10 lg:px-14 xl:px-20">
        {/* LEFT */}
        <div className="relative z-40 w-full max-w-[710px] lg:w-[54%] xl:max-w-[760px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-4 sm:mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.95)]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.32em] text-white/45 sm:text-[9px]">
              India&apos;s Technology Leadership Platform
            </span>

            <span className="hidden h-px w-10 bg-white/15 sm:block" />

            <span className="hidden text-[8px] font-bold uppercase tracking-[0.25em] text-cyan-300 sm:block">
              Edition 03
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[760px] text-[52px] font-semibold leading-[0.88] tracking-[-0.065em] sm:text-[70px] md:text-[82px] lg:text-[82px] xl:text-[96px]"
          >
            <span className="block font-light text-white">CIO TECH</span>

            <span className="block bg-gradient-to-r from-white via-white to-cyan-100 bg-clip-text text-transparent">
              LEADERSHIP
            </span>

            <span className="block text-white/90">CONFERENCE</span>

            <span className="mt-4 block font-serif text-[33px] font-medium italic tracking-[-0.035em] text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] sm:text-[42px] lg:text-[48px]">
              &amp; Awards
            </span>
          </motion.h1>

          {/* STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8 }}
            className="mt-7 max-w-[590px]"
          >
            <p className="text-[16px] font-light leading-7 text-white/70 sm:text-[18px] sm:leading-8">
              Where India&apos;s technology leaders meet to shape what comes next.
            </p>

            <div className="mt-3 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.32em] text-white/30">
              <span>People</span>
              <span className="text-cyan-300">×</span>
              <span>Ideas</span>
              <span className="text-cyan-300">×</span>
              <span>Technology</span>
            </div>
          </motion.div>

          {/* DATE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8 }}
            className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8"
          >
            <EventMeta icon={<FiCalendar size={16} />} label="12 November 2026" sub="New Delhi, India" />

            <span className="hidden h-9 w-px bg-white/15 sm:block" />

            <EventMeta icon={<FiMapPin size={16} />} label="Delhi NCR" sub="India's Innovation Capital" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-[570px] text-[12px] leading-6 text-white/45 sm:text-[13px]"
          >
            200+ CIOs, CTOs, CISOs and technology decision-makers coming together
            around AI, cybersecurity, cloud, digital transformation and the future
            of enterprise technology.
          </motion.p>

          {/* TOPICS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58, duration: 0.8 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            <Topic icon={<FiCpu size={11} />} label="Artificial Intelligence" />
            <Topic icon={<FiShield size={11} />} label="Cybersecurity" />
            <Topic icon={<FiCloud size={11} />} label="Cloud" />
            <Topic icon={<FiActivity size={11} />} label="Digital Transformation" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.8 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => setShowDelegateForm(true)}
              className="group flex h-13 min-w-[235px] items-center justify-center gap-4 rounded-full bg-cyan-300 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#021014] shadow-[0_0_45px_rgba(34,211,238,0.18)] transition-all hover:bg-cyan-200 hover:shadow-[0_0_60px_rgba(34,211,238,0.3)]"
            >
              Attend as Delegate
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
            </button>

            <button
              onClick={() => setShowSponsorForm(true)}
              className="group flex h-13 min-w-[220px] items-center justify-center gap-4 rounded-full border border-white/20 bg-white/[0.025] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl transition-all hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Become a Sponsor
              <FiArrowRight className="text-cyan-300 transition-transform group-hover:translate-x-1" size={15} />
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex items-stretch gap-5 sm:mt-9 sm:gap-7"
          >
            <Stat number="200+" label="CIOs • CTOs • CISOs" />
            <Divider />
            <Stat number="20+" label="Industry Speakers" />
            <Divider />
            <Stat number="01" label="Flagship Conference" />
          </motion.div>

          {/* BOTTOM STATEMENT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-7 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-cyan-300/60" />
            <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/30">
              Building a smarter, more secure tomorrow
            </span>
          </motion.div>
        </div>

        {/* ============================================================
            GLOBE
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, scale: 0.78, x: 70 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute right-[-290px] top-[51%] z-10 hidden h-[790px] w-[790px] -translate-y-1/2 lg:block xl:right-[-115px] xl:h-[870px] xl:w-[870px] 2xl:right-[-20px] 2xl:h-[920px] 2xl:w-[920px]"
        >
          <div className="absolute inset-[3%] rounded-full bg-cyan-400/[0.045] blur-[120px]" />
          <div className="absolute inset-[16%] rounded-full bg-cyan-300/[0.065] blur-[75px]" />

          <AIGlobe />

          <FloatingLabel className="left-[4%] top-[27%]" number="01" label="ARTIFICIAL INTELLIGENCE" />
          <FloatingLabel className="right-[1%] top-[22%]" number="02" label="CYBERSECURITY" />
          <FloatingLabel className="right-[0%] top-[53%]" number="03" label="CLOUD" />
          <FloatingLabel className="left-[5%] bottom-[23%]" number="04" label="DIGITAL TRANSFORMATION" />

          <div className="absolute right-[16%] top-[15%] flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />
            <span className="text-[7px] uppercase tracking-[0.3em] text-cyan-200/60">
              INDIA / 28.6139° N
            </span>
          </div>
        </motion.div>

        {/* MOBILE GLOBE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.52, scale: 1 }}
          transition={{ delay: 0.45, duration: 1.2 }}
          className="pointer-events-none absolute left-1/2 top-[70%] z-0 block h-[430px] w-[430px] -translate-x-1/2 sm:top-[66%] sm:h-[520px] sm:w-[520px] md:top-[61%] md:h-[600px] md:w-[600px] lg:hidden"
        >
          <div className="absolute inset-[12%] rounded-full bg-cyan-400/[0.08] blur-[90px]" />
          <AIGlobe />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-t from-[#02070A] to-transparent" />

      {/* Scroll cue */}
      {/* <div className="pointer-events-none absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-3 xl:flex">
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent" />
        <span className="text-[7px] font-medium uppercase tracking-[0.35em] text-white/30">
          Scroll to explore
        </span>
      </div> */}

      {/* ============================================================
          MODALS
      ============================================================ */}

      <FormModal
        open={showDelegateForm}
        onClose={() => setShowDelegateForm(false)}
        title="Delegate Registration"
      >
        <DelegateForm />
      </FormModal>

      <FormModal
        open={showSponsorForm}
        onClose={() => setShowSponsorForm(false)}
        title="Sponsor Registration"
      >
        <SponsorForm />
      </FormModal>
    </section>
  )
}

function EventMeta({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode
  label: string
  sub: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
        {icon}
      </span>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/85 sm:text-[11px]">
          {label}
        </div>
        <div className="mt-1 text-[8px] text-white/30">{sub}</div>
      </div>
    </div>
  )
}

function Topic({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 backdrop-blur-xl">
      <span className="text-cyan-300">{icon}</span>
      <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-white/45">
        {label}
      </span>
    </div>
  )
}

function Stat({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div className="min-w-0">
      <div className="text-[30px] font-medium leading-none tracking-[-0.055em] text-white sm:text-[34px]">
        {number}
      </div>
      <div className="mt-2 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.18em] text-white/30 sm:text-[8px]">
        {label}
      </div>
    </div>
  )
}

function Divider() {
  return <div className="h-10 w-px self-center bg-white/10" />
}

function FloatingLabel({
  className,
  number,
  label,
}: {
  className: string
  number: string
  label: string
}) {
  return (
    <div className={`absolute ${className} hidden items-center gap-2 lg:flex`}>
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
      <div>
        <div className="text-[7px] tracking-[0.25em] text-cyan-300/55">{number}</div>
        <div className="mt-1 whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.2em] text-white/35">
          {label}
        </div>
      </div>
    </div>
  )
}
