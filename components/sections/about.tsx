'use client'

import {
  motion,
  Variants,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'

import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

import type { IconType } from 'react-icons'

import {
  FiCpu,
  FiCloud,
  FiShield,
  FiZap,
  FiTarget,
  FiUsers,
  FiGlobe,
  FiArrowUpRight,
  FiDatabase,
  FiLock,
  FiLayers,
  FiTrendingUp,
  FiAward,
  FiBriefcase,
  FiPlay,
  FiCheck,
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
   PREMIUM NAVY DESIGN SYSTEM
========================================================= */

const COLORS = {
  navy: '#061A2E',
  navy2: '#0A2742',
  navy3: '#0E3558',

  blue: '#155A91',
  accent: '#1687B8',
  cyan: '#36B8D4',

  white: '#FFFFFF',
  paper: '#F7FAFC',
  softPaper: '#EEF4F8',

  ink: '#071A2B',
  muted: '#617386',
  soft: '#91A2B1',

  line: '#D9E4EB',
}

/* =========================================================
   DATA
========================================================= */

const focusAreas = [
  {
    title: 'AI-Led Enterprise',
    subtitle: 'Transformation',
    description:
      'Exploring how artificial intelligence is reshaping enterprise strategy, operations and decision-making.',
    code: 'AI-01',
    icon: FiCpu,
  },
  {
    title: 'Cloud, Data',
    subtitle: '& FinOps',
    description:
      'Building scalable, intelligent and financially responsible digital infrastructure.',
    code: 'CL-02',
    icon: FiCloud,
  },
  {
    title: 'Cybersecurity',
    subtitle: '& Resilience',
    description:
      'Strengthening digital trust, enterprise security and organisational resilience.',
    code: 'CY-03',
    icon: FiShield,
  },
  {
    title: 'Customer Experience',
    subtitle: '& Innovation',
    description:
      'Connecting technology innovation with meaningful customer and business outcomes.',
    code: 'CX-04',
    icon: FiZap,
  },
  {
    title: 'CIO Leadership',
    subtitle: '& Alignment',
    description:
      'Creating stronger connections between technology leadership and business strategy.',
    code: 'LD-05',
    icon: FiTarget,
  },
]

const floatingSystems = [
  {
    title: 'AI & Intelligence',
    subtitle: 'Transforming possibilities',
    icon: FiCpu,
    position: 'left-[3%] top-[18%]',
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Building digital trust',
    icon: FiShield,
    position: 'right-[3%] top-[20%]',
  },
  {
    title: 'Cloud & Data',
    subtitle: 'Scalable for tomorrow',
    icon: FiCloud,
    position: 'left-[3%] bottom-[16%]',
  },
  {
    title: 'Digital Transformation',
    subtitle: "Driving what's next",
    icon: FiTrendingUp,
    position: 'right-[2%] bottom-[16%]',
  },
]

const leadershipPoints = [
  'Senior technology leadership conversations',
  'Enterprise technology perspectives',
  'Peer-to-peer knowledge exchange',
  'Strategic business connections',
]

/* =========================================================
   ANIMATION
========================================================= */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({
  label = 'About CIO Tech',
  number = '01 / 04',
  dark = false,
}: {
  label?: string
  number?: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: dark ? COLORS.cyan : COLORS.accent,
        }}
      />

      <span
        className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.24em]`}
        style={{
          color: dark ? '#FFFFFF' : COLORS.navy,
        }}
      >
        {label}
      </span>

      <span
        className="h-px w-8"
        style={{
          background: dark
            ? 'rgba(255,255,255,0.2)'
            : `${COLORS.navy}22`,
        }}
      />

      <span
        className={`${mono.className} text-[8px] uppercase tracking-[0.2em]`}
        style={{
          color: dark ? COLORS.cyan : COLORS.accent,
        }}
      >
        {number}
      </span>
    </div>
  )
}

/* =========================================================
   SMALL SYSTEM CARD
========================================================= */

function SystemCard({
  title,
  subtitle,
  icon: Icon,
  position,
}: {
  title: string
  subtitle: string
  icon: IconType
  position: string
}) {
  return (
    <motion.div
      className={`absolute z-30 hidden lg:block ${position}`}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <div
        className="
          flex
          min-w-[190px]
          items-center
          gap-3
          rounded-lg
          border
          bg-white
          px-3
          py-3
          shadow-[0_18px_50px_rgba(6,26,46,0.12)]
        "
        style={{
          borderColor: COLORS.line,
        }}
      >
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md"
          style={{
            background: '#EDF6FA',
            color: COLORS.accent,
          }}
        >
          <Icon size={16} />
        </div>

        <div>
          <p
            className="text-[10px] font-semibold"
            style={{
              color: COLORS.ink,
            }}
          >
            {title}
          </p>

          <p
            className={`${mono.className} mt-1 text-[6px] uppercase tracking-[0.12em]`}
            style={{
              color: COLORS.soft,
            }}
          >
            {subtitle}
          </p>
        </div>

        <FiArrowUpRight
          className="ml-auto"
          size={13}
          color={COLORS.accent}
        />
      </div>
    </motion.div>
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
        borderColor: 'rgba(86,184,212,0.18)',
        transform:
          `translate(-50%, -50%) rotateX(${tilt}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <span
        className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: COLORS.cyan,
          boxShadow: `0 0 14px ${COLORS.cyan}`,
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
    useTransform(mouseY, [-1, 1], [5, -5]),
    {
      stiffness: 120,
      damping: 25,
    }
  )

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-5, 5]),
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
      ((event.clientX - rect.left) / rect.width) * 2 - 1

    const y =
      ((event.clientY - rect.top) / rect.height) * 2 - 1

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
        h-[420px]
        w-full
        overflow-hidden
        sm:h-[480px]
        [perspective:1400px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Atmospheric glow */}

      <div
        className="
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
            'radial-gradient(circle, rgba(54,184,212,0.18), transparent 68%)',
        }}
      />

      {/* Orbits */}

      <Orbit
        size={380}
        duration={32}
        tilt={66}
      />

      <Orbit
        size={310}
        duration={25}
        reverse
        tilt={70}
      />

      <Orbit
        size={245}
        duration={18}
        tilt={62}
      />

      {/* Main sphere */}

      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          sm:h-[245px]
          sm:w-[245px]
        "
      >
        {/* Outer rings */}

        <div
          className="absolute inset-[-16px] rounded-full border"
          style={{
            borderColor:
              'rgba(54,184,212,0.18)',
          }}
        />

        <div
          className="absolute inset-[-7px] rounded-full border"
          style={{
            borderColor:
              'rgba(22,135,184,0.28)',
          }}
        />

        {/* Core */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    '0 20px 60px rgba(0,0,0,0.18)',
                    '0 25px 90px rgba(54,184,212,0.18)',
                    '0 20px 60px rgba(0,0,0,0.18)',
                  ],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-full
            border
            bg-[#F8FBFD]
          "
          style={{
            borderColor:
              'rgba(54,184,212,0.38)',
            transform: 'translateZ(25px)',
          }}
        >
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,26,46,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,26,46,0.07) 1px, transparent 1px)
              `,
              backgroundSize: '23px 23px',
            }}
          />

          {/* Globe atmosphere */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 32% 25%,
                  rgba(54,184,212,0.28),
                  transparent 28%
                ),
                radial-gradient(
                  circle at 72% 68%,
                  rgba(21,90,145,0.12),
                  transparent 48%
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
              h-[150px]
              w-[225px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor:
                'rgba(54,184,212,0.24)',
              transform:
                'translate(-50%, -50%) rotateX(68deg)',
            }}
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[90px]
              w-[225px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor:
                'rgba(22,135,184,0.18)',
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
              h-[225px]
              w-[90px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor:
                'rgba(54,184,212,0.18)',
            }}
          />

          {/* Center */}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.035, 1],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                flex
                h-[100px]
                w-[100px]
                items-center
                justify-center
                rounded-full
                border
                bg-white/95
                shadow-[0_20px_60px_rgba(6,26,46,0.14)]
                backdrop-blur-xl
              "
              style={{
                borderColor:
                  'rgba(22,135,184,0.30)',
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
                      'rgba(22,135,184,0.09)',
                    color: COLORS.accent,
                  }}
                >
                  <FiCpu size={15} />
                </div>

                <p
                  className={`${mono.className} text-[6px] uppercase tracking-[0.2em]`}
                  style={{
                    color: COLORS.muted,
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
                    color: COLORS.navy,
                  }}
                >
                  CIO TECH
                </p>

                <p
                  className={`${mono.className} mt-1 text-[6px] uppercase tracking-[0.2em]`}
                  style={{
                    color: COLORS.accent,
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
                  background: COLORS.cyan,
                  boxShadow:
                    `0 0 15px ${COLORS.cyan}`,
                }}
              />
            </motion.div>
          </div>

          {/* Particles */}

          {Array.from({ length: 16 }).map(
            (_, index) => {
              const angle =
                (index / 16) *
                Math.PI *
                2

              const radius =
                75 + (index % 3) * 11

              const x =
                Math.cos(angle) * radius

              const y =
                Math.sin(angle) * radius

              return (
                <motion.span
                  key={index}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-1
                    w-1
                    rounded-full
                  "
                  style={{
                    marginLeft: x,
                    marginTop: y,
                    background:
                      index % 3 === 0
                        ? COLORS.accent
                        : COLORS.cyan,
                  }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [
                            0.15,
                            0.9,
                            0.15,
                          ],
                          scale: [
                            0.7,
                            1.2,
                            0.7,
                          ],
                        }
                  }
                  transition={{
                    duration:
                      2.5 + (index % 4),
                    delay:
                      index * 0.12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )
            }
          )}
        </motion.div>
      </motion.div>

      {/* Floating cards */}

      {floatingSystems.map((system) => (
        <SystemCard
          key={system.title}
          {...system}
        />
      ))}

      {/* Connector lines */}

      <div
        className="
          pointer-events-none
          absolute
          left-[17%]
          top-[42%]
          hidden
          h-px
          w-[20%]
          lg:block
        "
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(54,184,212,0.35))',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[17%]
          top-[42%]
          hidden
          h-px
          w-[20%]
          lg:block
        "
        style={{
          background:
            'linear-gradient(90deg, rgba(54,184,212,0.35), transparent)',
        }}
      />

      {/* Bottom label */}

      <div
        className="
          absolute
          bottom-1
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
              'rgba(255,255,255,0.18)',
          }}
        />

        <span
          className={`${mono.className} whitespace-nowrap text-[7px] uppercase tracking-[0.22em]`}
          style={{
            color: 'rgba(255,255,255,0.48)',
          }}
        >
          PEOPLE × IDEAS × TECHNOLOGY
        </span>

        <span
          className="h-px w-8"
          style={{
            background:
              'rgba(255,255,255,0.18)',
          }}
        />
      </div>
    </div>
  )
}

/* =========================================================
   FOCUS AREAS
========================================================= */

function FocusAreas() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden py-24 sm:py-28 lg:py-32`}
      style={{
        background: COLORS.navy,
      }}
    >
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(255,255,255,0.05)',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[-200px]
          h-[550px]
          w-[550px]
          rounded-full
          border
        "
        style={{
          borderColor:
            'rgba(54,184,212,0.06)',
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
        >
          {/* <motion.div variants={reveal}>
            <Eyebrow
              label="Strategic Focus"
              number="02 / 04"
              dark
            />
          </motion.div> */}

          <motion.div
            variants={reveal}
            className="
              mt-8
              grid
              gap-10
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-end
            "
          >
            <div>
              <h2
                className="
                  max-w-xl
                  text-[40px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[52px]
                  lg:text-[64px]
                "
              >
                Conversations
                <br />
                <span
                  style={{
                    color: '#7DD3E7',
                  }}
                >
                  that shape
                </span>{' '}
                what&apos;s next.
              </h2>
            </div>

            <div className="max-w-lg lg:ml-auto">
              <p
                className="text-[15px] leading-7 sm:text-[16px]"
                style={{
                  color:
                    'rgba(255,255,255,0.62)',
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

          {/* Focus grid */}

          <motion.div
            variants={reveal}
            className="
              mt-16
              grid
              gap-px
              overflow-hidden
              rounded-2xl
              border
              sm:grid-cols-2
              lg:grid-cols-5
            "
            style={{
              background:
                'rgba(255,255,255,0.10)',
              borderColor:
                'rgba(255,255,255,0.10)',
            }}
          >
            {focusAreas.map(
              (
                area,
                index
              ) => {
                const Icon =
                  area.icon

                return (
                  <motion.div
                    key={area.code}
                    whileHover={{
                      backgroundColor:
                        'rgba(255,255,255,0.075)',
                    }}
                    className="
                      group
                      relative
                      min-h-[270px]
                      bg-[#09243C]
                      p-6
                      transition-colors
                      duration-300
                      sm:p-7
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          border
                        "
                        style={{
                          borderColor:
                            'rgba(125,211,231,0.18)',
                          color:
                            '#7DD3E7',
                        }}
                      >
                        <Icon
                          size={17}
                        />
                      </div>

                      <span
                        className={`${mono.className} text-[7px] tracking-[0.16em]`}
                        style={{
                          color:
                            'rgba(255,255,255,0.35)',
                        }}
                      >
                        {area.code}
                      </span>
                    </div>

                    <div className="mt-20">
                      <p
                        className="
                          text-[17px]
                          font-semibold
                          leading-tight
                          text-white
                        "
                      >
                        {area.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[17px]
                          font-semibold
                          leading-tight
                        "
                        style={{
                          color:
                            '#7DD3E7',
                        }}
                      >
                        {area.subtitle}
                      </p>

                      <p
                        className="mt-4 text-[11px] leading-5"
                        style={{
                          color:
                            'rgba(255,255,255,0.48)',
                        }}
                      >
                        {area.description}
                      </p>
                    </div>

                    <FiArrowUpRight
                      className="
                        absolute
                        bottom-6
                        right-6
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                      size={16}
                      style={{
                        color:
                          'rgba(125,211,231,0.65)',
                      }}
                    />
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
      className={`${sans.className} relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36`}
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
        >
          {/* <motion.div variants={reveal}>
            <Eyebrow
              label="The CIO Tech Mission"
              number="03 / 04"
            />
          </motion.div> */}

          <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <motion.div variants={reveal}>
              <p
                className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.22em]`}
                style={{
                  color: COLORS.accent,
                }}
              >
                Technology × Leadership
              </p>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-[42px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.05em]
                  sm:text-[56px]
                  lg:text-[72px]
                "
                style={{
                  color: COLORS.navy,
                }}
              >
                Turn insight
                <br />
                into{' '}
                <span
                  style={{
                    color: COLORS.accent,
                  }}
                >
                  business
                </span>{' '}
                advantage.
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-[16px]
                  leading-7
                "
                style={{
                  color: COLORS.muted,
                }}
              >
                CIO Tech Delhi brings together
                technology leaders, innovators and
                decision-makers to explore the ideas,
                technologies and strategies shaping
                the intelligent enterprise.
              </p>
            </motion.div>

            {/* Leadership card */}

            <motion.div
              variants={reveal}
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-[#F4F8FA]
                p-7
                sm:p-9
              "
            >
              <div
                className="
                  absolute
                  right-[-70px]
                  top-[-70px]
                  h-[190px]
                  w-[190px]
                  rounded-full
                  border
                "
                style={{
                  borderColor:
                    'rgba(21,90,145,0.08)',
                }}
              />

              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-30px]
                  h-[110px]
                  w-[110px]
                  rounded-full
                  border
                "
                style={{
                  borderColor:
                    'rgba(22,135,184,0.10)',
                }}
              />

              <div className="relative">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                  "
                  style={{
                    background:
                      COLORS.navy,
                    color: '#FFFFFF',
                  }}
                >
                  <FiUsers size={19} />
                </div>

                <h3
                  className="
                    mt-8
                    text-[24px]
                    font-semibold
                    tracking-[-0.03em]
                  "
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  A platform for
                  <br />
                  technology leaders.
                </h3>

                <div className="mt-7 space-y-4">
                  {leadershipPoints.map(
                    (point) => (
                      <div
                        key={point}
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            flex-shrink-0
                            items-center
                            justify-center
                            rounded-full
                          "
                          style={{
                            background:
                              'rgba(22,135,184,0.10)',
                            color:
                              COLORS.accent,
                          }}
                        >
                          <FiCheck
                            size={11}
                          />
                        </span>

                        <span
                          className="text-[12px]"
                          style={{
                            color:
                              COLORS.muted,
                          }}
                        >
                          {point}
                        </span>
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
              mt-20
              grid
              border-y
              sm:grid-cols-3
            "
            style={{
              borderColor:
                COLORS.line,
            }}
          >
            {[
              {
                number: '20+',
                label: 'SPEAKERS',
                caption:
                  'Industry perspectives',
              },
              {
                number: '200+',
                label: 'DELEGATES',
                caption:
                  'Technology leaders',
              },
              {
                number: '40+',
                label: 'BUSINESS MEETINGS',
                caption:
                  'Strategic connections',
              },
            ].map(
              (stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative
                    py-8
                    sm:px-8
                    sm:py-10
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
                      text-[48px]
                      font-semibold
                      leading-none
                      tracking-[-0.06em]
                    "
                    style={{
                      color:
                        COLORS.navy,
                    }}
                  >
                    {stat.number}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span
                      className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.18em]`}
                      style={{
                        color:
                          COLORS.accent,
                      }}
                    >
                      {stat.label}
                    </span>

                    <span
                      className="h-px w-8"
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
   TECHNOLOGY SECTION
========================================================= */

function TechnologySection() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden py-24 sm:py-28 lg:py-32`}
      style={{
        background: COLORS.navy,
      }}
    >
      {/* Fine grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize:
            '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
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
            <Eyebrow
              label="Technology Core"
              number="04 / 04"
              dark
            />
          </motion.div> */}

          <motion.div
            variants={reveal}
            className="
              mt-8
              grid
              gap-8
              lg:grid-cols-[0.65fr_1.35fr]
              lg:items-start
            "
          >
            <div>
              <h2
                className="
                  max-w-lg
                  text-[42px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[52px]
                  lg:text-[62px]
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
                className="mt-7 max-w-md text-[15px] leading-7"
                style={{
                  color:
                    'rgba(255,255,255,0.55)',
                }}
              >
                The technology core represents
                the interconnected ecosystem of
                people, ideas and technologies
                driving the next generation of
                enterprise leadership.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'AI',
                  'CLOUD',
                  'DATA',
                  'SECURITY',
                  'LEADERSHIP',
                ].map((item) => (
                  <span
                    key={item}
                    className={`${mono.className} rounded-full border px-3 py-2 text-[7px] uppercase tracking-[0.14em]`}
                    style={{
                      borderColor:
                        'rgba(255,255,255,0.12)',
                      color:
                        'rgba(255,255,255,0.55)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <TechnologyCore />
            </div>
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
      className={`${sans.className} bg-white py-24 sm:py-28 lg:py-32`}
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-[#F2F7FA]
            px-7
            py-12
            sm:px-12
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Decorative circles */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-100px]
              h-[300px]
              w-[300px]
              rounded-full
              border
            "
            style={{
              borderColor:
                'rgba(21,90,145,0.08)',
            }}
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-120px]
              right-[80px]
              h-[240px]
              w-[240px]
              rounded-full
              border
            "
            style={{
              borderColor:
                'rgba(22,135,184,0.07)',
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p
                className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                style={{
                  color:
                    COLORS.accent,
                }}
              >
                CIO TECH / DELHI
              </p>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-[38px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  sm:text-[52px]
                  lg:text-[62px]
                "
                style={{
                  color:
                    COLORS.navy,
                }}
              >
                Connect with the
                <br />
                people shaping
                <br />
                <span
                  style={{
                    color:
                      COLORS.accent,
                  }}
                >
                  what comes next.
                </span>
              </h2>

              <p
                className="mt-6 max-w-xl text-[14px] leading-6"
                style={{
                  color:
                    COLORS.muted,
                }}
              >
                A focused platform for technology
                leaders to connect, exchange ideas
                and explore the future of enterprise
                technology.
              </p>
            </div>

            <a
              href="#delegateenquiry"
              className="
                group
                inline-flex
                items-center
                gap-4
                self-start
                rounded-full
                px-6
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background:
                  COLORS.navy,
                color: '#FFFFFF',
                boxShadow:
                  '0 16px 40px rgba(6,26,46,0.16)',
              }}
            >
              Attend as Delegate

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  background:
                    'rgba(255,255,255,0.12)',
                }}
              >
                <FiArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer label */}

        <div
          className="
            mt-8
            flex
            flex-col
            justify-between
            gap-3
            border-t
            pt-5
            sm:flex-row
            sm:items-center
          "
          style={{
            borderColor:
              COLORS.line,
          }}
        >
          <span
            className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
            style={{
              color:
                COLORS.muted,
            }}
          >
            CIO TECH / DELHI / 2026
          </span>

          <span
            className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
            style={{
              color:
                COLORS.soft,
            }}
          >
            Intelligent Enterprise Era
          </span>

          <span
            className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
            style={{
              color:
                COLORS.muted,
            }}
          >
            END / ABOUT
          </span>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  return (
    <main
      id="about"
      className={sans.className}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* subtle background */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[-220px]
            h-[550px]
            w-[550px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(21,90,145,0.055)',
          }}
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-140px]
            h-[360px]
            w-[360px]
            rounded-full
            border
          "
          style={{
            borderColor:
              'rgba(22,135,184,0.055)',
          }}
        />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* <motion.div variants={reveal}>
              <Eyebrow />
            </motion.div> */}

            <div
              className="
                mt-10
                grid
                gap-12
                lg:grid-cols-[1fr_0.72fr]
                lg:items-end
              "
            >
              <motion.div variants={reveal}>
                <p
                  className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.22em]`}
                  style={{
                    color:
                      COLORS.accent,
                  }}
                >
                  The Technology Leadership Platform
                </p>

                <h1
                  className="
                    mt-5
                    max-w-5xl
                    text-[48px]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.055em]
                    sm:text-[64px]
                    lg:text-[86px]
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
                        COLORS.accent,
                    }}
                  >
                    leadership.
                  </span>
                </h1>
              </motion.div>

              <motion.div
                variants={reveal}
                className="lg:pb-2"
              >
                <p
                  className="
                    max-w-lg
                    text-[15px]
                    leading-7
                    sm:text-[16px]
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

                {/* <div className="mt-7 flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                    "
                    style={{
                      background:
                        COLORS.navy,
                      color: '#FFFFFF',
                    }}
                  >
                    <FiArrowUpRight
                      size={15}
                    />
                  </span>

                  <span
                    className={`${mono.className} text-[8px] uppercase tracking-[0.18em]`}
                    style={{
                      color:
                        COLORS.navy,
                    }}
                  >
                    Explore the ecosystem
                  </span>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero divider */}

        <div
          className="mx-auto max-w-[1380px] border-t"
          style={{
            borderColor:
              COLORS.line,
          }}
        />

        {/* <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              {
                number: '20+',
                label: 'Industry Speakers',
              },
              {
                number: '200+',
                label: 'Technology Leaders',
              },
              {
                number: '40+',
                label: 'Business Meetings',
              },
              {
                number: '01',
                label: 'Leadership Platform',
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`
                  py-6
                  sm:py-8
                  sm:px-5
                  lg:px-7
                  ${
                    index !== 0
                      ? 'border-l'
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
                    text-[25px]
                    font-semibold
                    tracking-[-0.04em]
                    sm:text-[32px]
                  "
                  style={{
                    color:
                      COLORS.navy,
                  }}
                >
                  {item.number}
                </p>

                <p
                  className={`${mono.className} mt-2 text-[7px] uppercase tracking-[0.16em] sm:text-[8px]`}
                  style={{
                    color:
                      COLORS.soft,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* =====================================================
          TECHNOLOGY CORE
      ===================================================== */}

      <TechnologySection />

      {/* =====================================================
          FOCUS AREAS
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