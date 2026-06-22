export default function ContactUs() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Schedule Your Free Estimate | Florida Concrete Coating</title>
        <meta name="description" content="Schedule a free on-site estimate with Florida Concrete Coating. Book a time that works for you in Davenport, FL." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Inter', Arial, sans-serif; background: #f5f5f5; color: #111; }

          /* NAV */
          .nav { background: #025f83; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; }
          .nav__logo { color: #fff; font-size: 1.1rem; font-weight: 700; text-decoration: none; letter-spacing: -0.3px; }
          .nav__links { display: flex; gap: 24px; list-style: none; }
          .nav__links a { color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.9rem; font-weight: 500; }
          .nav__links a:hover { color: #fff; }
          .nav__cta { background: #ff7028; color: #fff; padding: 8px 18px; border-radius: 6px; font-weight: 600; font-size: 0.85rem; text-decoration: none; }
          .nav__cta:hover { background: #e0601f; }
          @media (max-width: 640px) { .nav__links { display: none; } }

          /* HERO */
          .hero { background: linear-gradient(135deg, #025f83 0%, #014f6e 100%); padding: 60px 24px 50px; text-align: center; color: #fff; }
          .hero h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; margin-bottom: 12px; }
          .hero p { font-size: 1.05rem; opacity: 0.88; max-width: 500px; margin: 0 auto; }

          /* TRUST BADGES */
          .trust { display: flex; justify-content: center; gap: 32px; padding: 20px 24px; background: #fff; border-bottom: 1px solid #e8e8e8; flex-wrap: wrap; }
          .trust__item { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; color: #444; font-weight: 500; }
          .trust__check { color: #025f83; font-size: 1rem; }

          /* CALENDAR SECTION */
          .calendar-section { max-width: 860px; margin: 0 auto; padding: 40px 20px 60px; }
          .calendar-card { background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); overflow: hidden; }
          .calendar-card iframe { display: block; width: 100%; border: none; min-height: 750px; }

          /* FOOTER */
          .footer { background: #111; color: rgba(255,255,255,0.7); text-align: center; padding: 28px 24px; font-size: 0.82rem; }
          .footer a { color: rgba(255,255,255,0.6); text-decoration: none; margin: 0 8px; }
          .footer a:hover { color: #fff; }
          .footer__top { margin-bottom: 8px; }
        `}} />
      </head>
      <body>
        {/* NAVIGATION */}
        <header>
          <nav className="nav">
            <a href="/" className="nav__logo">Florida Concrete Coating</a>
            <ul className="nav__links">
              <li><a href="/#services">Services</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
            <a href="tel:13214970330" className="nav__cta">☎ (321) 497-0330</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>Schedule Your Free Estimate</h1>
          <p>Pick a time that works for you. Our team confirms all details within 24 hours.</p>
        </section>

        {/* TRUST BADGES */}
        <div className="trust">
          <span className="trust__item"><span className="trust__check">✔</span> Free on-site estimate</span>
          <span className="trust__item"><span className="trust__check">✔</span> Same-day installs available</span>
          <span className="trust__item"><span className="trust__check">✔</span> Licensed &amp; insured</span>
          <span className="trust__item"><span className="trust__check">✔</span> 5-year workmanship warranty</span>
        </div>

        {/* BOOKING CALENDAR */}
        <main className="calendar-section">
          <div className="calendar-card">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/imvE2dXeqosMsfYymEac"
              scrolling="no"
              id="imvE2dXeqosMsfYymEac_contact"
              title="Schedule Free Estimate"
            />
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer__top">
            Florida Concrete Coating LLC &mdash; 1208 Payne Stewart Dr, Davenport, FL
          </div>
          <div>
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsofservice">Terms of Service</a>
            <a href="tel:13214970330">(321) 497-0330</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
