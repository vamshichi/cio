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
  FiArrowUpRight,
  FiGrid,
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

  /* -------------------------------------------------------------------------- */
  /* HASH HANDLING                                                              */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash

      if (hash.startsWith('#delegateenquiry')) {
        setShowDelegateForm(true)
      }

      if (hash.startsWith('#sponsorenquiry')) {
        setShowSponsorForm(true)
      }
    }

    checkHash()

    window.addEventListener('hashchange', checkHash)

    return () => {
      window.removeEventListener('hashchange', checkHash)
    }
  }, [])

  /* -------------------------------------------------------------------------- */
  /* SCROLL                                                                     */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* -------------------------------------------------------------------------- */
  /* NAVIGATION                                                                  */
  /* -------------------------------------------------------------------------- */

  const navItems = [
    {
      label: 'About',
      href: '#about',
      icon: FiInfo,
    },
    // {
    //   label: 'Agenda',
    //   href: '#agenda',
    //   icon: FiCalendar,
    // },
    {
      label: 'Speakers',
      href: '#speakers',
      icon: FiUsers,
    },
    {
      label: 'Partners',
      href: '#partners',
      icon: FiUsers,
    },
    {
      label: 'Past Events',
      href: '#past-events',
      icon: FiCalendar,
    },
    {
      label: 'Awards',
      href: '#awards',
      icon: FiAward,
    },
  ]

  /* -------------------------------------------------------------------------- */
  /* MODAL ACTIONS                                                               */
  /* -------------------------------------------------------------------------- */

  const openSponsorForm = () => {
    window.history.pushState(null, '', '#sponsorenquiry')
    setShowSponsorForm(true)
  }

  const openDelegateForm = () => {
    window.history.pushState(null, '', '#delegateenquiry')
    setShowDelegateForm(true)
  }

  const closeSponsorForm = () => {
    window.history.pushState(
      {},
      '',
      window.location.pathname
    )

    setShowSponsorForm(false)
  }

  const closeDelegateForm = () => {
    window.history.pushState(
      {},
      '',
      window.location.pathname
    )

    setShowDelegateForm(false)
  }

  return (
    <>
      {/* ====================================================================== */}
      {/* HEADER                                                                  */}
      {/* ====================================================================== */}

      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500
          ${
            isScrolled
              ? 'bg-[#020817]/75'
              : 'bg-[#020817]/20'
          }
        `}
      >
        {/* ==================================================================== */}
        {/* ATMOSPHERIC BACKGROUND                                                */}
        {/* ==================================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(
                  white 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                   1px,
                  transparent 1px
                )
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  white 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  white 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '15px 15px',
            }}
          />

          {/* Left blue atmosphere */}
          <div className="absolute left-[5%] top-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

          {/* Center atmosphere */}
          <div className="absolute left-1/2 top-[-180px] h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[130px]" />

          {/* Right atmosphere */}
          <div className="absolute right-[5%] top-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        </div>

        {/* ==================================================================== */}
        {/* MAIN NAVIGATION CONTAINER                                             */}
        {/* ==================================================================== */}

        <div
          className={`
            relative mx-auto
            max-w-[1500px]
            px-4
            transition-all duration-500
            sm:px-6
            lg:px-8
            ${
              isScrolled
                ? 'py-2'
                : 'py-4'
            }
          `}
        >
          {/* ================================================================== */}
          {/* PREMIUM NAV BAR                                                     */}
          {/* ================================================================== */}

          <div
            className={`
              relative flex items-center
              rounded-[24px]
              border
              px-3
              transition-all duration-500
              sm:px-4
              lg:px-5
              ${
                isScrolled
                  ? `
                    border-blue-400/20
                    bg-white
                    shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                  `
                  : `
                    border-blue-400/25
                    bg-white
                    shadow-[0_15px_60px_rgba(0,0,0,0.30)]
                  `
              }
            `}
          >
            {/* ================================================================ */}
            {/* NAVBAR OUTER GLOW                                                */}
            {/* ================================================================ */}

            {/* <div className="pointer-events-none absolute -inset-px rounded-[24px] bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-400/20 opacity-60" /> */}

            {/* ================================================================ */}
            {/* CORNER ACCENTS                                                    */}
            {/* ================================================================ */}

            <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-blue-400/60" />

            <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-blue-400/60" />

            <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-blue-400/60" />

            <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-blue-400/60" />

            {/* ================================================================ */}
            {/* LOGO                                                              */}
            {/* ================================================================ */}

            <Link
              href="#home"
              className="group relative flex shrink-0 items-center py-2 pl-2 pr-4 sm:pr-6"
            >
              <motion.div
                whileHover={{
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative"
              >
                {/* Logo glow */}
                <div className="absolute -inset-3 rounded-xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <Image
                  src="/logo.png"
                  alt="CIO Tech Leadership Summit"
                  width={220}
                  height={60}
                  priority
                  className="
                    relative
                    h-10
                    w-auto
                    object-contain
                    sm:h-11
                  "
                />
              </motion.div>
            </Link>

            {/* Logo divider */}
            <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent lg:block" />

            {/* ================================================================= */}
            {/* DESKTOP NAVIGATION                                                */}
            {/* ================================================================= */}

            <nav className="hidden flex-1 items-center justify-center px-3 lg:flex">
              <div className="flex items-center rounded-full p-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative"
                    >
                      <div
                        className="
                          relative flex
                          items-center
                          gap-2
                          rounded-full
                          px-3
                          py-2.5
                          transition-all
                          duration-300
                          hover:bg-blue-500/[0.08]
                          xl:px-4
                        "
                      >
                        {/* Icon */}
                        <Icon
                          className="
                            h-3.5
                            w-3.5
                            text-slate-500
                            transition-all
                            duration-300
                            group-hover:text-cyan-300
                          "
                        />

                        {/* Text */}
                        <span
                          className="
                            whitespace-nowrap
                            text-[11px]
                            font-medium
                            tracking-[0.02em]
                            text-slate-400
                            transition-colors
                            duration-300
                            group-hover:text-white
                            xl:text-[12px]
                          "
                        >
                          {item.label}
                        </span>

                        {/* Hover line */}
                        <span
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            h-px
                            w-0
                            -translate-x-1/2
                            bg-gradient-to-r
                            from-cyan-400
                            to-blue-500
                            shadow-[0_0_8px_rgba(34,211,238,0.7)]
                            transition-all
                            duration-300
                            group-hover:w-7
                          "
                        />

                        {/* First item indicator */}
                        {index === 0 && (
                          <span className="absolute left-1/2 top-0 h-px w-4 -translate-x-1/2 bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* ================================================================= */}
            {/* DESKTOP CTA                                                        */}
            {/* ================================================================= */}

            <div className="hidden items-center gap-2.5 lg:flex">
              {/* ============================================================= */}
              {/* SPONSOR ENQUIRY                                                 */}
              {/* ============================================================= */}

              <Button
                variant="outline"
                onClick={openSponsorForm}
                className="
                  group
                  relative
                  h-11
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-400/30
                  bg-[#061326]/80
                  px-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[1.2px]
                  text-slate-300
                  shadow-none
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-400/70
                  hover:bg-blue-500/[0.08]
                  hover:text-white
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-[55%]
                    skew-x-[-20deg]
                    bg-white/[0.08]
                    transition-all
                    duration-700
                    group-hover:left-[150%]
                  "
                />

                <span className="relative z-10 flex items-center gap-2.5">
                  Sponsor Enquiry

                  <FiArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Button>

              {/* ============================================================= */}
              {/* DELEGATE REGISTRATION                                           */}
              {/* ============================================================= */}

              <Button
                onClick={openDelegateForm}
                className="
                  group
                  relative
                  h-11
                  overflow-hidden
                  rounded-full
                  border
                  border-cyan-300/30
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-500
                  px-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[1.1px]
                  text-white
                  shadow-[0_0_25px_rgba(37,99,235,0.20)]
                  transition-all
                  duration-300
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.28)]
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[80%]
                    w-[45%]
                    skew-x-[-20deg]
                    bg-white/20
                    transition-all
                    duration-700
                    group-hover:left-[140%]
                  "
                />

                <span className="relative z-10 flex items-center gap-2.5">
                  Delegate Registration

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                    "
                  >
                    <FiArrowUpRight
                      className="
                        h-3
                        w-3
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </span>
              </Button>

              {/* ============================================================= */}
              {/* MENU / SYSTEM ICON                                              */}
              {/* ============================================================= */}

              {/* <div className="ml-1 hidden h-10 w-10 items-center justify-center border-l border-blue-400/20 pl-2 xl:flex">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-500
                    transition-colors
                    hover:text-cyan-300
                  "
                  aria-label="Menu"
                >
                  <FiGrid className="h-4 w-4" />
                </motion.button>
              </div> */}
            </div>

            {/* ================================================================= */}
            {/* MOBILE BUTTON                                                      */}
            {/* ================================================================= */}

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              {/* Mobile registration */}
              <Button
                onClick={openDelegateForm}
                className="
                  hidden
                  h-10
                  rounded-full
                  border
                  border-cyan-300/30
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.8px]
                  text-white
                  shadow-[0_0_20px_rgba(37,99,235,0.18)]
                  sm:flex
                "
              >
                Register
              </Button>

              {/* Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={
                  mobileMenuOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
                aria-expanded={mobileMenuOpen}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-400/25
                  bg-white/[0.03]
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/60
                  hover:bg-blue-500/[0.08]
                  hover:text-white
                "
              >
                {mobileMenuOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}

                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MOBILE MENU                                                           */}
        {/* ==================================================================== */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                height: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                y: -12,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden px-4 sm:px-6 lg:hidden"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-blue-400/20
                  bg-[#031021]/95
                  p-3
                  shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                  backdrop-blur-2xl
                "
              >
                {/* Mobile grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(70,140,255,0.2) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        90deg,
                        rgba(70,140,255,0.2) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Corner brackets */}
                <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-blue-400/50" />
                <span className="absolute right-2 top-2 h-4 w-4 border-r border-t border-blue-400/50" />
                <span className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-blue-400/50" />
                <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-blue-400/50" />

                <div className="relative">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

                      <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-500">
                        Navigation
                      </span>
                    </div>

                    <span className="font-mono text-[8px] tracking-[2px] text-slate-700">
                      CIO / 2026
                    </span>
                  </div>

                  {/* Links */}
                  <div className="py-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon

                      return (
                        <motion.div
                          key={item.href}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.04,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() =>
                              setMobileMenuOpen(false)
                            }
                            className="
                              group
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-3
                              py-3
                              transition-all
                              duration-300
                              hover:bg-blue-500/[0.07]
                            "
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-white/[0.06]
                                  bg-white/[0.025]
                                  transition-all
                                  duration-300
                                  group-hover:border-blue-400/25
                                  group-hover:bg-blue-500/[0.07]
                                "
                              >
                                <Icon
                                  className="
                                    h-4
                                    w-4
                                    text-slate-500
                                    transition-colors
                                    group-hover:text-cyan-300
                                  "
                                />
                              </div>

                              <span
                                className="
                                  text-sm
                                  font-medium
                                  text-slate-300
                                  transition-colors
                                  group-hover:text-white
                                "
                              >
                                {item.label}
                              </span>
                            </div>

                            <FiArrowUpRight
                              className="
                                h-4
                                w-4
                                text-slate-700
                                transition-all
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                group-hover:text-cyan-300
                              "
                            />
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Mobile CTA */}
                  <div className="grid gap-2 border-t border-white/[0.06] px-2 py-4 sm:grid-cols-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        openSponsorForm()
                        setMobileMenuOpen(false)
                      }}
                      className="
                        h-12
                        rounded-xl
                        border-blue-400/25
                        bg-white/[0.025]
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[1px]
                        text-slate-300
                        hover:border-blue-400/60
                        hover:bg-blue-500/[0.08]
                        hover:text-white
                      "
                    >
                      Sponsor Enquiry
                    </Button>

                    <Button
                      onClick={() => {
                        openDelegateForm()
                        setMobileMenuOpen(false)
                      }}
                      className="
                        h-12
                        rounded-xl
                        border
                        border-cyan-300/30
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[1px]
                        text-white
                        shadow-[0_0_25px_rgba(37,99,235,0.18)]
                      "
                    >
                      Delegate Registration
                    </Button>
                  </div>

                  {/* Mobile footer */}
                  <div className="flex items-center justify-between px-3 pb-2">
                    <span className="font-mono text-[7px] uppercase tracking-[3px] text-slate-700">
                      Leadership × Innovation × Impact
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[2px] text-blue-400/50">
                      Delhi 2026
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================================================== */}
      {/* DELEGATE FORM                                                           */}
      {/* ====================================================================== */}

      <FormModal
        open={showDelegateForm}
        onClose={closeDelegateForm}
        title="Delegate Registration"
      >
        <DelegateForm />
      </FormModal>

      {/* ====================================================================== */}
      {/* SPONSOR FORM                                                            */}
      {/* ====================================================================== */}

      <FormModal
        open={showSponsorForm}
        onClose={closeSponsorForm}
        title="Sponsor Registration"
      >
        <SponsorForm />
      </FormModal>
    </>
  )
}