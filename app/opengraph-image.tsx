import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { LAUNCHED } from "@/lib/site"

// The card iMessage, LinkedIn, X and Slack show when someone shares the link:
// the hero, redrawn at 1200 × 630 so no one has to crop a tall phone shot.
export const alt =
  "Ante: put something on the line. A habit and goal tracker for iPhone."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The image renderer can't read woff2, so assets/og keeps TTF/OTF copies of
// the site fonts, cut down to Latin (Comico to just the letters).
const asset = (file: string) => readFile(join(process.cwd(), "assets/og", file))

// The streak flame from Hugeicons, filled as the app draws it.
const FLAME =
  "M12 21.25C16.1421 21.25 19.5 17.8669 19.5 13.6935C19.5 12.8913 19.5 12.089 19.2756 11.0606C19.1017 10.2635 19.0147 9.86498 18.7651 9.64636C18.5475 9.45581 18.3598 9.38913 18.0717 9.39998C17.7412 9.41242 17.1956 9.85347 16.1046 10.7356C16.0227 10.8018 15.9817 10.8349 15.7137 10.8321C15.5671 10.8306 15.2736 10.7004 15.1735 10.5925C14.9905 10.3952 14.9807 10.2443 14.9611 9.94242C14.7677 6.95746 13.8802 5.00687 12.9275 3.77389C12.393 3.08206 12.1257 2.73615 11.6196 2.75042C11.1135 2.7647 10.7283 3.32541 9.9578 4.44682C8.04184 7.23538 4.5 8.84241 4.5 13.6935C4.5 17.8669 7.85786 21.25 12 21.25Z"

export default async function Image() {
  const [comico, interMedium, interBold, phone, mark] = await Promise.all([
    asset("Comico-Regular.otf"),
    asset("Inter-Medium.ttf"),
    asset("Inter-Bold.ttf"),
    readFile(join(process.cwd(), "public/screens/today-light.png")),
    readFile(join(process.cwd(), "public/ante-mark.svg")),
  ])

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#ffffff",
        fontFamily: "Inter",
        color: "#000000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 680,
          paddingLeft: 80,
          gap: 28,
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${mark.toString("base64")}`}
          width={105}
          height={34}
          alt=""
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Comico",
            fontSize: 80,
            lineHeight: 1.05,
          }}
        >
          <span>Put something</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* The hero's violet marker, letters gone white beneath it. */}
            <span
              style={{
                display: "flex",
                background: "#4121ff",
                color: "#ffffff",
                padding: "2px 14px 0",
                marginLeft: -14,
                borderRadius: "14px 22px 12px 26px",
                transform: "rotate(-1.5deg)",
              }}
            >
              on the line
            </span>
            <span>.</span>
          </div>
        </div>

        <span
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            fontWeight: 500,
            color: "#60646c",
            maxWidth: 520,
          }}
        >
          The habit and goal tracker that holds you to what you said you&apos;d
          do.
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            alignSelf: "flex-start",
            background: "#f0f0f3",
            borderRadius: 999,
            padding: "8px 20px",
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#60646c",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#4121ff",
            }}
          />
          {LAUNCHED ? "On the App Store" : "Coming soon to iPhone"}
        </div>
      </div>

      <div style={{ display: "flex", position: "relative", flex: 1 }}>
        {/* A flat grey slab behind the phone, as in the hero. */}
        <div
          style={{
            position: "absolute",
            left: 20,
            right: 60,
            top: 96,
            bottom: -60,
            borderRadius: 48,
            background: "#f0f0f3",
          }}
        />

        <img
          src={`data:image/png;base64,${phone.toString("base64")}`}
          width={380}
          height={777}
          alt=""
          style={{ position: "absolute", left: 45, top: 44 }}
        />

        <span
          style={{
            position: "absolute",
            left: -18,
            top: 350,
            display: "flex",
            alignItems: "center",
            height: 56,
            padding: "0 24px",
            borderRadius: 999,
            background: "#ec2f3c",
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 700,
            transform: "rotate(-4deg)",
            boxShadow: "0 12px 30px -8px rgba(236, 47, 60, 0.6)",
          }}
        >
          $50 on it
        </span>

        <span
          style={{
            position: "absolute",
            right: 22,
            top: 218,
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 56,
            padding: "0 24px 0 18px",
            borderRadius: 999,
            background: "#000000",
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 700,
            transform: "rotate(3deg)",
            boxShadow: "0 12px 30px -8px rgba(0, 0, 0, 0.35)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path d={FLAME} fill="#ec2f3c" />
          </svg>
          41 day streak
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Comico", data: comico, weight: 400, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  )
}
