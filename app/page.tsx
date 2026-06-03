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
import { Gallery } from '@/components/sections/Gallery'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Agenda />
        <Speakers />
        <Partners />
        <Sponsors />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
