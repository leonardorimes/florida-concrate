"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

function HeroInternal() {
  return (
    <section className="hero-internal" style={{ backgroundImage: "none", backgroundColor: "var(--teal)", overflow: "hidden", minHeight: "30vh", display: "flex", alignItems: "center" }}>
      <div className="hero-internal__overlay" style={{ background: "transparent" }}></div>
      <div className="hero-internal__content">
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Terms of Service</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Last Updated: June 2026</p>
      </div>
    </section>
  );
}

function TermsContent() {
  return (
    <section className="details-section details-section--white" style={{ background: "#fff", padding: "80px 24px", borderRadius: "0 0 60px 60px" }}>
      <div className="details-section__grid" style={{ maxWidth: "800px", margin: "0 auto", display: "block" }}>
        <div className="terms-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.05rem" }}>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Welcome to Florida Concrete Coating LLC. These Terms of Service ("Terms") govern your access to and use of our website, services, and any mobile messaging programs operated by Florida Concrete Coating LLC, hereinafter referred to as "we," "us," or "our").
          </p>

          <p style={{ marginBottom: "2rem" }}>
            By accessing our website or opting into our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>1. Description of Services</h2>
          <p style={{ marginBottom: "2rem" }}>
            Florida Concrete Coating LLC provides residential and commercial concrete coating installation services, including garage floors, patios, and driveways.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>2. Mobile Messaging Program (SMS Terms)</h2>
          <p style={{ marginBottom: "1rem" }}>
            By providing your phone number and opting into our communication channels via our website forms, booking calendars, or widgets, you consent to receive text messages from us.
          </p>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Message Expectations &amp; Use Cases:</strong> Users who opt-in can expect to receive transaction-related messages (such as appointment confirmations, appointment reminders, scheduling updates, estimate details, pricing, invoices, and payment confirmations) and/or promotional messages (such as special offers, seasonal discounts, customer loyalty rewards, and re-engagement promotions), depending on the specific consent checkboxes selected upon submission.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Opt-Out / STOP Instructions:</strong> You can cancel the SMS service at any time. Just text STOP to +1 352-276-1680. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Re-Subscribe / START Instructions:</strong> If you want to join again, just sign up as you did the first time, or text START to our number, and we will start sending SMS messages to you again based on your prior consent.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Help Instructions:</strong> If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly by contacting us at <a href="mailto:sales@flconcretecoating.com" style={{ color: "var(--teal)" }}>sales@flconcretecoating.com</a> or calling +1 352-276-1680.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Rates and Frequency:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your interaction with our services.</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>3. Privacy Policy Integration</h2>
          <p style={{ marginBottom: "1rem" }}>
            Your privacy is important to us. If you have any questions regarding how we collect and use your data, please read our Privacy Policy: <a href="https://flconcretecoating.com/privacypolicy" style={{ color: "var(--teal)" }}>https://flconcretecoating.com/privacypolicy</a>.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            As a strict policy, text messaging originator opt-in data and consent will not be shared with any third parties or affiliates for marketing or promotional purposes.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>4. User Conduct</h2>
          <p style={{ marginBottom: "2rem" }}>
            You agree not to use our website or communication systems for any unlawful purpose, to transmit spam, fraudulent messages, phishing attempts, or any material that violates applicable laws.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>5. Limitation of Liability</h2>
          <p style={{ marginBottom: "2rem" }}>
            To the maximum extent permitted by applicable law, Florida Concrete Coating LLC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to mobile message delivery failures or delays caused by network carriers.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>6. Modifications to Terms</h2>
          <p style={{ marginBottom: "2rem" }}>
            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services following any changes constitutes your acceptance of the revised Terms.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>7. Contact Information</h2>
          <p style={{ marginBottom: "0.5rem" }}>If you have any questions about these Terms of Service, please contact us at:</p>
          <ul style={{ paddingLeft: "1.5rem", listStyleType: "none", marginLeft: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Legal Business Name:</strong> Florida Concrete Coating</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Physical Address:</strong> 1208 Payne Stewart Dr - Davenport - Florida</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Email Address:</strong> <a href="mailto:sales@flconcretecoating.com" style={{ color: "var(--teal)" }}>sales@flconcretecoating.com</a></li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Phone Number:</strong> (352) 276-1680</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default function TermsOfServicePage() {
  return (
    <main>
      <Header />
      <HeroInternal />
      <TermsContent />
      <CTASection />
      <Footer />
    </main>
  );
}
