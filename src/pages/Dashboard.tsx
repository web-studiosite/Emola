import { useEffect, useState } from "react"
import { load } from "../services/storage"
import { calculateCommissions } from "../services/commission"

export default function Dashboard() {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    const agents = load("agents")
    const sales = load("sales")

    const commissions = calculateCommissions(agents, sales)

    setData(commissions)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Comissões</h1>

      {Object.entries(data).map(([id, value]) => (
        <div key={id}>
          {id}: € {Number(value).toFixed(2)}
        </div>
      ))}
    </div>
  )
}
