"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Space_Grotesk, Manrope } from "next/font/google";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

/* ==========================================================================
   TOKENS — white page, ink text, one gold accent for the Gold Partner
============================================================================ */

const C = {
  bg: "#FFFFFF",
  ink: "#0F172A",
  muted: "#5B6577",
  line: "#E8EAF0",
  goldDeep: "#9A6B00",
  gold: "#C9962B",
  goldTint: "#FFFBF0",
  goldLine: "#F1E2B8",
};

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

/* ==========================================================================
   DATA — add or remove partners here
============================================================================ */

type Partner = { name: string; logo: string };

type Tier = {
  title: string;
  note: string;
  partners: Partner[];
  logoHeight: string; // max logo height
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
   MOTION — a single quiet fade-in per row
============================================================================ */

const reveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/* ==========================================================================
   TIER ROW — label on the left, logos on the right (stacked on mobile)
============================================================================ */

function TierRow({ tier }: { tier: Tier }) {
  if (!tier.partners.length) return null;

  const multi = tier.partners.length > 1;

  return (
    <motion.div
      {...reveal}
      className="border-t"
      style={{
        borderColor: tier.gold ? C.goldLine : C.line,
        background: tier.gold ? C.goldTint : "transparent",
      }}
    >
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-10 sm:px-8 md:grid-cols-[280px_1fr] md:items-center md:gap-12 md:py-14">
        {/* Label */}
        <div>
          <div className="flex items-center gap-2.5">
            {tier.gold && (
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: `linear-gradient(135deg, #F3D27A, ${C.gold})` }}
              />
            )}
            <h3
              className={`${display.className} text-xl font-semibold tracking-tight sm:text-[22px]`}
              style={{ color: tier.gold ? C.goldDeep : C.ink }}
            >
              {tier.title}
            </h3>
          </div>
          <p className="mt-1.5 text-sm leading-6" style={{ color: C.muted }}>
            {tier.note}
          </p>
        </div>

        {/* Logos */}
        <div
          className={`grid items-center ${multi ? "grid-cols-1 sm:grid-cols-2 sm:divide-x" : "grid-cols-1"}`}
          style={{ borderColor: C.line }}
        >
          {tier.partners.map((p) => (
            <div
              key={p.name}
              className="group flex min-h-[110px] items-center justify-center px-6 py-4 sm:min-h-[130px]"
              style={{ borderColor: C.line }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={520}
                height={240}
                className={`${tier.logoHeight} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105`}
              />
            </div>
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
        className={`${sans.className} relative py-16 sm:py-20 lg:py-24`}
        style={{ background: C.bg }}
      >
        {/* Heading */}
        <motion.div {...reveal} className="mx-auto mb-12 max-w-2xl px-5 text-center sm:mb-16">
          <h2
            className={`${display.className} text-4xl font-semibold tracking-[-0.02em] sm:text-5xl lg:text-6xl`}
            style={{ color: C.ink }}
          >
            Our partners
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 sm:text-base" style={{ color: C.muted }}>
            Organizations that help us host meaningful conversations, executive
            networking and technology leadership.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="border-b" style={{ borderColor: C.line }}>
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