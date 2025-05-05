"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, FileText, Home } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Text Analysis", path: "/text-analysis", icon: <FileText className="h-4 w-4 mr-2" /> },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/LOGO.png" alt="Logo" className="h-[50px] w-[70px]" />
              <span className="text-xl font-bold">DEEPTRACE</span>
            </Link>
          </div>

          {/* Desktop navigation aligned to right */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant={pathname === route.path ? "default" : "ghost"}
                asChild
                className="flex items-center rounded-[20px]"
              >
                <Link href={route.path}>
                  {route.icon}
                  {route.name}
                </Link>
              </Button>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant={pathname === route.path ? "default" : "ghost"}
                asChild
                className="w-full justify-start flex items-center space-x-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Link href={route.path}>
                  {route.icon}
                  {route.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
