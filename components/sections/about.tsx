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

import {
  FiArrowUpRight,
  FiCheck,
  FiCloud,
  FiCpu,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
  FiBriefcase,
  FiLayers,
  FiTrendingUp,
} from 'react-icons/fi'

import Image from 'next/image'

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

const industries = [
  'Banking & Financial Services',
  'Insurance',
  'FinTech',
  'Manufacturing',
  'Automotive',
  'Healthcare',
  'IT & Technology',
  'Telecom',
  'Retail & E-commerce',
  'Energy & Utilities',
  'Infrastructure',
  'Logistics & Transportation',
  'Government & Public Sector',
  'Media & Entertainment',
  'Real Estate',
  'Education',
  'Travel & Hospitality',
  'Consumer & FMCG',
]

const aboutBenefits = [
  {
    number: '01',
    title: 'Gain Insights',
    text: 'Hear real-world perspectives on emerging technologies, enterprise transformation and the decisions shaping tomorrow.',
    icon: FiTrendingUp,
  },
  {
    number: '02',
    title: 'Build Connections',
    text: 'Meet senior technology leaders, peers and solution partners in a focused executive environment.',
    icon: FiUsers,
  },
  {
    number: '03',
    title: 'Discover Solutions',
    text: 'Explore practical ideas, platforms and technologies designed around real business challenges.',
    icon: FiLayers,
  },
  {
    number: '04',
    title: 'Create Opportunity',
    text: 'Turn meaningful conversations into partnerships, collaborations and strategic relationships.',
    icon: FiBriefcase,
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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

      {!reduceMotion && (
        <div aria-hidden="true">
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
        </div>
      )}

      {/* =====================================================
          CORE
      ===================================================== */}

      <motion.div
        aria-hidden="true"
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
          aria-hidden="true"
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
          aria-hidden="true"
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
        background: COLORS.midnight,
      }}
    >
      {/* Technical grid */}
      <div
        aria-hidden="true"
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
          backgroundSize: "90px 90px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[130px]
        "
        style={{
          background: "rgba(85,199,220,0.055)",
        }}
      />

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[250px]
          left-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[150px]
        "
        style={{
          background: "rgba(42,120,160,0.035)",
        }}
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
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
          <div
            className="
              mt-2
              grid
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* =========================================
                LEFT — CONTENT
            ========================================= */}
            <motion.div
              variants={reveal}
              className="relative z-10"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-7"
                  style={{
                    background: COLORS.cyan,
                  }}
                />

                <p
                  className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em]`}
                  style={{
                    color: COLORS.cyan,
                  }}
                >
                  The intelligent enterprise
                </p>
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-5
                  max-w-xl
                  text-[44px]
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.065em]
                  text-white
                  sm:text-[54px]
                  lg:text-[68px]
                  xl:text-[74px]
                "
              >
                Where ideas
                <br />
                become{" "}
                <span
                  style={{
                    color: "#7DD3E7",
                  }}
                >
                  action.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[14px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                "
                style={{
                  color: "rgba(255,255,255,0.54)",
                }}
              >
                The technology core represents the
                interconnected ecosystem of people,
                ideas and technologies driving the next
                generation of enterprise leadership.
              </p>

              {/* Topics */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "AI",
                  "CLOUD",
                  "DATA",
                  "SECURITY",
                  "LEADERSHIP",
                ].map((item) => (
                  <span
                    key={item}
                    className={`${mono.className}
                      border
                      px-3
                      py-2
                      text-[7px]
                      uppercase
                      tracking-[0.14em]
                      transition-colors
                      duration-300
                    `}
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.12)",
                      color:
                        "rgba(255,255,255,0.48)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bottom statement */}
              <div className="mt-10 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10"
                  style={{
                    background:
                      "rgba(255,255,255,0.25)",
                  }}
                />

                <p
                  className={`${mono.className} text-[8px] uppercase tracking-[0.22em]`}
                  style={{
                    color:
                      "rgba(255,255,255,0.38)",
                  }}
                >
                  People × Ideas × Technology
                </p>
              </div>
            </motion.div>

            {/* =========================================
                RIGHT — HUMAN IMAGE
            ========================================= */}
            <motion.div
              variants={reveal}
              className="
                relative
                min-h-[380px]
                sm:min-h-[460px]
                lg:min-h-[540px]
              "
            >
              {/* Main image frame */}
              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[26px]
                  border
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.10)",
                  background: "#081925",
                  boxShadow:
                    "0 30px 100px rgba(0,0,0,0.30)",
                }}
              >
                {/* Image */}
                <Image
                  src="/images/technology-leadership.png"
                  alt="Technology leaders discussing enterprise innovation"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    hover:scale-[1.025]
                    motion-reduce:transition-none
                    motion-reduce:hover:scale-100
                  "
                />

                {/* Dark cinematic overlay */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                  "
                  style={{
                    background: `
                      linear-gradient(
                        90deg,
                        rgba(6,21,34,0.40) 0%,
                        rgba(6,21,34,0.08) 45%,
                        rgba(6,21,34,0.18) 100%
                      ),
                      linear-gradient(
                        180deg,
                        rgba(6,21,34,0.05) 40%,
                        rgba(6,21,34,0.58) 100%
                      )
                    `,
                  }}
                />

                {/* Subtle cyan light */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    top-1/3
                    h-56
                    w-56
                    rounded-full
                    blur-[100px]
                  "
                  style={{
                    background:
                      "rgba(85,199,220,0.10)",
                  }}
                />

                {/* Image label */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    sm:left-7
                    sm:top-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-6"
                      style={{
                        background:
                          "rgba(125,211,231,0.75)",
                      }}
                    />

                    <span
                      className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
                      style={{
                        color:
                          "rgba(255,255,255,0.65)",
                      }}
                    >
                      Enterprise leadership
                    </span>
                  </div>
                </div>

                {/* Bottom image caption */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-end
                    justify-between
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <div>
                    <p
                      className={`${mono.className} text-[7px] uppercase tracking-[0.2em]`}
                      style={{
                        color:
                          "rgba(255,255,255,0.45)",
                      }}
                    >
                      PEOPLE
                    </p>

                    <p
                      className="
                        mt-1
                        text-[18px]
                        font-medium
                        tracking-[-0.02em]
                        text-white
                        sm:text-[21px]
                      "
                    >
                      Ideas in motion.
                    </p>
                  </div>

                  {/* Small index */}
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.20)",
                      background:
                        "rgba(6,21,34,0.35)",
                      backdropFilter:
                        "blur(10px)",
                    }}
                  >
                    <span
                      className={`${mono.className} text-[7px]`}
                      style={{
                        color:
                          "rgba(255,255,255,0.65)",
                      }}
                    >
                      01
                    </span>
                  </div>
                </div>
              </div>

              {/* Small editorial image detail */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  -left-5
                  hidden
                  h-24
                  w-32
                  rounded-xl
                  border
                  lg:block
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.10)",
                  background:
                    "rgba(8,25,37,0.75)",
                  backdropFilter:
                    "blur(14px)",
                }}
              >
                <div className="flex h-full flex-col justify-between p-4">
                  <span
                    className={`${mono.className} text-[6px] uppercase tracking-[0.18em]`}
                    style={{
                      color:
                        "rgba(255,255,255,0.35)",
                    }}
                  >
                    2026
                  </span>

                  <span
                    className={`${mono.className} text-[6px] uppercase tracking-[0.15em]`}
                    style={{
                      color: COLORS.cyan,
                    }}
                  >
                    Future / Now
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
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
        aria-hidden="true"
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
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
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
                        aria-hidden="true"
                        style={{
                          color:
                            COLORS.blue,
                        }}
                      />
                    </div>

                    {/* Accent line */}

                    <div
                      aria-hidden="true"
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
                        aria-hidden="true"
                        className="
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          motion-reduce:transition-none
                          motion-reduce:group-hover:translate-y-0
                          motion-reduce:group-hover:translate-x-0
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
        aria-hidden="true"
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
        aria-hidden="true"
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
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
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
                          aria-hidden="true"
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
                    ${index !== 0
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
                      aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
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
              aria-label="Attend as Delegate — go to registration"
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
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#55C7DC]
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
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
                aria-hidden="true"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                  motion-reduce:transition-none
                  motion-reduce:group-hover:rotate-0
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
   ABOUT PAGE — PREMIUM EVENT EXPERIENCE
========================================================= */

function EventVisual() {
  return (
    <div className="group relative w-full">
      {/* Outer editorial frame */}
      <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full border border-[#176B9C]/15" />

      {/* Main image container */}
      <div className="relative overflow-hidden rounded-[28px] border border-[#D9E3E8] bg-[#F4F8FA] p-2 shadow-[0_30px_80px_rgba(8,36,59,0.14)]">
        <div className="relative aspect-square overflow-hidden rounded-[21px]">
          <Image
            src="/images/about-event-collage.png"
            alt="CIO Tech Leadership Conference and Awards event highlights"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          {/* Soft premium overlay */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08243B]/20 via-transparent to-white/5" />

          {/* Subtle glass highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/15 to-transparent" />
        </div>
      </div>

      {/* Top-left editorial marker */}
      <div aria-hidden="true" className="absolute -left-4 top-8 hidden sm:block">
        <div className="flex items-center gap-3 rounded-full border border-[#D9E3E8] bg-white px-4 py-2.5 shadow-[0_12px_35px_rgba(8,36,59,0.10)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#176B9C]" />

          <span
            className={`${mono.className} text-[7px] font-semibold uppercase tracking-[0.2em] text-[#08243B]`}
          >
            Event in Motion
          </span>
        </div>
      </div>

      {/* Bottom-right information card */}
      <div aria-hidden="true" className="absolute -bottom-5 -right-4 hidden sm:block">
        <div className="border border-[#D9E3E8] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(8,36,59,0.12)]">
          <p
            className={`${mono.className} text-[7px] font-semibold uppercase tracking-[0.2em] text-[#176B9C]`}
          >
            Where ideas meet
          </p>

          <p className="mt-1.5 text-[13px] font-semibold tracking-[-0.025em] text-[#08243B]">
            Leadership • Innovation
          </p>
        </div>
      </div>

      {/* Corner details */}
      <span aria-hidden="true" className="absolute -right-2 -top-2 h-5 w-5 border-r border-t border-[#176B9C]" />
      <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-[#176B9C]" />
    </div>
  )
}

function AboutEvent() {
  return (
    <section className={`${sans.className} relative overflow-hidden bg-white`}>
      <div aria-hidden="true" className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#176B9C]/[0.045]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-240px] left-[-220px] h-[520px] w-[520px] rounded-full border border-[#176B9C]/[0.035]" />

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="flex items-center gap-3">
            <span className="h-[6px] w-[6px] rounded-full bg-[#176B9C]" />
            <span className={`${mono.className} text-[18px] font-semibold uppercase tracking-[0.22em] text-[#08243B]`}>
              About the event
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-[#D9E3E8]" />

          </motion.div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <motion.div variants={reveal}>
              <p className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.24em] text-[#176B9C]`}>
                The technology leadership platform
              </p>

              <h1 className="mt-5 max-w-3xl text-[50px] font-semibold leading-[0.9] tracking-[-0.075em] text-[#08243B] sm:text-[68px] lg:text-[86px]">
                More than
                <br />
                an event.
                <br />
                <span className="text-[#176B9C]">A catalyst.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[14px] leading-6 text-[#607484] sm:text-[15px] sm:leading-7">
                CIO Tech Leadership Conference &amp; Awards brings together
                senior technology decision-makers, innovators and business
                leaders for focused conversations around the technologies,
                strategies and partnerships shaping the enterprise.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {['AI', 'CYBERSECURITY', 'CLOUD', 'DATA', 'DIGITAL TRANSFORMATION'].map((item) => (
                  <span
                    key={item}
                    className={`${mono.className} border border-[#D9E3E8] bg-[#F8FAFC] px-3 py-2 text-[7px] uppercase tracking-[0.14em] text-[#607484]`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex items-center gap-4">
                <div aria-hidden="true" className="h-px w-12 bg-[#176B9C]" />
                <p className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-[#91A1AD]`}>
                  People × Ideas × Technology
                </p>
              </div>
            </motion.div>

            <motion.div variants={reveal}>
              <EventVisual />
            </motion.div>
          </div>

          {/* Metrics */}
          <motion.div
            variants={reveal}
            className="mt-14 grid border-y border-[#D9E3E8] sm:grid-cols-3"
          >
            {metrics.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative px-1 py-7 sm:px-7 sm:py-9 ${index !== 0 ? 'border-t border-[#D9E3E8] sm:border-l sm:border-t-0' : ''
                  }`}
              >
                <p className="text-[54px] font-semibold leading-none tracking-[-0.075em] text-[#08243B] sm:text-[66px]">
                  {stat.number}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.18em] text-[#176B9C]`}>
                    {stat.label}
                  </span>
                  <span aria-hidden="true" className="h-px w-7 bg-[#D9E3E8]" />
                  <span className="text-[9px] text-[#91A1AD]">{stat.caption}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function IndustryLandscape() {
  return (
    <section
      className={`${sans.className} relative isolate overflow-hidden bg-[#061522]`}
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-8%] top-0 h-full w-[78%]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/industry-landscape.png')",
            }}
          />

          {/* Fade image into left side */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #061522 0%,
                  rgba(6,21,34,0.94) 8%,
                  rgba(6,21,34,0.72) 22%,
                  rgba(6,21,34,0.25) 45%,
                  rgba(6,21,34,0.05) 75%,
                  rgba(6,21,34,0) 100%
                )
              `,
            }}
          />

          {/* Top fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #061522 0%, rgba(6,21,34,0.05) 28%, rgba(6,21,34,0.12) 100%)",
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(180deg, transparent, #061522)",
            }}
          />
        </motion.div>

        {/* Atmospheric blue glow */}
        <div
          className="absolute right-[15%] top-[18%] h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{
            background: "rgba(55, 190, 225, 0.10)",
          }}
        />

        {/* Dark left protection layer */}
        <div
          className="absolute inset-y-0 left-0 w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, #061522 0%, rgba(6,21,34,0.98) 45%, rgba(6,21,34,0.75) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* =========================================================
          TECH GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "84px 84px",
        }}
      />

      {/* Fine radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 72% 42%,
              rgba(85,199,220,0.08),
              transparent 32%
            )
          `,
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            {/* LEFT */}
            <motion.div variants={reveal}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="relative h-[6px] w-[6px] rounded-full bg-[#55C7DC] shadow-[0_0_12px_rgba(85,199,220,0.9)]">
                  <span className="absolute inset-[-4px] animate-ping rounded-full bg-[#55C7DC]/20 motion-reduce:animate-none" />
                </span>

                <span
                  className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em] text-white/70`}
                >
                  Industry ecosystem
                </span>
              </div>

              <h2 className="mt-6 max-w-xl text-[46px] font-semibold leading-[0.93] tracking-[-0.065em] text-white sm:text-[60px] lg:text-[70px]">
                One room.
                <br />
                <span className="text-[#7DD3E7]">
                  Many industries.
                </span>
              </h2>
            </motion.div>

            {/* RIGHT COPY */}
            <motion.div
              variants={reveal}
              className="relative z-10 lg:pb-2"
            >
              <div className="max-w-2xl">
                <div aria-hidden="true" className="mb-4 h-px w-10 bg-[#55C7DC]/50" />

                <p className="max-w-2xl text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                  The conversation extends across the sectors where
                  technology is creating new operating models,
                  customer experiences and competitive advantage.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              INDUSTRY CARDS
          ====================================================== */}

          <motion.div
            variants={reveal}
            className="relative z-10 mt-12"
          >
            <div className="flex flex-wrap gap-2.5">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.025,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(85,199,220,0.6)",
                    backgroundColor: "rgba(85,199,220,0.07)",
                  }}
                  className={`
                    ${mono.className}
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/[0.12]
                    bg-[#071b2a]/80
                    px-4
                    py-3
                    text-[8px]
                    uppercase
                    tracking-[0.1em]
                    text-white/65
                    backdrop-blur-md
                    transition-colors
                    duration-300
                    hover:text-[#7DD3E7]
                    sm:text-[9px]
                  `}
                >
                  {/* Hover light */}
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#55C7DC] to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                  <span aria-hidden="true" className="mr-2 text-[#55C7DC]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          DECORATIVE FOREGROUND ELEMENTS
      ========================================================== */}

      {/* Right edge glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[380px] w-[2px] -translate-y-1/2 opacity-50"
        style={{
          background:
            "linear-gradient(transparent, #55C7DC, transparent)",
          filter: "blur(1px)",
        }}
      />

      {/* Bottom ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[280px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background: "rgba(40,150,190,0.07)",
        }}
      />
    </section>
  );
}

function AboutBenefits() {
  return (
    <section
      className={`${sans.className} relative overflow-hidden bg-[#F8FAFC]`}
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(#DCE7EC 1px, transparent 1px),
            linear-gradient(90deg, #DCE7EC 1px, transparent 1px)
          `,
          backgroundSize: "84px 84px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Large atmospheric circle */}

      <div aria-hidden="true" className="pointer-events-none absolute -right-[280px] top-[-220px] h-[650px] w-[650px] rounded-full border border-[#176B9C]/[0.06]" />

      <div aria-hidden="true" className="pointer-events-none absolute -right-[180px] top-[-120px] h-[450px] w-[450px] rounded-full border border-[#55C7DC]/[0.08]" />

      {/* Cyan glow */}

      <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#55C7DC]/[0.06] blur-[110px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={stagger}
        >
          {/* =====================================================
              TOP SECTION
          ====================================================== */}

          <div className="flex justify-center">
            <motion.div
              variants={reveal}
              className="flex flex-col items-center text-center"
            >
              {/* Label */}
              <div className="flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-[6px] w-[6px] rounded-full bg-[#176B9C] shadow-[0_0_10px_rgba(23,107,156,0.35)]" />

                <p
                  className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em] text-[#176B9C]`}
                >
                  Why leaders attend
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-[800px] text-[46px] font-semibold leading-[0.92] tracking-[-0.07em] text-[#08243B] sm:text-[58px] lg:text-[70px]">
                Conversations that move
                <br />
                <span className="text-[#176B9C]">
                  business forward.
                </span>
              </h2>

              {/* Description */}
              <div className="mt-7 flex flex-col items-center gap-3">
                <div aria-hidden="true" className="h-px w-10 bg-[#55C7DC]" />

                <p className="max-w-[600px] text-[14px] leading-6 text-[#607484] sm:text-[15px] sm:leading-7">
                  From boardroom priorities to emerging technology,
                  the experience is designed around the questions
                  senior leaders are actually solving today.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              BENEFIT INTRO BAR
          ====================================================== */}

          <motion.div
            variants={reveal}
            className="mt-14 flex items-center justify-between border-y border-[#D9E3E8] py-4"
          >
            <span
              className={`${mono.className} text-[7px] uppercase tracking-[0.22em] text-[#78909E]`}
            >
              What the room gives you
            </span>

            <span
              className={`${mono.className} hidden text-[7px] uppercase tracking-[0.22em] text-[#176B9C] sm:block`}
            >
              04 leadership outcomes
            </span>
          </motion.div>

          {/* =====================================================
              BENEFIT CARDS
          ====================================================== */}

          <motion.div
            variants={reveal}
            className="mt-0 grid border-l border-[#D9E3E8] sm:grid-cols-2 lg:grid-cols-4"
          >
            {aboutBenefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <motion.div
                  key={benefit.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative min-h-[235px] overflow-hidden border-b border-r border-[#D9E3E8] bg-[#F8FAFC] p-6 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,36,59,0.07)] sm:p-7"
                >
                  {/* Number */}

                  <div className="flex items-start justify-between">
                    <span
                      className={`${mono.className} text-[9px] font-semibold tracking-[0.16em] text-[#176B9C]`}
                    >
                      {benefit.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center border border-[#176B9C]/10 bg-[#176B9C]/[0.05] text-[#176B9C] transition-all duration-300 group-hover:border-[#55C7DC]/30 group-hover:bg-[#55C7DC]/10 group-hover:text-[#176B9C]">
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="mt-10">
                    <h3 className="text-[19px] font-semibold tracking-[-0.04em] text-[#08243B]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 max-w-[250px] text-[11px] leading-5 text-[#607484]">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Bottom line */}

                  <div aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#55C7DC] transition-all duration-500 group-hover:w-full" />

                  {/* Corner number */}

                  <span
                    aria-hidden="true"
                    className={`${mono.className} absolute bottom-5 right-6 text-[26px] font-medium tracking-[-0.05em] text-[#08243B]/[0.035] transition-colors duration-300 group-hover:text-[#176B9C]/[0.08]`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section
      className={`${sans.className} relative isolate overflow-hidden bg-[#061522]`}
    >
      {/* =========================================================
          CINEMATIC BODY IMAGE
      ========================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.06, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-8%] top-0 h-full w-[72%]"
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/about-cta.png')",
            }}
          />

          {/* LEFT FADE */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #061522 0%,
                  rgba(6,21,34,0.98) 12%,
                  rgba(6,21,34,0.88) 27%,
                  rgba(6,21,34,0.48) 45%,
                  rgba(6,21,34,0.12) 70%,
                  transparent 100%
                )
              `,
            }}
          />

          {/* TOP FADE */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  #061522 0%,
                  rgba(6,21,34,0.05) 30%,
                  rgba(6,21,34,0.10) 75%,
                  #061522 100%
                )
              `,
            }}
          />

          {/* BOTTOM FADE */}
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #061522)",
            }}
          />
        </motion.div>

        {/* =====================================================
            BLUE ATMOSPHERIC GLOW
        ====================================================== */}

        <div
          className="absolute right-[18%] top-[25%] h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{
            background: "rgba(65, 190, 220, 0.10)",
          }}
        />

        {/* =====================================================
            DARK LEFT PROTECTION
        ====================================================== */}

        <div
          className="absolute inset-y-0 left-0 w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, #061522 0%, #061522 48%, rgba(6,21,34,0.92) 72%, transparent 100%)",
          }}
        />
      </div>

      {/* =========================================================
          SUBTLE TECH GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "84px 84px",
        }}
      />

      {/* =========================================================
          DECORATIVE ORBITS
      ========================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute right-[-180px] top-[-250px] h-[560px] w-[560px] rounded-full border border-[#55C7DC]/[0.08]" />

      <div aria-hidden="true" className="pointer-events-none absolute right-[-120px] top-[-190px] h-[440px] w-[440px] rounded-full border border-[#55C7DC]/[0.04]" />

      <div aria-hidden="true" className="pointer-events-none absolute left-[-180px] bottom-[-220px] h-[440px] w-[440px] rounded-full border border-white/[0.035]" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={reveal}
        >
          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="grid min-h-[220px] items-end lg:grid-cols-[0.9fr_1.1fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-20 pb-2">
              {/* Eyebrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="flex items-center gap-3"
              >
                <span aria-hidden="true" className="relative h-[6px] w-[6px] rounded-full bg-[#55C7DC] shadow-[0_0_12px_rgba(85,199,220,0.9)]">
                  <span className="absolute inset-[-4px] animate-ping rounded-full bg-[#55C7DC]/20 motion-reduce:animate-none" />
                </span>

                <p
                  className={`${mono.className} text-[8px] font-semibold uppercase tracking-[0.22em] text-[#55C7DC]`}
                >
                  CIO TECH / 2026
                </p>
              </motion.div>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.08,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 max-w-[650px] text-[46px] font-semibold leading-[0.91] tracking-[-0.07em] text-white sm:text-[62px] lg:text-[76px]"
              >
                The right room
                <br />
                can change the
                <br />
                <span className="text-[#7DD3E7]">
                  next decision.
                </span>
              </motion.h2>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.18,
                  duration: 0.7,
                }}
                className="mt-7 max-w-[510px] text-[14px] leading-6 text-white/55 sm:text-[15px] sm:leading-7"
              >
                Join a focused community of technology leaders,
                innovators and decision-makers shaping the next
                chapter of enterprise technology.
              </motion.p>

              {/* =================================================
                  CTA
              ================================================== */}

              <motion.a
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.7,
                }}
                href="#delegateenquiry"
                aria-label="Attend as Delegate — go to registration"
                className="group mt-8 inline-flex min-w-[245px] items-center justify-between gap-8 border border-white/15 bg-[#071b2a]/80 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#55C7DC]/50 hover:bg-[#55C7DC]/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55C7DC] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span
                  className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.14em] text-white`}
                >
                  Attend as Delegate
                </span>

                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#55C7DC]/10 text-[#55C7DC] shadow-[0_0_20px_rgba(85,199,220,0.12)] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#55C7DC]/20 group-hover:shadow-[0_0_25px_rgba(85,199,220,0.25)] motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
                  <FiArrowUpRight size={15} />
                </span>
              </motion.a>
            </div>

            {/* =================================================
                RIGHT VISUAL AREA
            ================================================== */}

            <div className="pointer-events-none relative hidden h-full lg:block">
              {/* Floating metadata */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="absolute right-4 top-6 z-20"
              >
                <div className="border border-white/10 bg-[#061522]/50 px-5 py-4 backdrop-blur-md">
                  <p
                    className={`${mono.className} text-[7px] uppercase tracking-[0.2em] text-white/35`}
                  >
                    PEOPLE
                  </p>

                  <p
                    className={`${mono.className} mt-2 text-[9px] uppercase tracking-[0.16em] text-[#55C7DC]`}
                  >
                    IDEAS × TECHNOLOGY
                  </p>
                </div>
              </motion.div>

              {/* Small vertical line */}

              <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-px bg-gradient-to-b from-[#55C7DC]/60 to-transparent" />

              {/* Bottom visual indicator */}

              <div className="absolute bottom-10 right-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-12 bg-[#55C7DC]/40" />

                <span
                  className={`${mono.className} text-[7px] uppercase tracking-[0.2em] text-white/35`}
                >
                  PEOPLE × IDEAS × TECHNOLOGY
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              FOOTER BAR
          ====================================================== */}

          {/* <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="relative z-20 mt-12 border-t border-white/10 pt-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span
                className={`${mono.className} text-[7px] uppercase tracking-[0.18em] text-white/35`}
              >
                CIO TECH / DELHI / 2026
              </span>

              <span
                className={`${mono.className} text-[7px] uppercase tracking-[0.18em] text-white/25`}
              >
                People × Ideas × Technology
              </span>

              <span
                className={`${mono.className} text-[7px] uppercase tracking-[0.18em] text-white/35`}
              >
                END / ABOUT
              </span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM AMBIENT LIGHT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[280px] w-[700px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          background: "rgba(55,170,210,0.06)",
        }}
      />
    </section>
  );
}

export default function About() {
  return (
    <main id="about" className={`${sans.className} overflow-hidden`}>
      <AboutEvent />
      <TechnologySection />
      <FocusAreas />
      <IndustryLandscape />
      <AboutBenefits />
      <AboutCTA />
    </main>
  )
}