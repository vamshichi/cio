'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export function Partners() {
  const partners = [
    { name: 'p1', logo: '/partners/p1.png' },
    { name: 'p2', logo: '/partners/p2.png' },
    { name: 'p3', logo: '/partners/p3.png' },
    { name: 'p4', logo: '/partners/p4.png' },
    { name: 'p5', logo: '/partners/p5.png' },
    { name: 'p6', logo: '/partners/p6.png' },
    { name: 'p7', logo: '/partners/p7.png' },
    { name: 'p8', logo: '/partners/p8.png' },
  ]

  const reduceMotion = useReducedMotion()
  const track = [...partners, ...partners, ...partners]

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#020B16] py-20 sm:py-24 lg:py-28"
    >
      {/* ================================================================ */}
      {/* TECHNICAL BACKGROUND                                             */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(85,199,220,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(85,199,220,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '18px 18px',
          }}
        />

        {/* Cyan atmosphere */}
        <div className="absolute left-[-220px] top-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        {/* Blue atmosphere */}
        <div className="absolute right-[-220px] bottom-[-100px] h-[550px] w-[550px] rounded-full bg-blue-600/[0.08] blur-[160px]" />

        {/* Center atmosphere */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]" />

        {/* Editorial vertical lines */}
        <div className="absolute left-[6%] top-0 hidden h-full w-px bg-cyan-400/[0.06] lg:block" />

        <div className="absolute right-[6%] top-0 hidden h-full w-px bg-cyan-400/[0.06] lg:block" />
      </div>

      {/* ================================================================ */}
      {/* SIDE EDITORIAL MARKERS                                           */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute left-6 top-28 hidden xl:block">
        <div className="border-l border-cyan-400/20 pl-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              People
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Ideas
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Technology
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-cyan-400/70">
              Partnerships
            </span>
          </div>

          <div className="mt-5 h-px w-8 bg-cyan-400/40" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-28 hidden xl:block">
        <div className="text-right">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              CIO TECH
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Delhi
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              2026
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-cyan-400/70">
              Ecosystem
            </span>
          </div>

          <div className="ml-auto mt-5 h-px w-8 bg-cyan-400/40" />
        </div>
      </div>

      {/* ================================================================ */}
      {/* MAIN CONTENT                                                      */}
      {/* ================================================================ */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 sm:mb-14 lg:mb-16"
        >

          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[2px] text-cyan-400">
              06
            </span>

            <span className="h-px w-8 bg-cyan-400/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[2.8px] text-slate-500">
              Strategic Partnerships
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-4xl">
              <h2 className="text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
                The ecosystem
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  behind the conversation.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-xs lg:pb-2">
              <div className="mb-4 h-px w-12 bg-cyan-400" />

              <p className="text-sm leading-6 text-slate-500">
                Connecting CIO Tech with organizations shaping the future of
                enterprise technology, innovation and leadership.
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-8 flex items-center justify-between border-b border-white/[0.08] pb-5">
            <span className="font-mono text-[8px] uppercase tracking-[2.5px] text-slate-600">
              Technology · Collaboration · Impact
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[2.5px] text-slate-600">
              08 Partners
            </span>
          </div>
        </motion.div>

        {/* Partner label */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(85,199,220,0.7)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-slate-400">
              Our Partners
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[2px] text-slate-700 sm:block">
            Trusted relationships
          </span>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PARTNER MARQUEE                                                   */}
      {/* ================================================================ */}

      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#020B16] via-[#020B16]/95 to-transparent sm:w-40 lg:w-56" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#020B16] via-[#020B16]/95 to-transparent sm:w-40 lg:w-56" />

        {/* Top border */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-px bg-white/[0.08]" />

        <motion.div
          className="flex w-max gap-4 py-7 sm:gap-5 sm:py-8"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ['0%', '-33.333333%'],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 32,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        >
          {track.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              className="
                group relative
                flex h-[112px] w-[205px]
                flex-shrink-0
                items-center justify-center
                border border-white/[0.10]
                bg-[#071827]
                px-7 py-5
                shadow-[0_15px_45px_rgba(0,0,0,0.22)]
                transition-all duration-500
                hover:border-cyan-400/30
                hover:bg-[#0A1E30]
                hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)]
                sm:h-[120px]
                sm:w-[220px]
              "
            >

              {/* Top cyan accent */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Corner brackets */}
              <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-cyan-400/20 transition-colors group-hover:border-cyan-400/60" />

              <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-cyan-400/20 transition-colors group-hover:border-cyan-400/60" />

              {/* Subtle center glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-2xl transition-all duration-500 group-hover:bg-cyan-400/[0.06]" />

              {/* Logo */}
              <Image
                src={partner.logo}
                alt={`${partner.name} - Strategic Partner of CIO Tech Leadership Conference & Awards Delhi 2026`}
                width={180}
                height={70}
                className="
                  relative z-10
                  max-h-[62px]
                  w-auto
                  max-w-[165px]
                  object-contain
                  opacity-75
                  grayscale
                  transition-all
                  duration-500
                  group-hover:scale-[1.04]
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom border */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />
      </div>

      {/* ================================================================ */}
      {/* BOTTOM STATEMENT                                                  */}
      {/* ================================================================ */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[2.5px] text-slate-600">
              CIO TECH 2026
            </span>

            <span className="h-px w-8 bg-cyan-400/30" />

            <span className="font-mono text-[8px] uppercase tracking-[2px] text-slate-600">
              Delhi
            </span>
          </div>

          <p className="max-w-lg text-sm leading-6 text-slate-500 sm:text-right">
            Strong partnerships create stronger conversations, deeper
            connections and greater opportunities.
          </p>
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      {/* Bottom technical line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </section>
  )
}