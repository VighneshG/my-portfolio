/** @type {import('next').NextConfig} */
// Uncomment below for local development and comment for GitHub deployment (npm run deploy)
// const nextConfig = {};

// export default nextConfig;


// Comment below for local development and uncomment for deploying this static app to GitHub pages
export default {
  output: "export", // Enable static export
  basePath: "/my-portfolio", // Add the name of your repository
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  trailingSlash: true,
};
