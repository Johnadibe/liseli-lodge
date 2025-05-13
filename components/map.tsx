"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { StaticMap } from "./static-map"

export function Map() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Coordinates for Mongu, Zambia
  const latitude = -15.2773
  const longitude = 23.1377

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-md relative"
        >
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}

          {hasError ? (
            <StaticMap latitude={latitude} longitude={longitude} />
          ) : (
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61183.03382509393!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19e80a9493a1589d%3A0xf30cb47cc64c3c48!2sMongu%2C%20Zambia!5e0!3m2!1sen!2sus!4v1715613456789!5m2!1sen!2sus`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Liseli Lodge Location"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false)
                setHasError(true)
              }}
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  )
}
