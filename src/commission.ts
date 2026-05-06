import { Agent, Sale } from "../types"

const LEVELS = [0.1, 0.05, 0.02] // níveis

export const calculateCommissions = (
  agents: Agent[],
  sales: Sale[]
) => {
  const result: Record<string, number> = {}

  const getParent = (id?: string) =>
    agents.find(a => a.id === id)

  sales.forEach(sale => {
    let currentAgent = agents.find(a => a.id === sale.agentId)

    LEVELS.forEach((rate) => {
      if (!currentAgent) return

      const parent = getParent(currentAgent.parentId)
      if (!parent) return

      result[parent.id] = (result[parent.id] || 0) + sale.amount * rate

      currentAgent = parent
    })
  })

  return result
}
