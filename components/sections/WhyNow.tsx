
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiTrendingUp,
  FiDatabase,
  FiShield,
  FiGitBranch,
  FiArrowUpRight,
  FiArrowRight,
  FiActivity,
} from "react-icons/fi";

const pressures = [
  {
    number: "01",
    title: "Boards want returns.",
    description:
      "AI has moved from the innovation budget to the P&L. CIOs are now expected to demonstrate business value, not just promising demos.",
    category: "BUSINESS VALUE",
    icon: FiTrendingUp,
    signal: "ROI",
  },
  {
    number: "02",
    title: "Data is the bottleneck.",
    description:
      "Fragmented systems, inconsistent data and inaccessible information can prevent promising AI programmes from scaling.",
    category: "DATA READINESS",
    icon: FiDatabase,
    signal: "DATA",
  },
  {
    number: "03",
    title: "Trust is non-negotiable.",
    description:
      "Privacy, sector-specific requirements and emerging AI regulations make governance essential to responsible deployment.",
    category: "RISK & GOVERNANCE",
    icon: FiShield,
    signal: "TRUST",
  },
  {
    number: "04",
    title: "Agents change the rules.",
    description:
      "AI systems that take action introduce new questions around identity, permissions, security and accountability.",
    category: "AGENTIC AI",
    icon: FiGitBranch,
    signal: "CONTROL",
  },
];

export default function WhyNow() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-now"
      className="relative isolate overflow-hidden bg-[#081B34] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14 lg:py-32"
    >
      {/* Restrained background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-teal-400/[0.07] blur-[130px]" />
        <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,210,220,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,210,220,.25) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1380px]">
        {/* Section header */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_#2dd4bf]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-200 sm:text-xs">
              Why now
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
            Four forces / One defining moment
          </p>
        </motion.div>

        {/* Headline and supporting statement */}
        <div className="grid gap-8 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pb-20 lg:pt-20">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
              The enterprise AI inflection point
            </p>

            <h2 className="max-w-4xl text-[clamp(40px,6vw,78px)] font-semibold leading-[1.02] tracking-[-0.06em]">
              The era of
              <br />
              experimentation
              <br />
              <span className="bg-gradient-to-r from-teal-200 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                is giving way
              </span>
              <br />
              to accountability.
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-lg lg:pb-2"
          >
            <div className="mb-6 h-px w-16 bg-teal-300/70" />

            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              The question is no longer whether AI belongs in the
              enterprise. It is whether organisations can make it
              secure, scalable and commercially meaningful.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs text-slate-400">
              <FiActivity className="text-teal-300" size={17} />
              <span>Four pressures are reshaping the agenda.</span>
            </div>
          </motion.div>
        </div>

        {/* Four pressure panels */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pressures.map((pressure, index) => {
            const Icon = pressure.icon;

            return (
              <motion.article
                key={pressure.number}
                initial={
                  reduceMotion ? undefined : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative flex min-h-[310px] flex-col overflow-hidden border border-white/10 bg-[#102844] p-5 transition-colors duration-300 hover:border-teal-300/45 hover:bg-[#13304E] sm:p-6 lg:min-h-[335px] lg:p-7"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-teal-300 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.12em] text-teal-200/80">
                    / {pressure.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-teal-200/15 bg-teal-200/[0.06] text-teal-200 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                </div>

                <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.17em] text-slate-400 sm:text-[10px]">
                  {pressure.category}
                </p>

                <h3 className="mt-3 max-w-[260px] text-xl font-semibold leading-snug tracking-[-0.035em] text-white sm:text-2xl">
                  {pressure.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300/80">
                  {pressure.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-slate-500">
                    {pressure.signal}
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="text-teal-200/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-200"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-200 sm:text-xs">
                The next 18 months matter
              </p>

              <h3 className="mt-4 max-w-4xl text-2xl font-medium leading-snug tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                The leaders who solve these challenges will shape what
                their industries become next.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Bring the hard questions. Exchange practical experience.
                Leave with perspectives you can put to work.
              </p>
            </div>

            <a
              href="#home"
              className="group inline-flex w-fit items-center gap-3 border border-teal-200/30 bg-teal-300 px-5 py-4 text-sm font-semibold text-[#071A34] transition-colors duration-300 hover:bg-teal-200"
            >
              Join the conversation
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-[10px] uppercase tracking-[0.15em] text-slate-500">
            <span>CIO Tech Leadership Conference & Awards</span>
            <span>12 November 2026 · New Delhi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
