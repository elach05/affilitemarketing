import React from 'react';
import bookImage from '../assets/money-affiliate-book.jpg'; // تأكد من وضع صورة هنا

export default function Home() {
  return (
    <main id="home" className="home">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Discover the Secrets of Making Money Online</h2>
            <p>Get your free eBook on affiliate marketing and start your journey to passive income through smart strategies, tools, and platforms.</p>
            <a href="/your-book.pdf" className="btn-primary" download>📘 Download the Free Book</a>
          </div>
          <div className="hero-image">
            <img src={bookImage} alt="Affiliate Marketing Book" />
          </div>
        </div>
      </section>

      <section id="about" className="features">
        <div className="container">
          <h3>About Us</h3>
          <p>We help aspiring marketers build passive income through affiliate marketing. Our guides, tools, and community are designed to support your growth.</p>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container">
          <h3>Contact Us</h3>
          <p>Have questions? Reach out via <a href="mailto:support@affiliatemastery.com">support@affiliatemastery.com</a></p>
        </div>
      </section>
    </main>
  );
}
