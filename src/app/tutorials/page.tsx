"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TutorialCategory } from "@/types"
import { tutorials, categories, difficultyLabels } from "@/lib/tutorials"

function TutorialsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeCategory = searchParams.get("category") as TutorialCategory | null
  const activeDifficulty = searchParams.get("difficulty") || ""

  const filtered = tutorials.filter((t) => {
    if (activeCategory && t.category !== activeCategory) return false
    if (activeDifficulty && t.difficulty !== activeDifficulty) return false
    return true
  })

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    const qs = params.toString()
    router.push(qs ? `/tutorials?${qs}` : "/tutorials")
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={!activeCategory ? "default" : "outline"}
          size="sm"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())
            params.delete("category")
            router.push(params.toString() ? `/tutorials?${params.toString()}` : "/tutorials")
          }}
        >
          全部
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("category", cat.id)}
          >
            {cat.icon} {cat.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {["beginner", "intermediate", "advanced"].map((diff) => (
          <Badge
            key={diff}
            variant={activeDifficulty === diff ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => setFilter("difficulty", diff)}
          >
            {difficultyLabels[diff]}
          </Badge>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          没有找到匹配的教程，试试其他筛选条件
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tutorial) => (
            <Link key={tutorial.id} href={`/tutorials/${tutorial.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{tutorial.toolIcon}</span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {tutorial.tool}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {tutorial.updatedAt}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">{difficultyLabels[tutorial.difficulty]}</Badge>
                    <span className="text-xs text-muted-foreground">{tutorial.estimatedTime}</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {tutorial.readCount.toLocaleString()} 阅读
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">工具教程</h1>
        <p className="text-muted-foreground">找到你想学的 AI 工具，跟着保姆级教程一步步上手</p>
      </div>
      <Suspense fallback={<div className="text-center py-16 text-muted-foreground">加载中...</div>}>
        <TutorialsContent />
      </Suspense>
    </div>
  )
}
