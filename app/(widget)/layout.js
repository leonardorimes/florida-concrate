/**
 * Layout applied ONLY to content pages (homepage, services, locations, about).
 * Injects the LeadConnector chat widget script into the server-rendered HTML.
 * Pages with phone/SMS forms (contactus, booking) do NOT use this layout.
 */
export default function WidgetLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
