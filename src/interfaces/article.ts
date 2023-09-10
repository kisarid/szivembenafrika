export interface Article {
    id: string
    title: string
    date: string
    author: string
    blocks: Block[]
    cover: Img
    innerCover?: Img
}

export type Block = {
    type: 'text'
    content: string
    classes?: string[]
} | {
    type: 'list'
    content: string[]
    listType: 'ul' | 'ol'
    classes?: string[]
} | {
    type: 'img'
    content: Img[]
    classes?: string[]
}

export type Img = {
    name: string
    style: {}
    caption?: string
    class?: string
}