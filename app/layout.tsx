import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import Footer from "@/components/footer"

export const metadata = {
  title: {
    default: 'Ticketless | Modern Event Ticketing Platform',
    template: '%s | Ticketless'
  },
  description: 'Next-generation event ticketing platform with custom domains, flexible payments, and powerful management tools.',
  keywords: ['event ticketing', 'event management', 'ticket sales', 'event platform', 'ticketing system'],
  authors: [
    { name: 'Aditya Raj' },
    { name: 'Suryansh Pathak' },
    { name: 'Priyanshu Joshi' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <NavBar />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
