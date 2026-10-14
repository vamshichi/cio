'use client'



import { useCallback, useEffect, useState } from 'react'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { ArrowUpRight, Mail, Phone, Sparkles } from 'lucide-react'

import { Cormorant_Garamond, Manrope } from 'next/font/google'

import { FormModal } from '@/components/common/FormModal'

import { DelegateForm } from '@/components/sections/DelegateForm'

import { SponsorForm } from '@/components/sections/SponsorForm'



const display = Cormorant_Garamond({

  subsets: ['latin'],

  weight: ['500', '600', '700'],

  display: 'swap',

})



const sans = Manrope({

  subsets: ['latin'],

  weight: ['400', '500', '600', '700', '800'],

  display: 'swap',

})



const C = {

  bg: '#F5F8FB',

  surface: '#FFFFFF',

  ink: '#102746',

  muted: '#52657A',

  bronze: '#0D9488',

  bronzeDeep: '#0B6F69',

  line: '#DCE6EF',

  soft: '#EAF0F6',

}



const EASE = [0.22, 1, 0.36, 1] as const



type ContactModal = 'delegate' | 'sponsor' | null



export function Contact() {

  const [activeModal, setActiveModal] = useState<ContactModal>(null)

  const reduceMotion = useReducedMotion()



  const syncModalFromHash = useCallback(() => {

    const hash = window.location.hash

    if (hash === '#delegateenquiry') setActiveModal('delegate')

    else if (hash === '#sponsorenquiry') setActiveModal('sponsor')

    else setActiveModal(null)

  }, [])



  useEffect(() => {

    syncModalFromHash()

    window.addEventListener('hashchange', syncModalFromHash)

    return () => window.removeEventListener('hashchange', syncModalFromHash)

  }, [syncModalFromHash])



  const openModal = (kind: Exclude<ContactModal, null>) => {

    const hash = kind === 'delegate' ? '#delegateenquiry' : '#sponsorenquiry'

    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}${hash}`)

    setActiveModal(kind)

  }



  const closeModal = () => {

    window.history.pushState({}, '', `${window.location.pathname}${window.location.search}`)

    setActiveModal(null)

  }



  const reveal = reduceMotion

    ? { initial: false as const, whileInView: undefined, transition: undefined }

    : {

        initial: { opacity: 0, y: 22 },

        whileInView: { opacity: 1, y: 0 },

        transition: { duration: 0.7, ease: EASE },

      }



  return (

    <MotionConfig reducedMotion="user">

      <section

        id="contact"

        className={`${sans.className} relative isolate overflow-hidden py-20 sm:py-24 lg:py-32`}

        style={{ background: C.bg, color: C.ink }}

      >

        {/* Quiet editorial background */}

        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

          <div

            className="absolute inset-0 opacity-40"

            style={{

              backgroundImage: 'radial-gradient(#C9D8E5 0.7px, transparent 0.7px)',

              backgroundSize: '22px 22px',

              maskImage: 'linear-gradient(to bottom, black, transparent 72%)',

              WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 72%)',

            }}

          />

          <div className="absolute -right-36 -top-36 h-[420px] w-[420px] rounded-full blur-[120px]" style={{ background: 'rgba(13,148,136,0.12)' }} />

          <div className="absolute -bottom-48 -left-36 h-[460px] w-[460px] rounded-full blur-[130px]" style={{ background: 'rgba(16,39,70,0.06)' }} />

        </div>



        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">

          {/* Eyebrow */}

          <motion.div

            {...reveal}

            viewport={{ once: true, amount: 0.3 }}

            className="flex items-center gap-3"

          >

            <span className="h-px w-8" style={{ background: C.bronze }} />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.bronze }}>

              Connect · CIO Tech 2026

            </span>

          </motion.div>



          {/* Editorial introduction */}

          <div className="grid gap-8 pb-12 pt-7 sm:pb-16 sm:pt-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">

            <motion.div

              initial={reduceMotion ? false : { opacity: 0, y: 28 }}

              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.25 }}

              transition={{ duration: 0.75, ease: EASE }}

            >

              <h2 className={`${display.className} max-w-[780px] text-[58px] font-semibold leading-[0.91] tracking-[-0.045em] sm:text-[76px] lg:text-[104px]`}>

                Be part of the

                <br />

                <span className="italic" style={{ color: C.bronze }}>

                  conversation.

                </span>

              </h2>

            </motion.div>



            <motion.div

              initial={reduceMotion ? false : { opacity: 0, y: 22 }}

              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.25 }}

              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}

              className="max-w-md lg:justify-self-end lg:pb-2"

            >

              <div className="mb-5 flex items-center gap-2" style={{ color: C.bronze }}>

                <Sparkles size={15} strokeWidth={1.5} />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Where leadership connects</span>

              </div>

              <p className="text-[14px] leading-7 sm:text-[15px]" style={{ color: C.muted }}>

                Join India&apos;s leading CIOs, CTOs, CISOs and CDOs for focused conversations around AI, cybersecurity, cloud, innovation and digital transformation.

              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: C.bronze }}>

                <span>People</span><span className="h-1 w-1 rounded-full" style={{ background: C.bronze }} />

                <span>Ideas</span><span className="h-1 w-1 rounded-full" style={{ background: C.bronze }} />

                <span>Partnerships</span><span className="h-1 w-1 rounded-full" style={{ background: C.bronze }} />

                <span>Progress</span>

              </div>

            </motion.div>

          </div>



          {/* Invitation cards */}

          <motion.div

            initial={reduceMotion ? false : { opacity: 0, y: 24 }}

            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.15 }}

            transition={{ duration: 0.75, ease: EASE }}

            className="grid overflow-hidden border bg-white/80 backdrop-blur-sm md:grid-cols-2"

            style={{ borderColor: C.line }}

          >

            <article className="group relative flex min-h-[330px] flex-col items-start p-7 sm:p-10 lg:min-h-[360px] lg:p-12">

              <div className="flex w-full items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C.bronze }}>01 / Delegate</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-[#102746] group-hover:text-white" style={{ borderColor: C.line, color: C.bronze }}>

                  <ArrowUpRight size={18} strokeWidth={1.5} />

                </span>

              </div>

              <h3 className={`${display.className} mt-9 max-w-sm text-[38px] font-semibold leading-[0.98] tracking-[-0.025em] sm:text-[46px]`}>

                Secure your

                <br /> executive pass.

              </h3>

              <p className="mt-4 max-w-sm text-[13px] leading-6" style={{ color: C.muted }}>

                Attend as a delegate and connect with senior technology leaders shaping the next generation of enterprise growth.

              </p>

              <button

                type="button"

                onClick={() => openModal('delegate')}

                className="mt-auto inline-flex items-center gap-3 border px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(16,39,70,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"

                style={{ background: C.ink, borderColor: C.ink, color: '#FFFFFF' }}

              >

                Attend as delegate <ArrowUpRight size={15} />

              </button>

              <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: C.bronze }} />

            </article>



            <article className="group relative flex min-h-[330px] flex-col items-start border-t p-7 sm:p-10 md:border-l md:border-t-0 lg:min-h-[360px] lg:p-12" style={{ borderColor: C.line, background: C.soft }}>

              <div className="flex w-full items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C.bronze }}>02 / Partnership</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-[#0D9488] group-hover:text-white" style={{ borderColor: '#C9D8E5', color: C.bronze }}>

                  <ArrowUpRight size={18} strokeWidth={1.5} />

                </span>

              </div>

              <h3 className={`${display.className} mt-9 max-w-sm text-[38px] font-semibold leading-[0.98] tracking-[-0.025em] sm:text-[46px]`}>

                Put your brand

                <br /> in the room.

              </h3>

              <p className="mt-4 max-w-sm text-[13px] leading-6" style={{ color: C.muted }}>

                Showcase your solutions and build meaningful relationships with enterprise technology decision-makers.

              </p>

              <button

                type="button"

                onClick={() => openModal('sponsor')}

                className="mt-auto inline-flex items-center gap-3 border px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102746] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"

                style={{ borderColor: '#A9C4D3', color: C.ink }}

              >

                Explore partnership <ArrowUpRight size={15} />

              </button>

              <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: C.bronze }} />

            </article>

          </motion.div>



          {/* Contact details */}

          <motion.div

            initial={reduceMotion ? false : { opacity: 0, y: 18 }}

            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.2 }}

            transition={{ duration: 0.65, ease: EASE }}

            className="mt-5 grid border md:grid-cols-2"

            style={{ borderColor: C.line, background: 'rgba(255,255,255,0.55)' }}

          >

            <a href="mailto:enquiry@confexmeet.com" className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-white sm:px-7 sm:py-6">

              <span className="flex items-center gap-4">

                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: C.soft, color: C.bronze }}><Mail size={17} strokeWidth={1.5} /></span>

                <span>

                  <span className="block text-[9px] font-bold uppercase tracking-[0.16em]" style={{ color: C.muted }}>Registration & sponsorship</span>

                  <span className="mt-1 block break-all text-[13px] font-semibold sm:text-sm" style={{ color: C.ink }}>enquiry@confexmeet.com</span>

                </span>

              </span>

              <ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: C.bronze }} />

            </a>

            <a href="tel:+917975429127" className="group flex items-center justify-between gap-4 border-t p-5 transition-colors hover:bg-white md:border-l md:border-t-0 sm:px-7 sm:py-6" style={{ borderColor: C.line }}>

              <span className="flex items-center gap-4">

                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: C.soft, color: C.bronze }}><Phone size={17} strokeWidth={1.5} /></span>

                <span>

                  <span className="block text-[9px] font-bold uppercase tracking-[0.16em]" style={{ color: C.muted }}>Speak with the team</span>

                  <span className="mt-1 block text-[13px] font-semibold sm:text-sm" style={{ color: C.ink }}>+91 7975 429 127</span>

                </span>

              </span>

              <ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: C.bronze }} />

            </a>

          </motion.div>



          {/* Footer signature */}

          <div className="mt-9 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: C.line }}>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: C.bronze }}>CIO Tech · 2026</span>

            <span className="text-[10px] tracking-[0.04em]" style={{ color: C.muted }}>The intelligent enterprise era</span>

          </div>

        </div>



        <FormModal open={activeModal === 'delegate'} onClose={closeModal} title="Delegate Registration">

          <DelegateForm />

        </FormModal>

        <FormModal open={activeModal === 'sponsor'} onClose={closeModal} title="Sponsor Enquiry">

          <SponsorForm />

        </FormModal>

      </section>

    </MotionConfig>

  )

}
