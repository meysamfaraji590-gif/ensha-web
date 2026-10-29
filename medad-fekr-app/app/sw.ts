/// <reference lib="webworker" />

import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";
import { CacheFirst, ExpirationPlugin } from "serwist";

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST:
    | Array<{
        url: string;
        revision: string | null;
      }>
    | undefined;
};

const mediaCache = {
  matcher: ({ request, url }: { request: Request; url: URL }) =>
    request.method === "GET" &&
    url.origin === self.location.origin &&
    (url.pathname.startsWith("/audio/") ||
      url.pathname.startsWith("/images/") ||
      url.pathname.startsWith("/text/")),

  handler: new CacheFirst({
    cacheName: "medad-fekr-media",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
};

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [mediaCache, ...defaultCache],
});

serwist.addEventListeners();
