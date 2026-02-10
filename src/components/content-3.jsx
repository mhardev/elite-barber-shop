import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function ContentSection() {
    return (
      <section id="content-3" className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                
                <ScrollReveal>
                    <Image
                        className="rounded-(--radius) grayscale border border-border"
                        src="/images/content.jpg"
                        alt="Elite Barber Shop About Review"
                        height={2764}
                        width={1684}
                        loading="lazy" />
                </ScrollReveal>

                <ScrollReveal>
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium text-foreground">
                        Redefining Men’s Grooming in the Philippines
                    </h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            Our barbershop is built on craftsmanship, consistency, and confidence.
                            We combine professional techniques, premium tools, and local expertise
                            to deliver world-class grooming for Filipino men.
                        </p>
                    </div>
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
