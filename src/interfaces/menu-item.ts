export interface MenuItem {
  text: string
  route?: string
  submenu?: MenuItem[]
  ignoreInMenuHighlight?: boolean
}
