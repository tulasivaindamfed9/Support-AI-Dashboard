import { NavLink } from "react-router-dom"
import { LayoutDashboard, Ticket, BarChart, LogOut } from "lucide-react"
import { useAppSelector } from "../../redux/hooks"
import { useState } from "react"

const Sidebar = () => {

  const user = useAppSelector((state) => state.auth.user)

  const [collapsed, setCollapsed] = useState(false)

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      roles: ["admin", "agent", "user"]
    },
    {
      name: "Tickets",
      path: "/tickets",
      icon: <Ticket size={20} />,
      roles: ["admin", "agent"]
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart size={20} />,
      roles: ["admin"]
    },
    {
      name: "Create Ticket",
      path: "/create-ticket",
      icon: <Ticket size={20} />,
      roles: ["admin", "agent", "user"]
    },
    {
      name: "My Tickets",
      path: "/my-tickets",
      icon: <Ticket size={20} />,
      roles: ["admin", "agent", "user"]
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <LogOut size={20}/>,
      roles: ["admin","agent","user"]
    }
  ]

  const filteredMenu = menu.filter((item) =>
    item.roles.includes(user?.role || "")
  )

  return (

    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-900 text-white min-h-screen transition-all duration-300 flex flex-col`}
    >

      {/* Logo */}

      <div className="flex items-center justify-between p-6 border-b border-gray-700">

        {!collapsed && (

          <div>

            <h2 className="text-2xl font-bold tracking-wide">
              Support AI
            </h2>

            <p className="text-sm text-gray-400">
              Helpdesk System
            </p>

          </div>

        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white text-lg"
        >
          ☰
        </button>

      </div>


      {/* Menu */}

      <nav className="flex flex-col gap-2 p-4 flex-1">

        {filteredMenu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >

            <span className="flex items-center justify-center">
              {item.icon}
            </span>

            {!collapsed && (
              <span className="text-base font-semibold">
                {item.name}
              </span>
            )}

          </NavLink>

        ))}

      </nav>


      {/* Footer */}

      {!collapsed && (

        <div className="p-5 border-t border-gray-700 text-sm text-gray-400">

          Logged in as

          <p className="text-white text-base font-semibold mt-1">
            {user?.name}
          </p>

        </div>

      )}

    </div>

  )
}

export default Sidebar