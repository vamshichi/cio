export function Partners() {
  const partners = [
    'TechFlow Solutions',
    'CloudSync Enterprise',
    'DataVault Systems',
    'InnovateTech',
    'SecureNet Global',
    'Digital Dynamics',
  ]

  return (
    <section className="bg-gradient-to-b from-secondary/50 to-background py-20 px-4 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wide mb-4">
            Partners & Sponsors
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Leading Organizations
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Technology leaders committed to advancing the industry
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center rounded-lg border border-border bg-card p-6 text-center transition hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg"
            >
              <p className="font-semibold text-foreground/70 group-hover:text-foreground transition text-sm leading-snug">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
