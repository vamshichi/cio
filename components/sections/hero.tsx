'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi'

import { Button } from '@/components/ui/button'

// Part 2
import { ParticlesBackground } from './ParticlesBackground'

// Part 3
import { AnimatedCounter } from './AnimatedCounter'

// Part 4
import { LogoMarquee } from './LogoMarquee'

import { AIGlobe } from './AIGlobe'
import { FloatingCards } from './FloatingCards'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden py-24 pt-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroimage.png"
          alt="CIO Leadership Summit"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-slate-950/90" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Left Glow */}
        <div className="absolute left-[-10%] top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px]" />

        {/* Right Glow */}
        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[180px]" />

        {/* Mouse Spotlight */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `radial-gradient(
              400px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(0,255,255,0.08),
              transparent 60%
            )`,
          }}
        />

        <ParticlesBackground />
      </div>
      <div className="absolute inset-0 overflow-hidden">
  <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

  <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

  <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
</div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10">

        {/* Event Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-sm font-medium tracking-wide text-cyan-300">
              INDIA'S MOST PREMIER CIO LEADERSHIP SUMMIT 2026
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center"
        >
          <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-[0.9] text-white md:text-5xl lg:text-6xl xl:text-[68px]">
  India's Most Premier

  <span className="hero-glow mt-1 block bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
    CIO Leadership
  </span>

  <span className="block">
    Summit 2026
  </span>
</h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="mx-auto mt-8 max-w-4xl text-center text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          Join India's leading CIOs, CTOs, CISOs,
          CDOs and Technology Decision Makers
          for an exclusive gathering focused on
          AI, Digital Transformation, Cybersecurity,
          Cloud Innovation and Enterprise Leadership.
        </motion.p>

        {/* Event Strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl">

            <div className="flex items-center gap-2 text-slate-300">
              <FiCalendar />
              <span>23 July 2026</span>
            </div>

            <div className="hidden md:block text-slate-600">
              •
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <FiMapPin />
              <span>Four Seasons Bengaluru</span>
            </div>

            <div className="hidden md:block text-slate-600">
              •
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <FiUsers />
              <span>200+ Executive Leaders</span>
            </div>

          </div>
        </motion.div>

        {/* CTA Buttons */}
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-12 flex flex-wrap justify-center gap-4"
>
  <Button
    size="lg"
    className="
      group
      h-14
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      px-10
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      hover:shadow-cyan-500/30
    "
    asChild
  >
    <Link href="#delegate-registration">
      Delegate Registration

      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
    </Link>
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="
      h-14
      rounded-xl
      border-cyan-500/30
      bg-white/5
      px-10
      text-white
      backdrop-blur-xl
      hover:bg-cyan-500/10
      hover:border-cyan-500
    "
    asChild
  >
    <Link href="#sponsor-registration">
      Sponsor Registration
    </Link>
  </Button>
</motion.div>

        {/* Stats Section */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <AnimatedCounter
            end={200}
            suffix="+"
            label="CIOs & IT Leaders"
          />

          <AnimatedCounter
            end={20}
            suffix="+"
            label="Industry Speakers"
          />

          <AnimatedCounter
            end={20}
            suffix="+"
            label="Strategic Partners"
          />

          <AnimatedCounter
            end={1}
            suffix=""
            label="Day Of Insights"
          />

        </div>

        {/* Logo Marquee */}
        {/* <div className="mt-24">
          <LogoMarquee />
        </div> */}

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mx-auto mt-20 hidden lg:block"
        >
          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-3 w-1 rounded-full bg-white" />
          </div>
        </motion.div> */}

      </div>
      <AIGlobe />
<FloatingCards />
    </section>
  )
}