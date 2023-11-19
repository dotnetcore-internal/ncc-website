export interface Article {
  id: string,
  title: string,
  date: string,
  img: string,
  url?: string,
}

export interface hasAuthor {
  author: AuthorModel;
}

export interface NewsIndexModel extends Article {
}

export interface AnnouncementIndexModel extends Article, hasAuthor {
}

export interface WeeklyIndexModel extends Article, hasAuthor {
}

export interface AuthorModel {
  id: string,
  name: string,
  avatar: string,
  url?: string
}

export interface PageDescriptor {
  current: number,
  total: number
}