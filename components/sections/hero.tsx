'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiActivity,
  FiCpu,
  FiShield,
  FiCloud,
  FiMenu,
  FiPlay,
} from 'react-icons/fi'

import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'
import { FormModal } from '@/components/common/FormModal'
import { Button } from '@/components/ui/button'

import { ParticlesBackground } from './ParticlesBackground'
import { AIGlobe } from './AIGlobe'

export function Hero() {
  const [showDelegateForm, setShowDelegateForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  /* ============================================================
     MOUSE PARALLAX
  ============================================================ */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#03070A]
        pt-10
        text-white
        selection:bg-cyan-400/30
        selection:text-white
      "
    >
      {/* ============================================================
          BACKGROUND SYSTEM
      ============================================================ */}

      {/* Main atmospheric gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_42%,rgba(0,229,255,0.12),transparent_28%),radial-gradient(circle_at_18%_85%,rgba(0,180,180,0.08),transparent_30%),linear-gradient(115deg,#020506_0%,#071015_45%,#03070A_100%)]
        "
      />

      {/* Cyan light source */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.01,
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 30,
        }}
        className="
          pointer-events-none
          absolute
          left-[58%]
          top-[15%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[140px]
        "
      />

      {/* White atmospheric light */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[15%]
          top-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-white/[0.025]
          blur-[150px]
        "
      />

      {/* ============================================================
          FUTURISTIC GRID
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
        "
      />

      {/* Fine grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(rgba(0,229,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.25)_1px,transparent_1px)]
          [background-size:24px_24px]
          [mask-image:radial-gradient(circle_at_70%_45%,black,transparent_45%)]
        "
      />

      {/* ============================================================
          TOP NAVIGATION
      ============================================================ */}

     

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[calc(100vh-90px)]
          max-w-[1600px]
          items-center
          px-6
          pb-20
          pt-20
          sm:px-10
          lg:px-14
          xl:px-20
        "
      >
        {/* ============================================================
            LEFT CONTENT
        ============================================================ */}

        <div className="relative z-40 w-full max-w-[690px] lg:w-[53%]">
          {/* Edition label */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_12px_rgba(103,232,249,0.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                India&apos;s Technology Leadership Platform
              </span>
            </div>

            <span className="h-px w-8 bg-white/15" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              Edition 03
            </span>
          </motion.div>

          {/* ========================================================
              MAIN TITLE
          ======================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[54px]
              font-semibold
              leading-[0.91]
              tracking-[-0.055em]
              sm:text-[68px]
              md:text-[78px]
              lg:text-[82px]
              xl:text-[94px]
            "
          >
            <span
              className="
                block
                bg-gradient-to-r
                from-white
                via-white
                to-cyan-200
                bg-clip-text
                text-transparent
              "
            >
              CIO Tech
            </span>

            <span
              className="
                block
                text-white
              "
            >
              Leadership
            </span>

            <span
              className="
                block
                text-white/90
              "
            >
              Conference
            </span>

            <span
              className="
                mt-4
                block
                font-serif
                text-[31px]
                italic
                font-medium
                tracking-[-0.02em]
                text-cyan-300
                drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]
                sm:text-[38px]
                md:text-[43px]
                lg:text-[47px]
              "
            >
              &amp; Awards
            </span>
          </motion.h1>

          {/* ========================================================
              TAGLINE
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-7"
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/45
              "
            >
              <span>People</span>
              <span className="text-cyan-300">×</span>
              <span>Ideas</span>
              <span className="text-cyan-300">×</span>
              <span>Technology</span>
            </div>

            <div
              className="
                mt-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-cyan-300/80
              "
            >
              A Brighter India
            </div>
          </motion.div>

          {/* ========================================================
              DATE / LOCATION
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.43,
              duration: 0.8,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            <InfoPill
              icon={<FiCalendar size={14} />}
              label="12 November 2026"
              subLabel="Delhi, India"
            />

            <InfoPill
              icon={<FiMapPin size={14} />}
              label="Delhi NCR"
              subLabel="New Delhi"
            />
          </motion.div>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.52,
              duration: 0.8,
            }}
            className="
              mt-7
              max-w-[570px]
              text-[14px]
              leading-7
              text-white/55
              sm:text-[15px]
              sm:leading-7
            "
          >
            250+ CIOs and technology heads convene in Delhi to shape the
            next era of enterprise AI, cybersecurity, cloud infrastructure,
            and digital transformation — and to celebrate the leaders
            shaping India&apos;s technology future.
          </motion.p>

          {/* ========================================================
              FOCUS AREAS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            <Topic
              icon={<FiCpu size={12} />}
              label="Artificial Intelligence"
            />

            <Topic
              icon={<FiShield size={12} />}
              label="Cybersecurity"
            />

            <Topic
              icon={<FiCloud size={12} />}
              label="Cloud Infrastructure"
            />

            <Topic
              icon={<FiActivity size={12} />}
              label="Digital Transformation"
            />
          </motion.div>

          {/* ========================================================
              CTA BUTTONS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.68,
              duration: 0.8,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            {/* Primary */}

            <Button
              size="lg"
              onClick={() => setShowDelegateForm(true)}
              className="
                group
                relative
                h-14
                min-w-[215px]
                overflow-hidden
                rounded-full
                border
                border-cyan-300
                bg-cyan-300
                px-7
                text-[12px]
                font-bold
                text-[#021014]
                shadow-[0_0_35px_rgba(34,211,238,0.16)]
                transition-all
                duration-500
                hover:bg-cyan-200
                hover:shadow-[0_0_55px_rgba(34,211,238,0.28)]
              "
            >
              <span className="relative z-10 flex items-center justify-center">
                Register as Delegate

                <FiArrowRight
                  size={16}
                  className="
                    ml-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-white/30
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />
            </Button>

            {/* Secondary */}

            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowSponsorForm(true)}
              className="
                group
                h-14
                min-w-[215px]
                rounded-full
                border
                border-white/20
                bg-white/[0.04]
                px-7
                text-[12px]
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-300/60
                hover:bg-cyan-300/[0.07]
                hover:text-cyan-200
              "
            >
              Become a Sponsor

              <FiArrowRight
                size={16}
                className="
                  ml-3
                  text-cyan-300
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>
          </motion.div>

          {/* ========================================================
              STATS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.82,
              duration: 0.8,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-5
            "
          >
            <Stat
              number="250+"
              label="Technology Leaders"
            />

            <Divider />

            <Stat
              number="40+"
              label="Industry Sectors"
            />

            <Divider />

            <Stat
              number="30+"
              label="Speakers & Experts"
            />

            <Divider />

            <Stat
              number="01"
              label="Shared Vision"
            />
          </motion.div>

          {/* Bottom statement */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="
              mt-8
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-cyan-300/60" />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/35
              "
            >
              Building a smarter, more secure tomorrow
            </span>
          </motion.div>
        </div>

        {/* ============================================================
            FUTURISTIC GLOBE
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.82,
            x: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            right-[-280px]
            top-[50%]
            z-10
            hidden
            h-[780px]
            w-[780px]
            -translate-y-1/2
            lg:block
            xl:right-[-130px]
            xl:h-[860px]
            xl:w-[860px]
            2xl:right-[-50px]
            2xl:h-[900px]
            2xl:w-[900px]
          "
        >
          {/* Massive aura */}

          <div
            className="
              absolute
              inset-[5%]
              rounded-full
              bg-cyan-400/[0.035]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              inset-[20%]
              rounded-full
              bg-cyan-300/[0.055]
              blur-[80px]
            "
          />

          {/* Horizon glow */}

          <div
            className="
              absolute
              bottom-[18%]
              left-[5%]
              right-[5%]
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-cyan-300/40
              to-transparent
              blur-[2px]
            "
          />

          <AIGlobe />

          {/* Floating technology labels */}

          <FloatingLabel
            className="left-[2%] top-[30%]"
            number="01"
            label="ARTIFICIAL INTELLIGENCE"
          />

          <FloatingLabel
            className="right-[0%] top-[25%]"
            number="02"
            label="DIGITAL TRANSFORMATION"
          />

          <FloatingLabel
            className="right-[4%] top-[55%]"
            number="03"
            label="CYBERSECURITY"
          />

          <FloatingLabel
            className="left-[5%] bottom-[24%]"
            number="04"
            label="CLOUD INFRASTRUCTURE"
          />

          {/* Orbit marker */}

          <div
            className="
              absolute
              right-[13%]
              top-[17%]
              flex
              items-center
              gap-2
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-cyan-200/60
              "
            >
              INDIA / 28.6139° N
            </span>
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT SIDE MESSAGE
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[15%]
            right-8
            z-30
            hidden
            xl:block
          "
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 h-14 w-px bg-gradient-to-b from-cyan-300 to-transparent" />

            <div>
              <div
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-white/35
                "
              >
                Technology
              </div>

              <div
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-white/55
                "
              >
                For a
              </div>

              <div
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-cyan-300
                "
              >
                Better Tomorrow
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            PLAY / STORY BUTTON
        ============================================================ */}

        {/* <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.15,
            duration: 0.8,
          }}
          className="
            group
            absolute
            bottom-[8%]
            right-8
            z-40
            hidden
            items-center
            gap-3
            xl:flex
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/[0.04]
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:border-cyan-300/60
              group-hover:bg-cyan-300/10
            "
          >
            <FiPlay
              size={15}
              className="ml-0.5 text-cyan-300"
            />
          </div>

          <div className="text-left">
            <div
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/35
              "
            >
              Watch
            </div>

            <div
              className="
                mt-1
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/70
              "
            >
              Our Story
            </div>
          </div>
        </motion.button> */}
      </div>

      {/* ============================================================
          MOBILE GLOBE
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.75,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[62%]
          z-0
          block
          h-[440px]
          w-[440px]
          -translate-x-1/2

          sm:top-[59%]
          sm:h-[520px]
          sm:w-[520px]

          md:top-[56%]
          md:h-[580px]
          md:w-[580px]

          lg:hidden
        "
      >
        <div
          className="
            absolute
            inset-[15%]
            rounded-full
            bg-cyan-400/[0.08]
            blur-[90px]
          "
        />

        <AIGlobe />
      </motion.div>

      {/* ============================================================
          BOTTOM GRADIENT
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-10
          h-40
          bg-gradient-to-t
          from-[#03070A]
          to-transparent
        "
      />

      {/* ============================================================
          MODALS
      ============================================================ */}

      <FormModal
        open={showDelegateForm}
        onClose={() => setShowDelegateForm(false)}
        title="Delegate Registration"
      >
        <DelegateForm />
      </FormModal>

      <FormModal
        open={showSponsorForm}
        onClose={() => setShowSponsorForm(false)}
        title="Sponsor Registration"
      >
        <SponsorForm />
      </FormModal>
    </section>
  )
}

/* ================================================================
   INFO PILL
================================================================ */

function InfoPill({
  icon,
  label,
  subLabel,
}: {
  icon: React.ReactNode
  label: string
  subLabel: string
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.035]
        px-4
        py-3
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-lg
          border
          border-cyan-300/20
          bg-cyan-300/[0.06]
          text-cyan-300
        "
      >
        {icon}
      </div>

      <div>
        <div className="text-[11px] font-semibold text-white/85">
          {label}
        </div>

        <div className="mt-0.5 text-[9px] text-white/35">
          {subLabel}
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   TOPIC
================================================================ */

function Topic({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/[0.035]
        px-3.5
        py-2
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300/30
        hover:bg-cyan-300/[0.06]
      "
    >
      <span className="text-cyan-300 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      <span className="text-[9px] font-medium text-white/55">
        {label}
      </span>
    </div>
  )
}

/* ================================================================
   STAT
================================================================ */

function Stat({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div>
      <div
        className="
          text-[22px]
          font-semibold
          tracking-[-0.04em]
          text-white
        "
      >
        {number}
      </div>

      <div
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-white/35
        "
      >
        {label}
      </div>
    </div>
  )
}

/* ================================================================
   DIVIDER
================================================================ */

function Divider() {
  return (
    <div className="hidden h-8 w-px bg-white/10 sm:block" />
  )
}

/* ================================================================
   FLOATING TECHNOLOGY LABEL
================================================================ */

function FloatingLabel({
  className,
  number,
  label,
}: {
  className: string
  number: string
  label: string
}) {
  return (
    <div
      className={`
        absolute
        ${className}
        hidden
        items-center
        gap-2
        lg:flex
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />

      <div>
        <div className="text-[7px] tracking-[0.25em] text-cyan-300/50">
          {number}
        </div>

        <div className="mt-1 whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.2em] text-white/35">
          {label}
        </div>
      </div>
    </div>
  )
}