export interface NewsArticle {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  commentCount: number
  category: string
  tags: string[]
  featuredImage: string
  isFeatured: boolean
  views: number
}

export interface NewsCategory {
  id: number
  name: string
  slug: string
  count: number
}
