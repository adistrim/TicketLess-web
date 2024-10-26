import React from 'react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './mode-toggle';
import { Menu, Tag } from 'lucide-react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export function NavBar() {
    const NavItems = () => (
        <>
            <Link href="/docs">
                <Button variant="ghost">Documentation</Button>
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
        </>
    );

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Tag className="h-6 w-6" />
                    <span className="font-bold text-xl">Ticketless</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <NavItems />
                    <ModeToggle />
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-8">
                                <NavItems />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
