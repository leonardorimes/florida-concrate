/**
 * Layout applied ONLY to content pages (homepage, services, locations, about).
 * Injects the LeadConnector chat widget script into the server-rendered HTML.
 * Pages with phone/SMS forms (contactus, booking) do NOT use this layout.
 */
export default function WidgetLayout({ children }) {
  return (
    <>
      {/* LeadConnector chat widget — exact script from LC dashboard */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a39497ecab3f1c1716ac3e8"
        data-source="WEB_USER"
      />
      {children}
    </>
  );
}
