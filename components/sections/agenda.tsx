'use client'

import { motion } from 'framer-motion'
import {
  FiCoffee,
  FiMic,
  FiMonitor,
  FiUsers,
  FiCloud,
  FiMessageCircle,
  FiTarget,
  FiShare2,
  FiBarChart2,
  FiShield,
} from 'react-icons/fi'

const agendaItems = [
  {
    time: '08:00 AM',
    title: 'Registration & Networking Breakfast',
    description:
      'An exclusive networking experience with industry peers.',
    icon: FiCoffee,
  },
  {
    time: '09:00 AM',
    title: 'Opening Remarks',
    description:
      'Setting the tone for cross-industry innovation and leadership.',
    icon: FiMic,
  },
  {
    time: '09:15 AM',
    title: 'Opening Keynote',
    description:
      'The Modern CIO: Leading Cross-Industry Transformation in an AI-First World.',
    icon: FiMonitor,
  },
  {
    time: '10:00 AM',
    title: 'Leadership Panel 1',
    description:
      'Scaling AI Across the Enterprise: From Pilots to Business Impact.',
    icon: FiUsers,
  },
  {
    time: '10:45 AM',
    title: 'Leadership Panel 2',
    description:
      'Cloud, Data & FinOps: Building Intelligent Enterprises Across Industries.',
    icon: FiCloud,
  },
  {
    time: '11:30 AM',
    title: 'Networking Coffee Break',
    description:
      'Meaningful peer-to-peer engagement across industries.',
    icon: FiCoffee,
  },
  {
    time: '12:15 PM',
    title: 'Executive Fireside Chat',
    description:
      'Legacy to Digital Core: Transformation Strategies That Work Across Industries.',
    icon: FiMessageCircle,
  },
  {
    time: '01:15 PM',
    title: 'Mega Panel',
    description:
      'Reinventing Customer Experience: AI, Data & Digital Across Industries.',
    icon: FiUsers,
  },
  {
    time: '02:15 PM',
    title: 'Strategic Networking Lunch',
    description:
      'Cross-industry roundtables for deeper collaboration and partnerships.',
    icon: FiCoffee,
  },
  {
    time: '03:00 PM',
    title: 'Spotlight Keynote',
    description:
      'The Experience Economy: Winning Customers Across Industries with AI & Data.',
    icon: FiTarget,
  },
  {
    time: '03:45 PM',
    title: 'Cross-Industry Panel',
    description:
      'Smart Operations & Digital Supply Chains: Lessons Across Industries.',
    icon: FiShare2,
  },
  {
    time: '04:30 PM',
    title: 'Keynote Address',
    description:
      'Modernisation Without Limits: Building Scalable Digital Enterprises Across Industries.',
    icon: FiBarChart2,
  },
  {
    time: '05:15 PM',
    title: 'Cross-Industry Leadership Panel',
    description:
      'Cybersecurity & Resilience: Securing the Digital Enterprise Across Industries.',
    icon: FiShield,
  },
  {
    time: '06:00 PM',
    title: 'Networking High Tea & Closing',
    description:
      'Where cross-industry conversations turn into real business opportunities.',
    icon: FiCoffee,
  },
]

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#020d1c] py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left blue glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

        {/* Right blue glow */}
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px]" />

        {/* Small dotted pattern */}
        <div
          className="absolute left-0 top-20 h-[500px] w-[180px] opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,180,255,0.5) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        {/* Right dotted pattern */}
        <div
          className="absolute bottom-20 right-0 h-[300px] w-[160px] opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,180,255,0.6) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        {/* Network lines */}
        <svg
          className="absolute right-0 top-0 h-[430px] w-[500px] opacity-40"
          viewBox="0 0 500 430"
          fill="none"
        >
          <path
            d="M260 0L330 70L430 40L500 130"
            stroke="#087ca8"
            strokeWidth="0.6"
          />
          <path
            d="M330 70L375 170L500 130"
            stroke="#087ca8"
            strokeWidth="0.6"
          />
          <path
            d="M430 40L375 170"
            stroke="#087ca8"
            strokeWidth="0.6"
          />
          <path
            d="M375 170L460 270L500 220"
            stroke="#087ca8"
            strokeWidth="0.6"
          />

          <circle cx="330" cy="70" r="2.5" fill="#18bde8" />
          <circle cx="430" cy="40" r="2.5" fill="#18bde8" />
          <circle cx="500" cy="130" r="2.5" fill="#18bde8" />
          <circle cx="375" cy="170" r="2.5" fill="#18bde8" />
          <circle cx="460" cy="270" r="2.5" fill="#18bde8" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-left text-4xl font-medium uppercase tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[#16c4d4]">AGENDA</span>{' '}
            <span className="text-white">OVERVIEW</span>
          </h2>

          <div className="mt-6 h-[3px] w-16 bg-[#13c5d3]" />

          <p className="mt-5 text-left text-base text-white/90 sm:text-lg">
            A power-packed day of insights, collaboration and leadership.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Main vertical timeline */}
          <div className="absolute left-[50px] top-[20px] hidden h-[calc(100%-40px)] w-[2px] bg-[#10b9c7] md:block" />

          <div className="space-y-0">

            {agendaItems.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.035,
                  }}
                  className="group relative"
                >

                  {/* ================= DESKTOP ================= */}

                  <div className="hidden min-h-[78px] grid-cols-[102px_115px_1fr] items-center md:grid">

                    {/* Icon */}
                    <div className="relative z-20 flex items-center justify-center">
                      <div
                        className="
                          flex h-[62px] w-[62px]
                          items-center justify-center
                          rounded-full
                          border border-[#169eb5]
                          bg-[#031322]
                          transition-all duration-300
                          group-hover:border-[#28d8e7]
                          group-hover:bg-[#062536]
                          group-hover:shadow-[0_0_20px_rgba(20,200,220,0.15)]
                        "
                      >
                        <Icon
                          size={27}
                          strokeWidth={1.4}
                          className="text-white"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex h-[52px] items-center border-r border-white/25 pl-0">
                      <span className="text-[17px] font-medium tabular-nums text-[#0fd1d8]">
                        {item.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="ml-7 flex min-h-[78px] flex-col justify-center border-b border-white/20">
                      <h3 className="text-[17px] font-semibold leading-tight text-white lg:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[14px] leading-relaxed text-white/75 lg:text-[15px]">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* ================= MOBILE ================= */}

                  <div className="relative flex gap-4 py-3 md:hidden">

                    {/* Icon + line */}
                    <div className="relative flex w-10 flex-shrink-0 justify-center">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#159db3] bg-[#031322]">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      </div>

                      {index !== agendaItems.length - 1 && (
                        <div className="absolute left-1/2 top-10 h-full w-px -translate-x-1/2 bg-[#10b9c7]/50" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 border-b border-white/15 pb-4">

                      <div className="mb-1">
                        <span className="text-sm font-medium text-[#10d0d8]">
                          {item.time}
                        </span>
                      </div>

                      <h3 className="text-[15px] font-semibold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-relaxed text-white/65">
                        {item.description}
                      </p>

                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ================= QUOTE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mt-10
            w-full
            max-w-[330px]
            rounded-xl
            border
            border-[#00b8c8]
            bg-[#031728]/90
            px-6
            py-5
            sm:mt-12
          "
        >
          <div className="absolute left-4 top-2 text-4xl leading-none text-[#11c6d3]">
            “
          </div>

          <p className="pl-7 text-sm leading-7 text-white/90 sm:text-[15px]">
            Connect. Collaborate. Create Impact.
            <br />
            Across Industries. Beyond Boundaries.
          </p>
        </motion.div>

      </div>

      {/* ================= BOTTOM CITY SILHOUETTE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-[260px] overflow-hidden md:block">

        <svg
          className="absolute bottom-0 right-0 h-full w-full opacity-80"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Ground */}
          <path
            d="M0 290H1200"
            stroke="#087ea9"
            strokeWidth="1"
          />

          {/* Bridge */}
          <path
            d="M480 290L650 220L790 290"
            stroke="#0782b2"
            strokeWidth="1.2"
          />

          <path
            d="M650 220V290"
            stroke="#0782b2"
            strokeWidth="1"
          />

          <path
            d="M610 245L650 220L690 245"
            stroke="#0782b2"
            strokeWidth="1"
          />

          {/* Buildings */}
          <path
            d="M850 290V165H880V290
               M890 290V125H925V290
               M940 290V80H970V290
               M985 290V145H1015V290
               M1030 290V105H1065V290
               M1080 290V60H1115V290
               M1130 290V145H1160V290
               M1175 290V110H1200V290"
            stroke="#0784b4"
            strokeWidth="1.2"
          />

          {/* Tall tower */}
          <path
            d="M1080 290V60
               L1097 25
               L1115 60
               M1097 25V5
               M1090 290V105
               M1105 290V105"
            stroke="#0784b4"
            strokeWidth="1.2"
          />

          {/* Dome building */}
          <path
            d="
              M700 290
              V235
              C710 215 725 205 740 205
              C755 205 770 215 780 235
              V290

              M715 290V235
              M765 290V235

              M725 205
              C728 190 735 180 740 175
              C745 180 752 190 755 205

              M740 175V150
              M733 150H747
            "
            stroke="#0784b4"
            strokeWidth="1.3"
          />

          {/* Dome side structures */}
          <path
            d="
              M675 290V245
              C680 235 687 230 694 230
              C701 230 708 235 713 245

              M767 245
              C772 235 779 230 786 230
              C793 230 800 235 805 245
              V290
            "
            stroke="#0784b4"
            strokeWidth="1"
          />

          {/* Trees */}
          <path
            d="
              M250 290
              C255 275 265 275 270 290
              M275 290
              C280 270 292 270 297 290
              M300 290
              C305 278 315 278 320 290

              M390 290
              C395 270 405 270 410 290
              M420 290
              C425 275 435 275 440 290
            "
            stroke="#0784b4"
            strokeWidth="1"
          />
        </svg>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020d1c] to-transparent" />
      </div>

    </section>
  )
}