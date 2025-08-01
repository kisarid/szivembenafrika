export interface Article {
  id: string
  title: string
  subtitle?: string
  date: string
  author: string
  blocks: Block[]
  cover: Img
  innerCover?: Img
  snippet?: string
}

export type Block =
  | {
      type: 'text'
      content: string
      classes?: string[]
      style?: {}
    }
  | {
      type: 'list'
      content: string[]
      listType: 'ul' | 'ol'
      classes?: string[]
      style?: {}
    }
  | {
      type: 'img'
      content: Img[]
      classes?: string[]
      style?: {}
    }
  | {
      type: 'video'
      url: string
    }

export type Img = {
  name: string
  style: {}
  caption?: string
  class?: string
  wrapperStyle?: {}
}
