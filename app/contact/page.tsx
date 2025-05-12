import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Map } from "@/components/map"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <div className="container grid md:grid-cols-2 gap-8 py-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <Map />
    </div>
  )
}
