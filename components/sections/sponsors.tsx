'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers = [
  {
    label: 'Gold Partner',
    sublabel: 'Premier Sponsor',
    pill: 'border-amber-200 bg-amber-50 text-amber-700',
    accent: 'from-amber-400 to-yellow-500',
    bar: 'bg-gradient-to-r from-amber-400 to-yellow-400',
    cardBorder: 'hover:border-amber-300',
    cardGlow: 'hover:shadow-amber-100/80',
    logoWidth: 220,
    cardSize: 'h-32 w-72',
    cols: 'flex justify-center',
    logos: ['/sponsors/gs.png'],
  },
  {
    label: 'Digital Partner',
    sublabel: 'Strategic Sponsor',
    pill: 'border-sky-200 bg-sky-50 text-sky-700',
    accent: 'from-sky-400 to-blue-500',
    bar: 'bg-gradient-to-r from-sky-400 to-blue-500',
    cardBorder: 'hover:border-sky-300',
    cardGlow: 'hover:shadow-sky-100/80',
    logoWidth: 200,
    cardSize: 'h-28 w-64',
    cols: 'flex justify-center',
    logos: ['/sponsors/digis.png'],
  },
  {
    label: 'Silver Partners',
    sublabel: 'Supporting Sponsor',
    pill: 'border-slate-200 bg-slate-50 text-slate-600',
    accent: 'from-slate-400 to-slate-500',
    bar: 'bg-gradient-to-r from-slate-300 to-slate-400',
    cardBorder: 'hover:border-slate-300',
    cardGlow: 'hover:shadow-slate-100/80',
    logoWidth: 180,
    cardSize: 'h-24 w-56',
    cols: 'grid grid-cols-2 gap-5 max-w-xl mx-auto',
    logos: ['/sponsors/sp.png', '/sponsors/sp1.png'],
  },
  {
    label: 'Networking Partners',
    sublabel: 'Community Sponsor',
    pill: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    accent: 'from-emerald-400 to-teal-500',
    bar: 'bg-gradient-to-r from-emerald-400 to-teal-400',
    cardBorder: 'hover:border-emerald-300',
    cardGlow: 'hover:shadow-emerald-100/80',
    logoWidth: 140,
    cardSize: 'h-24 w-44',
    cols: 'grid grid-cols-2 gap-5 md:grid-cols-4 max-w-3xl mx-auto',
    logos: ['/sponsors/np1.png', '/sponsors/np2.png', '/sponsors/np3.png', '/sponsors/np4.png'],
  },
  {
    label: 'Gift Partner',
    sublabel: 'Experience Sponsor',
    pill: 'border-violet-200 bg-violet-50 text-violet-700',
    accent: 'from-violet-400 to-purple-500',
    bar: 'bg-gradient-to-r from-violet-400 to-purple-400',
    cardBorder: 'hover:border-violet-300',
    cardGlow: 'hover:shadow-violet-100/80',
    logoWidth: 160,
    cardSize: 'h-24 w-52',
    cols: 'flex justify-center',
    logos: ['/sponsors/gp1.png'],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
})

// ─── Component ───────────────────────────────────────────────────────────────

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Dot-grid texture */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-50" /> */}

      {/* Soft colour washes */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100/60 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-indigo-600">
            Strategic Partners
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white/80 md:text-6xl">
            Brands That{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Back The Vision
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500">
            Leading technology organisations supporting innovation,
            transformation and executive leadership.
          </p>
        </motion.div>

        {/* ── Tiers ── */}
        <div className="flex flex-col gap-14">
          {tiers.map((tier, ti) => (
            <motion.div key={tier.label} {...fadeUp(ti * 0.1)}>

              {/* Tier header row */}
              <div className="mb-7 flex items-center gap-4">
                <div className={`h-px flex-1 ${tier.bar} opacity-30`} />

                <div className="flex flex-col items-center gap-1 text-center">
                  <span className={`rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-[3px] ${tier.pill}`}>
                    {tier.label}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                    {tier.sublabel}
                  </span>
                </div>

                <div className={`h-px flex-1 ${tier.bar} opacity-30`} />
              </div>

              {/* Logo cards */}
              <div className={tier.cols}>
                {tier.logos.map((logo, li) => (
                  <motion.div
                    key={li}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`
                      group relative overflow-hidden
                      flex items-center justify-center
                      rounded-2xl border border-slate-100 bg-white
                      shadow-sm transition-all duration-300
                      hover:shadow-lg ${tier.cardBorder} ${tier.cardSize}
                    `}
                  >
                    {/* Hover shimmer */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]`} />

                    {/* Top accent bar on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tier.accent} scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left`} />

                    <Image
                      src={logo}
                      alt={`${tier.label} logo`}
                      width={tier.logoWidth}
                      height={80}
                      className="relative object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  )
}