import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // IMPORTANT (Resend uses node, not edge)

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => {
    const m: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return m[c] ?? c;
  });
}

export async function POST(req: Request) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Missing server env vars" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const topic = (body.topic ?? "Other").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // basic anti-abuse limits
    if (name.length > 120 || email.length > 160 || topic.length > 80 || message.length > 4000) {
      return NextResponse.json(
        { ok: false, error: "Payload too large" },
        { status: 413 }
      );
    }

    const resend = new Resend(resendKey);

    const subject = `[Brotherhood Elite] Contact: ${topic} — ${name}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
        <p><strong>Topic:</strong> ${esc(topic)}</p>
        <hr/>
        <p style="white-space: pre-wrap"><strong>Message:</strong><br/>${esc(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email, // so you can hit "Reply" directly to the person
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ ok: true });
}
