export interface Course {
  id: number
  title: string
  price: string
  description: string
  grade: string
  level: string
  subject: string
  tutor: string
  gender: string
  teacher: {
    name: string
    level: string
    avatar: string
  }
  image: string
}