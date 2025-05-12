import { NewsHero } from "@/components/news-hero"
import { NewsList } from "@/components/news-list"
import { CTASection } from "@/components/cta-section"

export default function NewsPage() {
  return (
    <div className="flex flex-col w-full">
      <NewsHero />
      <NewsList />
      <CTASection />
    </div>
  )
}
