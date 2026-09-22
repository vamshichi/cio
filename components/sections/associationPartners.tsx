"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { Space_Grotesk, Manrope } from "next/font/google";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

/* ==========================================================================
   DESIGN TOKENS — shared with the About page
============================================================================ */

const COLORS = {
  base: "#050B18",
  panel: "#0A1530",
  raised: "#0E1B33",
  cream: "#F6F9F8",
  inkSoft: "rgba(246,249,248,0.66)",
  muted: "rgba(246,249,248,0.52)",
  faint: "rgba(246,249,248,0.32)",
  teal: "#2BC4AE",
  tealDeep: "#0F5850",
  tealLight: "#7EE7D3",
  tealGlow: "rgba(43,196,174,0.18)",
  line: "rgba(246,249,248,0.10)",
  lineStrong: "rgba(246,249,248,0.18)",
};

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ==========================================================================
   PARTNER DATA
============================================================================ */

const strategicPartner = {
  name: "Precision Staffers",
  logo: "/sponsors/Precision HD-Logo.png",
};

const StrategicTechnologyPartners = [
  {
    name: "Ingram Micro",
    logo: "/sponsors/Ingram Micro logo.jpeg",
  },
  {
    name: "TELUS Digital",
    logo: "/sponsors/TELUS_Digital_company_logo.png",
  },
];

/* ==========================================================================
   ANIMATION
============================================================================ */

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 24,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    margin: "-60px",
  },

  transition: {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

/* ==========================================================================
   BACKDROP — same hairline grid + glow orbs as the About page
============================================================================ */

function GridGlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
        <defs>
          <pattern id="partners-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke={COLORS.cream} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#partners-grid)" />
      </svg>

      <div
        className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{ background: COLORS.tealGlow }}
      />

      <div
        className="absolute left-[-250px] top-[25%] h-[450px] w-[450px] rounded-full blur-[140px]"
        style={{ background: "rgba(43,196,174,0.06)" }}
      />

      <div
        className="absolute bottom-[10%] right-[-220px] h-[450px] w-[450px] rounded-full blur-[140px]"
        style={{ background: "rgba(43,196,174,0.07)" }}
      />

      {!reduceMotion && (
        <motion.div
          animate={{ y: ["-10%", "1000%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.tealLight}22, transparent)`,
          }}
        />
      )}
    </div>
  );
}

/* ==========================================================================
   CORNER BRACKETS
============================================================================ */

function CornerBrackets() {
  return (
    <>
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t" style={{ borderColor: COLORS.tealLight, opacity: 0.5 }} />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t" style={{ borderColor: COLORS.tealLight, opacity: 0.5 }} />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l" style={{ borderColor: COLORS.tealLight, opacity: 0.5 }} />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r" style={{ borderColor: COLORS.tealLight, opacity: 0.5 }} />
    </>
  );
}

/* ==========================================================================
   SECTION LABEL — bracketed kicker, matching the About page
============================================================================ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <div
        className="flex h-6 w-6 items-center justify-center rounded-sm border"
        style={{ borderColor: COLORS.line, background: COLORS.raised }}
      >
        <Award className="h-3 w-3" style={{ color: COLORS.tealLight }} />
      </div>

      <h3
        className={`${display.className} text-[25px] font-semibold uppercase tracking-[0.08em] sm:text-[20px]`}
        style={{ color: COLORS.tealLight }}
      >
        {children}
      </h3>
    </div>
  );
}

/* ==========================================================================
   TECHNOLOGY PARTNER CARD — larger logo stage
============================================================================ */

function TechnologyPartnerCard({
  partner,
  index,
}: {
  partner: (typeof StrategicTechnologyPartners)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...fadeUp(index * 0.08)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
      }
      
    >
      {/* <CornerBrackets /> */}

      {/* Top accent */}
      {/* <div
        className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 opacity-50 transition-all duration-300 group-hover:w-32 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.teal}, transparent)` }}
      /> */}

      {/* Logo stage — enlarged */}
      <div className="flex min-h-[220px] items-center justify-center px-8 py-10">
        <div
          className=""
          style={{ borderColor: COLORS.line, background: "rgba(246,249,248,0.03)" }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={480}
            height={220}
            className="max-h-[96px] w-auto max-w-[300px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* Footer */}
      {/* <div className="border-t px-5 py-4" style={{ borderColor: COLORS.line }}>
        <p
          className={`${sans.className} text-center text-[11px] font-semibold uppercase tracking-[0.12em]`}
          style={{ color: COLORS.muted }}
        >
          {partner.name}
        </p>
      </div> */}
    </motion.div>
  );
}

/* ==========================================================================
   TECHNOLOGY PARTNERS FRAME
============================================================================ */

function TechnologyPartnersFrame() {
  return (
    <motion.div {...fadeUp(0.05)} className="relative mx-auto max-w-5xl">
      <div className="grid gap-5 md:grid-cols-2">
        {StrategicTechnologyPartners.map((partner, index) => (
          <TechnologyPartnerCard key={partner.name} partner={partner} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   STRATEGIC PARTNER — largest logo stage on the page
============================================================================ */

function StrategicPartnerCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...fadeUp(0.12)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
      }
      
    >
      {/* <CornerBrackets /> */}

      {/* Accent */}
      <div
        className=""
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.teal}, transparent)` }}
      />

      {/* Logo stage — enlarged */}
      <div className="relative flex min-h-[260px] items-center justify-center px-8 py-12">
        <div
          className=""
          style={{ background: COLORS.tealGlow }}
        />

        <div
          className=""
          style={{ borderColor: COLORS.lineStrong, background: "rgba(246,249,248,0.03)" }}
        >
          <Image
            src={strategicPartner.logo}
            alt={strategicPartner.name}
            width={560}
            height={260}
            className="max-h-[120px] w-auto max-w-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* Footer */}
      {/* <div className="border-t px-5 py-5 sm:px-7" style={{ borderColor: COLORS.line }}>
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <p
            className={`${display.className} text-[13px] font-semibold uppercase tracking-[0.1em]`}
            style={{ color: COLORS.cream }}
          >
            {strategicPartner.name}
          </p>
          <span className="hidden h-1 w-1 rounded-full sm:block" style={{ background: COLORS.teal }} />
          <p
            className={`${sans.className} text-[11px] uppercase tracking-[0.12em]`}
            style={{ color: COLORS.tealLight }}
          >
            Strategic Partner
          </p>
        </div>
      </div> */}
    </motion.div>
  );
}

/* ==========================================================================
   MAIN SECTION
============================================================================ */

export default function PartnersSection() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#centricsoftware-registration") {
        setOpenModal(true);
      } else {
        setOpenModal(false);
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <section
      id="partners"
      className={`${sans.className} relative overflow-hidden py-12 sm:py-16 lg:py-20`}
      style={{ background: COLORS.base }}
    >
      <GridGlow />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* HERO */}
        <motion.div {...fadeUp()} className="mx-auto mb-14 max-w-4xl text-center sm:mb-16">
          <h2
            className={`${display.className} text-[48px] font-semibold leading-[0.95] tracking-[-0.015em] sm:text-6xl md:text-7xl lg:text-[76px]`}
            style={{ color: COLORS.cream }}
          >
            Our{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${COLORS.tealLight}, ${COLORS.teal})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Partners
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2.5">
            <span className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.lineStrong})` }} />
            <span
              className="h-[6px] w-[6px] rotate-45"
              style={{ background: COLORS.teal, boxShadow: `0 0 12px ${COLORS.teal}` }}
            />
            <span className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, ${COLORS.lineStrong}, transparent)` }} />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-6 sm:text-[15px]" style={{ color: COLORS.muted }}>
            Collaborating with industry-leading organizations to drive
            meaningful conversations, innovation, executive networking and
            technology leadership.
          </p>
        </motion.div>

        {/* TECHNOLOGY PARTNERS */}
        <div className="mb-14 sm:mb-16">
          <SectionLabel>Strategic Technology Partners</SectionLabel>
          <TechnologyPartnersFrame />
        </div>

        {/* STRATEGIC PARTNER */}
        <div>
          <SectionLabel>Strategic Partner</SectionLabel>
          <StrategicPartnerCard />
        </div>
      </div>

      {/* BOTTOM GLOW */}
      {/* <div
        className="pointer-events-none absolute bottom-[-150px] left-1/2 h-[280px] w-[800px] -translate-x-1/2 rounded-[50%] blur-[100px]"
        style={{ background: "rgba(43,196,174,0.05)" }}
      /> */}

      {/* <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2"
        style={{ background: `linear-gradient(90deg, transparent, ${COLORS.lineStrong}, transparent)` }}
      /> */}

      <PartnerRegistrationModal
        open={openModal}
        onClose={() => {
          window.history.pushState({}, "", window.location.pathname);
          setOpenModal(false);
        }}
      />
    </section>
  );
}