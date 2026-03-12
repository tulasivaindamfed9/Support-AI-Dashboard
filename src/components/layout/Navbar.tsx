
import { useSelector, useDispatch } from "react-redux"
import { useState, useRef, useEffect } from "react"
import type { RootState, AppDispatch } from "../../redux/store"
import { useNavigate } from "react-router-dom"
import { logout } from "../../redux/slices/authSlice"
import { LogOut, User } from "lucide-react"

import ThemeToggle from "../theme/ThemeToggle"
import NotificationBell from "../notifications/NotificationBell"

const Navbar = () => {

  const user = useSelector((state: RootState) => state.auth.user)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("user")
    navigate("/")
  }

  // close dropdown on outside click
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

  return (

    <div className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md">

      {/* LEFT SIDE */}

      <h1 className="font-semibold text-lg tracking-wide">
        Support AI Dashboard
      </h1>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-6">

        <NotificationBell />

        <ThemeToggle />

        {user && (

          <div ref={dropdownRef} className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 hover:bg-blue-700 px-3 py-1.5 rounded-md transition"
            >

              {/* Avatar */}

              <div className="w-8 h-8 rounded-full bg-white text-blue-600 
              flex items-center justify-center font-semibold text-sm">

                {user.name.charAt(0).toUpperCase()}

              </div>

              <span className="text-sm font-medium">
                {user.name}
              </span>

            </button>

            {/* Dropdown */}

            {open && (

              <div
                className="absolute right-0 mt-3 w-44 bg-white text-gray-700
                rounded-lg shadow-lg border z-20 animate-fadeIn"
              >

                <button
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <User size={16}/>
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  <LogOut size={16}/>
                  Logout
                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </div>

  )
}

export default Navbar

