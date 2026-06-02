import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { learningPaths } from "@/lib/tutorials"

export function LearningPaths() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">选择你的角色</h2>
          <p className="text-muted-foreground">我们为你推荐最合适的学习路径</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learningPaths.map((path) => (
            <Link key={path.id} href={`/learning-paths#${path.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <span className="text-4xl mb-2 block">{path.icon}</span>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-primary">
                    {path.targetUser}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
