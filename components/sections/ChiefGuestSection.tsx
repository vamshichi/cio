'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const pillars = [
    {
        number: '01',
        title: 'Enabling Innovation',
        desc: 'Policies like i4, AVGC, Elevate, Startup Cell and GAFX empower startups and enterprises to scale and succeed.',
    },
    {
        number: '02',
        title: 'Building Brand Bengaluru',
        desc: 'Spearheaded initiatives that position Bengaluru as a global innovation hub and the first Indian city with a dedicated global city brand.',
    },
    {
        number: '03',
        title: 'Future Ready Karnataka',
        desc: 'Established Centres of Excellence in AI & ML, Animation, Aerospace, IoT, Cyber Security and BioTech to build future-ready talent.',
    },
]

export default function ChiefGuest() {
    return (
        <section
            id="chief-guest"
            className="relative overflow-hidden bg-[#020817] py-24 lg:py-36"
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1400px] px-6">
                {/* CHIEF GUEST BADGE */}
                <div className="mb-16 flex justify-center">
                    <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-10 py-4 backdrop-blur-xl">
                        <span className="text-base font-bold uppercase tracking-[0.5em] text-cyan-300 md:text-lg">
                            Our Chief Guest
                        </span>
                    </div>
                </div>
                {/* HERO GRID */}
                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >

                        <div>

                            <h1 className="mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="text-cyan-400">Shri</span> Priyank Kharge
                            </h1>
                        </div>

                        <div className="mt-8 h-px w-40 bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent" />

                        <div className="mt-8 space-y-2">
                            <p className="text-xl font-semibold text-cyan-300">
                                Hon&apos;ble Minister for
                            </p>

                            <p className="text-lg text-slate-300 md:text-xl">
                                Home, IT & Biotechnology & E-Governance
                            </p>

                            <p className="pt-2 text-sm uppercase tracking-[0.35em] text-slate-500">
                                Government of Karnataka
                            </p>
                        </div>

                        {/* Event Inauguration */}
                        <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 backdrop-blur-xl">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                Event Inauguration
                            </h3>

                            <p className="mt-3 text-xl font-semibold text-white">
                                Honoring Leadership in Technology & Development
                            </p>

                            <p className="mt-4 leading-relaxed text-slate-400">
                                Shri Priyank Kharge will inaugurate the event,
                                celebrating leadership in technology, innovation,
                                entrepreneurship and digital transformation.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="mt-10 max-w-2xl">
                            <blockquote className="border-l-2 border-cyan-500 pl-6">
                                <p className="text-lg italic leading-relaxed text-slate-300 lg:text-xl">
                                    “Committed to leveraging technology for good governance,
                                    inclusive growth and a stronger, smarter Karnataka.”
                                </p>
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 flex justify-center lg:order-2 lg:justify-end"
                    >
                        <div className="relative">

                            <div className="absolute inset-0 rounded-[60px] bg-cyan-500/20 blur-[140px]" />

                            <div className="absolute -inset-5 rounded-[60px] border border-cyan-500/20" />

                            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                                <Image
                                    src="/chiefguest/priyank.png"
                                    alt="Shri Priyank Kharge"
                                    width={650}
                                    height={850}
                                    priority
                                    className="rounded-[32px] object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ABOUT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-28 mb-12 text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                        About The Hon&apos;ble Minister
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                        Driving Karnataka&apos;s Innovation Ecosystem
                    </h2>

                    <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-400">
                        Shri Priyank Kharge is a passionate advocate for
                        technology-driven growth and inclusive development.
                        Through visionary policies and initiatives, he has
                        strengthened Karnataka&apos;s innovation ecosystem and
                        created world-class opportunities for startups,
                        SMEs and youth.
                    </p>
                </motion.div>

                {/* INITIATIVES */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {pillars.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
                        >
                            <div className="relative z-10">
                                <div className="mb-6 text-6xl font-black text-cyan-500/20">
                                    {item.number}
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="leading-relaxed text-slate-400">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}