import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-card to-secondary/20 py-16 px-4 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-bold text-foreground text-lg">CIO Tech Leadership</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              The premier conference connecting visionary technology leaders, fostering innovation, and advancing the future of digital transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground uppercase text-xs tracking-wide">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#home" className="text-foreground/70 transition hover:text-primary font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#agenda" className="text-foreground/70 transition hover:text-primary font-medium">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="text-foreground/70 transition hover:text-primary font-medium">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 transition hover:text-primary font-medium">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground uppercase text-xs tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-foreground/70 transition hover:text-primary font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground uppercase text-xs tracking-wide">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-foreground/60">
              &copy; 2025 CIO Tech Leadership Conference. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-foreground/70 transition hover:text-primary font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                Terms
              </Link>
              <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                Accessibility
              </Link>
              <Link href="#" className="text-foreground/70 transition hover:text-primary font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
