"use client";

import { motion } from "framer-motion";
import {
  FiCoffee,
  FiMic,
  FiUsers,
  FiCloud,
  FiMessageCircle,
  FiTarget,
  FiShare2,
  FiBarChart2,
  FiShield,
  FiAward,
} from "react-icons/fi";

const agendaItems = [
  {
    time: "08:30 AM",
    title: "Registration & Executive Networking Breakfast",
    description:
      "An exclusive networking experience with CIOs, CTOs, CISOs across BFSI, Retail, Manufacturing, Healthcare, Telecom & Digital Enterprises.",
    icon: FiCoffee,
    category: "Networking",
  },
  {
    time: "09:00 AM",
    title: "Welcome Address by the Organizer",
    description: "Official welcome to the CIO Tech Leadership Summit 2026.",
    icon: FiMic,
    category: "Keynote",
  },
  {
    time: "09:10 AM",
    title: "Opening Remarks",
    description: `Setting the tone for cross-industry innovation and leadership transformation.

Speaker:
Hon'ble Minister for Home, IT & Biotechnology & E-Governance
Government of Karnataka`,
    icon: FiMic,
    category: "Keynote",
  },
  {
    time: "09:25 AM",
    title:
      "Opening Keynote: The Modern CIO: Leading Cross-Industry Transformation in an AI-First World",
    description: `• How CIOs across industries are redefining enterprise strategy with AI
• Converging Cloud, Data & Cybersecurity into a unified digital backbone
• Building intelligent, adaptive organizations at scale

Reserved for Sponsor`,
    icon: FiMic,
    category: "Keynote",
  },
  {
    time: "09:45 AM",
    title:
      "Leadership Panel 1: Scaling AI Across the Enterprise: From Pilots to Business Impact",
    description: `• How different industries are moving AI from experimentation to measurable ROI
• Embedding AI into core operations: customer, supply chain, finance & risk
• Governance, ethics & trust: Building responsible AI at enterprise scale

Moderator:
Anand Rathore, President, AIWoW Council

Panelists:
• Shashank Shankar – Director of Applied AI | CTO, Barclays
• Mythili Kandula – Chief Technology Officer, Happiest Health
• Yogesh Bhalla – Chief Technology Officer, DSP Mutual Funds
• Pankaj K – Chief Product & AI Officer, Eye-Q Vision Pvt Ltd
• Naveen Dachuri – Co-founder & Chief Technology Officer, Yulu Bikes`,
    icon: FiUsers,
    category: "Panel",
  },
  {
    time: "10:35 AM",
    title:
      "Keynote Address: The Modern CIO: Leading Cross-Industry Transformation in an AI-First World",
    description: `Speaker:

Srishti Gupta - IDAS
Ministry of Defence
International Speaker – Microsoft`,
    icon: FiMic,
    category: "Keynote",
  },
  {
    time: "11:00 AM",
    title: "Networking Coffee Break",
    description:
      "Meaningful peer-to-peer engagement across industries.",
    icon: FiCoffee,
    category: "Networking",
  },
    {
    time: "11:30 AM",
    title:
      "Industry-Agnostic Spotlight Keynote: The Experience Economy: Winning Customers Across Industries with AI & Data",
    description: `• Designing real-time, intelligent customer journeys
• Leveraging AI to drive engagement, loyalty & lifetime value
• Creating seamless, connected experiences across ecosystems

Reserved for Sponsor`,
    icon: FiTarget,
    category: "Keynote",
  },
  {
    time: "11:50 AM",
    title:
      "Mega Panel: Reinventing Customer Experience: AI, Data & Digital Across Industries",
    description: `• Hyper-personalisation strategies across sectors
• Omnichannel excellence: Bridging physical & digital journeys
• Turning data into real-time, revenue-generating customer insights

Moderator:
Anand Vaitheeswaran – Chief Information Officer – APAC, Randstad

Panelists:
• Garvit Saxena – Executive Director, IT Service Delivery APAC, Colliers
• Roshan A – Senior General Manager – IT, Healthcare Global Enterprise
• Abhishek Ojha – Senior Vice President | Head – Enterprise Architecture | Chief Enterprise Architect, Ujjivan Small Finance Bank
• Anup Mishra – AGM – Supply Chain Planning & Analytics, METRO Cash & Carry India
• Prasad Dhumal – Vice President – IT, DHL Express India`,
    icon: FiUsers,
    category: "Panel",
  },
  {
    time: "12:40 PM",
    title:
      "Keynote Address: Modernisation Without Limits: Building Scalable Digital Enterprises Across Industries",
    description: `• Breaking legacy barriers across sectors
• Hybrid & multi-cloud strategies for scalability and resilience
• Designing future-ready architectures that adapt to any industry

Reserved for Sponsor`,
    icon: FiBarChart2,
    category: "Keynote",
  },
  {
    time: "01:00 PM",
    title: "Strategic Networking Lunch",
    description:
      "Cross-industry roundtables for deeper collaboration and partnerships.",
    icon: FiCoffee,
    category: "Networking",
  },
  {
    time: "02:00 PM",
    title:
      "Cross-Industry Leadership Panel: Cybersecurity & Resilience: Securing the Digital Enterprise Across Industries",
    description: `• AI-driven threat landscape: What every industry must prepare for
• Zero Trust architectures for distributed, cloud-first environments
• Moving from cybersecurity to cyber resilience as a business strategy

Moderator:
Dr. Ram Kumar G. – Cyber Security & Risk Leader

Panelists:
• Mohd. Shadab – Senior Vice President / Chief Information Security Officer, JioStar
• Praveen Kumar M. – Country Security Manager & Head of Security, Airbus Group
• Devi Singh – Director – Deputy Head of IT Infrastructure, BNP Paribas
• Anand Vaitheeswaran – Chief Information Officer – APAC, Randstad
• Garvit Saxena – Executive Director, IT Service Delivery APAC, Colliers`,
    icon: FiShield,
    category: "Panel",
  },
  {
    time: "02:50 PM",
    title:
      "Leadership Panel: Cloud, Data & FinOps: Building Intelligent Enterprises Across Industries",
    description: `• Multi-cloud strategies across sectors: What works, what doesn't
• FinOps frameworks driving cost optimization without slowing innovation
• Data as the new currency: Enabling real-time, AI-powered decision-making

Moderator:
Abhishek Ojha – Senior Vice President | Head – Enterprise Architecture | Chief Enterprise Architect, Ujjivan Small Finance Bank

Panelists:
• Mythili Kandula – Chief Technology Officer, Happiest Health
• Yogesh Bhalla – Chief Technology Officer, DSP Mutual Funds
• Shashank Shankar – Director of Applied AI | CTO, Barclays
• Pankaj K – Chief Product & AI Officer, Eye-Q Vision Pvt Ltd
• Roshan A – Senior General Manager – IT, Healthcare Global Enterprise`,
    icon: FiCloud,
    category: "Panel",
  },
  {
    time: "03:45 PM",
    title: "Networking Coffee Break",
    description: "Build connections that go beyond industries.",
    icon: FiCoffee,
    category: "Networking",
  },
  {
    time: "04:15 PM",
    title:
      "Cross-Industry Panel: Smart Operations & Digital Supply Chains: Lessons Across Industries",
    description: `• AI, IoT & automation transforming operations end-to-end
• Building predictive, resilient, and agile supply chains
• Real-time visibility & decision-making across global ecosystems

Moderator:
Prasad Dhumal – Vice President – IT, DHL Express India

Panelists:
• Anup Mishra – AGM – Supply Chain Planning & Analytics, METRO Cash & Carry India
• Naveen Dachuri – Co-founder & Chief Technology Officer, Yulu Bikes
• Devi Singh – Director – Deputy Head of IT Infrastructure, BNP Paribas
• Mohd. Shadab – Senior Vice President / Chief Information Security Officer, JioStar
• Dr. Ram Kumar G. – Cyber Security & Risk Leader`,
    icon: FiShare2,
    category: "Panel",
  },
  {
    time: "05:00 PM",
    title: "CIO Tech Leadership Excellence Awards 2026",
    description:
      "Recognizing transformational leaders across industries.",
    icon: FiAward,
    category: "Awards",
  },
  {
    time: "05:30 PM",
    title: "Networking High Tea & Closing",
    description:
      "Where cross-industry conversations turn into real business opportunities.",
    icon: FiCoffee,
    category: "Networking",
  },
];

const categoryColors: Record<string, string> = {
  Networking:
    "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Keynote: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Panel: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Fireside: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Awards: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[3px] text-cyan-300 sm:px-5 sm:py-2 sm:text-sm">
            CIO Tech Leadership Summit 2026
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            CIO Tech Leadership Summit
            <span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent sm:ml-4">
              Agenda 2026
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 sm:w-32" />

          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-400 sm:text-lg">
            Explore the official agenda for the CIO Tech Leadership Summit
            2026 featuring keynote sessions, cross-industry leadership
            panels, executive networking, technology discussions and the
            CIO Tech Leadership Excellence Awards.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Spine */}
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/60 to-cyan-400/60 md:block" />

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;

              const catClass =
                categoryColors[item.category] ??
                "bg-slate-500/15 text-slate-300 border-slate-500/30";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.45,
                  }}
                  className="group relative"
                >
                  
                                  {/* Desktop Layout */}
                  <div className="hidden md:flex md:items-stretch md:gap-5">

                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10">
                        <Icon className="text-xl text-cyan-400" />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex w-[110px] flex-shrink-0 items-center">
                      <span className="text-base font-semibold tabular-nums text-cyan-300">
                        <time>{item.time}</time>
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex flex-1 items-center rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/25 hover:bg-white/[0.07]">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-lg font-bold text-white xl:text-xl">
                            {item.title}
                          </h3>

                          <span
                            className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${catClass}`}
                          >
                            {item.category}
                          </span>

                        </div>

                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-400 lg:text-base">
                          {item.description}
                        </p>

                      </div>
                    </div>

                  </div>

                  {/* Mobile Layout */}
                  <div className="flex gap-3 md:hidden">

                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900">
                        <Icon className="text-base text-cyan-400" />
                      </div>

                      {index < agendaItems.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-gradient-to-b from-cyan-500/40 to-transparent" />
                      )}
                    </div>

                    <div className="mb-1 flex-1 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">

                      <div className="mb-2 flex flex-wrap items-center gap-2">

                        <span className="text-sm font-semibold text-cyan-300">
                          {item.time}
                        </span>

                        <span
                          className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide ${catClass}`}
                        >
                          {item.category}
                        </span>

                      </div>

                      <h3 className="text-base font-bold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />

      </div>
    </section>
  );
}
                