'use client'

import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiMic,
  FiAward,
  FiMail,
  FiPhone,
  FiBriefcase,
} from 'react-icons/fi'

export function Contact() {
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
            Join India's leading CIOs, CTOs, CISOs, technology innovators,
            digital transformation leaders and industry pioneers.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {[
            '200+ CIOs',
            '20+ Speakers',
            '20+ Partners',
            'Leadership Awards',
            'Executive Networking',
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Event Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <h3 className="mb-8 text-2xl font-bold text-white">
                Event Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FiCalendar className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Date</p>
                    <p className="font-semibold text-white">
                      23 July 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FiMapPin className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Venue</p>
                    <p className="font-semibold text-white">
                      Four Seasons Hotel, Bengaluru
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FiUsers className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Delegates</p>
                    <p className="font-semibold text-white">
                      200+ CIOs & Technology Leaders
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FiMic className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Speakers</p>
                    <p className="font-semibold text-white">
                      20+ Industry Experts
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FiAward className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Awards</p>
                    <p className="font-semibold text-white">
                      CIO Leadership Excellence Awards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 backdrop-blur-2xl">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Need Assistance?
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FiMail className="text-cyan-400" />
                  <span className="text-slate-300">
                    info@ciotech.in
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FiPhone className="text-cyan-400" />
                  <span className="text-slate-300">
                    +91 98765 43210
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FiBriefcase className="text-cyan-400" />
                  <span className="text-slate-300">
                    Sponsorship & Partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <h3 className="mb-8 text-3xl font-bold text-white">
              Reserve Your Seat
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Full Name *"
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />

                <input
                  placeholder="Business Email *"
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Company *"
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />

                <input
                  placeholder="Job Title *"
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Mobile Number *"
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />

                <select className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none">
                  <option>Industry</option>
                  <option>Technology</option>
                  <option>Banking</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                </select>
              </div>

              <textarea
                rows={5}
                placeholder="Areas of Interest (AI, Cybersecurity, Cloud, Digital Transformation, Data Analytics...)"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
              />

              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,174,255,0.35)]"
              >
                Reserve My Seat
              </button>

              <p className="text-center text-xs text-slate-500">
                By registering, you agree to receive event updates and
                conference information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}