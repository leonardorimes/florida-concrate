"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

function HeroInternal() {
  return (
    <section className="hero-internal" style={{ backgroundImage: "none", backgroundColor: "var(--teal)", overflow: "hidden", minHeight: "30vh", display: "flex", alignItems: "center" }}>
      <div className="hero-internal__overlay" style={{ background: "transparent" }}></div>
      <div className="hero-internal__content">
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Privacy Policy</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Last Updated: June 2026</p>
      </div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <section className="details-section details-section--white" style={{ background: "#fff", padding: "80px 24px", borderRadius: "0 0 60px 60px" }}>
      <div className="details-section__grid" style={{ maxWidth: "800px", margin: "0 auto", display: "block" }}>
        <div className="terms-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.05rem" }}>
          
          <p style={{ marginBottom: "2rem" }}>
            At Florida Concrete Coating LLC, (hereinafter referred to as "we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://flconcretecoating.com/" style={{ color: "var(--teal)" }}>https://flconcretecoating.com/</a> or use our services, including our mobile messaging communications.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
          <p style={{ marginBottom: "1rem" }}>
            We collect information that you voluntarily provide to us when you request an estimate, schedule an appointment, subscribe to our newsletter, fill out a contact form, or interact with our customer service. This information may include:
          </p>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Identity Data:</strong> First name, last name, and business name.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Contact Data:</strong> Billing address, service address, email address, and telephone number(s).</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Project Data:</strong> Information regarding your concrete coating needs, garage floor or patio dimensions, or specific service preferences.</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: "1rem" }}>
            We use the information we collect from you to:
          </p>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}>Provide, operate, and maintain our concrete coating services.</li>
            <li style={{ marginBottom: "0.5rem" }}>Process requests, generate accurate project estimates, and schedule installation appointments.</li>
            <li style={{ marginBottom: "0.5rem" }}>Communicate with you directly, including sending transactional text messages (such as project updates, appointment confirmations, reminders, invoices) and promotional text messages or emails (such as seasonal offers or customer feedback requests), subject to your explicit consent.</li>
            <li style={{ marginBottom: "0.5rem" }}>Improve our website, customer support experience, and overall service quality.</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>3. Strict Mobile Messaging Privacy &amp; Non-Sharing Compliance</h2>
          <p style={{ marginBottom: "1rem" }}>
            We value your communication privacy. The following applies specifically to text messaging (SMS) originator opt-in data and consent:
          </p>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>No Sharing with Third Parties:</strong> Mobile phone numbers, text messaging originator opt-in data, and explicit consent collected for SMS communication purposes will NEVER be shared, rented, sold, or disclosed to any third parties, affiliates, joint venture partners, or external agents for marketing, promotional, or any other commercial purposes.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Internal Use Only:</strong> All mobile communication consent is strictly used internally to facilitate services provided directly by Florida Concrete Coating.</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>4. Third-Party Links</h2>
          <p style={{ marginBottom: "2rem" }}>
            Our website may contain links to third-party platforms (such as payment processors or map widgets). We do not control these third-party websites and are not responsible for their privacy practices. We encourage you to review the privacy policy of every website you visit.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>5. Security of Your Information</h2>
          <p style={{ marginBottom: "2rem" }}>
            We implement appropriate technical and organizational security measures to maintain the safety of your personal information. However, please be aware that no transmission over the internet or mobile network can be guaranteed to be 100% secure.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>6. Your Rights and Opt-Out Options</h2>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Emails:</strong> You can unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link at the bottom of our emails.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Text Messages (SMS):</strong> You can completely revoke consent and opt out of receiving text messages at any time by replying STOP to any message received from us, or by texting STOP to +1 (321) 497-0330.</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>7. Changes to This Privacy Policy</h2>
          <p style={{ marginBottom: "2rem" }}>
            We may update this Privacy Policy from time to time to reflect regulatory shifts or operational updates. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "var(--teal)", marginTop: "2.5rem", marginBottom: "1rem" }}>8. Contact Us</h2>
          <p style={{ marginBottom: "0.5rem" }}>If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:</p>
          <ul style={{ paddingLeft: "1.5rem", listStyleType: "none", marginLeft: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Legal Business Name:</strong> Florida Concrete Coating LLC</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Physical Address:</strong> 1208 Payne Stewart Dr - Central Florida</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Email Address:</strong> <a href="mailto:sales@flconcretecoating.com" style={{ color: "var(--teal)" }}>sales@flconcretecoating.com</a></li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Phone Number:</strong> (321) 497-0330</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <HeroInternal />
      <PrivacyContent />
      <CTASection />
      <Footer />
    </main>
  );
}
