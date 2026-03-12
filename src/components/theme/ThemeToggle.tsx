import { useState } from "react"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {

  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (

    <div className="relative group flex items-center">

      <button
        onClick={toggleTheme}
        className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
      >

        {/* Toggle circle */}

        <div
          className={`w-5 h-5 bg-white rounded-full shadow flex items-center justify-center transform transition
          ${dark ? "translate-x-6" : "translate-x-0"}`}
        >

          {dark ? <Moon size={12}/> : <Sun size={12}/>}

        </div>

      </button>

      {/* Tooltip */}

      <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">

        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}

      </span>

    </div>
  )
}

export default ThemeToggle