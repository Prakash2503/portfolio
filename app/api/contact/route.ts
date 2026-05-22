import { NextResponse } from "next/server";
import { siteConfig } from "@/data/portfolio";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const sent = await sendViaWeb3Forms(accessKey, name, email, message);
      if (sent) {
        return NextResponse.json({
          success: true,
          message: "Message sent! I'll get back to you soon.",
        });
      }
    }

    const sentFormSubmit = await sendViaFormSubmit(name, email, message);
    if (sentFormSubmit) {
      return NextResponse.json({
        success: true,
        message: "Message sent to my inbox! I'll reply soon.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: `Could not send right now. Please email me at ${siteConfig.email}`,
        mailto: buildMailto(name, email, message),
      },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: `Something went wrong. Please email ${siteConfig.email} directly.`,
      },
      { status: 500 }
    );
  }
}

async function sendViaWeb3Forms(
  accessKey: string,
  name: string,
  email: string,
  message: string
) {
  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio contact from ${name}`,
      from_name: `${siteConfig.name} Portfolio`,
      replyto: email,
    }),
  });

  const data = await res.json();
  return data.success === true;
}

async function sendViaFormSubmit(name: string, email: string, message: string) {
  const res = await fetch(FORMSUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio contact from ${name}`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) return false;

  try {
    const data = await res.json();
    return data.success === true || data.success === "true";
  } catch {
    return res.ok;
  }
}

function buildMailto(name: string, email: string, message: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
}
