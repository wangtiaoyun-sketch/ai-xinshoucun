export type Tutorial = {
  id: string
  slug: string
  title: string
  description: string
  tool: string
  toolIcon: string
  category: TutorialCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  updatedAt: string
  readCount: number
  tags: string[]
  content: string
  prerequisites: string[]
  suitable: string[]
  notSuitable: string[]
  relatedTutorials: string[]
}

export type TutorialCategory =
  | 'ai-chat'
  | 'ai-coding'
  | 'ai-agent'
  | 'ai-image'
  | 'ai-video'
  | 'ai-audio'
  | 'ai-writing'

export type LearningPath = {
  id: string
  title: string
  description: string
  icon: string
  targetUser: string
  tutorialSlugs: string[]
}

export type AIDaily = {
  id: string
  title: string
  summary: string
  date: string
  slug: string
}

export type User = {
  id: string
  email: string
  name?: string
  avatarUrl?: string
  createdAt: string
}
