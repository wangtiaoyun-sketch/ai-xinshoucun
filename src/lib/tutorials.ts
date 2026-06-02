import { tutorials as baseTutorials, categories, difficultyLabels, difficultyStars, learningPaths, siteConfig, getTutorialsByCategory, getTutorialsByDifficulty, aiDaily } from "./constants"
import { extendedTutorials } from "./constants-extended"
import { aiDailyEntries, errorSolutions, searchErrors, toolComparisons, getDailyBySlug, getComparisonBySlug } from "./constants-three"

export const tutorials = [...baseTutorials, ...extendedTutorials]
export { categories, difficultyLabels, difficultyStars, learningPaths, siteConfig, aiDaily }
export { aiDailyEntries, errorSolutions, searchErrors, toolComparisons }
export { getTutorialsByCategory, getTutorialsByDifficulty, getDailyBySlug, getComparisonBySlug }

export function getTutorialBySlug(slug: string) {
  return tutorials.find((t) => t.slug === slug)
}
