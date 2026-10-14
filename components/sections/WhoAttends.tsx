
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiShield,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiCloud,
  FiTrendingUp,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";

const audienceProfiles = [
  {
    number: "01",
    title: "CIOs and CTOs",
    category: "TECHNOLOGY LEADERSHIP",
    description:
      "Turn scattered pilots into an enterprise AI portfolio with a clear business case, measurable returns and a roadmap for scale.",
    icon: FiBriefcase,
  },
  {
    number: "02",
    title: "CISOs and Risk Leaders",
    category: "SECURITY & RISK",
    description:
      "Secure AI systems, enterprise data and autonomous agents without compromising business agility.",
    icon: FiShield,
  },
  {
    number: "03",
    title: "CDOs and Data Leaders",
    category: "DATA & ANALYTICS",
    description:
      "Make enterprise data AI-ready through stronger quality, accessibility, lineage and governance.",
    icon: FiDatabase,
  },
  {
    number: "04",
    title: "Chief AI Officers",
    category: "AI STRATEGY",
    description:
      "Build the operating models, platforms and talent required to move beyond the first successful use cases.",
    icon: FiCpu,
  },
  {
    number: "05",
    title: "Digital Transformation Leaders",
    category: "ENTERPRISE ARCHITECTURE",
    description:
      "Redesign business processes and enterprise architecture around AI instead of simply adding it to existing workflows.",
    icon: FiLayers,
  },
  {
    number: "06",
    title: "Cloud and Infrastructure Heads",
    category: "CLOUD & OPERATIONS",
    description:
      "Plan the compute, infrastructure, cost management and sovereignty requirements of enterprise AI workloads.",
    icon: FiCloud,
  },
  {
    number: "07",
    title: "Business and Functional Leaders",
    category: "BUSINESS OUTCOMES",
    description:
      "Connect technology investments to revenue growth, cost efficiency, customer experience and operational performance.",
    icon: FiTrendingUp,
  },
];

const industries = [
  "Banking & Financial Services",
  "Insurance & FinTech",
  "Manufacturing & Automotive",
  "Healthcare & Pharma",
  "Retail & E-commerce",
  "Telecommunications",
  "Energy & Utilities",
  "Logistics & Supply Chain",
  "Government & Public Sector",
  "Consumer & FMCG",
];

export default function WhoAttends() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="who-attends"
      className="relative overflow-hidden bg-[#F5F8FB] px-5 py-20 text-[#102746] sm:px-8 sm:py-28 lg:px-14 lg:py-32"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/[0.045] blur-[110px]" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="border-b border-[#DCE5ED] pb-8 sm:pb-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#0D9488]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2E68] sm:text-sm">
                Who is in the room
              </p>
            </div>

            <span className="text-xs uppercase tracking-[0.12em] text-[#738397] sm:text-sm">
              The people behind the decisions
            </span>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h2 className="max-w-4xl text-[clamp(40px,5.5vw,72px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              The people accountable for making AI work.
              <span className="mt-2 block text-[#0D9488]">
                Not just talking about it.
              </span>
            </h2>

            <div className="max-w-xl lg:pb-2">
              <p className="text-base leading-8 text-[#53677E] sm:text-lg sm:leading-9">
                CIO Tech brings together senior decision-makers who own
                the budgets, the risks and the business outcomes of
                enterprise AI.
              </p>

              <p className="mt-4 text-base leading-8 text-[#53677E] sm:text-lg sm:leading-9">
                An invitation-led, end-user-first environment for
                leaders working through the practical realities of
                technology transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Audience directory */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2E68] sm:text-sm">
              Executive profiles
            </p>

            <span className="text-sm text-[#738397]">
              07 leadership functions
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {audienceProfiles.map((profile, index) => {
              const Icon = profile.icon;

              return (
                <motion.article
                  key={profile.number}
                  initial={
                    reduceMotion ? undefined : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : (index % 3) * 0.08,
                  }}
                  className="group relative flex min-h-[285px] flex-col border border-[#DFE7EF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D9488]/50 hover:shadow-[0_16px_40px_rgba(16,39,70,0.07)] sm:p-7 lg:min-h-[310px] lg:p-8"
                >
                  {/* Top line */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#0D9488] transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm tracking-[0.12em] text-[#0D9488]">
                      / {profile.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-[#DCE9EC] bg-[#F1F8F8] text-[#0B2E68] transition-colors duration-300 group-hover:bg-[#0D9488] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0D9488] sm:text-xs">
                    {profile.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.035em] text-[#102746] sm:text-2xl">
                    {profile.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-7 text-[#53677E]">
                    {profile.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E5EBF1] pt-4">
                    <span className="text-xs font-medium text-[#738397]">
                      Leadership focus
                    </span>

                    <FiArrowUpRight
                      size={19}
                      className="text-[#0D9488] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Industry representation */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-20 border-t border-[#DCE5ED] pt-10 sm:mt-24 sm:pt-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9488] sm:text-sm">
                Industry representation
              </p>

              <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Across the enterprise economy.
              </h3>

              <p className="mt-5 max-w-md text-base leading-8 text-[#53677E]">
                Connecting leaders from sectors where data, security
                and intelligent operations are reshaping the way
                business gets done.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-medium text-[#0B2E68]">
                <span className="h-px w-8 bg-[#0D9488]" />
                Cross-industry perspectives
              </div>
            </div>

            <div className="border-y border-[#DCE5ED]">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={
                    reduceMotion ? undefined : { opacity: 0, x: 10 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : index * 0.035,
                  }}
                  className="group flex items-center justify-between gap-4 border-b border-[#E5EBF1] py-4 last:border-b-0 sm:py-[18px]"
                >
                  <span className="text-base font-medium text-[#344B65] transition-colors group-hover:text-[#0D9488] sm:text-lg">
                    {industry}
                  </span>

                  <FiArrowUpRight
                    size={18}
                    className="shrink-0 text-[#9AA9B7] transition-colors group-hover:text-[#0D9488]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Audience policy */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#DCE5ED] pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#CFE6E2] bg-white text-[#0D9488]">
              <FiBriefcase size={19} />
            </div>

            <div>
              <p className="text-base font-semibold text-[#102746] sm:text-lg">
                An audience built around decision-makers.
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-[#53677E] sm:text-base">
                Delegate passes are intended for end-user organisations.
                Solution providers can explore partnership opportunities.
              </p>
            </div>
          </div>

          <a
            href="#home"
            className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-[#0D9488]/50 pb-2 text-sm font-semibold text-[#0B2E68] transition-colors hover:text-[#0D9488] sm:self-center"
          >
            Explore the conference
            <FiArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
