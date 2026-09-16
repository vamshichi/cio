'use client'

import {
  motion,
  Variants,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'

import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import type { IconType } from 'react-icons'

import {
  FiArrowUpRight,
  FiCheck,
  FiCloud,
  FiCpu,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

/* =========================================================
   FONTS
========================================================= */

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* =========================================================
   CIO TECH — EXECUTIVE EDITORIAL DESIGN SYSTEM
========================================================= */

const COLORS = {
  // Core
  midnight: '#061522',
  navy: '#08243B',
  navyLight: '#103A5B',

  // Accent
  blue: '#176B9C',
  cyan: '#55C7DC',

  // Neutral
  white: '#FFFFFF',
  ivory: '#F8FAFC',
  mist: '#EDF3F6',

  // Typography
  ink: '#081A29',
  muted: '#607484',
  soft: '#91A1AD',

  // Borders
  line: '#D9E3E8',
}

/* =========================================================
   DATA
========================================================= */

const focusAreas = [
  {
    number: '01',
    code: 'AI-01',
    title: 'AI-Led',
    subtitle: 'Enterprise',
    description:
      'Exploring how artificial intelligence is reshaping enterprise strategy, operations and decision-making.',
    icon: FiCpu,
  },
  {
    number: '02',
    code: 'CL-02',
    title: 'Cloud, Data',
    subtitle: '& FinOps',
    description:
      'Building scalable, intelligent and financially responsible digital infrastructure.',
    icon: FiCloud,
  },
  {
    number: '03',
    code: 'CY-03',
    title: 'Cybersecurity',
    subtitle: '& Resilience',
    description:
      'Strengthening digital trust, enterprise security and organisational resilience.',
    icon: FiShield,
  },
  {
    number: '04',
    code: 'CX-04',
    title: 'Customer',
    subtitle: 'Experience',
    description:
      'Connecting technology innovation with meaningful customer and business outcomes.',
    icon: FiZap,
  },
  {
    number: '05',
    code: 'LD-05',
    title: 'CIO',
    subtitle: 'Leadership',
    description:
      'Creating stronger connections between technology leadership and business strategy.',
    icon: FiTarget,
  },
]

const leadershipPoints = [
  'Senior technology leadership conversations',
  'Enterprise technology perspectives',
  'Peer-to-peer knowledge exchange',
  'Strategic business connections',
]

const metrics = [
  {
    number: '20+',
    label: 'SPEAKERS',
    caption: 'Industry perspectives',
  },
  {
    number: '200+',
    label: 'DELEGATES',
    caption: 'Technology leaders',
  },
  {
    number: '40+',
    label: 'MEETINGS',
    caption: 'Strategic connections',
  },
]

/* =========================================================
   ANIMATION
========================================================= */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  label,
  number,
  dark = false,
}: {
  label: string
  number: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-[6px] w-[6px] rounded-full"
        style={{
          background: dark
            ? COLORS.cyan
            : COLORS.blue,
          boxShadow: dark
            ? `0 0 10px ${COLORS.cyan}`
            : 'none',
        }}
      />

      <span
        className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
        style={{
          color: dark
            ? 'rgba(255,255,255,0.82)'
            : COLORS.navy,
        }}
      >
        {label}
      </span>

      <span
        className="h-px w-9"
        style={{
          background: dark
            ? 'rgba(255,255,255,0.16)'
            : COLORS.line,
        }}
      />

      <span
        className={`${mono.className} text-[8px] uppercase tracking-[0.18em]`}
        style={{
          color: dark
            ? COLORS.cyan
            : COLORS.blue,
        }}
      >
        {number}
      </span>
    </div>
  )
}

/* =========================================================
   SMALL META
========================================================= */

function MetaRow({
  dark = false,
}: {
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`${mono.className} text-[8px] uppercase tracking-[0.18em]`}
        style={{
          color: dark
            ? COLORS.cyan
            : COLORS.blue,
        }}
      >
        DELHI
      </span>

      <span
        className="h-px w-8"
        style={{
          background: dark
            ? 'rgba(255,255,255,0.18)'
            : COLORS.line,
        }}
      />

      <span
        className={`${mono.className} text-[8px] uppercase tracking-[0.18em]`}
        style={{
          color: dark
            ? 'rgba(255,255,255,0.42)'
            : COLORS.soft,
        }}
      >
        2026
      </span>
    </div>
  )
}

/* =========================================================
   ORBIT
========================================================= */

function Orbit({
  size,
  duration,
  reverse = false,
  tilt = 65,
}: {
  size: number
  duration: number
  reverse?: boolean
  tilt?: number
}) {
  return (
    <motion.div
      animate={{
        rotateZ: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute left-1/2 top-1/2 rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: reverse
          ? 'rgba(82,195,218,0.10)'
          : 'rgba(82,195,218,0.18)',
        transform:
          `translate(-50%, -50%) rotateX(${tilt}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-0
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background: COLORS.cyan,
          boxShadow:
            `0 0 12px ${COLORS.cyan}`,
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   TECHNOLOGY CORE
========================================================= */

function TechnologyCore() {
  const reduceMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [4, -4]),
    {
      stiffness: 120,
      damping: 25,
    }
  )

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-4, 4]),
    {
      stiffness: 120,
      damping: 25,
    }
  )

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (reduceMotion) return

    const rect =
      event.currentTarget.getBoundingClientRect()

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
        2 -
      1

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
        2 -
      1

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      className="
        relative
        h-[340px]
        w-full
        overflow-hidden
        sm:h-[390px]
        lg:h-[450px]
        [perspective:1400px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[100px]
        "
        style={{
          background:
            'radial-gradient(circle, rgba(85,199,220,0.14), transparent 68%)',
        }}
      />

      {/* =====================================================
          ARCHITECTURAL RINGS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[410px]
          w-[410px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(255,255,255,0.045)',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[330px]
          w-[330px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(85,199,220,0.055)',
        }}
      />

      {/* =====================================================
          ORBITS
      ===================================================== */}

      <Orbit
        size={330}
        duration={38}
        tilt={67}
      />

      <Orbit
        size={255}
        duration={30}
        reverse
        tilt={70}
      />

      {/* =====================================================
          CORE
      ===================================================== */}

      <motion.div
        style={{
          rotateX: reduceMotion
            ? 0
            : rotateX,
          rotateY: reduceMotion
            ? 0
            : rotateY,
          transformStyle:
            'preserve-3d',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[190px]
          w-[190px]
          -translate-x-1/2
          -translate-y-1/2
          sm:h-[220px]
          sm:w-[220px]
        "
      >
        {/* Outer ring */}

        <div
          className="
            absolute
            inset-[-14px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(85,199,220,0.16)',
          }}
        />

        {/* Inner ring */}

        <div
          className="
            absolute
            inset-[-6px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(23,107,156,0.30)',
          }}
        />

        {/* Sphere */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    '0 20px 70px rgba(0,0,0,0.18)',
                    '0 28px 95px rgba(85,199,220,0.16)',
                    '0 20px 70px rgba(0,0,0,0.18)',
                  ],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-full
            border
            bg-[#F8FAFC]
          "
          style={{
            borderColor:
              'rgba(85,199,220,0.32)',
            transform:
              'translateZ(25px)',
          }}
        >
          {/* Fine technical grid */}

          <div
            className="
              absolute
              inset-0
              opacity-45
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,21,34,0.065) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,21,34,0.065) 1px, transparent 1px)
              `,
              backgroundSize:
                '23px 23px',
            }}
          />

          {/* Light */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 30% 24%,
                  rgba(85,199,220,0.25),
                  transparent 28%
                ),
                radial-gradient(
                  circle at 72% 70%,
                  rgba(23,107,156,0.10),
                  transparent 45%
                )
              `,
            }}
          />

          {/* Latitude */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[125px]
              w-[190px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor:
                'rgba(85,199,220,0.22)',
              transform:
                'translate(-50%, -50%) rotateX(68deg)',
            }}
          />

          {/* Longitude */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[190px]
              w-[72px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor:
                'rgba(23,107,156,0.18)',
            }}
          />

          {/* =================================================
              CENTER BRAND
          ================================================= */}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [
                        1,
                        1.025,
                        1,
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                flex
                h-[88px]
                w-[88px]
                items-center
                justify-center
                rounded-full
                border
                bg-white/95
                shadow-[0_18px_55px_rgba(6,21,34,0.14)]
                backdrop-blur-xl
              "
              style={{
                borderColor:
                  'rgba(23,107,156,0.30)',
              }}
            >
              <div className="text-center">
                <div
                  className="
                    mx-auto
                    mb-2
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                  "
                  style={{
                    background:
                      'rgba(23,107,156,0.09)',
                    color:
                      COLORS.blue,
                  }}
                >
                  <FiCpu size={14} />
                </div>

                <p
                  className={`${mono.className} text-[6px] uppercase tracking-[0.20em]`}
                  style={{
                    color:
                      COLORS.muted,
                  }}
                >
                  Intelligent
                </p>

                <p
                  className="
                    mt-1
                    text-[13px]
                    font-bold
                    tracking-[-0.02em]
                  "
                  style={{
                    color:
                      COLORS.navy,
                  }}
                >
                  CIO TECH
                </p>

                <p
                  className={`${mono.className} mt-1 text-[6px] uppercase tracking-[0.20em]`}
                  style={{
                    color:
                      COLORS.blue,
                  }}
                >
                  DELHI
                </p>
              </div>

              <span
                className="
                  absolute
                  right-[-3px]
                  top-1/2
                  h-2
                  w-2
                  -translate-y-1/2
                  rounded-full
                "
                style={{
                  background:
                    COLORS.cyan,
                  boxShadow:
                    `0 0 14px ${COLORS.cyan}`,
                }}
              />
            </motion.div>
          </div>

          {/* Minimal signal points */}

          {Array.from({
            length: 10,
          }).map((_, index) => {
            const angle =
              (index / 10) *
              Math.PI *
              2

            const radius =
              82 +
              (index % 2) * 10

            const x =
              Math.cos(angle) *
              radius

            const y =
              Math.sin(angle) *
              radius

            return (
              <motion.span
                key={index}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[3px]
                  w-[3px]
                  rounded-full
                "
                style={{
                  marginLeft: x,
                  marginTop: y,
                  background:
                    index % 2 === 0
                      ? COLORS.blue
                      : COLORS.cyan,
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.15,
                          0.75,
                          0.15,
                        ],
                      }
                }
                transition={{
                  duration:
                    2.5 +
                    (index % 3),
                  delay:
                    index * 0.14,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </motion.div>
      </motion.div>

      {/* Bottom statement */}

      <div
        className="
          absolute
          bottom-2
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >
        <span
          className="h-px w-8"
          style={{
            background:
              'rgba(255,255,255,0.15)',
          }}
        />

        <span
          className={`${mono.className} whitespace-nowrap text-[7px] uppercase tracking-[0.22em]`}
          style={{
            color:
              'rgba(255,255,255,0.38)',
          }}
        >
          PEOPLE × IDEAS × TECHNOLOGY
        </span>

        <span
          className="h-px w-8"
          style={{
            background:
              'rgba(255,255,255,0.15)',
          }}
        />
      </div>
    </div>
  )
}

/* =========================================================
   TECHNOLOGY SECTION
========================================================= */

function TechnologySection() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden`}
      style={{
        background:
          COLORS.midnight,
      }}
    >
      {/* Technical grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize:
            '90px 90px',
        }}
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[120px]
        "
        style={{
          background:
            'rgba(85,199,220,0.045)',
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={stagger}
        >
          {/* <motion.div variants={reveal}>
            <SectionLabel
              label="Technology Core"
              number="01 / 04"
              dark
            />
          </motion.div> */}

          <div
            className="
              mt-8
              grid
              gap-7
              lg:grid-cols-[0.72fr_1.28fr]
              lg:items-center
              lg:gap-10
            "
          >
            <motion.div variants={reveal}>
              <p
                className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                style={{
                  color:
                    COLORS.cyan,
                }}
              >
                The intelligent enterprise
              </p>

              <h2
                className="
                  mt-4
                  max-w-xl
                  text-[42px]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-white
                  sm:text-[52px]
                  lg:text-[64px]
                "
              >
                Where ideas
                <br />
                become{' '}
                <span
                  style={{
                    color:
                      '#7DD3E7',
                  }}
                >
                  action.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-[14px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                "
                style={{
                  color:
                    'rgba(255,255,255,0.54)',
                }}
              >
                The technology core represents
                the interconnected ecosystem of
                people, ideas and technologies
                driving the next generation of
                enterprise leadership.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  'AI',
                  'CLOUD',
                  'DATA',
                  'SECURITY',
                  'LEADERSHIP',
                ].map((item) => (
                  <span
                    key={item}
                    className={`${mono.className} border px-3 py-2 text-[7px] uppercase tracking-[0.14em]`}
                    style={{
                      borderColor:
                        'rgba(255,255,255,0.12)',
                      color:
                        'rgba(255,255,255,0.48)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              className="relative"
            >
              <TechnologyCore />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   FOCUS AREAS
========================================================= */

function FocusAreas() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden bg-white`}
    >
      {/* Background circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-230px]
          top-[-230px]
          h-[520px]
          w-[520px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(21,90,145,0.04)',
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={stagger}
        >
          {/* <motion.div variants={reveal}>
            <SectionLabel
              label="Strategic Focus"
              number="02 / 04"
            />
          </motion.div> */}

          {/* Heading */}

          <motion.div
            variants={reveal}
            className="
              mt-7
              grid
              gap-7
              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-end
              lg:gap-12
            "
          >
            <div>
              <h2
                className="
                  max-w-2xl
                  text-[43px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.06em]
                  sm:text-[55px]
                  lg:text-[66px]
                "
                style={{
                  color:
                    COLORS.navy,
                }}
              >
                Conversations
                <br />
                that shape
                <br />
                <span
                  style={{
                    color:
                      COLORS.blue,
                  }}
                >
                  what&apos;s next.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:ml-auto">
              <p
                className="
                  text-[14px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                "
                style={{
                  color:
                    COLORS.muted,
                }}
              >
                CIO Tech brings together senior
                technology leaders around the
                priorities shaping modern
                enterprises — from AI and cloud
                to cybersecurity, innovation and
                leadership.
              </p>
            </div>
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={reveal}
            className="
              mt-9
              grid
              border-l
              border-t
              sm:grid-cols-2
              lg:grid-cols-5
            "
            style={{
              borderColor:
                COLORS.line,
            }}
          >
            {focusAreas.map(
              (area, index) => {
                const Icon = area.icon

                return (
                  <motion.div
                    key={area.code}
                    whileHover={{
                      backgroundColor:
                        '#F7FAFC',
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[215px]
                      flex-col
                      border-b
                      border-r
                      bg-white
                      p-5
                      sm:p-6
                    "
                    style={{
                      borderColor:
                        COLORS.line,
                    }}
                  >
                    {/* Top */}

                    <div className="flex items-start justify-between">
                      <span
                        className={`${mono.className} text-[9px] font-semibold tracking-[0.12em]`}
                        style={{
                          color:
                            COLORS.blue,
                        }}
                      >
                        {area.number}
                      </span>

                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        style={{
                          color:
                            COLORS.blue,
                        }}
                      />
                    </div>

                    {/* Accent line */}

                    <div
                      className="
                        mt-5
                        h-px
                        w-8
                        transition-all
                        duration-300
                        group-hover:w-14
                      "
                      style={{
                        background:
                          COLORS.cyan,
                      }}
                    />

                    {/* Content */}

                    <div className="mt-auto pt-7">
                      <p
                        className="
                          text-[19px]
                          font-semibold
                          leading-[1.05]
                          tracking-[-0.025em]
                        "
                        style={{
                          color:
                            COLORS.navy,
                        }}
                      >
                        {area.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[19px]
                          font-semibold
                          leading-[1.05]
                          tracking-[-0.025em]
                        "
                        style={{
                          color:
                            COLORS.blue,
                        }}
                      >
                        {area.subtitle}
                      </p>

                      <p
                        className="
                          mt-3
                          text-[11px]
                          leading-5
                        "
                        style={{
                          color:
                            COLORS.muted,
                        }}
                      >
                        {area.description}
                      </p>
                    </div>

                    {/* Footer */}

                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className={`${mono.className} text-[7px] uppercase tracking-[0.15em]`}
                        style={{
                          color:
                            COLORS.soft,
                        }}
                      >
                        {area.code}
                      </span>

                      <FiArrowUpRight
                        size={15}
                        className="
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                        style={{
                          color:
                            COLORS.blue,
                        }}
                      />
                    </div>
                  </motion.div>
                )
              }
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   MISSION
========================================================= */

function Mission() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden bg-[#F8FAFC]`}
    >
      {/* Architectural background */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[-200px]
          h-[480px]
          w-[480px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(21,90,145,0.045)',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[360px]
          w-[360px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(22,119,168,0.035)',
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={stagger}
        >
          {/* <motion.div variants={reveal}>
            <SectionLabel
              label="The CIO Tech Mission"
              number="03 / 04"
            />
          </motion.div> */}

          <div
            className="
              mt-8
              grid
              gap-10
              lg:grid-cols-[1.12fr_0.88fr]
              lg:gap-16
            "
          >
            {/* Main statement */}

            <motion.div variants={reveal}>
              <p
                className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                style={{
                  color:
                    COLORS.blue,
                }}
              >
                Technology × Leadership
              </p>

              <h2
                className="
                  mt-4
                  max-w-3xl
                  text-[45px]
                  font-semibold
                  leading-[0.93]
                  tracking-[-0.065em]
                  sm:text-[58px]
                  lg:text-[70px]
                "
                style={{
                  color:
                    COLORS.navy,
                }}
              >
                Turn insight
                <br />
                into{' '}
                <span
                  style={{
                    color:
                      COLORS.blue,
                  }}
                >
                  business
                </span>
                <br />
                advantage.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-[14px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                "
                style={{
                  color:
                    COLORS.muted,
                }}
              >
                CIO Tech Delhi brings together
                technology leaders, innovators and
                decision-makers to explore the ideas,
                technologies and strategies shaping
                the intelligent enterprise.
              </p>

              <div className="mt-6">
                <MetaRow />
              </div>
            </motion.div>

            {/* Leadership principles */}

            <motion.div
              variants={reveal}
              className="
                border-t
                lg:border-t-0
              "
              style={{
                borderColor:
                  COLORS.line,
              }}
            >
              <div className="lg:pl-8">
                <div
                  className="
                    border-b
                    py-6
                  "
                  style={{
                    borderColor:
                      COLORS.line,
                  }}
                >
                  <p
                    className={`${mono.className} text-[8px] uppercase tracking-[0.18em]`}
                    style={{
                      color:
                        COLORS.blue,
                    }}
                  >
                    What happens here
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[27px]
                      font-semibold
                      leading-tight
                      tracking-[-0.04em]
                    "
                    style={{
                      color:
                        COLORS.navy,
                    }}
                  >
                    A platform for
                    <br />
                    technology leaders.
                  </h3>
                </div>

                <div>
                  {leadershipPoints.map(
                    (point, index) => (
                      <div
                        key={point}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          border-b
                          py-4
                        "
                        style={{
                          borderColor:
                            COLORS.line,
                        }}
                      >
                        <span
                          className={`${mono.className} text-[8px]`}
                          style={{
                            color:
                              COLORS.blue,
                          }}
                        >
                          0{index + 1}
                        </span>

                        <span
                          className="
                            text-[12px]
                            transition-colors
                            duration-200
                          "
                          style={{
                            color:
                              COLORS.ink,
                          }}
                        >
                          {point}
                        </span>

                        <FiCheck
                          size={12}
                          className="ml-auto"
                          style={{
                            color:
                              COLORS.blue,
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metrics */}

          <motion.div
            variants={reveal}
            className="
              mt-12
              grid
              border-y
              sm:grid-cols-3
            "
            style={{
              borderColor:
                COLORS.line,
            }}
          >
            {metrics.map(
              (stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative
                    py-7
                    sm:px-7
                    sm:py-8
                    ${
                      index !== 0
                        ? 'border-t sm:border-l sm:border-t-0'
                        : ''
                    }
                  `}
                  style={{
                    borderColor:
                      COLORS.line,
                  }}
                >
                  <p
                    className="
                      text-[54px]
                      font-semibold
                      leading-none
                      tracking-[-0.07em]
                      sm:text-[62px]
                    "
                    style={{
                      color:
                        COLORS.navy,
                    }}
                  >
                    {stat.number}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.18em]`}
                      style={{
                        color:
                          COLORS.blue,
                      }}
                    >
                      {stat.label}
                    </span>

                    <span
                      className="h-px w-7"
                      style={{
                        background:
                          COLORS.line,
                      }}
                    />

                    <span
                      className="text-[9px]"
                      style={{
                        color:
                          COLORS.soft,
                      }}
                    >
                      {stat.caption}
                    </span>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden`}
      style={{
        background:
          COLORS.midnight,
      }}
    >
      {/* Large architectural circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-210px]
          top-[-210px]
          h-[540px]
          w-[540px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(85,199,220,0.07)',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-70px]
          top-[-70px]
          h-[260px]
          w-[260px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(255,255,255,0.045)',
        }}
      />

      {/* Horizontal architectural line */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-1/2
          h-px
        "
        style={{
          background:
            'rgba(255,255,255,0.035)',
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={reveal}
        >
          {/* <SectionLabel
            label="Join The Conversation"
            number="04 / 04"
            dark
          /> */}

          <div
            className="
              relative
              mt-8
              grid
              gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <p
                className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                style={{
                  color:
                    COLORS.cyan,
                }}
              >
                CIO TECH / DELHI
              </p>

              <h2
                className="
                  mt-4
                  max-w-4xl
                  text-[43px]
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.065em]
                  text-white
                  sm:text-[56px]
                  lg:text-[74px]
                "
              >
                Connect with the
                <br />
                people shaping
                <br />
                <span
                  style={{
                    color:
                      '#7DD3E7',
                  }}
                >
                  what comes next.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-[14px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                "
                style={{
                  color:
                    'rgba(255,255,255,0.52)',
                }}
              >
                A focused platform for technology
                leaders to connect, exchange ideas
                and explore the future of enterprise
                technology.
              </p>

              <div className="mt-7">
                <MetaRow dark />
              </div>
            </div>

            {/* CTA BUTTON */}

            <a
              href="#delegateenquiry"
              className="
                group
                inline-flex
                min-w-[230px]
                items-center
                justify-between
                gap-7
                border
                px-5
                py-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor:
                  'rgba(255,255,255,0.18)',
                background:
                  'rgba(255,255,255,0.035)',
                color:
                  COLORS.white,
              }}
            >
              <span>
                Attend as Delegate
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
                style={{
                  background:
                    'rgba(85,199,220,0.12)',
                  color:
                    COLORS.cyan,
                }}
              >
                <FiArrowUpRight
                  size={14}
                />
              </span>
            </a>
          </div>

          {/* Footer */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-3
              border-t
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
            style={{
              borderColor:
                'rgba(255,255,255,0.10)',
            }}
          >
            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
              style={{
                color:
                  'rgba(255,255,255,0.40)',
              }}
            >
              CIO TECH / DELHI / 2026
            </span>

            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
              style={{
                color:
                  'rgba(255,255,255,0.27)',
              }}
            >
              Intelligent Enterprise Era
            </span>

            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
              style={{
                color:
                  'rgba(255,255,255,0.40)',
              }}
            >
              END / ABOUT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main
      id="about"
      className={`${sans.className} overflow-hidden`}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Architectural background */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-200px]
            top-[-250px]
            h-[600px]
            w-[600px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(21,90,145,0.045)',
          }}
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-90px]
            top-[-130px]
            h-[350px]
            w-[350px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(23,107,156,0.055)',
          }}
        />

        {/* Very subtle horizontal line */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-[52%]
            h-px
          "
          style={{
            background:
              'rgba(8,26,41,0.025)',
          }}
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1380px]
            px-5
            pb-12
            pt-12
            sm:px-8
            sm:pb-14
            sm:pt-14
            lg:px-12
            lg:pb-16
            lg:pt-16
          "
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Label */}

            {/* <motion.div variants={reveal}>
              <SectionLabel
                label="About CIO Tech"
                number="ABOUT / 2026"
              />
            </motion.div> */}

            <div
              className="
                mt-8
                grid
                gap-9
                lg:grid-cols-[1fr_0.60fr]
                lg:items-end
                lg:gap-14
              "
            >
              {/* Main headline */}

              <motion.div variants={reveal}>
                <p
                  className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                  style={{
                    color:
                      COLORS.blue,
                  }}
                >
                  The Technology Leadership Platform
                </p>

                <h1
                  className="
                    mt-4
                    max-w-5xl
                    text-[50px]
                    font-semibold
                    leading-[0.91]
                    tracking-[-0.07em]
                    sm:text-[66px]
                    lg:text-[82px]
                  "
                  style={{
                    color:
                      COLORS.navy,
                  }}
                >
                  Where technology
                  <br />
                  meets{' '}
                  <span
                    style={{
                      color:
                        COLORS.blue,
                    }}
                  >
                    leadership.
                  </span>
                </h1>
              </motion.div>

              {/* Description */}

              <motion.div
                variants={reveal}
                className="lg:pb-2"
              >
                <p
                  className="
                    max-w-lg
                    text-[14px]
                    leading-6
                    sm:text-[15px]
                    sm:leading-7
                  "
                  style={{
                    color:
                      COLORS.muted,
                  }}
                >
                  CIO Tech Delhi is a curated
                  platform where senior technology
                  and business leaders come together
                  to exchange perspectives, challenge
                  ideas and shape what comes next in
                  enterprise technology.
                </p>

                <div className="mt-6">
                  <MetaRow />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div
          className="
            mx-auto
            max-w-[1380px]
            border-t
          "
          style={{
            borderColor:
              COLORS.line,
          }}
        />
      </section>

      {/* =====================================================
          TECHNOLOGY CORE
      ===================================================== */}

      <TechnologySection />

      {/* =====================================================
          STRATEGIC FOCUS
      ===================================================== */}

      <FocusAreas />

      {/* =====================================================
          MISSION
      ===================================================== */}

      <Mission />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA />
    </main>
  )
}