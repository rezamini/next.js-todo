/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", //only output or server actions should be used. They cant be combined
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig



