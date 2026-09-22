"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Pause,
  Play,
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
  },
  second: {
    label: "2nd Edition",
    date: "Bangalore · 2026",
    eyebrow: "The next chapter",
  },
}

export default function GallerySection() {
  const [edition, setEdition] = useState<Edition>("first")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const galleryRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)

  const images =
    edition === "first"
      ? firstEditionImages
      : secondEditionImages

  const copy = editionCopy[edition]

  /*
   * ---------------------------------------------------------
   * EDITION CHANGE
   * ---------------------------------------------------------
   */

  const handleEditionChange = (nextEdition: Edition) => {
    setEdition(nextEdition)
    setActiveIndex(null)

    /*
     * Reset the carousel position when changing edition.
     * Small timeout allows React to render the new images first.
     */
    requestAnimationFrame(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft = 0
      }
    })
  }

  /*
   * ---------------------------------------------------------
   * AUTO SCROLL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const container = galleryRef.current

    if (!container) return

    let lastTime = performance.now()

    const speed = 0.035

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime
      lastTime = currentTime

      if (!isPaused) {
        container.scrollLeft += delta * speed

        /*
         * Because the gallery contains two identical sets,
         * once we reach the beginning of the second set,
         * jump back to the beginning.
         *
         * This is visually seamless.
         */
        const halfWidth = container.scrollWidth / 2

        if (
          halfWidth > 0 &&
          container.scrollLeft >= halfWidth
        ) {
          container.scrollLeft -= halfWidth
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [edition, isPaused])

  /*
   * ---------------------------------------------------------
   * MANUAL SCROLL
   * ---------------------------------------------------------
   */

  const scrollGallery = (direction: "left" | "right") => {
    const container = galleryRef.current

    if (!container) return

    setIsPaused(true)

    const amount =
      window.innerWidth < 640 ? 300 : 440

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    })
  }

  /*
   * ---------------------------------------------------------
   * LIGHTBOX KEYBOARD CONTROLS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null)
      }

      if (event.key === "ArrowRight") {
        setActiveIndex(
          (current) =>
            current === null
              ? 0
              : (current + 1) % images.length,
        )
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) =>
            current === null
              ? images.length - 1
              : (current - 1 + images.length) %
                images.length,
        )
      }
    }

    document.body.style.overflow = "hidden"

    window.addEventListener(
      "keydown",
      handleKeyDown,
    )

    return () => {
      document.body.style.overflow = ""

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      )
    }
  }, [activeIndex, images.length])

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <main
      id="past-events"
      className="relative min-h-screen overflow-hidden bg-[#F5F8FC] text-[#071A2C]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(8,36,59,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(8,36,59,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 90%)",
          }}
        />

        <div className="absolute -left-[200px] -top-[200px] h-[500px] w-[500px] rounded-full border border-[#176B9C]/[0.05]" />

        <div className="absolute -right-[250px] top-[80px] h-[600px] w-[600px] rounded-full border border-[#176B9C]/[0.05]" />

        <div className="absolute right-[-100px] top-[220px] h-[380px] w-[380px] rounded-full border border-[#55C7DC]/[0.07]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <header className="flex items-center justify-between border-b border-[#D9E3E8] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#176B9C]" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.28em] text-[#176B9C] sm:text-[9px]">
              Past Events / 2026
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#91A1AD] sm:block">
            CIO TECH LEADERSHIP
          </span>
        </header>

        {/* ===================================================
            HERO
        =================================================== */}

        <div className="relative flex flex-col items-center py-14 text-center sm:py-20 lg:py-24">
          {/* Left label */}

          <div className="absolute left-0 top-20 hidden flex-col gap-3 text-left lg:flex">
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

          {/* Right label */}

          <div className="absolute right-0 top-20 hidden flex-col items-end gap-3 text-right lg:flex">
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

            <h1 className="text-balance text-[48px] font-semibold leading-[0.9] tracking-[-0.075em] text-[#071A2C] sm:text-[68px] lg:text-[92px]">
              Moments that
              <br />
              <span className="text-[#176B9C]">
                stay with you.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-[13px] leading-6 text-[#607484] sm:mt-8 sm:text-[15px] sm:leading-7">
              A visual journey through the people, ideas
              and conversations that bring the CIO Tech
              community together.
            </p>
          </div>

          {/* =================================================
              EDITION SELECTOR
          ================================================= */}

          <div className="mt-10 w-full max-w-[700px] sm:mt-14">
            <div className="rounded-[22px] border border-[#D9E3E8] bg-white/80 p-2 shadow-[0_18px_55px_rgba(8,36,59,0.08)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-2">
                {(
                  ["first", "second"] as Edition[]
                ).map((item, index) => {
                  const itemCopy = editionCopy[item]
                  const active = edition === item

                  return (
                    <button
                      key={item}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() =>
                        handleEditionChange(item)
                      }
                      className={`
                        group relative overflow-hidden
                        rounded-[16px]
                        px-4 py-4
                        text-left
                        transition-all duration-300
                        sm:px-6 sm:py-5
                        ${
                          active
                            ? "bg-[#08243B] text-white shadow-[0_12px_30px_rgba(8,36,59,0.20)]"
                            : "bg-transparent text-[#607484] hover:bg-[#F5F8FC]"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span
                            className={`
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-full border
                              font-mono text-[8px]
                              font-semibold
                              ${
                                active
                                  ? "border-[#55C7DC]/40 bg-[#55C7DC]/10 text-[#7DD3E7]"
                                  : "border-[#D9E3E8] text-[#91A1AD]"
                              }
                            `}
                          >
                            0{index + 1}
                          </span>

                          <div>
                            <p
                              className={`
                                font-mono text-[8px]
                                font-semibold uppercase
                                tracking-[0.18em]
                                ${
                                  active
                                    ? "text-[#7DD3E7]"
                                    : "text-[#176B9C]"
                                }
                              `}
                            >
                              {itemCopy.label}
                            </p>

                            <p
                              className={`
                                mt-1 text-[11px]
                                font-medium sm:text-[12px]
                                ${
                                  active
                                    ? "text-white"
                                    : "text-[#607484]"
                                }
                              `}
                            >
                              {itemCopy.date}
                            </p>
                          </div>
                        </div>

                        <ArrowRight
                          className={`
                            h-4 w-4
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            ${
                              active
                                ? "text-[#55C7DC]"
                                : "text-[#91A1AD]"
                            }
                          `}
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
        </div>

        {/* ===================================================
            GALLERY TITLE
        =================================================== */}

        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#176B9C]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#176B9C]">
                {copy.label}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#071A2C] sm:text-3xl">
              Inside the experience
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              setIsPaused((current) => !current)
            }
            className="
              flex w-fit items-center gap-2
              rounded-full border border-[#D9E3E8]
              bg-white px-4 py-2.5
              font-mono text-[8px]
              font-semibold uppercase
              tracking-[0.16em]
              text-[#607484]
              shadow-sm
              transition-all duration-300
              hover:border-[#176B9C]/30
              hover:text-[#176B9C]
            "
          >
            {isPaused ? (
              <Play className="h-3.5 w-3.5" />
            ) : (
              <Pause className="h-3.5 w-3.5" />
            )}

            {isPaused
              ? "Play gallery"
              : "Pause gallery"}
          </button>
        </div>

        {/* ===================================================
            GALLERY
        =================================================== */}

        <div
          className="relative -mx-5 sm:-mx-8 lg:-mx-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#F5F8FC] to-transparent sm:w-20 lg:w-32" />

          {/* Right fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#F5F8FC] to-transparent sm:w-20 lg:w-32" />

          <div
            ref={galleryRef}
            className="
              flex
              overflow-x-hidden
              scroll-smooth
              py-4
              pl-5
              sm:pl-8
              lg:pl-12
            "
          >
            {/* =================================================
                FIRST SET
            ================================================= */}

            <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
              {images.map((image, index) => (
                <GalleryCard
                  key={`first-${image.src}`}
                  image={image}
                  index={index}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                />
              ))}
            </div>

            {/* =================================================
                DUPLICATE SET FOR INFINITE SCROLL
            ================================================= */}

            <div className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
              {images.map((image, index) => (
                <GalleryCard
                  key={`second-${image.src}`}
                  image={image}
                  index={index}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            CONTROLS
        =================================================== */}

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#176B9C]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#91A1AD]">
              Auto scrolling
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                scrollGallery("left")
              }
              aria-label="Previous gallery image"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#D9E3E8]
                bg-white
                text-[#607484]
                transition-all duration-300
                hover:border-[#176B9C]
                hover:bg-[#08243B]
                hover:text-white
              "
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollGallery("right")
              }
              aria-label="Next gallery image"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#D9E3E8]
                bg-white
                text-[#607484]
                transition-all duration-300
                hover:border-[#176B9C]
                hover:bg-[#08243B]
                hover:text-white
              "
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SIGNATURE
        =================================================== */}

        <div className="mt-16 flex flex-col items-center gap-4 text-center sm:mt-20">
          <div className="h-px w-10 bg-[#176B9C]" />

          <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#91A1AD]">
            More than events. Lasting impact.
          </p>

          <p className="max-w-lg text-[11px] leading-5 text-[#607484]">
            Every edition creates a new chapter of
            conversations, connections and ideas.
          </p>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              setActiveIndex(null)
            }
          }}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-[#061522]/95
            p-4
            backdrop-blur-md
            sm:p-8
          "
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() =>
              setActiveIndex(null)
            }
            aria-label="Close image viewer"
            className="
              absolute right-5 top-5 z-10
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              text-white
              transition
              hover:bg-white/10
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + images.length) %
                  images.length,
              )
            }
            className="
              absolute left-3 z-10
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              text-white
              transition
              hover:bg-white/10
              sm:left-8
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* IMAGE */}

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
                {String(activeIndex + 1).padStart(
                  2,
                  "0",
                )}{" "}
                /{" "}
                {String(images.length).padStart(
                  2,
                  "0",
                )}
              </div>
            </div>
          </div>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next image"
            onClick={() =>
              setActiveIndex(
                (activeIndex + 1) %
                  images.length,
              )
            }
            className="
              absolute right-3 z-10
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              text-white
              transition
              hover:bg-white/10
              sm:right-8
            "
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  )
}

/*
 * =========================================================
 * GALLERY CARD
 * =========================================================
 */

function GalleryCard({
  image,
  index,
  onClick,
}: {
  image: GalleryImage
  index: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open ${image.title}`}
      className="
        group
        relative
        w-[290px]
        shrink-0
        overflow-hidden
        rounded-[20px]
        bg-[#08243B]
        text-left
        shadow-[0_16px_40px_rgba(8,36,59,0.12)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_24px_55px_rgba(8,36,59,0.18)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#176B9C]
        focus-visible:ring-offset-4
        sm:w-[360px]
        lg:w-[420px]
      "
    >
      <div
        className={`
          relative overflow-hidden
          ${
            image.ratio === "wide"
              ? "aspect-[16/10]"
              : "aspect-[4/5]"
          }
        `}
      >
        <Image
          src={image.src}
          alt={`${image.title}, ${image.location}`}
          fill
          quality={88}
          sizes="
            (max-width: 640px) 290px,
            (max-width: 1024px) 360px,
            420px
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* Image gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#061522] via-[#061522]/20 to-transparent" />

        {/* Blue treatment */}

        <div className="absolute inset-0 bg-[#176B9C]/[0.05] transition-opacity duration-500 group-hover:opacity-0" />

        {/* Number */}

        <span className="absolute left-5 top-5 font-mono text-[8px] tracking-[0.18em] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Expand */}

        <span
          className="
            absolute right-5 top-5
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-white/20
            bg-black/10
            text-white
            opacity-0
            backdrop-blur-md
            transition-all duration-300
            group-hover:opacity-100
          "
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </span>

        {/* Content */}

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55C7DC] shadow-[0_0_10px_rgba(85,199,220,0.8)]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7DD3E7]">
              {image.location}
            </span>
          </div>

          <p className="text-[17px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[19px]">
            {image.title}
          </p>
        </div>
      </div>
    </button>
  )
}