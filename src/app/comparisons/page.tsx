import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toolComparisons } from "@/lib/constants-three"

export default function ComparisonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">📊 工具对比评测</h1>
        <p className="text-muted-foreground max-w-xl">
          帮你做出最佳选择 — 多维度对比主流 AI 工具，客观公正，每季度更新。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {toolComparisons.map((comp) => (
          <Link key={comp.id} href={`/comparisons/${comp.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{comp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{comp.description}</p>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {comp.tools.map((t) => (
                    <Badge key={t.name} variant="secondary" className="text-xs">
                      {t.icon} {t.name}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">更新于 {comp.updatedAt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
