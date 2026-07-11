"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Award, Users, Globe, Star } from "lucide-react";
import PartnerRegistrationModal from "./PartnerRegistrationModal";

const presentingPartner = {
  name: "Centric Software",
  logo: "/sponsors/np3.png",
  subtitle: "Presents Velocity 360° Roundtable",
};

const associationPartners = [
  {
    name: "MAIT",
    logo: "/associatpartners/MAIT.jpg",
  },
  {
    name: "AIWoW Council",
    logo: "/associatpartners/AIWOW COUNCIL.jpg",
  },
];

const networkingPartner = {
  name: "Arctic Turns",
  logo: "/sponsors/arctic_turns_logo.jpg",
};

const goldPartner = {
  name: "Centric Software",
  logo: "/sponsors/np3.png",
};

const bronzePartner = {
  name: "Your Bronze Partner",
  logo: "/sponsors/wx-one.jpeg", // Update with your logo
};

const technologyPartners = [
  {
    title: "Official Tech Training Partner",
    name: "CloudThat",
    logo: "/partners/cloudthat.png", // add this logo
  },
  {
    title: "Digital Transformation Partner",
    name: "NeoSOFT",
    logo: "/partners/neosoft.png", // add this logo
  },
];

export default function PartnersSection() {
  const [openModal, setOpenModal] = useState(false);

const router = useRouter();
const pathname = usePathname();

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

        {/* PRESENTING PARTNER */}

        <div className="mb-20">

          <div className="mb-6 flex items-center justify-center gap-3">

            <Award className="text-yellow-400" size={28} />

            <h3 className="text-3xl font-bold text-yellow-400">
              Presenting Partner
            </h3>

          </div>

          <div className="group rounded-3xl border border-yellow-400/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_60px_rgba(255,196,0,.25)]">

            <div className="flex flex-col items-center justify-center p-12">

              <Image
                src={presentingPartner.logo}
                alt={presentingPartner.name}
                width={380}
                height={130}
                className="object-contain transition duration-500 group-hover:scale-105"
              />

              <div className="mt-8 h-px w-40 bg-yellow-400/30" />

              <p className="mt-6 text-2xl font-semibold text-white">
  {presentingPartner.subtitle}
</p>

<button
  onClick={() => {
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}#centricsoftware-registration`
  );

  setOpenModal(true);
}}
  className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,.35)]"
>
  Register Now
</button>

            </div>

          </div>

        </div>

        {/* GOLD PARTNER */}

        <div className="mb-20">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Star className="text-yellow-400" size={28} />
            <h3 className="text-3xl font-bold text-yellow-400">
              Gold Partner
            </h3>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="group flex h-52 items-center justify-center rounded-3xl border border-yellow-400/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,196,0,.25)]">
              <Image
                src={goldPartner.logo}
                alt={goldPartner.name}
                width={260}
                height={120}
                className="object-contain transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* TECHNOLOGY PARTNERS */}

<div className="mb-20">
  <div className="mb-8 flex items-center justify-center gap-3">
    <Globe className="text-cyan-400" size={28} />
    <h3 className="text-3xl font-bold text-cyan-300">
      Technology Partners
    </h3>
  </div>

  <div className="grid gap-8 md:grid-cols-2">
    {technologyPartners.map((partner) => (
      <div
        key={partner.name}
        className="group rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(0,212,255,.25)]"
      >
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {partner.title}
        </p>

        <div className="flex h-28 items-center justify-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={220}
            height={90}
            className="max-h-20 w-auto object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</div>

        {/* BRONZE PARTNER */}

        <div className="mb-20">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Award className="text-amber-600" size={28} />
            <h3 className="text-3xl font-bold text-amber-500">
              Bronze Partner
            </h3>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="group flex h-52 items-center justify-center rounded-3xl border border-amber-600/30 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500 hover:shadow-[0_0_50px_rgba(180,83,9,.25)]">
              <Image
                src={bronzePartner.logo}
                alt={bronzePartner.name}
                width={260}
                height={120}
                className="object-contain transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* NETWORKING PARTNER */}

        <div className="mb-20">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Globe className="text-cyan-400" size={28} />
            <h3 className="text-3xl font-bold text-cyan-300">
              Networking Partner
            </h3>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="group flex h-52 items-center justify-center rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(0,212,255,.25)]">
              <Image
                src={networkingPartner.logo}
                alt={networkingPartner.name}
                width={260}
                height={120}
                className="object-contain transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ASSOCIATION PARTNERS */}

        <div>
          <div className="mb-8 flex items-center justify-center gap-3">
            <Users className="text-cyan-400" size={28} />
            <h3 className="text-3xl font-bold text-cyan-300">
              Association Partners
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {associationPartners.map((partner) => (
              <div
                key={partner.name}
                className="group flex h-52 items-center justify-center rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(0,212,255,.25)]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={120}
                  className="max-h-28 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
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