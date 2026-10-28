
"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiCpu,
} from "react-icons/fi";

import { DelegateForm } from "@/components/sections/DelegateForm";
import { SponsorForm } from "@/components/sections/SponsorForm";
import { FormModal } from "@/components/common/FormModal";

const eventStats = [
  { value: 200, suffix: "+", label: "Technology leaders" },
  { value: 25, suffix: "+", label: "Industry speakers" },
  { value: 70, suffix: "+", label: "Curated 1:1 meetings" },
  { value: 2026, suffix: "", label: "Leadership awards" },
];

const orbitNodes = [
  { top: "12%", left: "50%", delay: 0 },
  { top: "29%", left: "84%", delay: 0.7 },
  { top: "72%", left: "80%", delay: 1.4 },
  { top: "86%", left: "40%", delay: 0.3 },
  { top: "54%", left: "14%", delay: 1.1 },
  { top: "22%", left: "23%", delay: 1.8 },
];

function AnimatedStat({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(reduceMotion ? value : 0);

  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("en-IN")
  );

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, motionValue, value, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function TechnologyVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        relative mx-auto aspect-square w-full
        max-w-[280px]
        xs:max-w-[320px]
        sm:max-w-[400px]
        lg:max-w-[460px]
      "
      aria-label="Technology and digital transformation illustration"
      role="img"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-teal-400/[0.09] blur-3xl" />

      <div className="pointer-events-none absolute inset-[25%] rounded-full bg-blue-500/[0.13] blur-3xl" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(94,234,212,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 72%)",
        }}
      />

      {/* Outer orbital ring */}
      <motion.div
        className="absolute inset-[7%] rounded-full border border-dashed border-teal-300/20"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_#2dd4bf]" />

        <span className="absolute bottom-[15%] right-[16%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_#60a5fa]" />
      </motion.div>

      {/* Inner orbital ring */}
      <motion.div
        className="absolute inset-[15%] rounded-full border border-teal-300/20"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="absolute right-[10%] top-[22%] h-2.5 w-2.5 rounded-full border border-teal-200 bg-teal-600 shadow-[0_0_22px_#14b8a6]" />
      </motion.div>

      {/* Central ring */}
      <motion.div
        className="absolute inset-[23%] rounded-full border border-blue-300/25"
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 8, 0], scale: [1, 1.025, 1] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbit paths */}
      <div className="absolute inset-[17%] rotate-[-32deg] rounded-[50%] border border-teal-200/25" />

      <div className="absolute inset-[17%] rotate-[32deg] rounded-[50%] border border-blue-300/20" />

      {/* Technology core */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative flex h-[43%] w-[43%] items-center justify-center rounded-full border border-teal-300/40 bg-gradient-to-br from-teal-300/[0.15] via-blue-500/[0.09] to-transparent shadow-[0_0_80px_rgba(20,184,166,0.12)] backdrop-blur-sm">
          <motion.div
            className="absolute inset-[12%] rounded-full border border-teal-200/40"
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.35, 0.8, 0.35], scale: [0.92, 1.05, 0.92] }
            }
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative flex h-[65%] w-[65%] items-center justify-center rounded-full border border-teal-200/30 bg-[#09264A] shadow-[inset_0_0_35px_rgba(20,184,166,0.12)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/[0.12] to-transparent" />

            <FiCpu
              className="relative h-[40%] w-[40%] text-teal-200 drop-shadow-[0_0_14px_rgba(45,212,191,0.65)]"
              strokeWidth={1.15}
            />
          </div>

          <motion.span
            className="absolute -right-1 top-[27%] h-2.5 w-2.5 rounded-full bg-teal-200 shadow-[0_0_18px_#2dd4bf]"
            animate={
              reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }
            }
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Connected data nodes */}
      {orbitNodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{ top: node.top, left: node.left }}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -9, 0], opacity: [0.55, 1, 0.55] }
          }
          transition={{
            duration: 3 + (index % 3),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/70 bg-teal-300/25">
            <div className="absolute inset-0 rounded-full bg-teal-200 blur-[5px]" />
          </div>
        </motion.div>
      ))}

      {/* Caption */}
      <div className="absolute bottom-[3%] left-0 right-0 text-center">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-teal-200/70 sm:text-[10px] sm:tracking-[0.35em]">
          Intelligence · Security · Transformation
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const [showDelegateForm, setShowDelegateForm] = useState(false);
  const [showSponsorForm, setShowSponsorForm] = useState(false);
  const reduceMotion = useReducedMotion();

  const openEnquiry = (type: "delegate" | "sponsor") => {
    const hash =
      type === "delegate" ? "#delegateenquiry" : "#sponsorenquiry";

    window.history.pushState(null, "", hash);

    if (type === "delegate") {
      setShowDelegateForm(true);
    } else {
      setShowSponsorForm(true);
    }
  };

  return (
    <>
      <section
        id="home"
        className="
          relative isolate w-full min-w-0
          overflow-x-clip
          bg-[#06172F] text-white
        "
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-teal-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px]" />

          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-500/[0.12] blur-[110px] sm:h-[460px] sm:w-[460px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(13,148,136,0.09),transparent_60%)]" />
        </div>

        {/* Main hero content */}
        <div
          className="
            relative mx-auto w-full min-w-0 max-w-[1360px]
            px-5 pb-10 pt-8
            sm:px-6 sm:pb-12 sm:pt-10
            md:px-8
            lg:px-12 lg:pb-14 lg:pt-12
          "
        >
          <div
            className="
              grid w-full min-w-0 grid-cols-1
              items-center gap-7
              sm:gap-10
              lg:grid-cols-[1.08fr_0.92fr] lg:gap-8
            "
          >
            {/* Left: Event information */}
            <div className="relative z-10 min-w-0">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 flex flex-wrap items-center gap-3 sm:mb-7"
              >
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/[0.07] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-200 sm:px-3.5 sm:text-sm sm:tracking-[0.14em]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  3rd Edition · New Delhi
                </span>
              </motion.div>

              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="
                  max-w-[860px] break-words
                  text-[clamp(2rem,8.3vw,3rem)]
                  font-semibold leading-[1.08]
                  tracking-[-0.045em]
                  sm:text-[clamp(2.75rem,6vw,4.25rem)]
                  sm:leading-[1.04]
                "
              >
                The future isn&apos;t a pilot{" "}
                <span className="relative inline-block bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-300 bg-clip-text pb-1 text-transparent">
                  It&apos;s production

                  <motion.span
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-teal-300/80 to-transparent"
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-5 max-w-[590px] text-sm leading-7 text-slate-100 sm:mt-7 sm:text-base sm:leading-8"
              >
                Where India&apos;s CIOs, CTOs, CISOs and CDOs turn enterprise
                AI, cybersecurity and digital transformation into secure,
                governed and measurable business outcomes.
              </motion.p>

              {/* Event details */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 flex flex-col gap-3 text-sm text-slate-100 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:text-base"
              >
                <span className="inline-flex items-center gap-2.5">
                  <FiCalendar
                    className="shrink-0 text-teal-300"
                    size={18}
                  />
                  <span>12 November 2026</span>
                </span>

                <span className="inline-flex items-center gap-2.5">
                  <FiMapPin
                    className="shrink-0 text-teal-300"
                    size={18}
                  />
                  <span>The Lalit, New Delhi</span>
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap"
              >
                <button
                  type="button"
                  onClick={() => openEnquiry("delegate")}
                  className="
                    group inline-flex min-h-[54px] w-full
                    items-center justify-center gap-3
                    rounded-xl bg-teal-300 px-5 py-4
                    text-sm font-semibold text-[#06213A]
                    shadow-[0_0_30px_rgba(45,212,191,0.12)]
                    transition-colors duration-300
                    hover:bg-teal-200
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-teal-200
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#06172F]
                    sm:w-auto sm:px-6 sm:text-base
                  "
                >
                  <span>Request your executive pass</span>

                  <FiArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => openEnquiry("sponsor")}
                  className="
                    group inline-flex min-h-[54px] w-full
                    items-center justify-center gap-3
                    rounded-xl border border-white/15
                    bg-white/[0.035] px-5 py-4
                    text-sm font-medium text-white
                    backdrop-blur-md
                    transition-colors duration-300
                    hover:border-teal-300/50
                    hover:bg-teal-300/[0.07]
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-teal-200
                    sm:w-auto sm:px-6 sm:text-base
                  "
                >
                  <span>Explore partnerships</span>

                  <FiArrowRight
                    size={18}
                    className="shrink-0 text-teal-200 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-xs leading-6 tracking-wide text-slate-400 sm:text-sm"
              >
                Built for decision-makers. Designed for what comes next.
              </motion.p>
            </div>

            {/* Right: Animated technology illustration */}
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.95, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative mx-auto w-full min-w-0
                max-w-[320px]
                sm:max-w-[460px]
                lg:max-w-[540px]
              "
            >
              <TechnologyVisual />
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="relative mt-8 border-t border-white/[0.12] sm:mt-12 lg:mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {eventStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative min-w-0 py-5 pr-3
                    sm:py-7 sm:pr-5
                    ${index % 2 === 1 ? "pl-4 sm:pl-6" : ""}
                    ${index > 0 ? "sm:border-l sm:border-white/[0.12] sm:pl-6" : ""}
                    ${index >= 2 ? "border-t border-white/[0.08] sm:border-t-0" : ""}
                  `}
                >
                  <p className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                    <AnimatedStat
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm lg:text-base">
                    {stat.label}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-10 bg-teal-300/60 sm:w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#071C38]/70 to-transparent" />
      </section>

      {/* Executive pass modal */}
      <FormModal
        open={showDelegateForm}
        onClose={() => setShowDelegateForm(false)}
        title="Request Your Executive Pass"
      >
        <DelegateForm />
      </FormModal>

      {/* Partnership modal */}
      <FormModal
        open={showSponsorForm}
        onClose={() => setShowSponsorForm(false)}
        title="Partner with CIO Tech"
      >
        <SponsorForm />
      </FormModal>
    </>
  );
}
