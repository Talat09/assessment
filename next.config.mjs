/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    missingSuspenseWithCSR: false,
  },
};

export default nextConfig;
