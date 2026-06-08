'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Partners() {
  const partners = [
    '/partners/p1.png',
    '/partners/p2.png',
    '/partners/p3.png',
    '/partners/p4.png',
    '/partners/p5.png',
    '/partners/p6.png',
    '/partners/p7.png',
    '/partners/p8.png',
  ]

  // Triple the array so the loop is seamless
  const track = [...partners, ...partners, ...partners]

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-slate-950  py-28"
    >
      {/* Subtle dot-grid texture */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] [background-size:32px_32px] opacity-60" /> */}
      
       {/* ── Background Effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>
      
      {/* Soft color washes */}
      {/* <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-100/60 blur-[120px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-250 bg-indigo-50 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-indigo-600">
            Strategic Partners
          </span>

          <h2 className="mt-7 text-5xl font-black tracking-tight text-slate-100 md:text-6xl">
            Trusted By{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          {/* Ornament divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Collaborating with the world's leading technology companies to shape
            the future of enterprise innovation.
          </p>
        </motion.div>

      </div>

      {/* ── Marquee track (full-bleed, outside max-w container) ── */}
      <div className="relative w-full overflow-hidden">
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

  <div
    className="flex w-max animate-marquee-right gap-6"
    style={{ animationDuration: '30s' }}
  >
    {[...partners, ...partners, ...partners].map((logo, index) => (
      <div
        key={index}
        className="
          group flex h-28 w-52 flex-shrink-0 items-center justify-center
          rounded-2xl border border-slate-100 bg-white px-8 py-5
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:border-indigo-250 hover:shadow-md
        "
      >
        <Image
          src={logo}
          alt={`Partner ${(index % partners.length) + 1}`}
          width={160}
          height={64}
          className="object-contain  duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>

     
    </section>
  )
}