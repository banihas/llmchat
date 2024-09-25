/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // This enables static export
    distDir: 'out',    // Specifies the output directory for the build
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization, so unoptimized images must be used
    },
    basePath: '/llmchat', // Add this if your app will not be at the root of the domain
    trailingSlash: true, // Adds trailing slashes to URLs for better static compatibility
  };
  
  export default nextConfig;