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
      className="relative overflow-hidden bg-[#F5F8FC] py-5 sm:py-10 lg:py-10"
    >
      {/* =========================================================
          LIGHT TECHNICAL BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,36,59,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,36,59,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          }}
        />

        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#176B9C]/[0.045]" />
        <div className="absolute right-[-90px] top-[-90px] h-[320px] w-[320px] rounded-full border border-[#55C7DC]/[0.07]" />
        <div className="absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full border border-[#176B9C]/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.header
          {...fadeUp()}
          className="border-b border-[#D9E3E8] pb-10"
        >
          

          <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.25em] text-[#176B9C]">
                The people shaping what&apos;s next
              </p>

              <h2 className="mt-5 text-[49px] font-semibold leading-[0.9] tracking-[-0.075em] text-[#08243B] sm:text-[68px] lg:text-[88px]">
                Meet the
                <br />
                <span className="text-[#176B9C]">voices.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-[13px] leading-6 text-[#607484] sm:text-[15px] sm:leading-7">
                Hear directly from senior technology leaders and industry
                pioneers bringing real-world perspectives to the decisions
                shaping enterprise transformation.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#176B9C]" />
                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#91A1AD]">
                  Leadership × Innovation × Impact
                </span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* =========================================================
            SPEAKER COUNT STRIP
        ========================================================= */}
        <motion.div
          {...fadeUp(0.08)}
          className="grid border-b border-[#D9E3E8] sm:grid-cols-3"
        >
          {[
            ['01', 'Featured Speakers', 'Senior technology voices'],
            ['02', 'Executive Perspective', 'Real-world experience'],
            ['03', 'More to Come', 'Additional leaders announced soon'],
          ].map(([number, title, caption], index) => (
            <div
              key={number}
              className={`flex items-start gap-4 px-1 py-6 sm:px-6 sm:py-7 ${
                index !== 0
                  ? 'border-t border-[#D9E3E8] sm:border-l sm:border-t-0'
                  : ''
              }`}
            >
              <span className="font-mono text-[8px] font-semibold tracking-[0.15em] text-[#176B9C]">
                {number}
              </span>

              <div>
                <p className="text-[12px] font-semibold text-[#08243B]">
                  {title}
                </p>
                <p className="mt-1 text-[9px] text-[#91A1AD]">{caption}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            SPEAKER GRID
        ========================================================= */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              {...fadeUp(index * 0.1)}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="group relative"
            >
              {/* Hover accent */}
              <div className="absolute -inset-px rounded-[22px] bg-gradient-to-b from-[#176B9C]/25 via-[#55C7DC]/10 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[20px] border border-[#D9E3E8] bg-white shadow-[0_14px_40px_rgba(8,36,59,0.07)] transition-all duration-500 group-hover:border-[#176B9C]/30 group-hover:shadow-[0_22px_55px_rgba(8,36,59,0.12)]">
                {/* Image */}
                <div className="relative aspect-[1.08/1] overflow-hidden bg-[#EAF0F4]">
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} - ${speaker.title} at ${speaker.company}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* Soft editorial image treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08243B]/85 via-[#08243B]/5 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <div className="flex items-center gap-2 rounded-full border border-white/30 bg-[#08243B]/65 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC]" />
                      <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-white">
                        Featured
                      </span>
                    </div>
                  </div>

                  <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.18em] text-white/55">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Image identity */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-px w-7 bg-[#55C7DC]" />
                      <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-[#7DD3E7]">
                        {speaker.company}
                      </span>
                    </div>

                    <h3 className="text-[25px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[28px]">
                      {speaker.name}
                    </h3>

                    <p className="mt-2 max-w-[92%] text-[10px] leading-5 text-white/70 sm:text-[11px]">
                      {speaker.title}
                    </p>
                  </div>
                </div>

                {/* Bottom information */}
                <div className="flex items-center justify-between gap-4 border-t border-[#E6EDF2] px-5 py-4 sm:px-6">
                  <div>
                    <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-[#176B9C]">
                      Enterprise Leadership
                    </p>

                    <p className="mt-1 text-[9px] text-[#91A1AD]">
                      People · Strategy · Technology
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D9E3E8] bg-[#F8FAFC] text-[#176B9C] transition-all duration-300 group-hover:border-[#176B9C]/35 group-hover:bg-[#176B9C]/[0.05]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 19L19 5M8 5H19V16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          <MoreSpeakersCard />
        </div>

        {/* =========================================================
            MORE SPEAKERS — LIGHT EDITORIAL CARD
        ========================================================= */}
        <motion.div
          {...fadeUp(speakers.length * 0.1)}
          className="mt-5"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-[#D9E3E8] bg-[#08243B] p-7 text-white shadow-[0_16px_45px_rgba(8,36,59,0.10)] sm:p-9">
            <div className="pointer-events-none absolute right-[-90px] top-[-120px] h-[320px] w-[320px] rounded-full border border-[#55C7DC]/10" />
            <div className="pointer-events-none absolute right-[-30px] top-[-60px] h-[210px] w-[210px] rounded-full border border-white/[0.06]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC]" />
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#7DD3E7]">
                    The conversation continues
                  </span>
                </div>

                <h3 className="mt-5 text-[32px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[42px]">
                  More leaders.
                  <br />
                  <span className="text-[#7DD3E7]">More perspectives.</span>
                </h3>

                <p className="mt-4 max-w-xl text-[11px] leading-5 text-white/45 sm:text-[12px]">
                  Additional technology leaders and industry voices will be
                  announced as the summit programme evolves.
                </p>
              </div>

              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#55C7DC]/25 bg-[#55C7DC]/[0.06] sm:h-28 sm:w-28">
                <div className="absolute inset-[-10px] rounded-full border border-[#55C7DC]/10" />
                <span className="text-[40px] font-light leading-none text-[#7DD3E7]">
                  +
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
