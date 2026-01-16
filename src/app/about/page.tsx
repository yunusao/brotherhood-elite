"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Dumbbell , Volleyball} from "lucide-react";
import type { Variants } from "framer-motion";


const reveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};


export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle brand glow */}
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
        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-10 overflow-hidden"
        >
          {/* watermark logo */}
          <div className="pointer-events-none absolute right-6 top-6 hidden md:block opacity-[0.04] blur-sm">
            <Image src="/logo.jpg" alt="" width={200} height={200} />
          </div>


          <motion.div variants={reveal}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-2 text-xs text-[#BDBDBD]">
              About Brotherhood Elite • GTA & Ottawa
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Who <span className="text-[#47A614]">We Are</span>
            </h1>

            <p className="mt-4 max-w-3xl text-[#BDBDBD] leading-relaxed">
              Brotherhood Elite Basketball Academy is a home for passionate, driven,
              and focused student-athletes. We are committed to developing and inspiring
              young men from Mississauga, Scarborough, Ottawa, and surrounding areas.
            </p>

            <p className="mt-4 max-w-3xl text-[#BDBDBD] leading-relaxed">
              At Brotherhood Elite, we prepare athletes to reach their full potential not only
              as basketball players, but as well-rounded individuals. Through structured training,
              mentorship, and discipline, we provide our athletes with opportunities that extend
              beyond the game and positively impact their lives.
            </p>
          </motion.div>

          {/* quick values row */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 grid gap-3 md:grid-cols-3"
          >
            {[
              ["Development", "Elite training + fundamentals"],
              ["Mentorship", "Accountability + leadership"],
              ["Pathways", "Opportunities beyond the game"],
            ].map(([t, d]) => (
              <motion.div
                key={t}
                variants={reveal}
                className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-4"
              >
                <div className="font-bold text-white">{t}</div>
                <div className="mt-1 text-sm text-[#BDBDBD]">{d}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission + Vision */}
        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.section
            variants={reveal}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <div className="text-xs text-[#BDBDBD]">Our Purpose</div>
            <h2 className="mt-2 text-2xl font-extrabold">
              Our <span className="text-[#47A614]">Mission</span>
            </h2>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              Our mission is to develop youth through the game of basketball by instilling
              leadership, teamwork, discipline, and strong fundamentals.
            </p>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              We offer individual, small-group, and large-group training opportunities designed
              to meet athletes at their current level and help them progress to the next stage of
              their development. Built on passion, dedication, and respect for the game, Brotherhood
              Elite believes basketball—when taught the right way—can shape character, strengthen
              academics, and build lifelong relationships while elevating on-court performance.
            </p>
          </motion.section>

          <motion.section
            variants={reveal}
            className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8"
          >
            <div className="text-xs text-[#BDBDBD]">Where We’re Going</div>
            <h2 className="mt-2 text-2xl font-extrabold">
              Our <span className="text-[#47A614]">Vision</span>
            </h2>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              We envision Brotherhood Elite as a leading basketball academy that develops confident,
              disciplined, and high-character young men prepared for success in sport, academics, and life.
            </p>
            <p className="mt-4 text-[#BDBDBD] leading-relaxed">
              Our goal is to create clear pathways for athletes to compete at higher levels while remaining
              grounded in strong values, accountability, and brotherhood.
            </p>

            <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-4">
              <div className="text-sm font-semibold text-white">Guiding Standard</div>
              <div className="mt-1 text-sm text-[#BDBDBD]">
                Strong values • Accountability • Brotherhood • Growth
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Core Principles */}
        <motion.section
          className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="mb-6">
            <div className="text-xs text-[#BDBDBD]">What We Stand On</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Our <span className="text-[#47A614]">Core Principles</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              variants={reveal}
              className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-[#2A2A2A] bg-[#121212] p-3">
                  <ShieldCheck className="h-5 w-5 text-[#47A614]" />
                </div>
                <div className="font-extrabold text-white">Character Building</div>
              </div>
              <p className="mt-4 text-sm text-[#BDBDBD] leading-relaxed">
                Teaching responsibility, resilience, integrity, and leadership on and off the court.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-[#2A2A2A] bg-[#121212] p-3">
                  <GraduationCap className="h-5 w-5 text-[#47A614]" />
                </div>
                <div className="font-extrabold text-white">Academic Excellence</div>
              </div>
              <p className="mt-4 text-sm text-[#BDBDBD] leading-relaxed">
                Supporting student-athletes in balancing education with athletic commitment.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-[#2A2A2A] bg-[#121212] p-3">
                  <Volleyball className="h-5 w-5 text-[#47A614]" />
                </div>
                <div className="font-extrabold text-white">Basketball Development</div>
              </div>
              <p className="mt-4 text-sm text-[#BDBDBD] leading-relaxed">
                Providing elite-level training that sharpens fundamentals, basketball IQ, and overall performance.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer note / CTA */}
        <motion.div
          className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <div className="text-lg font-extrabold text-white">
              Ready to join Brotherhood Elite?
            </div>
            <div className="text-sm text-[#BDBDBD] mt-1">
              Explore programs, register for tryouts, or contact us for training info.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/tryouts"
              className="inline-flex items-center justify-center rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F]"
            >
              Tryouts / Register
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              View Programs
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
