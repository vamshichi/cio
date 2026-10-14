
"use client";

import Image from "next/image";
import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/partners/p1.png" },
  { name: "Partner 2", logo: "/partners/p2.png" },
  { name: "Partner 3", logo: "/partners/p3.png" },
  { name: "Partner 4", logo: "/partners/p4.png" },
  { name: "Partner 5", logo: "/partners/p5.png" },
  { name: "Partner 6", logo: "/partners/p6.png" },
  { name: "Partner 7", logo: "/partners/p7.png" },
  { name: "Partner 8", logo: "/partners/p8.png" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

function PremiumBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-[360px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#9AAFC0 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black, transparent 82%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 82%)",
        }}
      />

      <div className="absolute -left-36 -top-40 h-[420px] w-[420px] rounded-full bg-[#0D9488]/[0.07] blur-[120px]" />

      <div className="absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-[#C6A66B]/[0.12] blur-[130px]" />

      <div className="absolute left-[5.5%] top-0 hidden h-full w-px bg-[#0B2E68]/[0.08] lg:block" />

      <div className="absolute right-[5.5%] top-0 hidden h-full w-px bg-[#0B2E68]/[0.08] lg:block" />
    </div>
  );
}

function PartnerLogo({
  partner,
  index,
}: {
  partner: (typeof partners)[number];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex h-[118px] w-[190px] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#DFE5EB] bg-white px-6 py-5 shadow-[0_8px_28px_rgba(11,46,104,0.035)] transition-all duration-500 hover:border-[#0D9488]/50 hover:shadow-[0_18px_38px_rgba(11,46,104,0.10)] sm:h-[136px] sm:w-[225px]"
    >
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#0D9488] transition-all duration-500 group-hover:w-full" />

      <span className="absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-[#0B2E68]/20 transition-colors group-hover:border-[#0D9488]" />

      <span className="absolute right-3 top-3 h-2.5 w-2.5 border-r border-t border-[#0B2E68]/20 transition-colors group-hover:border-[#0D9488]" />

      <Image
        src={partner.logo}
        alt={partner.name}
        width={180}
        height={80}
        sizes="(max-width: 640px) 190px, 225px"
        className="relative z-10 max-h-[68px] w-auto max-w-[165px] object-contain opacity-100 transition-transform duration-500 group-hover:scale-[1.045] sm:max-w-[185px]"
        priority={index < 4}
      />
    </motion.div>
  );
}

export function Partners() {
  const reduceMotion = useReducedMotion();
  const track = [...partners, ...partners];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="partners"
        className="relative overflow-hidden bg-[#FAF9F6] py-20 text-[#102746] sm:py-24 lg:py-32"
      >
        <PremiumBackdrop />

        <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-70px" }}
            variants={stagger}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={reveal}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#0D9488]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0B6F69] sm:text-[11px]">
                The people behind the platform
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-16">
              <motion.div variants={reveal}>
                <h2 className="font-serif text-[clamp(2.7rem,6.5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#102746]">
                  A stronger future,
                  <br />
                  <span className="italic text-[#0D9488]">
                    built together.
                  </span>
                </h2>
              </motion.div>

              <motion.div variants={reveal} className="max-w-sm lg:pb-1">
                <div className="mb-5 h-px w-12 bg-[#0D9488]" />

                <p className="text-base leading-7 text-[#596779] sm:text-[16px] sm:leading-8">
                  We bring together organisations shaping enterprise
                  technology, innovation and leadership — creating space for
                  meaningful conversations and lasting partnerships.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-5 flex items-center justify-between border-b border-[#DCE3E9] pb-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#33485F] sm:text-[11px]">
                Our partners
              </span>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#7C8997] sm:block">
              CIO Tech Leadership Conference &amp; Awards · 2026
            </span>
          </motion.div>
        </div>

        {/* Continuous logo marquee */}
        <div className="group/marquee relative w-full overflow-hidden py-5 sm:py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#FAF9F6] to-transparent sm:w-24 lg:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#FAF9F6] to-transparent sm:w-24 lg:w-40" />

          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#DCE3E9]" />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#DCE3E9]" />

          <motion.div
            className="flex w-max gap-4 px-4 sm:gap-5 sm:px-5"
            animate={
              reduceMotion
                ? undefined
                : { x: ["0%", "-50%"] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 38,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{ willChange: reduceMotion ? "auto" : "transform" }}
          >
            {track.map((partner, index) => (
              <PartnerLogo
                key={`${partner.logo}-${index}`}
                partner={partner}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-10 flex max-w-[1240px] flex-col gap-4 px-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="max-w-2xl text-sm leading-7 text-[#596779]">
            In good company with the teams moving enterprise technology
            forward.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B6F69]">
            <span className="h-px w-8 bg-[#0D9488]" />
            Partnership · Progress · Impact
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default Partners;
