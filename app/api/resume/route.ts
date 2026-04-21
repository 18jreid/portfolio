import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "";
  const ua = req.headers.get("user-agent") || "";
  const referrer = req.headers.get("referer") || "";

  // Fire-and-forget — don't block the redirect
  fetch(new URL("/api/perf", req.url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
      "user-agent": ua,
    },
    body: JSON.stringify({ eventType: "resume_download", referrer, pageTitle: "Resume Download" }),
  }).catch(() => {});

  return NextResponse.redirect(new URL("/resume.pdf", req.url));
}
