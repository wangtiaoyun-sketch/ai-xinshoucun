import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tutorials, difficultyLabels } from "@/lib/constants"

export function HotTutorials() {
  const hotTutorials = [...tutorials].sort((a, b) => b.readCount - a.readCount).slice(0, 6)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">热门教程</h2>
            <p className="text-muted-foreground mt-1">精选最受欢迎的 AI 教程</p>
          </div>
          <Link
            href="/tutorials"
            className="text-sm text-primary hover:underline"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotTutorials.map((tutorial) => (
            <Link key={tutorial.id} href={`/tutorials/${tutorial.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{tutorial.toolIcon}</span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {tutorial.tool}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {tutorial.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">
                      {difficultyLabels[tutorial.difficulty]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {tutorial.estimatedTime}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {tutorial.updatedAt}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
