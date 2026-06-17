"use client";

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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-col--brand">
          <img src="/tmph7s4vf_3.webp" alt="Florida Concrete Coating" className="footer-logo" />
        </div>
        
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#quote">Get Free Estimate</a></li>
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
              <a href="tel:8632018314">(863) 201-8314</a>
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
