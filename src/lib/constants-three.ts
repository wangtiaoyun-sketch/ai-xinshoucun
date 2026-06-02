
// ========================================
// 三期数据：AI 日报 / 报错锦囊 / 工具对比
// ========================================

export interface AIDailyEntry {
  id: string
  title: string
  summary: string
  content: string
  date: string
  slug: string
  tags: string[]
}

export const aiDailyEntries: AIDailyEntry[] = [
  {
    id: '1',
    title: 'OpenAI 发布 GPT-5，推理能力大幅提升',
    summary: 'OpenAI 最新模型 GPT-5 在数学推理和代码生成上取得重大突破，推理速度提升 3 倍，支持多模态实时交互。',
    content: '',
    date: '2026-06-02',
    slug: 'gpt5-launch',
    tags: ['OpenAI', 'GPT-5', '大模型'],
  },
  {
    id: '2',
    title: 'DeepSeek 开源新模型，性能接近 GPT-4',
    summary: '国产 AI 公司 DeepSeek 开源最新大模型 DeepSeek-V3，多项基准测试成绩接近 GPT-4，完全免费使用，API 价格仅为 GPT-4 的 1/50。',
    content: '',
    date: '2026-05-31',
    slug: 'deepseek-v3-open-source',
    tags: ['DeepSeek', '开源', '国产AI'],
  },
  {
    id: '3',
    title: 'Claude 推出桌面版，支持语音输入和多文件处理',
    summary: 'Anthropic 发布 Claude 桌面应用，支持语音对话、文件拖拽、代码执行，用户体验大幅提升。',
    content: '',
    date: '2026-05-30',
    slug: 'claude-desktop',
    tags: ['Claude', 'Anthropic', '桌面应用'],
  },
  {
    id: '4',
    title: 'Google Gemini 2.5 Pro 击败 GPT-5 在部分基准测试',
    summary: 'Google 发布 Gemini 2.5 Pro，在长文本理解和多模态推理方面表现优异，部分基准测试超越 GPT-5。',
    content: '',
    date: '2026-05-28',
    slug: 'gemini-2-5-pro',
    tags: ['Google', 'Gemini', '大模型'],
  },
  {
    id: '5',
    title: 'Cursor 获 1 亿美元融资，AI 编程工具赛道持续火热',
    summary: 'AI 编程 IDE Cursor 宣布完成 1 亿美元 B 轮融资，估值达 26 亿美元，AI 编程工具成为今年最热赛道。',
    content: '',
    date: '2026-05-25',
    slug: 'cursor-funding',
    tags: ['Cursor', 'AI编程', '融资'],
  },
  {
    id: '6',
    title: '字节跳动发布豆包大模型，支持 200K 上下文',
    summary: '字节跳动正式发布豆包大模型，支持 200K token 超长上下文，在中文理解方面表现突出，价格极具竞争力。',
    content: '',
    date: '2026-05-22',
    slug: 'doubao-release',
    tags: ['字节跳动', '豆包', '国产AI'],
  },
  {
    id: '7',
    title: 'AI 绘画工具 Midjourney V7 发布，照片级真实感',
    summary: 'Midjourney 发布 V7 版本，在真实感和细节表现上大幅提升，新增视频生成和 3D 建模功能。',
    content: '',
    date: '2026-05-20',
    slug: 'midjourney-v7',
    tags: ['Midjourney', 'AI绘画', '图像生成'],
  },
]

export interface ErrorSolution {
  id: string
  tool: string
  toolIcon: string
  errorMessage: string
  reason: string
  solution: string
  tags: string[]
}

export const errorSolutions: ErrorSolution[] = [
  {
    id: '1',
    tool: 'ChatGPT',
    toolIcon: '🤖',
    errorMessage: 'You have exceeded your current quota, please check your plan and billing details',
    reason: 'API 免费额度已用完',
    solution: '1. 登录 OpenAI 平台查看用量\n2. 升级到付费计划（Plus 或 API 付费）\n3. 或等待下月额度重置\n4. 免费替代：切换使用 DeepSeek 或 Claude 免费版',
    tags: ['API', '额度', '付费'],
  },
  {
    id: '2',
    tool: 'Claude Code',
    toolIcon: '⌨️',
    errorMessage: 'Error: Authentication failed. Please check your API key',
    reason: 'API Key 未设置或已过期',
    solution: '1. 检查环境变量 ANTHROPIC_API_KEY 是否设置\n2. 在 Anthropic Console 重新生成 API Key\n3. 确认 Key 格式正确（以 sk-ant- 开头）\n4. Windows 用户：注意 PowerShell 和 CMD 设置方式不同',
    tags: ['API Key', '认证', '环境变量'],
  },
  {
    id: '3',
    tool: 'DeepSeek',
    toolIcon: '🧠',
    errorMessage: '模型请求频率过高，请稍后再试',
    reason: '免费用户有频率限制（每分钟请求数）',
    solution: '1. 等待 1-2 分钟后重试\n2. 减少并发请求数量\n3. 升级到 DeepSeek 付费版（频率限制大幅提升）\n4. 使用离线/异步方式批量处理',
    tags: ['频率限制', '免费版'],
  },
  {
    id: '4',
    tool: 'Codex CLI',
    toolIcon: '⚡',
    errorMessage: 'npm ERR! code EACCES — permission denied',
    reason: '全局安装权限不足',
    solution: '1. Mac/Linux：在命令前加 sudo\n2. Windows：以管理员身份运行终端\n3. 或使用 npx 代替全局安装\n4. 配置 npm 全局目录为非系统路径',
    tags: ['安装', '权限', 'npm'],
  },
  {
    id: '5',
    tool: '通用',
    toolIcon: '🔧',
    errorMessage: 'Request timed out / 请求超时',
    reason: '网络连接不稳定或 API 服务端负载过高',
    solution: '1. 检查网络连接\n2. 使用代理/VPN（如访问海外服务）\n3. 减少单次请求的 token 数量\n4. 错峰使用（避开高峰期）\n5. 实现重试机制（间隔 3 秒重试 3 次）',
    tags: ['网络', '超时', '常见'],
  },
  {
    id: '6',
    tool: 'ChatGPT',
    toolIcon: '🤖',
    errorMessage: 'The model returned an error: context_length_exceeded',
    reason: '对话内容超过模型上下文限制',
    solution: '1. 开启新对话\n2. 删除对话中不必要的历史消息\n3. 将长文档分段发送\n4. 使用支持更长上下文的模型（如 GPT-4-Turbo 128K）\n5. 使用 RAG 技术处理超长文档',
    tags: ['上下文', 'token限制'],
  },
  {
    id: '7',
    tool: 'Stable Diffusion',
    toolIcon: '🎨',
    errorMessage: 'CUDA out of memory',
    reason: '显卡显存不足',
    solution: '1. 降低生成分辨率\n2. 减少 batch size\n3. 使用 --medvram 或 --lowvram 参数启动\n4. 关闭其他占用显存的程序\n5. 使用云端 GPU 服务（如 RunPod/Replicate）',
    tags: ['显卡', '显存', '本地部署'],
  },
  {
    id: '8',
    tool: '通用',
    toolIcon: '🔧',
    errorMessage: 'API 返回 429 Too Many Requests',
    reason: '请求频率超过 API 限制',
    solution: '1. 检查 Retry-After 响应头，等待指定时间\n2. 实现指数退避重试策略\n3. 使用多个 API Key 轮换\n4. 批量合并请求减少调用次数\n5. 在代码中添加速率限制器',
    tags: ['API', '速率限制', '429'],
  },
]

export interface ToolComparison {
  id: string
  slug: string
  title: string
  description: string
  tools: {
    name: string
    icon: string
    scores: Record<string, number>
    pros: string[]
    cons: string[]
  }[]
  dimensions: { key: string; label: string }[]
  verdict: string
  updatedAt: string
}

export const toolComparisons: ToolComparison[] = [
  {
    id: '1',
    slug: 'chatgpt-vs-deepseek-vs-claude',
    title: 'ChatGPT vs DeepSeek vs Claude — 2026 年 AI 聊天工具横评',
    description: '三款主流 AI 聊天工具全方位对比：价格、中文能力、编程、联网、多模态等',
    tools: [
      {
        name: 'ChatGPT',
        icon: '🤖',
        scores: { price: 6, chinese: 7, code: 8, search: 9, multimodal: 9, speed: 7 },
        pros: ['多模态能力最强', '联网搜索出色', '插件生态丰富', '企业级支持完善'],
        cons: ['免费版限制多', 'Plus 月费 $20', '部分区域需科学上网'],
      },
      {
        name: 'DeepSeek',
        icon: '🧠',
        scores: { price: 10, chinese: 10, code: 8, search: 6, multimodal: 5, speed: 9 },
        pros: ['完全免费', '中文能力最佳', 'API 价格极低', '无需翻墙'],
        cons: ['多模态能力弱', '联网需手动开启', '品牌认知度较低'],
      },
      {
        name: 'Claude',
        icon: '🟣',
        scores: { price: 7, chinese: 8, code: 9, search: 5, multimodal: 7, speed: 8 },
        pros: ['代码能力极强', '长文本处理出色', '安全性高', 'Artifacts 功能'],
        cons: ['不支持联网', '免费版限制严格', '部分地区不可用'],
      },
    ],
    dimensions: [
      { key: 'price', label: '价格' },
      { key: 'chinese', label: '中文能力' },
      { key: 'code', label: '编程' },
      { key: 'search', label: '联网' },
      { key: 'multimodal', label: '多模态' },
      { key: 'speed', label: '速度' },
    ],
    verdict: '如果你追求免费和中文，选 DeepSeek；如果需要多模态和联网，选 ChatGPT Plus；如果主攻编程和长文本，选 Claude。普通用户推荐从 DeepSeek 开始。',
    updatedAt: '2026-06-01',
  },
  {
    id: '2',
    slug: 'claude-code-vs-codex-vs-cursor',
    title: 'Claude Code vs Codex vs Cursor — AI 编程工具怎么选？',
    description: '三大 AI 编程工具深度对比：适用场景、价格、IDE 集成、Git 支持',
    tools: [
      {
        name: 'Claude Code',
        icon: '⌨️',
        scores: { price: 7, integration: 6, git: 9, speed: 8, complexity: 7 },
        pros: ['终端原生操作', 'Git 集成出色', '多文件编辑', 'Anthropic 模型能力'],
        cons: ['需命令行基础', '无 GUI', '仅支持 Claude 模型'],
      },
      {
        name: 'Codex CLI',
        icon: '⚡',
        scores: { price: 8, integration: 5, git: 8, speed: 9, complexity: 6 },
        pros: ['OpenAI 模型驱动', '多语言支持', '自动创建项目', '开源'],
        cons: ['尚在早期阶段', '仅 CLI 模式', '文档不够完善'],
      },
      {
        name: 'Cursor',
        icon: '🖱️',
        scores: { price: 7, integration: 10, git: 7, speed: 8, complexity: 9 },
        pros: ['完整 IDE 体验', 'VS Code 兼容', '行内代码补全', 'Composer 强大'],
        cons: ['收费（$20/月）', '资源占用高', '不完全开源'],
      },
    ],
    dimensions: [
      { key: 'price', label: '价格' },
      { key: 'integration', label: 'IDE 集成' },
      { key: 'git', label: 'Git 支持' },
      { key: 'speed', label: '速度' },
      { key: 'complexity', label: '易上手' },
    ],
    verdict: 'IDE 用户首选 Cursor，体验最完整；终端爱好者选 Claude Code，Git 体验最佳；想尝试最新开源方案选 Codex CLI。',
    updatedAt: '2026-06-01',
  },
]

export function getDailyBySlug(slug: string): AIDailyEntry | undefined {
  return aiDailyEntries.find((d) => d.slug === slug)
}

export function getComparisonBySlug(slug: string): ToolComparison | undefined {
  return toolComparisons.find((c) => c.slug === slug)
}

export function searchErrors(query: string): ErrorSolution[] {
  const q = query.toLowerCase()
  return errorSolutions.filter(
    (e) =>
      e.errorMessage.toLowerCase().includes(q) ||
      e.reason.toLowerCase().includes(q) ||
      e.solution.toLowerCase().includes(q) ||
      e.tags.some((t) => t.toLowerCase().includes(q)) ||
      e.tool.toLowerCase().includes(q)
  )
}

