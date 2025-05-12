"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Liseli Lodge was established in 2015 with a vision to create a peaceful retreat in the heart of Mongu,
              where guests could experience authentic Zambian hospitality in a modern, comfortable setting.
            </p>
            <p className="text-muted-foreground mb-4">
              The name "Liseli" means "light" in the local Lozi language, symbolizing our aim to be a beacon of
              exceptional service and comfort in Western Province.
            </p>
            <p className="text-muted-foreground">
              Over the years, we have grown from a small guesthouse to a full-service lodge, continuously improving our
              facilities and services to meet the needs of our valued guests. Today, Liseli Lodge stands as a testament
              to our commitment to excellence and our deep roots in the local community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Liseli Lodge"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At Liseli Lodge, our mission is to provide a tranquil haven where guests can experience the true essence
              of Zambian hospitality while enjoying modern comforts and amenities.
            </p>
            <p className="text-muted-foreground mb-4">We are committed to:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Delivering exceptional service that exceeds expectations</li>
              <li>Creating a peaceful environment where guests can relax and rejuvenate</li>
              <li>Supporting the local community through employment and sustainable practices</li>
              <li>Showcasing the beauty and culture of Mongu and Western Province</li>
            </ul>
            <p className="text-muted-foreground">
              We strive to ensure that every guest leaves with fond memories and a desire to return to Liseli Lodge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
