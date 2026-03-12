// import { useState } from "react"
// import { toast } from "react-toastify"
// import { useAppDispatch, useAppSelector } from "../redux/hooks"
// import { addTicket } from "../redux/slices/ticketSlice"
// import type { Ticket } from "../types/ticket"
// import Navbar from "../components/layout/Navbar"
// import Sidebar from "../components/layout/Sidebar"
// import { addNotification } from "../redux/slices/notificationSlice"


// const CreateTicket = () => {
//   // Get user from Redux store
//   const user = useAppSelector(state => state.auth.user)
//   const dispatch = useAppDispatch()

//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [priority, setPriority] = useState<"low" | "medium" | "high">("low")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!title || !description) {
//       toast.error("Please fill all fields")
//       return
//     }

//     const newTicket: Ticket = {
//       id: Date.now(), // simple id generation using timestamp
//       userId: user?.id || 0, // link ticket to logged in user
//       title,
//       description,
//       status: "open",
//       priority
//     }

//     dispatch(addTicket(newTicket))

//     toast.success("Ticket created successfully")

//     setTitle("")
//     setDescription("")
//     setPriority("low")

//     // Add notification to redux
//     dispatch(addNotification({
//   id: Date.now(),
//   // the message should ideally be more descriptive, mentioning the ticket title or id
//   message: `New ticket created: ${title}`,
//   time: new Date().toLocaleTimeString(),
//   read: false
// }))
//   }

//   return (
//      <div className="flex">

//       <Sidebar />

//       <div className="flex-1 bg-gray-100 min-h-screen">

//         <Navbar />

//     <div className="p-6">

//       <h2 className="text-2xl font-bold mb-6">
//         Create Support Ticket
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow rounded p-6 max-w-lg"
//       >

//         {/* Title */}

//         <div className="mb-4">

//           <label className="block mb-1 font-medium">
//             Title
//           </label>

//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="Enter issue title"
//           />

//         </div>

//         {/* Description */}

//         <div className="mb-4">

//           <label className="block mb-1 font-medium">
//             Description
//           </label>

//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="Explain the issue"
//           />

//         </div>

//         {/* Priority */}

//         <div className="mb-4">

//           <label className="block mb-1 font-medium">
//             Priority
//           </label>

//           <select
//             value={priority}
//             onChange={(e) =>
//               setPriority(e.target.value as "low" | "medium" | "high")
//             }
//             className="w-full border p-2 rounded"
//           >

//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>

//           </select>

//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Create Ticket
//         </button>

//       </form>

//     </div>
//   </div>
//       </div>
//   )
// }

// export default CreateTicket


import { useState } from "react"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addTicket } from "../redux/slices/ticketSlice"
import type { Ticket } from "../types/ticket"
import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import { addNotification } from "../redux/slices/notificationSlice"

const CreateTicket = () => {

  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low")

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    if (!title || !description) {
      toast.error("Please fill all fields")
      return
    }

    const newTicket: Ticket = {
      id: Date.now(),
      userId: user?.id || 0,
      title,
      description,
      status: "open",
      priority
    }

    dispatch(addTicket(newTicket))

    dispatch(addNotification({
      id: Date.now(),
      message: `New ticket created: ${title}`,
      time: new Date().toLocaleTimeString(),
      read: false
    }))

    toast.success("Ticket created successfully")

    setTitle("")
    setDescription("")
    setPriority("low")
  }

  return (

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar/>

        <div className="p-8 max-w-3xl">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Create Support Ticket
            </h2>

            <p className="text-gray-500">
              Describe your issue and our team will help you
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >

            {/* Title */}

            <div>

              <label className="block text-sm font-semibold mb-2">
                Ticket Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Example: Unable to login"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Description */}

            <div>

              <label className="block text-sm font-semibold mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                rows={4}
                placeholder="Explain the issue in detail..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Priority */}

            <div>

              <label className="block text-sm font-semibold mb-2">
                Priority
              </label>

              <select
                value={priority}
                onChange={(e)=>setPriority(e.target.value as "low"|"medium"|"high")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >

                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>

              </select>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create Ticket
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default CreateTicket