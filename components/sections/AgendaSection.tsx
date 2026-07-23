"use client";

import {
  Clock,
  Coffee,
  Users,
  Mic,
  Award,
  Utensils,
  Briefcase,
} from "lucide-react";

const agenda = [
  {
    time: "08:30 – 09:10",
    title: "Registration & Executive Networking Breakfast",
    speaker:
      "Exclusive networking with CIOs, CTOs & CISOs across industries.",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    time: "09:10 – 09:20",
    title: "Welcome Address by the Organizer",
    icon: Mic,
    color: "bg-indigo-600",
  },
  {
    time: "09:20 – 09:30",
    title: "Opening Remarks",
    speaker:
      "Shri Priyank Kharge, Hon'ble Minister for Home, IT & Biotechnology",
    icon: Mic,
    color: "bg-purple-600",
  },
  {
    time: "09:30 – 10:20",
    title: "Leadership Panel 1",
    description:
      "Scaling AI Across the Enterprise: From Pilots to Business Impact",
    speaker:
      "Moderator: Anand Rathore | Panelists from CloudThat, METRO & Reliance Retail",
    icon: Users,
    color: "bg-sky-600",
  },
  {
    time: "10:20 – 10:45",
    title: "Keynote",
    description: "The AI-Led Enterprise Transformation Playbook",
    speaker: "Ashwin Chandrasekar, CIO, Table Space",
    icon: Briefcase,
    color: "bg-cyan-600",
  },
  {
    time: "10:45 – 11:10",
    title: "Keynote",
    description: "Building Future Ready AI Agent Workloads with AgentOven",
    speaker: "Siddartha Kopparapu",
    icon: Briefcase,
    color: "bg-emerald-600",
  },
  {
    time: "11:10 – 11:40",
    title: "Networking Coffee Break",
    icon: Coffee,
    color: "bg-orange-500",
  },
  {
    time: "11:40 – 12:00",
    title: "Industry Spotlight Keynote",
    description:
      "Creating the Capability Engine for India's Next Growth Story",
    speaker: "Bhillwan Trishul",
    icon: Mic,
    color: "bg-teal-600",
  },
  {
    time: "12:00 – 13:00",
    title: "Mega Panel",
    description:
      "Reinventing Customer Experience: AI, Data & Digital Across Industries",
    speaker:
      "Moderator: Arnab Sarkar | Leaders from Happiest Health, HCG & Eye-Q",
    icon: Users,
    color: "bg-blue-700",
  },
  {
    time: "13:00 – 14:00",
    title: "Strategic Networking Lunch",
    icon: Utensils,
    color: "bg-green-600",
  },
  {
    time: "14:00 – 14:25",
    title: "AIWoW Keynote",
    description:
      "Governance, Opportunities & Future Impact of AI on Enterprises",
    speaker: "Anand Rathore",
    icon: Briefcase,
    color: "bg-indigo-600",
  },
  {
    time: "14:25 – 14:50",
    title: "UX Design 2026",
    description: "Experience Zone in Intelligence Era",
    speaker: "Pankaj K",
    icon: Mic,
    color: "bg-pink-600",
  },
  {
    time: "14:50 – 15:40",
    title: "Cybersecurity & Resilience Panel",
    speaker:
      "Dr Ram Kumar | Dr Lalit Gupta | Arnab Sarkar | Meesho | Sutherland",
    icon: Users,
    color: "bg-red-600",
  },
  {
    time: "15:40 – 16:15",
    title: "Smart Operations & Digital Supply Chains",
    speaker:
      "Industry Leaders from METRO, Reliance Retail & Healthcare Global",
    icon: Users,
    color: "bg-violet-600",
  },
  {
    time: "16:15 – 16:45",
    title: "Networking Coffee Break",
    icon: Coffee,
    color: "bg-orange-500",
  },
  {
    time: "16:45 – 17:15",
    title: "CIO Tech Leadership Excellence Awards 2026",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    time: "17:15 Onwards",
    title: "Networking High Tea & Closing",
    icon: Coffee,
    color: "bg-green-700",
  },
];

export default function AgendaSection() {
  return (
    <section id="agenda" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Conference Schedule
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Event Agenda
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            A full day of keynotes, leadership discussions, networking, AI
            innovation and the CIO Tech Leadership Awards.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:block" />

          <div className="space-y-8">
            {agenda.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:flex-row lg:items-start"
                >
                  {/* Timeline Icon */}
                  <div
                    className={`hidden lg:flex h-16 w-16 items-center justify-center rounded-full ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                        <Clock className="mr-2 h-4 w-4" />
                        {item.time}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-lg font-medium text-blue-700">
                        {item.description}
                      </p>
                    )}

                    {item.speaker && (
                      <p className="mt-4 leading-7 text-slate-600">
                        {item.speaker}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}