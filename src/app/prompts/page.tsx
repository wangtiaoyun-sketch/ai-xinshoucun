"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Copy, Check } from "lucide-react"

const promptCategories = [
  { id: "all", label: "全部", icon: "📋" },
  { id: "chat", label: "对话", icon: "💬" },
  { id: "writing", label: "写作", icon: "✍️" },
  { id: "coding", label: "编程", icon: "💻" },
  { id: "analysis", label: "分析", icon: "🔍" },
  { id: "creative", label: "创意", icon: "🎨" },
]

const templates = [
  {
    id: "1",
    title: "角色扮演 — 专家顾问",
    description: "让 AI 扮演特定角色，回答更专业精准",
    category: "chat",
    usageCount: 2340,
    tags: ["通用", "角色扮演"],
    content: "你是一个 [身份]，拥有 [X] 年经验，擅长 [技能]。请帮我 [任务]。要求：[具体要求]。",
  },
  {
    id: "2",
    title: "文案改写润色",
    description: "一键改写文案，支持多种风格切换",
    category: "writing",
    usageCount: 1890,
    tags: ["写作", "润色"],
    content: "请帮我改写下面这段话：\n\n[原文内容]\n\n改写风格：[正式/幽默/简洁/感人]\n目标读者：[谁]\n字数要求：[约 X 字]",
  },
  {
    id: "3",
    title: "代码注释生成",
    description: "自动为你的代码生成清晰的中文注释",
    category: "coding",
    usageCount: 1560,
    tags: ["编程", "注释"],
    content: "请为以下代码添加详细的中文注释，包括：\n1. 每个函数的用途\n2. 关键变量的含义\n3. 复杂逻辑的解释\n\n```\n[粘贴你的代码]\n```",
  },
  {
    id: "4",
    title: "Bug 分析助手",
    description: "把报错信息贴进去，AI 帮你分析并给出解决方案",
    category: "coding",
    usageCount: 2100,
    tags: ["编程", "调试"],
    content: "我遇到了一个错误，请帮我分析和解决：\n\n错误信息：\n```\n[粘贴报错信息]\n```\n\n代码上下文：\n```\n[粘贴相关代码]\n```\n\n我的环境：\n- 操作系统：[Windows/Mac/Linux]\n- 编程语言版本：[X.X]\n- 使用的框架/库：[名称和版本]",
  },
  {
    id: "5",
    title: "周报/日报生成",
    description: "输入工作内容，自动生成专业周报",
    category: "writing",
    usageCount: 3200,
    tags: ["职场", "周报"],
    content: "请帮我生成这周的周报，格式要求：\n- 标题：简洁有力\n- 本周完成：用列表形式\n- 进展中的：说明当前进度和预计完成时间\n- 下周计划：按优先级排序\n- 风险与求助：需要协调的事项\n\n我本周的工作内容：\n[描述你的工作]",
  },
  {
    id: "6",
    title: "数据分析报告",
    description: "上传数据，AI 帮你生成分析报告",
    category: "analysis",
    usageCount: 980,
    tags: ["数据分析", "报告"],
    content: "请分析以下数据，生成一个数据分析报告：\n\n[粘贴你的数据或描述]\n\n报告需要包含：\n1. 数据概览（总量/趋势）\n2. 关键发现（3-5 个）\n3. 异常数据点分析\n4. 建议与行动计划",
  },
  {
    id: "7",
    title: "头脑风暴",
    description: "发散思维，让 AI 帮你想出更多创意",
    category: "creative",
    usageCount: 1450,
    tags: ["创意", "头脑风暴"],
    content: "请帮我为 [主题/项目] 进行头脑风暴：\n\n目标：[具体目标]\n限制条件：[预算/时间/资源等]\n要求：[输出 X 个想法]\n格式：[每个想法包含一句话说明和可行性评估]",
  },
  {
    id: "8",
    title: "翻译 + 本地化",
    description: "不只是翻译，还做本地化适配",
    category: "writing",
    usageCount: 780,
    tags: ["翻译", "本地化"],
    content: "请将以下内容翻译成 [目标语言]，并进行本地化适配：\n\n[原文内容]\n\n要求：\n- 不要逐字翻译，要符合目标语言文化和表达习惯\n- 专业术语保留英文原名并加中文注释\n- 保持原文的语气和风格",
  },
]

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filtered = templates.filter((t) => {
    if (activeCategory !== "all" && t.category !== activeCategory) return false
    if (search && !t.title.includes(search) && !t.description.includes(search) && !t.tags.some((tag) => tag.includes(search))) return false
    return true
  })

  const handleCopy = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">📋 Prompt 模板库</h1>
        <p className="text-muted-foreground max-w-xl">
          精选 AI 提示词模板，一键复制直接使用。让 AI 输出质量翻倍。
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="搜索模板...（标题/描述/标签）"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {promptCategories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon} {cat.label}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((template) => (
          <Card key={template.id} className="group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{template.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <pre className="text-xs bg-muted p-3 rounded-lg mb-3 whitespace-pre-wrap max-h-[150px] overflow-y-auto">
                {template.content}
              </pre>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 flex-wrap">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {template.usageCount.toLocaleString()} 次使用
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(template.content, template.id)}
                  >
                    {copiedId === template.id ? (
                      <>
                        <Check className="h-3 w-3 mr-1" /> 已复制
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" /> 复制
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          没有找到匹配的模板，试试其他关键词
        </div>
      )}
    </div>
  )
}
