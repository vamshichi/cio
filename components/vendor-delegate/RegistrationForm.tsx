"use client";

import { useState } from "react";

const interests = [
  "AI & Generative AI",
  "Cyber Security",
  "Cloud Computing",
  "Data & Analytics",
  "Digital Transformation",
  "Enterprise Software",
  "IoT",
  "Automation",
  "Networking",
  "Managed Services",
];

export default function RegistrationForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (item: string) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== item)
      );
    } else {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  return (
    <section
      id="registration"
      className="py-20 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-12 shadow-2xl">

          <div className="mb-10">
            <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-4 py-2 text-sm font-medium">
              Vendor Delegate Registration
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white">
              Register Now
            </h2>

            <p className="mt-3 text-slate-400 max-w-3xl">
              Complete the registration form below to secure your Vendor
              Delegate pass and connect with India's leading CIOs, CTOs,
              CISOs and enterprise technology leaders.
            </p>
          </div>

          <form className="space-y-10">

            {/* Personal Information */}

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Job Title *
                  </label>

                  <input
                    type="text"
                    placeholder="Vice President"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="ABC Technologies"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Business Email *
                  </label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    LinkedIn Profile
                  </label>

                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

              </div>
            </div>

            {/* Company */}

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Company Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Industry
                  </label>

                  <select className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white">

                    <option>Technology</option>
                    <option>Cyber Security</option>
                    <option>Cloud</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>

                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Company Size
                  </label>

                  <select className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white">

                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500-1000</option>
                    <option>1000+</option>

                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    Country
                  </label>

                  <input
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
                    placeholder="India"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-300">
                    City
                  </label>

                  <input
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
                    placeholder="Bengaluru"
                  />
                </div>

              </div>
            </div>

            {/* Interests */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-6">
                Areas of Interest
              </h3>

              <div className="flex flex-wrap gap-3">

                {interests.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleInterest(item)}
                    className={`rounded-full px-5 py-2 border transition ${
                      selectedInterests.includes(item)
                        ? "bg-cyan-500 border-cyan-500 text-slate-900 font-semibold"
                        : "border-slate-700 text-slate-300 hover:border-cyan-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* Objectives */}

            <div>

              <label className="block text-xl font-semibold text-white mb-4">
                Business Objectives
              </label>

              <textarea
                rows={5}
                placeholder="Tell us what you want to achieve by attending the summit..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-4 text-white outline-none focus:border-cyan-500"
              />

            </div>

            {/* Meetings */}

            <div>

              <label className="block text-xl font-semibold text-white mb-5">
                Would you like to participate in One-to-One Business Meetings?
              </label>

              <div className="flex gap-8">

                <label className="flex items-center gap-2 text-slate-300">
                  <input type="radio" name="meeting" />
                  Yes
                </label>

                <label className="flex items-center gap-2 text-slate-300">
                  <input type="radio" name="meeting" />
                  No
                </label>

              </div>

            </div>

            {/* Message */}

            <div>

              <label className="block text-xl font-semibold text-white mb-4">
                Additional Requirements
              </label>

              <textarea
                rows={4}
                placeholder="Any specific requirements..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-4 text-white"
              />

            </div>

            {/* Consent */}

            <div className="space-y-4">

              <label className="flex items-start gap-3 text-slate-300">

                <input
                  type="checkbox"
                  className="mt-1"
                />

                <span>
                  I agree to the Privacy Policy and Terms & Conditions.
                </span>

              </label>

              <label className="flex items-start gap-3 text-slate-300">

                <input
                  type="checkbox"
                  className="mt-1"
                />

                <span>
                  I agree to receive event updates and promotional communications.
                </span>

              </label>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-900 hover:bg-cyan-400 transition"
            >
              Register as Vendor Delegate
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}