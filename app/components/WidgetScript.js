import Script from "next/script";

/**
 * Static LeadConnector chat widget script.
 * Import this component ONLY in pages that do NOT collect phone numbers via form.
 * Do NOT add to: /contactus, /booking, /privacypolicy, /termsofservice
 */
export default function WidgetScript() {
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
