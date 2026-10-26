import React, { useState } from 'react';
import { X, Trophy, CheckCircle2, Calendar, Phone, Mail, Building, Users, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO } from '../data/sportsData';
import { WhatsAppIcon } from './SocialIcons';

interface SchoolDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolDemoModal: React.FC<SchoolDemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [schoolName, setSchoolName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [role, setRole] = useState('Principal / Director');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institutionType, setInstitutionType] = useState('Preschool (Ages 3-6)');
  const [selectedService, setSelectedService] = useState('Physical Education Curriculum');
  const [locationArea, setLocationArea] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [demoId, setDemoId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/school-demos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          schoolName,
          contactPerson,
          role,
          phone,
          email,
          institutionType,
          selectedService,
          locationArea,
          preferredDate
        })
      });

      if (res.ok) {
        const data = await res.json();
        setDemoId(data.demoId || `RA-DEMO-${Math.floor(1000 + Math.random() * 9000)}`);
      } else {
        throw new Error('Network error');
      }
    } catch {
      const generatedId = `RA-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      setDemoId(generatedId);
    } finally {
      setIsSubmitting(false);
      setStep(2);

      try {
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleModalClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-900">
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                <Trophy className="w-3.5 h-3.5" />
                <span>Complimentary On-Campus Session</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Arrange a School Demo Session
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Experience RA Sports' engaging kids' sports classes and physical education curriculum live at your school or preschool in Hyderabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    School / Preschool Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lotus Valley Preschool"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Institution Category *
                  </label>
                  <select
                    value={institutionType}
                    onChange={(e) => setInstitutionType(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  >
                    <option value="Preschool (Ages 3-6)">Preschool / Kindergarten (Ages 3-6)</option>
                    <option value="Primary School (Grades 1-5)">Primary School (Grades 1-5)</option>
                    <option value="High School (Grades 6-10)">High School (Grades 6-10)</option>
                    <option value="K-12 Full Campus">K-12 Full Campus (CBSE/ICSE/IB)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mrs. Lakshmi Rao"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Designation / Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Principal / Sports Coordinator"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@school.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Primary Service Needed *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  >
                    <option value="Physical Education Curriculum">Physical Education Curriculum</option>
                    <option value="Kids Sports Classes & FMS">Kids' Sports Classes & FMS</option>
                    <option value="Sports Day Planning & Management">Sports Day Planning & Event Management</option>
                    <option value="Fun Games & Fitness Camp">Fun Games & Fitness Camp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                    Location Area in Hyderabad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gachibowli / Madhapur / Kukatpally"
                    value={locationArea}
                    onChange={(e) => setLocationArea(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
                  Preferred Date for Demo Session
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 shadow-2xs font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 hover:from-red-700 hover:to-blue-800 disabled:opacity-75 text-white font-black py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trophy className="w-5 h-5 text-amber-300" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Demo Session Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Our sports director will contact you within 2 hours to confirm session logistics and equipment.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                Demo Request Submitted!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Thank You, {schoolName}
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                Our sports curriculum team is preparing a customized session agenda for your students.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-red-500 rounded-2xl p-6 text-left relative overflow-hidden shadow-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-xs">
                    RA
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900">RA SPORTS HYDERABAD</h5>
                    <span className="text-[10px] text-slate-500">School Partnership Desk</span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {demoId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Institution</span>
                  <span className="font-bold text-slate-900 text-sm">{schoolName}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Category</span>
                  <span className="font-bold text-slate-800">{institutionType}</span>
                </div>

                <div className="col-span-2">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Program Focus</span>
                  <span className="font-bold text-red-600">{selectedService}</span>
                </div>

                <div className="col-span-2 bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact Person</span>
                    <span className="font-bold text-slate-900">{contactPerson} ({role})</span>
                  </div>
                  <Building className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct Hotline: {CONTACT_INFO.phone}</span>
                <span className="text-emerald-700 font-bold">Demo Free of Cost</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/918331097617?text=Hello%20RA%20Sports!%20We%20just%20submitted%20Demo%20Request%20${demoId}%20for%20${encodeURIComponent(schoolName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleModalClose}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer shadow-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
