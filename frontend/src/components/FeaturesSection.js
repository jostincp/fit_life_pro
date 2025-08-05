import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Dumbbell, Apple, Users, TrendingUp, Clock, Target } from 'lucide-react';
import { mockData } from '../data/mockData';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const featureIcons = {
    'Personal Training': Dumbbell,
    'Nutrition Tracking': Apple,
    'Community Challenges': Users
  };

  return (
    <section id="features" style={{
      padding: `${120}px 0`,
      background: 'white'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="animated" style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-giant)',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-giant) auto'
        }}>
          <h2 className="display-medium" style={{ marginBottom: 'var(--spacing-medium)' }}>
            {t('featuresTitle')}
          </h2>
          <p className="body-large">
            Descubre todas las herramientas que necesitas para transformar tu estilo de vida
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-large)',
          marginBottom: 'var(--spacing-giant)'
        }}>
          {/* Personal Training Feature */}
          <div className="network-card animated hover-lift">
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-medium)',
              marginBottom: 'var(--spacing-medium)'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                padding: '16px',
                borderRadius: '20px',
                flexShrink: 0
              }}>
                <Dumbbell size={32} color="var(--text-primary)" />
              </div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>
                  {t('personalTraining')}
                </h3>
                <p className="body-medium">
                  {t('personalTrainingDesc')}
                </p>
              </div>
            </div>
            
            {/* Feature Benefits */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginTop: 'var(--spacing-medium)'
            }}>
              {['500+ Ejercicios', 'IA Personalizada', 'Corrección de Forma', 'Planes Progresivos'].map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: 'var(--bg-subtle)',
                  borderRadius: '12px'
                }}>
                  <Target size={16} color="var(--brand-dark)" />
                  <span className="body-small" style={{ fontWeight: '500' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition Tracking Feature */}
          <div className="network-card animated hover-lift">
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-medium)',
              marginBottom: 'var(--spacing-medium)'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                padding: '16px',
                borderRadius: '20px',
                flexShrink: 0
              }}>
                <Apple size={32} color="var(--text-primary)" />
              </div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>
                  {t('nutritionTracking')}
                </h3>
                <p className="body-medium">
                  {t('nutritionTrackingDesc')}
                </p>
              </div>
            </div>
            
            {/* Nutrition Stats */}
            <div style={{
              background: 'var(--bg-subtle)',
              padding: 'var(--spacing-medium)',
              borderRadius: '20px',
              marginTop: 'var(--spacing-medium)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                textAlign: 'center'
              }}>
                {[
                  { label: 'Proteína', value: '125g', color: 'var(--brand-dark)' },
                  { label: 'Carbos', value: '180g', color: 'var(--brand-hover)' },
                  { label: 'Grasas', value: '65g', color: 'var(--text-light)' }
                ].map((macro, index) => (
                  <div key={index}>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: macro.color,
                      marginBottom: '4px'
                    }}>
                      {macro.value}
                    </div>
                    <div className="body-small">
                      {macro.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Challenges Feature */}
          <div className="network-card animated hover-lift">
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-medium)',
              marginBottom: 'var(--spacing-medium)'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                padding: '16px',
                borderRadius: '20px',
                flexShrink: 0
              }}>
                <Users size={32} color="var(--text-primary)" />
              </div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>
                  {t('communityFeature')}
                </h3>
                <p className="body-medium">
                  {t('communityFeatureDesc')}
                </p>
              </div>
            </div>
            
            {/* Active Challenges */}
            <div style={{ marginTop: 'var(--spacing-medium)' }}>
              <div className="body-small" style={{ 
                marginBottom: '12px',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }}>
                Retos Activos
              </div>
              {mockData.challenges.slice(0, 2).map((challenge, index) => (
                <div key={challenge.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  background: 'var(--bg-subtle)',
                  borderRadius: '12px',
                  marginBottom: '8px'
                }}>
                  <div>
                    <div className="body-small" style={{ fontWeight: '600' }}>
                      {challenge.title}
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-light)' }}>
                      {challenge.participants.toLocaleString()} participantes
                    </div>
                  </div>
                  <div style={{
                    background: 'var(--brand-primary)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    {challenge.daysLeft}d
                  </div>
                </div>
              ))}
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
          marginTop: 'var(--spacing-giant)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 24px',
            background: 'var(--bg-card)',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 69, 52, 0.1)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--brand-dark)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600'
            }}>
              📱
            </div>
            <div>
              <div className="body-small" style={{ fontWeight: '600' }}>
                App Store
              </div>
              <div className="body-small" style={{ color: 'var(--text-light)' }}>
                {mockData.downloadStats.appStore}
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 24px',
            background: 'var(--bg-card)',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 69, 52, 0.1)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--brand-hover)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600'
            }}>
              🤖
            </div>
            <div>
              <div className="body-small" style={{ fontWeight: '600' }}>
                Google Play
              </div>
              <div className="body-small" style={{ color: 'var(--text-light)' }}>
                {mockData.downloadStats.googlePlay}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          section {
            padding: 80px 0 !important;
          }
          
          .network-grid {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-medium) !important;
          }
          
          .network-card {
            padding: var(--spacing-medium) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;