import DeveloperProfile from "./dev-profile"
import { developers } from "@/data/devs"
import { Tag } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Tag className="h-6 w-6" />
                            <span className="font-bold text-xl">Ticketless</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            The modern solution for event ticketing and management.
                            Built with love for event organizers worldwide.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight">Development Team</h3>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {developers.map((developer) => (
                                <DeveloperProfile
                                    key={developer.githubUsername}
                                    {...developer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ticketless. All rights reserved.
                </div>
            </div>
        </footer>
    )
}