import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Scissors, Sparkles, UserCheck } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Features() {
    return (
        <section id="features-1" className="bg-brand-gradient py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <ScrollReveal>
                <div className="text-center">
                    {/* Headline */}
                    <h2 className="text-4xl font-semibold lg:text-5xl text-foreground">
                    Crafted for the Modern Gentleman
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                    From precision haircuts to luxury grooming, our services are designed to
                    elevate your style and confidence. Every detail matters.
                    </p>
                </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div
                        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                        <Card className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Scissors className="size-6" aria-hidden />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Precision Haircuts</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-muted-foreground">Expertly tailored haircuts designed to match your face shape, 
                                    lifestyle, and personal style—clean, sharp, and long-lasting.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <UserCheck className="size-6" aria-hidden />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Modern & Classic Styles</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-muted-foreground">Whether it’s a skin fade, pompadour, buzz cut, or a timeless gentleman’s look, 
                                    our barbers master both modern and traditional styles.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Sparkles className="size-6" aria-hidden />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium">Premium Grooming Experience</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-muted-foreground">Enjoy a relaxed, high-end barbershop experience with quality products,
                                    attention to detail, and service that puts you first.</p>
                            </CardContent>
                        </Card>
                    </div>    
                </ScrollReveal>
            </div>
        </section>
    );
}

const CardDecorator = ({
    children
}) => (
    <div
        className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50" />

        <div
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
