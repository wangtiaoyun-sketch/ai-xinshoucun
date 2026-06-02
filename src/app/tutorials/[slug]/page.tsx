import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { getTutorialBySlug, difficultyLabels, difficultyStars } from "@/lib/constants"
import { TutorialContent } from "@/components/tutorials/tutorial-content"
import { TableOfContents } from "@/components/tutorials/table-of-contents"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tutorial = getTutorialBySlug(slug)
  if (!tutorial) return {}

  return {
    title: tutorial.title,
    description: tutorial.description,
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
    },
  }
}

export default async function TutorialDetailPage({ params }: Props) {
  const { slug } = await params
  const tutorial = getTutorialBySlug(slug)

  if (!tutorial) {
    notFound()
  }

  const relatedTutorials = tutorial.relatedTutorials
    .map((slug) => getTutorialBySlug(slug))
    .filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm breadcrumbs mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">首页</Link>
        <span className="mx-2">›</span>
        <Link href="/tutorials" className="hover:text-foreground">工具教程</Link>
        <span className="mx-2">›</span>
        <span className="text-foreground">{tutorial.title}</span>
      </nav>

      <div className="flex gap-8">
        {/* Main Content */}
        <article className="flex-1 min-w-0 max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{tutorial.toolIcon}</span>
              <div>
                <h1 className="text-3xl font-bold">{tutorial.title}</h1>
                <p className="text-muted-foreground mt-1">{tutorial.description}</p>
              </div>
            </div>

            <Card className="bg-muted/30 mb-6">
              <CardContent className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">工具</span>
                  <p className="font-medium">{tutorial.tool}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">难度</span>
                  <p className="font-medium">{difficultyStars[tutorial.difficulty]} {difficultyLabels[tutorial.difficulty]}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">预计时间</span>
                  <p className="font-medium">{tutorial.estimatedTime}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">更新</span>
                  <p className="font-medium">{tutorial.updatedAt}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-2 flex-wrap mb-4">
              {tutorial.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">⭐ 收藏</Button>
              <Button variant="outline" size="sm">📋 复制链接</Button>
              <Button variant="outline" size="sm">💬 讨论</Button>
            </div>
          </div>

          <Separator className="mb-8" />

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">前置条件</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {tutorial.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <TutorialContent slug={tutorial.slug} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
              <CardContent className="p-4">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ 适合</h3>
                <ul className="space-y-1 text-sm">
                  {tutorial.suitable.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900">
              <CardContent className="p-4">
                <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ 不适合</h3>
                <ul className="space-y-1 text-sm">
                  {tutorial.notSuitable.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {relatedTutorials.length > 0 && (
            <section className="mt-12 mb-8">
              <Separator className="mb-6" />
              <h2 className="text-xl font-bold mb-4">学完之后推荐</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedTutorials.map((t) => t && (
                  <Link key={t.slug} href={`/tutorials/${t.slug}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <span className="text-2xl">{t.toolIcon}</span>
                        <div>
                          <p className="font-medium text-sm">{t.title}</p>
                          <p className="text-xs text-muted-foreground">{t.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 mb-8 p-6 rounded-lg border bg-gradient-to-r from-primary/5 to-transparent">
            <h2 className="text-xl font-bold mb-2">🤖 边学边练</h2>
            <p className="text-sm text-muted-foreground mb-4">
              在下面输入你的问题，AI 助手会帮你解答。
            </p>
            <div className="bg-background rounded-lg border p-4 min-h-[200px]">
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                AI 沙盒功能即将上线，敬请期待 ✨
              </div>
            </div>
          </section>
        </article>

        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-20">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  )
}
