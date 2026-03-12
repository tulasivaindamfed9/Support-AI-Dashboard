import { useState, useRef, useEffect } from "react"
import { useAppSelector } from "../../redux/hooks"
import { Bell } from "lucide-react"
import { useAppDispatch } from "../../redux/hooks"
import { markAllAsRead } from "../../redux/slices/notificationSlice"

const NotificationBell = () => {

  const [open, setOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const notifications = useAppSelector(
    state => state.notifications.notifications
  )

  // Close dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }

    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  const dispatch = useAppDispatch()

const handleToggle = () => {

  setOpen(!open)

  if (!open) {
    dispatch(markAllAsRead())
  }

}


const unreadCount = notifications.filter(n => !n.read).length

  return (

    <div ref={dropdownRef} className="relative">

      {/* Bell Button */}

      <button
        onClick={handleToggle}
        className="relative hover:scale-105 transition"
      >

        <Bell size={20} />

        {/* Notification Badge */}

      {unreadCount > 0 && (

  <span
    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
    w-4 h-4 flex items-center justify-center rounded-full animate-pulse"
  >

    {unreadCount}

  </span>

)}

      </button>

      {/* Dropdown */}

      {open && (

        <div
          className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg
          border p-3 text-gray-800 z-20 animate-fadeIn"
        >

          <h4 className="font-semibold mb-2">
            Notifications
          </h4>

          {/* No Notifications */}

          {notifications.length === 0 && (

            <p className="text-sm text-gray-500">
              No notifications
            </p>

          )}

          {/* Notification List */}

          <div className="max-h-60 overflow-y-auto">

            {notifications.map(n => (

              <div
                key={n.id}
                className="border-b last:border-none py-2 text-sm"
              >

                <p>{n.message}</p>

                <span className="text-xs text-gray-400">
                  {n.time}
                </span>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>

  )
}

export default NotificationBell