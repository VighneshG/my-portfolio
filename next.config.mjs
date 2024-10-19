/** @type {import('next').NextConfig} */

// Check if the app is running in GitHub Actions environment
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Get the repository name from the environment variable
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export",  // Required for static export (used by GitHub Pages)
  assetPrefix: assetPrefix,  // Prefix for static assets
  basePath: basePath,  // Base path for routing
  images: {
    unoptimized: true,  // Disable image optimization for GitHub Pages
  },
};

export default nextConfig;
