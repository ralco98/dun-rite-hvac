import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Phone, Send, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/hvacData';

interface FreeEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const FreeEstimateModal: React.FC<FreeEstimateModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [selectedService, setSelectedService] = useState(initialServiceId || 'ac-install');
  const [hearAbout, setHearAbout] = useState('Google Search');
  const [notes, setNotes] = useState('');
  const [smsConsent, setSmsConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Strip */}
        <div className="bg-primary text-white p-5 sm:p-8 flex justify-between items-start">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              <span>100% Free · No Obligation</span>
            </div>
            <h3 className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
              Request a Free Estimate
            </h3>
            <p className="font-light text-sm text-white/80 mt-1">
              Serving Dallas-Fort Worth &amp; Austin with flat-rate pricing.
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto scrollbar-thin">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-extrabold text-2xl text-foreground">
                Estimate Request Received!
              </h4>
              <p className="font-normal text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-foreground">{firstName || 'Neighbor'}</span>. A Dun-Rite service coordinator is reviewing your details and will contact you at{' '}
                <span className="font-semibold text-foreground">{phone || 'your phone'}</span> within 15–30 minutes.
              </p>

              <div className="mt-6 bg-muted p-4 rounded-2xl border border-border text-left space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Service:</span>
                  <span>{SERVICES_LIST.find((s) => s.id === selectedService)?.title || 'HVAC Service'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Estimated Response:</span>
                  <span className="text-primary font-bold">Under 30 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Dispatch Center:</span>
                  <span>McKinney / DFW / Austin Hub</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleResetAndClose}
                  className="rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-11 px-8 shadow-sm transition-all"
                >
                  Done
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="rounded-full bg-white hover:bg-muted border border-border text-foreground font-semibold text-sm h-11 px-6 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            /* Request Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Street Address & City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123 Oak Hill Rd"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    City / Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="McKinney, TX"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Service Type & Referral Source */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} ({srv.chip})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    How did you hear about us? *
                  </label>
                  <select
                    value={hearAbout}
                    onChange={(e) => setHearAbout(e.target.value)}
                    className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                  >
                    <option value="Google Search">Google Search</option>
                    <option value="Yelp">Yelp</option>
                    <option value="Neighbor or Friend">Neighbor or Friend</option>
                    <option value="Dun-Rite Service Truck">Saw Dun-Rite Service Truck</option>
                    <option value="Social Media">Facebook / Instagram</option>
                    <option value="Repeat Customer">Past Customer</option>
                  </select>
                </div>
              </div>

              {/* Notes / Issue Details */}
              <div>
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Service Details / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your issue or what equipment you need installed (e.g. AC blowing warm air, need seasonal tune-up, replacing old 3-ton unit)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-muted/60 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
              </div>

              {/* SMS Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-primary border-border focus:ring-primary/20"
                  />
                  <span className="font-light text-xs text-muted-foreground leading-normal">
                    <strong className="font-medium text-foreground">SMS Consent:</strong> By checking this box, you consent to receive customer care, appointment reminders, and service updates via text message from Dun-Rite Heat &amp; AC Services. Msg &amp; data rates may apply. Reply STOP to cancel at any time.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-base h-12 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Estimate Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[0.75rem] text-muted-foreground">
                  🔒 We respect your privacy. No spam. Flat-rate quote guaranteed.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
