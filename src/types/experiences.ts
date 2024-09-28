export interface ArticleDetail {
  img: string
  title: string
  description: string
}

export interface ExperienceDetail {
  title: string
  description: string
  articles: ArticleDetail[]
  personnages: ArticleDetail[]
}