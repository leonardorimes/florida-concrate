"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
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
        <div style={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h1 style={{ fontSize: "2.5rem", color: "var(--text)", marginBottom: "16px" }}>
                Get Your Free Estimate
              </h1>
              <p style={{ fontSize: "1.125rem", color: "var(--text-light, #666)" }}>
                Fill out the form below to tell us about your concrete coating needs. Our team will get back to you with a fast, accurate estimate.
              </p>
            </div>
            <QuoteForm />
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
