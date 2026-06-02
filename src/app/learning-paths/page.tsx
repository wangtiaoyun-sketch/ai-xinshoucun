import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { learningPaths, getTutorialBySlug, difficultyLabels } from "@/lib/tutorials"

export default function LearningPathsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">选择你的学习路径</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          不同角色有不同的学习需求。选一个最符合你的身份，我们会推荐最合适的学习路线。
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {learningPaths.map((path) => {
          const pathTutorials = path.tutorialSlugs
            .map((slug) => getTutorialBySlug(slug))
            .filter(Boolean)

          return (
            <Card key={path.id} id={path.id} className="scroll-mt-20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{path.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">
                    🎯 {path.targetUser}
                  </Badge>
                </div>
                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground">推荐学习顺序：</h4>
                  {pathTutorials.map((t, i) => t && (
                    <div key={t.slug} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <span className="text-lg font-bold text-muted-foreground w-6 shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-xl">{t.toolIcon}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{t.title}</p>
                        <p className="text-xs text-muted-foreground">{t.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {difficultyLabels[t.difficulty]}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Link href={`/tutorials?category=${pathTutorials[0]?.category || ""}`}>
                  <Button variant="default">
                    开始学习 →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
