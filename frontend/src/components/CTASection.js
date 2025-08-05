import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Smartphone, Star, ArrowRight, Play } from 'lucide-react';
import { mockData } from '../data/mockData';

const CTASection = () => {
  const { t } = useLanguage();

  const handleDownload = (platform) => {
    alert(`Redirigiendo a ${platform}...`);
  };

  return (
    <section style={{
      padding: `${120}px 0`,
      background: 'var(--bg-section)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, var(--bg-section) 0%, var(--bg-subtle) 100%)',
        opacity: 0.8
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main CTA Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'var(--spacing-giant)',
          alignItems: 'center',
          marginBottom: 'var(--spacing-giant)'
        }}>
          {/* CTA Text */}
          <div className="animated">
            <h2 className="display-medium" style={{ marginBottom: 'var(--spacing-medium)' }}>
              {t('ctaTitle')}
            </h2>
            <p className="body-large" style={{ 
              marginBottom: 'var(--spacing-large)',
              color: 'var(--text-secondary)'
            }}>
              {t('ctaSubtitle')}
            </p>

            {/* Trust Indicators */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-medium)',
              marginBottom: 'var(--spacing-large)',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(0, 69, 52, 0.1)'
              }}>
                <Star size={16} fill="var(--brand-primary)" color="var(--brand-primary)" />
                <span className="body-small" style={{ fontWeight: '600' }}>
                  4.9★ Rating
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(0, 69, 52, 0.1)'
              }}>
                <Download size={16} color="var(--brand-dark)" />
                <span className="body-small" style={{ fontWeight: '600' }}>
                  {mockData.downloadStats.totalDownloads} Descargas
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-medium)',
              flexWrap: 'wrap'
            }}>
              <button 
                className="btn-cta"
                onClick={() => handleDownload('App Store')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Smartphone size={20} />
                {t('downloadApp')}
                <ArrowRight size={18} />
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => handleDownload('Google Play')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Play size={18} />
                Ver Demo
              </button>
            </div>

            {/* Additional Info */}
            <div className="body-small" style={{ 
              marginTop: 'var(--spacing-medium)',
              color: 'var(--text-light)'
            }}>
              ✓ Gratis por 7 días • ✓ Sin compromisos • ✓ Cancela cuando quieras
            </div>
          </div>

          {/* App Preview */}
          <div className="animated" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Multiple Phone Mockups */}
            <div style={{ position: 'relative' }}>
              {/* Main Phone */}
              <div style={{
                width: '250px',
                height: '500px',
                background: 'white',
                borderRadius: '30px',
                padding: '8px',
                boxShadow: '0 20px 60px rgba(0, 69, 52, 0.4)',
                position: 'relative',
                zIndex: 3,
                transform: 'rotate(-2deg)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-hover) 100%)',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Screen Content - Download Success */}
                  <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                      background: 'var(--brand-primary)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}>
                      <Download size={32} color="var(--text-primary)" />
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                      ¡Bienvenido a FitLife!
                    </div>
                    <div style={{ fontSize: '14px', opacity: 0.9 }}>
                      Tu transformación comienza ahora
                    </div>
                  </div>

                  {/* Progress Rings */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: '16px'
                  }}>
                    {[
                      { label: 'Pasos', value: '8,543', progress: '75%' },
                      { label: 'Calorías', value: '324', progress: '65%' },
                      { label: 'Agua', value: '1.2L', progress: '80%' }
                    ].map((item, index) => (
                      <div key={index} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          border: `4px solid var(--brand-primary)`,
                          borderRadius: '50%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: '600',
                          marginBottom: '8px',
                          margin: '0 auto 8px'
                        }}>
                          <div>{item.value}</div>
                          <div style={{ fontSize: '10px', opacity: 0.8 }}>{item.progress}</div>
                        </div>
                        <div style={{ fontSize: '10px', opacity: 0.8 }}>
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    background: 'var(--brand-primary)',
                    padding: '12px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Comenzar Entrenamiento
                  </div>
                </div>
              </div>

              {/* Secondary Phone - Partially Hidden */}
              <div style={{
                width: '200px',
                height: '400px',
                background: 'var(--bg-card)',
                borderRadius: '24px',
                padding: '6px',
                boxShadow: '0 15px 40px rgba(0, 69, 52, 0.2)',
                position: 'absolute',
                top: '50px',
                right: '-60px',
                zIndex: 1,
                transform: 'rotate(8deg)',
                opacity: 0.7
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--bg-subtle)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)'
                }}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Smartphone size={40} style={{ marginBottom: '12px' }} />
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>
                      Disponible en
                    </div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>
                      iOS & Android
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Badges */}
        <div className="animated" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--spacing-large)',
          flexWrap: 'wrap',
          padding: 'var(--spacing-large)',
          background: 'white',
          borderRadius: '24px',
          boxShadow: '0 8px 24px rgba(0, 69, 52, 0.1)'
        }}>
          {/* App Store Badge */}
          <button 
            onClick={() => handleDownload('App Store')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 24px',
              background: 'var(--brand-dark)',
              color: 'white',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              fontSize: '32px'
            }}>
              🍎
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                Descargar en
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>
                App Store
              </div>
            </div>
          </button>

          {/* Google Play Badge */}
          <button 
            onClick={() => handleDownload('Google Play')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 24px',
              background: 'var(--brand-dark)',
              color: 'white',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              fontSize: '32px'
            }}>
              📱
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                Conseguir en
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>
                Google Play
              </div>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          section {
            padding: 80px 0 !important;
          }
          
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(400px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-large) !important;
            text-align: center;
          }
          
          .hero-visual div:first-child {
            width: 200px !important;
            height: 400px !important;
          }
          
          .hero-visual div:last-child {
            display: none;
          }
        }
        
        button[style*="background: var(--brand-dark)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 69, 52, 0.25);
        }
      `}</style>
    </section>
  );
};

export default CTASection;