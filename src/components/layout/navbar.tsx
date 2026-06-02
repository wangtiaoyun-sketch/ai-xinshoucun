"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Menu, Moon, Search, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/tutorials", label: "工具教程" },
  { href: "/learning-paths", label: "学习路径" },
  { href: "/sandbox", label: "AI 沙盒" },
  { href: "#", label: "模板库" },
  { href: "#", label: "日报" },
  { href: "#", label: "社区" },
  { href: "#", label: "会员" },
]

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="text-xl font-bold">AI 新手村</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="搜索"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="切换主题"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t bg-background p-4">
          <div className="container mx-auto flex gap-2">
            <Input
              placeholder="你想学什么？搜索教程 / 工具 / 报错..."
              className="flex-1"
              autoFocus
            />
            <Button variant="secondary" onClick={() => setSearchOpen(false)}>
              <X className="h-4 w-4 mr-1" /> 取消
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
