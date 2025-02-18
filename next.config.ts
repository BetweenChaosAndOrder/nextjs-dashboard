import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Allows you to adopt Partial Prerendering (PPR) for specific routes

    The great thing about Partial Prerendering is that you 
    don't need to change your code to use it.
    
    As long as you're using Suspense to wrap the dynamic 
    parts of your route, Next.js will know which parts of 
    your route are static and which are dynamic. 
  */
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
