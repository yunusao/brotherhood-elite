"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Coach = {
  name: string;
  title: string;
  teams: string[];
  bio: string[] | string;
  image: string;
};

const coaches: Coach[] = [
  {
    name: "Musa Ahluwalia",
    title: "Founder • Head Coach",
    teams: ["Program Coordinator", "U16(Mississauga)", "U19(Mississauga)"],
    bio: [
      "Musa Ahluwalia brings over a decade of experience in playing and coaching basketball at multiple levels. His basketball journey began at age 8 and led to prep school scholarships and university interest across the US and Canada.",
      "At 19, Musa made the decision to step away from playing to focus on creating opportunities for youth. He founded Brotherhood Elite with the vision of providing elite training, mentorship, and pathways to higher levels of basketball.",
      "Having trained under high-level coaches and trainers—including Jacques Lukusa, formerly ranked the #2 guard in Canada—Musa gained first-hand experience in elite player development. Since 2019, he has coached hundreds of athletes across Ontario, many of whom have advanced to top US prep schools such as St. Benedict’s Prep (NJ), Wilson Academy (GA), and St. Louis Christian Academy (MO).",
    ],
    image: "/musaa.jpeg",
  },
  {
  name: "Louis Moore",
  title: "Program Director • Head Coach",
  teams: ["Program Oversight","U17(Mississauga)"],
  bio: [
    "Louis Moore is a transformational leader and energetic coach with over 20 years of playing experience and more than a decade of coaching.",
    "A former 3-time All-Star and All-Canadian, Louis competed at the collegiate and professional levels before returning home to dedicate himself to youth development. His coaching journey began with family and expanded to mentoring athletes who have gone on to compete at NCAA Division I, Carleton University, and beyond.",
    "Known for his passion, basketball knowledge, and commitment to player growth, Louis continues to impact the next generation both on and off the court.",
  ],
  image: "/louis.jpeg",
},
{
  name: "Alham Khatol",
  title: "Head Coach • Scarborough",
  teams: ["U14(Scarborough)", "U16(Scarborough)"],
  bio: [
    "Alham Khatol, one of our lead assistant coaches in the GTA, brings an extensive coaching experience to our club. With a background in high-level competition during his high school career and over 5 years of training and coaching youth basketball players through Brotherhood Elite and other community programs, Alham is dedicated to nurturing talent and fostering a love for the game.",
    "His passion and love for the game allow him to continue to enjoy playing at a high level today, which also translates to his coaching. His expertise and passion for basketball make him an invaluable asset to our coaching staff, ensuring that players receive top-tier guidance and support as they strive for excellence on the court.",
  ],
  image: "/Alham.jpg",
},
{
  name: "Ahmad Darwiche",
  title: "Head Coach • Ottawa",
  teams: ["U17(Ottawa)"],
  bio: [
    "Coach Darwiche brings a deep passion for player development and the game of basketball. A lifelong competitor, he played high-level AAU basketball and was an accomplished high school all-star, earning college opportunities before choosing a different professional path.",
    "With over six years of coaching experience, Coach Darwiche has worked extensively in youth basketball and has mentored prospects who have gone on to play Division I basketball and U Sports (CIS). Well known in the Ottawa basketball community, he is recognized for teaching the game the right way — emphasizing high basketball IQ, strong fundamentals, and disciplined decision-making.",
    "Having worked with youth for over a decade, Coach Darwiche excels at connecting with players, nurturing talent, and helping athletes grow both on and off the court.",
  ],
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
            Meet the <span className="text-[#47A614]">Leadership & Coaches</span>
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
                <div className="grid gap-0 md:grid-cols-12">
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

                      {Array.isArray(c.bio) ? (
                        c.bio.map((p, i) => (
                          <p key={i} className="mt-4 text-[#BDBDBD] leading-relaxed">
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="mt-4 text-[#BDBDBD] leading-relaxed">{c.bio}</p>
                      )}

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
