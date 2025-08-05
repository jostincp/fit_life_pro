import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Activity, Heart, Zap, BarChart3, Target } from 'lucide-react';
import { mockData } from '../data/mockData';

const ProgressSection = () => {
  const { t } = useLanguage();

  const progressIcons = {
    'Weekly Workouts': Activity,
    'Calories Burned': Zap,
    'Protein Intake': Target,
    'Sleep Quality': Heart
  };

  return (
    <section id="progress" style={{
      padding: `${120}px 0`,
      background: 'var(--bg-subtle)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="animated" style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-giant)',
          maxWidth: '700px',
          margin: '0 auto var(--spacing-giant) auto'
        }}>
          <h2 className="display-medium" style={{ marginBottom: 'var(--spacing-medium)' }}>
            {t('progressTitle')}
          </h2>
          <p className="body-large">
            {t('progressSubtitle')}
          </p>
        </div>

        {/* Main Progress Dashboard */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'var(--spacing-large)',
          marginBottom: 'var(--spacing-giant)',
          alignItems: 'start'
        }}>
          {/* Progress Metrics */}
          <div className="network-card animated" style={{ 
            gridColumn: window.innerWidth > 1024 ? 'span 2' : 'span 1',
            background: 'white'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'var(--spacing-large)'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                padding: '16px',
                borderRadius: '20px'
              }}>
                <BarChart3 size={32} color="var(--text-primary)" />
              </div>
              <div>
                <h3 className="heading-2">
                  Panel de Progreso
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-light)' }}>
                  Seguimiento en tiempo real de tus métricas
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-medium)'
            }}>
              {mockData.progressMetrics.map((metric, index) => {
                const IconComponent = progressIcons[metric.title] || TrendingUp;
                
                return (
                  <div key={metric.id} style={{
                    background: 'var(--bg-subtle)',
                    padding: 'var(--spacing-medium)',
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Progress Bar Background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${metric.percentage}%`,
                      background: `linear-gradient(90deg, ${metric.color}15, transparent)`,
                      borderRadius: '20px'
                    }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <IconComponent size={24} color={metric.color} />
                        <div style={{
                          background: metric.color,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {metric.percentage}%
                        </div>
                      </div>
                      
                      <div style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '4px'
                      }}>
                        {metric.value}
                      </div>
                      
                      <div className="body-small" style={{ color: 'var(--text-light)' }}>
                        {metric.title}
                      </div>
                      
                      {/* Progress Bar */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'var(--border-light)',
                        borderRadius: '3px',
                        marginTop: '12px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${metric.percentage}%`,
                          background: `linear-gradient(90deg, ${metric.color}, ${metric.color}cc)`,
                          borderRadius: '3px',
                          transition: 'width 1s ease-in-out'
                        }}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekly Summary Card */}
          <div className="network-card animated" style={{ background: 'white' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-medium)'
            }}>
              <h3 className="heading-3">
                Resumen Semanal
              </h3>
              <div style={{
                background: 'var(--brand-primary)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }}>
                Semana 12
              </div>
            </div>

            {/* Weekly Stats */}
            <div style={{ marginBottom: 'var(--spacing-medium)' }}>
              {[
                { day: 'Lun', completed: true, type: 'Cardio' },
                { day: 'Mar', completed: true, type: 'Fuerza' },
                { day: 'Mié', completed: true, type: 'Yoga' },
                { day: 'Jue', completed: false, type: 'Descanso' },
                { day: 'Vie', completed: true, type: 'HIIT' },
                { day: 'Sáb', completed: true, type: 'Cardio' },
                { day: 'Dom', completed: false, type: 'Planificado' }
              ].map((day, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: index < 6 ? '1px solid var(--border-light)' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: day.completed ? 'var(--brand-primary)' : 'var(--border-medium)'
                    }}></div>
                    <span className="body-medium" style={{ fontWeight: '500' }}>
                      {day.day}
                    </span>
                  </div>
                  <span className="body-small" style={{ 
                    color: day.completed ? 'var(--text-primary)' : 'var(--text-light)'
                  }}>
                    {day.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievement Badge */}
            <div style={{
              background: 'var(--bg-subtle)',
              padding: 'var(--spacing-medium)',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏆</div>
              <div className="body-small" style={{ fontWeight: '600', marginBottom: '4px' }}>
                ¡Meta Semanal Alcanzada!
              </div>
              <div className="body-small" style={{ color: 'var(--text-light)' }}>
                5 de 7 entrenamientos completados
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="animated" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-medium)',
          marginTop: 'var(--spacing-giant)'
        }}>
          {[
            {
              icon: Activity,
              title: t('workoutStats'),
              description: 'Análisis detallado de cada sesión de entrenamiento'
            },
            {
              icon: Target,
              title: t('nutritionMetrics'),
              description: 'Seguimiento preciso de macronutrientes y calorías'
            },
            {
              icon: TrendingUp,
              title: t('bodyProgress'),
              description: 'Mediciones corporales y fotografías de progreso'
            }
          ].map((feature, index) => (
            <div key={index} className="network-card hover-lift" style={{
              background: 'white',
              textAlign: 'center',
              padding: 'var(--spacing-large)'
            }}>
              <div style={{
                background: 'var(--brand-primary)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-medium) auto'
              }}>
                <feature.icon size={28} color="var(--text-primary)" />
              </div>
              <h4 className="heading-3" style={{ marginBottom: '12px' }}>
                {feature.title}
              </h4>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 781px) {
          section {
            padding: 80px 0 !important;
          }
          
          .network-card {
            padding: var(--spacing-medium) !important;
          }
          
          div[style*="gridColumn"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProgressSection;