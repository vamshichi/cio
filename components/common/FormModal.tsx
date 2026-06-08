'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                h-[95vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-slate-950
                shadow-2xl
              "
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-6">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  {title}
                </h2>

                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-white transition hover:bg-white/10"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}