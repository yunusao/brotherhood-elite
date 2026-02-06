/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tryouts",
        destination: "/registration",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
