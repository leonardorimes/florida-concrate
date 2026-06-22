"use client";

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

const Logo = ({ compact = false }) => (
  <img
    className={`logo ${compact ? "logo--compact" : ""}`}
    src="/tmph7s4vf_3.webp"
    alt="Florida Concrete Coating"
  />
);

export default function Header() {
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
          <a href="/booking">Schedule Meeting</a>
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
