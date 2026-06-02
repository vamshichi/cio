'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FiMenu,
  FiX,
  FiCalendar,
  FiUsers,
  FiAward,
  FiInfo,
} from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'
import { FormModal } from '@/components/common/FormModal'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDelegateForm, setShowDelegateForm] = useState(false)
const [showSponsorForm, setShowSponsorForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about', icon: FiInfo },
    { label: 'Agenda', href: '#agenda', icon: FiCalendar },
    { label: 'Speakers', href: '#speakers', icon: FiUsers },
    { label: 'Awards', href: '#awards', icon: FiAward },
  ]

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/logo.png"
              alt="CIO Tech Leadership Summit"
              width={220}
              height={60}
              priority
              className="h-12 md:h-14 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2"
              >
                <div
                  className={`flex items-center gap-2 text-sm font-medium transition-all ${
                    isScrolled
                      ? 'text-slate-700 hover:text-cyan-600'
                      : 'text-slate-700 hover:text-cyan-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
  variant="outline"
  size="sm"
  className="font-semibold"
  onClick={() => setShowSponsorForm(true)}
>
  Sponsor Registration
</Button>

<Button
  size="sm"
  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
  onClick={() => setShowDelegateForm(true)}
>
  Delegate Registration
</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden rounded-lg p-2 transition ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="space-y-2 px-4 py-5">
              {navItems.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}

              {/* Mobile CTA Buttons */}
              <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
               <Button
  variant="outline"
  className="w-full"
  onClick={() => {
    setShowSponsorForm(true)
    setMobileMenuOpen(false)
  }}
>
  Sponsor Registration
</Button>

<Button
  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
  onClick={() => {
    setShowDelegateForm(true)
    setMobileMenuOpen(false)
  }}
>
  Delegate Registration
</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    </header>
  )
  
}