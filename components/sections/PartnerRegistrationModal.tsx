"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Building2, User, Mail, Phone, Globe } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PartnerRegistrationModal({
  open,
  onClose,
}: Props) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // TODO: Call your API

    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1500);
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-md">
      <div className="min-h-screen flex justify-center py-8 px-4">

        {/* Modal */}
        <div className="relative w-full max-w-4xl rounded-3xl border border-cyan-400/20 bg-[#081A34] shadow-2xl">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Header */}
          <div className="border-b border-white/10 bg-gradient-to-r from-[#03111f] via-[#07294f] to-[#03111f] px-6 py-8 md:px-10 md:py-10">

            <div className="flex flex-col items-center">

              <Image
                src="/sponsors/np3.png"
                alt="Centric Software"
                width={220}
                height={70}
                className="h-auto w-44 object-contain md:w-56"
              />

              <div className="my-5 h-px w-20 bg-cyan-400/40" />

              <h1 className="text-3xl font-bold text-white md:text-5xl">
                VELOCITY <span className="text-cyan-400">360°</span>
              </h1>

              <p className="mt-2 text-center text-base text-cyan-300 md:text-xl">
                Executive Roundtable
              </p>

              <div className="mt-6 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Presenting Partner Registration
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-center text-sm leading-7 text-white/70 md:text-base">
                Thank you for your interest in becoming the exclusive{" "}
                <span className="font-semibold text-white">
                  Presenting Partner
                </span>{" "}
                for Velocity 360°. Complete the form below and our
                team will contact you shortly.
              </p>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 md:p-10"
          >

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />
                <input
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <Building2
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />
                <input
                  required
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <input
                required
                placeholder="Designation"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none focus:border-cyan-400"
              />

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />
                <input
                  required
                  type="email"
                  placeholder="Business Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />
                <input
                  required
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <Globe
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />
                <input
                  placeholder="Company Website"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <input
                placeholder="Industry"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none focus:border-cyan-400"
              />

              <select className="rounded-xl border border-white/10 bg-[#0d2344] p-3 text-white outline-none focus:border-cyan-400">
                <option>Company Size</option>
                <option>1–50 Employees</option>
                <option>51–200 Employees</option>
                <option>201–1000 Employees</option>
                <option>1000+ Employees</option>
              </select>

            </div>

            <textarea
              rows={5}
              placeholder="Tell us about your partnership goals..."
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-cyan-400"
            />

            <label className="flex items-start gap-3 text-sm text-white/70">
              <input type="checkbox" required className="mt-1" />
              <span>
                I agree to be contacted regarding the Presenting Partner
                opportunity.
              </span>
            </label>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,.35)] disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Register Interest"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}