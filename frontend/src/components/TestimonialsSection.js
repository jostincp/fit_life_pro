import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Quote, TrendingUp, Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" style={{
      padding: `${120}px 0`,
      background: 'white',
      position: 'relative'
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
            {t('testimonialsTitle')}
          </h2>
          <p className="body-large">
            Historias reales de transformación de nuestra comunidad
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-large)',
          marginBottom: 'var(--spacing-giant)'
        }}>
          {mockData.testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="network-card animated hover-lift" style={{
              background: 'var(--bg-card)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                background: 'var(--brand-primary)',
                padding: '12px',
                borderRadius: '50%',
                opacity: 0.1
              }}>
                <Quote size={40} />
              </div>

              {/* User Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-medium)',
                marginBottom: 'var(--spacing-medium)'
              }}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--brand-primary)'
                  }}
                />
                <div>
                  <h4 className="heading-3" style={{ marginBottom: '4px' }}>
                    {testimonial.name}
                  </h4>
                  <p className="body-small" style={{ color: 'var(--text-light)', marginBottom: '8px' }}>
                    {testimonial.age} años • {testimonial.location}
                  </p>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--brand-primary)" color="var(--brand-primary)" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="body-medium" style={{
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-medium)',
                lineHeight: 1.6
              }}>
                {index === 0 && `"${t('testimonial1')}"`}
                {index === 1 && `"${t('testimonial2')}"`}
                {index === 2 && `"${t('testimonial3')}"`}
              </blockquote>

              {/* Results */}
              <div style={{
                background: 'var(--bg-subtle)',
                padding: 'var(--spacing-medium)',
                borderRadius: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--brand-dark)',
                    marginBottom: '4px'
                  }}>
                    {testimonial.beforeWeight}
                  </div>
                  <div className="body-small">
                    Antes
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={20} color="var(--brand-primary)" />
                </div>
                
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--brand-primary)',
                    marginBottom: '4px'
                  }}>
                    {testimonial.afterWeight}
                  </div>
                  <div className="body-small">
                    Después
                  </div>
                </div>
              </div>

              {/* Timeframe */}
              <div style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-medium)',
                padding: '8px 16px',
                background: 'var(--brand-primary)',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }}>
                Transformación en {testimonial.timeframe}
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="animated" style={{
          background: 'var(--bg-subtle)',
          padding: 'var(--spacing-giant)',
          borderRadius: '32px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: 'var(--spacing-large)'
          }}>
            <Award size={32} color="var(--brand-dark)" />
            <h3 className="heading-2">
              Resultados Comprobados
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-large)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                value: mockData.stats.successRate,
                label: 'Tasa de Éxito',
                description: 'Usuarios que alcanzan sus metas'
              },
              {
                value: mockData.stats.avgWeightLoss,
                label: 'Pérdida Promedio',
                description: 'En los primeros 6 meses'
              },
              {
                value: mockData.stats.totalUsers,
                label: 'Usuarios Activos',
                description: 'Transformándose cada día'
              },
              {
                value: '4.9★',
                label: 'Calificación',
                description: 'Promedio en las tiendas'
              }
            ].map((stat, index) => (
              <div key={index} style={{
                padding: 'var(--spacing-medium)',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0, 69, 52, 0.1)'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'var(--brand-dark)',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div className="heading-3" style={{ marginBottom: '8px' }}>
                  {stat.label}
                </div>
                <div className="body-small" style={{ color: 'var(--text-light)' }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
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
          
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(350px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(200px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--spacing-medium) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;