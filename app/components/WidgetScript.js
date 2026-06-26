"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function WidgetScript() {
  const pathname = usePathname();

  // Hide the chat widget on the contact form page to avoid A2P compliance issues with multiple forms
  if (pathname === "/contactus" || pathname === "/booking") {
    return null;
  }

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
