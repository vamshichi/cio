'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiCalendar, FiUsers, FiAward, FiInfo } from 'react-icons/fi'
import { BiBuildings } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? 'bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/70 shadow-[0_8px_32px_rgba(0,82,204,0.1)]'
        : 'bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 border-b border-border/40'
      }`}>
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="CIO Tech Leadership Conference"
              width={220}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-3 py-2"
              >
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition group-hover:text-primary"
                  whileHover={{ x: 2 }}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </motion.div>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )
          })}
        </nav>

       {/* Actions */}
<div className="flex items-center gap-3">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      variant="outline"
      size="sm"
      asChild
      className="
        hidden sm:flex
        border-primary/30
        hover:border-primary
        hover:bg-primary/10
        font-semibold
      "
    >
      <Link href="#sponsor-registration">
        Sponsor Registration
      </Link>
    </Button>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      size="sm"
      asChild
      className="
        bg-gradient-to-r
        from-primary
        to-accent
        text-white
        font-semibold
        hover:shadow-lg
        hover:shadow-primary/40
      "
    >
      <Link href="#delegate-registration">
        Delegate Registration
      </Link>
    </Button>
  </motion.div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
  >
    {mobileMenuOpen ? (
      <FiX className="w-5 h-5" />
    ) : (
      <FiMenu className="w-5 h-5" />
    )}
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-border/40 bg-card/50 backdrop-blur"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-secondary/50 transition"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </header>
  )
}
