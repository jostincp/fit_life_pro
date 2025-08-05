import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--brand-dark)',
      color: 'white',
      padding: 'var(--spacing-giant) 0 var(--spacing-large) 0'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-large)',
          marginBottom: 'var(--spacing-large)'
        }}>
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: 'var(--spacing-medium)',
              color: 'var(--brand-primary)'
            }}>
              FitLife Pro
            </h3>
            <p className="body-medium" style={{ 
              marginBottom: 'var(--spacing-medium)',
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              {t('footerText')}
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginTop: 'var(--spacing-medium)'
            }}>
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand-primary)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: 'var(--spacing-medium)',
              color: 'white'
            }}>
              Enlaces Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { text: t('features'), href: '#features' },
                { text: 'Progreso', href: '#progress' },
                { text: 'Testimonios', href: '#testimonials' },
                { text: 'Precios', href: '#pricing' },
                { text: 'FAQ', href: '#faq' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      transition: 'all 0.2s ease',
                      display: 'block',
                      padding: '4px 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--brand-primary)';
                      e.target.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: 'var(--spacing-medium)',
              color: 'white'
            }}>
              Legal
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { text: t('privacy'), href: '/privacy' },
                { text: t('terms'), href: '/terms' },
                { text: 'Cookies', href: '/cookies' },
                { text: 'Seguridad', href: '/security' },
                { text: t('contact'), href: '/contact' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      transition: 'all 0.2s ease',
                      display: 'block',
                      padding: '4px 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--brand-primary)';
                      e.target.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: 'var(--spacing-medium)',
              color: 'white'
            }}>
              Contacto
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {[
                { icon: Mail, text: 'hola@fitlifepro.com' },
                { icon: Phone, text: '+34 900 123 456' },
                { icon: MapPin, text: 'Madrid, España' }
              ].map((contact, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px',
                    borderRadius: '8px'
                  }}>
                    <contact.icon size={16} />
                  </div>
                  <span style={{ fontSize: '14px' }}>
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div style={{
              marginTop: 'var(--spacing-medium)',
              padding: 'var(--spacing-medium)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px'
            }}>
              <h5 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'var(--brand-primary)'
              }}>
                Newsletter
              </h5>
              <p style={{
                fontSize: '12px',
                opacity: 0.8,
                marginBottom: '12px',
                lineHeight: 1.4
              }}>
                Recibe tips de fitness y nutrición
              </p>
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '14px'
                  }}
                />
                <button style={{
                  padding: '8px 16px',
                  background: 'var(--brand-primary)',
                  color: 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'var(--spacing-large)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            opacity: 0.8
          }}>
            © {currentYear} FitLife Pro. Todos los derechos reservados.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            opacity: 0.8
          }}>
            Hecho con <Heart size={16} color="var(--brand-primary)" fill="var(--brand-primary)" /> para tu salud
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          footer {
            padding: var(--spacing-large) 0 !important;
          }
          
          div[style*="justifyContent: 'space-between'"] {
            flex-direction: column !important;
            text-align: center;
            gap: var(--spacing-medium) !important;
          }
          
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-large) !important;
            text-align: center;
          }
          
          ul {
            text-align: center;
          }
          
          div[style*="flexDirection: 'column'"] {
            align-items: center;
          }
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        input:focus {
          outline: 2px solid var(--brand-primary);
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;