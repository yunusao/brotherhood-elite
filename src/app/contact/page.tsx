"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("sending");

  const form = e.currentTarget;
  const fd = new FormData(form);

  const payload = {
    name: String(fd.get("name") ?? ""),
    email: String(fd.get("email") ?? ""),
    phone: String(fd.get("phone") ?? ""),
    topic: String(fd.get("topic") ?? ""),
    message: String(fd.get("message") ?? ""),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // optional: show error state
    setStatus("idle");
    alert("Failed to send. Please try again.");
    return;
  }

  setStatus("sent");
  form.reset();
  setTimeout(() => setStatus("idle"), 2000);
}


  return (
    <div className="relative overflow-hidden">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #63C51F 0%, rgba(71,166,20,0.35) 35%, rgba(11,11,11,0) 70%)",
        }}
      />

      <div className="container-page relative py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Contact <span className="text-[#47A614]">Brotherhood Elite</span>
          </h1>
          <p className="mt-2 text-[#BDBDBD]">
            Questions about tryouts, training, teams, or partnerships? Send us a message and we’ll get back to you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Info column */}
          <div className="space-y-4">
            <InfoCard
              icon={<Phone size={18} />}
              title="Phone"
              value="+1 (647) 545-0664"
              note="Call / text (coach line)"
            />
            <InfoCard
              icon={<Mail size={18} />}
              title="Email"
              value="info@brotherhoodelite.ca"
              note="General inquiries"
            />
            <InfoCard
              icon={<MapPin size={18} />}
              title="Locations"
              value="Scarborough • Mississauga • Ottawa"
              note="Gyms announced per season"
            />

            <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5">
              <div className="text-sm font-semibold text-white">Quick Links</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="/tryouts"
                  className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-2 text-sm text-[#BDBDBD] hover:text-white hover:border-white/60 transition"
                >
                  Tryouts
                </a>
                <a
                  href="/programs"
                  className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-2 text-sm text-[#BDBDBD] hover:text-white hover:border-white/60 transition"
                >
                  Programs
                </a>
                <a
                  href="/media"
                  className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-2 text-sm text-[#BDBDBD] hover:text-white hover:border-white/60 transition"
                >
                  Media
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold">Send a message</h2>
                  <p className="mt-1 text-sm text-[#BDBDBD]">
                    We usually respond within 24–48 hours.
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#0B0B0B] px-3 py-2 text-xs text-[#BDBDBD]">
                  <span className="h-2 w-2 rounded-full bg-[#47A614]" />
                  Available
                </div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Phone (optional)" name="phone" placeholder="(###) ###-####" />
                  <div className="space-y-1">
                    <div className="text-sm font-semibold">Topic</div>
                    <select
                      name="topic"
                      className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#47A614]"
                      defaultValue="Tryouts"
                    >
                      <option>Tryouts</option>
                      <option>Training</option>
                      <option>Teams</option>
                      <option>Partnerships</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-semibold">Message</div>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you’re looking for…"
                    className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#47A614]"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <div className="text-sm text-[#BDBDBD]">
                    By submitting, you agree we can contact you back.
                  </div>

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#47A614] bg-[#47A614] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#63C51F] hover:border-[#63C51F] disabled:opacity-60"
                  >
                    <Send size={16} />
                    {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
                  </button>
                </div>
              </form>

              <div className="mt-6 border-t border-[#2A2A2A] pt-5 text-sm text-[#BDBDBD]">
                Prefer email? Write us at{" "}
                <span className="text-white font-semibold">info@brotherhoodelite.ca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5 transition hover:border-white/30">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] text-[#47A614]">
          {icon}
        </div>
        <div>
          <div className="text-sm text-[#BDBDBD]">{title}</div>
          <div className="font-extrabold tracking-tight">{value}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-[#BDBDBD]">{note}</div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="space-y-1">
      <div className="text-sm font-semibold">{label}</div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-[#47A614]"
      />
    </label>
  );
}
