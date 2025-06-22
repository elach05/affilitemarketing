import React from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header style={{
      position: 'fixed',
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: '1000',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
          Affiliate<span style={{ color: '#38b6ff' }}>Pro</span>
        </div>
        
        {/* إضافة زر القائمة للهاتف */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth < 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem'
          }}
        >
          ☰
        </button>
        
        <nav style={{
          display: window.innerWidth < 768 ? (isMobileMenuOpen ? 'block' : 'none') : 'block'
        }}>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            padding: window.innerWidth < 768 ? '1rem 0' : '0'
          }}>
            <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#benefits" style={{ color: 'white', textDecoration: 'none' }}>Benefits</a></li>
            <li><a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;