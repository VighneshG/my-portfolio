/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

export default {
  output: "export", // Enable static export
  basePath: "/your-repo-name", // Add the name of your repository
  images: {
    unoptimized: true, // Disable image optimization for Git ̰Hub Pages
  },
};
