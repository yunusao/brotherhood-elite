"use client";

import { VIDEOS } from "@/lib/videos";

export default function TryoutsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      {/* Header */}
      <div className="mb-8 max-w-2xl">
        <div className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#121212] px-4 py-2 text-xs text-[#BDBDBD]">
          Brotherhood Elite • Registration
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
          Tryouts & <span className="text-[#47A614]">Registration</span>
        </h1>
        
        <p className="mt-3 text-[#BDBDBD]">
          Complete the registration form below to be considered for upcoming
          Brotherhood Elite tryouts. A member of our staff will follow up with
          next steps.
        </p>
      </div>

      {/* Video + Registration */}
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">

  {/* Form container */}
  <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-2 md:p-4">
    <div className="relative w-full overflow-hidden rounded-xl">
      <iframe
        src="https://form.jotform.com/260146768104254"
        title="Brotherhood Elite Tryout Registration"
        className="w-full h-[900px] border-0"
        loading="lazy"
        allow="geolocation; microphone; camera"
      />
    </div>
  </div>
  {/* Tryout Promo Video */}
  <div className="flex justify-center lg:justify-start">
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#2A2A2A] bg-black aspect-[9/16]">
      <video
        src={VIDEOS.tryoutPromo2026}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</div>
    </div>
  );
}
