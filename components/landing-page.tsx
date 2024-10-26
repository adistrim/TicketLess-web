import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/data/stats";
import { features } from '@/data/features';
import { testimonials } from '@/data/testimonials';
import {
    Code,
    Zap,
    Lock,
    ArrowRight,
    Sparkles,
} from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section with Gradient and Animation */}
            <section className="relative py-12 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-background" />
                <div className="max-w-4xl mx-auto px-4 relative">
                    <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                        <div className="flex items-center space-x-2 animate-fade-in">
                            <Badge variant="secondary" className="px-3 py-1 text-sm md:px-4">
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 inline" />
                                Now in Beta
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                            The Future of Event
                            <span className="bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text"> Ticketing</span>
                            {" "}is Here
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl px-4">
                            Empower your events with customizable ticketing, flexible payments, and powerful management tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto px-4">
                            <Button size="lg" className="group w-full sm:w-auto">
                                Try Ticketless Beta
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Growth Indicators */}
            <section className="bg-muted/50 py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="pt-6 px-4">
                                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-sm md:text-base text-muted-foreground mb-2">{stat.label}</div>
                                    <div className="text-xs md:text-sm text-primary">{stat.growth}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section with Hover Effects */}
            <section className="py-12 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 px-4">
                        Everything You Need to Run
                        <span className="block mt-1">Successful Events</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                {feature.highlight && (
                                    <Badge className="absolute top-2 right-2 md:top-4 md:right-4 text-xs" variant="secondary">
                                        {feature.highlight}
                                    </Badge>
                                )}
                                <CardContent className="p-4 md:p-6">
                                    <div className="mb-3 md:mb-4 group-hover:text-primary transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section with Modern Grid */}
            <section className="bg-muted/50 py-12 md:py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Powered by Modern Technology</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                        {[
                            { icon: <Zap />, title: "Rust Backend", desc: "High performance and reliability" },
                            { icon: <Code />, title: "Next.js Frontend", desc: "Modern SSR capabilities" },
                            { icon: <Lock />, title: "PostgreSQL", desc: "Reliable data storage" }
                        ].map((tech, index) => (
                            <Card key={index} className="p-4 md:p-6 group hover:shadow-lg transition-all duration-300">
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(tech.icon, { className: "h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 md:mb-4" })}
                                </div>
                                <h3 className="font-semibold mb-1 md:mb-2">{tech.title}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">{tech.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials with Modern Cards */}
            <section className="py-12 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
                        Loved by Event Organizers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                        <div>
                                            <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                                            <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-base md:text-lg italic mb-3 md:mb-4">&quot;{testimonial.content}&quot;</p>
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Sparkles key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Gradient */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-r from-background/10 to-background/30 dark:mix-blend-soft-light" />
                <div className="max-w-3xl mx-auto relative">
                    <div className="text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-background">
                            Ready to Transform Your Events?
                        </h2>
                        <p className="text-lg md:text-xl mb-6 md:mb-8 text-background/90">
                            Join the beta program and be among the first to experience the future of event ticketing.
                        </p>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="group font-medium w-full sm:w-auto hover:bg-background/95 dark:hover:bg-background/90"
                        >
                            Get Started Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
