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
    <main
      id="past-events"
      className="min-h-screen overflow-hidden bg-[#F5F8FC] text-[#071A2C]"
    >
      {/* =========================================================
          PREMIUM PAST EVENTS INTRO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Architectural background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.42]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(8,36,59,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(8,36,59,0.035) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
            }}
          />

          <div className="absolute left-[-190px] top-[-190px] h-[520px] w-[520px] rounded-full border border-[#176B9C]/[0.045]" />
          <div className="absolute right-[-220px] top-[80px] h-[620px] w-[620px] rounded-full border border-[#176B9C]/[0.045]" />
          <div className="absolute right-[-110px] top-[190px] h-[390px] w-[390px] rounded-full border border-[#55C7DC]/[0.08]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-7 sm:px-8 sm:pb-14 sm:pt-10 lg:px-12 lg:pb-16">
          {/* Archive header */}
          <header className="flex items-center justify-between border-b border-[#D9E3E8] pb-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#176B9C] shadow-[0_0_10px_rgba(23,107,156,0.35)]" />
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.28em] text-[#176B9C] sm:text-[9px]">
                Past Events / 2026
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#91A1AD] sm:text-[9px]">
              Archive / 001
            </span>
          </header>

          {/* Main heading */}
          <div className="relative flex flex-col items-center py-16 text-center sm:py-20 lg:py-24">
            <div className="absolute left-0 top-16 hidden flex-col gap-3 text-left lg:flex">
              <span className="h-px w-8 bg-[#176B9C]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.24em] leading-5 text-[#91A1AD]">
                PEOPLE
                <br />
                IDEAS
                <br />
                PARTNERSHIPS
                <br />
                PROGRESS
              </span>
            </div>

            <div className="absolute right-0 top-16 hidden flex-col items-end gap-3 text-right lg:flex">
              <span className="h-px w-8 bg-[#176B9C]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.24em] leading-5 text-[#91A1AD]">
                DIFFERENT CITIES
                <br />
                SAME MISSION
                <br />
                STRONGER
                <br />
                TOMORROW
              </span>
            </div>

            <div className="max-w-5xl">
              <p className="mb-5 font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#176B9C] sm:text-[9px]">
                {copy.eyebrow} · visual archive
              </p>

              <h1 className="text-balance text-[49px] font-semibold leading-[0.9] tracking-[-0.075em] text-[#071A2C] sm:text-[68px] lg:text-[92px]">
                Moments that
                <br />
                <span className="text-[#176B9C]">stay with you.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-pretty text-[13px] leading-6 text-[#607484] sm:mt-8 sm:text-[15px] sm:leading-7">
                A visual journey through the people, ideas and conversations
                that bring the CIO Tech community together.
              </p>
            </div>

            {/* Edition selector */}
            <div className="mt-12 w-full max-w-[720px] sm:mt-14">
              <div className="relative rounded-[22px] border border-[#D9E3E8] bg-white/75 p-2 shadow-[0_18px_55px_rgba(8,36,59,0.08)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-2">
                  {(["first", "second"] as Edition[]).map((item, index) => {
                    const itemCopy = editionCopy[item]
                    const active = edition === item

                    return (
                      <button
                        key={item}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => handleEditionChange(item)}
                        className={`group relative overflow-hidden rounded-[16px] px-4 py-4 text-left transition-all duration-300 sm:px-6 sm:py-5 ${
                          active
                            ? "bg-[#08243B] text-white shadow-[0_12px_30px_rgba(8,36,59,0.20)]"
                            : "bg-transparent text-[#607484] hover:bg-[#F5F8FC]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[8px] font-semibold ${
                                active
                                  ? "border-[#55C7DC]/40 bg-[#55C7DC]/10 text-[#7DD3E7]"
                                  : "border-[#D9E3E8] text-[#91A1AD]"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            <div>
                              <p
                                className={`font-mono text-[8px] font-semibold uppercase tracking-[0.18em] ${
                                  active ? "text-[#7DD3E7]" : "text-[#176B9C]"
                                }`}
                              >
                                {itemCopy.label}
                              </p>

                              <p
                                className={`mt-1 text-[11px] font-medium sm:text-[12px] ${
                                  active ? "text-white" : "text-[#607484]"
                                }`}
                              >
                                {itemCopy.date}
                              </p>
                            </div>
                          </div>

                          <ArrowRight
                            className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                              active ? "text-[#55C7DC]" : "text-[#91A1AD]"
                            }`}
                          />
                        </div>

                        {active && (
                          <div className="absolute bottom-0 left-6 right-6 h-px bg-[#55C7DC]" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Archive metrics */}
            {/* <div className="mt-10 grid w-full max-w-4xl grid-cols-2 border-y border-[#D9E3E8] sm:grid-cols-4">
              {[
                ["250+", "ATTENDEES"],
                ["20+", "SPEAKERS"],
                ["25+", "PARTNERS"],
                ["100+", "MEETINGS"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={`px-4 py-5 text-left sm:px-6 sm:py-6 ${
                    index === 1 || index === 3
                      ? "border-l border-[#D9E3E8]"
                      : ""
                  } ${index >= 2 ? "border-t border-[#D9E3E8] sm:border-t-0" : ""}`}
                >
                  <p className="text-[27px] font-semibold leading-none tracking-[-0.055em] text-[#08243B] sm:text-[34px]">
                    {number}
                  </p>
                  <p className="mt-2 font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-[#176B9C] sm:text-[8px]">
                    {label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          {/* =====================================================
              PREMIUM ASYMMETRIC GALLERY
          ===================================================== */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${image.title}`}
                className={`group relative overflow-hidden rounded-[20px] bg-[#08243B] text-left shadow-[0_12px_35px_rgba(8,36,59,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B9C] focus-visible:ring-offset-4 ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-8"
                    : index === 1
                      ? "lg:col-span-4"
                      : index === 2
                        ? "lg:col-span-4"
                        : "lg:col-span-4"
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`${image.title}, ${image.location}`}
                    fill
                    quality={88}
                    loading="eager"
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Premium image treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061522]/90 via-transparent to-[#061522]/10 opacity-85" />
                  <div className="absolute inset-0 bg-[#176B9C]/[0.06] mix-blend-screen transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Image metadata */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC] shadow-[0_0_10px_rgba(85,199,220,0.8)]" />
                          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7DD3E7]">
                            {image.location}
                          </span>
                        </div>

                        <p className="text-[16px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[18px]">
                          {image.title}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Number */}
                  <span className="absolute left-5 top-5 font-mono text-[8px] tracking-[0.18em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom signature */}
          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-16">
            <div className="h-px w-10 bg-[#176B9C]" />

            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#91A1AD]">
              More than events. Lasting impact.
            </p>

            <p className="max-w-lg text-[11px] leading-5 text-[#607484]">
              Every edition creates a new chapter of conversations,
              connections and ideas.
            </p>
          </div>
        </section>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#061522]/95 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + images.length) % images.length,
              )
            }
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:left-8"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex w-full max-w-5xl flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-white/10 bg-black/20">
              <Image
                src={images[activeIndex].src}
                alt={`${images[activeIndex].title}, ${images[activeIndex].location}`}
                fill
                priority
                quality={92}
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#55C7DC]">
                  {images[activeIndex].location}
                </p>

                <p className="mt-1 text-lg font-medium text-white">
                  {images[activeIndex].title}
                </p>
              </div>

              <div className="font-mono text-xs text-white/40">
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
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:right-8"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  )
}
