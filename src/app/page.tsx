import { Hero } from '@/components/home/hero'
import { LearningPaths } from '@/components/home/learning-paths'
import { HotTutorials } from '@/components/home/hot-tutorials'
import { AIDaily } from '@/components/home/ai-daily'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LearningPaths />
      <HotTutorials />
      <AIDaily />
    </main>
  )
}
