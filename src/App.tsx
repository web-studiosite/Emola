import { useState } from "react"
import Agents from "./pages/Agents"
import Sales from "./pages/Sales"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [page, setPage] = useState("dashboard")

  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("agents")}>Agentes</button>
        <button onClick={() => setPage("sales")}>Vendas</button>
      </nav>

      {page === "dashboard" && <Dashboard />}
      {page === "agents" && <Agents />}
      {page === "sales" && <Sales />}
    </div>
  )
}
