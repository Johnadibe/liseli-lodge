import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <CTASection />
    </div>
  )
}
