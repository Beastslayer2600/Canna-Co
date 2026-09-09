import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.strap}, ${site.suburb}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The link-preview card. This is the first thing anyone sees when the site is
 * shared on WhatsApp, so it carries the poster lockup rather than a screenshot.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #14251a 0%, #050a06 70%)",
          color: "#ede4d2",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Poster frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid rgba(192,136,56,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 38,
            left: 38,
            right: 38,
            bottom: 38,
            border: "1px solid rgba(192,136,56,0.14)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 14,
            color: "#c08838",
            textTransform: "uppercase",
          }}
        >
          {site.suburb}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: 6,
          }}
        >
          <span>CANNA</span>
          <span style={{ color: "#c08838" }}>&amp;</span>
          <span>CO</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 26,
            letterSpacing: 10,
            color: "#b9b1a1",
            textTransform: "uppercase",
          }}
        >
          {site.strap}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 46,
          }}
        >
          <div style={{ display: "flex", width: 90, height: 1, background: "rgba(192,136,56,0.5)" }} />
          <div style={{ display: "flex", width: 8, height: 8, background: "#c08838", transform: "rotate(45deg)" }} />
          <div style={{ display: "flex", width: 90, height: 1, background: "rgba(192,136,56,0.5)" }} />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "#ede4d2",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Store &middot; Members&rsquo; Club &middot; Lounge
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 22,
            color: "#857f72",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Open seven days from 08:00 &middot; {site.minimumAge}+
        </div>
      </div>
    ),
    { ...size },
  );
}
