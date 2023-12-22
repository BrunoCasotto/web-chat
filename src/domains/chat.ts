export interface Chat {
  title?: string,
  description: string
}

export interface Message {
  content: string,
  date: string,
  sender: string,
}