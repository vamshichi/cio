'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

const galleryImages = [
  '/gallery/g1.jpg',
  '/gallery/g2.jpg',
  '/gallery/g3.jpg',
  '/gallery/g4.jpg',
  '/gallery/g5.jpg',
  '/gallery/g6.jpg',
  '/gallery/g7.jpg',
  '/gallery/g8.jpg',
  '/gallery/g9.jpg',
  '/gallery/g10.jpg',
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            Summit
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {' '}Highlights
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={32} />
          </button>

          <div className="relative h-[80vh] w-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Gallery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}