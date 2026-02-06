import Link from "next/link";

export const metadata = {
  title: "Our Development Model | Program 95 & Program 5",
  description:
    "B.E. Basketball Academy’s two-track development model: Program 95 (off-ball mastery) and Program 5 (on-ball development). Not for beginners.",
};

export default function AcademyPage() {
  return (
    <div className="container-page py-12 md:py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]">
          B.E. Basketball Academy • Development Model
        </div>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
          Our Development Model:{" "}
          <span className="text-[#47A614]">Program 95</span> &{" "}
          <span className="text-[#47A614]">Program 5</span>
        </h1>

        <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-[#BDBDBD]">
          Not for beginners
        </div>

        <p className="mt-4 text-[#BDBDBD] leading-relaxed">
          At B.E. Basketball Academy, we believe complete players are built by
          mastering both sides of the game—what happens without the ball and what
          happens with the ball. That’s why our training is structured around
          two complementary pillars: Program 95 and Program 5.
        </p>

        <p className="mt-3 text-[#BDBDBD] leading-relaxed">
          Together, they develop high-IQ, skilled, confident athletes who
          understand how to win as individuals and as a team.
        </p>
      </div>

      {/* Two pillars */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Program 95 */}
        <section className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs text-[#BDBDBD]">The Foundation</div>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
                Program <span className="text-[#47A614]">95</span> — Off-Ball
                Mastery
              </h2>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-[#BDBDBD]">
              Track 95
            </span>
          </div>

          <p className="mt-4 text-[#BDBDBD] leading-relaxed">
            Program 95 focuses on the 95% of basketball played without the ball.
            This is where winning habits, discipline, and high-level team play
            are built.
          </p>

          <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">
            <div className="text-sm font-semibold text-white">
              Key areas of focus
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#BDBDBD]">
              {[
                "Movement without the ball",
                "Proper spacing and floor balance",
                "Communication and being vocal on both ends",
                "Setting and using solid screens",
                "Making the extra pass",
                "Understanding and running an offense",
                "Playing defense with feet first, hands second",
                "Accountability, effort, and acceptable behavior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">
            <div className="text-sm font-semibold text-white">Why it matters</div>
            <ul className="mt-4 space-y-2 text-sm text-[#BDBDBD]">
              {[
                "Most players never learn this side of the game",
                "Coaches value players who impact the game without needing the ball",
                "High-IQ team basketball leads to more playing time and opportunity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-xs text-[#BDBDBD] italic">
            — For players with prior experience and solid skill fundamentals; not
            for beginners.
          </div>

          <div className="mt-4 border-t border-[#2A2A2A] pt-4 text-sm text-[#BDBDBD]">
            Program 95 teaches athletes how to{" "}
            <span className="text-white font-semibold">think</span> the game, not
            just play it.
          </div>
        </section>

        {/* Program 5 */}
        <section className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs text-[#BDBDBD]">
                Skill, Confidence & Creation
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
                Program <span className="text-[#47A614]">5</span> — On-Ball
                Development
              </h2>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-[#BDBDBD]">
              Track 5
            </span>
          </div>

          <p className="mt-4 text-[#BDBDBD] leading-relaxed">
            Program 5 focuses on the 5% of the game played with the ball—where
            skill, creativity, and decision-making come alive.
          </p>

          <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">
            <div className="text-sm font-semibold text-white">
              Key areas of focus
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#BDBDBD]">
              {[
                "Ball-handling and control",
                "Finishing at the rim",
                "Shooting fundamentals and shot preparation",
                "Creating advantages off the dribble",
                "Reading defenders and making quick decisions",
                "Playing under pressure and game speed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">
            <div className="text-sm font-semibold text-white">Why it matters</div>
            <ul className="mt-4 space-y-2 text-sm text-[#BDBDBD]">
              {[
                "Players build confidence and self-belief",
                "Skills are taught within game context, not isolation",
                "Athletes learn when to create—and when to move the ball",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#47A614]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-xs text-[#BDBDBD] italic">
            — Requires players to already have foundational skills and on-court
            experience.
          </div>

          <div className="mt-4 border-t border-[#2A2A2A] pt-4 text-sm text-[#BDBDBD]">
            Program 5 ensures players can{" "}
            <span className="text-white font-semibold">execute</span>, not just
            understand.
          </div>
        </section>
      </div>

      {/* Why we teach both */}
      <section className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-extrabold">Why We Teach Both</h3>

        <p className="mt-3 text-[#BDBDBD] leading-relaxed">
          Basketball isn’t just skill—and it isn’t just system. At B.E. Basketball
          Academy, we develop complete players:
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Team-first",
            "Skilled but unselfish",
            "Confident yet disciplined",
            "Coachable and accountable",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-5"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-[#47A614]" />
                {item}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-[#2A2A2A] pt-4 text-[#BDBDBD]">
          <div className="text-sm">
            <span className="text-white font-semibold">Program 95</span> builds
            the mind.{" "}
            <span className="text-white font-semibold">Program 5</span> sharpens
            the tools.
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            God willing, this balanced foundation can open doors—from youth
            basketball to high school, college, and scholarship opportunities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/registration"
          className="inline-flex items-center justify-center rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F]"
        >
          Register Now
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
