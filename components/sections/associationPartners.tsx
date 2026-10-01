"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { Space_Grotesk, Manrope } from "next/font/google";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

/* ==========================================================================
   TOKENS
============================================================================ */

const C = {
  bg: "#FFFFFF",
  ink: "#0F172A",
  muted: "#5B6577",
  line: "#E8EAF0",
  blue: "#3B5BFF",
  goldDeep: "#9A6B00",
  gold: "#C9962B",
  goldTint: "#FFFBF0",
  goldLine: "#F1E2B8",
};

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

/* ==========================================================================
   DATA
============================================================================ */

type Partner = { name: string; logo: string };

type Tier = {
  title: string;
  note: string;
  partners: Partner[];
  logoHeight: string;
  gold?: boolean;
};

const TIERS: Tier[] = [
  {
    title: "Gold Partner",
    note: "Premier supporting sponsor",
    partners: [{ name: "Gold Partner", logo: "/sponsors/Gold-Partner.png" }], // replace with real logo
    logoHeight: "max-h-[84px] sm:max-h-[100px]",
    gold: true,
  },
  {
    title: "Strategic Technology Partners",
    note: "Technology leadership and innovation",
    partners: [
      { name: "Ingram Micro", logo: "/sponsors/Ingram Micro logo.jpeg" },
      { name: "TELUS Digital", logo: "/sponsors/TELUS_Digital_company_logo.png" },
    ],
    logoHeight: "max-h-[56px] sm:max-h-[68px]",
  },
  {
    title: "Strategic Partner",
    note: "Leading this year's programme",
    partners: [{ name: "Precision Staffers", logo: "/sponsors/Precision HD-Logo.png" }],
    logoHeight: "max-h-[84px] sm:max-h-[100px]",
  },
  {
    title: "Broadcast Partner",
    note: "Official media and broadcast coverage",
    partners: [{ name: "Broadcast Partner", logo: "/partners/Broadcast.png" }],
    logoHeight: "max-h-[56px] sm:max-h-[68px]",
  },
];

/* ==========================================================================
   MOTION VARIANTS
============================================================================ */

const EASE = [0.22, 1, 0.36, 1] as const;

const rowVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const labelItem: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const logoItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

const wordItem: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

/* ==========================================================================
   BACKDROP — faint drifting colour + dot grid (very light, stays clean)
============================================================================ */

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#D9DEE9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 40%)",
        }}
      />
      <motion.div
        animate={{ x: [0, 90, -30, 0], y: [0, 40, 70, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[-160px] h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: "rgba(59,91,255,0.10)" }}
      />
      <motion.div
        animate={{ x: [0, -80, 20, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[4%] top-[-120px] h-[380px] w-[380px] rounded-full blur-[110px]"
        style={{ background: "rgba(201,150,43,0.12)" }}
      />
    </div>
  );
}

/* ==========================================================================
   HEADING — words rise out of a mask, then an underline draws
============================================================================ */

function Heading() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="relative z-10 mx-auto mb-12 max-w-2xl px-5 text-center sm:mb-16"
    >
      <h2
        className={`${display.className} flex flex-wrap justify-center gap-x-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl lg:text-6xl`}
        style={{ color: C.ink }}
      >
        {["Our", "partners"].map((w) => (
          <span key={w} className="overflow-hidden pb-1">
            <motion.span variants={wordItem} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.span
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
        className="mx-auto mt-5 block h-[3px] w-20 origin-center rounded-full"
        style={{ background: `linear-gradient(90deg, ${C.blue}, ${C.gold})` }}
      />

      <motion.p
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="mx-auto mt-5 max-w-xl text-[15px] leading-7 sm:text-base"
        style={{ color: C.muted }}
      >
        Organizations that help us host meaningful conversations, executive
        networking and technology leadership.
      </motion.p>
    </motion.div>
  );
}

/* ==========================================================================
   LOGO — floats gently, lifts on hover
============================================================================ */

function LogoCell({ partner, tier, index }: { partner: Partner; tier: Tier; index: number }) {
  return (
    <motion.div variants={logoItem} className="flex min-h-[110px] items-center justify-center px-6 py-4 sm:min-h-[130px]">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5 + index * 0.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="rounded-xl p-3 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={520}
            height={240}
            className={`${tier.logoHeight} w-auto max-w-full object-contain`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ==========================================================================
   TIER ROW
============================================================================ */

function TierRow({ tier }: { tier: Tier }) {
  if (!tier.partners.length) return null;
  const multi = tier.partners.length > 1;
  const lineColor = tier.gold ? C.goldLine : C.line;

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative overflow-hidden"
      style={{ background: tier.gold ? C.goldTint : "transparent" }}
    >
      {/* top line draws across */}
      <motion.span
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, ease: EASE } } }}
        className="absolute left-0 top-0 h-px w-full origin-left"
        style={{ background: lineColor }}
      />

      {/* gold shine sweep, repeats */}
      {tier.gold && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-12"
          initial={{ x: "-150%" }}
          animate={{ x: "520%" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,214,120,0.35), transparent)" }}
        />
      )}

      <div className="relative mx-auto grid max-w-[1100px] gap-6 px-5 py-10 sm:px-8 md:grid-cols-[280px_1fr] md:items-center md:gap-12 md:py-14">
        {/* Label */}
        <motion.div variants={labelItem}>
          <div className="flex items-center gap-2.5">
            {tier.gold && (
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: C.gold }}
                  animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative h-2.5 w-2.5 rounded-full" style={{ background: C.gold }} />
              </span>
            )}
            <h3
              className={`${display.className} text-xl font-semibold tracking-tight sm:text-[22px]`}
              style={{ color: tier.gold ? C.goldDeep : C.ink }}
            >
              {tier.title}
            </h3>
          </div>

          <motion.span
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease: EASE } } }}
            className="mt-3 block h-[2px] w-10 origin-left rounded-full"
            style={{ background: tier.gold ? C.gold : C.blue }}
          />

          <p className="mt-3 text-sm leading-6" style={{ color: C.muted }}>
            {tier.note}
          </p>
        </motion.div>

        {/* Logos */}
        <div
          className={`grid items-center ${multi ? "grid-cols-1 sm:grid-cols-2 sm:divide-x" : "grid-cols-1"}`}
          style={{ borderColor: C.line }}
        >
          {tier.partners.map((p, i) => (
            <LogoCell key={p.name} partner={p} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   SECTION
============================================================================ */

export default function PartnersSection() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const check = () => setOpenModal(window.location.hash === "#centricsoftware-registration");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="partners"
        className={`${sans.className} relative overflow-hidden py-16 sm:py-20 lg:py-24`}
        style={{ background: C.bg }}
      >
        <Backdrop />
        <Heading />

        <div className="relative z-10 border-b" style={{ borderColor: C.line }}>
          {TIERS.map((tier) => (
            <TierRow key={tier.title} tier={tier} />
          ))}
        </div>

        {/* <PartnerRegistrationModal
          open={openModal}
          onClose={() => {
            window.history.pushState({}, "", window.location.pathname);
            setOpenModal(false);
          }}
        /> */}
      </section>
    </MotionConfig>
  );
}