"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">
              Liseli Lodge
              <br />
              123 Mongu Road
              <br />
              Mongu, Western Province
              <br />
              Zambia
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">
              +260 97 1234567
              <br />
              +260 96 7654321
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">
              info@liselilodge.com
              <br />
              bookings@liselilodge.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="text-muted-foreground">
              Reception: 24/7
              <br />
              Restaurant: 6:30 AM - 10:00 PM
              <br />
              Check-in: 2:00 PM
              <br />
              Check-out: 11:00 AM
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
