"use client";
import { useState, useEffect, useRef } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

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

export default function WhyUsSection({ className = "why-us" }) {
  return (
    <section className={className} id="why-us">
      <div className="why-us__inner">
        <FadeIn className="why-us__head">
          <button className="eyebrow process__eyebrow" style={className.includes('why-us--white') ? {background: 'var(--orange)', border: 'none', color: '#fff'} : {}}>
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 14, height: 14, fill: "#fff", marginRight: 6 }}>
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
        </FadeIn>

        <StaggerContainer className="why-us__stats">
          <StaggerItem className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="stat-label">Happy Clients</div>
          </StaggerItem>
          <StaggerItem className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={5} suffix="★" />
            </div>
            <div className="stat-label">Google Reviews</div>
          </StaggerItem>
          <StaggerItem className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={3} suffix="+" />
            </div>
            <div className="stat-label">Years of Experience</div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
