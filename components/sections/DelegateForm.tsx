'use client'

export function DelegateForm() {
  return (
    <form className="space-y-8">

      <div>
        <h4 className="mb-5 text-xl font-semibold text-cyan-400">
          Delegate Information
        </h4>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            placeholder="Full Name *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Job Title *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Organization / Company Name *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <select className="h-14 rounded-xl border border-white/10 bg-slate-900 px-4 text-white">
            <option value="">Select Industry *</option>
            <option>BFSI</option>
            <option>Technology</option>
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Healthcare</option>
            <option>Telecom</option>
            <option>Energy</option>
            <option>Consulting</option>
            <option>Government</option>
            <option>Startup</option>
            <option>Others</option>
          </select>

          <input
            placeholder="Work Email Address *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="Mobile Number *"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white"
          />

          <input
            placeholder="LinkedIn Profile URL"
            className="h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white md:col-span-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="h-14 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white"
      >
        Register as Delegate
      </button>

    </form>
  )
}