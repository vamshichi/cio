'use client'

import { motion } from 'framer-motion'
import {
  FiCoffee,
  FiMic,
  FiUsers,
  FiCloud,
  FiMessageCircle,
  FiTarget,
  FiShare2,
  FiBarChart2,
  FiShield,
  FiAward,
} from 'react-icons/fi'

const agendaItems = [
  {
    time: '08:00 AM',
    title: 'Registration & Networking Breakfast',
    description: 'An exclusive networking experience with industry peers.',
    icon: FiCoffee,
    category: 'Networking',
  },
  {
    time: '09:00 AM',
    title: 'Opening Remarks',
    description: 'Setting the tone for cross-industry innovation and leadership.',
    icon: FiMic,
    category: 'Keynote',
  },
  {
    time: '09:15 AM',
    title: 'Opening Keynote',
    description: 'The Modern CIO: Leading Cross-Industry Transformation in an AI-First World.',
    icon: FiMic,
    category: 'Keynote',
  },
  {
    time: '10:00 AM',
    title: 'Leadership Panel 1',
    description: 'Scaling AI Across the Enterprise: From Pilots to Business Impact.',
    icon: FiUsers,
    category: 'Panel',
  },
  {
    time: '10:45 AM',
    title: 'Leadership Panel 2',
    description: 'Cloud, Data & FinOps: Building Intelligent Enterprises.',
    icon: FiCloud,
    category: 'Panel',
  },
  {
    time: '11:30 AM',
    title: 'Networking Coffee Break',
    description: 'Meaningful peer-to-peer engagement across industries.',
    icon: FiCoffee,
    category: 'Networking',
  },
  {
    time: '12:15 PM',
    title: 'Executive Fireside Chat',
    description: 'Legacy to Digital Core: Transformation Strategies That Work.',
    icon: FiMessageCircle,
    category: 'Fireside',
  },
  {
    time: '01:15 PM',
    title: 'Mega Panel',
    description: 'Reinventing Customer Experience: AI, Data & Digital Across Industries.',
    icon: FiUsers,
    category: 'Panel',
  },
  {
    time: '02:15 PM',
    title: 'Strategic Networking Lunch',
    description: 'Cross-industry roundtables for deeper collaboration.',
    icon: FiCoffee,
    category: 'Networking',
  },
  {
    time: '03:00 PM',
    title: 'Spotlight Keynote',
    description: 'Winning Customers Across Industries with AI & Data.',
    icon: FiTarget,
    category: 'Keynote',
  },
  {
    time: '03:45 PM',
    title: 'Cross-Industry Panel',
    description: 'Smart Operations & Digital Supply Chains.',
    icon: FiShare2,
    category: 'Panel',
  },
  {
    time: '04:30 PM',
    title: 'Keynote Address',
    description: 'Modernisation Without Limits: Building Scalable Digital Enterprises.',
    icon: FiBarChart2,
    category: 'Keynote',
  },
  {
    time: '05:15 PM',
    title: 'Leadership Excellence Panel',
    description: 'Cybersecurity & Resilience Across Industries.',
    icon: FiShield,
    category: 'Panel',
  },
  {
    time: '06:00 PM',
    title: 'Networking High Tea & Closing',
    description: 'Where conversations become business opportunities.',
    icon: FiAward,
    category: 'Networking',
  },
]

const categoryColors: Record<string, string> = {
  Networking: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Keynote: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Panel: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  Fireside: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
}

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* ── Background Effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-cyan-300 sm:px-5 sm:py-2 sm:text-sm">
            Agenda Overview
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Agenda
            <span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent sm:ml-4">
              Overview
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 sm:w-32" />

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            A power-packed day of insights, collaboration, networking and leadership.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical spine — desktop only */}
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/60 to-cyan-400/60 md:block" />

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {agendaItems.map((item, index) => {
              const Icon = item.icon
              const catClass = categoryColors[item.category] ?? 'bg-slate-500/15 text-slate-300 border-slate-500/30'

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
                  className="group relative"
                >
                  {/* ── Desktop layout (md+) ── */}
                  <div className="hidden md:flex md:items-stretch md:gap-5">

                    {/* Icon bubble on the spine */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10">
                        <Icon className="text-xl text-cyan-400" />
                      </div>
                    </div>

                    {/* Time label */}
                    <div className="flex w-[110px] flex-shrink-0 items-center">
                      <span className="text-base font-semibold tabular-nums text-cyan-300">
                        {item.time}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex flex-1 items-center rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/25 hover:bg-white/[0.07]">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-white xl:text-xl">
                            {item.title}
                          </h3>
                          <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${catClass}`}>
                            {item.category}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400 lg:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* ── Mobile layout (< md) ── */}
                  <div className="flex gap-3 md:hidden">

                    {/* Left accent bar + icon */}
                    <div className="flex flex-col items-center gap-0">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900">
                        <Icon className="text-base text-cyan-400" />
                      </div>
                      {index < agendaItems.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-gradient-to-b from-cyan-500/40 to-transparent" />
                      )}
                    </div>

                    {/* Mobile card */}
                    <div className="mb-1 flex-1 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold tabular-nums text-cyan-300">
                          {item.time}
                        </span>
                        <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide ${catClass}`}>
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom gradient fade ── */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  )
}