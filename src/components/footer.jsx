'use client'   // <-- add this at the very top

import React from 'react'
import Link from 'next/link'

const links = [
  { title: 'Home', href: 'hero-section' },
  { title: 'Services', href: 'features-1' },
  { title: 'About', href: 'content-3' },
  { title: 'Contact', href: 'contact' },
]

export default function FooterSection() {
  const handleScroll = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-b bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Elite Barber Shop, All rights reserved
          </span>

          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                onClick={handleScroll(link.href)}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
