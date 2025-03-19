import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from "@/lib/utils"
import "./globals.css";


export const metadata: Metadata = {
  title: "Eduq",
  description: "Impulsionando a educação com inteligência artificial",
  icons: {
    icon: '/eduq.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased",
      )} style={{ fontFamily: "Georgia, serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
