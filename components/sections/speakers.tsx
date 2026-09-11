'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const speakers = [
  {
    name: 'Kapil Uniyal',
    title:
      'Head of Google Cloud Services, Digital Solutions, Vice President - APACA',
    company: 'TELUS Digital',
    image: '/speakers/Kapil Uniyal.png',
  },
  {
    name: 'Sunil Golani',
    title: 'Director, Cloud Sales',
    company: 'Ingram Micro India',
    image: '/speakers/Sunil Golani.png',
  },

  // Add more speakers here when ready.
  //
  // {
  //   name: 'Anand Vaitheeswaran',
  //   title: 'Chief Information Officer - APAC',
  //   company: 'Randstad',
  //   image: '/speakers/anand.png',
  // },
]

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 35,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-80px',
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
})

function TechLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(95,150,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(95,150,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
        }}
      />

      {/* Top glow */}
      <div className="absolute left-1/2 top-[-280px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Left glow */}
      <div className="absolute left-[-250px] top-[25%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

      {/* Right glow */}
      <div className="absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue-700/[0.08] blur-[150px]" />

      {/* Horizontal scanning line */}
      <motion.div
        animate={{
          y: ['0%', '1000%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
    </div>
  )
}

function CornerBrackets() {
  return (
    <>
      <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-blue-400/60" />
      <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-blue-400/60" />
      <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-blue-400/60" />
      <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-blue-400/60" />
    </>
  )
}

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[number]
  index: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      {...fadeUp(index * 0.12)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative"
    >
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-[26px] bg-gradient-to-b from-blue-400/30 via-blue-500/5 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[24px] border border-blue-300/20 bg-[#061123]/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 group-hover:border-blue-400/50">
        {/* Image */}
        <div className="relative aspect-[1.02/1] overflow-hidden bg-[#0a172a]">
          <Image
            src={speaker.image}
            alt={`${speaker.name} - ${speaker.title} at ${speaker.company}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          {/* Cinematic image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b18] via-[#030b18]/20 to-transparent" />

          {/* Blue light sweep */}
          <div className="absolute inset-y-0 -left-[100%] w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[150%]" />

          {/* Featured tag */}
          <div className="absolute left-5 top-5">
            <div className="flex items-center gap-2 rounded-full border border-blue-400/40 bg-[#041021]/75 px-3 py-1.5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

              <span className="text-[9px] font-medium uppercase tracking-[2px] text-blue-100">
                Featured Speaker
              </span>
            </div>
          </div>

          {/* Index */}
          <div className="absolute right-5 top-5">
            <span className="font-mono text-[10px] tracking-[3px] text-white/30">
              0{index + 1}
            </span>
          </div>

          {/* Image bottom metadata */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-7 bg-blue-400" />
              <span className="text-[9px] font-medium uppercase tracking-[2.5px] text-blue-300">
                {speaker.company}
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              {speaker.name}
            </h3>

            <p className="mt-2 max-w-[90%] text-xs leading-5 text-slate-300/80 sm:text-sm">
              {speaker.title}
            </p>
          </div>
        </div>

        {/* Bottom card information */}
        <div className="relative flex items-center justify-between border-t border-white/[0.07] px-5 py-4 sm:px-6">
          <div>
            <p className="text-[8px] uppercase tracking-[3px] text-slate-500">
              Enterprise Leadership
            </p>

            <p className="mt-1 text-[11px] font-medium text-slate-300">
              People · Strategy · Technology
            </p>
          </div>

          {/* Arrow */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/[0.06] transition-all duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-500/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-blue-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path
                d="M5 19L19 5M8 5H19V16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <CornerBrackets />
      </div>
    </motion.article>
  )
}

function MoreSpeakersCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      {...fadeUp(speakers.length * 0.12)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative"
    >
      <div className="absolute -inset-px rounded-[26px] bg-gradient-to-b from-cyan-400/20 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex min-h-full flex-col overflow-hidden rounded-[24px] border border-dashed border-blue-400/25 bg-[#041021]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/50 sm:p-8">
        <CornerBrackets />

        {/* Top micro labels */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[3px] text-blue-400">
              The conversation
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[2px] text-slate-600">
              Continues
            </p>
          </div>

          <span className="font-mono text-[9px] tracking-[3px] text-slate-600">
            03
          </span>
        </div>

        {/* Center */}
        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          {/* Animated plus */}
          <div className="relative">
            <div className="absolute inset-[-18px] animate-ping rounded-full border border-blue-400/10" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/[0.08] shadow-[0_0_50px_rgba(37,99,235,0.15)] transition-all duration-500 group-hover:border-cyan-300/80 group-hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]">
              <span className="text-3xl font-light text-cyan-300">+</span>
            </div>
          </div>

          <h3 className="mt-9 text-xl font-semibold tracking-[-0.02em] text-white">
            More Speakers
          </h3>

          <p className="mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
            More technology leaders and industry voices will be announced soon.
          </p>
        </div>

        {/* Digital horizon */}
        <div className="relative h-24 overflow-hidden">
          <div className="absolute bottom-[-70px] left-1/2 h-40 w-[130%] -translate-x-1/2 rounded-[50%] border border-blue-400/20 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_65%)]" />

          <div
            className="absolute bottom-[-20px] left-1/2 h-24 w-[110%] -translate-x-1/2 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(56,189,248,0.6) 1px, transparent 1px)',
              backgroundSize: '9px 9px',
              maskImage:
                'linear-gradient(to bottom, transparent, black 40%, transparent)',
            }}
          />
        </div>

        {/* Bottom message */}
        <div className="border-t border-white/[0.06] pt-5 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            More Leaders
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[2.5px] text-blue-300/70">
            More Perspectives · A Brighter Tomorrow
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-[#020817] py-20 sm:py-24 lg:py-32"
    >
      <TechLines />

      {/* Vertical decorative labels */}
      <div className="pointer-events-none absolute left-5 top-32 hidden xl:block">
        <div className="flex flex-col gap-2 border-l border-blue-400/30 pl-4">
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            CIO
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            CTO
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            CDO
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-blue-400/60">
            Leaders
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 top-32 hidden xl:block">
        <div className="flex flex-col gap-2 text-right">
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            People
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            Ideas
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
            Technology
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[3px] text-blue-400/60">
            Tomorrow
          </span>

          <div className="ml-auto mt-3 h-px w-8 bg-blue-400/60" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <motion.header
          {...fadeUp()}
          className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/[0.06] px-5 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            <span className="text-[9px] font-medium uppercase tracking-[3px] text-blue-200">
              Thought Leaders
            </span>

            <span className="text-[9px] text-slate-600">•</span>

            <span className="text-[9px] font-medium uppercase tracking-[2px] text-slate-500">
              Real Perspectives
            </span>
          </div>

          {/* Main heading */}
          <h2 className="mt-7 text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Speakers
            </span>
          </h2>

          {/* Decorative line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/60 sm:w-20" />

            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-4 w-4 rounded-full border border-blue-400/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/60 sm:w-20" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Learn from leading CIOs, CTOs and technology pioneers shaping the
            future of enterprise innovation.
          </p>
        </motion.header>

        {/* SPEAKER GRID */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={index}
            />
          ))}

          <MoreSpeakersCard />
        </div>

        {/* BOTTOM TECHNOLOGY STATEMENT */}
        <motion.div
          {...fadeUp(0.35)}
          className="relative mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[3px] text-blue-400">
              CIO TECH 2026
            </span>

            <span className="h-px w-10 bg-blue-500/40" />

            <span className="font-mono text-[8px] uppercase tracking-[2px] text-slate-600">
              Leadership × Innovation × Impact
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              A More Intelligent Tomorrow
            </span>

            <span className="h-px w-10 bg-cyan-400/40" />

            <span className="font-mono text-[9px] uppercase tracking-[3px] text-blue-300">
              Delhi 2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom horizon glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-[50%] border border-blue-500/10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_65%)] blur-[1px]" />

      {/* Bottom blue line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}