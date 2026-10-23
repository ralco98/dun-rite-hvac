import { useState } from 'react';
import { EmergencyStrip } from './components/EmergencyStrip';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaBanner } from './components/CtaBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FreeEstimateModal } from './components/FreeEstimateModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './data/hvacData';

export function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  const handleOpenEstimate = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setIsEstimateModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setDetailService(service);
  };

  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* 1. Emergency Strip */}
      <EmergencyStrip />

      {/* 2. Sticky Navbar */}
      <Navbar onOpenEstimateModal={() => handleOpenEstimate()} />

      <main>
        {/* 3. Hero Section (White) */}
        <Hero onOpenEstimateModal={() => handleOpenEstimate()} />

        {/* 4. Trust Bar (White with border-y) */}
        <TrustBar />

        {/* 5. Services Section (Muted) */}
        <Services
          onSelectService={handleSelectService}
          onOpenEstimateModal={() => handleOpenEstimate()}
        />

        {/* 6. Stats Counter Section (Primary Blue) */}
        <StatsSection />

        {/* 7. About Section (White) */}
        <AboutSection onOpenEstimateModal={() => handleOpenEstimate()} />

        {/* 8. Process Section — How It Works (Muted) */}
        <ProcessSection />

        {/* 9. Full-Width Photo CTA Banner (Full Bleed Image) */}
        <CtaBanner onOpenEstimateModal={() => handleOpenEstimate()} />

        {/* 10. Testimonials Section (White) */}
        <TestimonialsSection />

        {/* 11. Service Areas Section (Muted) */}
        <ServiceAreasSection />

        {/* 12. FAQ Section (White, max-w-3xl) */}
        <FaqSection />

        {/* 13. Final CTA Section (Primary Blue, max-w-3xl) */}
        <FinalCtaSection onOpenEstimateModal={() => handleOpenEstimate()} />
      </main>

      {/* 14. Footer (Dark Foreground) */}
      <Footer onOpenEstimateModal={() => handleOpenEstimate()} />

      {/* Interactive Estimate Modal */}
      <FreeEstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialServiceId={selectedServiceForModal}
      />

      {/* Interactive Service Details Modal */}
      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onBookService={(serviceId) => handleOpenEstimate(serviceId)}
      />
    </div>
  );
}

export default App;
