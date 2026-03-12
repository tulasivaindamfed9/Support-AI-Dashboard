import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import TicketList from "../components/dashboard/TicketList"
import { useAppSelector } from "../redux/hooks"
import { useEffect } from "react"
import { useAppDispatch } from "../redux/hooks"
import { setTickets } from "../redux/slices/ticketSlice"


const Tickets = () => {
 
const dispatch = useAppDispatch()
// useeffect to load all tickets from local storage through 
// polling(every 3 seconds) to get real-time updates when a new ticket is created by
//  user while admin or agent is logged in
useEffect(() => {

  const interval = setInterval(() => {

    const stored = localStorage.getItem("tickets")

    if (stored) {
      const parsedTickets = JSON.parse(stored)

      dispatch(setTickets(parsedTickets))
    }

  }, 3000) // runs every 3 seconds

  return () => clearInterval(interval)

}, [dispatch])


  const tickets = useAppSelector(
    state => state.tickets.tickets
  )

  const user = useAppSelector(
    state => state.auth.user
  )

  // Filter tickets based on user role
  const filteredTickets = user?.role === "user" 
    ? tickets.filter(ticket => ticket.userId === user.id)
    : tickets

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">

          <h2 className="text-2xl font-bold mb-6">
            All Support Tickets
          </h2>

          <TicketList tickets={filteredTickets} />

        </div>

      </div>

    </div>

  )
}

export default Tickets