import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Ticket } from "../../types/ticket"

interface TicketState {
  tickets: Ticket[]
}

// Load tickets from localStorage
const loadTickets = (): Ticket[] => {
  try {
    const stored = localStorage.getItem("tickets");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
};

const initialState: TicketState = {
  tickets: loadTickets()
}

const ticketSlice = createSlice({

  name: "tickets",

  initialState,

  reducers: {

    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload)
      // Save to localStorage
      localStorage.setItem("tickets", JSON.stringify(state.tickets))
    },

    updateStatus: (
      state,
      action: PayloadAction<{ id: number; status: Ticket["status"] }> //status must match the Ticket type
    ) => {

      const ticket = state.tickets.find(t => t.id === action.payload.id)

      if (ticket) {
        ticket.status = action.payload.status
      }

      // Save to localStorage
      localStorage.setItem("tickets", JSON.stringify(state.tickets))
    },

    updateTicket: (
      state,
      action: PayloadAction<{ id: number; title: string; description: string; priority: Ticket["priority"] }>
    ) => {
      const ticket = state.tickets.find(t => t.id === action.payload.id)

      if (ticket) {
        ticket.title = action.payload.title
        ticket.description = action.payload.description
        ticket.priority = action.payload.priority
      }

      // Save to localStorage
      localStorage.setItem("tickets", JSON.stringify(state.tickets))
    },

    deleteTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload)
      // Save to localStorage
      localStorage.setItem("tickets", JSON.stringify(state.tickets))
    },

    // this reducer is used when a user create ticket and we want to see the updated ticket list in tickets.tsx file -----
    // when already login as agent or admin
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
  state.tickets = action.payload
}
  }
  })
export const { addTicket, updateStatus, updateTicket, deleteTicket, setTickets } = ticketSlice.actions

export default ticketSlice.reducer