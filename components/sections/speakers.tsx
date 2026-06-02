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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
})

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />

      {/* Soft washes */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100/60 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-indigo-600">
            Industry Visionaries
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Speakers
            </span>
          </h2>

          {/* Ornament */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500">
            Learn from leading CIOs, CTOs and technology pioneers shaping the
            future of enterprise innovation.
          </p>
        </motion.div>

        {/* ── Speaker Grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              {...fadeUp(i * 0.06)}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md">

                {/* Photo */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                  {/* Company pill — bottom-left */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block rounded-full border border-indigo-100 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-600 backdrop-blur-sm">
                      {speaker.company}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-4 pb-5 pt-3">
                  <h4 className="text-sm font-bold leading-snug text-slate-900">
                    {speaker.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 line-clamp-2">
                    {speaker.title}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

          {/* "More Speakers" placeholder card */}
          <motion.div {...fadeUp(speakers.length * 0.06)} className="group">
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 text-center transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-white text-2xl font-black text-indigo-400">
                +
              </div>
              <p className="text-sm font-semibold text-indigo-600">More Speakers</p>
              <p className="text-xs text-slate-400">Announcements coming soon</p>
            </div>
          </motion.div>
        </div>

      

      </div>
    </section>
  )
}