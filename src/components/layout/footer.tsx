import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌱</span>
              <span className="text-xl font-bold">AI 新手村</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI 时代的"新华字典"，不会用 AI 的人，来这里查。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">快速链接</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tutorials" className="hover:text-foreground transition-colors">工具教程</Link></li>
              <li><Link href="/learning-paths" className="hover:text-foreground transition-colors">学习路径</Link></li>
              <li><Link href="/sandbox" className="hover:text-foreground transition-colors">AI 沙盒</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">教程分类</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tutorials?category=ai-chat" className="hover:text-foreground transition-colors">AI 对话</Link></li>
              <li><Link href="/tutorials?category=ai-coding" className="hover:text-foreground transition-colors">AI 编程</Link></li>
              <li><Link href="/tutorials?category=ai-agent" className="hover:text-foreground transition-colors">AI Agent</Link></li>
              <li><Link href="/tutorials?category=ai-image" className="hover:text-foreground transition-colors">AI 绘图</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">关于</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">关于我们</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">联系我们</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">隐私政策</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">友情链接</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI 新手村. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
