import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:text-primary/80">
          ← Back to Home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy</h1>

          <p className="mb-6 text-lg text-foreground/60">
            Last updated: June 2025
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Introduction</h2>
            <p className="mb-4 text-foreground/80">
              The CIO Tech Leadership Conference (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the CIO Tech Leadership Conference website (the &quot;Service&quot;).
            </p>
            <p className="text-foreground/80">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Information Collection and Use</h2>
            <p className="mb-4 text-foreground/80">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Types of Data Collected:</h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-foreground/80">
              <li>Personal Data: Name, email address, company, job title, and any other information you provide</li>
              <li>Usage Data: Information about how you access and use the Service</li>
              <li>Tracking Cookies: For analytics and user experience optimization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Use of Data</h2>
            <p className="mb-4 text-foreground/80">
              CIO Tech Leadership Conference uses the collected data for various purposes:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground/80">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To respond to your inquiries and requests</li>
              <li>To analyze usage patterns and improve our Service</li>
              <li>To send marketing, promotional communications (with your consent)</li>
              <li>To detect, prevent and address fraud and other illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Security of Data</h2>
            <p className="text-foreground/80">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="mb-2 text-foreground/80">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground/80">
              Email: privacy@ciotechleadership.com
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
