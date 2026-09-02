import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleAdsTag from '@/components/GoogleAdsTag'
import WhatsappEnquiry from '@/components/sections/WhatsappEnquiry'
import MicrosoftClarity from '@/components/MicrosoftClarity'
import GoogleTagManager from "@/components/GoogleTagManager";

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ciotech.in'),

  alternates: {
    canonical: '/',
  },

  title: 'CIO Tech Leadership Conference & Awards Delhi 2026',
  
  description:
    'Join 250+ CIOs, CTOs, CISOs & technology leaders at CIO Tech Leadership Conference & Awards Delhi 2026. Explore AI, cybersecurity, cloud & digital transformation',

  generator: 'vamshi',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        <GoogleTagManager />
        <GoogleAnalytics />
        <GoogleAdsTag />
        <MicrosoftClarity />

        {children}

        <WhatsappEnquiry />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}