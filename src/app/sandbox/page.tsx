"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Sparkles } from "lucide-react"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
}

const suggestedQuestions = [
  "什么是 Prompt 工程？",
  "怎么用 AI 写周报？",
  "Claude Code 和 Codex 有什么区别？",
  "帮我写一段 Python 代码，读取 CSV 文件并生成图表",
]

export default function SandboxPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasKey, setHasKey] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Check if API key is configured
  useEffect(() => {
    const hasKey = process.env.NEXT_PUBLIC_DEEPSEEK_ENABLED === "true"
    setHasKey(hasKey)
  }, [])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "你是 AI 新手村的学习助手。用友好、口语化的方式回答问题，尽量用类比帮助新手理解。用中文回答。",
            },
            ...messages,
            userMessage,
          ],
        }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `抱歉，出错了：${data.error}` },
        ])
      } else {
        const aiMessage = data.choices?.[0]?.message
        if (aiMessage) {
          setMessages((prev) => [...prev, aiMessage])
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "网络错误，请稍后重试" },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">🤖 AI 沙盒</h1>
          <p className="text-muted-foreground">
            边学边练 — 在下方输入问题，AI 助手会实时解答
          </p>
        </div>

        {!hasKey && (
          <Card className="mb-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4">
              <p className="text-sm">
                ⚠️ DeepSeek API Key 尚未配置。请设置 <code className="text-xs bg-muted px-1 rounded">DEEPSEEK_API_KEY</code> 环境变量后重新部署。
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="p-0">
            <div className="min-h-[400px] max-h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <Sparkles className="h-12 w-12 text-primary/40 mb-4" />
                  <p className="text-muted-foreground mb-4">选择一个问题开始体验，或输入你的问题</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestedQuestions.map((q) => (
                      <Badge
                        key={q}
                        variant="secondary"
                        className="cursor-pointer hover:bg-muted px-3 py-1.5"
                        onClick={() => {
                          setInput(q)
                        }}
                      >
                        {q}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`p-3 rounded-lg text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}>
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {loading && (
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-muted text-sm">
                    <span className="animate-pulse">思考中...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Textarea
            placeholder="输入你的问题... (Enter 发送，Shift+Enter 换行)"
            className="min-h-[60px] flex-1 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading || !hasKey}
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim() || !hasKey}
            className="self-end"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          由 DeepSeek API 驱动 · 对话数据不会被保存
        </p>
      </div>
    </div>
  )
}
