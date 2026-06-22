'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'Elevate & Startup Cell',
    desc: 'Fueling Karnataka’s startup ecosystem through funding, mentorship and innovation-driven policies.',
  },
  {
    number: '02',
    title: 'Brand Bengaluru',
    desc: 'Strengthening Bengaluru’s position as a global hub for technology, entrepreneurship and innovation.',
  },
  {
    number: '03',
    title: 'Centres of Excellence',
    desc: 'Advancing AI, Cyber Security, IoT and emerging technologies through world-class innovation hubs.',
  },
]

export default function ChiefGuest() {
  return (
    <section
      id="chief-guest"
      className="relative overflow-hidden bg-[#020817] py-24 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">

        {/* HERO GRID */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Chief Guest
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
                PRIYANK
              </h1>

              <h1
                className="text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]"
                style={{
                  WebkitTextStroke: '2px rgba(34,211,238,0.8)',
                  color: 'transparent',
                }}
              >
                KHARGE
              </h1>
            </div>

            <div className="mt-8 h-px w-40 bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent" />

            {/* Designation */}
            <div className="mt-8 space-y-3">
              <p className="text-lg font-semibold text-cyan-300 md:text-2xl">
                Hon&apos;ble Minister for Home,
                IT & Biotechnology
              </p>

              <p className="text-lg font-semibold text-cyan-300 md:text-2xl">
                & E-Governance
              </p>

              <p className="pt-2 text-sm uppercase tracking-[0.35em] text-slate-500">
                Government of Karnataka
              </p>
            </div>

            {/* Quote */}
            <div className="mt-12 max-w-2xl">
              <blockquote className="border-l-2 border-cyan-500 pl-6">
                <p className="text-lg italic leading-relaxed text-slate-300 lg:text-xl">
                  “Committed to leveraging technology for good governance,
                  inclusive growth and a stronger, smarter Karnataka.”
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[60px] bg-cyan-500/20 blur-[140px]" />

              {/* Outer Ring */}
              <div className="absolute -inset-5 rounded-[60px] border border-cyan-500/20" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

                <Image
                  src="/chiefguest/priyank.png"
                  alt="Priyank Kharge"
                  width={650}
                  height={850}
                  priority
                  className="rounded-[32px] object-cover"
                />

              </div>
            </div>
          </motion.div>
        </div>

        {/* PILLARS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28 mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            Key Initiatives
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Driving Karnataka&apos;s Digital Future
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Championing innovation, entrepreneurship and technology-led
            transformation to strengthen Karnataka’s position as India’s
            leading digital economy.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 text-6xl font-black text-cyan-500/20">
                  {item.number}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}