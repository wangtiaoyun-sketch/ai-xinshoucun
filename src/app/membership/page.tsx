"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, QrCode, MessageCircle, ExternalLink } from "lucide-react"

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
      "专属社群",
      "1v1 学习规划咨询",
      "Beta 功能优先体验",
    ],
  },
]

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopyWx = () => {
    navigator.clipboard.writeText("AIxinshoucun")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">💎 会员计划</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          选择适合你的计划，解锁更深度的 AI 学习体验
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {plans.map((plan) => (
          <Card key={plan.id}>
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
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  立即开通
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 支付方式弹出 */}
      {selectedPlan && (
        <div className="max-w-md mx-auto">
          <Card className="border-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">
                {selectedPlan === "lifetime" ? "终身会员 ¥299" : "Pro 会员 ¥29/月"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 微信支付 */}
              <div className="text-center border rounded-lg p-6">
                <QrCode className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <h4 className="font-semibold mb-1">方式一：微信扫码支付</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  扫描下方收款码支付，备注邮箱
                </p>
                <div className="w-48 h-48 mx-auto border rounded-lg bg-muted flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-xs text-center">
                    这里放你的<br/>微信收款码图片
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  付款后截图发给客服，24 小时内开通
                </p>
              </div>

              {/* 微信联系 */}
              <div className="text-center border rounded-lg p-6">
                <MessageCircle className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold mb-1">方式二：微信联系开通</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  添加微信，直接转账开通
                </p>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <code className="bg-muted px-3 py-1.5 rounded text-lg font-bold">
                    AIxinshoucun
                  </code>
                  <Button variant="outline" size="sm" onClick={handleCopyWx}>
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  备注你想开通的会员类型
                </p>
              </div>

              {/* 爱发电 */}
              <div className="text-center border rounded-lg p-6">
                <ExternalLink className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                <h4 className="font-semibold mb-1">方式三：爱发电赞助</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  通过爱发电平台赞助，自动开通
                </p>
                <a
                  href="https://afdian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    去爱发电赞助 →
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPlan(null)}
                >
                  返回
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>开通后联系客服（微信：AIxinshoucun）即可激活</p>
        <p className="mt-1">
          有疑问？<Link href="/community" className="text-primary hover:underline">社区问答</Link>
        </p>
      </div>
    </div>
  )
}
