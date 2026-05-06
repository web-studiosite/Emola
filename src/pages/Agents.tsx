import { useEffect, useState } from "react"
import { Agent } from "../types"
import { load, save } from "../services/storage"
import { v4 as uuid } from "uuid"

export default function Agents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [name, setName] = useState("")

  useEffect(() => {
    setAgents(load("agents"))
  }, [])

  const addAgent = () => {
    const newAgent = { id: uuid(), name }
    const updated = [...agents, newAgent]
    setAgents(updated)
    save("agents", updated)
    setName("")
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Agentes</h1>

      <div className="flex gap-2 my-4">
        <input
          className="border p-2"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome do agente"
        />
        <button onClick={addAgent} className="bg-blue-500 text-white px-4">
          Adicionar
        </button>
      </div>

      {agents.map(a => (
        <div key={a.id} className="border p-2 my-1">
          {a.name}
        </div>
      ))}
    </div>
  )
}u
