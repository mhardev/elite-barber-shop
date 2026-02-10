"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { toast } from "sonner"
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
    const form = useRef(null)
    const sendEmail = (e) => {
        e.preventDefault()

        toast.promise(
            emailjs.sendForm(
                "service_uoorioe",
                "template_bur03mb",
                form.current,
                {
                    publicKey: "HuU1d4jpUoeeR9PqI",
                }
            ),
            {
                loading: "Sending your message...",
                success: () => {
                    form.current.reset()
                    return "Message sent successfully! ✂️"
                },
                error: (err) => {
                    return err?.text || "Failed to send message. Please try again."
                },
            }
        )
    }
    return (
        <section id="contact" className="bg-brand-gradient py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <ScrollReveal>
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl text-foreground">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-center text-muted-foreground">
                        Ready for a fresh, confident look? Get in touch with us today.
                    </p>
                </ScrollReveal>

                <ScrollReveal>
                    <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                        <div>
                            <h2 className="text-xl font-semibold"> 
                                Let’s elevate your style 
                            </h2>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Contact us to ask about our services. Our team is ready to give you a cut that fits your lifestyle.
                            </p>
                        </div>
                        <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                        >
                        {/* Hidden business name */}
                        <Input
                            type="hidden"
                            name="business"
                            value="Elite Barber Shop"
                        />

                        <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input id="name" name="name" required />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>

                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" name="subject" required />
                        </div>

                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" rows={3} required />
                        </div>

                        <Button
                            type="submit"
                            className="bg-primary text-primary-foreground hover:bg-[color-mix(in_srgb,var(--primary)_85%,black)]"
                        >
                            Submit
                        </Button>
                        </form>
                    </Card>
                </ScrollReveal>
            </div>
        </section>
    )
}
