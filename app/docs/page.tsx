import { Book, Construction } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DocsComingSoon() {
    return (
        <div className="min-h-[90vh] bg-background flex items-center">
            <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 w-full">
                <div className="text-center space-y-4 md:space-y-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-primary">
                        <Book className="h-8 w-8 md:h-10 md:w-10" />
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 md:mt-0">
                            Documentation
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground px-2 md:px-0">
                        Our comprehensive documentation is currently under development.
                    </p>

                    <Alert className="hidden md:block border-primary/20 bg-primary/5 mx-2 md:mx-0">
                        <Construction className="h-4 w-4 text-primary flex-shrink-0" />
                        <AlertDescription className="ml-2 text-sm md:text-base">
                            Expected release: Q4 2024. Check back soon for detailed guides, API references, and best practices.
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </div>
    );
}