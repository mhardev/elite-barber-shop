'use client'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroHeader } from './header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { useScrollFade } from '@/hooks/use-scroll-fade'

export default function HeroSection() {
  
  const fadeTitle = useScrollFade()
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden">
        {/* Background effects (unchanged) */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section id="hero-section" className="py-16 md:py-32">
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />

            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">

                {/* Headline */}
                  <h1
                  className={cn(
                    'mt-8 max-w-2xl text-5xl font-medium md:text-6xl lg:mt-16 transition-all duration-700 ease-out will-change-transform',
                      fadeTitle
                    )}
                  >Premium Men’s Grooming, Perfected
                  </h1>
                
                {/* Description */}
                <ScrollReveal delay={0.1}>
                  <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
                    Experience elite men’s haircuts crafted by professional Filipino barbers.
                    From classic styles to modern fades, we deliver sharp looks, precision cuts,
                    and confidence—every visit.
                  </p>
                </ScrollReveal>

              </div>
            </div>

            {/* Hero Image */}
            <ScrollReveal delay={0.2}>
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15 ring-1 ring-background dark:inset-shadow-white/20 bg-background">
                  
                  {/* Hero Image with fade effect */}
                  <div className="w-full overflow-hidden rounded-2xl mask-b-from-55%">
                    <Image
                      src="/images/elite-barber-shop.jpg"
                      alt="Elite Barber Shop app preview"
                      width={2700}
                      height={1440}
                      priority
                      className="w-full h-auto object-cover rounded-2xl border border-border/25"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  )
}