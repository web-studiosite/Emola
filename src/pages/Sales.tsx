import { useEffect, useState } from "react"
import { load, save } from "../services/storage"
import { Agent, Sale } from "../types"
import { v4 as uuid } from "uuid"

export default function Sales() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [sales, setSales] = useState<Sale[]>([])
  const [amount, setAmount] = useState(0)
  const [agentId, setAgentId] = useState("")

  useEffect(() => {
    setAgents(load("agents"))
    setSales(load("sales"))
  }, [])

  const addSale = () => {
    const newSale = {
      id: uuid(),
      agentId,
      amount,
      date: new Date().toISOString()
    }

    const updated = [...sales, newSale]
    setSales(updated)
    save("sales", updated)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Vendas</h1>

      <select onChange={e => setAgentId(e.target.value)} className="border p-2">
        <option>Selecione agente</option>
        {agents.map(a => (
          <option key={a.id} value={a.id}>{a.name}</option>
        ))}
      </select>

      <input
        type="number"
        onChange={e => setAmount(Number(e.target.value))}
        className="border p-2 ml-2"
      />

      <button onClick={addSale} className="bg-green-500 text-white px-4 ml-2">
        Registrar
      </button>
    </div>
  )
}
