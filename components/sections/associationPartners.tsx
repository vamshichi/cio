"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

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

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 35,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

/* -------------------------------------------------------------------------- */
/* TECH BACKGROUND                                                             */
/* -------------------------------------------------------------------------- */

function TechBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main technical grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(70,140,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(70,140,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top center glow */}
      <div className="absolute left-1/2 top-[-260px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[150px]" />

      {/* Left atmosphere */}
      <div className="absolute left-[-220px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

      {/* Right atmosphere */}
      <div className="absolute right-[-220px] bottom-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

      {/* Moving scan line */}
      {!reduceMotion && (
        <motion.div
          animate={{
            y: ["-10%", "1100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        />
      )}

      {/* Vertical technical lights */}
      <div className="absolute left-[7%] top-[50%] h-32 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />
      <div className="absolute right-[7%] top-[45%] h-32 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CORNER BRACKETS                                                             */
/* -------------------------------------------------------------------------- */

function CornerBrackets() {
  return (
    <>
      <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-blue-400/60" />
      <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-blue-400/60" />
      <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-blue-400/60" />
      <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-blue-400/60" />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION LABEL                                                               */
/* -------------------------------------------------------------------------- */

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
    <div className="mb-7 flex items-center justify-center gap-3">
      {icon && (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/[0.06]">
          <Award className="h-3.5 w-3.5 text-cyan-300" />
        </div>
      )}

      <h3 className="text-[12px] font-semibold uppercase tracking-[3px] text-cyan-300 sm:text-sm">
        {children}
      </h3>

      {sideText && (
        <>
          <span className="hidden h-px w-10 bg-cyan-400/40 sm:block" />

          <span className="hidden font-mono text-[8px] uppercase tracking-[2px] text-slate-600 sm:block">
            {sideText}
          </span>
        </>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TECHNOLOGY PARTNER CARD                                                     */
/* -------------------------------------------------------------------------- */

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
      {...fadeUp(index * 0.12)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative flex-1"
    >
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-[20px] bg-gradient-to-b from-blue-400/40 via-cyan-400/10 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-[20px] border border-blue-400/20 bg-[#061326]/85 backdrop-blur-xl transition-all duration-500 group-hover:border-blue-400/60">
        <CornerBrackets />

        {/* Animated top line */}
        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 transition-all duration-500 group-hover:w-40 group-hover:opacity-100" />

        {/* Logo area */}
        <div className="flex min-h-[220px] items-center justify-center px-8 py-12">
          <div className="relative flex h-[105px] w-full max-w-[260px] items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.025] p-5 transition-all duration-500 group-hover:border-blue-400/20 group-hover:bg-white/[0.04]">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={380}
              height={160}
              className="max-h-[72px] w-auto max-w-[210px] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
                Technology Alliance
              </p>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[2px] text-slate-300">
                {partner.name}
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.05] transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/[0.08]">
              <ArrowUpRight className="h-3.5 w-3.5 text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN TECHNOLOGY PARTNERS FRAME                                              */
/* -------------------------------------------------------------------------- */

function TechnologyPartnersFrame() {
  return (
    <motion.div
      {...fadeUp(0.1)}
      className="relative mx-auto max-w-5xl"
    >
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-[30px] bg-blue-500/[0.035] blur-2xl" />

      {/* Main frame */}
      <div className="relative rounded-[26px] border border-blue-400/30 bg-[#031021]/65 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
        <CornerBrackets />

        {/* Frame top metadata */}
        <div className="mb-5 flex items-center justify-between px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-500">
              Technology Alliance Network
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[3px] text-slate-700">
            01 / 02
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {StrategicTechnologyPartners.map((partner, index) => (
            <TechnologyPartnerCard
              key={partner.name}
              partner={partner}
              index={index}
            />
          ))}
        </div>

        {/* Frame bottom */}
        <div className="mt-5 flex items-center justify-center gap-3 px-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />

          <span className="font-mono text-[7px] uppercase tracking-[3px] text-slate-700">
            Powering Tomorrow
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* STRATEGIC PARTNER                                                            */
/* -------------------------------------------------------------------------- */

function StrategicPartnerCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...fadeUp(0.2)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className="group relative mx-auto max-w-5xl"
    >
      {/* Glow */}
      <div className="absolute -inset-2 rounded-[28px] bg-cyan-400/[0.035] blur-2xl transition-opacity duration-500 group-hover:bg-cyan-400/[0.07]" />

      <div className="relative overflow-hidden rounded-[26px] border border-cyan-400/30 bg-[#031021]/70 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <CornerBrackets />

        {/* Top line */}
        <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-56" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-500">
              Strategic Alliance
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[3px] text-slate-700">
            02 / 02
          </span>
        </div>

        {/* Logo */}
        <div className="relative flex min-h-[250px] items-center justify-center px-8 py-12">
          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[70px]" />

          <div className="relative flex h-[125px] w-[280px] items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-white/[0.04]">
            <Image
              src={strategicPartner.logo}
              alt={strategicPartner.name}
              width={380}
              height={160}
              className="max-h-[85px] w-auto max-w-[230px] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] px-6 py-5 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
                People · Power · Progress
              </p>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[2.5px] text-slate-300">
                {strategicPartner.name}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400/40" />

              <span className="font-mono text-[8px] uppercase tracking-[2px] text-cyan-300/70">
                Strategic Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIGITAL HORIZON                                                             */
/* -------------------------------------------------------------------------- */

function DigitalHorizon() {
  return (
    <div className="pointer-events-none relative mx-auto mt-[-5px] h-32 max-w-[1000px] overflow-hidden sm:h-40">
      {/* Horizon glow */}
      <div className="absolute bottom-[-115px] left-1/2 h-[210px] w-[850px] -translate-x-1/2 rounded-[50%] border border-blue-400/30 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_65%)]" />

      {/* Horizon line */}
      <div className="absolute bottom-[26px] left-1/2 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.35)]" />

      {/* Digital dots */}
      <div
        className="absolute bottom-[-20px] left-1/2 h-28 w-[80%] -translate-x-1/2 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(56,189,248,0.55) 1px, transparent 1px)",
          backgroundSize: "9px 9px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 35%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 35%, transparent)",
        }}
      />

      {/* Center beam */}
      <div className="absolute bottom-[26px] left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-t from-cyan-400/30 to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION                                                                */
/* -------------------------------------------------------------------------- */

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
      className="relative overflow-hidden bg-[#020817] py-20 sm:py-24 lg:py-32"
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND                                                          */}
      {/* ------------------------------------------------------------------ */}

      <TechBackground />

      {/* ------------------------------------------------------------------ */}
      {/* SIDE EDITORIAL LABELS                                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute left-6 top-32 hidden xl:block">
        <div className="border-l border-blue-400/30 pl-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              People
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Ideas
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Technology
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-blue-400/60">
              Impact
            </span>
          </div>

          <div className="mt-5 h-px w-10 bg-blue-400/60" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-32 hidden xl:block">
        <div className="text-right">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Partnerships
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              For A
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              Brighter
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[3px] text-blue-400/60">
              Tomorrow
            </span>
          </div>

          <div className="ml-auto mt-5 h-px w-10 bg-blue-400/60" />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CONTENT                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* ================================================================ */}
        {/* HERO HEADER                                                       */}
        {/* ================================================================ */}

        <motion.div
          {...fadeUp()}
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/[0.06] px-5 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            <span className="text-[9px] font-medium uppercase tracking-[3px] text-blue-200">
              Stronger Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-[52px] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          {/* Decorative line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/60 sm:w-20" />

            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-4 w-4 rounded-full border border-blue-400/20" />

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/60 sm:w-20" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Collaborating with industry-leading organizations to drive
            meaningful conversations, innovation, executive networking and
            technology leadership.
          </p>
        </motion.div>

        {/* ================================================================ */}
        {/* STRATEGIC TECHNOLOGY PARTNERS                                     */}
        {/* ================================================================ */}

        <div className="mb-16 sm:mb-20 lg:mb-24">
          <SectionLabel sideText="Powering Tomorrow">
            Strategic Technology Partners
          </SectionLabel>

          <TechnologyPartnersFrame />
        </div>

        {/* ================================================================ */}
        {/* STRATEGIC PARTNER                                                  */}
        {/* ================================================================ */}

        <div>
          <SectionLabel sideText="People · Power · Progress">
            Strategic Partner
          </SectionLabel>

          <StrategicPartnerCard />
        </div>

        {/* ================================================================ */}
        {/* DIGITAL HORIZON                                                    */}
        {/* ================================================================ */}

        <DigitalHorizon />

        {/* ================================================================ */}
        {/* FOOTER MICRO INFORMATION                                          */}
        {/* ================================================================ */}

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[3px] text-blue-400">
              CIO TECH 2026
            </span>

            <span className="h-px w-8 bg-blue-500/40" />

            <span className="font-mono text-[8px] uppercase tracking-[2px] text-slate-600">
              Leadership × Innovation × Impact
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[3px] text-slate-600">
              A More Intelligent Tomorrow
            </span>

            <span className="h-px w-8 bg-cyan-400/40" />

            <span className="font-mono text-[9px] uppercase tracking-[3px] text-blue-300">
              Delhi 2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom atmospheric glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[1000px] -translate-x-1/2 rounded-[50%] bg-blue-600/[0.06] blur-[100px]" />

      {/* Bottom line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* ------------------------------------------------------------------ */}
      {/* REGISTRATION MODAL                                                  */}
      {/* ------------------------------------------------------------------ */}

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