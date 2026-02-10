'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/mode-toggle'
import { Logo } from '@/components/logo'

const menuItems = [
  { name: 'Home', href: 'hero-section' },
  { name: 'Services', href: 'features-1' },
  { name: 'About', href: 'content-3' },
  { name: 'Contact', href: 'contact' },
]

export const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero-section')

  // Scroll listener: header shrink + active nav
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      const scrollPos = window.scrollY + 120
      for (const item of menuItems) {
        const el = document.getElementById(item.href)
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(item.href)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smooth scroll
  const handleScroll = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setMenuOpen(false)
  }

  return (
    <header>
      <nav
        className={cn(
            'fixed z-20 w-full border-b border-border transition-all duration-300',
            scrolled ? 'bg-background/70 backdrop-blur-xl py-2' : 'bg-transparent py-4'
          )}
        >
        <div
          aria-hidden
          className={cn(
            'absolute inset-x-0 top-0 h-0.75 opacity-0 transition-opacity duration-300',
            scrolled && 'opacity-100'
          )}
          style={{ background: 'var(--header-gradient)' }}
        />
        
        <div className="relative mx-auto max-w-5xl px-6 grid grid-cols-[auto_1fr_auto] lg:grid-cols-3 items-center">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </div>
          
          <ul className="hidden lg:flex justify-center gap-8 text-sm">
            {menuItems.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={handleScroll(item.href)}
                    className={cn(
                      'relative px-1 py-1 transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        'absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-foreground transition-transform duration-300',
                        isActive && 'scale-x-100'
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
          
          <div className="flex items-center justify-end gap-2">
            <ModeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-out',
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="relative flex flex-col items-center gap-4 px-6 pt-1 pb-1 bg-background/80 backdrop-blur-xl rounded-b-3xl shadow-lg">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-0.75 w-full"
              style={{ background: 'var(--header-gradient)' }}
            />
            {menuItems.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    onClick={handleScroll(item.href)}
                    className={cn(
                      'block py-2 text-sm transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
