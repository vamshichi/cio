'use client'

import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Agenda } from '@/components/sections/agenda'
import { Speakers } from '@/components/sections/speakers'
import { Partners } from '@/components/sections/partners'
import { Awards } from '@/components/sections/awards'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Sponsors } from '@/components/sections/sponsors'
// import { Gallery } from '@/components/sections/Gallery'
import AssociationPartners from '@/components/sections/associationPartners'
import ChiefGuestSection from '@/components/sections/ChiefGuestSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChiefGuestSection />
        <About />
        <Agenda />
        <Speakers />
        <Partners />
        <AssociationPartners />
        <Sponsors />
        <Awards />
        {/* <Gallery /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
