import { ImageResponse } from "next/og";

// Home-screen icon for iPhone/iPad. Same "V" as icon.svg, on a full square
// because iOS rounds the corners itself.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 64 64">
          <path fill="#fafafa" d="M15 16h8l9 24 9-24h8L36 50h-8z" />
        </svg>
      </div>
    ),
    size,
  );
}
