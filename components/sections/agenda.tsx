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
    description:
      'An exclusive networking experience with industry peers.',
    icon: FiCoffee,
  },
  {
    time: '09:00 AM',
    title: 'Opening Remarks',
    description:
      'Setting the tone for cross-industry innovation and leadership.',
    icon: FiMic,
  },
  {
    time: '09:15 AM',
    title: 'Opening Keynote',
    description:
      'The Modern CIO: Leading Cross-Industry Transformation in an AI-First World.',
    icon: FiMic,
  },
  {
    time: '10:00 AM',
    title: 'Leadership Panel 1',
    description:
      'Scaling AI Across the Enterprise: From Pilots to Business Impact.',
    icon: FiUsers,
  },
  {
    time: '10:45 AM',
    title: 'Leadership Panel 2',
    description:
      'Cloud, Data & FinOps: Building Intelligent Enterprises.',
    icon: FiCloud,
  },
  {
    time: '11:30 AM',
    title: 'Networking Coffee Break',
    description:
      'Meaningful peer-to-peer engagement across industries.',
    icon: FiCoffee,
  },
  {
    time: '12:15 PM',
    title: 'Executive Fireside Chat',
    description:
      'Legacy to Digital Core: Transformation Strategies That Work.',
    icon: FiMessageCircle,
  },
  {
    time: '01:15 PM',
    title: 'Mega Panel',
    description:
      'Reinventing Customer Experience: AI, Data & Digital Across Industries.',
    icon: FiUsers,
  },
  {
    time: '02:15 PM',
    title: 'Strategic Networking Lunch',
    description:
      'Cross-industry roundtables for deeper collaboration.',
    icon: FiCoffee,
  },
  {
    time: '03:00 PM',
    title: 'Spotlight Keynote',
    description:
      'Winning Customers Across Industries with AI & Data.',
    icon: FiTarget,
  },
  {
    time: '03:45 PM',
    title: 'Cross-Industry Panel',
    description:
      'Smart Operations & Digital Supply Chains.',
    icon: FiShare2,
  },
  {
    time: '04:30 PM',
    title: 'Keynote Address',
    description:
      'Modernisation Without Limits: Building Scalable Digital Enterprises.',
    icon: FiBarChart2,
  },
  {
    time: '05:15 PM',
    title: 'Leadership Excellence Panel',
    description:
      'Cybersecurity & Resilience Across Industries.',
    icon: FiShield,
  },
  {
    time: '06:00 PM',
    title: 'Networking High Tea & Closing',
    description:
      'Where conversations become business opportunities.',
    icon: FiAward,
  },
]

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[3px] text-cyan-300">
            Agenda Overview
          </span>

          <h2 className="mt-8 text-5xl font-black uppercase text-white md:text-7xl">
            Agenda
            <span className="ml-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Overview
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
            A power-packed day of insights,
            collaboration, networking and leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[38px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 lg:block" />

          <div className="space-y-8">
            {agendaItems.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.03,
                  }}
                  className="group relative"
                >
                  <div className="flex gap-6">

                    {/* Icon Column */}
                    <div className="hidden lg:block">
                      <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10">
                        <Icon className="text-2xl text-cyan-400" />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="min-w-[130px] pt-6">
                      <span className="text-xl font-semibold text-cyan-300">
                        {item.time}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div
                      className="
                        flex-1
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:border-cyan-500/30
                        hover:bg-white/10
                      "
                    >
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

       

       


      </div>
    </section>
  )
}