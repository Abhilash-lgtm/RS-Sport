import { Router, Request, Response } from 'express';

export const coachRouter = Router();

const KNOWLEDGE_BASE = [
  {
    keywords: ['snack', 'food', 'nutrition', 'diet', 'eat', 'banana', 'meal', 'protein'],
    answer: "For growing young athletes (ages 5-15), timing is crucial:\n\n🍌 **45 Mins Before Training:** Easily digestible carbohydrates like a banana, 2 medjool dates, or half a peanut butter toast. Avoid heavy dairy or fried items.\n\n💧 **Hydration:** 150ml of water 15 minutes before running, plus small sips every 15 minutes.\n\n🥛 **30 Mins Post-Workout:** High-protein muscle repair window! Fresh tender coconut water + a boiled egg, homemade paneer sandwich, or a Greek yogurt smoothie with chia seeds.",
    action: { label: 'Book Nutrition Diagnostic Trial', action: 'trial' }
  },
  {
    keywords: ['shoe', 'footwear', 'spike', 'gear', 'running shoe', 'cleat'],
    answer: "Footwear guidance for growing feet:\n\n👟 **Ages 4 - 10:** Multi-sport running shoes with a wide toe box, flexible forefoot, and zero rigid carbon plates. Their growth plates need natural foot articulation.\n\n🏃 **Ages 11+ (Track Sprinters):** Transition to sprint spikes only on synthetic tracks and under coach supervision, keeping spike pins at 6mm pyramid length. For hard turf or asphalt, use cushioned neutral trainers.",
    action: { label: 'Explore Track Academy Batches', action: 'batches' }
  },
  {
    keywords: ['overtraining', 'tired', 'fatigue', 'sore', 'injury', 'pain', 'shin', 'rest'],
    answer: "Watch for the **Rule of 3 Warning Signs** in young athletes:\n\n1. **Loss of Enthusiasm:** Reluctance to attend training they normally love.\n2. **Persistent Morning Aches:** Localized pain in the heel (Sever's condition) or below the kneecap (Osgood-Schlatter) after growth spurts.\n3. **Sleep Disturbances:** Restless sleep or waking up sluggish.\n\n💡 **Coach Protocol:** Children need at least 2 full rest days per week, 9-10 hours of uninterrupted sleep, and active stretching.",
    action: { label: 'Schedule Pediatric Coach Review', action: 'trial' }
  },
  {
    keywords: ['speed', 'sprint', 'fast', 'stride', 'mechanics', 'drill', 'run', 'acceleration'],
    answer: "Top 3 at-home drills to develop sprint speed without heavy weights:\n\n1. **Wall Acceleration Drills (45° Lean):** Hold a wall at 45 degrees, drive knees up to 90 degrees with dorsiflexed toes. Do 3 sets of 10 rapid switches.\n2. **A-Skips & High Knees:** Teaches explosive ground strike directly under the center of mass.\n3. **10m Flying Sprints:** Have them accelerate smoothly for 15m, then sprint at 100% effort for just 10m with full 2-minute recovery walk between reps.",
    action: { label: 'View Sprint Academy Batches', action: 'batches' }
  },
  {
    keywords: ['school', 'fit cubs', 'pt', 'curriculum', 'pe', 'physical education', 'partner'],
    answer: "Unlike traditional school PT where 40 kids stand in lines waiting for a single ball, **RA Sports In-School Excellence Curriculum** guarantees:\n\n✅ 100% active movement time (zero idle standing)\n✅ Standardized WHO/CDC motor development assessments\n✅ Term-end digital athletic report cards for parents\n✅ Olympic-grade equipment designed safely for child biomechanics.",
    action: { label: 'Partner Your Child’s School', action: 'trial' }
  },
  {
    keywords: ['fee', 'cost', 'price', 'trial', 'joining', 'register', 'subscription'],
    answer: "Our complimentary 60-minute diagnostic session is 100% free! During this trial, our certified coaches evaluate your child's sprint mechanics, agility, and flexibility. Regular academy programs range from ₹2,400 to ₹4,800/month depending on 2x, 3x, or 5x weekly sessions.",
    action: { label: 'Book 100% Free Trial Session', action: 'trial' }
  }
];

coachRouter.post('/chat', (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message string is required' });
    return;
  }

  const query = message.toLowerCase();
  const matched = KNOWLEDGE_BASE.find(item =>
    item.keywords.some(kw => query.includes(kw))
  );

  if (matched) {
    res.json({
      reply: matched.answer,
      actionButton: matched.action,
      source: 'expert-coach-engine'
    });
  } else {
    res.json({
      reply: `Great athletic question! At RA Sports, our NIS & World Athletics coaches tailor all drills to the child's developmental phase. For '${message}', we recommend beginning with an in-person movement screening to measure functional range and ground reaction time.`,
      actionButton: { label: 'Book Complimentary Diagnostic Trial', action: 'trial' },
      source: 'coach-advisor'
    });
  }
});
