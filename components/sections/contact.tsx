 'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FormModal } from '@/components/common/FormModal'
import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'

export function Contact() {
  const [showDelegateForm, setShowDelegateForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)

  useEffect(() => {
    const hash = window.location.hash

    if (hash === '#delegateenquiry') {
      setShowDelegateForm(true)
    }

    if (hash === '#sponsorenquiry') {
      setShowSponsorForm(true)
    }
  }, [])

  const openDelegate = () => {
    window.history.pushState(null, '', '#delegateenquiry')
    setShowDelegateForm(true)
  }

  const openSponsor = () => {
    window.history.pushState(null, '', '#sponsorenquiry')
    setShowSponsorForm(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061522] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =========================================================
          ARCHITECTURAL BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '82px 82px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 88%)',
          }}
        />

        <div className="absolute -left-48 top-[-180px] h-[520px] w-[520px] rounded-full border border-[#55C7DC]/[0.06]" />
        <div className="absolute -right-52 bottom-[-220px] h-[600px] w-[600px] rounded-full border border-[#55C7DC]/[0.06]" />

        <div className="absolute left-[-100px] top-[30%] h-[300px] w-[300px] rounded-full bg-[#176B9C]/10 blur-[130px]" />
        <div className="absolute right-[-100px] top-[10%] h-[300px] w-[300px] rounded-full bg-[#55C7DC]/10 blur-[130px]" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="border-b border-white/10 pb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC] shadow-[0_0_12px_rgba(85,199,220,0.8)]" />
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-[9px]">
                Connect / CIO Tech 2026
              </span>
            </div>

       
          </div>
        </motion.div>

        {/* =========================================================
            MAIN INTRO
        ========================================================= */}
        <div className="grid gap-12 py-14 sm:py-18 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.24em] text-[#55C7DC]">
              The next conversation starts here
            </p>

            <h2 className="mt-5 max-w-4xl text-[48px] font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-[66px] lg:text-[86px]">
              Be part of the
              <br />
              <span className="text-[#7DD3E7]">conversation.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="max-w-xl text-[14px] leading-6 text-white/52 sm:text-[15px] sm:leading-7">
              Join India&apos;s leading CIOs, CTOs, CISOs and CDOs for focused
              conversations around AI, cybersecurity, cloud, innovation and
              digital transformation.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#55C7DC]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                People × Ideas × Partnerships × Progress
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            EXECUTIVE STATS
        ========================================================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid border-y border-white/10 sm:grid-cols-4"
        >
          {[
            ['200+', 'CIOs / CTOs / CISOs'],
            ['20+', 'Industry Speakers'],
            ['20+', 'Partners'],
            ['100+', 'Pre-scheduled Meetings'],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`px-1 py-6 sm:px-6 sm:py-7 ${
                index !== 0
                  ? 'border-t border-white/10 sm:border-l sm:border-t-0'
                  : ''
              }`}
            >
              <p className="text-[36px] font-semibold leading-none tracking-[-0.065em] text-white sm:text-[43px]">
                {number}
              </p>

              <p className="mt-2 max-w-[170px] font-mono text-[7px] uppercase tracking-[0.16em] text-[#7DD3E7]">
                {label}
              </p>
            </div>
          ))}
        </motion.div> */}

        {/* =========================================================
            ACTION PANEL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1fr_0.72fr]">
            {/* Delegate */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full border border-[#55C7DC]/10" />
              <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full border border-white/[0.05]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#55C7DC]">
                    01 / Delegate
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#55C7DC]/20 bg-[#55C7DC]/[0.06] font-mono text-[9px] text-[#55C7DC]">
                    01
                  </span>
                </div>

                <h3 className="mt-10 max-w-xl text-[34px] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[45px]">
                  Secure your
                  <br />
                  <span className="text-[#7DD3E7]">executive pass.</span>
                </h3>

                <p className="mt-5 max-w-xl text-[13px] leading-6 text-white/45 sm:text-[14px]">
                  Attend as a delegate and connect with senior technology
                  leaders shaping the next generation of enterprise growth.
                </p>

                <button
                  type="button"
                  onClick={openDelegate}
                  className="group mt-8 inline-flex min-w-[225px] items-center justify-between gap-8 rounded-none border border-[#55C7DC]/30 bg-[#55C7DC]/[0.07] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#55C7DC] hover:bg-[#55C7DC]/[0.13]"
                >
                  <span>Attend as Delegate</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#55C7DC]/10 text-[#55C7DC] transition-transform duration-300 group-hover:rotate-45">
                    <span className="text-base">↗</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Sponsor */}
            <div className="relative border-t border-white/10 bg-white/[0.018] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                    02 / Partnership
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-mono text-[9px] text-white/35">
                    02
                  </span>
                </div>

                <h3 className="mt-10 max-w-md text-[31px] font-semibold leading-[0.97] tracking-[-0.05em] text-white sm:text-[39px]">
                  Put your brand
                  <br />
                  <span className="text-[#7DD3E7]">in the room.</span>
                </h3>

                <p className="mt-5 max-w-md text-[13px] leading-6 text-white/45">
                  Showcase your solutions and build relationships with
                  enterprise technology decision-makers.
                </p>

                <button
                  type="button"
                  onClick={openSponsor}
                  className="group mt-8 inline-flex min-w-[210px] items-center justify-between gap-7 border border-white/15 bg-white/[0.035] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#55C7DC]/50 hover:bg-[#55C7DC]/[0.07]"
                >
                  <span>Become a Sponsor</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#55C7DC] transition-transform duration-300 group-hover:rotate-45">
                    <span className="text-base">↗</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CONTACT STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-8 grid border-y border-white/10 md:grid-cols-2"
        >
          <a
            href="mailto:enquiry@confexmeet.com"
            className="group flex items-center justify-between gap-5 px-1 py-6 transition-colors hover:bg-white/[0.025] md:px-6"
          >
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
                Registration / Sponsorship
              </p>
              <p className="mt-2 text-[14px] font-medium text-white sm:text-[15px]">
                enquiry@confexmeet.com
              </p>
            </div>

            <span className="font-mono text-[9px] text-[#55C7DC] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="tel:+917975429127"
            className="group flex items-center justify-between gap-5 border-t border-white/10 px-1 py-6 transition-colors hover:bg-white/[0.025] md:border-l md:border-t-0 md:px-6"
          >
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
                Speak with the team
              </p>
              <p className="mt-2 text-[14px] font-medium text-white sm:text-[15px]">
                +91 7975 429 127
              </p>
            </div>

            <span className="font-mono text-[9px] text-[#55C7DC] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
            CIO TECH / 2026
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
            The intelligent enterprise era
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
            END / CONTACT
          </span>
        </div>
      </div>

      {/* =========================================================
          MODALS
      ========================================================= */}
      <FormModal
        open={showDelegateForm}
        onClose={() => {
          window.history.pushState({}, '', window.location.pathname)
          setShowDelegateForm(false)
        }}
        title="Delegate Registration"
      >
        <DelegateForm />
      </FormModal>

      <FormModal
        open={showSponsorForm}
        onClose={() => {
          window.history.pushState({}, '', window.location.pathname)
          setShowSponsorForm(false)
        }}
        title="Sponsor Enquiry"
      >
        <SponsorForm />
      </FormModal>
    </section>
  )
}
