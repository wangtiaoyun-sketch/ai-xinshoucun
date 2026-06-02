"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp, Eye, Send } from "lucide-react"

const mockQuestions = [
  {
    id: "1",
    title: "ChatGPT 和 DeepSeek 哪个更适合用来写代码？",
    content: "我主要是写 Python 和 JavaScript，偶尔需要调试。预算有限，希望尽量免费。求推荐！",
    author: "小明",
    date: "2026-06-01",
    answers: 5,
    views: 234,
    likes: 12,
    tags: ["ChatGPT", "DeepSeek", "编程"],
  },
  {
    id: "2",
    title: "Prompt 写得很长但还是得不到想要的结果怎么办？",
    content: "我已经按照 4S 法则写 prompt 了，但 AI 生成的文案总觉得差点意思。有没有更进阶的技巧？",
    author: "小红",
    date: "2026-05-31",
    answers: 8,
    views: 567,
    likes: 23,
    tags: ["Prompt", "技巧"],
  },
  {
    id: "3",
    title: "想用 AI 做短视频，从哪个工具开始比较好？",
    content: "零基础，想做口播类短视频，需要 AI 帮忙写文案 + 生成画面。时间有限，希望学习成本低。",
    author: "小李",
    date: "2026-05-30",
    answers: 6,
    views: 389,
    likes: 15,
    tags: ["AI视频", "新手", "短视频"],
  },
  {
    id: "4",
    title: "本地部署 AI 模型需要什么配置的电脑？",
    content: "想在自己的电脑上跑开源模型（如 Llama），日常使用不玩专业，预算 1 万以内。",
    author: "阿强",
    date: "2026-05-29",
    answers: 12,
    views: 892,
    likes: 34,
    tags: ["本地部署", "硬件", "开源"],
  },
]

export default function CommunityPage() {
  const [question, setQuestion] = useState("")
  const [detail, setDetail] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">💬 社区问答</h1>
          <p className="text-muted-foreground">有问题？来这里提问，大家一起帮你解决</p>
        </div>
        <Button>+ 提问</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Questions List */}
        <div className="lg:col-span-2 space-y-4">
          {mockQuestions.map((q) => (
            <Card key={q.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">{q.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{q.content}</p>
                <div className="flex items-center gap-2 mb-3">
                  {q.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{q.author}</span>
                  <span>{q.date}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" />{q.answers} 回答</span>
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{q.views}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" />{q.likes}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar - Ask Question */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🤔 提出你的问题</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                placeholder="一句话描述你的问题"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <Textarea
                placeholder="补充更多细节（可选）"
                className="min-h-[100px]"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
              <Button className="w-full">
                <Send className="h-4 w-4 mr-1" /> 提交问题
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔥 热门话题</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT", "DeepSeek", "Prompt", "AI绘画", "AI编程", "Claude", "本地部署", "API", "免费工具", "新手入门"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
