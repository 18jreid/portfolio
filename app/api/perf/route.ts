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

function parseDevice(ua: string) {
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet|ipad/i.test(ua)) return "Tablet";
  return "Desktop";
}

function parseBrowser(ua: string) {
  if (/edg\//i.test(ua)) return "Edge";
  if (/opr\//i.test(ua)) return "Opera";
  if (/chrome/i.test(ua)) return "Chrome";
  if (/firefox/i.test(ua)) return "Firefox";
  if (/safari/i.test(ua)) return "Safari";
  return "Unknown";
}

function parseOS(ua: string) {
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
  return `<tr>
    <td style="padding:8px 12px;background:#0d1117;color:#8b949e;font-size:12px;white-space:nowrap;border-bottom:1px solid #1e2d3d;">${label}</td>
    <td style="padding:8px 12px;background:#0d1117;color:#e6edf3;font-size:12px;border-bottom:1px solid #1e2d3d;word-break:break-all;">${value}</td>
  </tr>`;
}

function locationTable(geo: { city: string; region: string; country: string; isp: string }, ip: string) {
  return `<table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
    <thead><tr><td colspan="2" style="padding:8px 12px;background:#39d35310;color:#39d353;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Visitor Location</td></tr></thead>
    <tbody>
      ${row("IP Address", ip)}
      ${row("City", geo.city)}
      ${row("Region", geo.region)}
      ${row("Country", geo.country)}
      ${row("ISP / Org", geo.isp)}
    </tbody>
  </table>`;
}

function deviceTable(ua: string, viewport: string, screenRes: string, language: string) {
  return `<table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
    <thead><tr><td colspan="2" style="padding:8px 12px;background:#f0a50010;color:#f0a500;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Device & Browser</td></tr></thead>
    <tbody>
      ${row("Device Type", parseDevice(ua))}
      ${row("Browser", parseBrowser(ua))}
      ${row("OS", parseOS(ua))}
      ${row("Viewport", viewport || "Unknown")}
      ${row("Screen Res", screenRes || "Unknown")}
      ${row("Language", language || "Unknown")}
      ${row("User Agent", ua)}
    </tbody>
  </table>`;
}

function sessionTable(referrer: string, timeOnPage: string, now: Date) {
  return `<table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;">
    <thead><tr><td colspan="2" style="padding:8px 12px;background:#8b949e10;color:#8b949e;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Session</td></tr></thead>
    <tbody>
      ${row("Referrer", referrer || "Direct / None")}
      ${row("Time on Page", timeOnPage)}
      ${row("UTC Time", now.toISOString())}
    </tbody>
  </table>`;
}

function shell(timestamp: string, title: string, accent: string, body: string) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#080c14;font-family:'Courier New',monospace;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="border-left:3px solid ${accent};padding-left:16px;margin-bottom:24px;">
      <p style="margin:0;color:${accent};font-size:11px;letter-spacing:3px;text-transform:uppercase;">justinreid.dev</p>
      <h1 style="margin:4px 0 0;color:#e6edf3;font-size:20px;">${title}</h1>
      <p style="margin:4px 0 0;color:#8b949e;font-size:12px;">${timestamp}</p>
    </div>
    ${body}
  </div>
</body></html>`;
}

async function getGeo(ip: string) {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,isp,status`);
    const d = await res.json();
    if (d.status === "success") return { city: d.city, region: d.regionName, country: d.country, isp: d.isp };
  } catch {}
  return { city: "Unknown", region: "Unknown", country: "Unknown", isp: "Unknown" };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventType, linkText, linkHref, section, viewport, screenRes, language, referrer, pageTitle, sessionStart, depth } = body;

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "Unknown";
    const ua = req.headers.get("user-agent") || "Unknown";
    const geo = await getGeo(ip);

    const now = new Date();
    const timestamp = now.toLocaleString("en-US", { timeZone: "America/Denver", dateStyle: "full", timeStyle: "long" });
    const timeOnPage = sessionStart ? `${Math.round((Date.now() - sessionStart) / 1000)}s` : "Unknown";

    let subject: string;
    let html: string;

    if (eventType === "page_view") {
      subject = `Portfolio Visit — ${geo.city}, ${geo.country} · ${parseDevice(ua)}`;
      html = shell(timestamp, "Page Visit", "#39d353", `
        <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
          <thead><tr><td colspan="2" style="padding:8px 12px;background:#39d35310;color:#39d353;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Visit Event</td></tr></thead>
          <tbody>${row("Page", pageTitle || "Unknown")}${row("Referrer", referrer || "Direct / None")}</tbody>
        </table>
        ${locationTable(geo, ip)}
        ${deviceTable(ua, viewport, screenRes, language)}
        ${sessionTable(referrer, timeOnPage, now)}
      `);

    } else if (eventType === "scroll_depth") {
      subject = `Portfolio: Scrolled ${depth}% — ${geo.city}, ${geo.country}`;
      html = shell(timestamp, `Scroll Depth: ${depth}%`, "#f0a500", `
        <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
          <thead><tr><td colspan="2" style="padding:8px 12px;background:#f0a50010;color:#f0a500;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Session Summary</td></tr></thead>
          <tbody>
            ${row("Max Scroll Depth", `${depth}%`)}
            ${row("Time on Page", timeOnPage)}
            ${row("Page", pageTitle || "Unknown")}
          </tbody>
        </table>
        ${locationTable(geo, ip)}
        ${deviceTable(ua, viewport, screenRes, language)}
        ${sessionTable(referrer, timeOnPage, now)}
      `);

    } else if (eventType === "resume_download") {
      subject = `Portfolio: Resume Downloaded — ${geo.city}, ${geo.country}`;
      html = shell(timestamp, "Resume Downloaded", "#39d353", `
        <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
          <thead><tr><td colspan="2" style="padding:8px 12px;background:#39d35310;color:#39d353;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Download Event</td></tr></thead>
          <tbody>${row("Event", "Resume PDF Opened")}</tbody>
        </table>
        ${locationTable(geo, ip)}
        ${deviceTable(ua, viewport, screenRes, language)}
        ${sessionTable(referrer, timeOnPage, now)}
      `);

    } else {
      // click event
      subject = `Portfolio Click: ${linkText || linkHref} — ${geo.city}, ${geo.country}`;
      html = shell(timestamp, "Link Click", "#00e5ff", `
        <table style="width:100%;border-collapse:collapse;border:1px solid #1e2d3d;margin-bottom:20px;">
          <thead><tr><td colspan="2" style="padding:8px 12px;background:#00e5ff10;color:#00e5ff;font-size:11px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1e2d3d;">Click Event</td></tr></thead>
          <tbody>
            ${row("Link Text", linkText || "(no text)")}
            ${row("Link URL", linkHref || "(unknown)")}
            ${row("Page Section", section || "Unknown")}
            ${row("Page Title", pageTitle || "Unknown")}
            ${row("Time on Page", timeOnPage)}
          </tbody>
        </table>
        ${locationTable(geo, ip)}
        ${deviceTable(ua, viewport, screenRes, language)}
        ${sessionTable(referrer, timeOnPage, now)}
      `);
    }

    await transporter.sendMail({
      from: `"Justin's Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("perf error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
