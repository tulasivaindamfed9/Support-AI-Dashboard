// import Sidebar from "../components/layout/Sidebar"
// import Navbar from "../components/layout/Navbar"
// import StatsCard from "../components/dashboard/StatsCard"

// import TicketList from "../components/dashboard/TicketList"


// import { useAppSelector } from "../redux/hooks"
// import { useState } from "react"

// const Dashboard = () => {
// const tickets = useAppSelector(state => state.tickets.tickets)

// const [filter, setFilter] =
// useState<"all" | "open" | "pending" | "resolved">("all")

// const filteredTickets =
//   filter === "all"
//     ? tickets
//     : tickets.filter(t => t.status === filter)

//   const stats = [
//     {
//       title: "Total Tickets",
//       value: 120,
//       color: "border-blue-500"
//     },
//     {
//       title: "Open Tickets",
//       value: 32,
//       color: "border-red-500"
//     },
//     {
//       title: "Resolved Tickets",
//       value: 88,
//       color: "border-green-500"
//     }
//   ]

//   return (

//     <div className="flex">

//       <Sidebar />

//       <div className="flex-1 bg-gray-100 min-h-screen">

//         <Navbar />

//         <div className="p-6">

//           <h2 className="text-2xl font-bold mb-6">
//             Dashboard Overview
//           </h2>

//           <div className="grid grid-cols-3 gap-6">

//             {stats.map((item, index) => (

//               <StatsCard
//                 key={index}
//                 title={item.title}
//                 value={item.value}
//                 color={item.color}
//               />

//             ))}

//           </div>

// {/* Filter Buttons to filter tickets */}
//           <div className="flex gap-3 mt-6">

//   <button
//     onClick={() => setFilter("all")}
//     className="px-3 py-1 bg-gray-300 rounded"
//   >
//     All
//   </button>

//   <button
//     onClick={() => setFilter("open")}
//     className="px-3 py-1 bg-red-400 text-white rounded"
//   >
//     Open
//   </button>

//   <button
//     onClick={() => setFilter("pending")}
//     className="px-3 py-1 bg-yellow-500 text-white rounded"
//   >
//     Pending
//   </button>

//   <button
//     onClick={() => setFilter("resolved")}
//     className="px-3 py-1 bg-green-600 text-white rounded"
//   >
//     Resolved
//   </button>

// </div>
// <TicketList tickets={filteredTickets}/>
//         </div>

//       </div>

//     </div>

//   )
// }

// export default Dashboard


import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
// import StatsCard from "../components/dashboard/StatsCard"
import TicketList from "../components/dashboard/TicketList"

import { useAppSelector } from "../redux/hooks"
import { useState } from "react"

import { Ticket, CheckCircle, AlertCircle } from "lucide-react"

const Dashboard = () => {

  const tickets = useAppSelector(state => state.tickets.tickets)

  const [filter, setFilter] =
    useState<"all" | "open" | "pending" | "resolved">("all")

  const filteredTickets =
    filter === "all"
      ? tickets
      : tickets.filter(t => t.status === filter)

  const stats = [
    {
      title: "Total Tickets",
      value: tickets.length,
      icon: <Ticket size={22}/>,
      color: "bg-blue-500"
    },
    {
      title: "Open Tickets",
      value: tickets.filter(t => t.status === "open").length,
      icon: <AlertCircle size={22}/>,
      color: "bg-red-500"
    },
    {
      title: "Pending Tickets",
      value: tickets.filter(t => t.status === "pending").length,
      icon: <AlertCircle size={22}/>,
      color: "bg-yellow-500"
    },
    {
      title: "Resolved Tickets",
      value: tickets.filter(t => t.status === "resolved").length,
      icon: <CheckCircle size={22}/>,
      color: "bg-green-500"
    }
  ]

  return (

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar/>

        <div className="p-8">

          {/* Page Header */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h2>

            <p className="text-gray-500">
              Monitor support tickets and team activity
            </p>

          </div>


          {/* Stats Cards */}

          <div className="grid md:grid-cols-4 gap-6">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex items-center justify-between"
              >

                <div>

                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    {item.value}
                  </h3>

                </div>

                <div className={`p-3 rounded-lg text-white ${item.color}`}>
                  {item.icon}
                </div>

              </div>

            ))}

          </div>


          {/* Filter Pills */}

          <div className="flex gap-3 mt-8">

            {["all","open","pending","resolved"].map((item) => (

              <button
                key={item}
                onClick={() => setFilter(item as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow hover:bg-gray-100"}
                `}
              >

                {item.toUpperCase()}

              </button>

            ))}

          </div>


          {/* Ticket List */}

          <div className="mt-6">

            <TicketList tickets={filteredTickets}/>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard