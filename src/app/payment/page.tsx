import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">支付成功</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">
            感谢你支持 AI 新手村！我们会尽快为你开通会员服务。
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            开通后，会通过你支付的邮箱通知你。如有疑问，请联系微信：AIxinshoucun
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/">
              <Button>返回首页</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">我的空间</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
