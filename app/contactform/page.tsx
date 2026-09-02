"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    phone: "",
    email: "",
    type: "",
    note: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      // Registration successful
      setSubmitted(true)

      // Clear form
      setFormData({
        name: "",
        company: "",
        designation: "",
        phone: "",
        email: "",
        type: "",
        note: "",
      })
    } catch (err) {
      console.error("Form submission error:", err)

      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  // Thank You Card
  if (submitted) {
    return (
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-10 text-center shadow-2xl md:p-16">

            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,255,0.15),transparent_65%)]" />

            <div className="relative">

              {/* Success Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-400/30">
                <svg
                  className="h-10 w-10 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Thank You!
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Your enquiry has been successfully submitted.
                Our team will get in touch with you shortly.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">
                  We have also sent a confirmation email to
                </p>

                <p className="mt-1 font-semibold text-cyan-400">
                  {formData.email}
                </p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Get in Touch
          </h2>

          <p className="mt-3 text-gray-400">
            Interested in participating or sponsoring our event?
            Fill in your details and our team will get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Company *
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Designation *
              </label>

              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g. CIO, CTO, Director"
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email ID *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Interested As */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Interested As *
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled className="bg-black">
                  Select an option
                </option>

                <option value="delegate" className="bg-black">
                  Delegate
                </option>

                <option value="sponsor" className="bg-black">
                  Sponsor
                </option>
              </select>
            </div>

            {/* Note */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-white">
                Note
              </label>

              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us how we can help you..."
                disabled={loading}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <svg
                  className="mr-2 h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>

                Submitting...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </button>
        </form>
      </div>
    </section>
  )
}