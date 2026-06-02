"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
  const [payMethod, setPayMethod] = useState<"wx" | "zfb" | null>(null)
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
          <Card key={plan.id} className="relative">
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

      {selectedPlan && (
        <div className="max-w-lg mx-auto">
          <Card className="border-primary">
            <CardHeader className="text-center">
              <CardTitle>
                {selectedPlan === "lifetime" ? "终身会员 ¥299" : "Pro 会员 ¥29/月"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 选择支付方式 */}
              {!payMethod ? (
                <div className="space-y-3">
                  <p className="text-sm text-center text-muted-foreground mb-2">选择支付方式</p>
                  <Button
                    variant="outline"
                    className="w-full h-16 justify-start gap-4"
                    onClick={() => setPayMethod("wx")}
                  >
                    <span className="text-2xl">💚</span>
                    <div className="text-left">
                      <p className="font-medium">微信支付</p>
                      <p className="text-xs text-muted-foreground">扫码支付，24 小时内开通</p>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-16 justify-start gap-4"
                    onClick={() => setPayMethod("zfb")}
                  >
                    <span className="text-2xl">💙</span>
                    <div className="text-left">
                      <p className="font-medium">支付宝</p>
                      <p className="text-xs text-muted-foreground">扫码支付，24 小时内开通</p>
                    </div>
                  </Button>
                </div>
              ) : null}

              {/* 微信扫码 */}
              {payMethod === "wx" && (
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/wx.jpg"
                      alt="微信收款码"
                      width={220}
                      height={220}
                      className="mx-auto rounded-lg border"
                    />
                  </div>
                  <p className="text-sm font-medium mb-1">
                    请支付 {selectedPlan === "lifetime" ? "¥299" : "¥29"}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    扫码支付时请备注你的邮箱，付款后 24 小时内开通
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <code className="bg-muted px-3 py-1.5 rounded text-sm">
                      AIxinshoucun
                    </code>
                    <Button variant="outline" size="sm" onClick={handleCopyWx}>
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    付款后截图发给上面微信号，加速开通
                  </p>
                  <Button variant="ghost" size="sm" className="mt-3" onClick={() => setPayMethod(null)}>
                    ← 换一种方式
                  </Button>
                </div>
              )}

              {/* 支付宝扫码 */}
              {payMethod === "zfb" && (
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/zfb.jpg"
                      alt="支付宝收款码"
                      width={220}
                      height={220}
                      className="mx-auto rounded-lg border"
                    />
                  </div>
                  <p className="text-sm font-medium mb-1">
                    请支付 {selectedPlan === "lifetime" ? "¥299" : "¥29"}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    扫码支付时请备注邮箱，付款后 24 小时内开通
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setPayMethod(null)}>
                    ← 换一种方式
                  </Button>
                </div>
              )}

              {/* 爱发电 */}
              <div className="text-center border-t pt-4">
                <a
                  href="https://ifdian.net/a/aixinshoucun?tab=sponsor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-orange-500 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  也可以通过爱发电赞助 →
                </a>
              </div>

              <div className="text-center">
                <Button variant="ghost" size="sm" onClick={() => { setSelectedPlan(null); setPayMethod(null) }}>
                  返回
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>开通后联系客服（微信：AIxinshoucun）即可激活</p>
      </div>
    </div>
  )
}
