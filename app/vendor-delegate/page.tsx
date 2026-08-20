"use client";

import { Header } from "@/components/sections/header";
import {Footer} from "@/components/sections/footer";
import RegistrationForm from "@/components/vendor-delegate/RegistrationForm";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";


export default function VendorDelegatePage() {
  return (
    <main className="bg-[#020817] text-black">
        <Header />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
       
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                Vendor Delegate Registration
              </span>

              <h1 className="mt-8 text-5xl font-black  text-white leading-tight lg:text-7xl">
                Connect With
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  India's Top CIOs
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Join CIO Tech Leadership Summit 2026 as a Vendor Delegate and
                meet CIOs, CTOs, CISOs, CDOs, and senior technology leaders from
                leading enterprises. Build valuable business relationships,
                generate qualified leads, and showcase your solutions to
                decision-makers.
              </p>

              {/* Event Info */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3 text-white">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <CalendarDays className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-400">Date</p>
                  <h3 className="mt-1 font-semibold">
                    23 July 2026
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <MapPin className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-400">Venue</p>
                  <h3 className="mt-1 font-semibold">
                    Delhi, India
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <Users className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-400">Attendees</p>
                  <h3 className="mt-1 font-semibold">
                    250+ Tech Leaders
                  </h3>
                </div>
              </div>

              {/* Buttons */}
              {/* <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#registration"
                  className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="#benefits"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  Learn More
                </a>
              </div> */}
            </div>

            {/* Right Card */}
            <div className="relative text-white">
              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold">
                    Why Become a Vendor Delegate?
                  </h2>
                  <p className="mt-3 text-slate-400">
                    Get direct access to enterprise technology decision-makers.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Users className="mt-1 h-8 w-8 text-cyan-400" />
                    <div>
                      <h4 className="font-semibold">
                        Premium Networking
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Meet CIOs, CTOs, CISOs and senior technology leaders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <BriefcaseBusiness className="mt-1 h-8 w-8 text-cyan-400" />
                    <div>
                      <h4 className="font-semibold">
                        Business Opportunities
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Generate qualified leads and build strategic
                        partnerships.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ShieldCheck className="mt-1 h-8 w-8 text-cyan-400" />
                    <div>
                      <h4 className="font-semibold">
                        Exclusive Access
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Attend keynote sessions, leadership panels and the CIO
                        Tech Leadership Awards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-cyan-500/10 p-6 text-center">
                    <h3 className="text-4xl font-black text-cyan-400">
                      250+
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      Decision Makers
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/10 p-6 text-center">
                    <h3 className="text-4xl font-black text-cyan-400">
                      100+
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      One-to-One Meetings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <RegistrationForm />
        </div>
        {/* <div>
            <Footer />
        </div> */}
      </section>
      <Footer />
    </main>
  );
}