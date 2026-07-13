"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  companyName: string;
  designation: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  companySize: string;
  message: string;
}

export default function PartnerRegistrationModal({
  open,
  onClose,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/partner-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      alert("Registration submitted successfully!");

      setForm({
        fullName: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
        website: "",
        industry: "",
        companySize: "",
        message: "",
      });

      onClose();
    } catch (error: any) {
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-md">
      <div className="flex min-h-screen justify-center py-8 px-4">

        <div className="relative w-full max-w-4xl rounded-3xl border border-cyan-400/20 bg-[#081A34] shadow-2xl">

          {/* Close */}
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

              {/* <div className="mt-6 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-sm">
                  Presenting Partner Registration
                </span>
              </div> */}

              {/* <p className="mt-6 max-w-2xl text-center text-sm leading-7 text-white/70 md:text-base">
                Thank you for your interest 
                <span className="font-semibold text-white">
                  Presenting Partner
                </span>{" "}
                 our
                   team will contact you shortly.
              </p> */}

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 md:p-10"
          >

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />

                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Company Name */}
              <div className="relative">
                <Building2
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />

                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>
                            {/* Designation */}
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
                placeholder="Designation"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition focus:border-cyan-400"
              />

              {/* Business Email */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Business Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Website */}
              <div className="relative">
                <Globe
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={18}
                />

                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="Company Website"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Industry */}
              <input
                type="text"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                placeholder="Industry"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition focus:border-cyan-400"
              />

              {/* Company Size */}
              <select
                name="companySize"
                value={form.companySize}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#0d2344] p-3 text-white outline-none transition focus:border-cyan-400"
              >
                <option value="">Company Size</option>
                <option value="1-50 Employees">1-50 Employees</option>
                <option value="51-200 Employees">51-200 Employees</option>
                <option value="201-1000 Employees">201-1000 Employees</option>
                <option value="1000+ Employees">1000+ Employees</option>
              </select>

            </div>

            {/* Message */}
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your partnership goals..."
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400"
            />

            {/* Agreement */}
            <label className="flex items-start gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-cyan-400"
              />

              <span>
                I agree to be contacted regarding the Presenting Partner
                opportunity and consent to the use of my information for this
                enquiry.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,.35)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Register Interest"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}