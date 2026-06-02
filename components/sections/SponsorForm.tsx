'use client'

export function SponsorForm() {
  return (
    <form className="space-y-8">

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Sponsor Information
        </h4>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            placeholder="Company Name *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Company Website *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Contact Person *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Designation *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Business Email *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Mobile Number *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />
        </div>

        <textarea
          rows={4}
          placeholder="Tell us about your company..."
          className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
        />
      </div>

      <button
        type="submit"
        className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white"
      >
        Submit Sponsorship Enquiry
      </button>

    </form>
  )
}