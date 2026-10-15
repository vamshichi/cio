"use client";

import { useEffect, useRef, useState } from "react";

import {

animate,

motion,

useInView,

useMotionValue,

useReducedMotion,

useTransform,

} from "framer-motion";

import {

FiArrowRight,

FiCalendar,

FiMapPin,

FiCpu,

} from "react-icons/fi";

import { DelegateForm } from "@/components/sections/DelegateForm";

import { SponsorForm } from "@/components/sections/SponsorForm";

import { FormModal } from "@/components/common/FormModal";

const eventStats = [

{ value: 200, suffix: "+", label: "Technology leaders", countUp: true },

{ value: 25, suffix: "+", label: "Industry speakers", countUp: true },

{ value: 70, suffix: "+", label: "Curated 1:1 meetings", countUp: true },

{ value: 2026, suffix: "", label: "Leadership awards", countUp: false },

];

function AnimatedStat({

value,

suffix = "",

countUp = true,

}: {

value: number;

suffix?: string;

countUp?: boolean;

}) {

const ref = useRef<HTMLSpanElement>(null);

const isInView = useInView(ref, { once: true, amount: 0.65 });

const reduceMotion = useReducedMotion();

const motionValue = useMotionValue(countUp && !reduceMotion ? 0 : value);

const rounded = useTransform(motionValue, (latest) =>

Math.round(latest).toLocaleString("en-IN")

);

useEffect(() => {

if (!isInView) return;

if (!countUp || reduceMotion) {

motionValue.set(value);

return;

}

const controls = animate(motionValue, value, {

duration: 1.7,

ease: [0.16, 1, 0.3, 1],

});

return controls.stop;

}, [isInView, countUp, motionValue, value, reduceMotion]);

return (

<span ref={ref} className="tabular-nums">

{countUp ? <motion.span>{rounded}</motion.span> : value.toLocaleString("en-IN")}

{suffix}

</span>

);

}

const orbitNodes = [

{ top: "12%", left: "50%", delay: 0 },

{ top: "29%", left: "84%", delay: 0.7 },

{ top: "72%", left: "80%", delay: 1.4 },

{ top: "86%", left: "40%", delay: 0.3 },

{ top: "54%", left: "14%", delay: 1.1 },

{ top: "22%", left: "23%", delay: 1.8 },

];

function TechnologyVisual() {

const reduceMotion = useReducedMotion();

return (

<div className="relative mx-auto aspect-square w-full max-w-[min(82vw,360px)] sm:max-w-[420px] lg:max-w-[460px]">

{/* Ambient lighting */}

<div className="absolute inset-[12%] rounded-full bg-teal-400/[0.09] blur-[70px]" />

<div className="absolute inset-[25%] rounded-full bg-blue-500/[0.13] blur-[60px]" />

{/* Technical grid */}

<div

className="absolute inset-0 opacity-[0.10]"

style={{

backgroundImage:

"linear-gradient(rgba(94,234,212,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.22) 1px, transparent 1px)",

backgroundSize: "34px 34px",

maskImage:

"radial-gradient(ellipse at center, black 15%, transparent 72%)",

WebkitMaskImage:

"radial-gradient(ellipse at center, black 15%, transparent 72%)",

}}

/>

{/* Outer orbital rings */}

<motion.div

animate={reduceMotion ? undefined : { rotate: 360 }}

transition={{

duration: 55,

repeat: Infinity,

ease: "linear",

}}

className="absolute inset-[7%] rounded-full border border-dashed border-teal-300/15"

>

<span className="absolute left-[15%] top-[18%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_#2dd4bf]" />

<span className="absolute bottom-[15%] right-[16%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_#60a5fa]" />

</motion.div>

<motion.div

animate={reduceMotion ? undefined : { rotate: -360 }}

transition={{

duration: 38,

repeat: Infinity,

ease: "linear",

}}

className="absolute inset-[15%] rounded-full border border-teal-300/15"

>

<span className="absolute right-[10%] top-[22%] h-2.5 w-2.5 rounded-full border border-teal-200 bg-[#0D9488] shadow-[0_0_22px_#14b8a6]" />

</motion.div>

<motion.div

animate={

reduceMotion

? undefined

: { rotate: [0, 8, 0], scale: [1, 1.025, 1] }

}

transition={{

duration: 9,

repeat: Infinity,

ease: "easeInOut",

}}

className="absolute inset-[23%] rounded-full border border-blue-300/25"

/>

{/* Orbit paths */}

<div className="absolute inset-[17%] rotate-[-32deg] rounded-[50%] border border-teal-200/25" />

<div className="absolute inset-[17%] rotate-[32deg] rounded-[50%] border border-blue-300/20" />

{/* Center technology core */}

<motion.div

initial={{ opacity: 0, scale: 0.7 }}

animate={{ opacity: 1, scale: 1 }}

transition={{ duration: 1, ease: "easeOut" }}

className="absolute inset-0 flex items-center justify-center"

>

<div className="relative flex h-[43%] w-[43%] items-center justify-center rounded-full border border-teal-300/40 bg-gradient-to-br from-teal-300/[0.15] via-blue-500/[0.09] to-transparent shadow-[0_0_80px_rgba(20,184,166,0.12)] backdrop-blur-sm">

<motion.div

animate={

reduceMotion

? undefined

: { opacity: [0.35, 0.8, 0.35], scale: [0.92, 1.05, 0.92] }

}

transition={{ duration: 4, repeat: Infinity }}

className="absolute inset-[12%] rounded-full border border-teal-200/40"

/>

<div className="relative flex h-[65%] w-[65%] items-center justify-center rounded-full border border-teal-200/30 bg-[#09264A] shadow-[inset_0_0_35px_rgba(20,184,166,0.12)]">

<div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/[0.12] to-transparent" />

<FiCpu

className="relative text-teal-200 drop-shadow-[0_0_14px_rgba(45,212,191,0.65)]"

size="34%"

strokeWidth={1.15}

/>

</div>

{/* Core signal */}

<motion.span

animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}

transition={{ duration: 2, repeat: Infinity }}

className="absolute -right-1 top-[27%] h-2.5 w-2.5 rounded-full bg-teal-200 shadow-[0_0_18px_#2dd4bf]"

/>

</div>

</motion.div>

{/* Connected data nodes */}

{orbitNodes.map((node, i) => (

<motion.div

key={i}

className="absolute z-10"

style={{ top: node.top, left: node.left }}

animate={

reduceMotion

? undefined

: { y: [0, -9, 0], opacity: [0.55, 1, 0.55] }

}

transition={{

duration: 3 + (i % 3),

delay: node.delay,

repeat: Infinity,

ease: "easeInOut",

}}

>

<div className="relative h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/70 bg-teal-300/25">

<div className="absolute inset-0 rounded-full bg-teal-200 blur-[5px]" />

</div>

</motion.div>

))}

{/* Visual caption */}

<div className="absolute bottom-[3%] left-0 right-0 text-center">

<p className="text-[9px] font-medium uppercase tracking-[0.35em] text-teal-200/70 sm:text-[10px]">

Intelligence · Security · Transformation

</p>

</div>

</div>

);

}

export function Hero() {

const [showDelegateForm, setShowDelegateForm] = useState(false);

const [showSponsorForm, setShowSponsorForm] = useState(false);

const reduceMotion = useReducedMotion();

const openEnquiry = (type: "delegate" | "sponsor") => {

const hash =

type === "delegate" ? "#delegateenquiry" : "#sponsorenquiry";

window.history.pushState(null, "", hash);

if (type === "delegate") {

setShowDelegateForm(true);

} else {

setShowSponsorForm(true);

}

};

return (

<section

id="home"

className="relative isolate overflow-hidden bg-[#06172F] text-white"

>

{/* Ambient background */}

<div className="pointer-events-none absolute inset-0">

<div className="absolute -left-48 top-4 h-[420px] w-[420px] rounded-full bg-teal-500/[0.08] blur-[130px]" />

<div className="absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-blue-500/[0.12] blur-[140px]" />

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(13,148,136,0.09),transparent_60%)]" />

</div>

{/* Announcement */}

{/* Hero content */}

<div className="relative mx-auto max-w-[1360px] w-full max-w-[1360px] px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-8 lg:px-12 lg:pb-14 lg:pt-12">

<div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">

{/* Left: messaging */}

<div className="relative z-10">

<motion.div

initial={{ opacity: 0, y: 15 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.7 }}

className="mb-5 flex flex-wrap items-center gap-3 sm:mb-7"

>

<span className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/[0.07] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-200 sm:text-sm">

<span className="h-1.5 w-1.5 rounded-full bg-teal-300" />

3rd Edition · New Delhi

</span>

</motion.div>

<motion.h1

initial={{ opacity: 0, y: 25 }}

animate={{ opacity: 1, y: 0 }}

transition={{

duration: 0.85,

delay: 0.1,

ease: [0.22, 1, 0.36, 1],

}}

className="max-w-[860px] break-words text-[clamp(2.25rem,7vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[clamp(2.75rem,6vw,4.25rem)]"

>

The future

isn&apos;t a pilot 

<span> </span>

<span className="relative inline-block bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-300 bg-clip-text pb-2 text-transparent">

It&apos;s production

<motion.span

initial={{ scaleX: 0 }}

animate={{ scaleX: 1 }}

transition={{ duration: 1, delay: 0.8 }}

className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-teal-300/80 to-transparent"

/>

</span>

</motion.h1>

<motion.p

initial={{ opacity: 0, y: 18 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.7, delay: 0.25 }}

className="mt-5 max-w-[590px] text-sm leading-7 text-slate-100 sm:mt-7 sm:text-base sm:leading-8"

>

Where India&apos;s CIOs, CTOs, CISOs and CDOs turn enterprise

AI, cybersecurity and digital transformation into secure,

governed and measurable business outcomes.

</motion.p>

{/* Event details */}

<motion.div

initial={{ opacity: 0, y: 12 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.6, delay: 0.35 }}

className="mt-6 flex flex-col gap-3 text-sm text-slate-100 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:text-base"

>

<span className="inline-flex items-center gap-2.5">

<FiCalendar className="text-teal-300" size={16} />

12 November 2026

</span>

<span className="inline-flex items-center gap-2.5">

<FiMapPin className="text-teal-300" size={16} />

The Lalit, New Delhi

</span>

</motion.div>

{/* Actions */}

<motion.div

initial={{ opacity: 0, y: 15 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.7, delay: 0.45 }}

className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap"

>

<button

type="button"

onClick={() => openEnquiry("delegate")}

className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-teal-300 px-5 py-3.5 text-sm font-semibold sm:w-auto sm:px-6 sm:py-4 sm:text-base font-semibold text-[#06213A] shadow-[0_0_30px_rgba(45,212,191,0.12)] transition-all duration-300 hover:bg-teal-200 hover:shadow-[0_0_40px_rgba(45,212,191,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06172F]"

>

Request your executive pass

<FiArrowRight

size={17}

className="transition-transform duration-300 group-hover:translate-x-1"

/>

</button>

<button

type="button"

onClick={() => openEnquiry("sponsor")}

className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.035] px-5 py-3.5 text-sm font-medium text-white sm:px-6 sm:py-4 sm:text-base backdrop-blur-md transition-all duration-300 hover:border-teal-300/50 hover:bg-teal-300/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"

>

Explore partnerships

<FiArrowRight

size={16}

className="text-teal-200 transition-transform duration-300 group-hover:translate-x-1"

/>

</button>

</motion.div>

<motion.p

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

transition={{ delay: 0.7 }}

className="mt-5 text-xs leading-6 tracking-wide text-slate-400 sm:text-sm"

>

Built for decision-makers. Designed for what comes next.

</motion.p>

</div>

{/* Right: animated visual */}

<motion.div

initial={{ opacity: 0, scale: 0.92, x: 20 }}

animate={{ opacity: 1, scale: 1, x: 0 }}

transition={{

duration: 1.1,

delay: 0.2,

ease: [0.22, 1, 0.36, 1],

}}

className="relative mx-auto w-full max-w-[min(88vw,420px)] sm:max-w-[500px] lg:max-w-[540px] lg:-mr-3"

>

<TechnologyVisual />

</motion.div>

</div>

{/* Bottom statistics */}

{/* <motion.div

initial={{ opacity: 0, y: 18 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.8, delay: 0.65 }}

className="relative mt-8 border-t border-white/[0.12] sm:mt-12 lg:mt-7"

>

<div className="grid grid-cols-2 sm:grid-cols-4">

{eventStats.map((stat, index) => (

<div

key={stat.label}

className={`relative py-5 pr-3 sm:py-7 sm:pr-5 ${index % 2 === 1 ? "pl-4 sm:pl-6" : ""

} ${index > 0

? "sm:border-l sm:border-white/[0.12] sm:pl-6"

: ""

} ${index >= 2 ? "border-t border-white/[0.08] sm:border-t-0" : ""

}`}

>

<p className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">

<AnimatedStat

value={stat.value}

suffix={stat.suffix}

countUp={stat.countUp}

/>

</p>

<p className="mt-2 text-sm leading-5 text-slate-300 sm:text-base">

{stat.label}

</p>

<div className="absolute bottom-0 left-0 h-px w-10 bg-teal-300/60 sm:w-12" />

</div>

))}

</div>

</motion.div> */}

</div>

{/* Subtle bottom transition */}

<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#071C38]/70 to-transparent" />

{/* Delegate modal */}

<FormModal

open={showDelegateForm}

onClose={() => setShowDelegateForm(false)}

title="Request Your Executive Pass"

>

<DelegateForm />

</FormModal>

{/* Sponsor modal */}

<FormModal

open={showSponsorForm}

onClose={() => setShowSponsorForm(false)}

title="Partner with CIO Tech"

>

<SponsorForm />

</FormModal>

</section>

);

}
