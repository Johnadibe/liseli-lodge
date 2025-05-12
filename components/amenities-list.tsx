"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wifi, Coffee, Utensils, Shield, Tv, MapPin, Car, Snowflake, Phone, Bath, Shirt, Briefcase } from "lucide-react"

const amenities = [
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
  {
    icon: <Car className="h-10 w-10" />,
    title: "Free Parking",
    description: "Complimentary secure parking available for all guests.",
  },
  {
    icon: <Snowflake className="h-10 w-10" />,
    title: "Air Conditioning",
    description: "Stay cool and comfortable with air conditioning in all rooms and public areas.",
  },
  {
    icon: <Phone className="h-10 w-10" />,
    title: "Room Service",
    description: "Enjoy meals and beverages delivered directly to your room.",
  },
  {
    icon: <Bath className="h-10 w-10" />,
    title: "Private Bathrooms",
    description: "All rooms feature private bathrooms with premium toiletries.",
  },
  {
    icon: <Shirt className="h-10 w-10" />,
    title: "Laundry Service",
    description: "Convenient laundry and dry-cleaning services available.",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Business Facilities",
    description: "Access to business center with printing and copying services.",
  },
]

export function AmenitiesList() {
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Amenities
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
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground">{amenity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
