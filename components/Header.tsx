"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme()

  return (
    <header className="bg-background shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">LongevityMBA</span>
              <img
                className="h-10 w-auto"
                src="/logo.png"
                alt="LongevityMBA"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/insights" className="text-base font-medium text-foreground hover:text-primary">
                Insights
              </Link>
              <Link href="/playbooks" className="text-base font-medium text-foreground hover:text-primary">
                Playbooks
              </Link>
              <Link href="/about" className="text-base font-medium text-foreground hover:text-primary">
                About
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button>
              Sign In
            </Button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link href="/insights" className="text-base font-medium text-foreground hover:text-primary">
            Insights
          </Link>
          <Link href="/playbooks" className="text-base font-medium text-foreground hover:text-primary">
            Playbooks
          </Link>
          <Link href="/about" className="text-base font-medium text-foreground hover:text-primary">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}