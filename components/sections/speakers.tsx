'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const speakers = [
  {
    name: 'Anand Vaitheeswaran',
    title: 'Chief Information Officer - APAC',
    company: 'Randstad',
    image: '/speakers/anand.png',
  },
  {
    name: 'Venkat Krishnan V',
    title: 'CIO & CTO',
    company: 'Karnataka Bank',
    image: '/speakers/venkat.png',
  },
  {
    name: 'Mythili Kandula',
    title: 'CTO',
    company: 'Happiest Health',
    image: '/speakers/mythili.png',
  },
  {
    name: 'Devi Singh',
    title: 'Director – Deputy Head of IT Infrastructure',
    company: 'BNP Paribas',
    image: '/speakers/devi.png',
  },
  {
    name: 'Yogesh Bhalla',
    title: 'CTO',
    company: 'DSP Mutual Funds',
    image: '/speakers/yogesh.png',
  },
  {
    name: 'Shashank Shankar',
    title: 'Director of Applied AI | CTO',
    company: 'Barclays',
    image: '/speakers/shashank.png',
  },
  {
    name: 'Anup Mishra',
    title: 'AGM – Supply Chain Planning & Analytics',
    company: 'METRO Cash & Carry India',
    image: '/speakers/anup.png',
  },
  {
    name: 'Garvit Saxena',
    title: 'Executive Director, IT Service Delivery APAC',
    company: 'Colliers',
    image: '/speakers/garvit.png',
  },
  {
    name: 'Roshan A',
    title: 'Senior General Manager – IT',
    company: 'Healthcare Global Enterprise',
    image: '/speakers/roshan.png',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
})

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Dot-grid texture */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-50" /> */}
       {/* ── Background Effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>
      {/* Soft washes */}
      {/* <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[120px]" /> */}
      {/* <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100/60 blur-[120px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div {...fadeUp()} className="mb-12 text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-250 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-indigo-600">
            Industry Visionaries
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Speakers
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">
            Learn from leading CIOs, CTOs and technology pioneers shaping the
            future of enterprise innovation.
          </p>
        </motion.div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              {...fadeUp(i * 0.05)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group"
            >
              {/* Dark slate-950 card */}
              <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950 shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]">

                {/* Photo */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-800 sm:h-48 lg:h-52">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Fade into dark card bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  {/* Company pill */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-slate-950/80 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-cyan-300 backdrop-blur-sm sm:px-2.5 sm:text-[10px]">
                      {speaker.company}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-3 pb-4 pt-3 sm:px-4 sm:pb-5">
                  <h4 className="text-xs font-bold leading-snug text-white sm:text-sm">
                    {speaker.name}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-slate-400 sm:text-xs">
                    {speaker.title}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

          {/* More Speakers placeholder */}
          <motion.div {...fadeUp(speakers.length * 0.05)} className="group">
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-5 text-center shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.10)] sm:min-h-[260px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-800 text-xl font-black text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 sm:h-12 sm:w-12 sm:text-2xl">
                +
              </div>
              <p className="text-xs font-semibold text-cyan-300 sm:text-sm">More Speakers</p>
              <p className="text-[10px] text-slate-500 sm:text-xs">Announcements coming soon</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}