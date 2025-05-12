import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AccommodationPreview } from "@/components/accommodation-preview"
import { CTASection } from "@/components/cta-section"
import { NewsPreview } from "@/components/news-preview"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <AccommodationPreview />
      <TestimonialsSection />
      <NewsPreview />
      <CTASection />
    </div>
  )
}
