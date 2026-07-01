import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817] text-white">
      {/* Background Glow */}
      {/* <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo & About */}
          {/* <div>
            <img
              src="/logo.png"
              alt="CIO Tech"
              className="h-14 w-auto"
            />

            <p className="mt-6 text-sm leading-7 text-slate-400">
              CIO Tech Leadership Summit is India's premier gathering of CIOs,
              CTOs, CISOs, CDOs and technology leaders, connecting enterprise
              decision-makers with leading technology solution providers.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link href="/">
                  <span className="transition hover:text-cyan-400">
                    Home
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <span className="transition hover:text-cyan-400">
                    About Event
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/agenda">
                  <span className="transition hover:text-cyan-400">
                    Agenda
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/speakers">
                  <span className="transition hover:text-cyan-400">
                    Speakers
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/partners">
                  <span className="transition hover:text-cyan-400">
                    Partners
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <span className="transition hover:text-cyan-400">
                    Contact
                  </span>
                </Link>
              </li>

            </ul>
          </div> */}

          {/* Vendor */}
          {/* <div>
            <h3 className="mb-6 text-lg font-semibold">
              Registration
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link href="/delegate-registration">
                  <span className="transition hover:text-cyan-400">
                    Vendor Delegate
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/sponsor">
                  <span className="transition hover:text-cyan-400">
                    Become a Sponsor
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/awards">
                  <span className="transition hover:text-cyan-400">
                    Award Nomination
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <span className="transition hover:text-cyan-400">
                    Partnership Enquiry
                  </span>
                </Link>
              </li>

            </ul>
          </div> */}

          {/* Contact */}
          {/* <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <Mail className="mt-1 text-cyan-400" size={18} />

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:info@confexmeet.com"
                    className="hover:text-cyan-400"
                  >
                    info@confexmeet.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 text-cyan-400" size={18} />

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+917975429127"
                    className="hover:text-cyan-400"
                  >
                    +91 79754 29127
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="mt-1 text-cyan-400" size={18} />

                <div>
                  <p className="text-sm text-slate-500">
                    Website
                  </p>

                  <a
                    href="https://www.ciotech.in"
                    target="_blank"
                    className="hover:text-cyan-400"
                  >
                    www.ciotech.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 text-cyan-400" size={18} />

                <div>
                  <p className="text-sm text-slate-500">
                    Event Venue
                  </p>

                  <p className="text-slate-300">
                    Four Seasons Hotel,
                    <br />
                    Bengaluru, India
                  </p>
                </div>
              </div>

            </div>

          </div> */}

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} CIO Tech Leadership Summit. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}