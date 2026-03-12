export interface Ticket {

  id: number
  userId: number
  title: string
  description: string
  status: "open" | "pending" | "resolved"
  priority: "low" | "medium" | "high"

}