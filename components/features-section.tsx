"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wifi, Coffee, Utensils, Shield, Tv, MapPin } from "lucide-react"

const features = [
  {
    icon: <Wifi className="h-10 w-10" />,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet throughout the property.",
  },
  {
    icon: <Coffee className="h-10 w-10" />,
    title: "Breakfast Included",
    description: "Start your day with our delicious complimentary breakfast buffet.",
  },
  {
    icon: <Utensils className="h-10 w-10" />,
    title: "Restaurant & Bar",
    description: "Enjoy local and international cuisine at our on-site restaurant and bar.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "24/7 Security",
    description: "Feel safe with our round-the-clock security service and surveillance.",
  },
  {
    icon: <Tv className="h-10 w-10" />,
    title: "Modern Amenities",
    description: "All rooms equipped with flat-screen TVs, air conditioning, and modern furnishings.",
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Prime Location",
    description: "Located in a peaceful suburb of Mongu, close to local attractions.",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience Comfort & Convenience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Liseli Lodge offers a range of amenities to make your stay comfortable, relaxing, and stress-free.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
