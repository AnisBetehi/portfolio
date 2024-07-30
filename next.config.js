/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
              },
        ]
    },
    productionBrowserSourceMaps: true
}

module.exports = nextConfig
