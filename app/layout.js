import "./globals.css";

export const metadata = {
  title: "Florida Concrete Coating",
  description: "Premium epoxy garage floor coatings in Davenport, Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
