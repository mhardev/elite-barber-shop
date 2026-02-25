/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useEffect, useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function LocationSection() {
  const [iframeSrc, setIframeSrc] = useState('')

  useEffect(() => {
    // Only set iframe src on the client to avoid hydration errors
    setIframeSrc(
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d859.5082238948709!2d121.04016289948666!3d14.709118688886454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e6c4d8e187%3A0x1e770ae90656735d!2sElite%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1770714536154!5m2!1sen!2sus'
    )
  }, [])

  return (
    <section id="location" className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <h1 className="text-center text-4xl font-semibold lg:text-5xl text-foreground">
            Elite Barber Shop
          </h1>
          <p className="mt-4 text-center text-muted-foreground">
            Visit us at 13 Susana, Novaliches, Quezon City, 1117 Metro Manila, Philippines
            <br />
            🕒 <strong>Opening Hours:</strong> Monday to Sunday; 8 AM to 8 PM.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 overflow-hidden rounded-2xl border shadow-lg">
            {iframeSrc && (
              <iframe
                className="h-105 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={iframeSrc}
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
