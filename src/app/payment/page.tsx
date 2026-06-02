"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

function PaymentContent() {
  const params = useSearchParams()
  const success = params.get("success") === "true"
  const plan = params.get("plan")

  return (
    <Card className="max-w-md w-full text-center">
      <CardContent className="p-8">
        <span className="text-6xl block mb-4">{success ? "🎉" : "❌"}</span>
        <h1 className="text-2xl font-bold mb-2">
          {success ? "支付成功！" : "支付取消"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {success
            ? `你已成为 AI 新手村 ${plan === "lifetime" ? "终身" : "Pro"} 会员，现在解锁全部功能！`
            : "支付已取消，可以随时重新订阅。"
          }
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/dashboard">
            <Button>{success ? "进入仪表盘" : "返回首页"}</Button>
          </Link>
          {!success && (
            <Link href="/membership">
              <Button variant="outline">重新选择</Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <Suspense fallback={<div className="text-center">加载中...</div>}>
        <PaymentContent />
      </Suspense>
    </div>
  )
}
