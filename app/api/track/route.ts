import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function parseDevice(ua: string): string {
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet|ipad/i.test(ua)) return "Tablet";
  return "Desktop";
}

function parseBrowser(ua: string): string {
  if (/edg\//i.test(ua)) return "Edge";
  if (/opr\//i.test(ua)) return "Opera";
  if (/chrome/i.test(ua)) return "Chrome";
  if (/firefox/i.test(ua)) return "Firefox";
  if (/safari/i.test(ua)) return "Safari";
  return "Unknown";
}

function parseOS(ua: string): string {
  if (/windows nt 10/i.test(ua)) return "Windows 10/11";
  if (/windows/i.test(ua)) return "Windows";
  if (/mac os x/i.test(ua)) return "macOS";
  if (/iphone/i.test(ua)) return "iOS (iPhone)";
  if (/ipad/i.test(ua)) return "iOS (iPad)";
  if (/android/i.test(ua)) return "Android";
  if (/linux/i.test(ua)) return "Linux";
  return "Unknown";
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;background:#0d1117;color:#8b949e;font-size:12px;white-space:nowrap;border-bottom:1px solid #1e2d3d;">${label}</td>
      <td style="padding:8px 12px;background:#0d1117;color:#e6edf3;font-size:12px;border-bottom:1px solid #1e2d3d;word-break:break-all;">${value}</td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      linkText,
      linkHref,
      section,
      viewport,
      screenRes,
      language,
      referrer,
      pageTitle,
      sessionStart,
    } = body;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "Unknown";
    const ua = req.headers.get("user-agent") || "Unknown";

    // IP geolocation
    let geo = { city: "Unknown", region: "Unknown", country: "Unknown", isp: "Unknown" };
    try {
      const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,isp,status`);
      const geoData = await geoRes.json();
      if (geoData.status === "success") {
        geo = { city: geoData.city, region: geoData.regionName, country: geoData.country, isp: geoData.isp };
      }
    } catch {}

    const now = new Date();
    const timestamp = now.toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "long",
    });

    const timeOnPage = sessionStart
      ? `${Math.round((Date.now() - sessionStart) / 1000)}s`
      : "Unknown";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#080c14;font-family:'Courier New',monospace;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="border-left:3px solid #00e5ff;padding-left:16px;margin-bottom:24px;">
      <p style="margin:0;color:#00e5ff;font-size:11px;letter-spacing:3px;text-transform:uppercase;">justinreid.dev</p>
      <h1 style="margin:4px 0 0;color:#e6edf3;font-size:20px;">Link Click Detected</h1>
      <p style="margin:4px 0 0;color:#8b949e;font-size:12px;">${timestamp}</p>
    </div>

    <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
      <thead>
        <tr><td colspan="2" style="padding:8px 12px;background:#00e5ff10;color:#00e5ff;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Click Event</td></tr>
      </thead>
      <tbody>
        ${row("Link Text", linkText || "(no text)")}
        ${row("Link URL", linkHref || "(unknown)")}
        ${row("Page Section", section || "Unknown")}
        ${row("Page Title", pageTitle || "Unknown")}
        ${row("Time on Page", timeOnPage)}
      </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
      <thead>
        <tr><td colspan="2" style="padding:8px 12px;background:#39d35310;color:#39d353;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Visitor Location</td></tr>
      </thead>
      <tbody>
        ${row("IP Address", ip)}
        ${row("City", geo.city)}
        ${row("Region", geo.region)}
        ${row("Country", geo.country)}
        ${row("ISP / Org", geo.isp)}
      </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
      <thead>
        <tr><td colspan="2" style="padding:8px 12px;background:#f0a50010;color:#f0a500;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Device & Browser</td></tr>
      </thead>
      <tbody>
        ${row("Device Type", parseDevice(ua))}
        ${row("Browser", parseBrowser(ua))}
        ${row("OS", parseOS(ua))}
        ${row("Viewport", viewport || "Unknown")}
        ${row("Screen Res", screenRes || "Unknown")}
        ${row("Language", language || "Unknown")}
        ${row("User Agent", ua)}
      </tbody>
    </table>

    <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;">
      <thead>
        <tr><td colspan="2" style="padding:8px 12px;background:#8b949e10;color:#8b949e;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Session</td></tr>
      </thead>
      <tbody>
        ${row("Referrer", referrer || "Direct / None")}
        ${row("UTC Time", now.toISOString())}
      </tbody>
    </table>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Justin's Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `Portfolio Click: ${linkText || linkHref} — ${geo.city}, ${geo.country}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
