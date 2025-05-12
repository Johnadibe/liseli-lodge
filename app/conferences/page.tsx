import { ConferencesHero } from "@/components/conferences-hero"
import { ConferencesFacilities } from "@/components/conferences-facilities"
import { ConferencesPackages } from "@/components/conferences-packages"
import { CTASection } from "@/components/cta-section"

export default function ConferencesPage() {
  return (
    <div className="flex flex-col w-full">
      <ConferencesHero />
      <ConferencesFacilities />
      <ConferencesPackages />
      <CTASection />
    </div>
  )
}
