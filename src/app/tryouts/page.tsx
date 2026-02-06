"use client";

import { useMemo, useState, useRef } from "react";
import { VIDEOS } from "@/lib/videos";
import { CheckCircle2, Clock } from "lucide-react";

type Program = {
  key: "tryouts" | "academy";
  badge: string;
  title: string;
  subtitle: string;
  jotformUrl?: string;
  promoVideo?: string;
  comingSoon?: boolean;
};

export default function TryoutsPage() {
  const programs: Program[] = useMemo(
    () => [
      {
        key: "tryouts",
        badge: "AAU Tryouts • Registration",
        title: "AAU Tryouts Registration",
        subtitle: "Register to be considered for upcoming Brotherhood Elite tryouts.",
        jotformUrl: "https://form.jotform.com/260146768104254",
        promoVideo: VIDEOS.tryoutPromo2026,
      },
      {
        key: "academy",
        badge: "BE Academy • Registration",
        title: "BE Academy Registration",
        subtitle: "Full academy program details and registration coming soon.",
        comingSoon: true,
      },
    ],
    []
  );

  const [selected, setSelected] = useState<Program>(
    programs.find((p) => !p.comingSoon) ?? programs[0]
  );

  const formRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container-page py-12 md:py-16">
      {/* Header */}
      <div className="mb-8 max-w-2xl">
        <div className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]">
          Brotherhood Elite • Registration
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
          Choose a <span className="text-[#47A614]">Program</span> to Register
        </h1>

        <p className="mt-3 text-[#BDBDBD]">
          Select a program below. Additional programs will open as registration becomes available.
        </p>
      </div>

      {/* Program selector */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        {programs.map((p) => {
          const active = selected.key === p.key;
          const disabled = p.comingSoon;

          return (
            <button
              key={p.key}
              disabled={disabled}
              onClick={() => {
                if (disabled) return;

                setSelected(p);

                // Mobile-only smooth scroll
                if (typeof window !== "undefined" && window.innerWidth < 1024) {
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }
              }}
              className={[
                "group rounded-2xl border bg-[#121212] p-5 text-left transition",
                disabled
                  ? "cursor-not-allowed border-[#2A2A2A] opacity-60"
                  : active
                  ? "border-[#47A614]/70 shadow-[0_0_0_1px_rgba(71,166,20,0.25)]"
                  : "border-[#2A2A2A] hover:border-white/20",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-[#BDBDBD]">{p.badge}</div>
                  <div className="mt-2 text-xl font-extrabold">{p.title}</div>
                  <div className="mt-2 text-sm text-[#BDBDBD]">{p.subtitle}</div>
                </div>

                {/* Right-side badge */}
                <div
                  className={[
                    "mt-1 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
                    disabled
                      ? "border border-white/10 bg-black/30 text-white/70"
                      : active
                      ? "bg-[#47A614] text-black"
                      : "border border-white/10 bg-black/30 text-white/80",
                  ].join(" ")}
                >
                  {disabled ? (
                    <>
                      <Clock size={14} />
                      Coming Soon
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={14} />
                      {active ? "Selected" : "Select"}
                    </>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected program details */}
      {!selected.comingSoon && (
        <>
          <div className="mb-4 max-w-3xl">
            <div className="text-xs text-[#BDBDBD]">{selected.badge}</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              {selected.title}
            </h2>
            <p className="mt-2 text-[#BDBDBD]">{selected.subtitle}</p>
          </div>

          {/* Form + Promo */}
          <div
            ref={formRef}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start scroll-mt-24"
          >
            {/* Form */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-2 md:p-4">
              <div className="relative w-full overflow-hidden rounded-xl">
                <iframe
                  key={selected.jotformUrl}
                  src={selected.jotformUrl}
                  title={`${selected.title} Form`}
                  className="w-full h-[900px] border-0"
                  loading="lazy"
                  allow="geolocation; microphone; camera"
                />
              </div>
            </div>

            {/* Promo Video */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#2A2A2A] bg-black aspect-[9/16]">
                <video
                  key={selected.promoVideo ?? "promo"}
                  src={selected.promoVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
