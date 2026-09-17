"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  },
});

/* -------------------------------------------------------------------------- */
/* LIGHT TECHNICAL BACKGROUND                                                 */
/* -------------------------------------------------------------------------- */

function TechBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large technical grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8,36,59,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,36,59,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8,36,59,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,36,59,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Soft atmosphere */}
      <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.10] blur-[120px]" />
      <div className="absolute right-[-180px] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-300/[0.10] blur-[140px]" />
      <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-200/[0.12] blur-[130px]" />

      {/* Editorial vertical rules */}
      <div className="absolute left-[6%] top-0 hidden h-full w-px bg-[#08243B]/[0.055] lg:block" />
      <div className="absolute right-[6%] top-0 hidden h-full w-px bg-[#08243B]/[0.055] lg:block" />

      {/* Subtle scan */}
      {!reduceMotion && (
        <motion.div
          animate={{ y: ["-5%", "1000%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#55C7DC]/25 to-transparent"
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ORBITAL DETAIL                                                             */
/* -------------------------------------------------------------------------- */

function OrbitalDetail() {
  return (
    <div className="absolute right-[-90px] top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 md:block">
      <div className="absolute inset-[15%] rounded-full border border-[#176B9C]/10" />
      <div className="absolute inset-[28%] rounded-full border border-[#176B9C]/10" />
      <div className="absolute inset-[41%] rounded-full border border-[#55C7DC]/15" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#176B9C]/10 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#176B9C]/10 to-transparent" />
      <div className="absolute right-[20%] top-[19%] h-2 w-2 rounded-full bg-[#55C7DC]/50 shadow-[0_0_18px_rgba(85,199,220,0.5)]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION LABEL                                                              */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  children,
  number,
}: {
  children: React.ReactNode;
  number: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-[10px] font-medium tracking-[2px] text-[#176B9C]">
        {number}
      </span>
      <span className="h-px w-8 bg-[#176B9C]/30" />
      <span className="text-[10px] font-semibold uppercase tracking-[2.8px] text-[#607484]">
        {children}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PARTNER CARD                                                               */
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
    <motion.article
      {...fadeUp(index * 0.1)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="group relative"
    >
      <div className="absolute -inset-2 rounded-[24px] bg-[#55C7DC]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden border border-[#D9E3E8] bg-white shadow-[0_18px_55px_rgba(8,36,59,0.06)] transition-all duration-500 group-hover:border-[#176B9C]/30 group-hover:shadow-[0_24px_70px_rgba(8,36,59,0.10)]">
        {/* Top accent */}
        <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#176B9C] to-[#55C7DC] transition-all duration-500 group-hover:w-full" />

        {/* Card number */}
        <div className="flex items-center justify-between border-b border-[#D9E3E8]/70 px-6 py-4">
          <span className="font-mono text-[9px] tracking-[2px] text-[#91A1AD]">
            ALLIANCE / 0{index + 1}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[#91A1AD] transition-colors group-hover:text-[#176B9C]" />
        </div>

        {/* Logo stage */}
        <div className="relative flex min-h-[235px] items-center justify-center px-8 py-12">
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#55C7DC]/[0.045] blur-3xl" />

          <div className="relative flex h-[118px] w-full max-w-[290px] items-center justify-center border border-[#D9E3E8]/80 bg-[#F7FAFC] px-8 transition-all duration-500 group-hover:border-[#176B9C]/20 group-hover:bg-[#F3F8FB]">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={420}
              height={180}
              className="max-h-[72px] w-auto max-w-[220px] object-contain transition-transform duration-500 group-hover:scale-[1.035]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#D9E3E8]/80 px-6 py-5">
          <p className="font-mono text-[8px] uppercase tracking-[2.5px] text-[#91A1AD]">
            Technology Partner
          </p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-[-0.01em] text-[#08243B]">
              {partner.name}
            </h3>
            <span className="text-[9px] uppercase tracking-[1.5px] text-[#176B9C]">
              Collaborate
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/* STRATEGIC PARTNER                                                          */
/* -------------------------------------------------------------------------- */

function StrategicPartnerCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      {...fadeUp(0.15)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="group relative"
    >
      <div className="absolute -inset-2 rounded-[24px] bg-[#55C7DC]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden border border-[#176B9C]/20 bg-[#08243B] shadow-[0_25px_70px_rgba(8,36,59,0.14)]">
        {/* Decorative line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#176B9C] via-[#55C7DC] to-transparent" />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* Editorial copy */}
          <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[2.8px] text-[#55C7DC]">
                Strategic Alliance
              </span>

              <h3 className="mt-5 max-w-sm text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                Built around
                <br />
                <span className="text-[#BDECF4]">shared ambition.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                Strategic collaboration that strengthens the technology
                ecosystem and creates meaningful executive connections.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#55C7DC]/50" />
              <span className="font-mono text-[8px] uppercase tracking-[2px] text-white/35">
                People · Power · Progress
              </span>
            </div>

            <div className="absolute bottom-[-100px] right-[-100px] h-64 w-64 rounded-full border border-[#55C7DC]/10" />
          </div>

          {/* Logo */}
          <div className="relative flex min-h-[280px] items-center justify-center bg-white p-8 sm:p-12">
            <div className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(8,36,59,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(8,36,59,0.035) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative flex h-[145px] w-full max-w-[340px] items-center justify-center border border-[#D9E3E8] bg-[#F7FAFC] px-10 shadow-[0_12px_40px_rgba(8,36,59,0.06)] transition-all duration-500 group-hover:border-[#176B9C]/25">
              <Image
                src={strategicPartner.logo}
                alt={strategicPartner.name}
                width={440}
                height={190}
                className="max-h-[90px] w-auto max-w-[260px] object-contain transition-transform duration-500 group-hover:scale-[1.035]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 bg-[#061A2A] px-7 py-4 sm:flex-row sm:items-center sm:px-10">
          <span className="font-mono text-[8px] uppercase tracking-[2.5px] text-white/35">
            Featured Strategic Partner
          </span>
          <span className="text-xs font-medium tracking-[1px] text-[#BDECF4]">
            {strategicPartner.name}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION                                                               */
/* -------------------------------------------------------------------------- */

export default function PartnersSection() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setOpenModal(
        window.location.hash === "#centricsoftware-registration"
      );
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24 lg:py-28"
    >
      <TechBackground />
      <OrbitalDetail />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* HERO */}
        <motion.header
          {...fadeUp()}
          className="relative mb-16 max-w-4xl sm:mb-20 lg:mb-24"
        >
          <SectionLabel number="05">
            Partnerships
          </SectionLabel>

          <div className="max-w-3xl">
            <h2 className="text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#08243B] sm:text-6xl lg:text-[78px]">
              The ecosystem
              <br />
              <span className="text-[#176B9C]">behind the conversation.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-[#607484] sm:text-base sm:leading-7">
              CIO Tech brings together technology organizations and strategic
              partners that help shape meaningful conversations, connections
              and opportunities across the leadership ecosystem.
            </p>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <div className="h-px w-20 bg-[#176B9C]/30" />
            <span className="font-mono text-[9px] uppercase tracking-[2.5px] text-[#91A1AD]">
              Technology · Collaboration · Impact
            </span>
          </div>
        </motion.header>

        {/* TECHNOLOGY PARTNERS */}
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#D9E3E8] pb-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="05.1">
                Technology Partners
              </SectionLabel>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#08243B] sm:text-3xl">
                Technology that moves the conversation forward.
              </h3>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[2px] text-[#91A1AD]">
              02 Organizations
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {StrategicTechnologyPartners.map((partner, index) => (
              <TechnologyPartnerCard
                key={partner.name}
                partner={partner}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* STRATEGIC PARTNER */}
        <div>
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#D9E3E8] pb-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="05.2">
                Strategic Partner
              </SectionLabel>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#08243B] sm:text-3xl">
                Collaboration with purpose.
              </h3>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[2px] text-[#91A1AD]">
              Featured Alliance
            </span>
          </div>

          <StrategicPartnerCard />
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-16 flex flex-col gap-6 border-t border-[#D9E3E8] pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#55C7DC]" />
            <span className="font-mono text-[9px] uppercase tracking-[2.5px] text-[#607484]">
              CIO TECH 2026
            </span>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#607484] sm:text-right">
            Strong partnerships create stronger rooms — and stronger rooms
            create better conversations.
          </p>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#176B9C]/25 to-transparent" />

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
