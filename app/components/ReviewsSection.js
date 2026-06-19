"use client";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";
const reviews = [
  {
    name: "Joseph Dorsey",
    text: "Florida Concrete Coatings did a wonderful job! Their employees worked diligently until the job was finished!",
    avatar: "https://ui-avatars.com/api/?name=Joseph+Dorsey&background=random"
  },
  {
    name: "Daniel Gomes",
    text: "We just had our garage floor done by Florida Concrete Coatings and couldn't be happier! The crew was professional and on time. Our garage looks brand new and it's so easy to keep clean now. You can really tell they take pride in their work—highly recommend them!",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Gomes&background=random"
  },
  {
    name: "Ronald Leone",
    text: "Awesome job and very professional! We're pleased with the garage floor for sure.",
    avatar: "https://ui-avatars.com/api/?name=Ronald+Leone&background=random"
  }
];

export default function ReviewsSection({ className = "reviews", city = "Davenport" }) {
  return (
    <section className={className} id="reviews">
      <div className="reviews__inner">
        <FadeIn className="reviews__head">
          <h2>Trusted by Homeowners</h2>
          <p>Reviews from {city} customers who love our services and pricing</p>
        </FadeIn>

        <StaggerContainer className="reviews__grid">
          {reviews.map((r, i) => (
            <StaggerItem className="review-card" key={i} style={{border: '1px solid #e5e5e5'}}>
              <div className="review-stars" style={{color: '#FFB900'}}>★ ★ ★ ★ ★</div>
              <p className="review-text">{r.text}</p>
              <button className="read-more">Read more</button>
              <div className="review-author">
                <div className="avatar-wrapper">
                  <img width="800" height="600" loading="lazy" src={r.avatar} alt={r.name} />
                  <div className="avatar-badge" style={{background: '#FFB900'}}>★</div>
                </div>
                <span className="author-name">{r.name}</span>
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="photos__grid">
          <StaggerItem><img width="800" height="600" loading="lazy" src="/banner.webp" alt="Happy customer 1" className="photo-card" /></StaggerItem>
          <StaggerItem><img width="800" height="600" loading="lazy" src="/banner2.jpg" alt="Happy customer 2" className="photo-card" /></StaggerItem>
          <StaggerItem><img width="800" height="600" loading="lazy" src="/banner3.jpg" alt="Happy customer 3" className="photo-card" /></StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.2} direction="up">
          <div className="reviews-cta-box" style={{background: 'var(--teal-deep)', borderRadius: '16px', padding: '40px', textAlign: 'center', marginTop: '60px', color: '#fff'}}>
            <h3 style={{fontSize: '28px', margin: '0 0 10px'}}>Happy With Our Work?</h3>
            <div className="stars" style={{color: '#FFB900', fontSize: '24px', letterSpacing: '4px', marginBottom: '20px'}}>★★★★★</div>
            <a href="https://google.com/maps/place//data=!4m3!3m2!1s0x2c5ae181a1962a79:0x90f52661f0144d57!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" target="_blank" rel="noopener noreferrer" className="btn-white" style={{display: 'inline-block', background: '#fff', color: 'var(--teal)', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none'}}>Leave us a Google Review</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
