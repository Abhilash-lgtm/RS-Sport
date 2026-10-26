import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../../types';
import { Bot, Send, Volume2, VolumeX, User, ArrowRight, Trophy } from 'lucide-react';

interface AICoachAssistantProps {
  onOpenTrialModal?: () => void;
  onNavigateToSchedule?: () => void;
}

const KNOWLEDGE_RESPONSES: { keywords: string[]; answer: string; action?: { label: string; action: string } }[] = [
  {
    keywords: ['snack', 'food', 'nutrition', 'diet', 'eat', 'banana'],
    answer: "For growing young athletes (ages 5-15), timing is crucial:\n\n🍌 **45 Mins Before Training:** Easily digestible carbohydrates like a banana, 2 medjool dates, or half a peanut butter toast. Avoid heavy dairy or fried items.\n\n💧 **Hydration:** 150ml of water 15 minutes before running, plus small sips every 15 minutes.\n\n🥛 **30 Mins Post-Workout:** High-protein muscle repair window! Fresh tender coconut water + a boiled egg, homemade paneer sandwich, or a Greek yogurt smoothie with chia seeds.",
    action: { label: 'Book Nutrition Diagnostic Trial', action: 'trial' }
  },
  {
    keywords: ['shoes', 'footwear', 'spikes', 'gear', 'running shoe'],
    answer: "Footwear guidance for growing feet:\n\n👟 **Ages 4 - 10:** Multi-sport running shoes with a wide toe box, flexible forefoot, and zero rigid carbon plates. Their growth plates need natural foot articulation.\n\n🏃 **Ages 11+ (Track Sprinters):** Transition to sprint spikes only on synthetic tracks and under coach supervision, keeping spike pins at 6mm pyramid length. For hard turf or asphalt, use cushioned neutral trainers.",
    action: { label: 'Explore Track Academy Batches', action: 'batches' }
  },
  {
    keywords: ['overtraining', 'tired', 'fatigue', 'sore', 'injury', 'pain', 'shin'],
    answer: "Watch for the **Rule of 3 Warning Signs** in young athletes:\n\n1. **Loss of Enthusiasm:** Reluctance to attend training they normally love.\n2. **Persistent Morning Aches:** Localized pain in the heel (Sever's condition) or below the kneecap (Osgood-Schlatter) after growth spurts.\n3. **Sleep Disturbances:** Restless sleep or waking up sluggish.\n\n💡 **Coach Protocol:** Children need at least 2 full rest days per week, 9-10 hours of uninterrupted sleep, and active stretching.",
    action: { label: 'Schedule Pediatric Coach Review', action: 'trial' }
  },
  {
    keywords: ['speed', 'sprint', 'fast', 'stride', 'mechanics', 'drill', 'run'],
    answer: "Top 3 at-home drills to develop sprint speed without heavy weights:\n\n1. **Wall Acceleration Drills (45° Lean):** Hold a wall at 45 degrees, drive knees up to 90 degrees with dorsiflexed toes (toes pointed up). Do 3 sets of 10 rapid switches.\n2. **A-Skips & High Knees:** Teaches explosive ground strike directly under the center of mass.\n3. **10m Flying Sprints:** Have them accelerate smoothly for 15m, then sprint at 100% effort for just 10m with full 2-minute recovery walk between reps.",
    action: { label: 'View Sprint Academy Batches', action: 'batches' }
  },
  {
    keywords: ['school', 'fit cubs', 'pt', 'curriculum', 'pe', 'physical education'],
    answer: "Unlike traditional school PT where 40 kids stand in lines waiting for a single ball, **RA Sports In-School Excellence Curriculum** guarantees:\n\n✅ 100% active movement time (zero idle standing)\n✅ Standardized WHO/CDC motor development assessments\n✅ Term-end digital athletic report cards for parents\n✅ Olympic-grade equipment designed safely for child biomechanics.",
    action: { label: 'Partner Your Child’s School', action: 'trial' }
  },
  {
    keywords: ['fee', 'cost', 'price', 'trial', 'joining', 'register'],
    answer: "Our complimentary 60-minute diagnostic session is 100% free! During this trial, our certified coaches evaluate your child's sprint mechanics, agility, and flexibility. Regular academy programs range from ₹2,400 to ₹4,800/month depending on 2x, 3x, or 5x weekly sessions.",
    action: { label: 'Book 100% Free Trial Session', action: 'trial' }
  }
];

export const AICoachAssistant: React.FC<AICoachAssistantProps> = ({
  onOpenTrialModal,
  onNavigateToSchedule
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'coach',
      text: "Hello! I am Coach RA, your 24/7 AI Youth Athletic & Performance Advisor. Ask me anything about sprint mechanics, pediatric nutrition, shoe selection, at-home drills, or booking a free trial!",
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const speakText = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok) {
        const data = await res.json();
        const reply = data.reply;
        const action = data.actionButton || {
          label: 'Book Complimentary Trial Session',
          action: 'trial'
        };

        const coachMsg: ChatMessage = {
          id: `c-${Date.now()}`,
          sender: 'coach',
          text: reply,
          timestamp: 'Just now',
          actionButton: action
        };

        setMessages((prev) => [...prev, coachMsg]);
        if (speechEnabled) {
          speakText(reply);
        }
        return;
      }
      throw new Error('API offline');
    } catch {
      // Local fallback
      const lower = query.toLowerCase();
      const matchedResponse = KNOWLEDGE_RESPONSES.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      const reply = matchedResponse
        ? matchedResponse.answer
        : `Great question regarding young athlete development! For "${query}", our certified coaches emphasize the Long-Term Athlete Development (LTAD) model: age-appropriate motor skills, neuromuscular agility, and positive reinforcement. I recommend attending a complimentary diagnostic trial where our NIS/World Athletics coaches can evaluate your child firsthand!`;

      const action = matchedResponse?.action || {
        label: 'Book Complimentary Trial Session',
        action: 'trial'
      };

      const coachMsg: ChatMessage = {
        id: `c-${Date.now()}`,
        sender: 'coach',
        text: reply,
        timestamp: 'Just now',
        actionButton: action
      };

      setMessages((prev) => [...prev, coachMsg]);
      if (speechEnabled) {
        speakText(reply);
      }
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionButton = (action: string) => {
    if (action === 'trial') {
      onOpenTrialModal && onOpenTrialModal();
    } else if (action === 'batches') {
      onNavigateToSchedule && onNavigateToSchedule();
    }
  };

  const samplePrompts = [
    '🍌 Best pre-training snack for a 9yo?',
    '🏃 What shoes for a 7yo track runner?',
    '⚠️ How to prevent shin splints in kids?',
    '⚡ Quick home drills to improve 50m sprint',
    '🏫 How RA Sports compares to school PT'
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-600/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">Ask Coach RA</h3>
              <span className="flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                Online 24/7
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm">
              Pediatric Sports Science & Academy Advisor powered by RA Athletic Intelligence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (speechEnabled) {
                window.speechSynthesis?.cancel();
              }
              setSpeechEnabled(!speechEnabled);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              speechEnabled
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {speechEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-600" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{speechEnabled ? 'Voice Guidance On' : 'Enable Voice'}</span>
          </button>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-400 font-semibold uppercase">Popular Topics:</span>
        {samplePrompts.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(p.slice(2).trim())}
            className="text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-full border border-slate-200 transition-colors shadow-2xs cursor-pointer font-medium"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 sm:p-6 h-[380px] overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'coach' && (
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 mt-1 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
              }`}
            >
              <div className="whitespace-pre-line">{m.text}</div>

              {m.actionButton && (
                <button
                  type="button"
                  onClick={() => handleActionButton(m.actionButton!.action)}
                  className="mt-3 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-300" />
                  <span>{m.actionButton.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {m.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-blue-700 flex items-center justify-center text-white shrink-0 mt-1 shadow-xs">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-2xl w-fit border border-slate-200 shadow-xs">
            <Bot className="w-4 h-4 text-blue-600 animate-spin" />
            <span>Coach RA is formulating athletic advice...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="mt-4 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask Coach RA about sprint posture, diet, training frequency, or trial booking..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 bg-white border border-slate-300 rounded-2xl px-5 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-2xs"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-2xl transition-colors cursor-pointer shrink-0 shadow-sm shadow-blue-600/20"
          title="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
