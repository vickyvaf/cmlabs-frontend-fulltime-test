/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "themealdb.com",
  //       port: "",
  //       pathname: "/images/media/meals",
  //     },
  //   ],
  // },
  images: {
    domains: ["www.themealdb.com"],
  },
};

module.exports = nextConfig;
