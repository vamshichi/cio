

"use client";



import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import {

  FiArrowDownRight,

  FiArrowUpRight,


  FiDatabase,

  FiShield,

  FiTrendingUp,

} from "react-icons/fi";



const priorities = [

  {

    number: "01",

    title: "Build the foundation",

    category: "DATA & INFRASTRUCTURE",

    description:

      "Connect enterprise data, systems and infrastructure to create a reliable foundation for AI at scale.",

    icon: FiDatabase,

  },

  {

    number: "02",

    title: "Establish trust",

    category: "SECURITY & GOVERNANCE",

    description:

      "Make security, regulatory compliance and responsible AI integral to every deployment.",

    icon: FiShield,

  },

  {

    number: "03",

    title: "Prove the value",

    category: "BUSINESS TRANSFORMATION",

    description:

      "Translate AI investments into measurable outcomes, operational improvements and business impact.",

    icon: FiTrendingUp,

  },

];



const journey = [

  {

    number: "01",

    label: "THE PILOT",

    title: "It works in isolation.",

    description:

      "Promising experiments demonstrate what AI can achieve.",

    status: "PROVEN POTENTIAL",

  },

  {

    number: "02",

    label: "THE CHALLENGE",

    title: "Can it work everywhere?",

    description:

      "Data, security, governance and operating models determine what scales.",

    status: "THE CRITICAL GAP",

  },

  {

    number: "03",

    label: "THE OUTCOME",

    title: "Built for production.",

    description:

      "Enterprise-wide deployment delivers accountable, measurable value.",

    status: "THE OBJECTIVE",

  },

];



export default function AboutEvent() {

  const reduceMotion = useReducedMotion();

  const imageRef = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
  target: imageRef,
  offset: ["start end", "end start"],
});

const imageY = useTransform(
  scrollYProgress,
  [0, 1],
  [10, -10]
);

  return (

    <section

      id="about"

      className="relative overflow-hidden bg-[#F5F8FB] px-5 py-20 text-[#102746] sm:px-8 sm:py-28 lg:px-14 lg:py-32"

    >

      {/* Subtle editorial background details */}

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#0D9488]/[0.035] blur-[100px]" />



      <div className="relative mx-auto max-w-[1380px]">

        {/* Section identity */}

        <motion.div

          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{ duration: 0.6 }}

          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCE5ED] pb-5"

        >

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#0D9488]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B2E68] sm:text-xs">

              About the conference

            </span>

          </div>



          <span className="text-[10px] uppercase tracking-[0.16em] text-[#7A8999] sm:text-xs">

            New Delhi / India / 2026

          </span>

        </motion.div>



        {/* Centered conference introduction */}
        <div className="mx-auto max-w-5xl pt-12 text-center sm:pt-16 lg:pt-20">
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0D9488] sm:text-xs"
          >
            The theme for 2026
          </motion.p>
          <motion.h2
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-5 max-w-4xl text-[clamp(40px,5.5vw,76px)] font-semibold leading-[1.04] tracking-[-0.06em]"
          >
            The pilot was only <span className="text-[#0D9488]">the beginning.</span>
          </motion.h2>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-7 max-w-4xl space-y-4 text-sm leading-7 text-[#596B7F] sm:text-base sm:leading-8"
          >
            <p>
              Indian enterprises have proved that AI works. The next challenge is making it work across business units, on production data, within regulatory guardrails and with measurable business value.
            </p>
            <p>
              The distance between a successful pilot and enterprise-wide impact is where the real work begins. It takes more than a capable model: it requires trusted data, robust security, effective governance, new operating models and people prepared to work differently.
            </p>
            <p>
              The 3rd CIO Tech Leadership Conference &amp; Awards brings technology leaders together to address these challenges through practical experiences, strategic conversations and lessons from real-world implementation.
            </p>
          </motion.div>
        </div>

        {/* Conference image and transformation journey side by side */}
        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            ref={imageRef}
            initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <motion.figure
              style={{ y: reduceMotion ? 0 : imageY }}
              className="relative isolate h-full min-h-[340px] overflow-hidden rounded-2xl border border-[#DCE5ED] bg-[#E7EEF4] shadow-[0_18px_45px_rgba(16,39,70,0.10)] sm:min-h-[500px]"
            >
              <Image
                src="/images/about/previous-event.png"
                alt="CIO and technology leaders attending a previous conference"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06172F]/75 via-[#06172F]/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-3 inline-flex rounded-full border border-white/30 bg-[#06172F]/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:text-xs">
                  Previous editions
                </span>
                <p className="max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">
                  Conversations that move enterprise technology forward.
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="flex min-w-0 flex-col"
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#DCE5ED] pb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#102746] sm:text-xs">
                The transformation journey
              </p>
              <span className="font-mono text-xs text-[#8B99A8]">01 — 03</span>
            </div>
            <div className="grid flex-1 gap-3">
              {journey.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.1 }}
                  className={`relative flex flex-col justify-center border p-4 sm:p-5 ${index === 2 ? "border-[#0D9488]/30 bg-white shadow-[0_10px_35px_rgba(16,39,70,0.055)]" : "border-[#E0E7EE] bg-white/65"}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0D9488] sm:text-[10px]">{item.label}</span>
                    <span className="font-mono text-[10px] text-[#8A98A8]">{item.number}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug tracking-[-0.025em] text-[#102746] sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#68798B] sm:text-sm sm:leading-6">{item.description}</p>
                  <p className={`mt-3 text-[8px] font-semibold uppercase tracking-[0.12em] sm:text-[9px] ${index === 2 ? "text-[#0D9488]" : "text-[#8A98A8]"}`}>{item.status}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#DCE5ED] pt-4">
              <p className="text-[10px] uppercase tracking-[0.13em] text-[#7A8999]">From experimentation to impact</p>
              <FiArrowUpRight className="text-[#0D9488]" size={18} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-4 border-t border-[#DCE5ED] pt-6 text-center"
        >
          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0D9488]/25 text-[#0D9488]">
            <FiArrowDownRight size={19} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A8999]">The leadership question</p>
            <p className="mt-2 text-lg font-medium leading-snug tracking-tight text-[#102746] sm:text-xl">How do we make enterprise AI work at scale?</p>
          </div>
        </motion.div>

                {/* Three strategic priorities */}

        <div className="mt-20 border-t border-[#DCE5ED] pt-10 sm:mt-28 sm:pt-14">

          <motion.div

            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.25 }}

            transition={{ duration: 0.6 }}

            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"

          >

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0D9488] sm:text-xs">

                What leaders need to solve

              </p>



              <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#102746] sm:text-4xl lg:text-5xl">

                Turning ambition into execution.

              </h3>

            </div>



            <p className="max-w-sm text-sm leading-7 text-[#68798B]">

              Three connected priorities shaping the enterprise AI agenda.

            </p>

          </motion.div>



          <div className="mt-9 grid border-t border-[#DCE5ED] md:grid-cols-3">

            {priorities.map((priority, index) => {

              const Icon = priority.icon;



              return (

                <motion.article

                  key={priority.number}

                  initial={

                    reduceMotion ? undefined : { opacity: 0, y: 15 }

                  }

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true, amount: 0.2 }}

                  transition={{

                    duration: 0.55,

                    delay: reduceMotion ? 0 : index * 0.12,

                  }}

                  className={`group relative py-7 md:py-8 md:pr-7 ${

                    index > 0

                      ? "border-t border-[#DCE5ED] md:border-l md:border-t-0 md:pl-7"

                      : ""

                  }`}

                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-xs text-[#0D9488]">

                      {priority.number}

                    </span>



                    <Icon

                      size={20}

                      strokeWidth={1.5}

                      className="text-[#0B2E68] transition-colors duration-300 group-hover:text-[#0D9488]"

                    />

                  </div>



                  <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0D9488]">

                    {priority.category}

                  </p>



                  <h4 className="mt-3 text-xl font-semibold tracking-tight text-[#102746]">

                    {priority.title}

                  </h4>



                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#68798B]">

                    {priority.description}

                  </p>



                  <div className="mt-6 h-px w-full bg-[#E2E9EF]">

                    <motion.div

                      initial={{ scaleX: 0 }}

                      whileInView={{ scaleX: 1 }}

                      viewport={{ once: true }}

                      transition={{

                        duration: 0.7,

                        delay: reduceMotion ? 0 : index * 0.15,

                      }}

                      className="h-px w-12 origin-left bg-[#0D9488]"

                    />

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>



        {/* Closing statement */}

        <motion.div

          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{ duration: 0.65 }}

          className="mt-12 flex flex-col justify-between gap-5 border-t border-[#DCE5ED] pt-7 sm:mt-16 sm:flex-row sm:items-center"

        >

          <p className="max-w-3xl text-lg font-medium leading-relaxed tracking-tight text-[#102746] sm:text-xl">

            Less experimentation for its own sake.

            <span className="text-[#0D9488]">

              {" "}More AI that delivers.

            </span>

          </p>



          <div className="shrink-0 text-xs leading-6 text-[#7A8999]">

            <p>12 November 2026</p>

            <p>The LaLiT, New Delhi</p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}
