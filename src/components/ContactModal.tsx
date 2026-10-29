import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultProgram,
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    program: defaultProgram || 'Athletics',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow parent to see confirmation
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello RA Sports! I am interested in enrolling my child ${formData.childName || ''} (${formData.childAge ? formData.childAge + ' yrs' : ''}) in the ${formData.program} program. Please provide more details.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
            </div>
            <h3 className="text-2xl font-black text-[#0f264a]">Thank You!</h3>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              Our RA Sports coaches will reach out to you within 24 hours to schedule your child's orientation session.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-full font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="text-[#96162e] font-bold text-xs uppercase tracking-widest mb-1">
                GET IN TOUCH
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f264a]">
                Enroll in RA Sports
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Start your child's joyful fitness journey in Hyderabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Aarav"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Child's Age (Years)</label>
                  <input
                    type="number"
                    min="3"
                    max="17"
                    placeholder="e.g. 7"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Interested Program</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e] bg-white font-medium text-slate-800"
                >
                  <option value="Athletics">Athletics (Speed • Stamina • Confidence)</option>
                  <option value="Badminton">Badminton (Agility • Focus • Fun)</option>
                  <option value="Yoga">Yoga (Balance • Calm • Flexibility)</option>
                  <option value="Basketball">Basketball (Coordination • Teamwork • Skills)</option>
                  <option value="Football">Football (Discipline • Fitness • Team Spirit)</option>
                  <option value="Gymnastics">Gymnastics (Strength • Flexibility • Balance)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Location / Locality in Hyderabad</label>
                <input
                  type="text"
                  placeholder="e.g. Gachibowli, Madhapur, Jubilee Hills"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#96162e] focus:ring-1 focus:ring-[#96162e]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#96162e] hover:bg-[#7e1226] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
