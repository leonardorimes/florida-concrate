"use client";
import { useState, useEffect, useRef } from "react";

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

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#services">
            Services <Chevron />
          </a>
          <a href="#locations">
            Locations/Areas <Chevron />
          </a>
          <a href="#about">About Us</a>
        </nav>
        <div className="header-actions">
          <a className="quote-link" href="#quote">
            Get Free Quote
          </a>
          <a className="phone-link" href="tel:8632018314">
            <Phone /> (863) 201-8314
          </a>
        </div>
      </div>
    </header>
  );
}

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
      <div className="expertise__inner">
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
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="process__inner">
        <div className="process__copy">
          <button className="eyebrow process__eyebrow">How it works</button>
          <h2 id="process-heading">
            Professional Concrete Coating, made simple.
          </h2>
          <p className="process__lead">
            We make it easy to upgrade your concrete surfaces without the stress
          </p>
        </div>

        <div className="process__cards">
          <article className="process__card">
            <h3>Step 1</h3>
            <h4>Request a quote</h4>
            <p>
              Tell us about your concrete coating needs by filling out our quick
              form. Whether it's a garage, patio, or commercial space, we'll
              provide you with a fast, accurate estimate within 24 hours.
            </p>
          </article>

          <article className="process__card">
            <h3>Step 2</h3>
            <h4>Schedule your service</h4>
            <p>
              Pick a time that fits your schedule. Our team will confirm all the
              details and make sure everything is ready for a smooth
              installation.
            </p>
          </article>

          <article className="process__card">
            <h3>Step 3</h3>
            <h4>We get to work</h4>
            <p>
              Our skilled crew applies high-quality coatings with precision and
              care, transforming your concrete into a durable, clean, and
              great-looking surface that lasts.
            </p>
          </article>
        </div>

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
      img: "/garage-epoxy-hero.png",
      title: "Garage Floor Coatings",
      text: "Durable, slip-resistant coatings that protect your garage and give it a clean, finished look.",
    },
    {
      img: "/epoxy-detail.png",
      title: "Patio & Lanai Coatings",
      text: "Weather-resistant coatings designed to enhance comfort, safety, and style in your outdoor spaces.",
    },
    {
      img: "/owner-joao.png",
      title: "Driveway Coatings",
      text: "Long-lasting coatings that improve curb appeal while protecting against cracks, stains, and wear.",
    },
    {
      img: "/garage-epoxy-hero.png",
      title: "Pool Deck Coatings",
      text: "Coatings that reduce heat, improve traction, and resist cracking, fading, and moisture.",
    },
    {
      img: "/epoxy-detail.png",
      title: "Concrete Repair & Sealing",
      text: "Restore damaged concrete and seal it to prevent future cracks and moisture intrusion.",
    },
    {
      img: "/owner-joao.png",
      title: "Commercial Floor Coatings",
      text: "Heavy-duty flooring solutions built for high-traffic environments with durability and easy maintenance.",
    },
  ];

  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__inner">
        <div className="services__head">
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
        </div>

        <div className="services__grid">
          {items.map((it, idx) => (
            <article className="service-card" key={idx}>
              <div className="service-card__media">
                <img src={it.img} alt={it.title} />
              </div>
              <div className="service-card__meta">
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services__cta-wrap">
          <a className="services__cta" href="#quote">
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    if (nodeRef.current) observer.observe(nodeRef.current);

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 5); // easeOutQuint
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

const reviews = [
  {
    name: "Joseph Dorsey",
    text: "Florida Concrete Coatings did a wonderful job! Their employees worked diligently until the job was finished!",
    avatar: "https://ui-avatars.com/api/?name=Joseph+Dorsey&background=random"
  },
  {
    name: "Daniel Gomes",
    text: "We just had our garage floor done by Florida Concrete Coatings and couldn't be happier! The crew was professional and on time. Our garage looks brand ne...",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Gomes&background=random"
  },
  {
    name: "Ronald Leone",
    text: "Awesome job and very professional! We're pleased with the garage floor for sure.",
    avatar: "https://ui-avatars.com/api/?name=Ronald+Leone&background=random"
  }
];

function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__inner">
        <div className="reviews__head">
          <h2>Trusted by Homeowners</h2>
          <p>Reviews from [city] customers who love our services and pricing</p>
        </div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★ ★ ★ ★ ★</div>
              <p className="review-text">{r.text}</p>
              <button className="read-more">Read more</button>
              <div className="review-author">
                <div className="avatar-wrapper">
                  <img src={r.avatar} alt={r.name} />
                  <div className="avatar-badge">★</div>
                </div>
                <span className="author-name">{r.name}</span>
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="photos__grid">
          <img src="/garage-epoxy-hero.png" alt="Happy customer 1" className="photo-card" />
          <img src="/epoxy-detail.png" alt="Happy customer 2" className="photo-card" />
          <img src="/owner-joao.png" alt="Happy customer 3" className="photo-card" />
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us__inner">
        <div className="why-us__head">
          <button className="eyebrow process__eyebrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            Why us
          </button>
          <h2>Why Homeowners Choose Florida Concrete Coating</h2>
          <div className="why-us__lead">
            <p>
              We&apos;re a local company built on quality workmanship, honest service, and attention to detail. With over 3 years of hands-on experience, we understand what it takes to create an outdoor coating that looks great and stands up to real use.
            </p>
            <p>
              When we started Florida Concrete Coating in 2023, our goal was simple: provide top-tier results without cutting corners. From surface prep to final seal, we treat every project like it&apos;s our own home.
            </p>
          </div>
        </div>

        <div className="why-us__stats">
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={5} suffix="★" />
            </div>
            <div className="stat-label">Google Reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={3} suffix="+" />
            </div>
            <div className="stat-label">Years of Experience</div>
          </div>
        </div>
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

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero__content">
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
      <ReviewsSection />
      <FAQSection />
    </main>
  );
}
