"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Pages where the chat widget should NOT appear
const EXCLUDED_PATHS = ["/contactus", "/privacypolicy", "/termsofservice"];

const WIDGET_SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a39497ecab3f1c1716ac3e8";

export default function ChatWidget() {
  const pathname = usePathname();
  const isExcluded = EXCLUDED_PATHS.some((p) => pathname === p || pathname?.startsWith(p + "/"));

  useEffect(() => {
    if (isExcluded) {
      // Remove the widget script if it was previously injected
      const existingScript = document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`);
      if (existingScript) existingScript.remove();

      // Remove any injected chat widget DOM elements (LeadConnector injects these)
      const chatElements = document.querySelectorAll(
        "[data-widget-id], #lc-chat-bubble, #lc-chat-widget, .lc-chat-widget, [id^='lc-'], [class^='lc-chat']"
      );
      chatElements.forEach((el) => el.remove());

      // Also remove any iframes from LeadConnector
      document.querySelectorAll("iframe[src*='leadconnectorhq']").forEach((el) => el.remove());

      return;
    }

    // Only inject if not already injected
    if (!document.querySelector(`script[src="${WIDGET_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = WIDGET_SCRIPT_SRC;
      script.setAttribute("data-resources-url", WIDGET_RESOURCES_URL);
      script.setAttribute("data-widget-id", WIDGET_ID);
      script.setAttribute("data-source", "WEB_USER");
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isExcluded, pathname]);

  return null;
}
