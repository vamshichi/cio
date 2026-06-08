'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'

const galleryImages = [
  '/gallery/g2.jpg',
  '/gallery/g3.jpg',
  '/gallery/g4.jpg',
  '/gallery/g5.jpg',
  '/gallery/g7.jpg',
  '/gallery/g8.jpg',
  '/gallery/g9.jpg',
  '/gallery/g10.jpg',
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
  galleryImages.forEach((src) => {
    const img = new window.Image()
    img.src = src
  })
}, [])

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Event Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Summit Highlights
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {' '}– 1st Edition – Mumbai 2026
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Moments from our leadership summits, networking sessions,
            keynote presentations and award ceremonies.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImage(image)}
            >
            <div className="relative h-[320px] min-h-[320px] overflow-hidden rounded-3xl bg-slate-900"> 
               <Image
  src={image}
  alt={`Gallery ${index + 1}`}
  fill
  priority
  loading="eager"
  quality={90}
  sizes="25vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={30} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative h-[85vh] w-full max-w-7xl"
          >
            <Image
              src={selectedImage}
              alt="Gallery"
              fill
              quality={95}
              priority
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}