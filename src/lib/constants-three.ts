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
    content: '### 核心亮点\n\nGPT-5 是 OpenAI 迄今为止最强大的模型，在多个关键维度上实现了显著突破：\n\n**推理速度提升 3 倍**：相比 GPT-4，GPT-5 的响应速度大幅提升，复杂任务的处理时间从分钟级缩短到秒级。这意味着在对话时几乎感受不到等待。\n\n**多模态实时交互**：GPT-5 可以同时处理文字、图片、音频输入，并能进行实时对话。你可以一边说话一边给它看图片，它能理解并回应。\n\n**数学推理重大突破**：在 MATH 和 GSM-8K 等数学基准测试中，GPT-5 的准确率提升了 15 个百分点以上，接近专业数学家水平。\n\n**代码生成质量飞跃**：在编程方面，GPT-5 的代码正确率显著提升，特别是在复杂算法和系统设计方面表现突出。\n\n### 对普通用户的影响\n\n对于 ChatGPT Plus 用户来说，升级到 GPT-5 意味着更快的回答、更精准的理解和更强的创作能力。特别是在写代码、数据分析、长文写作等场景下，体验提升非常明显。\n\n### 行业影响\n\nGPT-5 的发布标志着大语言模型进入新阶段，不再是简单的文字生成，而是真正的多模态理解和推理。这对 AI 行业的影响将持续数年。',
    date: '2026-06-02',
    slug: 'gpt5-launch',
    tags: ['OpenAI', 'GPT-5', '大模型'],
  },
  {
    id: '2',
    title: 'DeepSeek 开源新模型，性能接近 GPT-4',
    summary: '国产 AI 公司 DeepSeek 开源最新大模型 DeepSeek-V3，多项基准测试成绩接近 GPT-4，完全免费使用，API 价格仅为 GPT-4 的 1/50。',
    content: '### 事件概述\n\nDeepSeek 正式开源其最新大模型 DeepSeek-V3，在多项权威基准测试中表现接近 GPT-4，但使用成本仅为 GPT-4 的几十分之一。\n\n### 核心亮点\n\n**完全开源**：模型权重、训练代码、技术报告全部公开，任何人都可以下载、研究、甚至二次开发。这在闭源模型主导的今天尤为难得。\n\n**性能接近 GPT-4**：在 MMLU、HumanEval 等测试中，DeepSeek-V3 的得分达到了 GPT-4 的 90% 以上。\n\n**极低价格**：API 价格仅为 GPT-4 的 1/50，对于需要大量调用 AI 的开发者来说是巨大的利好。\n\n**中文能力突出**：在中文理解、写作、翻译等任务上，DeepSeek-V3 的表现优于 GPT-4，更加贴合国内用户的需求。\n\n### 影响\n\nDeepSeek 的开源策略可能会改变整个 AI 行业的竞争格局。对于普通用户来说，这是最好的时代。',
    date: '2026-05-31',
    slug: 'deepseek-v3-open-source',
    tags: ['DeepSeek', '开源', '国产AI'],
  },
  {
    id: '3',
    title: 'Claude 推出桌面版，支持语音输入和多文件处理',
    summary: 'Anthropic 发布 Claude 桌面应用，支持语音对话、文件拖拽、代码执行，用户体验大幅提升。',
    content: '### 事件概述\n\nAnthropic 正式发布 Claude 桌面应用程序，将 AI 助手从浏览器带入操作系统层面，大幅提升了用户体验和生产力。\n\n### 核心功能\n\n**语音对话**：可以直接对 Claude 说话，Claude 用语音回复。这对于打字不方便的场景非常实用。\n\n**文件拖拽**：从桌面直接拖拽文件到 Claude 窗口，AI 立即读取并分析。\n\n**代码执行**：Claude 桌面版可以直接运行代码并展示结果，不需要离开应用。\n\n### 行业意义\n\n桌面版应用的发布标志着 AI 工具从网页应用向操作系统级工具的演进。当 AI 助手成为桌面环境的一部分时，用户的工作流程会发生根本性变化。',
    date: '2026-05-30',
    slug: 'claude-desktop',
    tags: ['Claude', 'Anthropic', '桌面应用'],
  },
  {
    id: '4',
    title: 'Google Gemini 2.5 Pro 击败 GPT-5 在部分基准测试',
    summary: 'Google 发布 Gemini 2.5 Pro，在长文本理解和多模态推理方面表现优异，部分基准测试超越 GPT-5。',
    content: '### 事件概述\n\nGoogle 发布 Gemini 2.5 Pro，在多模态理解和长文本处理方面展现了领先实力，部分基准测试超越 OpenAI 的 GPT-5。\n\n### 核心亮点\n\n**长文本优势**：Gemini 2.5 Pro 可以处理超过 100 万 token 的上下文，在超长文本检索测试中几乎满分。\n\n**多模态推理**：在需要同时理解文字、图片、视频的复杂任务中展现了出色的推理能力。\n\n**代码生成**：在编程能力上与 GPT-5 差距很小，在某些特定任务上甚至更优。\n\n### 竞争格局\n\nGPT-5 vs Gemini 2.5 Pro 的竞争正在推动整个行业快速进步。对于消费者来说，这是好事，两个顶级 AI 在互相追赶，产品越来越好。',
    date: '2026-05-28',
    slug: 'gemini-2-5-pro',
    tags: ['Google', 'Gemini', '大模型'],
  },
  {
    id: '5',
    title: 'Cursor 获 1 亿美元融资，AI 编程工具赛道持续火热',
    summary: 'AI 编程 IDE Cursor 宣布完成 1 亿美元 B 轮融资，估值达 26 亿美元，AI 编程工具成为今年最热赛道。',
    content: '### 事件概述\n\nAI 编程 IDE Cursor 宣布完成 1 亿美元 B 轮融资，估值达 26 亿美元。这标志着 AI 编程工具赛道成为资本市场最热门的领域之一。\n\n### Cursor 为什么这么火\n\nCursor 的火爆在于它重新定义了编程体验。传统 IDE 是给程序员用的，而 Cursor 让完全不会编程的人也能用自然语言创建软件。\n\n核心产品力包括：AI 代码补全、Composer 多文件编辑、深度上下文理解。\n\n### 行业影响\n\nAI 编程工具的爆发意味着编程门槛大幅降低，更多人能参与软件开发；程序员的工作方式将改变，从写代码转向指导 AI 写代码。',
    date: '2026-05-25',
    slug: 'cursor-funding',
    tags: ['Cursor', 'AI编程', '融资'],
  },
  {
    id: '6',
    title: '字节跳动发布豆包大模型，支持 200K 上下文',
    summary: '字节跳动正式发布豆包大模型，支持 200K token 超长上下文，在中文理解方面表现突出，价格极具竞争力。',
    content: '### 事件概述\n\n字节跳动正式发布豆包大模型，支持 200K token 超长上下文，在中文理解和生成方面表现突出，API 价格极具竞争力。\n\n### 核心能力\n\n**200K 上下文**：可以一次性处理约 15 万字的文本，相当于一本 300 页的书。\n\n**中文能力优化**：作为中国公司开发的模型，豆包在中文语境理解、成语典故、网络热词等方面表现出色。\n\n**价格优势**：API 价格远低于 GPT-4，是国内开发者最具性价比的选择之一。\n\n### 普通用户怎么用\n\n普通用户可以通过豆包 App 或网页版直接使用。相比 ChatGPT，豆包的优势在于国内直接访问无需翻墙，中文理解更自然，完全免费。',
    date: '2026-05-22',
    slug: 'doubao-release',
    tags: ['字节跳动', '豆包', '国产AI'],
  },
  {
    id: '7',
    title: 'AI 绘画工具 Midjourney V7 发布，照片级真实感',
    summary: 'Midjourney 发布 V7 版本，在真实感和细节表现上大幅提升，新增视频生成和 3D 建模功能。',
    content: '### 事件概述\n\nMidjourney 发布 V7 版本，在图像真实感和细节表现上实现了质的飞跃，同时新增了视频生成和基础 3D 建模功能。\n\n### 核心升级\n\n**照片级真实感**：V7 在光影、纹理、材质的渲染上达到了前所未有的真实度。\n\n**细节控制提升**：在手指、眼睛、文字等细节的处理上，V7 的错误率大幅降低。\n\n**视频生成**：新增 AI 视频生成功能，可以从文字描述直接生成短视频。\n\n### 行业影响\n\nMidjourney V7 的发布标志着 AI 绘图进入新阶段，从有趣的玩具变成了真正的生产力工具。',
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
    solution: '1. 检查网络连接\n2. 切换网络（手机热点/traffic 加速器）\n3. 降低请求频率\n4. 使用超时重试机制',
    tags: ['网络', '超时', '通用'],
  },
  {
    id: '6',
    tool: 'ChatGPT',
    toolIcon: '🤖',
    errorMessage: '我们检测到可疑的登录行为，请验证您的账号',
    reason: 'IP 变动频繁或使用了代理',
    solution: '1. 根据提示完成邮箱/手机验证\n2. 关闭代理后再登录\n3. 不要在短时间内多地登录\n4. 开启两步验证（2FA）提高账号安全性',
    tags: ['账号', '安全', '验证'],
  },
  {
    id: '7',
    tool: 'Stable Diffusion',
    toolIcon: '🖼️',
    errorMessage: 'RuntimeError: CUDA out of memory',
    reason: '显存不足',
    solution: '1. 降低分辨率（从 1024 降到 768 或 512）\n2. 降低 Batch Size\n3. 使用 --medvram 或 --lowvram 参数启动\n4. 关闭其他占用显存的程序',
    tags: ['显存', 'CUDA', '本地部署'],
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
  {
    id: '9',
    tool: 'Cursor',
    toolIcon: '🖱️',
    errorMessage: 'Composer request failed. Please check your network and try again.',
    reason: 'Cursor Composer API 请求失败，通常由网络不稳定引起',
    solution: '1. 检查网络连接是否正常\n2. 重启 Cursor\n3. 降级使用 Ctrl+L 对话模式替代\n4. 检查 Cursor 状态页面确认服务正常',
    tags: ['Cursor', 'Composer', 'API'],
  },
  {
    id: '10',
    tool: 'Midjourney',
    toolIcon: '🎨',
    errorMessage: 'Job queued - your image is waiting in the queue.',
    reason: '高峰期排队，Midjourney 服务器负载过高',
    solution: '1. 等待 1-10 分钟自动处理\n2. 避开使用高峰时段（晚上 8-11 点）\n3. 升级付费计划优先排队\n4. 使用 --fast 参数加速',
    tags: ['Midjourney', '排队'],
  },
  {
    id: '11',
    tool: 'Kimi',
    toolIcon: '🌙',
    errorMessage: '当前对话上下文已满，请开始新对话',
    reason: 'Kimi 单次上下文达到 200 万字上限',
    solution: '1. 点击新对话按钮开始新的会话\n2. 减少同时上传的文件数量\n3. 及时提取关键信息后清空上下文',
    tags: ['Kimi', '上下文'],
  },
  {
    id: '12',
    tool: 'Gemini',
    toolIcon: '🔮',
    errorMessage: 'Something went wrong. Please try again later.',
    reason: 'Gemini 临时性服务故障或负载过高',
    solution: '1. 刷新页面重试\n2. 等待 5-10 分钟后再次尝试\n3. 切换 Google 账号试试\n4. 清除浏览器缓存和 Cookie',
    tags: ['Gemini', '服务错误'],
  },
  {
    id: '13',
    tool: 'GitHub Copilot',
    toolIcon: '👨‍💻',
    errorMessage: 'Cannot connect to GitHub. Please check your network.',
    reason: 'VS Code 无法连接到 Copilot 服务器，网络问题',
    solution: '1. 检查网络连接是否正常\n2. 确认能访问 github.com\n3. 检查是否需要配置代理\n4. 注销重新登录 GitHub 账号\n5. 更新 VS Code 和 Copilot 扩展',
    tags: ['Copilot', '网络'],
  },
  {
    id: '14',
    tool: 'Suno',
    toolIcon: '🎵',
    errorMessage: 'Your credit has been exhausted. Please upgrade or wait for reset.',
    reason: 'Suno 免费用户每日生成次数已用完',
    solution: '1. 等待每日额度重置（UTC 0 点）\n2. 升级到付费计划 (/月起)\n3. 用 Extend 功能修改已有歌曲，不消耗额度\n4. 使用 Udio 等替代工具',
    tags: ['Suno', '额度'],
  },
  {
    id: '15',
    tool: 'Cursor',
    toolIcon: '🖱️',
    errorMessage: 'Too many login attempts. Please try again later.',
    reason: '登录失败次数过多触发了频率限制',
    solution: '1. 等待 15-30 分钟后重试\n2. 重置密码\n3. 清除浏览器缓存\n4. 换用其他设备或网络登录',
    tags: ['Cursor', '登录限制'],
  },
  {
    id: '16',
    tool: 'Gamma',
    toolIcon: '📊',
    errorMessage: 'Your free plan limit has been reached this month.',
    reason: 'Gamma 免费版每月 10 份 PPT 已用完',
    solution: '1. 下个月额度自动重置\n2. 升级到 Gamma Pro (/月) 不限量\n3. 用 aippt.cn 或美图 AI PPT 替代\n4. ChatGPT 生成大纲后手动做 PPT',
    tags: ['Gamma', 'PPT', '额度'],
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
        cons: ['免费版限制多', 'Plus 月费 ', '部分区域需科学上网'],
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
        cons: ['收费（/月）', '资源占用高', '不完全开源'],
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
  {
    id: '3',
    slug: 'midjourney-vs-sd-vs-dall-e',
    title: 'Midjourney vs Stable Diffusion vs DALL·E — AI 绘画工具怎么选？',
    description: '三大 AI 绘画工具全方位对比：画质、价格、易用性、定制化能力',
    tools: [
      {
        name: 'Midjourney',
        icon: '🎨',
        scores: { quality: 9, price: 6, speed: 8, ease: 9, customization: 5 },
        pros: ['画质最高艺术感最强', '易上手无需配置', '社区强大 Prompt 资源丰富'],
        cons: ['需要科学上网', '收费 /月起', '无法微调细节'],
      },
      {
        name: 'Stable Diffusion',
        icon: '🖼️',
        scores: { quality: 8, price: 10, speed: 5, ease: 4, customization: 10 },
        pros: ['完全免费本地部署', '自由度最高可微调一切', '控制精度极高 ControlNet'],
        cons: ['安装配置复杂', '需要 NVIDIA 显卡', '学习曲线陡峭'],
      },
      {
        name: 'DALL·E',
        icon: '🎯',
        scores: { quality: 7, price: 7, speed: 9, ease: 10, customization: 4 },
        pros: ['最简单 ChatGPT 内置即用', '文字生成能力强', '生成速度快'],
        cons: ['画质不如 MJ 和 SD', '自定义能力有限', '风格比较单一'],
      },
    ],
    dimensions: [
      { key: 'quality', label: '画质' },
      { key: 'price', label: '价格' },
      { key: 'speed', label: '速度' },
      { key: 'ease', label: '易用' },
      { key: 'customization', label: '定制化' },
    ],
    verdict: '求最好画质选 Midjourney，求免费和自由度选 Stable Diffusion，随手用用选 DALL·E。普通用户从 Midjourney 入门，进阶用户研究 SD。',
    updatedAt: '2026-06-02',
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

