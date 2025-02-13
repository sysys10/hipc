interface leftSideElementProps {
  name: string
  to?: string
  title: string
  children?: {
    name?: string
    to: string
    title: string
  }[]
}

export type { leftSideElementProps }
