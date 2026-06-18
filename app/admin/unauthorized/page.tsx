'use client'

import Link from 'next/link'
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react'

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-10 text-center shadow-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <ShieldAlert
            size={40}
            className="text-red-500"
          />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-white">
          403
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Access Denied
        </h2>

        <p className="mt-4 text-slate-400">
          You do not have permission to access this
          page.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Contact your Super Admin if you believe
          this is a mistake.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white/5"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            href="/admin"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-white transition hover:bg-cyan-600"
          >
            <Home size={18} />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}