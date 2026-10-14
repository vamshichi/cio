



"use client";







import Image from "next/image";



import { useState } from "react";



import { motion, useReducedMotion } from "framer-motion";



import {



  FiArrowUpRight,



  FiMic,



  FiUsers,



  FiMessageCircle,





} from "react-icons/fi";







type Speaker = {



  name: string;



  title: string;



  company: string;



  image: string;



  category: "Government" | "Enterprise" | "Partner";



  sessionTag: string;



};







const speakers: Speaker[] = [



  {



    name: "Vinay Thakur",



    title: "Director General",



    company: "BiSAG-N, Ministry of Electronics and IT",



    image: "/speakers/Vinay Thakur.png",



    category: "Government",



    sessionTag: "Proposed · Digital governance",



  },



  {



    name: "Ms. Tulika Pandey",



    title: "Scientist ‘G’ and Group Coordinator",



    company: "Ministry of Electronics and Information Technology",



    image: "/speakers/Tulika Pandey.png",



    category: "Government",



    sessionTag: "Proposed · Public-sector technology",



  },



  {



    name: "Lt. Rajesh Pant",



    title: "Chairman",



    company: "Cyber Security Association of India",



    image: "/speakers/Rajesh Pant.png",



    category: "Government",



    sessionTag: "Proposed · Cybersecurity leadership",



  },



  {



    name: "Chetansinh Parmar",



    title: "Chief Information Security Officer",



    company: "Acutaas Chemicals Limited",



    image: "/speakers/Chetan.png",



    category: "Enterprise",



    sessionTag: "Proposed · Trust and security at scale",



  },



  {



    name: "Rajneesh Singh",



    title: "CIO / Vice President IT & SAP",



    company: "Rays Power Infra Limited",



    image: "/speakers/Rajneesh Singh.png",



    category: "Enterprise",



    sessionTag: "Proposed · Enterprise transformation",



  },



  {



    name: "Mitali Biswas",



    title: "Vice President – Digital",



    company: "CKA Birla Group",



    image: "/speakers/Mitali.png",



    category: "Enterprise",



    sessionTag: "Proposed · Digital transformation",



  },



  {



    name: "Saurabh Gupta",



    title: "Group Chief Digital and Information Officer",



    company: "Gujarat Fluorochemicals Limited",



    image: "/speakers/Saurabh.png",



    category: "Enterprise",



    sessionTag: "Proposed · Scaling enterprise AI",



  },



  {



    name: "Sushil Meher",



    title: "CIO & CISO",



    company: "AIIMS",



    image: "/speakers/Sushil Meher.png",



    category: "Enterprise",



    sessionTag: "Proposed · Secure digital infrastructure",



  },



  {



    name: "Kapil Uniyal",



    title:



      "Head of Google Cloud Services, Digital Solutions, Vice President - APACA",



    company: "TELUS Digital",



    image: "/speakers/Kapil Uniyal.png",



    category: "Partner",



    sessionTag: "Proposed · Cloud and AI at scale",



  },



  {



    name: "Sunil Golani",



    title: "Director, Cloud Sales",



    company: "Ingram Micro India",



    image: "/speakers/Sunil Golani.png",



    category: "Partner",



    sessionTag: "Proposed · Cloud infrastructure economics",



  },



  {



    name: "Shobit Agarwal",



    title: "Director AI/ML Data Engineering",



    company: "Mastercard",



    image: "/speakers/Shobit Agarwal.png",



    category: "Partner",



    sessionTag: "Proposed · AI and data engineering",



  },



  {



    name: "Pramod Krs Palla",



    title: "Founder | CEO & CTO",



    company: "RuleGrid (Beauto Systems)",



    image: "/speakers/Pramod Krs Palla.png",



    category: "Partner",



    sessionTag: "Proposed · AI implementation",



  },



];







const filters = [



  { label: "All leaders", value: "All" },



  { label: "Government", value: "Government" },



  { label: "Enterprise", value: "Enterprise" },



  { label: "Technology partners", value: "Partner" },



] as const;







const fadeUp = {



  hidden: { opacity: 0, y: 22 },



  visible: {



    opacity: 1,



    y: 0,



    transition: { duration: 0.5, ease: "easeOut" as const },



  },



};



const speakerGridVariants = {

  hidden: { opacity: 0 },

  visible: {

    opacity: 1,

    transition: {

      staggerChildren: 0.075,

      delayChildren: 0.04,

    },

  },

};







function SpeakerCard({



  speaker,



  index,



}: {



  speaker: Speaker;



  index: number;



}) {



  const reduceMotion = useReducedMotion();







  return (



    <motion.article



      variants={fadeUp}



      whileHover={reduceMotion ? undefined : { y: -5 }}



      className="group min-w-0"



    >



      <div className="relative overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-colors duration-300 group-hover:border-[#35D5C0]/60">



        <div className="relative aspect-[4/4.7] overflow-hidden bg-slate-100">



          <Image



            src={speaker.image}



            alt={`${speaker.name}, ${speaker.title} at ${speaker.company}`}



            fill



            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"



            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"



          />











          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 shadow-sm px-3 py-1.5 backdrop-blur-md">



            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />



            <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-700">



              {speaker.category}



            </span>



          </div>







          <span className="absolute right-4 top-4 font-mono text-xs tracking-widest text-slate-500">



            {String(index + 1).padStart(2, "0")}



          </span>







        </div>



        <div className="min-h-[166px] border-t border-slate-100 px-5 py-5 sm:px-6">

          <p className="text-xs font-medium leading-5 text-teal-700">{speaker.company}</p>

          <h3 className="mt-2 text-[23px] font-semibold leading-tight tracking-tight text-slate-950">{speaker.name}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">{speaker.title}</p>

        </div>



        {/* <div className="flex min-h-[76px] items-start gap-3 border-t border-white/10 px-5 py-4">



          <FiMessageCircle



            size={17}



            className="mt-1 shrink-0 text-teal-700"



          />



          <p className="text-sm leading-6 text-slate-600">



            {speaker.sessionTag}



          </p>



        </div> */}



      </div>



    </motion.article>



  );



}







export function Speakers() {



  const reduceMotion = useReducedMotion();



  const [activeFilter, setActiveFilter] = useState("All");







  const visibleSpeakers =



    activeFilter === "All"



      ? speakers



      : speakers.filter((speaker) => speaker.category === activeFilter);







  return (



    <section



      id="speakers"



      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"



    >



      {/* Ambient background details */}



      <div



        aria-hidden="true"



        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]"



      />



      <div



        aria-hidden="true"



        className="pointer-events-none absolute -left-48 top-[42%] h-[360px] w-[360px] rounded-full bg-sky-500/5 blur-[110px]"



      />







      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">



        {/* Section heading */}



        <motion.div



          initial={reduceMotion ? false : { opacity: 0, y: 20 }}



          whileInView={{ opacity: 1, y: 0 }}



          viewport={{ once: true, amount: 0.25 }}



          transition={{ duration: 0.6 }}



          className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"



        >



          {/* <div>



            <div className="flex items-center gap-3">



              <span className="h-px w-9 bg-[#5EEAD4]" />



              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">



                The people shaping what&apos;s next



              </span>



            </div>







            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">



              Perspectives from the people responsible for making technology



              deliver in the real world.



            </p>







            <div className="mt-8 flex items-center justify-center gap-8 border-t-2 border-[#0D9488] px-6 pt-5">



              <div>



                <p className="text-3xl font-semibold tracking-tight text-slate-950">



                  03



                </p>



                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">



                  Leadership communities



                </p>



              </div>



              <span className="h-10 w-px bg-slate-200" />



              <div>



                <p className="text-3xl font-semibold tracking-tight text-slate-950">



                  12



                </p>



                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">



                  Profiles featured



                </p>



              </div>



            </div>



          </div> */}







          <div>



            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-7xl">



              Experience that moves



              <span className="mt-1 block text-teal-700">



                the conversation forward.



              </span>



            </h2>







            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">



              Meet leaders across government, enterprise technology and the



              partner ecosystem bringing practical perspectives on AI,



              cybersecurity, digital infrastructure and transformation.



            </p>



          </div>



        </motion.div>







        {/* Category filters */}



        <div className="mt-12 border-y border-slate-200 py-5">



          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">



            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">



              Explore the speaker profiles



            </p>







            <div className="flex flex-wrap gap-2" aria-label="Filter speakers">



              {filters.map((filter) => {



                const isActive = activeFilter === filter.value;







                return (



                  <button



                    key={filter.value}



                    type="button"



                    onClick={() => setActiveFilter(filter.value)}



                    aria-pressed={isActive}



                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${



                      isActive



                        ? "border-teal-700 bg-teal-700 text-white"



                        : "border-slate-200 bg-white text-slate-600 hover:border-teal-600 hover:text-teal-800"



                    }`}



                  >



                    {filter.label}



                  </button>



                );



              })}



            </div>



          </div>



        </div>







        {/* Speaker grid */}



        <motion.div



          key={activeFilter}



          variants={speakerGridVariants}



          initial={reduceMotion ? false : "hidden"}



          animate="visible"



          className="mt-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"



        >



          {visibleSpeakers.map((speaker, index) => (



            <SpeakerCard



              key={speaker.name}



              speaker={speaker}



              index={index}



            />



          ))}



        </motion.div>









      </div>







      {/* Call for speakers */}



      <div



        id="speak-at-cio-tech"



        className="relative mt-20 overflow-hidden border-y border-slate-200 bg-slate-50 sm:mt-24 lg:mt-32"



      >



        <div



          aria-hidden="true"



          className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-teal-700/10"



        />



        <div



          aria-hidden="true"



          className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-teal-700/10"



        />







        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20">



          {/* Invitation */}



          <motion.div



            initial={reduceMotion ? false : { opacity: 0, y: 18 }}



            whileInView={{ opacity: 1, y: 0 }}



            viewport={{ once: true, amount: 0.25 }}



            transition={{ duration: 0.55 }}



          >



            <div className="flex items-center gap-3">



              <FiMic size={19} className="text-teal-700" />



              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">



                Speak at CIO Tech



              </span>



            </div>







            <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">



              Have you taken AI from pilot to production?



            </h3>







            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">



              We welcome technology leaders with real implementation stories



              — including the challenges, lessons and measurable results.



              Speaking opportunities are curated by the programme team.



              Solution providers can explore participation through our



              partnership programme.



            </p>







            <a



              href="mailto:enquiry\@confexmeet.com?subject=Propose%20a%20Session%20%E2%80%94%20CIO%20Tech%202026"



              className="mt-8 inline-flex items-center gap-3 bg-teal-700 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-teal-800"



            >



              Propose a session



              <FiArrowUpRight size={17} />



            </a>



          </motion.div>







          {/* Reasons to speak */}



          <motion.div



            initial={reduceMotion ? false : { opacity: 0, y: 18 }}



            whileInView={{ opacity: 1, y: 0 }}



            viewport={{ once: true, amount: 0.25 }}



            transition={{ duration: 0.55, delay: 0.08 }}



            className="border-t border-slate-200 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"



          >



            <div className="mb-5 flex items-center gap-3">



              <FiUsers size={19} className="text-teal-700" />



              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">



                Why contribute



              </span>



            </div>







            <div className="divide-y divide-slate-200">



              <div className="flex gap-4 py-5 first:pt-0">



                <span className="font-mono text-sm text-teal-700">01</span>



                <div>



                  <p className="text-base font-semibold text-slate-900">



                    Share practical experience



                  </p>



                  <p className="mt-1 text-sm leading-6 text-slate-500">



                    Discuss real-world decisions with peers facing similar



                    technology challenges.



                  </p>



                </div>



              </div>







              <div className="flex gap-4 py-5">



                <span className="font-mono text-sm text-teal-700">02</span>



                <div>



                  <p className="text-base font-semibold text-slate-900">



                    Extend your industry perspective



                  </p>



                  <p className="mt-1 text-sm leading-6 text-slate-500">



                    Contribute insights to the broader technology leadership



                    community.



                  </p>



                </div>



              </div>







              <div className="flex gap-4 py-5 last:pb-0">



                <span className="font-mono text-sm text-teal-700">03</span>



                <div>



                  <p className="text-base font-semibold text-slate-900">



                    Help shape the conversation



                  </p>



                  <p className="mt-1 text-sm leading-6 text-slate-500">



                    Bring forward lessons that can help enterprises move from



                    experimentation to execution.



                  </p>



                </div>



              </div>



            </div>



          </motion.div>



        </div>



      </div>



    </section>



  );



}
