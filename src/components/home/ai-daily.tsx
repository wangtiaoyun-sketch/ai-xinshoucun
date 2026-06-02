import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { aiDaily } from '@/lib/constants'

export function AIDaily() {
  const latest = aiDaily[0]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">📬 AI 日报</h2>
            <p className="text-muted-foreground mt-1">每天 3 分钟，掌握 AI 最新动态</p>
          </div>
          <Link
            href="#"
            className="text-sm text-primary hover:underline"
          >
            查看全部 →
          </Link>
        </div>

        {latest && (
          <Card className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-col items-center">
                  <span className="text-sm font-bold text-primary">{latest.date.split('-')[2]}</span>
                  <span className="text-xs text-muted-foreground">{latest.date.split('-')[1]}月</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      最新
                    </Badge>
                    <span className="text-xs text-muted-foreground">{latest.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{latest.title}</h3>
                  <p className="text-sm text-muted-foreground">{latest.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Previous dailies */}
        <div className="mt-4 space-y-3">
          {aiDaily.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="text-xs text-muted-foreground w-16 shrink-0">{item.date}</span>
              <h4 className="text-sm font-medium flex-1">{item.title}</h4>
              <span className="text-xs text-muted-foreground">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
