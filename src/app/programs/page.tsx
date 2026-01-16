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

const programs = [
  {
    title: "Skill Development Training",
    desc: "Structured sessions focused on fundamentals, basketball IQ, and game-ready habits through high-rep training.",
    bullets: ["Shooting + finishing", "Ball-handling + footwork", "Defense + competitive habits", "Decision-making + spacing"],
    href: "/contact",
  },
  {
    title: "Competitive Rep Teams",
    desc: "Tryout-based rosters competing in leagues and tournaments with disciplined coaching and player development.",
    bullets: ["Rep programming launched in 2023", "Season planning + tournaments", "Role clarity + accountability", "Film + performance feedback"],
    href: "/tryouts",
  },
  {
    title: "Individual & Small Group Training",
    desc: "Personalized development plans to target specific weaknesses and accelerate growth with focused coaching.",
    bullets: ["Customized training plan", "Position-specific skill work", "High-efficiency sessions", "Measurable progress"],
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
            Programs built for{" "}
            <span className="text-[#47A614]">development & results</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-[#BDBDBD]">
            Brotherhood Elite offers structured training and competitive programs for athletes at various stages of
            development — from fundamentals to high-level competition.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2"
        >
          {programs.map((p) => (
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

              <div className="mt-6 border-t border-[#2A2A2A] pt-4">
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#47A614] hover:text-[#63C51F] transition"
                >
                  Learn more / Get involved <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.section>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
}
