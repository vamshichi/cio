"use client"

import Image from "next/image"
import Link from "next/link"
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
    src: "/gallery/g1.webp",
    title: "The room comes alive",
    location: "Main stage",
    ratio: "wide",
  },
  {
    src: "/gallery/g2.webp",
    title: "Ideas in the spotlight",
    location: "Keynote theatre",
    ratio: "tall",
  },
  {
    src: "/gallery/g3.webp",
    title: "Between sessions",
    location: "The commons",
    ratio: "tall",
  },
  {
    src: "/gallery/g4.webp",
    title: "Every detail matters",
    location: "Arrival desk",
    ratio: "tall",
  },
  // {
  //   src: "/gallery/g5.webp",
  //   title: "A different kind of signal",
  //   location: "Light installation",
  //   ratio: "wide",
  // },
  // {
  //   src: "/gallery/g6.webp",
  //   title: "Until the very last frame",
  //   location: "Closing night",
  //   ratio: "wide",
  // },
]

const secondEditionImages: GalleryImage[] = [
  {
    src: "/gallery/second/s3.webp",
    title: "A new beginning",
    location: "Main stage",
    ratio: "wide",
  },
  {
    src: "/gallery/second/s5.webp",
    title: "The next perspective",
    location: "Keynote theatre",
    ratio: "tall",
  },
  {
    src: "/gallery/second/s1.webp",
    title: "New connections",
    location: "The commons",
    ratio: "tall",
  },
  {
    src: "/gallery/second/s4.webp",
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
    logo: "/logos/1st-edition.png",
  },
  second: {
    label: "2nd Edition",
    date: "Bangalore · 2026",
    eyebrow: "The next chapter",
    logo: "/logos/2nd-edition.png",
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
          current === null ? 0 : (current + 1) % images.length
        )
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? images.length - 1
            : (current - 1 + images.length) % images.length
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
    <main
      id="past-events"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pb-28">
        <header className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Frame / 2026
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Archive 001
          </div>
        </header>

        {/* CENTERED INTRO */}
        <div className="flex flex-col items-center py-16 text-center lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {copy.eyebrow} · visual archive
            </p>

            <h2 className="text-balance font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Moments that
              <br />
              <span className="text-primary">stay with you.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              A visual record of the people, ideas, and electric in-between
              moments that shaped the summit.
            </p>
          </div>

          {/* EDITION LOGO */}
          {/* <div className="mt-10 flex h-28 items-center justify-center sm:h-32">
        <Image
          src={copy.logo}
          alt={copy.label}
          width={260}
          height={130}
          className="max-h-28 w-auto object-contain sm:max-h-32"
        />
      </div> */}

          {/* CENTERED, LARGER EDITION SELECTOR */}
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Edition Selector */}
            <div>
              {/* Subtle glow */}
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />

              <div className="mt-12 flex flex-col items-center gap-6">
                <div
                  className="relative rounded-[2rem] border border-white/30 bg-white/30 p-2 shadow-[0_20px_60px_rgba(80,100,180,0.20)] backdrop-blur-xl"
                  role="tablist"
                  aria-label="Choose edition"
                >
                  <div className="flex items-stretch gap-2">

                    {/* ================= 1ST EDITION ================= */}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={edition === "first"}
                      onClick={() => handleEditionChange("first")}
                      className={`group relative flex min-w-[180px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] px-7 py-6 transition-all duration-500 sm:min-w-[215px] sm:px-10 sm:py-7 ${edition === "first"
                          ? "scale-[1.02] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_15px_50px_rgba(99,102,241,0.35)]"
                          : "text-muted-foreground hover:bg-white/20 hover:text-foreground"
                        }`}
                    >
                      {/* Light overlay */}
                      {edition === "first" && (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                      )}

                      {/* Edition number */}
                      <span
                        className={`absolute left-5 top-4 z-10 font-mono text-[9px] font-semibold tracking-[0.2em] ${edition === "first"
                            ? "text-white/60"
                            : "text-muted-foreground/50"
                          }`}
                      >
                        01
                      </span>

                      {/* LOGO WHITE BACKGROUND */}
                      <div
                        className={`relative z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 sm:h-28 sm:w-28 ${edition === "first"
                            ? "group-hover:scale-105"
                            : "group-hover:scale-105"
                          }`}
                      >
                        <Image
                          src="/logos/1st.png"
                          alt="1st Edition"
                          width={140}
                          height={140}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Edition title */}
                      <span
                        className={`relative z-10 mt-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${edition === "first"
                            ? "text-white"
                            : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        1st Edition
                      </span>

                      {/* Active bottom indicator */}
                      <div
                        className={`absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full bg-white transition-all duration-500 ${edition === "first" ? "w-16" : "w-0"
                          }`}
                      />
                    </button>


                    {/* ================= 2ND EDITION ================= */}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={edition === "second"}
                      onClick={() => handleEditionChange("second")}
                      className={`group relative flex min-w-[180px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] px-7 py-6 transition-all duration-500 sm:min-w-[215px] sm:px-10 sm:py-7 ${edition === "second"
                          ? "scale-[1.02] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_15px_50px_rgba(99,102,241,0.35)]"
                          : "text-muted-foreground hover:bg-white/20 hover:text-foreground"
                        }`}
                    >
                      {/* Light overlay */}
                      {edition === "second" && (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                      )}

                      {/* Edition number */}
                      <span
                        className={`absolute left-5 top-4 z-10 font-mono text-[9px] font-semibold tracking-[0.2em] ${edition === "second"
                            ? "text-white/60"
                            : "text-muted-foreground/50"
                          }`}
                      >
                        02
                      </span>

                      {/* LOGO WHITE BACKGROUND */}
                      <div
                        className={`relative z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 sm:h-28 sm:w-28 ${edition === "second"
                            ? "group-hover:scale-105"
                            : "group-hover:scale-105"
                          }`}
                      >
                        <Image
                          src="/logos/bengaluru-logo.png"
                          alt="2nd Edition"
                          width={140}
                          height={140}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Edition title */}
                      <span
                        className={`relative z-10 mt-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${edition === "second"
                            ? "text-white"
                            : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        2nd Edition
                      </span>

                      {/* Active bottom indicator */}
                      <div
                        className={`absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full bg-white transition-all duration-500 ${edition === "second" ? "w-16" : "w-0"
                          }`}
                      />
                    </button>

                  </div>
                </div>


              </div>
            </div>

            {/* Current Edition / Date */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-border" />

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                {copy.date}
              </p>

              <span className="h-px w-8 bg-border" />
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${image.title}`}
              className={`group relative overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${index === 0
                ? "sm:col-span-2 lg:col-span-8"
                : index === 1 || index === 2
                  ? "lg:col-span-4"
                  : index === 3
                    ? "lg:col-span-4"
                    : "sm:col-span-2 lg:col-span-8"
                }`}
            >
              <div
                className={`relative ${image.ratio === "wide"
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

                {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />

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
                </div> */}
              </div>
            </button>
          ))}
        </div>

        {/* VIEW MORE */}
        {/* <div className="mt-12 flex justify-center">
          <Link
            href="/events"
            className="group inline-flex text-white items-center gap-3 rounded-full border border-border bg-black px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View More
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div> */}


      </section>

      {/* LIGHTBOX */}
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
                (activeIndex - 1 + images.length) % images.length
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
