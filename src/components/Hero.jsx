import React from 'react';
import bookCover from '../assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0yNi1tYWV3LTE2NTEyLWx5ajE0NDktMS1hZmZpbGlhdGVtYXJrZXRpbmdfMS5qcGc.png';

export default function Hero() {
  return (
    <div className="hero">
      <h1>Discover the Ultimate Affiliate Marketing Guide</h1>
      <p>A complete step-by-step book to help you start and succeed with affiliate marketing. Perfect for beginners and experts.</p>
      <img src={bookCover} alt="Book Cover" />
    </div>
  );
}
<div className="container" style={{ 
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  position: 'relative',
  zIndex: '2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap', // تغيير من 'wrap' إلى 'wrap'
  gap: '4rem',
  flexDirection: window.innerWidth < 768 ? 'column' : 'row' // إضافة شرط للهاتف
}}></div>
