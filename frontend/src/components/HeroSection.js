import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Download, Star, Users, Trophy, Zap } from 'lucide-react';
import { mockData } from '../data/mockData';

const HeroSection = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
    // Mock download action - in real app would redirect to app stores
    alert('Redirigiendo a tiendas de aplicaciones...');
  };

  const handleWatchDemo = () => {
    // Mock demo action
    alert('Reproduciendo video demo...');
  };

  return (
    <section className="hero-section" style={{
      background: 'var(--bg-page)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: 'var(--spacing-giant)',
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
        background: 'linear-gradient(135deg, var(--bg-page) 0%, var(--bg-subtle) 100%)',
        opacity: 0.7,
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'var(--spacing-giant)',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Hero Content */}
          <div className="hero-content animated" style={{
            textAlign: 'left'
          }}>
            {/* Trust Indicators */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'var(--spacing-medium)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={16} fill="var(--brand-primary)" color="var(--brand-primary)" />
                <span className="body-small" style={{ color: 'var(--text-primary)' }}>
                  4.9★ ({mockData.downloadStats.totalDownloads} descargas)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={16} color="var(--brand-dark)" />
                <span className="body-small" style={{ color: 'var(--text-primary)' }}>
                  {mockData.stats.totalUsers} usuarios activos
                </span>
              </div>
            </div>

            <h1 className="display-large" style={{ marginBottom: 'var(--spacing-medium)' }}>
              {t('heroTitle')}
            </h1>
            
            <p className="body-large" style={{ 
              marginBottom: 'var(--spacing-large)',
              color: 'var(--text-secondary)',
              maxWidth: '500px'
            }}>
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-medium)',
              marginBottom: 'var(--spacing-large)',
              flexWrap: 'wrap'
            }}>
              <button 
                className="btn-cta"
                onClick={handleDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Download size={20} />
                {t('downloadApp')}
              </button>
              
              <button 
                className="btn-secondary"
                onClick={handleWatchDemo}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Play size={18} />
                {t('watchDemo')}
              </button>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 'var(--spacing-medium)',
              marginTop: 'var(--spacing-large)'
            }}>
              <div className="stat-item">
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--brand-dark)',
                  marginBottom: '4px'
                }}>
                  {mockData.stats.workoutsCompleted}
                </div>
                <div className="body-small">
                  Entrenamientos Completados
                </div>
              </div>
              
              <div className="stat-item">
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--brand-dark)',
                  marginBottom: '4px'
                }}>
                  {mockData.stats.avgWeightLoss}
                </div>
                <div className="body-small">
                  Pérdida Promedio
                </div>
              </div>
              
              <div className="stat-item">
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--brand-dark)',
                  marginBottom: '4px'
                }}>
                  {mockData.stats.successRate}
                </div>
                <div className="body-small">
                  Tasa de Éxito
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual animated" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Phone Mockup */}
            <div style={{
              width: '280px',
              height: '580px',
              background: 'var(--bg-card)',
              borderRadius: '32px',
              padding: '12px',
              boxShadow: '0 20px 60px rgba(0, 69, 52, 0.3)',
              position: 'relative',
              transform: 'rotate(-5deg)'
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
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Screen Content */}
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <Trophy size={48} style={{ marginBottom: '16px', color: 'var(--brand-primary)' }} />
                  <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                    ¡Meta Alcanzada!
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>
                    Has completado tu entrenamiento de hoy
                  </div>
                  
                  {/* Progress Circles */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around',
                    marginTop: '32px',
                    gap: '16px'
                  }}>
                    {[
                      { label: 'Calorías', value: '85%', color: 'var(--brand-primary)' },
                      { label: 'Proteína', value: '92%', color: '#fff' },
                      { label: 'Agua', value: '78%', color: 'var(--brand-primary)' }
                    ].map((item, index) => (
                      <div key={index} style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          border: `3px solid ${item.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          {item.value}
                        </div>
                        <div style={{ fontSize: '10px', opacity: 0.8 }}>
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(211, 255, 98, 0.2)',
                  padding: '8px',
                  borderRadius: '12px'
                }}>
                  <Zap size={16} color="var(--brand-primary)" />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '-20px',
              background: 'var(--bg-card)',
              padding: '16px 20px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0, 69, 52, 0.15)',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              transform: 'rotate(8deg)'
            }}>
              🔥 150 cal quemadas
            </div>

            <div style={{
              position: 'absolute',
              bottom: '15%',
              right: '-30px',
              background: 'var(--bg-card)',
              padding: '16px 20px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0, 69, 52, 0.15)',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              transform: 'rotate(-8deg)'
            }}>
              ⭐ Racha de 7 días
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          .hero-section {
            padding-top: 100px !important;
            text-align: center;
          }
          
          .hero-section div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr;
            gap: var(--spacing-large);
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-visual div:first-child {
            width: 240px !important;
            height: 500px !important;
          }
          
          .stat-item {
            text-align: center;
          }
        }
        
        .stat-item:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;