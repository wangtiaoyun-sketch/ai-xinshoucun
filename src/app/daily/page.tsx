import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { aiDailyEntries } from "@/lib/constants-three"

export default function DailyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">📬 AI 日报</h1>
        <p className="text-muted-foreground">每天 3 分钟，掌握 AI 最新动态</p>
      </div>

      <div className="space-y-3 max-w-3xl">
        {aiDailyEntries.map((entry) => (
          <Link key={entry.id} href={`/daily/${entry.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="hidden sm:flex flex-col items-center shrink-0 w-16">
                  <span className="text-lg font-bold text-primary">{entry.date.split("-")[2]}</span>
                  <span className="text-xs text-muted-foreground">{entry.date.split("-")[1]}月</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                    <div className="flex gap-1">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{entry.summary}</p>
                </div>
                <span className="text-muted-foreground shrink-0 hidden sm:block">→</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Newsletter Subscribe */}
      <Card className="mt-8 bg-gradient-to-r from-primary/10 to-transparent">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-2">📧 订阅 AI 日报</h2>
          <p className="text-sm text-muted-foreground mb-4">
            每天早上 9 点，AI 最新资讯推送你的邮箱，让你不错过任何重要动态。
          </p>
          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="输入你的邮箱"
              className="flex-1 px-3 py-2 text-sm border rounded-md bg-background"
            />
            <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              免费订阅
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
