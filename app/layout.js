import "./globals.css";
import { headers } from "next/headers";

export const metadata = {
  metadataBase: new URL('https://florida-concrete.vercel.app'),
  title: {
    template: '%s | Florida Concrete Coating',
    default: 'Florida Concrete Coating | Premium Epoxy Garage Floors in Davenport',
  },
  description: "Transform your space with Florida Concrete Coating. We provide premium, durable epoxy garage floor coatings and concrete repair services in Davenport, FL.",
  alternates: {
    canonical: '/',
  },
};

// Pages that collect phone numbers — widget must be absent for A2P compliance
const FORM_PAGES = ["/contactus", "/booking", "/privacypolicy", "/termsofservice"];

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const showWidget = !FORM_PAGES.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {showWidget && (
          /* LeadConnector chat widget — static <script> tag so compliance scanners detect it */
          <script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6a39497ecab3f1c1716ac3e8"
            data-source="WEB_USER"
            async
          />
        )}
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
