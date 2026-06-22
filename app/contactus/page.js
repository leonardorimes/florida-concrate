"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingCalendar from "../components/BookingCalendar";
import { FadeIn } from "../components/Animations";

export default function ContactUs() {
  return (
    <main>
      <Header />
      <section
        className="contactus-page"
        style={{
          padding: "120px 20px 80px",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg, #fcfcfc)"
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h1 style={{ fontSize: "2.5rem", color: "var(--text)", marginBottom: "16px" }}>
                Schedule Your Free Estimate
              </h1>
              <p style={{ fontSize: "1.125rem", color: "var(--text-light, #666)" }}>
                Pick a time that works for you. Our team will confirm all the details and get back to you quickly.
              </p>
            </div>
            <BookingCalendar />
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
