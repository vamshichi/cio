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
    icon: FiUsers,
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
    description: 'Cloud, Data & FinOps: Building Intelligent Enterprises Across Industries.',
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
    description: 'Legacy to Digital Core: Transformation Strategies That Work Across Industries.',
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
    description: 'Cross-industry roundtables for deeper collaboration and partnerships.',
    icon: FiCoffee,
    category: 'Networking',
  },
  {
    time: '03:00 PM',
    title: 'Spotlight Keynote',
    description: 'The Experience Economy: Winning Customers Across Industries with AI & Data.',
    icon: FiTarget,
    category: 'Keynote',
  },
  {
    time: '03:45 PM',
    title: 'Cross-Industry Panel',
    description: 'Smart Operations & Digital Supply Chains: Lessons Across Industries.',
    icon: FiShare2,
    category: 'Panel',
  },
  {
    time: '04:30 PM',
    title: 'Keynote Address',
    description: 'Modernisation Without Limits: Building Scalable Digital Enterprises Across Industries.',
    icon: FiBarChart2,
    category: 'Keynote',
  },
  {
    time: '05:15 PM',
    title: 'Cross-Industry Leadership Panel',
    description: 'Cybersecurity & Resilience: Securing the Digital Enterprise Across Industries.',
    icon: FiShield,
    category: 'Panel',
  },
  {
    time: '06:00 PM',
    title: 'Networking High Tea & Closing',
    description: 'Where cross-industry conversations turn into real business opportunities.',
    icon: FiCoffee,
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
          <h2 className="text-left text-4xl font-medium uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-cyan-400">AGENDA</span>{' '}
            <span className="text-white">OVERVIEW</span>
          </h2>

          <div className="mt-6 h-1 w-16 bg-cyan-400" />

          <p className="mt-5 max-w-3xl text-left text-base text-slate-200 sm:text-lg">
            A power-packed day of insights, collaboration and leadership.
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
                  <div className="hidden md:grid md:grid-cols-[74px_112px_minmax(0,1fr)] md:items-center md:gap-0">

                    {/* Icon bubble */}
                    <div className="relative z-10 flex justify-center">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400/10">
                        <Icon className="text-xl text-cyan-300" />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="border-r border-white/20 py-5 pl-2">
                      <span className="text-base font-medium tabular-nums text-cyan-400">
                        {item.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="border-b border-white/15 px-7 py-4 transition-all duration-300 group-hover:border-cyan-400/20">
                      <h3 className="text-lg font-semibold text-white xl:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300 lg:text-[15px]">
                        {item.description}
                      </p>
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
                      <div className="mb-2">
                        <span className="text-sm font-semibold tabular-nums text-cyan-300">
                          {item.time}
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

        {/* ── Closing quote ── */}
        <div className="mt-10 max-w-sm rounded-2xl border border-cyan-400/70 bg-[#001522]/80 px-7 py-5 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
          <div className="mb-1 text-4xl leading-none text-cyan-400">“</div>
          <p className="text-sm leading-7 text-slate-200 sm:text-base">
            Connect. Collaborate. Create Impact.
            <br />
            Across Industries. Beyond Boundaries.
          </p>
        </div>

        {/* ── Bottom gradient fade ── */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  )
}