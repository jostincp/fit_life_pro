import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, t, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <a href="#" className="network-logo">
          FitLife Pro
        </a>

        {/* Desktop Navigation */}
        <nav className="network-nav">
          <button 
            className="network-nav-link" 
            onClick={() => scrollToSection('features')}
          >
            {t('features')}
          </button>
          <button 
            className="network-nav-link" 
            onClick={() => scrollToSection('progress')}
          >
            Progreso
          </button>
          <button 
            className="network-nav-link" 
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonios
          </button>
          
          {/* Language Selector */}
          <div className="language-selector">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`language-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button className="btn-primary" style={{ marginLeft: '16px' }}>
            {t('download')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="mobile-nav-overlay">
            <div className="mobile-nav-content">
              <button 
                className="mobile-nav-link" 
                onClick={() => scrollToSection('features')}
              >
                {t('features')}
              </button>
              <button 
                className="mobile-nav-link" 
                onClick={() => scrollToSection('progress')}
              >
                Progreso
              </button>
              <button 
                className="mobile-nav-link" 
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonios
              </button>
              
              <div className="mobile-language-selector">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`language-btn ${language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button className="btn-primary mobile-download-btn">
                {t('download')}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          .network-nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 69, 52, 0.95);
            backdrop-filter: blur(10px);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .mobile-nav-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
            text-align: center;
            padding: 32px;
          }
          
          .mobile-nav-link {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            padding: 12px 24px;
            border-radius: 25px;
            transition: all 0.2s ease;
          }
          
          .mobile-nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .mobile-language-selector {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin: 16px 0;
          }
          
          .mobile-download-btn {
            margin-top: 16px;
            align-self: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;