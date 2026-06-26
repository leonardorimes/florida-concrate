import "./globals.css";
import WidgetScript from "./components/WidgetScript";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body suppressHydrationWarning>
        {children}
        <WidgetScript />
      </body>
    </html>
  );
}
