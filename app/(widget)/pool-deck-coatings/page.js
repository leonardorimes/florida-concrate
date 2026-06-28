"use client";
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
              <span>1200 Payne Stewart Dr, Central Florida 33896</span>
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
    <section className="hero-internal" style={{ backgroundImage: "url('/FL%20CONCRETE/Imagem-do-WhatsApp-de-2025-09-29-as-10.45.49_f4924563.jpg')" }}>
      <div className="hero-internal__overlay"></div>
      <div className="hero-internal__content">
        <h1>Pool Deck Coatings in<br/>Central Florida</h1>
        <p>Upgrade your pool area with durable, slip-resistant coatings designed for comfort, safety, and long-term performance in Florida's climate.</p>
      </div>
    </section>
  );
}

function DetailsSection() {
  return (
    <section className="details-section">
      <div className="details-section__head">
        <button className="results__eyebrow">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" /></svg>
          Our expertise
        </button>
        <h2>Safer, Cooler, and Better-Looking Pool Decks</h2>
        <p>Your pool deck takes a beating from the sun, pool chemicals, and constant moisture. Over time, bare concrete or paint can crack, fade, and become slippery when wet.</p>
        <p>At Florida Concrete Coating, our pool deck coatings are designed to improve safety, reduce surface heat, and elevate the overall look of your outdoor space. Our systems are slip-resistant, UV-stable, and built to withstand the harsh Florida climate.</p>
      </div>

      <div className="details-section__grid">
        <div className="details-section__image-wrap">
          <img width="800" height="600" loading="lazy" src="/FL%20CONCRETE/tmpdmp1f_ig.jpg" alt="Beautiful coated pool deck" />
        </div>
        <div className="details-section__features">
          <ul>
            <li><CheckIcon /> Slip-resistant texture for added safety around the pool</li>
            <li><CheckIcon /> UV-stable finish that won't yellow or fade in the sun</li>
            <li><CheckIcon /> Resistant to pool chemicals, salt water, and mold</li>
            <li><CheckIcon /> Protects against stains, cracking, and surface damage</li>
            <li><CheckIcon /> Easy to clean and maintain year-round</li>
          </ul>
          <a href="/contactus" className="btn-primary">Get a free estimate</a>
        </div>
      </div>
    </section>
  );
}

function RecentWorks() {
  return (
    <section className="recent-works">
      <svg className="recent-works-shape" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M350,0 C300,100 400,200 300,300 C200,400 250,500 150,600" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeLinecap="round" />
        <path d="M400,50 C350,150 450,250 350,350 C250,450 300,550 200,650" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
        <path d="M450,-50 C380,80 480,180 380,280 C280,380 330,480 230,580" stroke="rgba(255,255,255,0.04)" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="recent-works__inner">
        <div className="recent-works__head">
          <button className="results__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" /></svg>
            Works
          </button>
          <h2>Our Recent Concrete Coating Works</h2>
          <p>Take a look at some of our recent concrete coating projects. We take pride in transforming ordinary spaces into durable and beautiful surfaces.</p>
        </div>
        <div className="recent-works__grid">
          <img width="800" height="600" loading="lazy" src="/Our%20Recent_1.jpg" alt="Recent work 1" />
          <img width="800" height="600" loading="lazy" src="/Our%20Recent_2.jpg" alt="Recent work 2" />
          <img width="800" height="600" loading="lazy" src="/Our%20Recent_3.jpg" alt="Recent work 3" />
        </div>
        <div className="recent-works__action">
          <a href="/contactus" className="btn-secondary">Get Free Estimate</a>
        </div>
      </div>
    </section>
  );
}

export default function PoolDeckCoatingsPage() {
  return (
    <main>
      <Header />
      <HeroInternal />
      <DetailsSection />
      <RecentWorks />
      <WhyUsSection className="why-us why-us--white" />
      <ReviewsSection className="reviews reviews--white" city="Central Florida" />
      <CTASection />
      <Footer />
    </main>
  );
}
