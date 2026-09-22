import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Manrope } from 'next/font/google'
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from 'react-icons/fi'

/* =========================================================
   DESIGN TOKENS — light, matching the event mark
========================================================= */

const COLORS = {
  paper: '#FFFFFF',
  paperDeep: '#F5F8FA',
  navy: '#132D63',
  teal: '#1C7F72',
  tealDeep: '#0F5850',
  slate: '#5C6B72',
  line: '#E4EAEC',
}

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export function Footer() {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cio-tech-conference-awards/',
      icon: FiLinkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/cio_tech_conference_awards/',
      icon: FiInstagram,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/CioTechConferenceAwards',
      icon: FiFacebook,
    },
  ]

  return (
    <footer className={`${sans.className} relative border-t`} style={{ borderColor: COLORS.line, background: COLORS.paper }}>
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}
        <div className="grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.3fr_0.55fr_0.65fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="CIO Leadership Summit"
              width={220}
              height={60}
              className="h-auto w-[180px] object-contain"
            />

            <p className="mt-6 max-w-md text-[14px] leading-[1.7]" style={{ color: COLORS.slate }}>
              Bringing together CIOs, CTOs, CISOs and technology leaders to
              explore innovation, AI and digital transformation — and the
              ideas shaping the future of enterprise technology.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-[6px] w-[6px] rotate-45" style={{ background: COLORS.teal }} />
              <span className="text-[12px]" style={{ color: COLORS.slate }}>
                People &middot; Ideas &middot; Partnerships &middot; Progress
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={`${display.className} text-[16px] font-semibold`} style={{ color: COLORS.navy }}>
              Quick links
            </h3>

            <nav className="mt-5">
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border-b py-3 transition-colors"
                      style={{ borderColor: COLORS.line }}
                    >
                      <span className="text-[13.5px] transition-colors" style={{ color: COLORS.slate }}>
                        {link.label}
                      </span>

                      <FiArrowUpRight
                        className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: COLORS.teal }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className={`${display.className} text-[16px] font-semibold`} style={{ color: COLORS.navy }}>
              Follow the conversation
            </h3>

            <p className="mt-2 text-[13px] leading-[1.6]" style={{ color: COLORS.slate }}>
              Updates, speakers, partnerships and event moments.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow CIO Tech on ${label}`}
                  className="group flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor: COLORS.line, color: COLORS.slate, background: COLORS.paperDeep }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            CONTACT STRIP
        ==================================================== */}
        <div className="grid border-y md:grid-cols-3" style={{ borderColor: COLORS.line }}>
          <div className="px-1 py-6 sm:px-5">
            <p className="text-[11px] uppercase tracking-[0.06em]" style={{ color: COLORS.slate }}>
              Community
            </p>
            <p className="mt-1.5 text-[13px]" style={{ color: COLORS.navy }}>
              CIO &middot; CTO &middot; CISO &middot; CDO
            </p>
          </div>

          <div className="border-t px-1 py-6 sm:px-5 md:border-l md:border-t-0" style={{ borderColor: COLORS.line }}>
            <p className="text-[11px] uppercase tracking-[0.06em]" style={{ color: COLORS.slate }}>
              Registration
            </p>
            <a
              href="mailto:enquiry@confexmeet.com"
              className="mt-1.5 inline-block text-[13px] transition-colors hover:opacity-70"
              style={{ color: COLORS.navy }}
            >
              enquiry@confexmeet.com
            </a>
          </div>

          <div className="border-t px-1 py-6 sm:px-5 md:border-l md:border-t-0" style={{ borderColor: COLORS.line }}>
            <p className="text-[11px] uppercase tracking-[0.06em]" style={{ color: COLORS.slate }}>
              Enquiries
            </p>
            <a
              href="tel:+917975429127"
              className="mt-1.5 inline-block text-[13px] transition-colors hover:opacity-70"
              style={{ color: COLORS.navy }}
            >
              +91 7975 429 127
            </a>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}
        <div className="flex flex-col gap-3 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12px]" style={{ color: COLORS.slate }}>
            &copy; 2026 CIO Leadership Summit. All rights reserved.
          </p>

          <p className="text-[12px]" style={{ color: COLORS.slate }}>
            Technology &middot; Leadership &middot; Progress
          </p>
        </div>
      </div>
    </footer>
  )
}