'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EMGBGC1P81"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', 'G-EMGBGC1P81', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}