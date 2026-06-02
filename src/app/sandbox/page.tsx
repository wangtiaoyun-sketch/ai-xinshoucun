import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function SandboxPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">🤖 AI 沙盒</h1>
          <p className="text-muted-foreground">
            不用离开网站就能体验 AI 对话。选择你喜欢的模型，输入问题，立即体验。
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>AI 对话</CardTitle>
                <CardDescription>选择模型后开始对话</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>DeepSeek</Button>
                <Button variant="outline" size="sm" disabled>GPT</Button>
                <Button variant="outline" size="sm" disabled>Claude</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="min-h-[400px] border rounded-lg bg-muted/20 mb-4 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-lg mb-2">✨ 沙盒即将上线</p>
                <p className="text-sm">正在接入 DeepSeek API，敬请期待</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Textarea
                placeholder="输入你的问题..."
                className="min-h-[60px] flex-1"
                disabled
              />
              <Button disabled className="self-end">发送</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
