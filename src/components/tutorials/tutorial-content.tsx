"use client"

import { useEffect, useState } from "react"
import { extendedTutorialContents } from "@/lib/constants-extended"

const tutorialContentMap: Record<string, string[]> = {
  "chatgpt-beginners": [
    "### 第一步：注册账号",
    "1. 打开 ChatGPT 官网 chat.openai.com",
    "2. 点击 Sign up 按钮，输入邮箱注册",
    "3. 验证邮箱 + 手机号",
    "4. 完成！开始使用",
    "> 小提示：如果你有 Google 或 Microsoft 账号，可以直接用它们登录",
    "",
    "### 第二步：第一次对话",
    "注册完成后看到一个聊天界面，底部输入框输入：",
    '> 用 100 字解释什么是 AI，让完全不懂技术的人也能听懂',
    "ChatGPT 会流式输出，字一个一个蹦出来",
    "",
    "### 第三步：三个实战案例",
    "案例 1：写一封跟进邮件（语气礼貌但不正式）",
    "案例 2：翻译中文到英文",
    "案例 3：AI 主题线上分享会头脑风暴 10 个主题",
    "",
    "### 第四步：进阶技巧",
    "角色扮演：让 ChatGPT 扮演专家来回答",
    "分步骤提问：复杂问题拆成小步骤",
    "追问和纠正：不满意就说换一种方式",
    "自定义指令：设置里告诉 AI 你的偏好",
    "利用对话历史：同一对话里 AI 记住上下文",
  ],
  "deepseek-beginners": [
    "### 第一步：注册",
    "1. 访问 chat.deepseek.com",
    "2. 手机号注册（国内完美支持）",
    "3. 输入验证码，设置密码",
    "4. 完成注册，直接进入对话",
    "> 好消息：DeepSeek 完全免费，无需绑定信用卡！",
    "",
    "### 第二步：体验核心功能",
    "文本对话：输入问题直接用中文回答",
    "上传文件：支持 PDF/Word/Excel/PPT/图片",
    "联网搜索：点击联网搜索按钮获取最新信息",
    "",
    "### 第三步：实战案例",
    "案例 1：上传 Excel 文件，分析销售趋势",
    "案例 2：写一份产品经理周报",
    "案例 3：用类比解释 Python 列表推导式",
    "",
    "### 进阶技巧",
    "长文处理：1M tokens 上下文，一次性分析整本书",
    "角色设定：告诉它你的身份",
    "多轮对话：持续深入话题",
    "文件批量：多个文件一起分析",
  ],
  "claude-code": [
    "### 第一步：安装",
    "前置条件：Node.js v18+、Git、Anthropic 账号、API Key",
    "安装命令：npm install -g @anthropic-ai/claude-code",
    "配置 API Key：export ANTHROPIC_API_KEY=sk-your-key",
    "",
    "### 第二步：第一个项目",
    "cd my-project → claude 启动 → > 提示符",
    '输入：帮我创建一个简单的 Express 服务器，监听 3000 端口',
    "Claude Code 自动创建文件、安装依赖",
    "",
    "### 第三步：实战案例",
    "给 Todo 应用添加按优先级排序功能",
    "检查用户登录看不到个人信息页面的 Bug",
    "为 src/utils/format.ts 写单元测试",
    "",
    "### 进阶技巧",
    "多文件编辑、Git 集成、终端命令",
    "自动读取项目结构，理解代码上下文",
    "在对话中查看 token 消耗",
  ],
  "codex-beginners": [
    "### 第一步：安装 Codex CLI",
    "前置条件：Node.js v18+、OpenAI API Key",
    "安装：npm install -g @openai/codex",
    '配置：export OPENAI_API_KEY=sk-your-key',
    "",
    "### 第二步：开始使用",
    "codex 启动交互模式",
    '用自然语言描述：创建一个 Next.js 博客项目',
    "",
    "### 第三步：实战案例",
    "写 Python 脚本读取 sales.csv 生成柱状图",
    "创建 Express API 含注册/登录/用户信息接口",
    "创建 React 文件上传组件（拖拽/预览/进度条）",
    "",
    "### 进阶技巧",
    "分步实现、代码审查、重构优化",
    "多语言支持：JS/TS/Python/Rust",
    "集成测试：写端到端测试",
  ],
  "prompt-engineering": [
    "### 什么是 Prompt",
    "Prompt 就是你给 AI 的指令。问法不同，答案质量天差地别",
    '就像去咖啡店：给我杯咖啡 vs 一杯热的、中杯、少糖的燕麦拿铁',
    "Prompt 工程就是学会用精准的指令让 AI 输出你想要的答案",
    "",
    "### 核心原则：4S 法则",
    "Specific 具体：不要写一个方案，要写面向 25-35 岁白领的健身 App 推广方案，预算 5 万",
    "Simple 简洁：一条指令只做一件事",
    "Structure 结构化：用清晰的格式组织要求",
    "Scenario 场景：给 AI 设定角色和场景",
    "",
    "### 实战模板库",
    "角色扮演模板：你是 [身份]，擅长 [技能]，请帮我 [任务]",
    "改写润色模板：改写这段话，风格 [正式/幽默]，目标读者 [谁]",
    "分析总结模板：分析这篇内容的 [关键观点]，列表形式输出",
    "",
    "### 进阶技巧",
    "Few-shot 示例：给 2-3 个例子，AI 更准确",
    "思维链：让 AI 一步一步思考",
    "负向提示：告诉 AI 不要做什么",
    "迭代优化：不满意就继续追问直到满意",
  ],
  ...extendedTutorialContents,
}

export function TutorialContent({ slug }: { slug: string }) {
  const [content, setContent] = useState<string[]>([])

  useEffect(() => {
    setContent(tutorialContentMap[slug] || ["教程内容更新中，敬请期待..."])
  }, [slug])

  if (content.length === 0) return null

  const renderLine = (line: string, index: number) => {
    if (line.startsWith("### ")) {
      return <h3 key={index} id={line.replace("### ", "").toLowerCase().replace(/\s+/g, "-")} className="text-lg font-bold mt-8 mb-3">{line.replace("### ", "")}</h3>
    }
    if (line.startsWith("## ")) {
      return <h2 key={index} className="text-xl font-bold mt-10 mb-4">{line.replace("## ", "")}</h2>
    }
    if (line.startsWith("# ")) {
      return <h1 key={index} className="text-2xl font-bold mt-12 mb-4">{line.replace("# ", "")}</h1>
    }
    if (line.startsWith("> ")) {
      return <blockquote key={index} className="border-l-4 border-primary/30 pl-4 py-1 my-3 text-muted-foreground italic">{line.replace(/^> /, "")}</blockquote>
    }
    if (line.startsWith("```")) {
      return null
    }
    if (line.startsWith("- ")) {
      return <li key={index} className="text-muted-foreground ml-4">{line.replace("- ", "")}</li>
    }
    if (line.trim() === "") {
      return <div key={index} className="h-2" />
    }
    return <p key={index} className="text-muted-foreground leading-relaxed mb-2">{line}</p>
  }

  return (
    <div className="prose-custom">
      {content.map((line, index) => renderLine(line, index))}
    </div>
  )
}
