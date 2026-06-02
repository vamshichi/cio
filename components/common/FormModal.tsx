'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function FormModal({
  open,
  onClose,
  title,
  children,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="
              fixed left-1/2 top-1/2 z-[101]
              max-h-[90vh]
              w-[95%]
              max-w-4xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-y-auto
              rounded-3xl
              border border-white/10
              bg-slate-950
              p-6
            "
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-white"
              >
                <FiX />
              </button>
            </div>

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}