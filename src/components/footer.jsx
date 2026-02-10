'use client'

import React from 'react'

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
    <footer className="border-b bg-white py-8 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
          
          {/* Copyright - left on desktop */}
          <span className="order-last text-center text-sm text-muted-foreground md:order-first md:text-left">
            © {new Date().getFullYear()} Elite Barber Shop, All rights reserved.
          </span>

          {/* Navigation Links - right on desktop */}
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last md:justify-end">
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
