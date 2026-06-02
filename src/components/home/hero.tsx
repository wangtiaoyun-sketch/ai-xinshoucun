import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          0 基础学会 AI
          <span className="block text-primary mt-2">从新手到高手</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          覆盖 20+ 主流 AI 工具，保姆级教程，边学边练
        </p>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="你想学什么？搜索教程 / 工具 / 报错..."
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center">
          <Link href="/learning-paths">
            <Button size="lg" className="text-base h-12 px-8">
              开始学习
            </Button>
          </Link>
          <Link href="/tutorials">
            <Button variant="outline" size="lg" className="text-base h-12 px-8">
              浏览教程
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground">
          <div><span className="font-bold text-foreground text-lg">5+</span> 篇教程</div>
          <div><span className="font-bold text-foreground text-lg">20+</span> 工具覆盖</div>
          <div><span className="font-bold text-foreground text-lg">100%</span> 免费</div>
        </div>
      </div>
    </section>
  )
}
