'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'AI & Automation',
    position: 'left-10 top-40',
  },
  {
    title: 'Cyber Security',
    position: 'right-20 top-60',
  },
  {
    title: 'Cloud Innovation',
    position: 'left-32 bottom-32',
  },
]

export function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`absolute ${card.position} hidden lg:block`}
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              backdrop-blur-xl
            "
          >
            <span className="text-sm text-cyan-300">
              {card.title}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  )
}