// Mock data for Fitness App Landing Page

export const mockData = {
  // App Statistics
  stats: {
    totalUsers: '100,000+',
    workoutsCompleted: '2.5M+',
    avgWeightLoss: '12kg',
    successRate: '94%'
  },

  // Featured Workouts
  featuredWorkouts: [
    {
      id: 1,
      name: 'HIIT Cardio Blast',
      duration: '20 min',
      difficulty: 'Intermediate',
      calories: '300-400',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Strength Building',
      duration: '45 min',
      difficulty: 'Advanced',
      calories: '400-500',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Yoga Flow',
      duration: '30 min',
      difficulty: 'Beginner',
      calories: '150-200',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ],

  // Progress Tracking Metrics
  progressMetrics: [
    {
      id: 1,
      title: 'Weekly Workouts',
      value: '5/7',
      percentage: 71,
      trend: 'up',
      color: '#D3FF62'
    },
    {
      id: 2,
      title: 'Calories Burned',
      value: '2,340',
      percentage: 85,
      trend: 'up',
      color: '#004534'
    },
    {
      id: 3,
      title: 'Protein Intake',
      value: '125g',
      percentage: 92,
      trend: 'up',
      color: '#0C6951'
    },
    {
      id: 4,
      title: 'Sleep Quality',
      value: '7.5h',
      percentage: 78,
      trend: 'up',
      color: '#CACAFC'
    }
  ],

  // User Testimonials
  testimonials: [
    {
      id: 1,
      name: 'María González',
      age: 29,
      location: 'Madrid, España',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      beforeWeight: '78kg',
      afterWeight: '63kg',
      timeframe: '4 meses',
      rating: 5
    },
    {
      id: 2,
      name: 'James Miller',
      age: 35,
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      beforeWeight: '95kg',
      afterWeight: '82kg',
      timeframe: '6 months',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      age: 26,
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      beforeWeight: '70kg',
      afterWeight: '58kg',
      timeframe: '5 mois',
      rating: 5
    }
  ],

  // Meal Plans
  mealPlans: [
    {
      id: 1,
      name: 'High Protein',
      calories: 1800,
      protein: '140g',
      carbs: '150g',
      fats: '65g',
      meals: 6
    },
    {
      id: 2,
      name: 'Weight Loss',
      calories: 1500,
      protein: '120g',
      carbs: '120g',
      fats: '50g',
      meals: 5
    },
    {
      id: 3,
      name: 'Muscle Gain',
      calories: 2200,
      protein: '180g',
      carbs: '200g',
      fats: '80g',
      meals: 6
    }
  ],

  // Community Challenges
  challenges: [
    {
      id: 1,
      title: '30-Day Fitness Challenge',
      participants: 15420,
      daysLeft: 12,
      reward: 'Premium Badge',
      difficulty: 'Intermediate',
      type: 'Monthly'
    },
    {
      id: 2,
      title: 'Summer Shred',
      participants: 8750,
      daysLeft: 5,
      reward: '50% Off Premium',
      difficulty: 'Advanced',
      type: 'Weekly'
    },
    {
      id: 3,
      title: 'Beginner Bootcamp',
      participants: 12300,
      daysLeft: 18,
      reward: 'Nutrition Guide',
      difficulty: 'Beginner',
      type: 'Monthly'
    }
  ],

  // App Features
  features: [
    {
      id: 1,
      title: 'Personal Training',
      description: 'AI-powered workout plans tailored to your fitness level and goals.',
      benefits: [
        'Customized routines',
        'Progressive difficulty',
        'Real-time form correction',
        '500+ exercises'
      ]
    },
    {
      id: 2,
      title: 'Nutrition Tracking',
      description: 'Comprehensive meal planning and macro tracking for optimal results.',
      benefits: [
        'Barcode scanner',
        'Recipe database',
        'Macro calculator',
        'Water intake tracking'
      ]
    },
    {
      id: 3,
      title: 'Community Challenges',
      description: 'Stay motivated with group challenges and social fitness features.',
      benefits: [
        'Weekly challenges',
        'Leaderboards',
        'Social sharing',
        'Achievement badges'
      ]
    }
  ],

  // Download stats
  downloadStats: {
    appStore: '4.8★ (25K reviews)',
    googlePlay: '4.9★ (18K reviews)',
    totalDownloads: '500K+',
    countries: 120
  }
};