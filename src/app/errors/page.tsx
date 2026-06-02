"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Copy, Check, Lightbulb, AlertCircle } from "lucide-react"
import { errorSolutions, searchErrors } from "@/lib/tutorials"

export default function ErrorsPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>(errorSolutions)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleSearch = (value: string) => {
    setQuery(value)
    if (!value.trim()) {
      setResults(errorSolutions)
    } else {
      setResults(searchErrors(value))
    }
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🆘 报错锦囊</h1>
        <p className="text-muted-foreground max-w-xl">
          AI 工具常见报错及解决方案。搜索报错信息，快速找到解决办法。
        </p>
      </div>

      <div className="relative max-w-xl mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="搜索报错信息（如：429 Too Many Requests）..."
          className="pl-10"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {results.length === 0 ? (
        <div className="text-center py-16">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">没找到相关报错，试试其他关键词</p>
          <p className="text-sm text-muted-foreground mt-1">提示：可以用英文搜索报错信息</p>
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {results.map((err) => (
            <Card key={err.id}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{err.toolIcon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">{err.tool}</Badge>
                      {err.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-3">
                      <code className="text-sm text-red-700 dark:text-red-400 break-all">{err.errorMessage}</code>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                    <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">
                      <Lightbulb className="h-3 w-3 inline mr-1" />原因
                    </p>
                    <p className="text-sm text-amber-800 dark:text-amber-300">{err.reason}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <p className="text-xs font-medium text-green-700 dark:text-green-400 mb-1">
                      ✅ 解决方案
                    </p>
                    <pre className="text-sm text-green-800 dark:text-green-300 whitespace-pre-wrap font-sans">{err.solution}</pre>
                  </div>
                </div>

                <Button variant="outline" size="sm" onClick={() => handleCopy(err.solution, err.id)}>
                  {copiedId === err.id ? (
                    <><Check className="h-3 w-3 mr-1" /> 已复制</>
                  ) : (
                    <><Copy className="h-3 w-3 mr-1" /> 复制解决方案</>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

