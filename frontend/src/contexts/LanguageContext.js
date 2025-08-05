import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      // Navigation
      features: 'Características',
      download: 'Descargar',
      
      // Hero Section
      heroTitle: 'Tu Compañero Personal de Fitness',
      heroSubtitle: 'Transforma tu cuerpo con entrenamientos personalizados, seguimiento nutricional y retos comunitarios. Todo en una sola app.',
      downloadApp: 'Descargar la App',
      watchDemo: 'Ver Demo',
      
      // Features
      featuresTitle: 'Todo lo que Necesitas para Estar en Forma',
      personalTraining: 'Entrenamiento Personal',
      personalTrainingDesc: 'Rutinas personalizadas adaptadas a tus objetivos y nivel de condición física.',
      nutritionTracking: 'Seguimiento Nutricional',
      nutritionTrackingDesc: 'Planifica comidas y rastrea tu ingesta diaria para una nutrición óptima.',
      communityFeature: 'Retos Comunitarios',
      communityFeatureDesc: 'Únete a desafíos grupales y mantente motivado con otros usuarios.',
      
      // Progress Section
      progressTitle: 'Sigue Tu Progreso Como Nunca Antes',
      progressSubtitle: 'Visualiza tu transformación con métricas detalladas y reportes inteligentes',
      workoutStats: 'Estadísticas de Entrenamiento',
      nutritionMetrics: 'Métricas Nutricionales',
      bodyProgress: 'Progreso Corporal',
      
      // Testimonials
      testimonialsTitle: 'Lo que Dicen Nuestros Usuarios',
      testimonial1: 'Esta app cambió completamente mi rutina de ejercicios. He perdido 15kg en 4 meses.',
      testimonial2: 'El seguimiento nutricional es increíble. Finalmente entiendo lo que como.',
      testimonial3: 'Los retos comunitarios me mantienen súper motivada. ¡Es adictivo!',
      
      // CTA Section
      ctaTitle: '¿Listo para Transformar tu Vida?',
      ctaSubtitle: 'Únete a más de 100,000 usuarios que ya están alcanzando sus objetivos de fitness',
      startFree: 'Comenzar Gratis',
      
      // Footer
      about: 'Acerca de',
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      footerText: 'Tu compañero definitivo para una vida más saludable'
    },
    en: {
      // Navigation
      features: 'Features',
      download: 'Download',
      
      // Hero Section
      heroTitle: 'Your Personal Fitness Companion',
      heroSubtitle: 'Transform your body with personalized workouts, nutrition tracking, and community challenges. All in one app.',
      downloadApp: 'Download App',
      watchDemo: 'Watch Demo',
      
      // Features
      featuresTitle: 'Everything You Need to Get Fit',
      personalTraining: 'Personal Training',
      personalTrainingDesc: 'Customized routines tailored to your goals and fitness level.',
      nutritionTracking: 'Nutrition Tracking',
      nutritionTrackingDesc: 'Plan meals and track your daily intake for optimal nutrition.',
      communityFeature: 'Community Challenges',
      communityFeatureDesc: 'Join group challenges and stay motivated with other users.',
      
      // Progress Section
      progressTitle: 'Track Your Progress Like Never Before',
      progressSubtitle: 'Visualize your transformation with detailed metrics and smart reports',
      workoutStats: 'Workout Statistics',
      nutritionMetrics: 'Nutrition Metrics',
      bodyProgress: 'Body Progress',
      
      // Testimonials
      testimonialsTitle: 'What Our Users Say',
      testimonial1: 'This app completely changed my workout routine. I\'ve lost 15kg in 4 months.',
      testimonial2: 'The nutrition tracking is amazing. I finally understand what I eat.',
      testimonial3: 'Community challenges keep me super motivated. It\'s addictive!',
      
      // CTA Section
      ctaTitle: 'Ready to Transform Your Life?',
      ctaSubtitle: 'Join over 100,000 users who are already achieving their fitness goals',
      startFree: 'Start Free',
      
      // Footer
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      footerText: 'Your ultimate companion for a healthier life'
    },
    fr: {
      // Navigation
      features: 'Fonctionnalités',
      download: 'Télécharger',
      
      // Hero Section
      heroTitle: 'Votre Compagnon Fitness Personnel',
      heroSubtitle: 'Transformez votre corps avec des entraînements personnalisés, un suivi nutritionnel et des défis communautaires. Tout dans une seule app.',
      downloadApp: 'Télécharger l\'App',
      watchDemo: 'Voir Démo',
      
      // Features
      featuresTitle: 'Tout ce dont Vous Avez Besoin pour être en Forme',
      personalTraining: 'Entraînement Personnel',
      personalTrainingDesc: 'Routines personnalisées adaptées à vos objectifs et niveau de forme.',
      nutritionTracking: 'Suivi Nutritionnel',
      nutritionTrackingDesc: 'Planifiez vos repas et suivez votre consommation quotidienne pour une nutrition optimale.',
      communityFeature: 'Défis Communautaires',
      communityFeatureDesc: 'Rejoignez des défis de groupe et restez motivé avec d\'autres utilisateurs.',
      
      // Progress Section
      progressTitle: 'Suivez Votre Progrès Comme Jamais Auparavant',
      progressSubtitle: 'Visualisez votre transformation avec des métriques détaillées et des rapports intelligents',
      workoutStats: 'Statistiques d\'Entraînement',
      nutritionMetrics: 'Métriques Nutritionnelles',
      bodyProgress: 'Progrès Corporel',
      
      // Testimonials
      testimonialsTitle: 'Ce que Disent nos Utilisateurs',
      testimonial1: 'Cette app a complètement changé ma routine d\'exercice. J\'ai perdu 15kg en 4 mois.',
      testimonial2: 'Le suivi nutritionnel est incroyable. Je comprends enfin ce que je mange.',
      testimonial3: 'Les défis communautaires me gardent super motivée. C\'est addictif!',
      
      // CTA Section
      ctaTitle: 'Prêt à Transformer Votre Vie?',
      ctaSubtitle: 'Rejoignez plus de 100 000 utilisateurs qui atteignent déjà leurs objectifs fitness',
      startFree: 'Commencer Gratuitement',
      
      // Footer
      about: 'À Propos',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      contact: 'Contact',
      footerText: 'Votre compagnon ultime pour une vie plus saine'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};