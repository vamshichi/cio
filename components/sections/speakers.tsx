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
  {
    name: 'Vinay Thakur',
    title: 'Director General',
    company: 'BiSAG-N, Ministry of Electronics and IT',
    image: '/speakers/Vinay Thakur.png', 
  },
  {
    name: 'Ms. Tulika Pandey',
    title: 'Scientist ‘G’ and Group Coordinator',
    company: 'Ministry of Electronics and Information Technology',
    image: '/speakers/Tulika Pandey.png',
  },
  {
    name: 'Chetansinh Parmar',
    title: 'Chief Information Security Officer',
    company: 'Acutaas Chemicals Limited',
    image: '/speakers/Chetan.png',
  },
  {
    name: 'Rajneesh Singh',
    title: 'CIO / Vice President IT & SAP',
    company: 'Rays Power Infra Limited',
    image: '/speakers/Rajneesh Singh.png',
  },
  {
    name: 'Mitali Biswas',
    title: 'Vice President – Digital',
    company: 'CKA Birla Group',
    image: '/speakers/Mitali.png',
  },
  {
    name: 'Saurabh Gupta',
    title: 'Group Chief Digital and Information officer',
    company: 'Gujarat Fluorochemicals Limited',
    image: '/speakers/Saurabh.jpg',
  }
  
  

  // Add more speakers here
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
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
})

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
              y: -8,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-1
          rounded-[28px]
          bg-[#176B9C]/20
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-[#D9E3E8]
          bg-white
          shadow-[0_12px_35px_rgba(8,36,59,0.06)]
          transition-all
          duration-500
          group-hover:border-[#176B9C]/35
          group-hover:shadow-[0_25px_60px_rgba(8,36,59,0.14)]
        "
      >
        {/* Image */}
        <div className="relative aspect-[0.92/1] overflow-hidden bg-[#EAF0F4]">
          <Image
            src={speaker.image}
            alt={`${speaker.name} - ${speaker.title} at ${speaker.company}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.055]
            "
          />

          {/* Image gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#061B2B]/90
              via-[#061B2B]/15
              to-transparent
            "
          />

          {/* Soft hover light */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-tr
              from-[#55C7DC]/0
              via-white/0
              to-white/10
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Speaker number */}
          <div
            className="
              absolute
              right-5
              top-5
              font-mono
              text-[9px]
              tracking-[0.2em]
              text-white/60
            "
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Speaker identity */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-6
              transition-transform
              duration-500
              ease-out
              group-hover:-translate-y-1
            "
          >
            {/* Company */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#55C7DC]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7DD3E7]
                "
              >
                {speaker.company}
              </span>
            </div>

            {/* Name */}
            <h3
              className="
                text-[27px]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-white
                sm:text-[30px]
              "
            >
              {speaker.name}
            </h3>

            {/* Designation */}
            <p
              className="
                mt-2
                max-w-[92%]
                text-[11px]
                leading-[1.55]
                text-white/70
              "
            >
              {speaker.title}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function MoreSpeakersCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      {...fadeUp(speakers.length * 0.12)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative"
    >
      <div
        className="
          absolute
          -inset-1
          rounded-[28px]
          bg-[#176B9C]/15
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          flex
          min-h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-[#D9E3E8]
          bg-[#08243B]
          p-7
          text-white
          transition-all
          duration-500
          group-hover:border-[#55C7DC]/40
          group-hover:shadow-[0_25px_60px_rgba(8,36,59,0.16)]
          sm:p-8
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#176B9C]/20
            blur-3xl
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />

        <div className="relative flex flex-1 flex-col items-center justify-center py-12 text-center">
          {/* Plus */}
          <div className="relative">
            <div
              className="
                absolute
                -inset-4
                rounded-full
                border
                border-[#55C7DC]/10
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div
              className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#55C7DC]/35
                bg-[#55C7DC]/10
                transition-all
                duration-500
                group-hover:border-[#55C7DC]/70
                group-hover:bg-[#55C7DC]/15
              "
            >
              <span className="text-3xl font-light text-[#7DD3E7]">
                +
              </span>
            </div>
          </div>

          <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
            More Speakers
          </h3>

          <p className="mt-3 max-w-[240px] text-[11px] leading-5 text-white/50">
            More technology leaders and industry voices will be announced soon.
          </p>
        </div>

        <div className="relative border-t border-white/10 pt-5 text-center">
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#7DD3E7]
            "
          >
            The conversation continues
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function Speakers() {
  return (
    <section
      id="speakers"
      className="
        relative
        overflow-hidden
        bg-[#F5F8FC]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#55C7DC]/[0.07]
            blur-[120px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,36,59,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,36,59,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#176B9C]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#176B9C]
              "
            >
              Meet the speakers
            </span>

            <span className="h-px w-8 bg-[#176B9C]" />
          </div>

          <h2
            className="
              text-[48px]
              font-semibold
              leading-[0.95]
              tracking-[-0.06em]
              text-[#08243B]
              sm:text-[64px]
              lg:text-[76px]
            "
          >
            Voices that
            <br />
            <span className="text-[#176B9C]">shape the future.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[13px]
              leading-6
              text-[#607484]
              sm:text-[15px]
              sm:leading-7
            "
          >
            Meet the technology leaders, innovators and decision-makers
            bringing real-world experience to the conversation.
          </p>
        </motion.div>

        {/* Small event line */}
        <motion.div
          {...fadeUp(0.12)}
          className="
            mx-auto
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC]" />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#91A1AD]
            "
          >
            Leadership · Innovation · Technology
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC]" />
        </motion.div>

        {/* Speaker grid */}
        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={index}
            />
          ))}

          <MoreSpeakersCard />
        </div>

        {/* Bottom event message */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 text-center"
        >
          <div className="mx-auto flex max-w-md items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#D9E3E8]" />

            <span
              className="
                whitespace-nowrap
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#91A1AD]
              "
            >
              More leaders coming soon
            </span>

            <span className="h-px flex-1 bg-[#D9E3E8]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}