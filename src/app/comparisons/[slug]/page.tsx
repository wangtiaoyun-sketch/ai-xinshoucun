import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getComparisonBySlug } from "@/lib/constants-three"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) return {}
  return { title: comp.title, description: comp.description }
}

const colorMap = ["bg-blue-500", "bg-green-500", "bg-purple-500"]

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) notFound()

  const maxScore = 10

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">首页</Link>
        <span className="mx-2">›</span>
        <Link href="/comparisons" className="hover:text-foreground">工具对比</Link>
        <span className="mx-2">›</span>
        <span className="text-foreground">{comp.title.slice(0, 30)}...</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{comp.title}</h1>
      <p className="text-muted-foreground mb-8">{comp.description}</p>

      {/* Score Comparison */}
      <div className="mb-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium">维度</th>
              {comp.tools.map((t, i) => (
                <th key={t.name} className="text-center py-3 px-4 font-medium">
                  <span className="text-xl block">{t.icon}</span>
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comp.dimensions.map((dim) => (
              <tr key={dim.key} className="border-b">
                <td className="py-3 px-4 font-medium">{dim.label}</td>
                {comp.tools.map((tool) => (
                  <td key={tool.name} className="py-3 px-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <span className="font-bold">{tool.scores[dim.key]}</span>
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${(tool.scores[dim.key] / maxScore) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {comp.tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="text-xl">{tool.icon}</span> {tool.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">✅ 优势</p>
                <ul className="text-xs space-y-1">
                  {tool.pros.map((p) => (
                    <li key={p} className="text-muted-foreground">• {p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">⚠️ 不足</p>
                <ul className="text-xs space-y-1">
                  {tool.cons.map((c) => (
                    <li key={c} className="text-muted-foreground">• {c}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Verdict */}
      <Card className="bg-gradient-to-r from-primary/10 to-transparent">
        <CardContent className="p-6">
          <h2 className="text-lg font-bold mb-2">🏆 结论</h2>
          <p className="text-muted-foreground">{comp.verdict}</p>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground text-right mt-4">
        更新于 {comp.updatedAt} · 数据仅供参考，请以各产品官网最新信息为准
      </p>
    </div>
  )
}
