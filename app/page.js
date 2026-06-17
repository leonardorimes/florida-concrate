"use client";
import { useState, useEffect, useRef } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";
import WhyUsSection from "./components/WhyUsSection";
import ReviewsSection from "./components/ReviewsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

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

const Wrench = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L4 17l3 3 8.3-8.3a4 4 0 0 0 5-5L18 9l-2.4-2.4 2.3-2.3a4 4 0 0 0-3.2 2Z" />
  </svg>
);

const Logo = ({ compact = false }) => (
  <img
    className={`logo ${compact ? "logo--compact" : ""}`}
    src="/tmph7s4vf_3.webp"
    alt="Florida Concrete Coating"
  />
);


function QuoteForm() {
  return (
    <form className="quote-card" id="quote">
      <Logo compact />
      <h2>GET A FREE QUOTE</h2>

      <div className="field-row">
        <label>
          <span>Full Name *</span>
          <input type="text" placeholder="John Smith" />
        </label>
        <label>
          <span>Phone *</span>
          <input type="tel" placeholder="(808) 555-1234" />
        </label>
      </div>

      <label>
        <span>Email *</span>
        <div className="input-with-icon">
          <Mail />
          <input type="email" placeholder="Email" />
        </div>
      </label>

      <label>
        <span>Short message about your needs *</span>
        <textarea placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**" />
      </label>

      <button type="submit">SUBMIT</button>
    </form>
  );
}

function Expertise() {
  return (
    <section className="expertise" id="about">
      <FadeIn className="expertise__inner">
        <div className="expertise__copy">
          <div>
            <div className="expertise__eyebrow">
              <Wrench /> Our expertise
            </div>
            <h2>
              Your Floors Deserve Better Than
              <br />
              Plain Concrete
            </h2>
          </div>
          <p>
            Owner João Luiz and his team bring expert skill and a strong focus
            on
            <br className="desktop-break" />
            quality workmanship, delivering durable, great-looking concrete
            coatings
            <br className="desktop-break" />
            for homes and businesses in Davenport, FL.
          </p>
        </div>

        <div className="expertise__gallery">
          <img
            src="/owner-joao.png"
            alt="Owner João Luiz in front of a coated garage"
          />
          <img
            src="/epoxy-detail.png"
            alt="Detailed gray flake epoxy floor coating"
          />
        </div>
      </FadeIn>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="process" aria-labelledby="process-heading">
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
          <a className="process__cta" href="#quote">
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const items = [
    {
      img: "/FL CONCRETE/Imagem-do-WhatsApp-de-2025-09-29-as-13.28.47_64c15703.jpg",
      title: "Garage Floor Coatings",
      text: "Durable, slip-resistant coatings that protect your garage and give it a clean, finished look.",
      link: "/garage-floor-coatings"
    },
    {
      img: "/FL CONCRETE/after.jpg",
      title: "Patio & Lanai Coatings",
      text: "Weather-resistant coatings designed to enhance comfort, safety, and style in your outdoor spaces.",
      link: "/patio-lanai-coatings"
    },
    {
      img: "/secao4-card3.png",
      title: "Driveway Coatings",
      text: "Long-lasting coatings that improve curb appeal while protecting against cracks, stains, and wear.",
    },
    {
      img: "/secao4-card4.png",
      title: "Pool Deck Coatings",
      text: "Coatings that reduce heat, improve traction, and resist cracking, fading, and moisture.",
      link: "/pool-deck-coatings"
    },
    {
      img: "/secao4-card5.png",
      title: "Concrete Repair & Sealing",
      text: "Restore damaged concrete and seal it to prevent future cracks and moisture intrusion.",
      link: "/concrete-repair-sealing"
    },
    {
      img: "/secao4-card6.png",
      title: "Commercial Floor Coatings",
      text: "Heavy-duty flooring solutions built for high-traffic environments with durability and easy maintenance.",
      link: "/commercial-floor-coatings"
    },
  ];

  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__inner">
        <FadeIn className="services__head">
          <button className="eyebrow process__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Services
          </button>
          <h2 id="services-heading">
            Complete Epoxy & Concrete Coating Solutions
          </h2>
          <p className="services__lead">
            We provide high-quality epoxy and concrete coatings for garages,
            patios, driveways, and more, built for durability, safety, and
            long-lasting performance.
          </p>
        </FadeIn>

        <StaggerContainer className="services__grid">
          {items.map((it, idx) => (
            <StaggerItem as="a" href={it.link || "#"} className="service-card" key={idx} style={{display: 'block', textDecoration: 'none'}}>
              <div className="service-card__media">
                <img src={it.img} alt={it.title} />
              </div>
              <div className="service-card__meta">
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="services__cta-wrap">
          <a className="services__cta" href="#quote">
            Get Free Estimate
          </a>
        </FadeIn>
      </div>
    </section>
  );
}





const faqData = [
  {
    question: "Be honest... how long before this starts peeling?",
    answer: "If it peels, something was done wrong, usually prep. A properly ground and installed coating should last years, not months. I tell people straight: the product matters, but prep is everything. Skip that, and it won't matter what you use."
  },
  {
    question: "Can you do this even if my garage is full of stuff?",
    answer: "Yeah, but it needs to be empty at some point. Either you clear it out, or we can stage it in sections depending on the job. Most people underestimate how much space we actually need to do it right."
  },
  {
    question: "I've seen DIY kits... why shouldn't I just do that?",
    answer: "You can. A lot of people do, then call later to fix it. The biggest difference isn't the coating, it's the equipment and prep. Grinding, moisture checks, proper layering... that's where DIY usually falls short."
  },
  {
    question: "My concrete looks \"fine\"... do I really need all that prep work?",
    answer: "This is where people get burned. Concrete can look fine and still fail underneath, dusty, porous, or holding moisture. Coating over that is like painting over dirt. It might look good for a bit, but it won't last."
  },
  {
    question: "What's the one mistake people regret after getting this done?",
    answer: "Going cheap the first time. I've redone a lot of floors that were \"a great deal.\" By the time they pay twice, it wasn't a deal anymore. This is one of those jobs where doing it right once actually saves money."
  },
  {
    question: "Is this going to make my place look too \"industrial\"?",
    answer: "Only if you want it to. There are clean, modern looks, textured finishes, even more decorative styles. Most people are surprised how much it upgrades the space; it doesn't have to feel like a warehouse."
  }
];

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={index}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <svg viewBox="0 0 24 24" className="faq-icon">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="faq" id="faq">
      {/* Background shapes */}
      <svg className="faq-bg-shape" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100 C 150 50, 250 200, 350 150 S 450 300, 350 400 S 150 500, 50 450" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
        <path d="M-50 200 C 50 150, 150 300, 250 250 S 350 400, 250 500 S 50 600, -50 550" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
        <path d="M100 50 C 200 0, 300 150, 400 100 S 500 250, 400 350 S 200 450, 100 400" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
      </svg>
      
      <div className="faq__inner">
        <div className="faq__head">
          <button className="eyebrow process__eyebrow faq__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14, fill: "currentColor" }}>
              <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
            </svg>
            FAQ
          </button>
          <h2>Questions and Answers</h2>
          <p>Everything you need to know about our coating services and how we work.</p>
        </div>
        
        <div className="faq__content">
          <div className="faq__left">
            <FAQAccordion items={faqData} />
          </div>
          <div className="faq__right">
            <img src="/owner-joao.png" alt="Owner standing in garage" className="faq__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="results" id="results">
      <div className="results__inner">
        <FadeIn className="results__head">
          <button className="results__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
            Before & after
          </button>
          <h2>Real Results You Can See</h2>
          <p>
            Take a look at how our professional service transforms homes and delivers noticeable improvements.
          </p>
        </FadeIn>
        
        <StaggerContainer className="results__grid">
          <StaggerItem className="result-column result-column--before">
            <h3>Before</h3>
            <img src="/FL CONCRETE/before.jpg" alt="Before coating" className="result-image" />
          </StaggerItem>
          <StaggerItem className="result-column result-column--after">
            <h3>After</h3>
            <img src="/FL CONCRETE/after.jpg" alt="After coating" className="result-image" />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function InstagramSection() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // document.body.removeChild(script);
    }
  }, []);

  return (
    <section className="instagram-section" id="instagram">
      <h2 className="instagram-title">Follow us on Instagram</h2>
      <div className="instagram-grid-container" style={{ width: 'min(960px, 100%)', margin: '0 auto', minHeight: '300px' }}>
        {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
        <div className="elfsight-app-c449fe5d-303d-4e46-a0e6-d0a80bb2dad7" data-elfsight-app-lazy="true"></div>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <FadeIn className="hero__content">
          <div className="hero-copy">
            <div className="eyebrow">
              <b>★</b> Davenport Epoxy Floor Expert
            </div>
            <h1>
              Call Today and Get
              <br />
              <strong>$250 OFF</strong> Your Epoxy
              <br />
              Garage Floor
            </h1>
            <p className="intro">
              Trusted by Davenport homeowners for premium epoxy garage
              <br className="desktop-break" />
              floor coatings that last a lifetime at prices that won&apos;t
              break the
              <br className="desktop-break" />
              bank
            </p>
            <ul className="benefits">
              <li>Quick &amp; easy quotes</li>
              <li>Same day install</li>
              <li>We&apos;re license and insured</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
        </FadeIn>
        <button className="chat-button" aria-label="Open chat">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 11.6a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.1-.8L4 21l1.5-4A8.3 8.3 0 1 1 20.5 11.6Z" />
            <circle cx="9" cy="12" r=".8" />
            <circle cx="12" cy="12" r=".8" />
            <circle cx="15" cy="12" r=".8" />
          </svg>
        </button>
      </section>
      <Expertise />
      <StepsSection />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection city="[city]" />
      <FAQSection />
      <ResultsSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
