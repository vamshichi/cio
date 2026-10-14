"use client";

import { motion } from "framer-motion";
import {
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiMessageSquare,
  FiLock,
  FiTrendingUp,
} from "react-icons/fi";

const commitments = [
  {
    number: "01",
    icon: FiTarget,
    title: "Adoption, not technology",
    description:
      "We don't debate which model is best. We discuss how enterprises deploy, govern and scale whatever they choose.",
    emphasis: "From model selection to business impact.",
  },
  {
    number: "02",
    icon: FiUsers,
    title: "Practitioners on stage",
    description:
      "At least two-thirds of speakers are end-user technology leaders. Partners contribute expertise, not sales pitches.",
    emphasis: "Experience before promotion.",
  },
  {
    number: "03",
    icon: FiCheckCircle,
    title: "Real implementations",
    description:
      "Speakers are briefed to share deployments, costs, failures and results — named or anonymised, but real.",
    emphasis: "What worked. What didn't. Why.",
  },
  {
    number: "04",
    icon: FiMessageSquare,
    title: "One question per session",
    description:
      "Every keynote, panel and fireside answers a specific executive question. No generic overviews.",
    emphasis: "Focused questions. Useful answers.",
  },
  {
    number: "05",
    icon: FiLock,
    title: "Peer learning in private",
    description:
      "Closed-door roundtables under Chatham House Rule, so leaders can discuss what they can't say on stage.",
    emphasis: "Honest conversations, shared in confidence.",
  },
  {
    number: "06",
    icon: FiTrendingUp,
    title: "Outcomes over announcements",
    description:
      "Governance, ROI and operating models get as much stage time as innovation.",
    emphasis: "Business value is the measure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function WhyDifferent() {
  return (
    <section
      id="why-different"
      className="relative overflow-hidden bg-[#F1EFE8] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#82704F]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#82704F]">
                What makes CIO Tech different
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#77766E]">
              Built for the people responsible for turning enterprise AI into
              measurable business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <h2 className="max-w-4xl font-[family-name:var(--font-editorial)] text-4xl leading-[1.12] tracking-[-0.04em] text-[#262720] sm:text-5xl lg:text-6xl">
              No hype. No vendor theatre.
              <span className="block italic text-[#82704F]">
                Just what worked.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#62635B] sm:text-lg">
              India has no shortage of AI events. Most celebrate what AI could
              do. CIO Tech is for the leaders who have to make it work on
              Monday morning.
            </p>
          </motion.div>
        </div>

        {/* Commitment cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={cardVariants}
                className="group relative flex min-h-[285px] flex-col border border-[#E2DED6] bg-[#FAF9F6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8AA91] hover:shadow-[0_14px_35px_rgba(38,39,32,0.05)] sm:p-7 lg:p-8"
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#E2DED6] bg-white text-[#82704F] transition-colors duration-300 group-hover:border-[#82704F]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <span className="font-[family-name:var(--font-editorial)] text-2xl text-[#C7C0B3]">
                    {item.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-7 font-[family-name:var(--font-editorial)] text-[25px] leading-tight tracking-[-0.025em] text-[#262720]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#696A62]">
                  {item.description}
                </p>

                {/* Card takeaway */}
                <div className="mt-auto border-t border-[#E8E4DC] pt-5 mt-6">
                  <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#82704F]">
                    {item.emphasis}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mt-14 border-t border-[#D9D4C9] pt-9 sm:mt-16 sm:pt-12"
        >
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
            <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#82704F]">
              The difference
            </span>

            <p className="max-w-4xl font-[family-name:var(--font-editorial)] text-2xl leading-[1.4] tracking-[-0.025em] text-[#262720] sm:text-3xl lg:text-4xl">
              You leave with answers from peers who have already been where
              you are going.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
