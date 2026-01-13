"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Coach = {
  name: string;
  title: string;
  teams: string[];
  bio: string;
  focus: string[];
  image: string;
};

const coaches: Coach[] = [
  {
    name: "Coach Malik Johnson",
    title: "Head Coach • Program Director",
    teams: ["U17 (GTA)", "U18 (GTA)"],
    bio: "Coach Malik brings a development-first approach built on accountability, defensive identity, and high standards. Known for building competitive teams and helping athletes grow their confidence and basketball IQ.",
    focus: ["Defense & competitive habits", "Basketball IQ", "Leadership & culture"],
    image: "/logo.jpg",
  },
  {
    name: "Coach Samira Ali",
    title: "Head Coach • Ottawa Hub",
    teams: ["U15 (Ottawa)", "U16 (Ottawa)"],
    bio: "Coach Samira emphasizes fundamentals under pressure—footwork, spacing, and decision-making. Her sessions are structured, high-rep, and focused on translating training into game performance.",
    focus: ["Skill development structure", "Footwork & finishing", "Game reads & spacing"],
    image: "/logo.jpg",
  },
  {
    name: "Coach Daniel Chen",
    title: "Assistant Coach • Player Development",
    teams: ["U13 (GTA)", "U14 (GTA)"],
    bio: "Coach Daniel specializes in early-stage athlete development: ball-handling, shooting form, and defensive stance. He’s detail-obsessed and builds strong foundations that scale as players move up.",
    focus: ["Shooting mechanics", "Ball-handling & control", "Defensive fundamentals"],
    image: "/logo.jpg",
  },
  {
    name: "Coach Ayo Mensah",
    title: "Strength & Conditioning Coach",
    teams: ["All Teams (GTA & Ottawa)"],
    bio: "Coach Ayo focuses on athletic performance: speed, agility, strength, and durability. His goal is to keep athletes healthy, explosive, and prepared for the physical demands of competitive basketball.",
    focus: ["Speed & agility", "Strength foundations", "Injury prevention"],
    image: "/logo.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function CoachesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle animated glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #63C51F 0%, rgba(71,166,20,0.35) 35%, rgba(11,11,11,0) 70%)",
        }}
        animate={{ x: [-40, 40, -40], y: [0, 22, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]">
            Brotherhood Elite • Staff & Leadership
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Meet the <span className="text-[#47A614]">Coaches</span>
          </h1>

          <p className="mt-2 max-w-2xl text-[#BDBDBD]">
            Our staff is committed to elite development, discipline, and building a culture of brotherhood.
            Every coach is accountable to the standard.
          </p>
        </motion.div>

        {/* Coaches list */}
        <div className="space-y-6">
          {coaches.map((c, idx) => {
            const reverse = idx % 2 === 1;

            return (
              <motion.section
                key={c.name}
                className="rounded-2xl border border-[#2A2A2A] bg-[#121212] overflow-hidden"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={idx}
              >
                <div
                  className={`grid gap-0 md:grid-cols-12 ${
                    reverse ? "" : ""
                  }`}
                >
                  {/* Image panel */}
                  <div className={`md:col-span-5 ${reverse ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative h-64 md:h-full min-h-[280px] bg-[#0B0B0B]">
                      <Image
                        src={c.image}
                        alt={`${c.name} photo`}
                        fill
                        className="object-contain p-8"
                        priority={idx < 2}
                      />

                      {/* corner badge */}
                      <div className="absolute left-4 top-4 rounded-full border border-[#2A2A2A] bg-[#0B0B0B]/70 px-3 py-1 text-xs text-[#BDBDBD] backdrop-blur">
                        Coach Profile
                      </div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className={`md:col-span-7 p-6 md:p-8 ${reverse ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl md:text-2xl font-extrabold tracking-tight">
                        {c.name}
                      </div>
                      <div className="text-sm text-[#BDBDBD]">{c.title}</div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.teams.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-1 text-xs text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-[#BDBDBD] leading-relaxed">
                        {c.bio}
                      </p>

                      <div className="mt-5">
                        <div className="text-sm font-semibold text-white">
                          Development Focus
                        </div>
                        <ul className="mt-2 grid gap-2 md:grid-cols-2 text-sm text-[#BDBDBD]">
                          {c.focus.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#47A614]" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-[#2A2A2A] pt-4 text-xs text-[#BDBDBD]">
                        Want to train with this staff? Check Tryouts and Training schedules.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <div className="text-lg font-extrabold">Interested in tryouts or training?</div>
            <div className="text-sm text-[#BDBDBD] mt-1">
              Register for tryouts or reach out with questions.
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="/tryouts"
              className="inline-flex items-center justify-center rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F]"
            >
              Tryouts / Register
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
