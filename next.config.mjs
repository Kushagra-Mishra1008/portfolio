/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Native browser View Transitions for route changes — no animation
    // library, runs on the compositor, and degrades to an instant swap.
    viewTransition: true,
  },
};

export default nextConfig;
