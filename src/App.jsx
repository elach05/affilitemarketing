import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import bookImage from './assets/photo-1599658880436-c61792e70672.jpg';
import user1 from './assets/photo-1552058544-f2b08422138a.jpg';
import user2 from './assets/photo-1539571696357-5a69c17a67c6.jpg';
import user3 from './assets/premium_photo-1669703777437-27602d656c27.jpg';
import './styles/main.css';

export default function App() {
  return (
    <>
      <Header />

      <main id="home" className="home" style={{ 
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#0f172a', // Dark blue background
        color: '#ffffff', // White text
        lineHeight: '1.6',
        overflowX: 'hidden'
      }}>
        {/* Hero Section */}
        <section className="hero" style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '8rem 0',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Subtle Grid Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            zIndex: '1'
          }}></div>
          
          <div className="container" style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative',
            zIndex: '2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '4rem'
          }}>
            <div className="hero-text" style={{ 
              maxWidth: '600px',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
{/* استبدال Edition 2024 بهذا التصميم المبدع */}
<div style={{
  position: 'relative',
  display: 'inline-block',
  marginBottom: '2rem',
  transformStyle: 'preserve-3d',
  perspective: '1000px'
}}>
  <div style={{
    position: 'relative',
    backgroundColor: 'rgba(56, 182, 255, 0.1)',
    color: '#38b6ff',
    padding: '0.7rem 1.5rem 0.7rem 3.5rem',
    borderRadius: '30px',
    fontSize: '0.95rem',
    fontWeight: '700',
    border: '1px solid rgba(56, 182, 255, 0.3)',
    boxShadow: '0 4px 15px rgba(56, 182, 255, 0.1)',
    transform: 'rotateY(-5deg)',
    transition: 'all 0.4s ease',
    ':hover': {
      transform: 'rotateY(5deg) scale(1.03)',
      boxShadow: '0 6px 20px rgba(56, 182, 255, 0.2)'
    }
  }}>
    {/* الشريط المضيء */}
    <div style={{
      position: 'absolute',
      left: '0',
      top: '0',
      height: '100%',
      width: '2.5rem',
      backgroundColor: 'rgba(56, 182, 255, 0.3)',
      borderTopLeftRadius: '30px',
      borderBottomLeftRadius: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(56, 182, 255, 0.7), transparent)',
        animation: 'shine 2s infinite'
      }}></div>
      <span style={{
        position: 'relative',
        zIndex: '2',
        fontSize: '1.2rem',
        animation: 'pulse 2s infinite'
      }}>✨</span>
    </div>
    
    {/* النص مع تأثير ثلاثي الأبعاد */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem'
    }}>
      <span style={{
        textShadow: '0 2px 5px rgba(56, 182, 255, 0.3)'
      }}>PREMIUM EDITION</span>
      <div style={{
        position: 'relative',
        width: '24px',
        height: '24px'
      }}>
        <span style={{
          position: 'absolute',
          top: '0',
          left: '0',
          color: '#fbbf24',
          textShadow: '0 0 8px rgba(251, 191, 36, 0.5)',
          animation: 'spin 4s linear infinite'
        }}>★</span>
        <span style={{
          position: 'absolute',
          top: '0',
          left: '0',
          color: '#38b6ff',
          animation: 'spinReverse 3s linear infinite'
        }}>✧</span>
      </div>
    </div>
    
    {/* الشريط السفلي المتحرك */}
    <div style={{
      position: 'absolute',
      bottom: '-3px',
      left: '3.5rem',
      right: '1.5rem',
      height: '2px',
      background: 'linear-gradient(90deg, #38b6ff, transparent)',
      animation: 'widthGrow 3s infinite alternate'
    }}></div>
  </div>
  
  {/* التأثيرات الجانبية */}
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '-15px',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '80%',
    backgroundColor: 'rgba(56, 182, 255, 0.2)',
    borderRadius: '5px',
    filter: 'blur(1px)'
  }}></div>
</div>

{/* إضافة هذه الأنيميشنز إلى قسم الستايل */}
<style>
  {`
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes spinReverse {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    @keyframes widthGrow {
      0% { width: 0%; opacity: 0; }
      100% { width: calc(100% - 3.5rem); opacity: 1; }
    }
  `}
</style>
              
              <h1 style={{ 
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '1.8rem',
                lineHeight: '1.2',
                color: '#ffffff',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Master Affiliate Marketing <br/><span style={{color: '#38b6ff'}}>Like a Pro</span>
              </h1>
              
              <p style={{ 
                fontSize: '1.25rem',
                marginBottom: '2.5rem',
                color: '#e2e8f0',
                lineHeight: '1.8',
                maxWidth: '90%'
              }}>
                The <strong style={{color: '#38b6ff'}}>ultimate guide</strong> to building automated income streams with proven strategies used by top marketers worldwide.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '1.5rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <a href="/affiliate-marketing-mastery.pdf" className="btn-primary" style={{ 
                  backgroundColor: '#38b6ff',
                  color: '#0f172a',
                  padding: '1.1rem 2.3rem',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  boxShadow: '0 4px 15px rgba(56, 182, 255, 0.3)',
                  border: '1px solid rgba(56, 182, 255, 0.4)',
                  ':hover': {
                    backgroundColor: '#1e90ff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(56, 182, 255, 0.4)'
                  }
                }} download>
                  <span style={{ fontSize: '1.3rem' }}>📘</span> 
                  <span>Download Free Guide</span>
                </a>
                
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.2)',
                    ':hover': {
                      backgroundColor: 'rgba(56, 182, 255, 0.2)'
                    }
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>▶</span>
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#94a3b8' }}>Watch Intro (2:15)</span>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '0.3rem'
                }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: '#fbbf24', fontSize: '1.1rem' }}>★</span>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <img 
                      src={user1} 
                      alt="User" 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #38b6ff',
                        marginRight: '-10px'
                      }} 
                    />
                    <img 
                      src={user2} 
                      alt="User" 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #38b6ff',
                        marginRight: '-10px'
                      }} 
                    />
                    <img 
                      src={user3} 
                      alt="User" 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #38b6ff'
                      }} 
                    />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Trusted by <strong style={{color: '#ffffff'}}>5,000+</strong> marketers
                  </span>
                </div>
              </div>
            </div>
            
            {/* Book Image with Modern Frame */}
            <div className="hero-image" style={{ 
              maxWidth: '460px',
              position: 'relative',
              animation: 'fadeIn 0.8s ease-out 0.2s forwards',
              opacity: '0',
              flex: '1',
              minWidth: '300px'
            }}>
              <div style={{
                position: 'relative',
                padding: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'perspective(1000px) rotateY(-8deg)',
                transition: 'transform 0.5s ease'
              }}>
                <img 
                  src={bookImage} 
                  alt="Affiliate Marketing Book" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                  }} 
                />
                {/* Decorative Corner */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '50px',
                  height: '50px',
                  borderTop: '2px solid #38b6ff',
                  borderRight: '2px solid #38b6ff',
                  borderTopRightRadius: '12px'
                }}></div>
              </div>
              
              {/* Floating Badges */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '30px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.85rem',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: '3'
              }}>
                <span style={{color: '#38b6ff', fontSize: '1.2rem'}}>✔</span> 
                <span>Updated Content</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="benefits" style={{ 
          padding: '6rem 0',
          backgroundColor: '#1e293b',
          position: 'relative'
        }}>
          <div className="container" style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#ffffff',
              marginBottom: '3rem',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              What You'll Discover Inside
            </h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                {
                  title: "Automated Income",
                  description: "Build systems that generate revenue 24/7 without constant effort.",
                  icon: "⚡"
                },
                {
                  title: "Traffic Strategies",
                  description: "Learn how to drive targeted visitors to your offers consistently.",
                  icon: "🚀"
                },
                {
                  title: "Conversion Secrets",
                  description: "Turn visitors into buyers with proven psychological tactics.",
                  icon: "💎"
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '2.5rem 2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(56, 182, 255, 0.3)'
                  },
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem',
                    color: '#38b6ff'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    marginBottom: '1rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#e2e8f0',
                    lineHeight: '1.8'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials" style={{ 
          padding: '6rem 0',
          backgroundColor: '#0f172a',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,182,255,0.05) 0%, rgba(56,182,255,0) 70%)',
            zIndex: '1'
          }}></div>
          
          <div className="container" style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: '2'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: '#ffffff',
              marginBottom: '3rem',
              fontWeight: '700'
            }}>
              Success Stories
            </h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                {
                  quote: "This guide helped me quit my job. I now earn 3x my old salary working from home!",
                  name: "Emily Rodriguez",
                  title: "Former Teacher",
                  rating: 5
                },
                {
                  quote: "The traffic strategies alone were worth 10x the price (and it's free!).",
                  name: "James Wilson",
                  title: "Startup Founder",
                  rating: 5
                },
                {
                  quote: "I went from $0 to $8,000/month in 6 months following this system.",
                  name: "Sarah Chen",
                  title: "Digital Nomad",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '2.5rem 2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'rgba(56, 182, 255, 0.3)'
                  },
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    right: '25px',
                    color: '#fbbf24',
                    fontSize: '1.2rem'
                  }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p style={{ 
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem',
                    color: '#e2e8f0',
                    fontStyle: 'italic',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-10px',
                      fontSize: '4rem',
                      color: 'rgba(56,182,255,0.05)',
                      lineHeight: '1',
                      fontFamily: 'serif',
                      zIndex: '1'
                    }}>"</span>
                    <span style={{position: 'relative', zIndex: '2'}}>{testimonial.quote}</span>
                  </p>
                  <div style={{position: 'relative', zIndex: '2'}}>
                    <strong style={{ 
                      display: 'block',
                      color: '#38b6ff',
                      fontSize: '1.1rem'
                    }}>- {testimonial.name}</strong>
                    <small style={{ color: '#94a3b8' }}>{testimonial.title}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta" style={{ 
          padding: '8rem 0',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          textAlign: 'center',
          position: 'relative',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="container" style={{ 
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative',
            zIndex: '2'
          }}>
            <h2 style={{ 
              fontSize: '2.8rem',
              color: '#ffffff',
              marginBottom: '2rem',
              fontWeight: '800',
              lineHeight: '1.3'
            }}>
              Ready to Transform Your Income?
            </h2>
            <p style={{ 
              fontSize: '1.2rem',
              marginBottom: '3rem',
              lineHeight: '1.8',
              color: '#e2e8f0'
            }}>
              Get instant access to our <strong style={{color: '#38b6ff'}}>free guide</strong> and start building your affiliate empire today.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <a href="/affiliate-marketing-mastery.pdf" className="btn-primary" style={{ 
                backgroundColor: '#38b6ff',
                color: '#0f172a',
                padding: '1.3rem 3rem',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(56, 182, 255, 0.4)',
                border: '2px solid #38b6ff',
                ':hover': {
                  backgroundColor: '#1e90ff',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 25px rgba(56, 182, 255, 0.5)'
                }
              }} download>
                📥 Download Free Guide
              </a>
            </div>
            <p style={{ 
              marginTop: '2rem',
              color: '#94a3b8',
              fontSize: '0.9rem'
            }}>
              No credit card required • Instant access • Updated for 2024
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Global Styles and Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          /* Color Palette */
          :root {
            --dark-blue: #0f172a;
            --navy-blue: #1e293b;
            --primary-blue: #38b6ff;
            --white: #ffffff;
            --light-gray: #e2e8f0;
            --medium-gray: #94a3b8;
            --yellow: #fbbf24;
          }
        `}
      </style>
    </>
  );
}