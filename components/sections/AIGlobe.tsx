'use client'

import { motion } from 'framer-motion'

export function AIGlobe() {
  return (
    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:flex">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative h-[500px] w-[500px]"
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/20" />

        {/* Ring 2 */}
        <div className="absolute inset-6 rounded-full border border-blue-500/20" />

        {/* Ring 3 */}
        <div className="absolute inset-12 rounded-full border border-cyan-400/10" />

        {/* Grid Effect */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_60%,rgba(34,211,238,0.05)_100%)]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[60px]" />

        {/* Orbit Dot */}
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      </motion.div>
    </div>
  )
}