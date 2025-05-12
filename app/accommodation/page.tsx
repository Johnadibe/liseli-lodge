import { AccommodationHero } from "@/components/accommodation-hero"
import { RoomsList } from "@/components/rooms-list"
import { AmenitiesList } from "@/components/amenities-list"
import { CTASection } from "@/components/cta-section"

export default function AccommodationPage() {
  return (
    <div className="flex flex-col w-full">
      <AccommodationHero />
      <RoomsList />
      <AmenitiesList />
      <CTASection />
    </div>
  )
}
