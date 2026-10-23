import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface FooterProps {
  onOpenEstimateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal }) => {
  return (
    <footer className="bg-foreground text-white py-12 sm:py-16 px-4 sm:px-6 md:px-[72px] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1 — Brand Identity */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-base">
                D
              </div>
              <span className="font-extrabold text-xl tracking-[-0.02em] text-white">
                DUN-RITE
              </span>
            </div>
            
            <p className="font-light text-xs text-white/50 tracking-[0.14em] uppercase mt-2">
              HEAT &amp; AC SERVICES · TEXAS
            </p>
            <p className="font-light text-xs text-white/40 mt-1">
              {COMPANY_INFO.license}
            </p>

            <p className="font-medium text-xs text-blue-300 mt-4 italic">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 font-semibold text-sm text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 font-normal text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-white/40" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 font-normal text-xs text-white/50">
                <MapPin className="w-4 h-4 text-white/40" />
                <span>DFW &amp; ATX Metro Hubs, TX</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="font-semibold text-[0.68rem] tracking-[0.2em] uppercase text-white/40 mb-5">
              SERVICES
            </p>
            <ul className="space-y-3 font-normal text-sm text-white/65">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AC Installation &amp; Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Heating &amp; Furnace Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AC &amp; Heating Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Tune-Up &amp; Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  REME HALO® Air Purification
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  24/7 Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="font-semibold text-[0.68rem] tracking-[0.2em] uppercase text-white/40 mb-5">
              COMPANY
            </p>
            <ul className="space-y-3 font-normal text-sm text-white/65">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dun-Rite
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Service Areas (DFW &amp; Austin)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEstimateModal}
                  className="hover:text-white text-left transition-colors text-primary-light"
                >
                  Request Free Estimate
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Hours & Dispatch */}
          <div>
            <p className="font-semibold text-[0.68rem] tracking-[0.2em] uppercase text-white/40 mb-5">
              HOURS
            </p>
            <div className="space-y-2 text-sm text-white/65">
              <p>{COMPANY_INFO.hours.weekdays}</p>
              <p>{COMPANY_INFO.hours.saturday}</p>
              <p>{COMPANY_INFO.hours.sunday}</p>
              <div className="pt-2 text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>{COMPANY_INFO.hours.emergency}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="font-semibold text-[0.62rem] tracking-[0.2em] uppercase text-white/30 mb-3">
                CONNECT
              </p>
              <div className="flex gap-4">
                {COMPANY_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/45 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
          <p>© 2026 Dun-Rite Heat &amp; AC Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-white/60">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              <span>Licensed &amp; Insured in Texas</span>
            </span>
            <a href="#privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
