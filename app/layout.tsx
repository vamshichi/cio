import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleAdsTag from '@/components/GoogleAdsTag'
import WhatsappEnquiry from '@/components/sections/WhatsappEnquiry';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CIO Tech Leadership Conference & Awards',
  description: 'Join industry leaders for insights on technology innovation, digital transformation, and executive leadership. Register for our annual conference.',
  generator: 'vamshi',
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
        type: 'image/svg+xml',
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
        <GoogleAnalytics />
        <GoogleAdsTag />
        {children}
         <WhatsappEnquiry />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
