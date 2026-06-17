"use client";

export default function CTASection() {
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
          <h2>Ready to get started?</h2>
          <p>Get a free quote / book now</p>
          <a href="#quote" className="cta-banner__btn">Get Free Estimate</a>
        </div>
      </div>
    </section>
  );
}
