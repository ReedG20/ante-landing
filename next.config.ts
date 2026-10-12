import type { NextConfig } from "next"

import { APP_STORE_URL, LAUNCHED } from "./lib/site"

const nextConfig: NextConfig = {
  // Share cards in the app link to /get?from=stake|streak|kept. Before
  // launch there's no listing to send them to, so they land on the waitlist.
  redirects() {
    return [
      {
        source: "/get",
        destination: LAUNCHED ? APP_STORE_URL : "/#waitlist",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
