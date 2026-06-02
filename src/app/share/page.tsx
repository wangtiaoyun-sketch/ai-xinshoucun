import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  { icon: "📖", title: "20 篇保姆级教程", desc: "从注册到精通，每一步都有截图，零基础也能跟着做" },
  { icon: "🤖", title: "内嵌 AI 沙盒", desc: "边看教程边跟 AI 聊天练习，不用切换任何 App" },
  { icon: "💰", title: "完全免费", desc: "教程、沙盒、模板库全部免费，不花一分钱学 AI" },
  { icon: "🔧", title: "报错锦囊", desc: "搜报错信息秒出解决方案，再也不怕卡住了" },
  { icon: "📊", title: "工具对比", desc: "ChatGPT vs DeepSeek vs Claude 谁是王者？一看便知" },
  { icon: "📋", title: "Prompt 模板库", desc: "一键复制提示词，让 AI 输出质量翻 10 倍" },
]

const tutorials = [
  { emoji: "🤖", name: "ChatGPT", color: "bg-green-500" },
  { emoji: "🧠", name: "DeepSeek", color: "bg-blue-500" },
  { emoji: "⌨️", name: "Claude Code", color: "bg-purple-500" },
  { emoji: "⚡", name: "Codex CLI", color: "bg-orange-500" },
  { emoji: "🖱️", name: "Cursor", color: "bg-cyan-500" },
  { emoji: "🌙", name: "Kimi", color: "bg-indigo-500" },
  { emoji: "🎨", name: "Midjourney", color: "bg-pink-500" },
  { emoji: "🔮", name: "Gemini", color: "bg-yellow-500" },
]

export default function SharePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Hero */}
      <div className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4">
          <Badge className="mb-4 px-4 py-1.5 text-sm" variant="secondary">
            🚀 2026 年最值得收藏的 AI 学习网站
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            0 基础学会 AI
          </h1>
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
            从新手到高手，一个网站就够了
          </p>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
            覆盖 20+ 主流 AI 工具 · 保姆级教程 · 边学边练
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/tutorials">
              <Button size="lg" className="h-12 px-8 text-base font-bold shadow-lg">
                开始学习 📖
              </Button>
            </Link>
            <Link href="/sandbox">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                体验 AI 沙盒 🤖
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            🌐 ai-xinshoucun.vercel.app · 建议收藏到浏览器书签
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">20+</p>
            <p className="text-sm text-muted-foreground">AI 工具覆盖</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-sm text-muted-foreground">分钟教程内容</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">免费</p>
            <p className="text-sm text-muted-foreground">无需付费</p>
          </div>
        </div>
      </div>

      {/* Tutorial Cloud */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">
          📚 你喜欢的热门 AI 工具都有教程
        </h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
          {tutorials.map((t) => (
            <Link key={t.name} href="/tutorials">
              <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-3 flex items-center gap-2">
                  <span className="text-xl">{t.emoji}</span>
                  <span className="text-sm font-semibold">{t.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
          <Card className="border-2">
            <CardContent className="p-3 flex items-center gap-2">
              <span className="text-xl">📚</span>
              <span className="text-sm font-semibold">+12 更多</span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Highlights */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-bold mb-2">
          为什么选择 AI 新手村？
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          不只是教程网站，是你学 AI 的私人教练
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <Card key={h.title} className="hover:shadow-md transition-all">
              <CardContent className="p-5">
                <span className="text-3xl mb-2 block">{h.icon}</span>
                <h3 className="font-bold mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent max-w-xl mx-auto border-primary/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-3">
              这个网站我一直在更新 📝
            </h2>
            <p className="text-muted-foreground mb-6">
              每周增加新教程，紧跟 AI 最新发展。<br/>
              建议收藏，以后学 AI 打开就行。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto font-bold">
                  🚀 访问 ai-xinshoucun.vercel.app
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  💎 支持作者
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer note */}
      <div className="text-center pb-12">
        <p className="text-sm text-muted-foreground">
          Made with ❤️  ·  分享给身边想学 AI 的朋友  ·  🤝 一起成长
        </p>
      </div>
    </div>
  )
}
