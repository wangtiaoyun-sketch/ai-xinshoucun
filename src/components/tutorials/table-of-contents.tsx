"use client"

import { useEffect, useState } from "react"

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const article = document.querySelector("article")
    if (!article) return

    const elements = article.querySelectorAll("h2, h3")
    const items = Array.from(elements).map((el) => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: el.textContent || "",
      level: el.tagName === "H3" ? 3 : 2,
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-80px 0px -60% 0px" }
    )

    elements.forEach((el) => {
      if (el.id) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="text-sm">
      <h4 className="font-semibold mb-3 text-foreground">📖 目录</h4>
      <ul className="space-y-1.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block py-1 transition-colors ${
                heading.level === 3 ? "pl-4" : ""
              } ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
