"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react"

type Edition = "first" | "second"

type GalleryImage = {
  src: string
  title: string
  location: string
  ratio: "wide" | "tall"
}

const firstEditionImages: GalleryImage[] = [
  {
    src: "/gallery/g1.jpg",
    title: "The room comes alive",
    location: "Main stage",
    ratio: "wide",
  },
  {
    src: "/gallery/g2.jpg",
    title: "Ideas in the spotlight",
    location: "Keynote theatre",
    ratio: "tall",
  },
  {
    src: "/gallery/g3.jpg",
    title: "Between sessions",
    location: "The commons",
    ratio: "tall",
  },
  {
    src: "/gallery/g4.jpg",
    title: "Every detail matters",
    location: "Arrival desk",
    ratio: "tall",
  },
  {
    src: "/gallery/g5.jpg",
    title: "A different kind of signal",
    location: "Light installation",
    ratio: "wide",
  },
  {
    src: "/gallery/g6.jpg",
    title: "Until the very last frame",
    location: "Closing night",
    ratio: "wide",
  },
]

const secondEditionImages: GalleryImage[] = [
  {
    src: "/gallery/second/s3.jpg",
    title: "A new beginning",
    location: "Main stage",
    ratio: "wide",
  },
  {
    src: "/gallery/second/s2.jpg",
    title: "The next perspective",
    location: "Keynote theatre",
    ratio: "tall",
  },
  {
    src: "/gallery/second/s1.jpg",
    title: "New connections",
    location: "The commons",
    ratio: "tall",
  },
  {
    src: "/gallery/second/s4.jpg",
    title: "Made for the moment",
    location: "Arrival desk",
    ratio: "tall",
  },
]

const editionCopy = {
  first: {
    label: "1st Edition",
    date: "Mumbai · 2026",
    eyebrow: "The beginning",
  },
  second: {
    label: "2nd Edition",
    date: "Mumbai · 2026",
    eyebrow: "The next chapter",
  },
}

export default function GallerySection() {
  const [edition, setEdition] = useState<Edition>("first")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images =
    edition === "first" ? firstEditionImages : secondEditionImages

  const copy = editionCopy[edition]

  const handleEditionChange = (nextEdition: Edition) => {
    setEdition(nextEdition)
    setActiveIndex(null)
  }

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null)
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % images.length,
        )
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? images.length - 1
            : (current - 1 + images.length) % images.length,
        )
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, images.length])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pb-28">
        <header className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            <span
              className="size-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            Frame / 2026
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Archive 001
          </div>
        </header>

        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {copy.eyebrow} · visual archive
            </p>

            <h1 className="text-balance font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Moments that
              <br />
              <span className="text-primary">stay with you.</span>
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              A visual record of the people, ideas, and electric in-between
              moments that shaped the summit.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 md:items-end">
            <div
              className="inline-flex rounded-full border border-border bg-card p-1"
              role="tablist"
              aria-label="Choose edition"
            >
              <button
                type="button"
                role="tab"
                aria-selected={edition === "first"}
                onClick={() => handleEditionChange("first")}
                className={`rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                  edition === "first"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                1st Edition
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={edition === "second"}
                onClick={() => handleEditionChange("second")}
                className={`rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                  edition === "second"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                2nd Edition
              </button>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {copy.date}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${image.title}`}
              className={`group relative overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-8"
                  : index === 1 || index === 2
                    ? "lg:col-span-4"
                    : index === 3
                      ? "lg:col-span-4"
                      : "sm:col-span-2 lg:col-span-8"
              }`}
            >
              <div
                className={`relative ${
                  image.ratio === "wide"
                    ? "aspect-[16/9]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`${image.title}, ${image.location}`}
                  fill
                  quality={82}
                  loading="eager"
                  sizes={
                    image.ratio === "wide"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {edition === "first" ? "Edition 01" : "Edition 02"}
                    </p>
                  </div>

                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40 bg-background/20 text-primary-foreground opacity-0 backdrop-blur transition group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Maximize2 className="size-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Camera className="size-4 text-primary" />
            <span>Captured in the moment.</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
            <Sparkles className="size-3 text-primary" />
            {images.length} frames / {copy.label}
          </div>
        </footer>
      </section>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(null)
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-card"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + images.length) % images.length,
              )
            }
            className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition hover:bg-card sm:left-8"
          >
            <ArrowLeft className="size-5" />
          </button>

          <div className="flex w-full max-w-5xl flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-card">
              <Image
                src={images[activeIndex].src}
                alt={`${images[activeIndex].title}, ${images[activeIndex].location}`}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {images[activeIndex].location}
                </p>

                <p className="mt-1 text-lg font-medium">
                  {images[activeIndex].title}
                </p>
              </div>

              <div className="font-mono text-xs text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
            className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition hover:bg-card sm:right-8"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      )}
    </main>
  )
}