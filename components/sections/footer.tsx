import Image from 'next/image'
import Link from 'next/link'
import {
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="border-t border-slate-250 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo & About */}
          <div>
            <Image
              src="/logo.png"
              alt="CIO Leadership Summit"
              width={220}
              height={60}
              className="h-14 w-auto"
            />

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Bringing together CIOs, CTOs, CISOs and technology leaders to
              explore innovation, AI and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-slate-600 hover:text-indigo-600">
                  About
                </Link>
              </li>

              <li>
                <Link href="#agenda" className="text-slate-600 hover:text-indigo-600">
                  Agenda
                </Link>
              </li>

              <li>
                <Link href="#speakers" className="text-slate-600 hover:text-indigo-600">
                  Speakers
                </Link>
              </li>

              <li>
                <Link href="#sponsors" className="text-slate-600 hover:text-indigo-600">
                  Sponsors
                </Link>
              </li>

              <li>
                <Link href="#contact" className="text-slate-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-250 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                <FiLinkedin size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-250 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                <FiTwitter size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-250 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-250 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                <FiFacebook size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-250 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 CIO Leadership Summit. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}