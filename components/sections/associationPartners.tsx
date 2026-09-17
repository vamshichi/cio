"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

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
   TECH BACKGROUND
============================================================================ */

function TechBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(70,140,255,0.16) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(70,140,255,0.16) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Soft top glow */}
      <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

      {/* Left glow */}
      <div className="absolute left-[-250px] top-[25%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.045] blur-[140px]" />

      {/* Right glow */}
      <div className="absolute bottom-[10%] right-[-220px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[140px]" />

      {/* Moving scan */}
      {!reduceMotion && (
        <motion.div
          animate={{
            y: ["-10%", "1000%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent"
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
      <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-blue-400/40" />
      <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-blue-400/40" />
      <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-blue-400/40" />
      <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-blue-400/40" />
    </>
  );
}

/* ==========================================================================
   SECTION LABEL
============================================================================ */

function SectionLabel({
  icon = true,
  children,
  sideText,
}: {
  icon?: boolean;
  children: React.ReactNode;
  sideText?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3">
      {icon && (
        <div className="flex h-6 w-6 items-center justify-center rounded-md border border-cyan-400/25 bg-cyan-400/[0.05]">
          <Award className="h-3 w-3 text-cyan-300" />
        </div>
      )}

      <h3 className="text-[10px] font-semibold uppercase tracking-[2.5px] text-cyan-300 sm:text-[11px]">
        {children}
      </h3>

      {sideText && (
        <>
          <span className="hidden h-px w-8 bg-cyan-400/30 sm:block" />

          <span className="hidden font-mono text-[7px] uppercase tracking-[2px] text-slate-600 sm:block">
            {sideText}
          </span>
        </>
      )}
    </div>
  );
}

/* ==========================================================================
   TECHNOLOGY PARTNER CARD
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
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-[18px] bg-gradient-to-b from-blue-400/25 via-cyan-400/5 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[18px] border border-blue-400/15 bg-[#061326]/80 backdrop-blur-xl transition-colors duration-300 group-hover:border-blue-400/40">
        <CornerBrackets />

        {/* Top accent */}
        <div className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 transition-all duration-300 group-hover:w-32 group-hover:opacity-100" />

        {/* Logo */}
        <div className="flex min-h-[155px] items-center justify-center px-6 py-7">
          <div className="relative flex h-[88px] w-full max-w-[235px] items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.025] p-4 transition-colors duration-300 group-hover:border-blue-400/15 group-hover:bg-white/[0.035]">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={320}
              height={140}
              className="max-h-[58px] w-auto max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.05] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[2.5px] text-slate-600">
                Technology Alliance
              </p>

              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[1.8px] text-slate-300">
                {partner.name}
              </p>
            </div>

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/15 bg-blue-500/[0.04] transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.06]">
              <ArrowUpRight className="h-3 w-3 text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   TECHNOLOGY PARTNERS FRAME
============================================================================ */

function TechnologyPartnersFrame() {
  return (
    <motion.div
      {...fadeUp(0.05)}
      className="relative mx-auto max-w-5xl"
    >
      {/* Glow */}
      {/* <div className="absolute -inset-2 rounded-[24px] bg-blue-500/[0.025] blur-2xl" /> */}

      {/* Frame */}
      <div >
        {/* <CornerBrackets /> */}

        {/* Header */}
        <div className="mb-4 flex items-center justify-between px-1 sm:px-2">
          {/* <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="font-mono text-[7px] uppercase tracking-[2.5px] text-slate-500">
              Technology Alliance Network
            </span>
          </div> */}

          {/* <span className="font-mono text-[7px] tracking-[2px] text-slate-700">
            01 / 02
          </span> */}
        </div>

        {/* Cards */}
        <div className="grid gap-3 md:grid-cols-2">
          {StrategicTechnologyPartners.map((partner, index) => (
            <TechnologyPartnerCard
              key={partner.name}
              partner={partner}
              index={index}
            />
          ))}
        </div>

        {/* Small footer */}
        {/* <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-blue-500/30" />

          <span className="font-mono text-[6px] uppercase tracking-[2.5px] text-slate-700">
            Powering Tomorrow
          </span>

          <span className="h-px w-7 bg-gradient-to-l from-transparent to-blue-500/30" />
        </div> */}
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   STRATEGIC PARTNER
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
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative mx-auto max-w-5xl"
    >
      {/* Glow */}
      <div className="absolute -inset-2 rounded-[24px] bg-cyan-400/[0.025] blur-2xl transition-opacity duration-500 group-hover:bg-cyan-400/[0.05]" />

      <div className="relative overflow-hidden rounded-[22px] border border-cyan-400/20 bg-[#031021]/65 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <CornerBrackets />

        {/* Accent */}
        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 transition-all duration-300 group-hover:w-40" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.05] px-5 py-3.5 sm:px-7">
          {/* <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="font-mono text-[7px] uppercase tracking-[2.5px] text-slate-500">
              Strategic Alliance
            </span>
          </div>

          <span className="font-mono text-[7px] tracking-[2px] text-slate-700">
            02 / 02
          </span> */}
        </div>

        {/* Logo */}
        <div className="relative flex min-h-[175px] items-center justify-center px-6 py-7">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[65px]" />

          <div className="relative flex h-[100px] w-[250px] items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] p-5 transition-colors duration-300 group-hover:border-cyan-400/15">
            <Image
              src={strategicPartner.logo}
              alt={strategicPartner.name}
              width={340}
              height={150}
              className="max-h-[68px] w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.05] px-5 py-4 sm:px-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[2.5px] text-slate-600">
                People · Power · Progress
              </p>

              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[2px] text-slate-300">
                {strategicPartner.name}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-cyan-400/30" />

              <span className="font-mono text-[7px] uppercase tracking-[1.8px] text-cyan-300/70">
                Strategic Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   MAIN SECTION
============================================================================ */

export default function PartnersSection() {
  const [openModal, setOpenModal] = useState(false);

  /* ------------------------------------------------------------------------
     HASH / MODAL
  ------------------------------------------------------------------------ */

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
      className="relative overflow-hidden bg-[#020817] py-12 sm:py-16 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <TechBackground />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            HERO
        ======================================================== */}

        <motion.div
          {...fadeUp()}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12"
        >
          {/* Eyebrow */}

          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.05] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-[8px] font-medium uppercase tracking-[2.5px] text-blue-200">
              Stronger Together
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[76px]">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-2.5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50 sm:w-14" />

            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 rounded-full border border-blue-400/20" />

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-blue-500/50 sm:w-14" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-6 text-slate-400 sm:text-sm sm:leading-6">
            Collaborating with industry-leading organizations to drive
            meaningful conversations, innovation, executive networking and
            technology leadership.
          </p>
        </motion.div>

        {/* =======================================================
            TECHNOLOGY PARTNERS
        ======================================================== */}

        <div className="mb-10 sm:mb-12">
          <SectionLabel >
            Strategic Technology Partners
          </SectionLabel>

          <TechnologyPartnersFrame />
        </div>

        {/* =======================================================
            STRATEGIC PARTNER
        ======================================================== */}

        <div>
          <SectionLabel sideText="People · Power · Progress">
            Strategic Partner
          </SectionLabel>

          <StrategicPartnerCard />
        </div>

      </div>

      {/* =========================================================
          BOTTOM GLOW
      ========================================================== */}

      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 h-[280px] w-[800px] -translate-x-1/2 rounded-[50%] bg-blue-600/[0.045] blur-[100px]" />

      {/* Bottom line */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* =========================================================
          REGISTRATION MODAL
      ========================================================== */}

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