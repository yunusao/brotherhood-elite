"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function SuccessPage() {
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
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mb-10"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]"
          >
            Brotherhood Elite • Growth & Impact
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Success & <span className="text-[#47A614]">Milestones</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl text-[#BDBDBD]"
          >
            Brotherhood Elite Basketball Academy has grown into one of Ontario’s
            fastest-growing basketball programs, built on development,
            discipline, and opportunity.
          </motion.p>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Competitive Achievements */}
          <motion.section
            variants={fadeUp}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <h2 className="text-xl font-extrabold">Competitive Achievements</h2>
            <ul className="mt-4 space-y-3 text-[#BDBDBD]">
              {[
                "Launched competitive rep programming in 2023",
                "2025 CYBL Champions",
                "2025 MYBL Champions",
                "2025 Toronto Big League Champions",
                "2025 IEM Invitational Tournament Champions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Player Development */}
          <motion.section
            variants={fadeUp}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <h2 className="text-xl font-extrabold">Player Development</h2>
            <ul className="mt-4 space-y-3 text-[#BDBDBD]">
              {[
                "Over 500 youth trained since 2019",
                "Athletes placed at top US prep schools with NCAA and professional pipelines",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Elite Coaching Network */}
          <motion.section
            variants={fadeUp}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <h2 className="text-xl font-extrabold">Elite Coaching Network</h2>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              Access to coaches and trainers with professional, collegiate, and
              national-level experience, ensuring athletes are developed with
              modern, high-performance standards.
            </p>
          </motion.section>

          {/* Community Impact */}
          <motion.section
            variants={fadeUp}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <h2 className="text-xl font-extrabold">Community Impact</h2>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              Brotherhood Elite emphasizes leadership, teamwork,
              accountability, and life skills that extend far beyond the game
              of basketball.
            </p>
          </motion.section>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8 text-center"
        >
          <p className="text-lg font-semibold">
            Built on <span className="text-[#47A614]">Brotherhood</span>. Proven by Results.
          </p>
          <p className="mt-2 text-sm text-[#BDBDBD]">
            The work continues — on the court, in the classroom, and in the community.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
