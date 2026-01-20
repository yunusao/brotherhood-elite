"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <>
      {/* ================= MOBILE HERO (IMAGE FULL COVER) ================= */}
      <section className="relative block md:hidden h-[85vh] min-h-[520px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/heros-temp.jpg"
          alt="Brotherhood Elite team"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* subtle glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #63C51F 0%, rgba(71,166,20,0.35) 35%, rgba(11,11,11,0) 70%)",
          }}
          animate={{ x: [-25, 25, -25], y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-page relative z-10 flex h-full items-center text-center">
          <div className="w-full">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl font-extrabold tracking-tight"
            >
              Built on <span className="text-[#47A614]">Brotherhood</span>.
              <br />
              Driven by <span className="text-[#47A614]">Belief</span>.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-4 max-w-sm text-[#E0E0E0]"
            >
              Competitive basketball development in Scarborough, Mississauga and Ottawa — elite
              training, teams, and a culture of accountability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="mt-7 flex flex-col gap-3"
            >
              <Button href="/tryouts">Tryouts / Register</Button>
              <Button href="/programs" variant="secondary">
                View Programs
              </Button>
            </motion.div>

            {/* Mini cards */}
            {/* <motion.div
              className="mt-10 grid grid-cols-1 gap-3"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.25 },
                },
              }}
            >
              {[
                ["Character"],
                ["Academics"],
                ["Basketball"],
              ].map(([t, d]) => (
                <motion.div
                  key={t}
                  className="rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur flex flex-col items-center justify-center text-center min-h-[90px]"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="font-bold">{t}</div>
                  <div className="text-sm text-[#BDBDBD] mt-1">{d}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>
        </div>

        {/* fade bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      </section>

      {/* ================= DESKTOP HERO (IMAGE – TEMP) ================= */}
      <section className="relative hidden md:block h-[90vh] min-h-[560px] overflow-hidden">
        {/*
        ================= VIDEO HERO (COMMENTED OUT FOR NOW) =================
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        =====================================================================
        */}

        {/* Hero Image */}
        <Image
          src="/heros-temp.jpg"
          alt="Brotherhood Elite team"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Subtle green glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #63C51F 0%, rgba(71,166,20,0.35) 35%, rgba(0,0,0,0) 70%)",
          }}
          animate={{ x: [-40, 40, -40], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-[#BDBDBD] backdrop-blur">
                Competitive Program • Scarborough • Mississauga • Ottawa
              </div>

              <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight">
                Built on <span className="text-[#47A614]">Brotherhood</span>.
                <br />
                Driven by <span className="text-[#47A614]">Belief</span>.
              </h1>

              <p className="mt-4 text-lg text-[#E0E0E0]">
                Elite training, competitive teams, and a culture of accountability — on and off the court.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  href="/tryouts"
                  className="px-20 py-4 text-lg font-semibold"
                >
                  Tryouts / Register
                </Button>

                <Button
                  href="/programs"
                  variant="secondary"
                  className="px-20 py-4 text-lg font-semibold"
                >
                  View Programs
                </Button>
              </div>


              {/* Quick stats
              <motion.div
                className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                }}
              >
                {[
                  ["Character"],
                  ["Academics"],
                  ["Basketball"],
                ].map(([t, d]) => (
                  <motion.div
                    key={t}
                    className="rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur flex flex-col items-center justify-center text-center min-h-[90px]"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div className="font-bold">{t}</div>
                    <div className="text-sm text-[#BDBDBD] mt-1">{d}</div>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>
          </div>
        </div>

        {/* Fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      </section>

      {/* ================= MARQUEE STRIP ================= */}
      <div className="border-y border-[#2A2A2A] bg-[#0B0B0B]">
        <div className="container-page overflow-hidden py-3">
          <motion.div
            className="whitespace-nowrap text-sm text-[#BDBDBD]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <span className="mr-10">
              Scarborough • Mississauga • Ottawa • Competitive Teams • Elite Training • Camps • Brotherhood • Accountability • Development •
            </span>
            <span className="mr-10">
              Scarborough • Mississauga • Ottawa • Competitive Teams • Elite Training • Camps • Brotherhood • Accountability • Development •
            </span>
          </motion.div>
        </div>
      </div>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-12">
        <div className="container-page">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Programs</h2>
            <p className="mt-2 text-[#BDBDBD]">
              Structured offerings for competitive athletes — teams, training, and camps.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Competitive Rep/AAU Teams",
                desc: "Tryout-based rosters, season planning, and tournament play.",
                href: "/programs",
              },
              {
                title: "B.E. Academy",
                desc: "Shooting, handles, footwork, defense, and basketball IQ.",
                href: "/programs",
              },
              {
                title: "Individual & Small Group Training",
                desc: "High reps, high intensity, and measurable improvement.",
                href: "/programs",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="text-lg font-extrabold">{c.title}</div>
                <div className="mt-2 text-[#BDBDBD]">{c.desc}</div>
                <div className="mt-4">
                  <a className="text-[#47A614] hover:text-[#63C51F] font-semibold" href={c.href}>
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-14">
        <div className="container-page">
          <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-8 md:p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-extrabold">Ready to compete?</div>
              <div className="text-[#BDBDBD] mt-1">
                Register for upcoming tryouts or contact us for training.
              </div>
            </div>
            <div className="flex gap-3">
              <Button href="/tryouts">Register</Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
