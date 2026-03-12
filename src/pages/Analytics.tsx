

import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import { useAppSelector } from "../redux/hooks"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LabelList,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer
} from "recharts"

const COLORS = ["#ef4444", "#facc15", "#22c55e"]

const Analytics = () => {

  const tickets = useAppSelector(
    state => state.tickets.tickets
  )

  const open = tickets.filter(t => t.status === "open").length
  const pending = tickets.filter(t => t.status === "pending").length
  const resolved = tickets.filter(t => t.status === "resolved").length

  const statusData = [
    { name: "Open", value: open },
    { name: "Pending", value: pending },
    { name: "Resolved", value: resolved }
  ]

  const priorityData = [
    {
      name: "Low",
      value: tickets.filter(t => t.priority === "low").length
    },
    {
      name: "Medium",
      value: tickets.filter(t => t.priority === "medium").length
    },
    {
      name: "High",
      value: tickets.filter(t => t.priority === "high").length
    }
  ]

  return (

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar/>

        <div className="p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Ticket Analytics
            </h2>

            <p className="text-gray-500">
              Insights from your support system
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8">


            {/* Status Chart */}

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold mb-4">
                Ticket Status Distribution
              </h3>
<ResponsiveContainer width="100%" height={300}>

  <PieChart>

    <Pie
      data={statusData}
      dataKey="value"
      nameKey="name"
      outerRadius={100}
      label
    >

      {statusData.map((_, index) => (

        <Cell
          key={index}
          fill={COLORS[index % COLORS.length]}
        />

      ))}

    </Pie>

    <Tooltip />
    <Legend />

  </PieChart>

</ResponsiveContainer>

            </div>


            {/* Priority Chart */}

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="font-semibold mb-4">
                Ticket Priority
              </h3>

             <ResponsiveContainer width="100%" height={300}>

  <BarChart data={priorityData}>

    <CartesianGrid strokeDasharray="3 3" />

    <XAxis dataKey="name" />

    <YAxis allowDecimals={false} />

    <Tooltip />

    <Legend />

    <Bar
      dataKey="value"
      fill="#3b82f6"
      barSize={50}
      radius={[6,6,0,0]}
    >

      <LabelList
        dataKey="value"
        position="top"
      />

    </Bar>

  </BarChart>

</ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Analytics