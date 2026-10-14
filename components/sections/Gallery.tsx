'use client'



import Image from 'next/image'

import { useCallback, useEffect, useRef, useState } from 'react'

import { motion, useReducedMotion } from 'framer-motion'

import {

  ArrowLeft,

  ArrowRight,

  Maximize2,

  Pause,

  Play,

  X,

} from 'lucide-react'



type Edition = 'first' | 'second'



type GalleryImage = {

  src: string

  title: string

  location: string

  ratio: 'wide' | 'tall'

}



const firstEditionImages: GalleryImage[] = [

  { src: '/gallery/g1.webp', title: 'The room comes alive', location: 'Main stage', ratio: 'wide' },

  { src: '/gallery/g2.webp', title: 'Ideas in the spotlight', location: 'Keynote theatre', ratio: 'tall' },

  { src: '/gallery/g3.webp', title: 'Between sessions', location: 'The commons', ratio: 'tall' },

  { src: '/gallery/g4.webp', title: 'Every detail matters', location: 'Arrival desk', ratio: 'tall' },

]



const secondEditionImages: GalleryImage[] = [

  { src: '/gallery/second/s3.webp', title: 'A new beginning', location: 'Main stage', ratio: 'wide' },

  { src: '/gallery/second/s5.webp', title: 'The next perspective', location: 'Keynote theatre', ratio: 'tall' },

  { src: '/gallery/second/s1.webp', title: 'New connections', location: 'The commons', ratio: 'tall' },

  { src: '/gallery/second/s4.webp', title: 'Made for the moment', location: 'Arrival desk', ratio: 'tall' },

]



const editionCopy: Record<Edition, { label: string; date: string; eyebrow: string; number: string }> = {

  first: { label: 'First edition', date: 'Mumbai · 2026', eyebrow: 'Where it began', number: '01' },

  second: { label: 'Second edition', date: 'Bengaluru · 2026', eyebrow: 'The next chapter', number: '02' },

}



const EASE = [0.22, 1, 0.36, 1] as const



export default function GallerySection() {

  const [edition, setEdition] = useState<Edition>('first')

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const [isPaused, setIsPaused] = useState(false)

  const galleryRef = useRef<HTMLDivElement | null>(null)

  const animationRef = useRef<number | null>(null)

  const reduceMotion = useReducedMotion()



  const images = edition === 'first' ? firstEditionImages : secondEditionImages

  const copy = editionCopy[edition]



  const handleEditionChange = useCallback((nextEdition: Edition) => {

    setEdition(nextEdition)

    setActiveIndex(null)

    setIsPaused(false)

    requestAnimationFrame(() => {

      if (galleryRef.current) galleryRef.current.scrollLeft = 0

    })

  }, [])



  useEffect(() => {

    const container = galleryRef.current

    if (!container || reduceMotion) return



    let lastTime = performance.now()

    const speed = 0.026



    const animate = (currentTime: number) => {

      const delta = currentTime - lastTime

      lastTime = currentTime



      if (!isPaused && container.matches(':hover') === false) {

        container.scrollLeft += delta * speed

        const halfWidth = container.scrollWidth / 2

        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {

          container.scrollLeft -= halfWidth

        }

      }



      animationRef.current = requestAnimationFrame(animate)

    }



    animationRef.current = requestAnimationFrame(animate)

    return () => {

      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)

    }

  }, [edition, isPaused, reduceMotion])



  const scrollGallery = (direction: 'left' | 'right') => {

    const container = galleryRef.current

    if (!container) return

    setIsPaused(true)

    container.scrollBy({ left: direction === 'right' ? 420 : -420, behavior: 'smooth' })

  }



  useEffect(() => {

    if (activeIndex === null) return



    const handleKeyDown = (event: KeyboardEvent) => {

      if (event.key === 'Escape') setActiveIndex(null)

      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? 0 : (current + 1) % images.length)

      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? images.length - 1 : (current - 1 + images.length) % images.length)

    }



    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)

    return () => {

      document.body.style.overflow = previousOverflow

      window.removeEventListener('keydown', handleKeyDown)

    }

  }, [activeIndex, images.length])



  return (

    <main id="past-events" className="relative isolate overflow-hidden bg-[#F5F8FB] text-[#102746]">

      {/* Quiet editorial background */}

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

        <div

          className="absolute inset-0 opacity-40"

          style={{

            backgroundImage: 'linear-gradient(rgba(13,148,136,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.055) 1px, transparent 1px)',

            backgroundSize: '76px 76px',

            maskImage: 'linear-gradient(to bottom, black, transparent 78%)',

          }}

        />

        <div className="absolute -left-48 -top-48 h-[480px] w-[480px] rounded-full bg-[#0D9488]/20 blur-[120px]" />

        <div className="absolute -right-48 top-[420px] h-[520px] w-[520px] rounded-full bg-[#EAF0F6]/35 blur-[130px]" />

      </div>



      <section className="relative z-10 mx-auto max-w-[1440px] px-5 pb-20 pt-7 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">

        <header className="flex items-center justify-between border-b border-[#DCE5EE] pb-5">

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-[#9A8050]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0D9488] sm:text-[10px]">Past events / 2026</span>

          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#718096] sm:block">CIO Tech Leadership Conference & Awards</span>

        </header>



        {/* Hero */}

        <div className="relative flex flex-col items-center py-16 text-center sm:py-20 lg:py-24">

          <div className="mb-6 flex items-center gap-3">

            <span className="h-px w-8 bg-[#0D9488]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0D9488] sm:text-[10px]">{copy.eyebrow} · visual archive</p>

            <span className="h-px w-8 bg-[#0D9488]" />

          </div>



          <motion.h1

            initial={reduceMotion ? false : { opacity: 0, y: 22 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.8, ease: EASE }}

            className="max-w-5xl text-balance text-[clamp(3.2rem,8vw,7.6rem)] font-medium leading-[0.88] tracking-[-0.075em]"

          >

            Moments that

            <br />

            <span className="font-serif italic font-normal text-[#0B6F69]">stay with you.</span>

          </motion.h1>



          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-7 text-[#53657A] sm:mt-8 sm:text-lg">

            A visual journey through the people, ideas and conversations that bring the CIO Tech community together.

          </p>



          {/* Edition selector */}

          <div className="mt-10 w-full max-w-[700px] sm:mt-14">

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {(['first', 'second'] as Edition[]).map((item) => {

                const itemCopy = editionCopy[item]

                const active = edition === item

                return (

                  <button

                    key={item}

                    type="button"

                    role="tab"

                    aria-selected={active}

                    onClick={() => handleEditionChange(item)}

                    className={`group relative overflow-hidden rounded-sm border p-4 text-left transition-all duration-300 sm:p-5 ${active ? 'border-[#102746] bg-[#102746] text-[#F5F8FB] shadow-[0_18px_40px_rgba(16,39,70,0.12)]' : 'border-[#DCE5EE] bg-white/70 text-[#102746] hover:border-[#0D9488] hover:bg-white'}`}

                  >

                    <div className="flex items-center justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <span className={`flex h-10 w-10 items-center justify-center rounded-full border text-[10px] ${active ? 'border-[#5AAFA5]/60 text-[#5EEAD4]' : 'border-[#DCE5EE] text-[#0D9488]'}`}>{itemCopy.number}</span>

                        <div>

                          <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${active ? 'text-[#5EEAD4]' : 'text-[#0D9488]'}`}>{itemCopy.label}</p>

                          <p className={`mt-1 text-sm ${active ? 'text-white' : 'text-[#53657A]'}`}>{itemCopy.date}</p>

                        </div>

                      </div>

                      <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${active ? 'text-[#5EEAD4]' : 'text-[#0D9488]'}`} />

                    </div>

                    {active && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0D9488]" />}

                  </button>

                )

              })}

            </div>

          </div>

        </div>



        {/* Gallery heading */}

        <div className="mb-6 flex flex-col gap-4 border-b border-[#DCE5EE] pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="h-px w-7 bg-[#0D9488]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0D9488]">{copy.label} · {copy.date}</span>

            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">Inside the experience<span className="text-[#0D9488]">.</span></h2>

          </div>

          <button

            type="button"

            onClick={() => setIsPaused((current) => !current)}

            className="flex w-fit items-center gap-2 rounded-full border border-[#DCE5EE] bg-white/80 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#53657A] transition hover:border-[#0D9488] hover:text-[#0D9488]"

            aria-label={isPaused ? 'Play gallery auto-scroll' : 'Pause gallery auto-scroll'}

          >

            {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}

            {isPaused ? 'Play gallery' : 'Pause gallery'}

          </button>

        </div>



        {/* Auto-scrolling gallery */}

        <div className="relative -mx-5 sm:-mx-8 lg:-mx-12" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#F5F8FB] to-transparent sm:w-20 lg:w-32" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-[#F5F8FB] to-transparent sm:w-20 lg:w-32" />



          <div ref={galleryRef} className="flex overflow-x-hidden py-4 pl-5 sm:pl-8 lg:pl-12" aria-label="Event photo gallery">

            {[0, 1].map((setIndex) => (

              <div key={setIndex} className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">

                {images.map((image, index) => (

                  <GalleryCard

                    key={`${setIndex}-${image.src}`}

                    image={image}

                    index={index}

                    onClick={() => setActiveIndex(index)}

                  />

                ))}

              </div>

            ))}

          </div>

        </div>



        {/* Gallery controls */}

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0D9488]" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-[#718096]">{reduceMotion ? 'Manual gallery' : 'A moving archive'}</span>

          </div>

          <div className="flex items-center gap-2">

            <button type="button" onClick={() => scrollGallery('left')} aria-label="Previous gallery image" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EE] bg-white text-[#53657A] transition hover:border-[#102746] hover:bg-[#102746] hover:text-white"><ArrowLeft className="h-4 w-4" /></button>

            <button type="button" onClick={() => scrollGallery('right')} aria-label="Next gallery image" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5EE] bg-white text-[#53657A] transition hover:border-[#102746] hover:bg-[#102746] hover:text-white"><ArrowRight className="h-4 w-4" /></button>

          </div>

        </div>



        {/* Signature */}

        {/* <div className="mt-16 flex flex-col items-center gap-4 border-t border-[#DCE5EE] pt-12 text-center sm:mt-20 sm:pt-16">

          <span className="h-px w-10 bg-[#0D9488]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0D9488]">More than events. Lasting impact.</p>

          <p className="max-w-lg text-sm leading-6 text-[#53657A]">Every edition creates a new chapter of conversations, connections and ideas.</p>

        </div> */}

      </section>



      {/* Full-screen lightbox */}

      {activeIndex !== null && (

        <div

          role="dialog"

          aria-modal="true"

          aria-label="Gallery image viewer"

          onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null) }}

          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071A34]/95 p-4 backdrop-blur-xl sm:p-8"

        >

          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"><X className="h-5 w-5" /></button>

          <button type="button" aria-label="Previous image" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15 sm:left-8"><ArrowLeft className="h-5 w-5" /></button>



          <div className="flex w-full max-w-5xl flex-col gap-4">

            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/15 bg-black/20">

              <Image src={images[activeIndex].src} alt={`${images[activeIndex].title}, ${images[activeIndex].location}`} fill priority quality={92} sizes="100vw" className="object-contain" />

            </div>

            <div className="flex items-end justify-between gap-4 px-1">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">{images[activeIndex].location}</p>

                <p className="mt-1 text-xl font-medium tracking-tight text-white sm:text-2xl">{images[activeIndex].title}</p>

              </div>

              <div className="shrink-0 text-xs tabular-nums text-white/55">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</div>

            </div>

          </div>



          <button type="button" aria-label="Next image" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15 sm:right-8"><ArrowRight className="h-5 w-5" /></button>

        </div>

      )}

    </main>

  )

}



function GalleryCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {

  return (

    <motion.button

      type="button"

      onClick={onClick}

      aria-label={`Open ${image.title}`}

      whileHover={{ y: -5 }}

      transition={{ duration: 0.35, ease: EASE }}

      className="group relative w-[290px] shrink-0 overflow-hidden rounded-sm bg-[#102746] text-left shadow-[0_16px_40px_rgba(16,39,70,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-4 sm:w-[360px] lg:w-[420px]"

    >

      <div className={`relative overflow-hidden ${image.ratio === 'wide' ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>

        <Image

          src={image.src}

          alt={`${image.title}, ${image.location}`}

          fill

          quality={88}

          sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 420px"

          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"

        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A34]/90 via-[#071A34]/15 to-transparent" />

        <div className="absolute inset-0 bg-[#0D9488]/[0.035] transition-opacity duration-500 group-hover:opacity-0" />

        <span className="absolute left-5 top-5 text-[9px] tracking-[0.16em] text-white/70">{String(index + 1).padStart(2, '0')}</span>

        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"><Maximize2 className="h-3.5 w-3.5" /></span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

          <div className="mb-2 flex items-center gap-2">

            <span className="h-px w-5 bg-[#5EEAD4]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">{image.location}</span>

          </div>

          <p className="text-lg font-medium leading-tight tracking-[-0.025em] text-white sm:text-xl">{image.title}</p>

        </div>

      </div>

    </motion.button>

  )

}
