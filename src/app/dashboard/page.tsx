"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { tutorials, difficultyLabels } from "@/lib/tutorials"
import type { User } from "@supabase/supabase-js"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [noSupabase, setNoSupabase] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (!supabase) {
      setNoSupabase(true)
      setLoading(false)
      return
    }

    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        router.push("/auth/login")
        return
      }
      setUser(data.user)
      setLoading(false)

      const { data: favs } = await supabase.from("favorites").select("tutorial_slug")
      if (favs) {
        const favData = favs as { tutorial_slug: string }[]
        setFavorites(favData.map((f) => f.tutorial_slug))
      }

      const { data: prog } = await supabase.from("learning_progress").select("tutorial_slug, progress_percent")
      if (prog) {
        const progData = prog as { tutorial_slug: string; progress_percent: number }[]
        const map: Record<string, number> = {}
        progData.forEach((p) => (map[p.tutorial_slug] = p.progress_percent))
        setProgress(map)
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    )
  }

  if (noSupabase) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <span className="text-4xl mb-4 block">🔧</span>
            <h2 className="text-xl font-bold mb-2">数据库未配置</h2>
            <p className="text-muted-foreground text-sm mb-4">
              在 Vercel 环境变量中设置 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY 后，
              用户系统将自动启用。
            </p>
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const favoriteTutorials = tutorials.filter((t) => favorites.includes(t.slug))
  const inProgress = tutorials.filter((t) => progress[t.slug] && progress[t.slug] < 100)
  const completed = tutorials.filter((t) => progress[t.slug] === 100)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">我的学习空间</h1>
          <p className="text-muted-foreground">
            欢迎回来，{user?.user_metadata?.name || user?.email}
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          退出登录
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">📚 学习进度</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {completed.length}<span className="text-base text-muted-foreground font-normal">/{tutorials.length} 完成</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">⭐ 收藏</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{favorites.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">🔖 进行中</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{inProgress.length}</p>
          </CardContent>
        </Card>
      </div>

      {inProgress.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">⏳ 继续学习</h2>
          <div className="space-y-3">
            {inProgress.map((t) => (
              <Link key={t.slug} href={`/tutorials/${t.slug}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <span className="text-2xl">{t.toolIcon}</span>
                    <div className="flex-1">
                      <p className="font-medium">{t.title}</p>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${progress[t.slug]}%` }} />
                      </div>
                    </div>
                    <Badge variant="secondary">{progress[t.slug]}%</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">⭐ 我的收藏</h2>
        {favoriteTutorials.length === 0 ? (
          <p className="text-muted-foreground text-sm">还没有收藏任何教程，去浏览教程吧</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favoriteTutorials.map((t) => (
              <Link key={t.slug} href={`/tutorials/${t.slug}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <span className="text-2xl">{t.toolIcon}</span>
                    <div>
                      <p className="font-medium text-sm">{t.title}</p>
                      <p className="text-xs text-muted-foreground">{t.tool}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">🎓 全部教程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutorials.map((t) => (
            <Link key={t.slug} href={`/tutorials/${t.slug}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{t.toolIcon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{t.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{difficultyLabels[t.difficulty]}</Badge>
                      {progress[t.slug] === 100 && <Badge variant="default" className="text-xs">✅ 已学完</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
