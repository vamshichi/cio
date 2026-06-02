'use client'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  label: string
}

export function AnimatedCounter({
  end,
  suffix = '',
  label,
}: AnimatedCounterProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:bg-white/10
      "
    >
      {/* Top Glow */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/0
          via-cyan-500/0
          to-cyan-500/5
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Number */}
      <div className="relative z-10">
        <h3
          className="
            text-center
            text-5xl
            font-black
            text-white
            lg:text-6xl
          "
        >
          <CountUp
            end={end}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          />

          {suffix}
        </h3>

        {/* Divider */}
        <div
          className="
            mx-auto
            mt-4
            h-px
            w-12
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
        />

        {/* Label */}
        <p
          className="
            mt-4
            text-center
            text-sm
            font-medium
            uppercase
            tracking-[2px]
            text-slate-400
          "
        >
          {label}
        </p>
      </div>
    </motion.div>
  )
}