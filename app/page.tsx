import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { TeamSection } from "@/components/sections/team-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { BookingSection } from "@/components/sections/booking-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
    </main>
  )
}
