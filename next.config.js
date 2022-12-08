/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "scontent.flex1-1.fna.fbcdn.net",
      "unsplash.com",
      "images.unsplash.com",
      "fillmurray.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
