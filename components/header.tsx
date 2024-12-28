"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ModeToggle } from "./ui/mode-toggle"
import { Search, Cpu, Menu, X } from 'lucide-react'
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Artificial Intelligence", href: "/category/ai" },
  { name: "Machine Learning", href: "/category/ml" },
  { name: "Web Development", href: "/blog/web" },
  { name: "Cybersecurity", href: "/category/security" },
  { name: "Cloud Computing", href: "/category/cloud" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl hidden sm:inline-block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                TechInsight Hub
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/blog"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/blog" ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Blog
              </Link>
              <Link 
                href="/trending"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/trending" ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Trending
              </Link>
              <Link 
                href="/newsletter"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/newsletter" ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Newsletter
              </Link>
              <Link 
                href="/categories"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/categories" ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Categories
              </Link>
              <Link 
                href="/about"
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === "/about" ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-64 pl-8 border-primary/20 focus:border-primary"
              />
            </div>
            <ModeToggle />
            <Button className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-opacity">
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Category Tags */}
        <div className="hidden md:flex items-center gap-4 py-2 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "text-sm px-3 py-1 rounded-full border transition-colors hover:bg-primary/10 hover:border-primary",
                pathname === category.href
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 gap-2">
            <Link 
              href="/blog"
              className="px-4 py-2 hover:bg-primary/10 hover:text-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/trending"
              className="px-4 py-2 hover:bg-primary/10 hover:text-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              href="/newsletter"
              className="px-4 py-2 hover:bg-primary/10 hover:text-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
            <div className="px-4 py-2">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full border-primary/20 focus:border-primary"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

