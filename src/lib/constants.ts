import type { Tutorial, LearningPath, AIDaily, TutorialCategory } from '@/types'

export const categories: { id: TutorialCategory; label: string; icon: string }[] = [
  { id: 'ai-chat', label: 'AI 对话', icon: '💬' },
  { id: 'ai-coding', label: 'AI 编程', icon: '💻' },
  { id: 'ai-agent', label: 'AI Agent', icon: '🤖' },
  { id: 'ai-image', label: 'AI 绘图', icon: '🎨' },
  { id: 'ai-video', label: 'AI 视频', icon: '🎬' },
  { id: 'ai-audio', label: 'AI 音频', icon: '🎵' },
  { id: 'ai-writing', label: 'AI 写作', icon: '✍️' },
]

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner',
    title: '我是零基础小白',
    description: '完全没接触过 AI？从这里开始，一步步带你入门',
    icon: '🌟',
    targetUser: '零基础用户',
    tutorialSlugs: ['prompt-engineering', 'chatgpt-beginners'],
  },
  {
    id: 'programmer',
    title: '我是程序员',
    description: '用 AI 提升编程效率，学会 AI 编程工具和 Agent',
    icon: '💻',
    targetUser: '程序员 / 开发者',
    tutorialSlugs: ['claude-code', 'codex-beginners'],
  },
  {
    id: 'creator',
    title: '我是内容创作者',
    description: '用 AI 生成文案、图片、视频，效率翻倍',
    icon: '🎨',
    targetUser: '自媒体 / 创作者',
    tutorialSlugs: ['chatgpt-beginners', 'prompt-engineering'],
  },
  {
    id: 'operator',
    title: '我是运营/职场人',
    description: '用 AI 写周报、做PPT、分析数据，升职加薪',
    icon: '📊',
    targetUser: '运营 / 职场人士',
    tutorialSlugs: ['prompt-engineering', 'deepseek-beginners'],
  },
]


export const tutorials: Tutorial[] = [
  {
    id: '1',
    slug: 'chatgpt-beginners',
    title: 'ChatGPT 从零开始 — 新手最全入门指南',
    description: '从注册到实战，30 分钟学会用 ChatGPT 写文案、翻译、编程、头脑风暴',
    tool: 'ChatGPT',
    toolIcon: '🤖',
    category: 'ai-chat',
    difficulty: 'beginner',
    estimatedTime: '30 分钟',
    updatedAt: '2026-06-01',
    readCount: 15234,
    tags: ['#ChatGPT', '#AI对话', '#新手入门'],
    content: '',
    prerequisites: ['一台能上网的电脑或手机', '邮箱（推荐 Gmail）', '可以接收短信的手机号'],
    suitable: ['完全没接触过 AI 的新手', '想用 ChatGPT 提高工作效率的职场人', '想做自媒体但不会写文案的创作者'],
    notSuitable: ['已经熟练使用 ChatGPT 的进阶用户', '需要专业 API 开发的程序员'],
    relatedTutorials: ['prompt-engineering', 'deepseek-beginners', 'claude-code'],
  },
  {
    id: '2',
    slug: 'deepseek-beginners',
    title: 'DeepSeek 保姆级教程 — 国产最强 AI 怎么用？',
    description: '完全免费的国产 AI 神器，从注册到进阶用法一篇搞定',
    tool: 'DeepSeek',
    toolIcon: '🧠',
    category: 'ai-chat',
    difficulty: 'beginner',
    estimatedTime: '20 分钟',
    updatedAt: '2026-06-01',
    readCount: 9821,
    tags: ['#DeepSeek', '#AI对话', '#国产AI'],
    content: '',
    prerequisites: ['一台能上网的设备', '手机号（国内可注册）'],
    suitable: ['不想花钱用 AI 的用户', '国内用户（无需翻墙）', '需要中文优化的 AI 助手'],
    notSuitable: ['需要使用 GPT-4 级别模型的高级用户', '需要联网搜索功能的用户'],
    relatedTutorials: ['chatgpt-beginners', 'prompt-engineering'],
  },
  {
    id: '3',
    slug: 'claude-code',
    title: 'Claude Code 从安装到精通 — 程序员的 AI 编程搭档',
    description: '手把手教你安装和使用 Claude Code，在终端里用自然语言写代码',
    tool: 'Claude Code',
    toolIcon: '⌨️',
    category: 'ai-coding',
    difficulty: 'intermediate',
    estimatedTime: '2 小时',
    updatedAt: '2026-06-01',
    readCount: 7654,
    tags: ['#ClaudeCode', '#AI编程', '#Agent', '#终端工具'],
    content: '',
    prerequisites: ['会使用终端/命令行', '安装了 Node.js (v18+)', 'Git 基础', 'Anthropic 账号'],
    suitable: ['想用 AI 辅助编程的开发者', '对 AI Agent 感兴趣的工程师', '想提高编码效率的程序员'],
    notSuitable: ['完全不会编程的纯小白', '不使用命令行工具的开发者'],
    relatedTutorials: ['codex-beginners', 'prompt-engineering'],
  },
  {
    id: '4',
    slug: 'codex-beginners',
    title: 'Codex CLI 入门 — OpenAI 的 AI 编程助手',
    description: '用自然语言写代码，Codex CLI 让编程变得像聊天一样简单',
    tool: 'Codex CLI',
    toolIcon: '⚡',
    category: 'ai-coding',
    difficulty: 'intermediate',
    estimatedTime: '1.5 小时',
    updatedAt: '2026-06-01',
    readCount: 5432,
    tags: ['#Codex', '#AI编程', '#OpenAI', '#CLI'],
    content: '',
    prerequisites: ['终端/命令行基础', 'Node.js (v18+)', 'OpenAI API Key'],
    suitable: ['想用 AI 写全栈项目的开发者', '喜欢终端操作的程序员', '想尝试 AI Agent 编程的用户'],
    notSuitable: ['没有编程基础的小白', '只习惯图形界面的用户'],
    relatedTutorials: ['claude-code', 'prompt-engineering'],
  },
  {
    id: '5',
    slug: 'prompt-engineering',
    title: 'Prompt 工程入门 — 学会跟 AI 聊天就能吃香的技能',
    description: '掌握提示词技巧，让 AI 输出质量翻 10 倍。适用于所有主流 AI 工具',
    tool: '通用',
    toolIcon: '📝',
    category: 'ai-chat',
    difficulty: 'beginner',
    estimatedTime: '1 小时',
    updatedAt: '2026-06-01',
    readCount: 21876,
    tags: ['#Prompt', '#提示词', '#AI对话', '#通用技能'],
    content: '',
    prerequisites: ['使用过至少一款 AI 聊天工具', '有明确的想用 AI 完成的任务'],
    suitable: ['所有 AI 工具使用者', '觉得 AI 回答不够好的用户', '想更高效使用 AI 的职场人'],
    notSuitable: ['完全没用过 AI 的绝对新手（建议先看 ChatGPT 教程）'],
    relatedTutorials: ['chatgpt-beginners', 'deepseek-beginners', 'claude-code'],
  },
]

export const aiDaily: AIDaily[] = [
  {
    id: '1',
    title: 'OpenAI 发布 GPT-5，推理能力大幅提升',
    summary: 'OpenAI 最新模型 GPT-5 在数学推理和代码生成上取得重大突破，推理速度提升 3 倍。',
    date: '2026-06-01',
    slug: 'gpt5-launch',
  },
  {
    id: '2',
    title: 'DeepSeek 开源新模型，性能接近 GPT-4',
    summary: '国产 AI 公司 DeepSeek 开源最新大模型，多项基准测试成绩接近 GPT-4，完全免费。',
    date: '2026-05-31',
    slug: 'deepseek-open-source',
  },
  {
    id: '3',
    title: 'Claude 推出桌面版，支持语音输入',
    summary: 'Anthropic 发布 Claude 桌面应用，支持语音对话、文件拖拽，用户体验大幅提升。',
    date: '2026-05-30',
    slug: 'claude-desktop',
  },
]

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug)
}

export function getTutorialsByCategory(category: TutorialCategory): Tutorial[] {
  return tutorials.filter((t) => t.category === category)
}

export function getTutorialsByDifficulty(difficulty: string): Tutorial[] {
  return tutorials.filter((t) => t.difficulty === difficulty)
}

export const difficultyLabels: Record<string, string> = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '高级',
}

export const difficultyStars: Record<string, string> = {
  beginner: '⭐',
  intermediate: '⭐⭐',
  advanced: '⭐⭐⭐',
}

export const siteConfig = {
  name: 'AI 新手村',
  description: '0 基础学会 AI，从新手到高手。覆盖 20+ 主流 AI 工具，保姆级教程，边学边练。',
  url: 'https://ai-xinshoucun.vercel.app',
  ogImage: '/og.png',
  author: 'AI 新手村',
}


