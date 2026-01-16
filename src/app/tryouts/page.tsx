"use client";

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

      {/* Footer note */}
      <div className="mt-6 max-w-2xl text-sm text-[#BDBDBD]">
        Having trouble with the form or have questions? Visit our{" "}
        <a href="/contact" className="text-[#47A614] hover:underline">
          Contact page
        </a>{" "}
        and we’ll help you out.
      </div>
    </div>
  );
}
