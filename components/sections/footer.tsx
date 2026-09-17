import Image from 'next/image'
import Link from 'next/link'
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from 'react-icons/fi'

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
    <footer className="relative overflow-hidden border-t border-[#D9E3E8] bg-white text-[#071A2C]">
      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
          }}
        />

        <div className="absolute right-[-180px] top-[-240px] h-[520px] w-[520px] rounded-full border border-[#176B9C]/[0.07]" />
        <div className="absolute right-[-100px] top-[-160px] h-[360px] w-[360px] rounded-full border border-[#176B9C]/[0.05]" />
        <div className="absolute bottom-[-260px] left-[-180px] h-[520px] w-[520px] rounded-full border border-[#E6EDF2]" />

        <div className="absolute right-[12%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#176B9C]/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            TOP IDENTIFIER
        ========================================================= */}
        <div className="flex items-center justify-between border-b border-[#D9E3E8] py-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC] shadow-[0_0_12px_rgba(85,199,220,0.8)]" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.24em] text-[#607484] sm:text-[9px]">
              CIO Tech / 2026
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#91A1AD] sm:text-[9px]">
            Footer / 05
          </span>
        </div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================= */}
        <div className="grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.35fr_0.55fr_0.7fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div>
            <div className="inline-flex min-h-[58px] items-center rounded-xl border border-[#D9E3E8] bg-white px-4 py-3 shadow-[0_8px_25px_rgba(8,36,59,0.06)]">
              <Image
                src="/logo.png"
                alt="CIO Leadership Summit"
                width={220}
                height={60}
                className="h-auto w-[190px] object-contain sm:w-[215px]"
              />
            </div>

            <p className="mt-7 max-w-xl text-[13px] leading-6 text-[#607484] sm:text-[14px] sm:leading-7">
              Bringing together CIOs, CTOs, CISOs and technology leaders to
              explore innovation, AI and digital transformation — and the
              ideas shaping the future of enterprise technology.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#55C7DC]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#91A1AD]">
                People × Ideas × Partnerships × Progress
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#176B9C]">
              Navigate
            </p>

            <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#08243B]">
              Quick links
            </h3>

            <nav className="mt-6">
              <ul className="space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border-b border-[#E6EDF2] py-3 transition-colors hover:border-[#176B9C]/25"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[7px] text-[#91A1AD]">
                          0{index + 1}
                        </span>

                        <span className="text-[12px] text-[#607484] transition-colors group-hover:text-[#08243B]">
                          {link.label}
                        </span>
                      </span>

                      <FiArrowUpRight
                        className="h-3.5 w-3.5 text-[#91A1AD] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#176B9C]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#176B9C]">
              Stay connected
            </p>

            <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#08243B]">
              Follow the conversation.
            </h3>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow CIO Tech on ${label}`}
                  className="group flex h-11 w-11 items-center justify-center border border-[#D9E3E8] bg-[#F8FAFC] text-[#607484] transition-all duration-300 hover:-translate-y-1 hover:border-[#176B9C]/35 hover:bg-[#176B9C]/[0.05] hover:text-[#176B9C]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p className="mt-7 max-w-xs font-mono text-[7px] uppercase leading-5 tracking-[0.15em] text-[#91A1AD]">
              Updates · Speakers · Partnerships · Event moments
            </p>
          </div>
        </div>

        {/* =========================================================
            CONTACT / EVENT STRIP
        ========================================================= */}
        <div className="grid border-y border-[#D9E3E8] md:grid-cols-3">
          <div className="px-1 py-6 sm:px-5">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
              Community
            </p>
            <p className="mt-2 text-[12px] text-[#607484]">
              CIO · CTO · CISO · CDO
            </p>
          </div>

          <div className="border-t border-[#D9E3E8] px-1 py-6 sm:px-5 md:border-l md:border-t-0">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
              Registration
            </p>
            <a
              href="mailto:enquiry@confexmeet.com"
              className="mt-2 inline-block text-[12px] text-[#607484] transition-colors hover:text-[#176B9C]"
            >
              enquiry@confexmeet.com
            </a>
          </div>

          <div className="border-t border-[#D9E3E8] px-1 py-6 sm:px-5 md:border-l md:border-t-0">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
              Enquiries
            </p>
            <a
              href="tel:+917975429127"
              className="mt-2 inline-block text-[12px] text-[#607484] transition-colors hover:text-[#176B9C]"
            >
              +91 7975 429 127
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
            © 2026 CIO Leadership Summit. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
              Technology
            </span>
            <span className="h-px w-5 bg-[#D9E3E8]" />
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#176B9C]/60">
              Leadership
            </span>
            <span className="h-px w-5 bg-[#D9E3E8]" />
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#91A1AD]">
              Progress
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
