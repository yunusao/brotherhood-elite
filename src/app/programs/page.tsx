"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type Program = {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  split?: Array<{
    heading: string;
    text: string;
    points: string[];
  }>;
};

const programs: Program[] = [
  {
    title: "Competitive Rep/AAU Teams",
    desc: "Competitive Rep / AAU Teams are for athletes ready to compete at a higher level and apply their development in real game environments.",
    bullets: [
      "High-level local and travel competition",
      "Structured practices and coached game reps",
      "Accountability, discipline, and competitive mindset",
      "Exposure to strong competition and growth through challenge",
    ],
    href: "/tryouts",
  },

  {
    title: "Brotherhood Elite Academy",
    desc: "Two-track academy training: master the team-first game without the ball, and build confident skills with the ball — both within the flow of real basketball.",
    bullets: [], // not used for this one anymore
    href: "/academy", // or /tryouts if you haven't added /registration yet
    split: [
      {
        heading: "Program 95",
        text: "Teaches the 95% of basketball played without the ball—movement, defense, communication, and team play—developing smart, disciplined, team-first players.",
        points: ["Movement + spacing", "Defense + rotations", "Communication", "Team play habits"],
      },
      {
        heading: "Program 5",
        text: "Focuses on the 5% of the game played with the ball—ball-handling, finishing, shooting, and decision-making—building confidence, skill, and creativity within the flow of the team.",
        points: ["Ball-handling", "Finishing", "Shooting", "Decision-making"],
      },
    ],
  },
  {
    title: "Individual & Small Group Training",
    desc: "Personalized development plans to target specific weaknesses and accelerate growth with focused coaching.",
    bullets: [
      "Customized training plan",
      "Position-specific skill work",
      "High-efficiency sessions",
      "Measurable progress",
    ],
    href: "/contact",
  },
  {
    title: "Mentorship & Leadership Development",
    desc: "Beyond basketball: building confident, disciplined student-athletes through mentorship and standards.",
    bullets: ["Leadership habits", "Accountability + mindset", "Teamwork + character", "Support for academics + balance"],
    href: "/about",
  },
];

export default function ProgramsPage() {
  const academyProgram = programs.find((p) => p.title === "Brotherhood Elite Academy");
  const otherPrograms = programs.filter((p) => p.title !== "Brotherhood Elite Academy");

  const firstProgram = otherPrograms[0];
  const restPrograms = otherPrograms.slice(1);

  // Reusable render for non-academy cards (left stack)
  const renderStandardProgramCard = (p: (typeof programs)[number]) => (
    <motion.section
      key={p.title}
      variants={fadeUp}
      className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-extrabold">{p.title}</h2>
        <span className="shrink-0 rounded-full border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-1 text-xs text-[#BDBDBD]">
          Program
        </span>
      </div>

      <p className="mt-3 text-[#BDBDBD] leading-relaxed">{p.desc}</p>

      <ul className="mt-5 space-y-2 text-sm text-[#BDBDBD]">
        {p.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#47A614]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {p.title === "Competitive Rep/AAU Teams" ? (
        <p className="mt-4 text-sm text-[#BDBDBD]">
          These teams are about development through competition, not shortcuts—preparing players to
          perform the right way when it matters.
        </p>
      ) : null}

      <div className="mt-6 border-t border-[#2A2A2A] pt-4">
        <Link
          href={p.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#47A614] hover:text-[#63C51F] transition"
        >
          {"Learn more / Get involved"} <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.section>
  );

  // Reusable Academy card content
  const renderAcademyCard = (compact = false) => (
    <motion.section
      variants={fadeUp}
      className={[
        "rounded-2xl border border-[#2A2A2A] bg-[#121212]",
        compact ? "p-6" : "p-6 md:p-8",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className={compact ? "text-xl font-extrabold" : "text-xl md:text-2xl font-extrabold"}>
          Brotherhood Elite Academy
        </h2>
        <span className="shrink-0 rounded-full border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-1 text-xs text-[#BDBDBD]">
          Program
        </span>
      </div>

      <p className="mt-3 text-[#BDBDBD] leading-relaxed">
        Structured two-track development for players who have foundational skills and previous
        experience.
      </p>

      {/* Program 95 */}
      <div className="mt-5 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-extrabold text-white">Program 95</h3>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-[#BDBDBD]">
            Track
          </span>
        </div>

        <ul className="mt-3 space-y-2 text-sm text-[#BDBDBD]">
          {[
            "Focuses on the 95% of basketball played without the ball",
            "Movement, defense, communication, spacing, and team play",
            "Develops smart, disciplined, team-first players",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#47A614]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 text-xs text-[#BDBDBD] italic">
          — For players with prior experience and fundamentals
        </div>
      </div>

      {/* Program 5 */}
      <div className="mt-4 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-extrabold text-white">Program 5</h3>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-[#BDBDBD]">
            Track
          </span>
        </div>

        <ul className="mt-3 space-y-2 text-sm text-[#BDBDBD]">
          {[
            "Focuses on the 5% of the game played with the ball",
            "Ball-handling, finishing, shooting, and decision-making",
            "Builds confidence, skill, and creativity within the flow of the team",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#47A614]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 text-xs text-[#BDBDBD] italic">
          — Requires players to already have foundational skills and on-court experience
        </div>
      </div>

      {/* Why both */}
      <div className="mt-6 border-t border-[#2A2A2A] pt-4 text-sm text-[#BDBDBD]">
        <span className="text-white font-semibold">Why we teach both:</span>{" "}
        Great players impact the game with and without the ball—combining skill, intelligence, and
        team-first basketball.
      </div>

      {/* Link */}
      <div className="mt-4">
        <Link
          href="/academy"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#47A614] hover:text-[#63C51F] transition"
        >
          {"Explore Program 95 & Program 5"} <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.section>
  );

  return (
    <div className="relative overflow-hidden">
      {/* subtle brand glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #63C51F 0%, rgba(71,166,20,0.35) 35%, rgba(11,11,11,0) 70%)",
        }}
        animate={{ x: [-30, 30, -30], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative py-12 md:py-16">
        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="mb-10">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]"
          >
            Brotherhood Elite • Training & Competition
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Programs built for <span className="text-[#47A614]">development & results</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-[#BDBDBD]">
            Brotherhood Elite offers structured training and competitive programs for athletes at various stages of
            development — from fundamentals to high-level competition.
          </motion.p>
        </motion.div>

        {/* Programs Layout */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2 items-start"
        >
          {/* LEFT COLUMN – stacked programs */}
          <motion.div variants={stagger} className="flex flex-col gap-5">
            {/* First card */}
            {firstProgram ? renderStandardProgramCard(firstProgram) : null}

            {/* Academy inserted SECOND on MOBILE only */}
            {academyProgram ? (
              <div className="md:hidden">{renderAcademyCard(true)}</div>
            ) : null}

            {/* Rest of cards */}
            {restPrograms.map((p) => renderStandardProgramCard(p))}
          </motion.div>

          {/* RIGHT COLUMN – academy (DESKTOP ONLY) */}
          {academyProgram ? (
            <div className="hidden md:block">{renderAcademyCard(false)}</div>
          ) : null}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <div className="text-lg md:text-xl font-extrabold">Not sure what fits best?</div>
            <div className="mt-1 text-sm text-[#BDBDBD]">
              Contact us and we’ll recommend a training plan based on skill level and goals.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/tryouts"
              className="inline-flex items-center justify-center rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F]"
            >
              {"Tryouts / Register"}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
