// @ts-check
import { serwist } from "@serwist/next/config";

const config = await serwist({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
});

export default config;
