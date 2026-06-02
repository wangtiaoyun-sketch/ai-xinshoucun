import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getDailyBySlug, aiDailyEntries } from "@/lib/tutorials"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getDailyBySlug(slug)
  if (!entry) return {}
  return { title: entry.title, description: entry.summary }
}

export default async function DailyDetailPage({ params }: Props) {
  const { slug } = await params
  const entry = getDailyBySlug(slug)
  if (!entry) notFound()

  const prev = aiDailyEntries[aiDailyEntries.findIndex((e) => e.slug === slug) + 1]
  const next = aiDailyEntries[aiDailyEntries.findIndex((e) => e.slug === slug) - 1]

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">首页</Link>
        <span className="mx-2">›</span>
        <Link href="/daily" className="hover:text-foreground">AI 日报</Link>
        <span className="mx-2">›</span>
        <span className="text-foreground">{entry.date}</span>
      </nav>

      <article>
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{entry.date}</span>
          <Separator orientation="vertical" className="h-4" />
          <span>AI 新手村日报</span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{entry.title}</h1>

        <div className="flex gap-2 mb-6">
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed">{entry.summary}</p>
          <div className="mt-6 p-6 bg-muted/30 rounded-lg text-center text-sm text-muted-foreground">
            详细内容和深度分析即将上线，敬请期待 ✨
          </div>
        </div>
      </article>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        {prev ? (
          <Link href={`/daily/${prev.slug}`}>
            <Button variant="outline" size="sm">← {prev.title.slice(0, 20)}...</Button>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/daily/${next.slug}`}>
            <Button variant="outline" size="sm">...{next.title.slice(0, 20)} →</Button>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
