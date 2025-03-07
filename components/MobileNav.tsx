"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { useState } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function MobileNav({ stripePlan }: { stripePlan?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={25} height={25} />
            {stripePlan && <span className="text-sm font-medium">{stripePlan}</span>}
          </div>
        </SheetHeader>
        <nav className="flex flex-col gap-4 pt-4">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Tasks
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Reports
          </Link>
        </nav>
        <div className="mt-auto flex items-center pt-4">
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
