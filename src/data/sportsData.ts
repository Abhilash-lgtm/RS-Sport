import type { Program, AcademyHub, BatchSlot, Coach, Testimonial } from '../types';

export const CONTACT_INFO = {
  phone: '+91 83310 97617',
  rawPhone: '8331097617',
  whatsappUrl: 'https://wa.me/918331097617?text=Hello%20RA%20Sports!%20I%20would%20like%20to%20know%20more%20about%20your%20youth%20sports%20programs%20and%20book%20a%20free%20trial.',
  email: 'raisingathleticssports@gmail.com',
  youtube: 'https://youtube.com/@raisingathleticssports?si=KOGDRHuiWvRVuBSp',
  youtubeHandle: '@raisingathleticssports',
  instagram: 'https://www.instagram.com/raisingathletics18?exln=MTN5cnp4NTBoajlzeA==',
  instagramHandle: '@raisingathletics18',
  facebook: 'https://www.facebook.com/share/19XUCoGRxN/',
  city: 'Hyderabad',
  operatingHours: 'Mon - Sun: 06:00 AM - 07:30 PM'
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'little-striders',
    title: 'Little Cubs & Striders',
    ageGroup: 'Ages 4 - 6',
    targetAge: [4, 6],
    badge: 'Foundation Phase',
    category: 'Grassroots',
    description: 'Inspired by early childhood motor literacy (Go Alpha & Fit Cubs models): Play-based fundamental movement skills (FMS), obstacle adventures, agility, balance, and spatial joy.',
    highlights: [
      'Locomotor games (running, galloping, skipping)',
      'Spatial awareness & hand-eye coordination',
      'Soft equipment & obstacle course adventures',
      'Confidence building & team cooperation'
    ],
    sportsCovered: ['Athletics Fundamentals', 'Gymnastics Basics', 'Mini Football', 'Play Agility'],
    schedule: '2 Sessions / Week • 45 Mins',
    duration: 'Quarterly / Annual',
    intensity: 'Low-Medium',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'junior-athletic-explorers',
    title: 'Junior Athletic Explorers',
    ageGroup: 'Ages 7 - 10',
    targetAge: [7, 10],
    badge: 'Most Popular',
    category: 'Multi-Sport',
    description: 'Multi-sport mastery and athletic conditioning that builds high sprint mechanics, cardiovascular stamina, and multi-discipline dexterity.',
    highlights: [
      'Sprint mechanics, acceleration & deceleration cuts',
      'Multi-sport exposure: Track, Football, Basketball',
      'Reaction agility ladders & plyometric hops',
      'AI biometric tracking for posture and stride rhythm'
    ],
    sportsCovered: ['Sprint & Hurdles', 'Football/Soccer', 'Basketball Basics', 'Speed Training'],
    schedule: '3 Sessions / Week • 60 Mins',
    duration: 'Quarterly / Half-Yearly',
    intensity: 'Medium',
    image: '/programs/football.jpg',
    popular: true
  },
  {
    id: 'youth-academy-pro',
    title: 'Youth Academy Pro (Track & Multi-Sport)',
    ageGroup: 'Ages 11 - 14',
    targetAge: [11, 14],
    badge: 'Specialization Track',
    category: 'Specialization',
    description: 'Sport-specific skill mastery, advanced athletic speed-power conditioning, and preparation for inter-school & state championships.',
    highlights: [
      'Specialized track events (100m, 200m, 400m, Long Jump)',
      'Advanced football tactical drills & competitive sparring',
      'Injury prevention & neuromuscular core stability',
      'Video biomechanical stride analysis'
    ],
    sportsCovered: ['Track & Field', 'Competitive Football', 'Badminton Agility', 'Strength & Core'],
    schedule: '4 Sessions / Week • 75 Mins',
    duration: 'Half-Yearly / Annual',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'elite-champions-league',
    title: 'Elite High-Performance Squad',
    ageGroup: 'Ages 15 - 18',
    targetAge: [15, 18],
    badge: 'State & National Level',
    category: 'Elite',
    description: 'High-octane athletic performance for state-level qualifiers and university sports quota aspirants with sports science support.',
    highlights: [
      'Lactate threshold & VO2 max conditioning',
      'Olympic weightlifting foundations & explosive power',
      'Individualized sports psychology & nutrition plan',
      'College athletic scholarship roadmap'
    ],
    sportsCovered: ['Sprints & Relays', 'Jump Disciplines', 'Elite Conditioning', 'Tournament Sparring'],
    schedule: '5 Sessions / Week • 90 Mins',
    duration: 'Annual Intensive',
    intensity: 'Elite',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'school-pe-partnership',
    title: 'In-School Physical Education (The Fit Cubs)',
    ageGroup: 'Grades 1 - 12',
    targetAge: [5, 17],
    badge: 'Institutional Program',
    category: 'School PE',
    description: 'Comprehensive school sports curriculum managed end-to-end with certified PE coaches, equipment, and digital parent report cards across Hyderabad schools.',
    highlights: [
      'Turnkey physical education curriculum for CBSE/ICSE/IB schools',
      'Standardized term fitness assessments (Beep test, Sit & Reach)',
      'Digital student athletic report card for parents',
      'Annual sports day & inter-house tournament management'
    ],
    sportsCovered: ['All Olympic Sports', 'Fitness Literacy', 'Yoga & Flexibility', 'Intramural Games'],
    schedule: 'Daily Integrated PE & Evening Clubs',
    duration: 'Annual School Contract',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    popular: false
  }
];

export const ACADEMY_HUBS: AcademyHub[] = [
  {
    id: 'hub-gachibowli-stadium',
    name: 'RA Hi-Tech Athletics Center',
    area: 'Gachibowli / Financial District',
    city: 'Hyderabad',
    address: 'Near Gachibowli Stadium & Bio-Diversity Park, Hyderabad',
    features: ['Full 8-Lane Synthetic Track', 'Floodlit Football Field', 'Plyometric Strength Deck', 'Hydration & Nutrition Lounge'],
    sportsAvailable: ['Track & Field', 'Football', 'Speed Agility', 'Conditioning'],
    headCoach: 'Coach Rajesh Verma (NIS Patiala Specialist)',
    activeAthletes: 420
  },
  {
    id: 'hub-jubilee-hills',
    name: 'RA Elite Performance Hub',
    area: 'Jubilee Hills / Madhapur',
    city: 'Hyderabad',
    address: 'Road No. 36, Near Cultural Center, Jubilee Hills, Hyderabad',
    features: ['Precision Biomechanics Rig', 'Speed Chute Running Corridor', 'Multi-Sport Wooden Deck'],
    sportsAvailable: ['Speed Performance', 'Basketball', 'Little Cubs', 'Youth Strength'],
    headCoach: 'Coach Ananya Reddy (Former National Sprinter)',
    activeAthletes: 380
  },
  {
    id: 'hub-kondapur-park',
    name: 'RA Alpha Athletics & Sports Park',
    area: 'Kondapur / Hitec City',
    city: 'Hyderabad',
    address: 'Near Botanical Gardens Road, Kondapur, Hyderabad',
    features: ['Grass Multi-Sport Arena', 'Kids Obstacle Course Zone', 'Olympic Sprint Straight', 'Parent Viewing Lounge'],
    sportsAvailable: ['Little Cubs', 'Sprint Athletics', 'Multi-Sport', 'Football'],
    headCoach: 'Coach Marcus D’Souza (AFC Certified)',
    activeAthletes: 310
  },
  {
    id: 'hub-kukatpally-sports',
    name: 'RA Sports Academy West',
    area: 'Kukatpally / KPHB',
    city: 'Hyderabad',
    address: 'Phase 3, Near JNTU Sports Complex, Kukatpally, Hyderabad',
    features: ['Agility Ladder Zone', 'Badminton Court', 'Sprint Track', 'Physiotherapy Screening Room'],
    sportsAvailable: ['Athletics', 'Badminton', 'Speed Agility', 'School PE Prep'],
    headCoach: 'Dr. Sneha Pillai (Pediatric Sports Physio)',
    activeAthletes: 290
  }
];

export const BATCH_SLOTS: BatchSlot[] = [
  {
    id: 'b-101',
    hubId: 'hub-gachibowli-stadium',
    hubName: 'RA Hi-Tech Athletics Center (Gachibowli)',
    sport: 'Track Athletics & Sprint Mechanics',
    ageCategory: 'Ages 7 - 10',
    days: 'Sat & Sun (Weekend)',
    time: '07:00 AM - 08:15 AM',
    coach: 'Coach Rajesh Verma',
    slotsRemaining: 3,
    totalSlots: 15
  },
  {
    id: 'b-102',
    hubId: 'hub-gachibowli-stadium',
    hubName: 'RA Hi-Tech Athletics Center (Gachibowli)',
    sport: 'Football & Agility Drills',
    ageCategory: 'Ages 11 - 14',
    days: 'Tue, Thu, Sat',
    time: '05:00 PM - 06:15 PM',
    coach: 'Coach Marcus D’Souza',
    slotsRemaining: 4,
    totalSlots: 18
  },
  {
    id: 'b-103',
    hubId: 'hub-jubilee-hills',
    hubName: 'RA Elite Performance Hub (Jubilee Hills)',
    sport: 'Speed, Agility & Quickness (SAQ)',
    ageCategory: 'Ages 7 - 10',
    days: 'Mon, Wed, Fri',
    time: '04:30 PM - 05:30 PM',
    coach: 'Coach Ananya Reddy',
    slotsRemaining: 2,
    totalSlots: 16
  },
  {
    id: 'b-104',
    hubId: 'hub-jubilee-hills',
    hubName: 'RA Elite Performance Hub (Jubilee Hills)',
    sport: 'Little Cubs (FMS & Motor Skills)',
    ageCategory: 'Ages 4 - 6',
    days: 'Sat & Sun Morning',
    time: '08:30 AM - 09:15 AM',
    coach: 'Coach Ananya Reddy',
    slotsRemaining: 2,
    totalSlots: 12
  },
  {
    id: 'b-105',
    hubId: 'hub-kondapur-park',
    hubName: 'RA Alpha Athletics & Sports Park (Kondapur)',
    sport: 'Multi-Sport Athletics & Sprint',
    ageCategory: 'Ages 6 - 12',
    days: 'Tue, Thu, Sat',
    time: '05:30 PM - 06:45 PM',
    coach: 'Coach Marcus D’Souza',
    slotsRemaining: 5,
    totalSlots: 16
  },
  {
    id: 'b-106',
    hubId: 'hub-kukatpally-sports',
    hubName: 'RA Sports Academy West (Kukatpally)',
    sport: 'Speed, Core Posture & Fitness',
    ageCategory: 'Ages 8 - 14',
    days: 'Mon, Wed, Fri',
    time: '05:00 PM - 06:15 PM',
    coach: 'Dr. Sneha Pillai',
    slotsRemaining: 4,
    totalSlots: 15
  }
];

export const COACHES: Coach[] = [
  {
    name: 'Rajesh Verma',
    role: 'Chief Technical Director & Head of Athletics',
    credentials: 'NIS Patiala Certified, World Athletics Coach Level II',
    experience: '14+ Years in Youth Elite Development',
    specialty: 'Sprint Biomechanics & Junior Olympiad Prep',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Ananya Reddy',
    role: 'Head of Speed, Agility & Female Youth Athletics',
    credentials: 'Ex-National 200m Gold Medalist, Master in Sports Science',
    experience: '9+ Years Coaching School & State Teams',
    specialty: 'Agility Ladders, Stride Efficiency & Athletic Nutrition',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Marcus D’Souza',
    role: 'Head of Multi-Sport & Football Academy',
    credentials: 'AFC ‘B’ License, Certified Pediatric Movement Coach',
    experience: '11+ Years Youth Academy Coaching',
    specialty: 'Ball Mastery, Game Intelligence & Speed Endurance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dr. Sneha Pillai',
    role: 'Pediatric Sports Physiotherapist & Biomechanist',
    credentials: 'MPT (Sports Medicine), Dry Needling & Posture Specialist',
    experience: '8+ Years Youth Sports Injury Prevention',
    specialty: 'Postural Alignment, Knee Stability & Growth Spurts',
    image: 'https://images.unsplash.com/photo-1594824813593-a9d59ec5e39d?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    parentName: 'Priya & Sandeep Kulkarni',
    childName: 'Aarav (Age 9)',
    childAge: 9,
    sport: 'Junior Athletic Explorers',
    school: 'Oakridge International School, Hyderabad',
    rating: 5,
    text: 'Aarav was hooked to tablets and had poor posture. Within 4 months at RA Sports Gachibowli, his 50m sprint time dropped by 1.8 seconds, and his school coach selected him for the inter-school relay! The AI assessment report they provided was eye-opening for us parents.',
    improvementStat: '+38% Stamina',
    metric: '1.8s faster 50m sprint'
  },
  {
    id: 't-2',
    parentName: 'Col. Rohit Mehra',
    childName: 'Zara (Age 12)',
    childAge: 12,
    sport: 'Youth Academy Pro (Track & Field)',
    school: 'Chirec International School, Hyderabad',
    rating: 5,
    text: 'The scientific approach here is unlike regular hobby clubs. The coaches measure ground contact time, cadence, and core power. Zara won Bronze at the District Athletics meet last month. RA Sports truly delivers on "Stronger Kids, Healthier Futures".',
    improvementStat: 'District Bronze',
    metric: '100m in 13.9s'
  },
  {
    id: 't-3',
    parentName: 'Dr. Neha Shenoy',
    childName: 'Kabir (Age 6)',
    childAge: 6,
    sport: 'Little Cubs (Grassroots)',
    school: 'Hyderabad Public School (HPS)',
    rating: 5,
    text: 'As a pediatrician, I am very cautious about early sports specialization. RA Sports’ emphasis on playful fundamental movement skills and positive encouragement is gold standard. Kabir wakes up excited for Saturday morning training!',
    improvementStat: '100% Enthusiasm',
    metric: 'Zero injuries, stellar balance'
  }
];

export const FAQ_DATA = [
  {
    q: 'At what age can my child join RA Sports?',
    a: 'We welcome young athletes starting from age 4 in our Little Cubs foundation group, through to age 18 in our Elite Championship Squad. Each curriculum is tailored to the child\'s physiological growth stage.'
  },
  {
    q: 'Where are your academy centers located in Hyderabad?',
    a: 'We operate prime sports training centers in Gachibowli, Jubilee Hills, Kondapur, and Kukatpally, as well as in-school partnerships with top Hyderabad international schools.'
  },
  {
    q: 'How does RA Sports use AI in youth training?',
    a: 'We use AI in three transformative ways: 1) AI Athletic Assessment Engine that calculates developmental percentiles and custom drill roadmaps; 2) Biomechanical Form Analysis using camera pose-estimation to refine sprint strides and jump landings; 3) 24/7 AI Coach Assistant for parents on pediatric nutrition, rest, and sports guidance.'
  },
  {
    q: 'Is a free trial session really complimentary?',
    a: 'Yes! We invite every child to a complimentary 60-minute diagnostic session where our certified coaches evaluate their natural movement patterns, and parents receive an instant AI Athletic Score.'
  },
  {
    q: 'How can I connect with your coaches directly?',
    a: 'You can call or WhatsApp our head office directly at +91 83310 97617, email us at raisingathleticssports@gmail.com, or check out our daily drills on YouTube (@raisingathleticssports) and Instagram (@raisingathletics18).'
  }
];
