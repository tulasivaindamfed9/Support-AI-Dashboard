import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import CreateTicket from "./pages/CreateTicket"
import Tickets from "./pages/Tickets"
import Analytics from "./pages/Analytics"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import MyTickets from "./pages/MyTickets"
import Logout from "./pages/Logout"
import LandingPage from "./pages/LandingPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/logout" element={<Logout />} />

        {/* Dashboard → all roles */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin","agent","user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin only */}

        <Route
          path="/analytics"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Admin + Agent */}

        <Route
          path="/tickets"
          element={
            <ProtectedRoute allowedRoles={["admin","agent"]}>
              <Tickets />
            </ProtectedRoute>
          }
        />

        {/* All roles can create ticket */}

        <Route
          path="/create-ticket"
          element={
            <ProtectedRoute allowedRoles={["admin","agent","user"]}>
              <CreateTicket />
            </ProtectedRoute>
          }
        />

        {/* My Tickets - all roles can view their own tickets */}

        <Route
          path="/my-tickets"
          element={
            <ProtectedRoute allowedRoles={["admin","agent","user"]}>
              <MyTickets />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App