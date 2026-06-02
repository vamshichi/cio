'use client'

import Marquee from 'react-fast-marquee'

const logos = [
  {
    name: 'Microsoft',
    logo: '/logos/microsoft.svg',
  },
  {
    name: 'AWS',
    logo: '/logos/aws.svg',
  },
  {
    name: 'Google Cloud',
    logo: '/logos/google-cloud.svg',
  },
  {
    name: 'Oracle',
    logo: '/logos/oracle.svg',
  },
  {
    name: 'IBM',
    logo: '/logos/ibm.svg',
  },
  {
    name: 'Cisco',
    logo: '/logos/cisco.svg',
  },
  {
    name: 'Dell',
    logo: '/logos/dell.svg',
  },
  {
    name: 'SAP',
    logo: '/logos/sap.svg',
  },
]

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden">

      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
          Trusted By Industry Leaders
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          Technology Ecosystem Partners
        </h3>
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent" />

      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="
              mx-6
              flex
              h-28
              w-64
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-white/10
            "
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-10 object-contain opacity-80 transition-all duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}