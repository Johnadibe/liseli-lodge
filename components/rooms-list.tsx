"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wifi, Coffee, Tv, Wind, Check } from "lucide-react"

const rooms = [
  {
    title: "Standard Room",
    description:
      "Our comfortable standard rooms offer all the essentials for a relaxing stay, with modern amenities and a peaceful atmosphere.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$80",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Flat-screen TV", "Air Conditioning", "Private Bathroom"],
    size: "25m²",
    beds: "1 Queen Bed",
  },
  {
    title: "Deluxe Suite",
    description:
      "Experience luxury in our spacious deluxe suites, featuring a separate living area, premium amenities, and beautiful views of the surroundings.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    price: "$120",
    amenities: [
      "Free Wi-Fi",
      "Breakfast Included",
      "Flat-screen TV",
      "Air Conditioning",
      "Living Area",
      "Mini Bar",
      "Premium Toiletries",
    ],
    size: "45m²",
    beds: "1 King Bed",
  },
  {
    title: "Executive Room",
    description:
      "Perfect for business travelers, our executive rooms feature a dedicated workspace, enhanced amenities, and elegant design for a productive stay.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$100",
    amenities: [
      "Free Wi-Fi",
      "Breakfast Included",
      "Flat-screen TV",
      "Air Conditioning",
      "Work Desk",
      "Coffee Machine",
      "Private Bathroom",
    ],
    size: "30m²",
    beds: "1 Queen Bed",
  },
  {
    title: "Family Suite",
    description:
      "Spacious and comfortable, our family suites are designed to accommodate families with children, featuring multiple beds and family-friendly amenities.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    price: "$150",
    amenities: [
      "Free Wi-Fi",
      "Breakfast Included",
      "Flat-screen TV",
      "Air Conditioning",
      "Multiple Beds",
      "Extra Space",
      "Family Bathroom",
    ],
    size: "55m²",
    beds: "1 King Bed + 2 Single Beds",
  },
]

export function RoomsList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const amenityIcons = {
    "Free Wi-Fi": <Wifi className="h-4 w-4 mr-2" />,
    "Breakfast Included": <Coffee className="h-4 w-4 mr-2" />,
    "Flat-screen TV": <Tv className="h-4 w-4 mr-2" />,
    "Air Conditioning": <Wind className="h-4 w-4 mr-2" />,
    default: <Check className="h-4 w-4 mr-2" />,
  }

  return (
    <section className="py-20">
      <div className="container">
        <div ref={ref} className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold">{room.title}</h2>
                  <span className="text-xl font-semibold text-primary">{room.price}/night</span>
                </div>
                <p className="text-muted-foreground mb-6">{room.description}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  <div>
                    <span className="font-semibold">Size:</span> {room.size}
                  </div>
                  <div>
                    <span className="font-semibold">Beds:</span> {room.beds}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Amenities:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        {amenityIcons[amenity] || amenityIcons.default}
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="lg">Book This Room</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
