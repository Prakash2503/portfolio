import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${siteConfig.name} - AI Engineer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #0c4a6e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 16,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, color: "#c4b5fd", marginBottom: 32 }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8", maxWidth: 800, lineHeight: 1.4 }}>
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <span>Chennai, India</span>
          <span>·</span>
          <span>github.com/Prakash2503</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
