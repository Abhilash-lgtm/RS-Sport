import React, { useState } from 'react';
import { X, Trophy, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACADEMY_HUBS } from '../data/sportsData';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProgram?: string;
  prefilledAthlete?: { name: string; age: number; sport: string };
  prefilledBatch?: { hubName: string; sport: string; time: string; days: string };
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  prefilledProgram,
  prefilledAthlete,
  prefilledBatch
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState(prefilledAthlete?.name || '');
  const [childAge, setChildAge] = useState(prefilledAthlete?.age || 8);
  const [phone, setPhone] = useState('');
  const [selectedHub, setSelectedHub] = useState(prefilledBatch?.hubName || ACADEMY_HUBS[0].name);
  const [selectedSport, setSelectedSport] = useState(
    prefilledBatch?.sport || prefilledAthlete?.sport || prefilledProgram || 'Athletics & Sprint Mechanics'
  );
  const [preferredSlot, setPreferredSlot] = useState(
    prefilledBatch ? `${prefilledBatch.days} (${prefilledBatch.time})` : 'Upcoming Saturday 07:30 AM'
  );

  const [bookingPass, setBookingPass] = useState<{
    id: string;
    athlete: string;
    hub: string;
    sport: string;
    slot: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const passId = `RA-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingPass({
      id: passId,
      athlete: childName.trim() || 'Young Athlete',
      hub: selectedHub,
      sport: selectedSport,
      slot: preferredSlot
    });
    setStep(2);

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }
  };

  const handleModalClose = () => {
    setStep(1);
    setBookingPass(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-900">
        {/* Close button */}
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                <Trophy className="w-3.5 h-3.5" />
                <span>100% Complimentary Diagnostic Session</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Book Your Child’s Free Trial</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                60-minute movement screening with certified NIS/World Athletics coaches. Includes an instant AI Athletic Scorecard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Advait Singh"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Child's Age (Years) *
                  </label>
                  <input
                    type="number"
                    min="4"
                    max="17"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Singh"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                  Select Academy Center *
                </label>
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                >
                  {ACADEMY_HUBS.map((hub) => (
                    <option key={hub.id} value={hub.name}>
                      {hub.name} ({hub.city} - {hub.area})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Preferred Sport / Focus *
                  </label>
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  >
                    <option value="Football">Football (Ball control & teamwork)</option>
                    <option value="Athletics">Athletics (Running, jumping & speed)</option>
                    <option value="Basketball">Basketball (Dribbling, shooting & team play)</option>
                    <option value="Cricket">Cricket (Batting, bowling & fielding)</option>
                    <option value="Gymnastics">Gymnastics (Strength, flexibility & balance)</option>
                    <option value="Fun Fitness & Movement">Fun Fitness & Movement</option>
                    <option value="Sports Skill Development">Sports Skill Development</option>
                    <option value="Multi-Sport Diagnostic">Multi-Sport Diagnostic Screening</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  >
                    <option value="Upcoming Saturday 07:30 AM">Saturday Morning (07:30 AM)</option>
                    <option value="Upcoming Saturday 05:00 PM">Saturday Evening (05:00 PM)</option>
                    <option value="Upcoming Sunday 08:00 AM">Sunday Morning (08:00 AM)</option>
                    <option value="Upcoming Tuesday 05:00 PM">Weekday Evening (05:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-black py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm Free Trial Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  No credit card required. A confirmation SMS & WhatsApp pass will be dispatched instantly.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Digital Athletic Pass Generated */
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                Registration Confirmed!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Your Child’s Free Trial Pass is Ready
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Please present this digital pass or mention Pass ID at the academy registration desk.
              </p>
            </div>

            {/* Clean Digital Pass Card */}
            <div className="bg-slate-50 border-2 border-red-500 rounded-2xl p-6 text-left relative overflow-hidden shadow-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-xs shadow-xs">
                    RA
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900">RA SPORTS ACADEMY</h5>
                    <span className="text-[10px] text-slate-500">Diagnostic Entry Pass</span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {bookingPass?.id}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Athlete</span>
                  <span className="font-bold text-slate-900 text-sm">{bookingPass?.athlete}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Sport / Drill</span>
                  <span className="font-bold text-red-600">{bookingPass?.sport}</span>
                </div>

                <div className="col-span-2">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Academy Venue</span>
                  <span className="font-medium text-slate-700">{bookingPass?.hub}</span>
                </div>

                <div className="col-span-2 bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Reserved Slot</span>
                    <span className="font-bold text-emerald-700">{bookingPass?.slot}</span>
                  </div>
                  <Calendar className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Wear sports shoes & bring a water bottle.</span>
                <span className="text-blue-700 font-bold">100% Free Trial</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer border border-slate-200"
              >
                Print / Save Pass
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer shadow-sm shadow-red-600/20"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
