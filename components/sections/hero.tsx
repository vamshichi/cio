
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from 'react-icons/fi'

import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'
import { FormModal } from '@/components/common/FormModal'

export function Hero() {
  const [showDelegateForm, setShowDelegateForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)

  return (
    <section
      id="home"
      className="
        relative
        h-[100svh]
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#02070A]
        text-white
      "
    >
      {/* ============================================================
          BACKGROUND VIDEO
      ============================================================ */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/videos/cio-tech-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic darkness */}
        <div className="absolute inset-0 bg-[#02070A]/30" />

        {/* Center readability */}
        <div
          className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(2,7,10,0.25)_0%,rgba(2,7,10,0.72)_70%,rgba(2,7,10,0.96)_100%)]
            "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-[#02070A]/90
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-[#02070A]
            via-[#02070A]/60
            to-transparent
          "
        />

        {/* Subtle cyan glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[45vh]
            w-[45vh]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.06]
            blur-[130px]
          "
        />
      </div>



      {/* ============================================================
          CENTERED HERO
      ============================================================ */}

      <main
        className="
          relative
          z-20
          flex
          h-[calc(100svh-68px)]
          items-center
          justify-center
          px-5
          pt-20
          pb-[15px]
          sm:px-8
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            text-center
          "
        >
          {/* ========================================================
              EYEBROW
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_16px_rgba(103,232,249,0.9)]
              "
            />

            <span
              className="
                text-[18px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/55
              "
            >
              India&apos;s Technology Leadership Platform
            </span>

            <span className="h-px w-8 bg-white/20" />

            <span
              className="
                text-[18px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              Edition 03
            </span>
          </motion.div>

          {/* ========================================================
              TITLE
          ======================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-[900px]
              text-[clamp(48px,6.5vw,92px)]
              font-semibold
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            <span className="block
                bg-gradient-to-r
                from-white
                via-white
                to-cyan-100
                bg-clip-text
                text-transparent">
              CIO TECH LEADERSHIP
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-white
                via-white
                to-cyan-100
                bg-clip-text
                text-transparent
              "
            >
              CONFERENCE
            </span>

            <span
              className="
                mt-3
                block
                font-serif
                text-[clamp(30px,3.3vw,48px)]
                font-medium
                italic
                tracking-[-0.035em]
                text-cyan-300
                drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              &amp; Awards
            </span>
          </motion.h1>

          {/* ========================================================
              INTRO
          ======================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.65,
            }}
            className="
              mt-5
              max-w-[500px]
              text-[24px]
              font-light
              leading-6
              text-white/65
              sm:text-[25px]
            "
          >
            Where India&apos;s technology leaders meet to
            shape what comes next.
          </motion.p>

          {/* ========================================================
              DATE + LOCATION
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.65,
            }}
            className="
    mt-5
    flex
    flex-wrap
    items-center
    justify-center
    gap-x-7
    gap-y-3
    text-[44px]
    font-semibold
    uppercase
    sm:text-[38px]
    md:text-[42px]
    lg:text-[46px]
  "
          >
            <EventMeta
              icon={<FiCalendar size={18} />}
              label="12 November 2026"
              sub="New Delhi, India"
            />

            <span
              className="
      hidden
      h-9
      w-px
      bg-white/15
      sm:block
    "
            />

            <EventMeta
              icon={<FiMapPin size={18} />}
              label="The LaliT New Delhi"
              sub="India"
            />
          </motion.div>

          {/* ========================================================
              CTA
          ======================================================== */}

          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.65,
            }}
            className="
              mt-6
              flex
              flex-col
              items-center
              justify-center
              gap-2.5
              sm:flex-row
            "
          >
            <button
              onClick={() => setShowDelegateForm(true)}
              className="
                group
                flex
                h-11
                min-w-[205px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-cyan-300
                px-7
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#021014]
                shadow-[0_0_40px_rgba(34,211,238,0.18)]
                transition
                hover:bg-cyan-200
                hover:shadow-[0_0_60px_rgba(34,211,238,0.3)]
              "
            >
              Attend as Delegate

              <FiArrowRight
                size={14}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              onClick={() => setShowSponsorForm(true)}
              className="
                group
                flex
                h-11
                min-w-[190px]
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/[0.04]
                px-7
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/85
                backdrop-blur-xl
                transition
                hover:border-cyan-300/50
                hover:bg-cyan-300/[0.08]
                hover:text-cyan-200
              "
            >
              Become a Sponsor

              <FiArrowRight
                size={14}
                className="
                  text-cyan-300
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div> */}

          {/* ========================================================
              ANIMATED NUMBERS
          ======================================================== */}


        </div>
      </main>

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
   EVENT META
================================================================ */

function EventMeta({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode
  label: string
  sub: string
}) {
  return (
    <div className="flex items-center gap-2.5 text-left">
      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-cyan-300/20
          bg-cyan-300/[0.05]
          text-cyan-300
        "
      >
        {icon}
      </span>

      <div>
        <div
          className="
            text-[19px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-white/90
          "
        >
          {label}
        </div>

        <div
          className="
            mt-0.5
            text-[15px]
            text-white/35
          "
        >
          {sub}
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   ANIMATED STAT
================================================================ */

function AnimatedStat({
  value,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  delay?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const duration = 1400

    const start = () => {
      const animate = (time: number) => {
        if (!startTime) {
          startTime = time
        }

        const progress = Math.min(
          (time - startTime) / duration,
          1
        )

        // Smooth ease-out
        const eased =
          1 - Math.pow(1 - progress, 3)

        setCount(Math.floor(eased * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const timeout = window.setTimeout(start, delay * 1000)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(animationFrame)
    }
  }, [value, delay])

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-center"
    >
      <div
        className="
          tabular-nums
          text-[28px]
          font-medium
          leading-none
          tracking-[-0.06em]
          text-white
          sm:text-[34px]
        "
      >
        {prefix}
        {count}
        {suffix}
      </div>

      <div
        className="
          mt-2
          whitespace-nowrap
          text-[6px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/30
          sm:text-[7px]
        "
      >
        {label}
      </div>
    </motion.div>
  )
}

/* ================================================================
   DIVIDER
================================================================ */

function Divider() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      transition={{
        delay: 0.7,
        duration: 0.5,
      }}
      className="
        h-8
        w-px
        shrink-0
        bg-white/10
      "
    />
  )
}
