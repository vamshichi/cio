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
   DESIGN SYSTEM
========================================================= */

const COLORS = {
  ink: '#071A2B',
  navy: '#0A3157',
  teal: '#00A7A7',
  cyan: '#18CFE0',
  blue: '#2388C8',
  muted: '#61778A',
  soft: '#8CA0AF',
  line: '#DCE9EF',
  paper: '#FFFFFF',
  background: '#F8FCFD',
}

/* =========================================================
   DATA
========================================================= */

const focusAreas = [
  {
    title: 'AI-Led Enterprise',
    subtitle: 'Transformation',
    code: 'AI-01',
    icon: FiCpu,
  },
  {
    title: 'Cloud, Data',
    subtitle: '& FinOps',
    code: 'CL-02',
    icon: FiCloud,
  },
  {
    title: 'Cybersecurity',
    subtitle: '& Resilience',
    code: 'CY-03',
    icon: FiShield,
  },
  {
    title: 'Customer Experience',
    subtitle: '& Innovation',
    code: 'CX-04',
    icon: FiZap,
  },
  {
    title: 'CIO Leadership',
    subtitle: '& Alignment',
    code: 'LD-05',
    icon: FiTarget,
  },
]

const floatingSystems = [
  {
    title: 'AI & Intelligence',
    subtitle: 'Transforming possibilities',
    icon: FiCpu,
    position: 'left-[7%] top-[18%]',
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Building digital trust',
    icon: FiShield,
    position: 'right-[2%] top-[20%]',
  },
  {
    title: 'Cloud & Data',
    subtitle: 'Scalable for tomorrow',
    icon: FiCloud,
    position: 'left-[6%] bottom-[13%]',
  },
  {
    title: 'Digital Transformation',
    subtitle: "Driving what's next",
    icon: FiTrendingUp,
    position: 'right-[1%] bottom-[13%]',
  },
  {
    title: 'Leadership',
    subtitle: 'Network. Collaborate. Grow.',
    icon: FiUsers,
    position:
      'left-1/2 bottom-[1%] -translate-x-1/2',
  },
]

const stats = [
  {
    number: '250+',
    title: 'TECH LEADERS',
    caption: 'NETWORK SCALE',
  },
  {
    number: '40+',
    title: 'INDUSTRY SPEAKERS',
    caption: 'DIVERSE PERSPECTIVES',
  },
  {
    number: '30+',
    title: 'INNOVATIVE SESSIONS',
    caption: 'ACTIONABLE INSIGHTS',
  },
  {
    number: '01',
    title: 'POWERFUL PLATFORM',
    caption: 'A STRONGER INDIA',
  },
]

/* =========================================================
   ANIMATION
========================================================= */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
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
   LABEL
========================================================= */

function Eyebrow() {
  return (
    <div className="flex items-center gap-4">
      <span
        className="h-2 w-2 rounded-full"
        style={{
          background: COLORS.teal,
          boxShadow: `0 0 18px ${COLORS.teal}`,
        }}
      />

      <span
        className={`${mono.className} text-[9px] font-medium uppercase tracking-[0.25em]`}
        style={{
          color: COLORS.navy,
        }}
      >
        About CIO Tech
      </span>

      <span
        className="h-px w-10"
        style={{
          background: `${COLORS.navy}35`,
        }}
      />

      <span
        className={`${mono.className} text-[9px] uppercase tracking-[0.2em]`}
        style={{
          color: COLORS.teal,
        }}
      >
        01 / 04
      </span>
    </div>
  )
}

/* =========================================================
   SYSTEM CARD
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
      className={`absolute z-30 ${position}`}
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.04,
        y: -5,
      }}
    >
      <div
        className="
          flex
          min-w-[170px]
          items-center
          gap-3
          rounded-xl
          border
          bg-white/85
          px-3
          py-3
          shadow-[0_20px_60px_rgba(5,54,82,0.10)]
          backdrop-blur-xl
        "
        style={{
          borderColor: `${COLORS.teal}25`,
        }}
      >
        <div
          className="
            flex
            h-10
            w-10
            flex-shrink-0
            items-center
            justify-center
            rounded-xl
          "
          style={{
            background: `${COLORS.teal}0D`,
            color: COLORS.teal,
          }}
        >
          <Icon size={17} />
        </div>

        <div className="min-w-0">
          <p
            className="text-[11px] font-semibold"
            style={{
              color: COLORS.ink,
            }}
          >
            {title}
          </p>

          <p
            className={`${mono.className} mt-1 whitespace-nowrap text-[6px] uppercase tracking-[0.12em]`}
            style={{
              color: COLORS.muted,
            }}
          >
            {subtitle}
          </p>
        </div>

        <FiArrowUpRight
          size={14}
          className="ml-auto flex-shrink-0"
          color={COLORS.teal}
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
        borderColor: `${COLORS.teal}18`,
        transform:
          `translate(-50%, -50%) rotateX(${tilt}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <span
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: COLORS.teal,
          boxShadow: `0 0 18px ${COLORS.teal}`,
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
    useTransform(mouseY, [-1, 1], [8, -8]),
    {
      stiffness: 120,
      damping: 25,
    }
  )

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-8, 8]),
    {
      stiffness: 120,
      damping: 25,
    }
  )

  /*
   * Mouse interaction
   */

  if (typeof window !== 'undefined') {
    // intentionally empty;
    // interaction is handled by the container below
  }

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (reduceMotion) return

    const rect =
      event.currentTarget.getBoundingClientRect()

    const x =
      ((event.clientX - rect.left) / rect.width) *
        2 -
      1

    const y =
      ((event.clientY - rect.top) / rect.height) *
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
        h-[500px]
        w-full
        [perspective:1400px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================================
          ATMOSPHERIC GLOW
      ===================================================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.35, 0.18],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[330px]
          w-[330px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[100px]
        "
        style={{
          background: `${COLORS.cyan}20`,
        }}
      />

      {/* =====================================================
          OUTER ORBITS
      ===================================================== */}

      <Orbit
        size={420}
        duration={32}
        tilt={67}
      />

      <Orbit
        size={350}
        duration={24}
        reverse
        tilt={70}
      />

      <Orbit
        size={285}
        duration={19}
        tilt={62}
      />

      {/* =====================================================
          CENTER GRID
      ===================================================== */}

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
          h-[245px]
          w-[245px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {/* outer sphere */}

        <div
          className="
            absolute
            inset-[-18px]
            rounded-full
            border
          "
          style={{
            borderColor: `${COLORS.teal}22`,
            transform: 'translateZ(-40px)',
          }}
        />

        {/* second sphere */}

        <div
          className="
            absolute
            inset-[-8px]
            rounded-full
            border
          "
          style={{
            borderColor: `${COLORS.cyan}35`,
            transform: 'translateZ(-20px)',
          }}
        />

        {/* =================================================
            MAIN CORE
        ================================================= */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    `0 20px 80px ${COLORS.teal}10`,
                    `0 25px 100px ${COLORS.cyan}28`,
                    `0 20px 80px ${COLORS.teal}10`,
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
            bg-white
          "
          style={{
            borderColor: `${COLORS.teal}35`,
            transform: 'translateZ(30px)',
          }}
        >
          {/* technical grid */}

          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(${COLORS.navy}0C 1px, transparent 1px),
                linear-gradient(90deg, ${COLORS.navy}0C 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />

          {/* radial globe atmosphere */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 35% 28%,
                  ${COLORS.cyan}35,
                  transparent 28%
                ),
                radial-gradient(
                  circle at 70% 65%,
                  ${COLORS.teal}16,
                  transparent 45%
                ),
                radial-gradient(
                  circle at center,
                  ${COLORS.blue}08,
                  transparent 65%
                )
              `,
            }}
          />

          {/* globe latitude lines */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[160px]
              w-[230px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor: `${COLORS.cyan}28`,
              transform:
                'translate(-50%, -50%) rotateX(68deg)',
            }}
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[100px]
              w-[230px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor: `${COLORS.teal}22`,
              transform:
                'translate(-50%, -50%) rotateX(68deg)',
            }}
          />

          {/* longitude */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[230px]
              w-[100px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
            "
            style={{
              borderColor: `${COLORS.cyan}20`,
            }}
          />

          {/* =================================================
              CENTER
          ================================================= */}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
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
                h-[108px]
                w-[108px]
                items-center
                justify-center
                rounded-full
                border
                bg-white/90
                shadow-[0_20px_70px_rgba(0,167,167,0.16)]
                backdrop-blur-xl
              "
              style={{
                borderColor: `${COLORS.teal}45`,
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
                    background: `${COLORS.teal}12`,
                    color: COLORS.teal,
                  }}
                >
                  <FiCpu size={16} />
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
                  className="mt-1 text-[13px] font-bold tracking-tight"
                  style={{
                    color: COLORS.ink,
                  }}
                >
                  CIO TECH
                </p>

                <p
                  className={`${mono.className} mt-1 text-[6px] uppercase tracking-[0.2em]`}
                  style={{
                    color: COLORS.teal,
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
                  background: COLORS.teal,
                  boxShadow: `0 0 18px ${COLORS.teal}`,
                }}
              />
            </motion.div>
          </div>

          {/* particles */}

          {Array.from({ length: 18 }).map(
            (_, index) => {
              const angle =
                (index / 18) * Math.PI * 2

              const radius =
                80 + (index % 3) * 12

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
                      index % 4 === 0
                        ? COLORS.teal
                        : COLORS.cyan,
                    boxShadow:
                      `0 0 10px ${COLORS.cyan}`,
                  }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.2, 1, 0.2],
                          scale: [0.7, 1.3, 0.7],
                        }
                  }
                  transition={{
                    duration:
                      2.5 + (index % 4),
                    delay: index * 0.12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )
            }
          )}
        </motion.div>
      </motion.div>

      {/* =====================================================
          FLOATING TECHNOLOGY CARDS
      ===================================================== */}

      {floatingSystems.map((system) => (
        <SystemCard
          key={system.title}
          {...system}
        />
      ))}

      {/* =====================================================
          SIDE CONNECTOR LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[38%]
          h-px
          w-[18%]
        "
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.teal}35)`,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[38%]
          h-px
          w-[18%]
        "
        style={{
          background: `linear-gradient(90deg, ${COLORS.teal}35, transparent)`,
        }}
      />

      {/* =====================================================
          SYSTEM LABEL
      ===================================================== */}

      <div
        className="
          absolute
          bottom-[-12px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >
        <span
          className="h-px w-10"
          style={{
            background: `${COLORS.navy}20`,
          }}
        />

        <span
          className={`${mono.className} whitespace-nowrap text-[7px] uppercase tracking-[0.22em]`}
          style={{
            color: COLORS.muted,
          }}
        >
          PEOPLE × IDEAS × TECHNOLOGY
        </span>

        <span
          className="h-px w-10"
          style={{
            background: `${COLORS.navy}20`,
          }}
        />
      </div>
    </div>
  )
}

/* =========================================================
   STATISTICS
========================================================= */

function Statistics() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={stagger}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="
        grid
        border-y
        sm:grid-cols-2
        lg:grid-cols-4
      "
      style={{
        borderColor: COLORS.line,
      }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          variants={reveal}
          whileHover={{
            y: -3,
          }}
          className={`
            relative
            px-5
            py-7
            sm:px-7
            lg:px-6
            ${
              index !== 0
                ? 'border-t sm:border-l sm:border-t-0'
                : ''
            }
            ${
              index === 2
                ? 'lg:border-t-0'
                : ''
            }
          `}
          style={{
            borderColor: COLORS.line,
          }}
        >
          <p
            className="
              text-[38px]
              font-semibold
              leading-none
              tracking-[-0.055em]
            "
            style={{
              color: COLORS.ink,
            }}
          >
            {stat.number}
          </p>

          <p
            className={`${mono.className} mt-3 text-[8px] font-semibold uppercase tracking-[0.18em]`}
            style={{
              color: COLORS.navy,
            }}
          >
            {stat.title}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span
              className="h-px w-7"
              style={{
                background: COLORS.teal,
              }}
            />

            <span
              className={`${mono.className} text-[6px] uppercase tracking-[0.15em]`}
              style={{
                color: COLORS.soft,
              }}
            >
              {stat.caption}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

/* =========================================================
   FOCUS AREAS
========================================================= */

function FocusAreas() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={stagger}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: COLORS.teal,
              boxShadow: `0 0 12px ${COLORS.teal}`,
            }}
          />

          <span
            className={`${mono.className} text-[9px] font-medium uppercase tracking-[0.24em]`}
            style={{
              color: COLORS.navy,
            }}
          >
            Focus Areas
          </span>
        </div>

        <span
          className={`${mono.className} hidden text-[8px] uppercase tracking-[0.18em] sm:block`}
          style={{
            color: COLORS.soft,
          }}
        >
          05 SYSTEMS / ENTERPRISE
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {focusAreas.map((item) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.code}
              variants={reveal}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="
                group
                relative
                min-h-[205px]
                overflow-hidden
                rounded-xl
                border
                bg-white/80
                p-5
                shadow-[0_12px_40px_rgba(7,46,68,0.045)]
                backdrop-blur-sm
              "
              style={{
                borderColor: COLORS.line,
              }}
            >
              {/* hover glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  blur-2xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background: `${COLORS.cyan}22`,
                }}
              />

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                "
                style={{
                  background: `${COLORS.teal}0B`,
                  color: COLORS.teal,
                }}
              >
                <Icon size={19} />
              </div>

              <div className="mt-8">
                <p
                  className="text-[13px] font-semibold leading-[1.25]"
                  style={{
                    color: COLORS.ink,
                  }}
                >
                  {item.title}
                </p>

                <p
                  className="text-[13px] font-semibold leading-[1.25]"
                  style={{
                    color: COLORS.teal,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span
                  className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
                  style={{
                    color: COLORS.soft,
                  }}
                >
                  {item.code}
                </span>

                <FiArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                  color={COLORS.navy}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

/* =========================================================
   INDIA ECOSYSTEM
========================================================= */

function IndiaEcosystem() {
  const points = [
    {
      label: 'AI',
      x: '20%',
      y: '25%',
    },
    {
      label: 'CLOUD',
      x: '72%',
      y: '22%',
    },
    {
      label: 'DATA',
      x: '77%',
      y: '70%',
    },
    {
      label: 'CYBER',
      x: '19%',
      y: '73%',
    },
  ]

  return (
    <div
      className="
        relative
        mt-16
        min-h-[380px]
        overflow-hidden
        rounded-2xl
        border
        bg-white
      "
      style={{
        borderColor: COLORS.line,
      }}
    >
      {/* grid */}

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(${COLORS.navy}08 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.navy}08 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[80px]
        "
        style={{
          background: `${COLORS.cyan}10`,
        }}
      />

      {/* header */}

      <div className="absolute left-6 top-6 z-10">
        <p
          className={`${mono.className} text-[8px] uppercase tracking-[0.22em]`}
          style={{
            color: COLORS.teal,
          }}
        >
          India / Technology Ecosystem
        </p>

        <p
          className="mt-2 text-xl font-semibold tracking-tight"
          style={{
            color: COLORS.ink,
          }}
        >
          Delhi
        </p>
      </div>

      {/* coordinates */}

      <div className="absolute right-6 top-6 text-right">
        <p
          className={`${mono.className} text-[7px] uppercase tracking-[0.15em]`}
          style={{
            color: COLORS.soft,
          }}
        >
          28.6139° N
        </p>

        <p
          className={`${mono.className} mt-1 text-[7px] uppercase tracking-[0.15em]`}
          style={{
            color: COLORS.soft,
          }}
        >
          77.2090° E
        </p>
      </div>

      {/* center network */}

      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2">
        {[220, 170, 120].map(
          (size, index) => (
            <motion.div
              key={size}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [
                  0.35,
                  0.6,
                  0.35,
                ],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: size,
                height: size,
                borderColor:
                  index === 1
                    ? `${COLORS.teal}28`
                    : `${COLORS.navy}12`,
              }}
            />
          )
        )}

        {/* center */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[86px]
            w-[86px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            bg-white/90
            shadow-[0_15px_50px_rgba(0,167,167,0.12)]
            backdrop-blur
          "
          style={{
            borderColor: `${COLORS.teal}35`,
          }}
        >
          <div className="text-center">
            <span
              className="
                mx-auto
                mb-2
                block
                h-2
                w-2
                rounded-full
              "
              style={{
                background: COLORS.teal,
                boxShadow: `0 0 14px ${COLORS.teal}`,
              }}
            />

            <p
              className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
              style={{
                color: COLORS.teal,
              }}
            >
              NEW DELHI
            </p>

            <p
              className={`${mono.className} mt-1 text-[6px] uppercase tracking-[0.16em]`}
              style={{
                color: COLORS.soft,
              }}
            >
              GLOBAL TECH HUB
            </p>
          </div>
        </motion.div>

        {/* connection lines */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 220 220"
        >
          <line
            x1="110"
            y1="110"
            x2="35"
            y2="50"
            stroke={COLORS.teal}
            strokeOpacity="0.18"
          />

          <line
            x1="110"
            y1="110"
            x2="185"
            y2="45"
            stroke={COLORS.navy}
            strokeOpacity="0.16"
          />

          <line
            x1="110"
            y1="110"
            x2="180"
            y2="175"
            stroke={COLORS.teal}
            strokeOpacity="0.18"
          />

          <line
            x1="110"
            y1="110"
            x2="40"
            y2="175"
            stroke={COLORS.navy}
            strokeOpacity="0.16"
          />
        </svg>
      </div>

      {/* network points */}

      {points.map((point, index) => (
        <motion.div
          key={point.label}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            left: point.x,
            top: point.y,
          }}
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              bg-white/90
              px-3
              py-2
              shadow-[0_12px_30px_rgba(7,46,68,0.06)]
              backdrop-blur
            "
            style={{
              borderColor: COLORS.line,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: COLORS.teal,
                boxShadow: `0 0 10px ${COLORS.teal}`,
              }}
            />

            <span
              className={`${mono.className} text-[7px] font-medium tracking-[0.15em]`}
              style={{
                color: COLORS.navy,
              }}
            >
              {point.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* =========================================================
   MISSION
========================================================= */

function Mission() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={stagger}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        relative
        mt-16
        overflow-hidden
        rounded-2xl
        border
        bg-white
        shadow-[0_25px_80px_rgba(7,46,68,0.06)]
      "
      style={{
        borderColor: COLORS.line,
      }}
    >
      {/* decorative rings */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[430px]
          w-[430px]
          rounded-full
          border
        "
        style={{
          borderColor: `${COLORS.teal}10`,
          transform:
            'perspective(800px) rotateX(65deg)',
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-[300px]
          w-[300px]
          rounded-full
          border
        "
        style={{
          borderColor: `${COLORS.navy}08`,
          transform:
            'perspective(800px) rotateX(65deg)',
        }}
      />

      <div className="relative z-10 p-7 sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.div variants={reveal}>
              <span
                className={`${mono.className} inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[7px] uppercase tracking-[0.2em]`}
                style={{
                  color: COLORS.teal,
                  borderColor: `${COLORS.teal}25`,
                  background: `${COLORS.teal}06`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: COLORS.teal,
                  }}
                />

                The CIO Tech Mission
              </span>
            </motion.div>

            <motion.h3
              variants={reveal}
              className="
                mt-6
                max-w-3xl
                text-3xl
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-5xl
              "
              style={{
                color: COLORS.ink,
              }}
            >
              Turn insight into
              <br />

              <span
                style={{
                  color: COLORS.teal,
                }}
              >
                business advantage.
              </span>
            </motion.h3>

            <motion.p
              variants={reveal}
              className="
                mt-6
                max-w-2xl
                text-sm
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
            </motion.p>
          </div>

          <motion.div
            variants={reveal}
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              lg:h-28
              lg:w-28
            "
            style={{
              borderColor: COLORS.teal,
            }}
          >
            <div className="text-center">
              <FiGlobe
                className="mx-auto mb-2"
                size={18}
                color={COLORS.teal}
              />

              <p
                className={`${mono.className} text-[7px] uppercase tracking-[0.18em]`}
                style={{
                  color: COLORS.navy,
                }}
              >
                DELHI
              </p>

              <p
                className={`${mono.className} mt-1 text-[7px] uppercase tracking-[0.18em]`}
                style={{
                  color: COLORS.soft,
                }}
              >
                2026
              </p>
            </div>
          </motion.div>
        </div>

        {/* mission metrics */}

        <div
          className="
            mt-12
            grid
            border-y
            sm:grid-cols-3
          "
          style={{
            borderColor: COLORS.line,
          }}
        >
          {[
            ['20+', 'SPEAKERS'],
            ['250+', 'DELEGATES'],
            ['100+', 'BUSINESS MEETINGS'],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`
                px-5
                py-7
                sm:px-7
                ${
                  index !== 0
                    ? 'border-t sm:border-l sm:border-t-0'
                    : ''
                }
              `}
              style={{
                borderColor: COLORS.line,
              }}
            >
              <p
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                "
                style={{
                  color: COLORS.navy,
                }}
              >
                {number}
              </p>

              <p
                className={`${mono.className} mt-2 text-[7px] font-semibold uppercase tracking-[0.2em]`}
                style={{
                  color: COLORS.teal,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* bottom statement */}

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
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
                background: `${COLORS.teal}0D`,
                color: COLORS.teal,
              }}
            >
              <FiCheck size={13} />
            </span>

            <span
              className="text-[12px]"
              style={{
                color: COLORS.muted,
              }}
            >
              Designed for senior technology
              decision-makers.
            </span>
          </div>

          <span
            className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
            style={{
              color: COLORS.soft,
            }}
          >
            INTELLIGENT ENTERPRISE ERA
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* =========================================================
   MAIN ABOUT
========================================================= */

export function About() {
  return (
    <section
      id="about"
      className={`${sans.className} relative overflow-hidden bg-[#F8FCFD] py-24 sm:py-28 lg:py-36`}
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(${COLORS.navy} 1px, transparent 1px),
              linear-gradient(90deg, ${COLORS.navy} 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 70%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 70%)',
          }}
        />

        {/* top cyan atmosphere */}

        <div
          className="
            absolute
            -right-[250px]
            -top-[180px]
            h-[700px]
            w-[700px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: `${COLORS.cyan}0B`,
          }}
        />

        {/* left atmosphere */}

        <div
          className="
            absolute
            -left-[250px]
            top-[30%]
            h-[600px]
            w-[600px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: `${COLORS.teal}07`,
          }}
        />

        {/* technical diagonal */}

        <div
          className="
            absolute
            right-0
            top-[18%]
            h-px
            w-[35%]
          "
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.teal}18)`,
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.div variants={reveal}>
            <Eyebrow />
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-8"
          >
            <span
              className={`${mono.className} text-[8px] uppercase tracking-[0.28em]`}
              style={{
                color: COLORS.muted,
              }}
            >
              The Technology Leadership Platform
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="
              relative
              mt-6
              max-w-[800px]
              text-[46px]
              font-semibold
              leading-[0.96]
              tracking-[-0.06em]
              sm:text-[64px]
              md:text-[74px]
              lg:text-[84px]
            "
            style={{
              color: COLORS.ink,
            }}
          >
            Where technology
            <br />

            <span
              style={{
                color: COLORS.teal,
              }}
            >
              meets leadership.
            </span>
          </motion.h2>

          <motion.div
            variants={reveal}
            className="
              mt-8
              flex
              max-w-[700px]
              gap-5
            "
          >
            <div
              className="
                mt-2
                h-px
                w-14
                flex-shrink-0
              "
              style={{
                background: COLORS.teal,
              }}
            />

            <p
              className="
                max-w-[620px]
                text-[14px]
                leading-7
                sm:text-[15px]
                sm:leading-8
              "
              style={{
                color: COLORS.muted,
              }}
            >
              CIO Tech Delhi is a curated platform
              where senior technology and business
              leaders come together to exchange
              perspectives, challenge ideas and shape
              what comes next in enterprise technology.
            </p>
          </motion.div>
        </motion.div>

        {/* ===================================================
            TECHNOLOGY CORE
        =================================================== */}

        <div className="relative mt-12 sm:mt-16 lg:mt-10">
          <TechnologyCore />
        </div>

        {/* ===================================================
            STATS
        =================================================== */}

        <div className="mt-8 lg:mt-2">
          <Statistics />
        </div>

        {/* ===================================================
            FOCUS AREAS
        =================================================== */}

        <div className="mt-20 lg:mt-28">
          <FocusAreas />
        </div>

        {/* ===================================================
            INDIA ECOSYSTEM
        =================================================== */}

        <IndiaEcosystem />

        {/* ===================================================
            MISSION
        =================================================== */}

        <Mission />

        {/* ===================================================
            FOOTER SYSTEM LINE
        =================================================== */}

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8"
              style={{
                background: COLORS.navy,
              }}
            />

            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
              style={{
                color: COLORS.soft,
              }}
            >
              CIO TECH / DELHI / 2026
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: COLORS.teal,
                boxShadow: `0 0 12px ${COLORS.teal}`,
              }}
            />

            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
              style={{
                color: COLORS.soft,
              }}
            >
              Intelligent Enterprise Era
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
              style={{
                color: COLORS.soft,
              }}
            >
              END / ABOUT
            </span>

            <span
              className="h-px w-8"
              style={{
                background: COLORS.navy,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}