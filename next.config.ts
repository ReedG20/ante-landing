import type { NextConfig } from "next"

import { APP_STORE_URL } from "./lib/site"

const nextConfig: NextConfig = {
  // Share cards in the app link to /get?from=stake|streak|kept.
  redirects() {
    return [{ source: "/get", destination: APP_STORE_URL, permanent: false }]
  },
}

export default nextConfig
