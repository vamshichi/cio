

"use client";



import { useEffect, useState } from "react";

import Image from "next/image";

import { motion, MotionConfig, useReducedMotion } from "framer-motion";

import {

  FiArrowUpRight,

  FiUsers,

  FiLayers,

  FiRadio,

  FiShield,

} from "react-icons/fi";

import PartnerRegistrationModal from "./PartnerRegistrationModal";



const C = {

  bg: "#06182F",

  surface: "#0A2340",

  surfaceHover: "#0D2B49",

  ink: "#F4F8FC",

  muted: "#A6B6C8",

  line: "rgba(190, 215, 237, 0.15)",

  teal: "#5EEAD4",

  tealDeep: "#0D9488",

};



type Partner = {

  name: string;

  logo: string;

};



type Tier = {

  number: string;

  title: string;

  note: string;

  partners: Partner[];

  logoHeight: string;

  featured?: boolean;

  icon: typeof FiUsers;

};



const TIERS: Tier[] = [

  {

    number: "01",

    title: "Gold Partner",

    note: "Premier supporting sponsor",

    partners: [

      {

        name: "Gold Partner",

        logo: "/sponsors/Gold-Partner.png",

      },

    ],

    logoHeight: "max-h-[90px] sm:max-h-[112px]",

    featured: true,

    icon: FiShield,

  },

  {

    number: "02",

    title: "Strategic Technology Partners",

    note: "Technology leadership and innovation",

    partners: [

      {

        name: "Ingram Micro",

        logo: "/sponsors/Ingram Micro logo.jpeg",

      },

      {

        name: "TELUS Digital",

        logo: "/sponsors/TELUS_Digital_company_logo.png",

      },

    ],

    logoHeight: "max-h-[62px] sm:max-h-[76px]",

    icon: FiLayers,

  },

  {

    number: "03",

    title: "Strategic Partner",

    note: "Leading this year's programme",

    partners: [

      {

        name: "Precision Staffers",

        logo: "/sponsors/Precision HD-Logo.png",

      },

    ],

    logoHeight: "max-h-[86px] sm:max-h-[104px]",

    icon: FiUsers,

  },

  {

    number: "04",

    title: "Broadcast Partner",

    note: "Official media and broadcast coverage",

    partners: [

      {

        name: "Broadcast Partner",

        logo: "/partners/Broadcast.png",

      },

    ],

    logoHeight: "max-h-[66px] sm:max-h-[80px]",

    icon: FiRadio,

  },

];



const EASE = [0.22, 1, 0.36, 1] as const;



const reveal = {

  hidden: { opacity: 0, y: 22 },

  show: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.6, ease: EASE },

  },

};



const stagger = {

  hidden: {},

  show: {

    transition: {

      staggerChildren: 0.09,

      delayChildren: 0.06,

    },

  },

};



function SectionIntro() {

  const reduceMotion = useReducedMotion();



  return (

    <motion.div

      initial={reduceMotion ? false : { opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.3 }}

      transition={{ duration: 0.65, ease: EASE }}

      className="mx-auto mb-10 max-w-5xl text-center sm:mb-14 lg:mb-16"

    >

      <div className="mb-6 flex items-center justify-center gap-3">

        <span className="h-px w-9 bg-[#5EEAD4]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#5EEAD4]">

          The ecosystem behind the experience

        </span>

        <span className="h-px w-9 bg-[#5EEAD4]" />

      </div>



      <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">

        Strong partnerships.

        <span className="mt-2 block text-[#5EEAD4]">

          Greater possibilities.

        </span>

      </h2>



      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A6B6C8] sm:text-lg">

        Meet the organisations supporting CIO Tech Leadership Conference

        &amp; Awards 2026 and helping bring technology leaders together

        around ideas, innovation and meaningful connections.

      </p>

    </motion.div>

  );

}



function PartnerLogo({
  partner,
  logoHeight,
}: {
  partner: Partner;
  logoHeight: string;
}) {
  return (
    <div className="flex min-h-[150px] items-center justify-center bg-white px-8 py-8 sm:min-h-[176px] sm:px-10 sm:py-9">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={520}
        height={240}
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 420px"
        className={`h-auto w-auto max-w-full object-contain ${logoHeight}`}
      />
    </div>
  );
}

function TierRow({ tier }: { tier: Tier }) {

  const Icon = tier.icon;

  const multi = tier.partners.length > 1;



  return (

    <motion.article

      variants={reveal}

      className={`group relative grid overflow-hidden border-b last:border-b-0 transition-colors duration-300 md:grid-cols-[290px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)] ${

        tier.featured

          ? "bg-[#10344D] hover:bg-[#123B53]"

          : "bg-[#0A2340] hover:bg-[#0D2B49]"

      }`}

      style={{ borderColor: C.line }}

    >

      {tier.featured && (

        <span

          aria-hidden="true"

          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#5EEAD4] via-[#0D9488] to-[#5EEAD4]"

        />

      )}



      <div

        className="relative flex flex-col justify-center px-6 py-7 sm:px-9 sm:py-9 md:border-r lg:px-10"

        style={{ borderColor: C.line }}

      >

        <div className="mb-5 flex items-center gap-3">

          <span

            className={`font-mono text-xs font-semibold tracking-[0.16em] ${

              tier.featured ? "text-[#5EEAD4]" : "text-[#7D93AA]"

            }`}

          >

            {tier.number}

          </span>



          <span

            className="h-px w-8"

            style={{

              background: tier.featured ? C.teal : C.line,

            }}

          />



          {tier.featured && (

            <span className="rounded-full border border-[#5EEAD4]/30 bg-[#5EEAD4]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5EEAD4]">

              Featured

            </span>

          )}

        </div>



        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.07]">

          <Icon size={21} className="text-[#5EEAD4]" />

        </div>



        <h3 className="max-w-[270px] text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[28px]">

          {tier.title}

        </h3>



        <p className="mt-3 max-w-[270px] text-sm leading-7 text-[#A6B6C8] sm:text-base">

          {tier.note}

        </p>



        <span

          className={`mt-6 h-[2px] transition-all duration-500 group-hover:w-20 ${

            tier.featured ? "w-14 bg-[#5EEAD4]" : "w-9 bg-[#31516D]"

          }`}

        />

      </div>



      <div

        className={`grid items-stretch ${

          multi ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"

        }`}

      >

        {tier.partners.map((partner, index) => (

          <div

            key={partner.name}

            className={`flex items-center ${

              multi && index > 0

                ? "border-t sm:border-l sm:border-t-0"

                : ""

            }`}

            style={{ borderColor: C.line }}

          >

            <div className="w-full">

              <PartnerLogo

                partner={partner}

                // featured={tier.featured}

                logoHeight={tier.logoHeight}

              />

            </div>

          </div>

        ))}

      </div>

    </motion.article>

  );

}



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



    return () => {

      window.removeEventListener("hashchange", checkHash);

    };

  }, []);



  const openRegistration = () => {

    window.location.hash = "centricsoftware-registration";

  };



  const closeModal = () => {

    window.history.pushState(

      {},

      "",

      `${window.location.pathname}${window.location.search}`

    );

    setOpenModal(false);

  };



  return (

    <MotionConfig reducedMotion="user">

      <section

        id="partners"

        className="relative isolate overflow-hidden bg-[#06182F] py-20 sm:py-24 lg:py-32"

      >

        {/* Background atmosphere */}

        <div

          aria-hidden="true"

          className="pointer-events-none absolute inset-0 overflow-hidden"

        >

          <div className="absolute inset-x-0 top-0 h-[420px] opacity-20 [background-image:radial-gradient(#6B91B4_0.8px,transparent_0.8px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />



          <div className="absolute -right-36 -top-28 h-[360px] w-[360px] rounded-full bg-[#0D9488]/15 blur-[110px]" />



          <div className="absolute -bottom-40 -left-28 h-[380px] w-[380px] rounded-full bg-blue-500/[0.08] blur-[120px]" />



          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5EEAD4]/30 to-transparent" />

        </div>



        <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">

          <SectionIntro />



          {/* Partnership tier showcase */}

          <motion.div

            variants={stagger}

            initial="hidden"

            whileInView="show"

            viewport={{ once: true, margin: "-50px" }}

            className="overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_100px_-50px_rgba(0,0,0,0.8)]"

          >

            {TIERS.map((tier) => (

              <TierRow key={tier.title} tier={tier} />

            ))}

          </motion.div>



          {/* Footer line */}

          <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A6B6C8]">

              CIO Tech Leadership Conference &amp; Awards · 2026

            </p>



            <p className="text-sm text-[#7F94AA]">

              Built on collaboration. Focused on what comes next.

            </p>

          </div>



          {/* Partnership CTA */}

          <motion.div

            initial={{ opacity: 0, y: 18 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.25 }}

            transition={{ duration: 0.6 }}

            className="relative mt-16 overflow-hidden rounded-sm border border-[#5EEAD4]/20 bg-gradient-to-r from-[#0D354B] via-[#0B2B46] to-[#0A2340] p-7 sm:mt-20 sm:p-10 lg:p-12"

          >

            <div

              aria-hidden="true"

              className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#5EEAD4]/10"

            />

            <div

              aria-hidden="true"

              className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full border border-[#5EEAD4]/10"

            />



            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <div className="mb-4 flex items-center gap-3">

                  <FiUsers size={19} className="text-[#5EEAD4]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4]">

                    Become a partner

                  </span>

                </div>



                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">

                  Put your expertise

                  <span className="text-[#5EEAD4]"> in the room.</span>

                </h3>



                <p className="mt-4 max-w-xl text-base leading-7 text-[#B2C2D3]">

                  Explore partnership opportunities and connect your

                  organisation with the technology leadership community.

                </p>

              </div>



              <button

                type="button"

                onClick={openRegistration}

                className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[#5EEAD4] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#06182F] transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:ring-offset-2 focus:ring-offset-[#0A2B45]"

              >

                Explore partnerships

                <FiArrowUpRight

                  size={17}

                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"

                />

              </button>

            </div>

          </motion.div>

        </div>



        <PartnerRegistrationModal

          open={openModal}

          onClose={closeModal}

        />

      </section>

    </MotionConfig>

  );

}
