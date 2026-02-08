"use client";

import { useMemo, useRef, useState } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import { VIDEOS } from "@/lib/videos";
import Link from "next/link";

type City = "Mississauga" | "Scarborough" | "Ottawa";

type Program = {
  key: "tryouts" | "academy";
  badge: string;
  title: string;
  subtitle: string;
  // Tryouts uses jotformUrl; Academy uses jotformByCity
  jotformUrl?: string;
  jotformByCity?: Partial<Record<City, string>>;
  promoVideo?: string;
};

export default function RegistrationPage() {
  const programs: Program[] = useMemo(
    () => [
      {
        key: "tryouts",
        badge: "Tryouts • Registration",
        title: "2026 Summer Rep/AAU Tryouts Registration",
        subtitle: "Register to be considered for upcoming Brotherhood Elite tryouts.",
        jotformUrl: "https://form.jotform.com/260146768104254",
        promoVideo: VIDEOS.tryoutPromo2026,
      },
      {
        key: "academy",
        badge: "BE Academy • Registration",
        title: "BE Academy Registration",
        subtitle: "For players with previous experience (at least house league or Single-A level) ready to develop their skills, basketball IQ, and team play.",
        jotformByCity: {
          Mississauga: undefined,
          Scarborough: undefined,
          Ottawa: undefined,
        },
        // promoVideo: VIDEOS.tryoutPromo2026, // optional if you want a video here too
      },
    ],
    []
  );

  const [selected, setSelected] = useState<Program>(programs[0]);
  const [city, setCity] = useState<City | null>(null);

  const cityRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const isAcademy = selected.key === "academy";
  const activeFormUrl = isAcademy
    ? (city ? selected.jotformByCity?.[city] : undefined)
    : selected.jotformUrl;

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return; // mobile only
    if (!ref.current) return;

    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };


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
          Select the program below. For BE Academy, you’ll pick your city before the form loads.
        </p>
      </div>

      {/* Program selector */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        {programs.map((p) => {
          const active = selected.key === p.key;

          return (
            <button
              key={p.key}
              onClick={() => {
                setSelected(p);
                // Reset city when switching programs
                setCity(null);

                // On mobile:
                // - If tryouts: scroll straight to form
                // - If academy: scroll to city picker
                if (p.key === "tryouts") scrollTo(formRef);
                if (p.key === "academy") scrollTo(cityRef);
              }}
              className={[
                "group rounded-2xl border bg-[#121212] p-5 text-left transition",
                active
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

                <div
                  className={[
                    "mt-1 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
                    active ? "bg-[#47A614] text-black" : "border border-white/10 bg-black/30 text-white/80",
                  ].join(" ")}
                >
                  <CheckCircle2 size={14} />
                  {active ? "Selected" : "Select"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* Beginner / unsure CTA */}
      <div className="mb-10 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5 md:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold text-white">
            Beginner? Not sure what fits best?
          </div>
          <div className="mt-1 text-sm text-[#BDBDBD] max-w-md">
            If you’re new to organized basketball or unsure which program is right,
            reach out and we’ll help guide you.
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
        >
          Contact Us
        </Link>
      </div>


      {/* Selected program */}
      <div className="mb-4 max-w-3xl">
        <div className="text-xs text-[#BDBDBD]">{selected.badge}</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">{selected.title}</h2>
        <p className="mt-2 text-[#BDBDBD]">{selected.subtitle}</p>
      </div>

      {/* City picker (Academy only) */}
      {isAcademy && (
        <div ref={cityRef} className="mb-6 rounded-2xl border border-[#2A2A2A] bg-[#121212] p-4 md:p-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <MapPin size={16} />
            Select your city
          </div>
          <p className="mt-2 text-sm text-[#BDBDBD]">
            Choose the location you’re registering for. The form will load after you select a city.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {(["Mississauga", "Scarborough", "Ottawa"] as City[]).map((c) => {
              const active = city === c;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setCity(c);
                    scrollTo(formRef);
                  }}
                  className={[
                    "rounded-2xl border p-4 text-left transition",
                    active
                      ? "border-[#47A614]/70 bg-black/30 shadow-[0_0_0_1px_rgba(71,166,20,0.25)]"
                      : "border-[#2A2A2A] bg-[#0B0B0B] hover:border-white/20",
                  ].join(" ")}
                >
                  <div className="text-sm font-extrabold text-white">{c}</div>
                  <div className="mt-1 text-xs text-[#BDBDBD]">
                    Tap to load the {c} form
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Form + Promo */}
      <div
        ref={formRef}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start scroll-mt-24"
      >
        {/* Form container */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-2 md:p-4">
          <div className="relative w-full overflow-hidden rounded-xl">
            {!activeFormUrl ? (
  <div className="flex min-h-[420px] flex-col items-start justify-center gap-3 p-6 text-left">
    <div className="text-lg font-extrabold text-white">
      {isAcademy && city ? "Coming Soon" : "Almost there"}
        </div>

          <div className="text-sm text-[#BDBDBD] max-w-md">
            {isAcademy && !city && (
              <>Please select a city above to continue.</>
            )}

            {isAcademy && city && (
              <>
                Registration for <span className="text-white font-semibold">{city}</span>{" "}
                is coming soon. Please check back shortly or contact us for updates.
              </>
            )}

            {!isAcademy && (
              <>Select a program to load the registration form.</>
            )}
          </div>

          {isAcademy && city && (
            <div className="mt-2 text-xs text-[#BDBDBD] italic">
              We’re finalizing schedules and availability for this location.
            </div>
          )}
        </div>
    ) : (
      <iframe
        key={activeFormUrl}
        src={activeFormUrl}
        title={`${selected.title}${city ? ` (${city})` : ""} Form`}
        className="w-full h-[900px] border-0"
        loading="lazy"
        allow="geolocation; microphone; camera"
      />
    )}

          </div>
        </div>

        {/* Promo Video (optional if you want it for academy too) */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#2A2A2A] bg-black aspect-[9/16]">
            {selected.promoVideo ? (
              <video
                key={selected.promoVideo}
                src={selected.promoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-6 text-center">
                <div>
                  <div className="text-white font-extrabold">BE Academy</div>
                  <div className="mt-2 text-sm text-[#BDBDBD]">
                    Promo video coming soon.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
