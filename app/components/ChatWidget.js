"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Pages where the chat widget should NOT appear
const EXCLUDED_PATHS = ["/contactus", "/privacypolicy", "/termsofservice"];

export default function ChatWidget() {
  const pathname = usePathname();

  if (EXCLUDED_PATHS.includes(pathname)) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a39497ecab3f1c1716ac3e8"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
