import { createSlice,type PayloadAction } from "@reduxjs/toolkit"
import type { Notification } from "../../types/notification"

interface NotificationState {
  notifications: Notification[]
}

const initialState: NotificationState = {
  notifications: []
}

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {

    addNotification: (
      state,
      action: PayloadAction<Notification>
    ) => {
      state.notifications.unshift(action.payload)
    },

    markAllAsRead: (state) => {
  state.notifications = state.notifications.map(n => ({
    ...n,
    read: true
  }))
}

  }
})

export const { addNotification , markAllAsRead} =
  notificationSlice.actions

export default notificationSlice.reducer