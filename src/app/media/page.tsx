"use client";

import { useMemo, useState } from "react";
import { X, Play } from "lucide-react";

type Clip = {
  id: string;
  src: string;      // /videos/...
  title: string;
  tag?: string;
};

export default function MediaPage() {
  const clips: Clip[] = useMemo(
    () => [
      { id: "c1", src: "/videos/Game Recap BHE.mp4", title: "Ottawa U17", tag: "Highlights" },
      { id: "c2", src: "/videos/Reel 2 (BHE).mp4", title: "Mississauga U19", tag: "Highlights" },
      { id: "c3", src: "/videos/Game Recap (Sunday).mp4", title: "Mississauga U17", tag: "Highlights" },
      { id: "c4", src: "/videos/Game Recap.mp4", title: "U17 Derby", tag: "Game Recap" },
      { id: "c5", src: "/videos/Practice footage 1.mp4", title: "Culture check", tag: "Brotherhood" },
      { id: "c6", src: "/videos/clip6.mp4", title: "Game winner", tag: "Clutch" },
      { id: "c7", src: "/videos/clip7.mp4", title: "Footwork + finish", tag: "Skills" },
      { id: "c8", src: "/videos/clip8.mp4", title: "Fast break", tag: "Speed" },
      { id: "c9", src: "/videos/Ismael Mix Updated.mp4", title: "Ismael", tag: "Player Clips" },
      { id: "c10", src: "/videos/Noah Mix.mp4", title: "Noah", tag: "Player Clips" },
      { id: "c11", src: "/videos/Kobe Mix.mp4", title: "Kobe", tag: "Player Clips" },
      { id: "c12", src: "/videos/Khaleel Mix.mp4", title: "Khaleel Thompson", tag: "Player Clips" },
    ],
    []
  );

  const [open, setOpen] = useState<Clip | null>(null);

  return (
    <div className="container-page py-12">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Media
          </h1>
          <p className="mt-2 text-[#BDBDBD]">
            Highlights, training clips, and moments from Brotherhood Elite.
          </p>
        </div>

        <div className="text-sm text-[#BDBDBD]">
          Tip: click any clip to view it bigger.
        </div>
      </div>

      {/* Grid (TikTok explore-style) */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clips.map((clip) => (
          <button
            key={clip.id}
            onClick={() => setOpen(clip)}
            className="group relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#121212] text-left"
            title={clip.title}
          >
            {/* Video preview (muted, no autoplay to keep grid light) */}
            <div className="relative aspect-[9/16] bg-black">
              <video
                className="h-full w-full object-cover"
                src={clip.src}
                muted
                playsInline
                preload="metadata"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Play icon */}
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/90 backdrop-blur">
                <Play size={14} />
                <span>Play</span>
              </div>

              {/* Bottom text */}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="rounded-xl border border-white/10 bg-black/35 p-3 backdrop-blur">
                  {clip.tag ? (
                    <div className="text-[11px] text-[#BDBDBD]">{clip.tag}</div>
                  ) : null}
                  <div className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                    {clip.title}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal viewer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div className="container-page h-full py-8 md:py-10">
            <div
              className="mx-auto grid h-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video */}
              <div className="relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={open.src}
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              {/* Details */}
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#BDBDBD]">{open.tag ?? "Clip"}</div>
                    <div className="mt-1 text-2xl font-extrabold">{open.title}</div>
                    <p className="mt-3 text-[#BDBDBD]">
                      Add a short description here later (game, tournament, training focus, etc.).
                    </p>
                  </div>

                  <button
                    onClick={() => setOpen(null)}
                    className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-2 text-white hover:border-white/50 transition"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mt-6 border-t border-[#2A2A2A] pt-4 text-sm text-[#BDBDBD]">
                  Want to see more? Follow <span className="text-white font-semibold">@brotherhood.elite</span>.
                </div>

                <a
                  href="https://www.instagram.com/brotherhood.elite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F]"
                >
                  View Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
