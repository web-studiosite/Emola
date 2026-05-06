export type Agent = {
  id: string
  name: string
  parentId?: string
}

export type Sale = {
  id: string
  agentId: string
  amount: number
  date: string
}
