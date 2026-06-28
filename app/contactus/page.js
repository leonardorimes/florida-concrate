import Script from "next/script";

export default function ContactUs() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="/">
            <img className="logo" src="/tmph7s4vf_3.webp" alt="Florida Concrete Coating" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            
            <div className="nav-dropdown-wrapper">
              <a href="/#services" className="nav-dropdown-trigger">
                Services 
                <svg viewBox="0 0 16 10" aria-hidden="true" style={{ width: 14, fill: "none", stroke: "currentColor", strokeWidth: 2.5 }}>
                  <path d="m2 2 6 6 6-6" />
                </svg>
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
                Locations/Areas 
                <svg viewBox="0 0 16 10" aria-hidden="true" style={{ width: 14, fill: "none", stroke: "currentColor", strokeWidth: 2.5 }}>
                  <path d="m2 2 6 6 6-6" />
                </svg>
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
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 18, height: 18, fill: "currentColor" }}>
                <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.9Z" />
              </svg>
              (321) 497-0330
            </a>
          </div>
        </div>
      </header>

      <section className="hero-internal" style={{ backgroundImage: "none", backgroundColor: "var(--teal)", overflow: "hidden" }}>
        <svg className="recent-works-shape" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ left: 0, right: 'auto', transform: 'scaleX(-1)' }}>
          <path d="M350,0 C300,100 400,200 300,300 C200,400 250,500 150,600" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeLinecap="round" />
          <path d="M400,50 C350,150 450,250 350,350 C250,450 300,550 200,650" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
          <path d="M450,-50 C380,80 480,180 380,280 C280,380 330,480 230,580" stroke="rgba(255,255,255,0.04)" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="hero-internal__overlay" style={{ background: "transparent" }}></div>
        <div className="hero-internal__content">
          <h1>Get Your Free<br/>Estimate</h1>
          <p>Provide your details below. Our team will get back to you with a fast, accurate estimate within 24 hours.</p>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center", gap: "28px", padding: "16px 24px", background: "#fff", borderBottom: "1px solid #e8e8e8", flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#444", fontWeight: "500" }}><span style={{ color: "#025f83" }}>✔</span> Free on-site estimate</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#444", fontWeight: "500" }}><span style={{ color: "#025f83" }}>✔</span> Same-day installs available</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#444", fontWeight: "500" }}><span style={{ color: "#025f83" }}>✔</span> Licensed &amp; insured</span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#444", fontWeight: "500" }}><span style={{ color: "#025f83" }}>✔</span> 5-year warranty</span>
      </div>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", overflow: "hidden", padding: "40px", textAlign: "center" }}>
          <h2 style={{ color: "var(--teal)", marginBottom: "20px", fontSize: "2rem" }}>Florida Concrete Coating</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "1.1rem", color: "#333", alignItems: "center" }}>
            <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 24, height: 24, fill: "none", stroke: "var(--teal)", strokeWidth: 2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              1200 Payne Stewart Dr, Central Florida 33896
            </p>
            
            <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 24, height: 24, fill: "var(--teal)" }}>
                <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.9Z" />
              </svg>
              <a href="tel:13214970330" style={{ color: "var(--teal)", textDecoration: "none", fontWeight: "bold" }}>(321) 497-0330</a>
            </p>

            <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 24, height: 24, fill: "none", stroke: "var(--teal)", strokeWidth: 2 }}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a href="mailto:sales@flconcretecoating.com" style={{ color: "var(--teal)", textDecoration: "none", fontWeight: "bold" }}>sales@flconcretecoating.com</a>
            </p>

            <div style={{ marginTop: "20px", padding: "20px", background: "#f8f9fa", borderRadius: "8px", width: "100%", maxWidth: "400px" }}>
              <h3 style={{ margin: "0 0 15px 0", color: "#333", fontSize: "1.2rem" }}>Operating Hours</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "1rem" }}>
                <li style={{ display: "flex", justifyContent: "space-between" }}><span>Monday - Friday:</span> <span>7:30am - 6pm</span></li>
                <li style={{ display: "flex", justifyContent: "space-between" }}><span>Saturday:</span> <span>7:30am - 1pm</span></li>
                <li style={{ display: "flex", justifyContent: "space-between" }}><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              <li><a href="/privacypolicy">Privacy Policy</a></li>
              <li><a href="/termsofservice">Terms of Service</a></li>
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
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <a href="mailto:sales@flconcretecoating.com">sales@flconcretecoating.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 16, height: 16, fill: "currentColor" }}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.9Z" />
                </svg>
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
    </main>
  );
}
