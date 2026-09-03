"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

const strategicPartner = {
  name: "Your Strategic Partner",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#04162d] via-[#071b35] to-[#0b2347] py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">

        {/* Heading */}
        <div className="mb-20 text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Strategic Collaborations
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Collaborating with industry-leading organizations to deliver
            meaningful conversations, innovation, executive networking and
            technology leadership.
          </p>

        </div>

        {/* STRATEGIC TECHNOLOGY PARTNERS */}
        <div>
          {/* Title */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <Award
              className="text-cyan-400"
              size={28}
            />

            <h3 className="text-3xl font-bold text-cyan-300">
              Strategic Technology Partners
            </h3>
          </div>

          {/* Partner Cards */}
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
            {StrategicTechnologyPartners.map((partner, index) => (
              <div
                key={index}
                className="group w-full max-w-[293px] rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(0,212,255,.25)]"
              >
                <div className="flex min-h-[250px] items-center justify-center p-12">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={380}
                    height={160}
                    className="max-h-40 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGIC PARTNER */}
        <div className="mb-20">

          {/* Title */}
          <div className="mb-6 flex items-center justify-center gap-3">

            <Award
              className="text-cyan-400"
              size={28}
            />

            <h3 className="text-3xl font-bold text-cyan-300">
              Strategic Partner
            </h3>

          </div>

          {/* Partner Card */}
          <div className="mx-auto max-w-5xl">

            <div className="group rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(0,212,255,.25)]">

              <div className="flex min-h-[280px] flex-col items-center justify-center p-12">

                <Image
                  src={strategicPartner.logo}
                  alt={strategicPartner.name}
                  width={380}
                  height={160}
                  className="max-h-40 w-auto object-contain transition duration-500 group-hover:scale-105"
                />

                {/* <div className="mt-8 h-px w-40 bg-cyan-400/30" /> */}

                {/* <p className="mt-6 text-2xl font-semibold text-white">
                  Strategic Partner
                </p> */}

              </div>

            </div>

          </div>

        </div>


      </div>

      {/* Registration Modal */}
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