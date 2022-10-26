export interface Article {
    id: string
    title: string
    date: string
    author: string
    text: string[]
    img: { name: string, objectPosition: string }[]
    cover?: { name: string, objectPosition: string }
}
