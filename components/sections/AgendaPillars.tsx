"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FiCpu,
  FiUsers,
  FiShield,
  FiLayers,
  FiDatabase,
  FiTrendingUp,
} from "react-icons/fi";

const pillars = [
  {
    number: "01",
    title: "AI at Enterprise Scale",
    description:
      "Move beyond isolated pilots and turn AI investments into measurable, enterprise-wide business outcomes.",
    icon: FiCpu,
    label: "INTELLIGENT ENTERPRISE",
  },
  {
    number: "02",
    title: "Human + AI Experience",
    description:
      "Reimagine customer journeys with intelligent experiences that protect human connection, privacy and quality.",
    icon: FiUsers,
    label: "CUSTOMER EXPERIENCE",
  },
  {
    number: "03",
    title: "Cyber Resilience & Digital Trust",
    description:
      "Strengthen identity, data and cloud security while preparing for AI-powered threats and operational risk.",
    icon: FiShield,
    label: "SECURITY & GOVERNANCE",
  },
  {
    number: "04",
    title: "Simplify, Modernize & Scale",
    description:
      "Reduce technology complexity, modernize legacy foundations and accelerate delivery through strategic partnerships.",
    icon: FiLayers,
    label: "TECHNOLOGY TRANSFORMATION",
  },
  {
    number: "05",
    title: "Data-Led Decision Making",
    description:
      "Break down data silos and build trusted, governed, AI-ready foundations for faster, smarter decisions.",
    icon: FiDatabase,
    label: "DATA & INTELLIGENCE",
  },
  {
    number: "06",
    title: "The Autonomous Enterprise",
    description:
      "Prepare architecture, operating models and governance for AI agents and the next generation of digital work.",
    icon: FiTrendingUp,
    label: "WHAT COMES NEXT",
  },
];

export function AgendaPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 65%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.82], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="agenda-pillars"
      className="relative isolate overflow-hidden bg-[#06182f] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Ambient background details — intentionally no large photos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/[0.09] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#5eead4] sm:text-sm">
            The conversations that move business forward
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Six pillars.{" "}
            <span className="text-[#5eead4]">One intelligent future.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            A focused agenda for technology leaders navigating AI adoption,
            digital trust and enterprise-wide transformation.
          </p>
          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#5eead4] to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Track remains subtle; the brighter line grows as the section enters view. */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-white/10 md:block"
          />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleY: lineScale, originY: 0 }}
            className={`absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-[#5eead4] via-cyan-400 to-blue-500 md:block ${
              reduceMotion ? "opacity-70" : ""
            }`}
          />

          <div className="grid gap-4 md:gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 24, x: 8 }
                  }
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative md:pl-16"
                >
                  {/* Timeline node */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[17px] top-8 z-10 hidden h-[21px] w-[21px] items-center justify-center rounded-full border border-[#5eead4]/60 bg-[#06182f] md:flex"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] shadow-[0_0_12px_rgba(94,234,212,.8)]" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#5eead4]/35 hover:bg-white/[0.055] sm:p-7 lg:p-8">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.045] blur-3xl transition duration-300 group-hover:bg-cyan-300/[0.10]"
                    />
                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                      <div className="flex items-center gap-4 sm:w-[245px] sm:shrink-0">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#5eead4]/25 bg-[#0b2e46] text-[#5eead4] transition duration-300 group-hover:border-[#5eead4]/60 group-hover:bg-[#0c3b50]">
                          <Icon size={24} strokeWidth={1.55} />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#5eead4]/90">
                            PILLAR {pillar.number}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                            {pillar.label}
                          </p>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-white sm:text-xl lg:text-2xl">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                          {pillar.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="hidden text-4xl font-light tracking-tight text-white/[0.08] transition duration-300 group-hover:text-[#5eead4]/25 lg:block"
                      >
                        {pillar.number}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55 }}
          className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-slate-400 sm:mt-14"
        >
          Strategy · Security · Scale · Measurable impact
        </motion.p>
      </div>
    </section>
  );
}

export default AgendaPillars;
