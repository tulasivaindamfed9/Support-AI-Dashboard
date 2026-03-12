import { useNavigate } from "react-router-dom"
import { BarChart3, ShieldCheck, Zap } from "lucide-react"
// imort image from public folder
import dashboardPreview from "../assets/dashboardimage.png"

const LandingPage = () => {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-300 to-blue-100">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md shadow">

        <h1 className="text-2xl font-bold text-blue-700 pl-6"> 
          SupportAI
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => navigate("/login")}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </div>

      </nav>


      {/* HERO */}

      <section className="text-center py-28 px-6">

        <h2 className="text-5xl font-bold mb-6 text-white">

          AI Powered
          <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">

            Support Dashboard

          </span>

        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10">

          Manage customer support tickets, collaborate with agents,
          and resolve issues faster using an intelligent dashboard.

        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-white text-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-blue-700 transition"
          >
            Login
          </button>

        </div>

      </section>


      {/* FEATURES */}

      <section className="py-20 bg-blue-50">

        <h3 className="text-center text-3xl font-bold mb-12 text-blue-700">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">

            <Zap className="text-blue-600 mb-4" size={32}/>

            <h4 className="font-semibold text-lg mb-2">
              AI Ticket Assistance
            </h4>

            <p className="text-gray-600 text-sm">
              Automatically categorize and prioritize tickets with AI.
            </p>

          </div>


          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">

            <BarChart3 className="text-blue-600 mb-4" size={32}/>

            <h4 className="font-semibold text-lg mb-2">
              Analytics Dashboard
            </h4>

            <p className="text-gray-600 text-sm">
              Track performance and ticket trends using live analytics.
            </p>

          </div>


          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">

            <ShieldCheck className="text-blue-600 mb-4" size={32}/>

            <h4 className="font-semibold text-lg mb-2">
              Secure Access
            </h4>

            <p className="text-gray-600 text-sm">
              Role-based access for users, agents, and administrators.
            </p>

          </div>

        </div>

      </section>


      {/* DASHBOARD PREVIEW */}

      <section className="py-24 text-center bg-gradient-to-b from-blue-100 to-white">

        <h3 className="text-3xl font-bold mb-6 text-blue-700">
          Beautiful Support Dashboard
        </h3>

        <p className="text-gray-600 mb-12">
          Track tickets, notifications, and team performance in one place.
        </p>

        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-6">

          <img
            src={dashboardPreview}
            alt="dashboard preview"
            className="rounded-lg"
          />

        </div>

      </section>


      {/* CTA */}

      <section className="py-20 text-center bg-blue-700 text-white">

        <h3 className="text-3xl font-bold mb-4">
          Start Managing Support Smarter
        </h3>

        <p className="mb-8 text-blue-200">
          Join teams improving customer support with AI dashboards.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Create Free Account
        </button>

      </section>


      {/* FOOTER */}

      <footer className="text-center py-6 text-blue-700 text-sm bg-blue-100">

        © {new Date().getFullYear()} SupportAI Dashboard

      </footer>

    </div>

  )
}

export default LandingPage