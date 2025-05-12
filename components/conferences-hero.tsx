"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ConferencesHero() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Conference Facilities at Liseli Lodge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto pt-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Conference Facilities</h1>
          <p className="text-lg md:text-xl">
            Host your next meeting, conference, or event in our modern, well-equipped facilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
