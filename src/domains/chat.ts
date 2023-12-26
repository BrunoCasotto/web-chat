export interface Chat {
  title?: string
  main?: boolean,
  description: string
}

export interface Message {
  content: string
  date: string
  sender: string
  userId: string
}