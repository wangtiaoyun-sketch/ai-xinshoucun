"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Loader2 } from "lucide-react"

const plans = [
  {
    id: "free",
    name: "免费版",
    price: "¥0",
    period: "永久",
    description: "适合刚入门的新手",
    popular: false,
    features: [
      "5 篇精华教程",
      "AI 沙盒（每日 10 次）",
      "Prompt 模板库",
      "报错锦囊",
      "AI 日报阅读",
      "基础工具对比",
    ],
  },
  {
    id: "pro",
    name: "Pro 会员",
    price: "¥29",
    period: "/月",
    description: "适合进阶学习者",
    popular: true,
    features: [
      "全部教程无限阅读",
      "AI 沙盒（无限次）",
      "GPT / Claude 高级模型",
      "专属 Prompt 模板",
      "学习进度追踪",
      "去广告体验",
      "每月 2 次专家答疑",
      "优先获取新教程",
    ],
  },
  {
    id: "lifetime",
    name: "终身会员",
    price: "¥299",
    period: "一次性",
    description: "一劳永逸的选择",
    popular: false,
    features: [
      "Pro 会员全部权益",
      "终身有效，无需续费",
      "专属 Discord 社群",
      "1v1 学习规划咨询",
      "Beta 功能优先体验",
      "Affiliate 分成资格",
    ],
  },
]

export default function MembershipPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState("")
  const stripeEnabled = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const handleSubscribe = async (planId: string) => {
    if (!stripeEnabled) {
      setError("支付系统暂未配置")
      return
    }
    setLoading(planId)
    setError("")
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || "创建支付失败")
      }
    } catch {
      setError("网络错误，请稍后重试")
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">💎 会员计划</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          选择适合你的计划，解锁更深度的 AI 学习体验
        </p>
        {!stripeEnabled && (
          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm inline-block">
            ⚠️ 支付系统配置中 — 去{" "}
            <a href="https://dashboard.stripe.com" target="_blank" className="underline">Stripe</a>
            {" "}创建账户后告诉我
          </div>
        )}
      </div>

      {error && (
        <div className="max-w-md mx-auto mb-6 p-3 text-sm bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.id} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">🔥 最受欢迎</Badge>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              {plan.id === "free" ? (
                <Button variant="outline" className="w-full" disabled>
                  当前方案
                </Button>
              ) : (
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading === plan.id}
                >
                  {loading === plan.id ? (
                    <><Loader2 className="h-4 w-4 animate-spin mr-1" /> 跳转中...</>
                  ) : (
                    plan.id === "lifetime" ? "一次购买" : "立即订阅"
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>有疑问？<Link href="/community" className="text-primary hover:underline">社区问答</Link></p>
      </div>
    </div>
  )
}
