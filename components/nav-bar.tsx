import React from 'react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './mode-toggle';
import { Menu, Tag } from 'lucide-react';
import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Tag className="h-6 w-6" />
                    <span className="font-bold text-xl">Ticketless</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/docs">
                        <Button variant="ghost" className="hidden md:inline-flex">
                            Documentation
                        </Button>
                    </Link>
                    <ModeToggle />
                    <Button variant="outline" className="hidden md:inline-flex">
                        Sign In
                    </Button>
                    <Button>Get Started</Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
