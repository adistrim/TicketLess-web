"use client";

import { Book, Construction } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DocsComingSoon() {
    return (
        <div className="min-h-[90vh] bg-background flex items-center">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-primary">
                        <Book className="h-10 w-10" />
                        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
                    </div>

                    <p className="text-xl text-muted-foreground">
                        Our comprehensive documentation is currently under development.
                    </p>

                    <Alert className="border-primary/20 bg-primary/5">
                        <Construction className="h-4 w-4 text-primary" />
                        <AlertDescription className="ml-2">
                            Expected release: Q4 2024. Check back soon for detailed guides, API references, and best practices.
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </div>
    );
}