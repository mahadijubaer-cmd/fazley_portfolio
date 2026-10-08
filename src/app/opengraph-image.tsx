import { ImageResponse } from "next/og";

export const alt = "Engr. Md. Fazley Alam — Energy Sector Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        alignItems: "center",
        background: "#0B1F33",
        color: "#F8F7F3",
        padding: "76px 88px",
        fontFamily: "serif",
      }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 390, height: 630, background: "#102B43" }} />
      <div style={{ position: "absolute", top: 74, right: 74, width: 260, height: 480, border: "1px solid #B69B66", opacity: 0.6 }} />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
        <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 19, letterSpacing: 4, textTransform: "uppercase", color: "#B69B66", marginBottom: 34 }}>
          Energy sector leadership & consulting
        </div>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 1.04, marginBottom: 28 }}>Engr. Md.<br />Fazley Alam</div>
        <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 25, color: "#D8DEE5" }}>Energy Sector Consultant · Dhaka, Bangladesh</div>
      </div>
      <div style={{ position: "absolute", right: 114, top: 110, display: "flex", fontFamily: "sans-serif", fontSize: 76, color: "#B69B66", fontWeight: 700 }}>FA</div>
    </div>,
    size,
  );
}
