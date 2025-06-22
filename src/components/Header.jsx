import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">AffiliateMastery</div>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta" className="cta-button">Get eBook</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}