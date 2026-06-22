"use client";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import { useState, useEffect, useRef } from "react";
import WhyUsSection from "../../components/WhyUsSection";
import ReviewsSection from "../../components/ReviewsSection";

const Chevron = () => (
  <svg viewBox="0 0 16 10" aria-hidden="true">
    <path d="m2 2 6 6 6-6" />
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.9Z" />
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="var(--teal)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const Logo = ({ compact = false }) => (
  <img
    className={`logo ${compact ? "logo--compact" : ""}`}
    src="/tmph7s4vf_3.webp"
    alt="Florida Concrete Coating"
  />
);

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/">
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          
          <div className="nav-dropdown-wrapper">
            <a href="/#services" className="nav-dropdown-trigger">
              Services <Chevron />
            </a>
            <div className="nav-dropdown">
              <a href="/garage-floor-coatings">Garage Floor Coatings</a>
              <a href="/patio-lanai-coatings">Patio &amp; Lanai Coatings</a>
              <a href="#">Driveway Coatings</a>
              <a href="/concrete-repair-sealing">Concrete Repair &amp; Sealing</a>
              <a href="/pool-deck-coatings">Pool Deck Coatings</a>
              <a href="/commercial-floor-coatings">Commercial Floor Coatings</a>
            </div>
          </div>

          <div className="nav-dropdown-wrapper">
            <a href="/#locations" className="nav-dropdown-trigger">
              Locations/Areas <Chevron />
            </a>
            <div className="nav-dropdown">
              <a href="/locations/the-villages">The Villages</a>
              <a href="/locations/champions-gate">Champions Gate</a>
              <a href="/locations/haines-city">Haines City</a>
              <a href="/locations/clermont-celebration">Clermont</a>
              <a href="/locations/clermont-celebration">Celebration</a>
              <a href="/locations/kissimmee">Kissimmee</a>
              <a href="/locations/reunion">Reunion</a>
              <a href="#">Winter Haven</a>
            </div>
          </div>

          <a href="/about">About Us</a>
        </nav>
        <div className="header-actions">
          <a className="quote-link" href="/contactus">
            Get Free Quote
          </a>
          <a className="phone-link" href="tel:13214970330">
            <Phone /> (321) 497-0330
          </a>
        </div>
      </div>
    </header>
  );
}

function CTASection() {
  return (
    <section className="cta-banner" id="quote">
      <div className="cta-banner__inner">
        <svg className="cta-bg-shape" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50,150 C50,150 150,50 250,150 C350,250 450,50 550,150" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round" />
          <path d="M-50,120 C50,120 150,20 250,120 C350,220 450,20 550,120" stroke="rgba(255,255,255,0.03)" strokeWidth="12" strokeLinecap="round" />
        </svg>
        <div className="cta-banner__content">
          <button className="results__eyebrow cta-banner__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
            Get started
          </button>
          <h3>Ready to get started?</h3>
          <p>Get a free quote / book now</p>
          <a href="/contactus" className="cta-banner__btn">Get Free Estimate</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-col--brand">
          <img width="800" height="600" loading="lazy" src="/tmph7s4vf_3.webp" alt="Florida Concrete Coating" className="footer-logo" />
        </div>
        
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contactus">Get Free Estimate</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/garage-floor-coatings">Garage Floor Coatings</a></li>
            <li><a href="/patio-lanai-coatings">Patio &amp; Lanai Coatings</a></li>
            <li><a href="#">Driveway Coatings</a></li>
            <li><a href="/concrete-repair-sealing">Concrete Repair &amp; Sealing</a></li>
            <li><a href="/pool-deck-coatings">Pool Deck Coatings</a></li>
            <li><a href="/commercial-floor-coatings">Commercial Floor Coatings</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Locations/Areas</h4>
          <ul>
            <li><a href="/locations/the-villages">The Villages</a></li>
            <li><a href="/locations/champions-gate">Champions Gate</a></li>
            <li><a href="/locations/haines-city">Haines City</a></li>
            <li><a href="/locations/clermont-celebration">Celebration</a></li>
            <li><a href="/locations/reunion">Reunion</a></li>
            <li><a href="/locations/clermont-celebration">Clermont</a></li>
            <li><a href="/locations/kissimmee">Kissimmee</a></li>
            <li><a href="#">Winter Haven</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col--contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <Mail />
              <a href="mailto:sales@flconcretecoating.com">sales@flconcretecoating.com</a>
            </li>
            <li>
               <Phone />
              <a href="tel:13214970330">(321) 497-0330</a>
            </li>
            <li className="address-line">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>1200 Payne Stewart Dr, Davenport 33896</span>
            </li>
          </ul>

          <h4 className="mt-4">Operating Hours</h4>
          <ul className="operating-hours">
            <li>Monday - Friday: 7:30am - 6pm</li>
            <li>Saturday - 7:30-1pm</li>
            <li>Sunday: Close</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function HeroInternal() {
  return (
    <section className="hero-internal" style={{ backgroundImage: "none", backgroundColor: "var(--teal)", overflow: "hidden" }}>
      <svg className="recent-works-shape" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ left: 0, right: 'auto', transform: 'scaleX(-1)' }}>
        <path d="M350,0 C300,100 400,200 300,300 C200,400 250,500 150,600" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M400,50 C350,150 450,250 350,350 C250,450 300,550 200,650" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
        <path d="M450,-50 C380,80 480,180 380,280 C280,380 330,480 230,580" stroke="rgba(255,255,255,0.04)" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="hero-internal__overlay" style={{ background: "transparent" }}></div>
      <div className="hero-internal__content">
        <h1>Concrete Coating Services<br/>in Haines City, FL</h1>
        <p>Durable, slip-resistant coatings for homes in Haines City, installed by experienced local professionals you can trust.</p>
      </div>
    </section>
  );
}

function DetailsSection() {
  return (
    <section className="details-section details-section--white" style={{ background: "#fff", padding: "80px 24px" }}>
      <div className="details-section__grid" style={{ maxWidth: "1200px", margin: "0 auto", gap: "60px", gridTemplateColumns: "1fr 1fr", alignItems: "center", display: "grid" }}>
        <div className="details-section__content">
          <button className="results__eyebrow" style={{ marginBottom: "20px" }}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" /></svg>
            Local experts
          </button>
          <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "var(--teal)" }}>Your Trusted Concrete Coating Experts in Haines City</h2>
          <p style={{ marginBottom: "20px", color: "#555", lineHeight: "1.6" }}>We proudly provide professional concrete coating services throughout Haines City and surrounding areas. Whether you're upgrading your garage, improving your pool deck, or protecting your driveway, our team delivers long-lasting results built to handle Florida's heat, humidity, and daily wear.</p>
          <p style={{ marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>Our coatings are designed to resist moisture, prevent cracks, and maintain a clean, polished look for years—giving your concrete surfaces durability and easy maintenance.</p>
          <a href="/contactus" className="btn-primary">Get Free Estimate</a>
        </div>
        <div className="details-section__image-wrap">
          <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ-1kR1-5v3YgRFI60Fuctsfo" target="_blank" rel="noopener noreferrer">
             <iframe 
                src="https://maps.google.com/maps?q=Haines+City,+FL&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </a>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="process" aria-labelledby="process-heading" style={{ borderRadius: "0 0 60px 60px" }}>
      <div className="process__inner">
        <FadeIn className="process__copy">
          <button className="eyebrow process__eyebrow">How it works</button>
          <h2 id="process-heading">
            Professional Concrete Coating, made simple.
          </h2>
          <p className="process__lead">
            We make it easy to upgrade your concrete surfaces without the stress
          </p>
        </FadeIn>

        <StaggerContainer className="process__cards">
          <StaggerItem className="process__card">
            <h3>Step 1</h3>
            <h4>Request a quote</h4>
            <p>
              Tell us about your concrete coating needs by filling out our quick
              form. Whether it's a garage, patio, or commercial space, we'll
              provide you with a fast, accurate estimate within 24 hours.
            </p>
          </StaggerItem>

          <StaggerItem className="process__card">
            <h3>Step 2</h3>
            <h4>Schedule your service</h4>
            <p>
              Pick a time that fits your schedule. Our team will confirm all the
              details and make sure everything is ready for a smooth
              installation.
            </p>
          </StaggerItem>

          <StaggerItem className="process__card">
            <h3>Step 3</h3>
            <h4>We get to work</h4>
            <p>
              Our skilled crew applies high-quality coatings with precision and
              care, transforming your concrete into a durable, clean, and
              great-looking surface that lasts.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="process__cta-wrap">
          <a className="process__cta" href="/contactus" style={{ background: "#fff", color: "var(--teal)" }}>
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}


export default function HainesCityPage() {
  return (
    <main>
      <Header />
      <HeroInternal />
      <DetailsSection />
      <StepsSection />
      <WhyUsSection className="why-us why-us--white" />
      <ReviewsSection className="reviews reviews--white" city="Haines City" />
      <CTASection />
      <Footer />
    </main>
  );
}
