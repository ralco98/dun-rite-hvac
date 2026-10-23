import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface NavbarProps {
  onOpenEstimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3.5 sm:py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-base sm:text-lg tracking-tight">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-[-0.03em] text-foreground leading-none">
              DUN-RITE
            </span>
            <span className="text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary leading-none mt-1">
              HEAT &amp; AC SERVICES
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA & Phone */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          <div className="w-px h-5 bg-border shrink-0 hidden lg:block" />
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="font-semibold text-xs xl:text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 group"
          >
            <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="whitespace-nowrap tabular-nums tracking-tight">
              (888)&nbsp;366&#8209;1998
            </span>
          </a>

          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-xs xl:text-sm h-10 px-4 xl:px-6 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-500/15"
          >
            <span className="whitespace-nowrap">Free Quote</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-primary"
            aria-label="Call Dun-Rite"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Licensed & Insured · TACLA-48219E</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full h-11 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimateModal();
              }}
              className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-primary text-white font-semibold text-sm shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
