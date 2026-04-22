import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isStaticExport = process.env.STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" } : {}),
  basePath: isProd && isStaticExport ? "/kp-site" : "",
  assetPrefix: isProd && isStaticExport ? "/kp-site" : "",
  images: { unoptimized: true },
};

export default nextConfig;
