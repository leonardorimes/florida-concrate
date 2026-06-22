export default function ContactUs() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get Your Free Estimate | Florida Concrete Coating</title>
        <meta name="description" content="Request a free estimate for garage floor, patio, or pool deck coatings in Davenport, FL. Fast response within 24 hours." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Inter', Arial, sans-serif; background: #f5f5f5; color: #111; }

          /* NAV */
          .nav { background: #025f83; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
          .nav__logo { color: #fff; font-size: 1.05rem; font-weight: 700; text-decoration: none; }
          .nav__links { display: flex; gap: 24px; list-style: none; }
          .nav__links a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 0.88rem; font-weight: 500; }
          .nav__links a:hover { color: #fff; }
          .nav__cta { background: #ff7028; color: #fff; padding: 8px 18px; border-radius: 6px; font-weight: 600; font-size: 0.85rem; text-decoration: none; white-space: nowrap; }
          .nav__cta:hover { background: #e0601f; }
          @media (max-width: 640px) { .nav__links { display: none; } }

          /* HERO */
          .hero { background: linear-gradient(135deg, #025f83 0%, #014f6e 100%); padding: 56px 24px 44px; text-align: center; color: #fff; }
          .hero h1 { font-size: clamp(1.7rem, 4vw, 2.6rem); font-weight: 700; margin-bottom: 12px; }
          .hero p { font-size: 1rem; opacity: 0.88; max-width: 480px; margin: 0 auto; }

          /* TRUST */
          .trust { display: flex; justify-content: center; gap: 28px; padding: 16px 24px; background: #fff; border-bottom: 1px solid #e8e8e8; flex-wrap: wrap; }
          .trust span { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #444; font-weight: 500; }
          .trust .check { color: #025f83; }

          /* FORM SECTION */
          .form-section { max-width: 700px; margin: 0 auto; padding: 40px 20px 60px; }
          .form-card { background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); overflow: hidden; }
          .form-card iframe { display: block; width: 125%; min-height: 600px; border: none; border-radius: 10px; transform: scale(0.8); transform-origin: top left; }
          .form-wrapper { overflow: hidden; }

          /* FOOTER */
          .footer { background: #111; color: rgba(255,255,255,0.65); text-align: center; padding: 28px 24px; font-size: 0.8rem; }
          .footer a { color: rgba(255,255,255,0.55); text-decoration: none; margin: 0 8px; }
          .footer a:hover { color: #fff; }
          .footer p { margin-bottom: 6px; }
        `}} />
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </head>
      <body>
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

        <section className="hero">
          <h1>Get Your Free Estimate</h1>
          <p>Fill out the form below. Our team will get back to you with a fast, accurate estimate within 24 hours.</p>
        </section>

        <div className="trust">
          <span><span className="check">✔</span> Free on-site estimate</span>
          <span><span className="check">✔</span> Same-day installs available</span>
          <span><span className="check">✔</span> Licensed &amp; insured</span>
          <span><span className="check">✔</span> 5-year warranty</span>
        </div>

        <main className="form-section">
          <div className="form-card">
            <div className="form-wrapper">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/GyeMDbEFUVXObVeuHNyp"
                id="inline-GyeMDbEFUVXObVeuHNyp"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="999"
                data-layout-iframe-id="inline-GyeMDbEFUVXObVeuHNyp"
                data-form-id="GyeMDbEFUVXObVeuHNyp"
                title="Get Your Free Estimate Form"
              />
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>Florida Concrete Coating LLC &mdash; 1208 Payne Stewart Dr, Davenport, FL</p>
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
