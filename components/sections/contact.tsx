'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FormModal } from '@/components/common/FormModal'
import { DelegateForm } from '@/components/sections/DelegateForm'
import { SponsorForm } from '@/components/sections/SponsorForm'

interface FormData {
  fullName: string
  jobTitle: string
  company: string
  email: string
  phone: string
  interestedIn: string[]
  briefNote: string
  brochureConsent: boolean
  contactConsent: boolean
}

const initialForm: FormData = {
  fullName: '',
  jobTitle: '',
  company: '',
  email: '',
  phone: '',
  interestedIn: [],
  briefNote: '',
  brochureConsent: false,
  contactConsent: false,
}

const interestOptions = [
  'Attending as a Delegate',
  'Speaking Opportunities',
  'Sponsorship & Partnership',
  'Awards Participation',
  'Media Partner Opportunities',
  'I want to organise a B2B Conference for my organisation',
  'I want to organise Bespoke Roundtable for my organisation',
]

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


  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">
              Registration Open
            </span>
          </div>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            Secure Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Executive Pass
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
            Fill in your details to access the event brochure and Join India's leading CIOs, CTOs, CISOs and CDOs.

Explore AI, Cybersecurity, Cloud Innovation and Digital Transformation.

Connect with technology leaders driving enterprise growth.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {['250+ CIOs', '20+ Speakers', '20+ Partners', 'Leadership Awards', 'Executive Networking'].map((item) => (
            <div key={item} className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              {item}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 backdrop-blur-2xl">

           <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

  <div className="text-center">
    <h3 className="text-4xl font-bold text-white">
      Ready to Join CIO Tech 2026?
    </h3>

    <p className="mx-auto mt-5 max-w-2xl text-slate-300">
      Register as a delegate to network with India's leading technology executives
      or become a sponsor to showcase your brand to enterprise decision-makers.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

  <button
    className="rounded-xl border border-cyan-500/30 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
    onClick={() => {
      window.history.pushState(null, '', '#sponsorenquiry')
      setShowSponsorForm(true)
    }}
  >
    Become a Sponsor
  </button>

  <button
    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
    onClick={() => {
      window.history.pushState(null, '', '#delegateenquiry')
      setShowDelegateForm(true)
    }}
  >
    Register as Delegate
  </button>

</div>
<div className="mt-10 border-t border-white/10 pt-8">
  <p className="text-center text-sm text-slate-400">
    Need assistance with registration or sponsorship?
  </p>

  <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a
      href="mailto:info@confexmeet.com"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l9 6 9-6m-18 8h18V8l-9 6-9-6v8z"
        />
      </svg>

      info@confexmeet.com
    </a>

    <a
      href="tel:+917975429127"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.547 2.19a2 2 0 01-.502 1.93l-1.285 1.285a16 16 0 006.586 6.586l1.285-1.285a2 2 0 011.93-.502l2.19.547A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>

      +91 7975 429 127
    </a>
  </div>
</div>
  </div>

</div>
          </div>
        </div>
      </div>
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