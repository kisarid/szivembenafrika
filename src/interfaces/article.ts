export interface Article {
    id: string
    title: string
    date: string
    author: string
    blocks: ({ type: 'text', content: string } | {type: 'img', content: Img[]})[]
    cover: Img
    innerCover?: Img
}

interface Img {
    name: string
    style: {}
    wrapperStyle?: {}
}