// import Navbar from "../components/layout/Navbar"
// import Sidebar from "../components/layout/Sidebar"
// import { useAppSelector } from "../redux/hooks"

// const MyTickets = () => {

//   const user = useAppSelector(state => state.auth.user)

//   const tickets = useAppSelector(state => state.tickets.tickets)
//   console.log("All tickets from Redux:", tickets) // Log all tickets to verify they are being fetched correctly

//   const myTickets = tickets.filter(
//     (ticket) => ticket.userId === user?.id
//   )
//   console.log("My tickets after filtering:", myTickets) // Log the filtered tickets to verify the filtering logic

 

//   return (
//       <div className="flex">

//       <Sidebar />

//       <div className="flex-1 bg-gray-100 min-h-screen">

//         <Navbar />

//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">
//         My Tickets
//       </h1>

//       {myTickets.length === 0 && (
//         <p className="text-gray-500">
//           You have not created any tickets yet.
//         </p>
//       )}

//       <div className="flex flex-col gap-4">

//         {myTickets.map((ticket) => (

//           <div
//             key={ticket.id}
//             className="bg-white dark:bg-gray-800 shadow p-4 rounded"
//           >

//             <h3 className="font-semibold">
//               {ticket.title}
//             </h3>

//             <p className="text-sm text-gray-500">
//               {ticket.description}
//             </p>

//             <div className="flex justify-between mt-3 text-sm">

//               <span className="text-blue-500">
//                 {ticket.priority}
//               </span>

//               <span
//                 className={`${
//                   ticket.status === "open"
//                     ? "text-red-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {ticket.status}
//               </span>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   </div>
//   </div>

//   )
// }

// export default MyTickets


import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import { useAppSelector } from "../redux/hooks"

const MyTickets = () => {

  const user = useAppSelector(state => state.auth.user)

  const tickets = useAppSelector(state => state.tickets.tickets)

  const myTickets = tickets.filter(
    (ticket) => ticket.userId === user?.id
  )

  const getPriorityStyle = (priority:string) => {

    switch(priority){
      case "high":
        return "bg-red-100 text-red-600"
      case "medium":
        return "bg-yellow-100 text-yellow-600"
      default:
        return "bg-green-100 text-green-600"
    }
  }

  const getStatusStyle = (status:string) => {

    switch(status){
      case "open":
        return "bg-red-100 text-red-600"
      case "pending":
        return "bg-yellow-100 text-yellow-600"
      case "resolved":
        return "bg-green-100 text-green-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar/>

        <div className="p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              My Tickets
            </h1>

            <p className="text-gray-500">
              Track all tickets you created
            </p>

          </div>

          {myTickets.length === 0 && (

            <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">

              You haven't created any tickets yet.

            </div>

          )}

          <div className="grid md:grid-cols-2 gap-6">

            {myTickets.map((ticket)=>(

              <div
                key={ticket.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >

                <div className="flex justify-between items-start">

                  <h3 className="font-semibold text-lg">
                    {ticket.title}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(ticket.status)}`}
                  >
                    {ticket.status}
                  </span>

                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {ticket.description}
                </p>

                <div className="mt-4 flex justify-between items-center">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityStyle(ticket.priority)}`}
                  >
                    {ticket.priority} priority
                  </span>

                  <span className="text-xs text-gray-400">
                    Ticket ID: {ticket.id}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default MyTickets