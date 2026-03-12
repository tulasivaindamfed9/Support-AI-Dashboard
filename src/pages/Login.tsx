import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { login, clearError } from "../redux/slices/authSlice"
import type { AppDispatch, RootState } from "../redux/store"
import { toast } from "react-toastify"

interface LoginForm {
  email: string
  password: string
  role: "admin" | "agent" | "user"
}

interface LoginErrors {
  email: string
  password: string
  role: string
}

const Login = () => {

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { error, user } = useSelector((state: RootState) => state.auth)

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    role: "user"
  })

  const [errors, setErrors] = useState<LoginErrors>({
    email: "",
    password: "",
    role: ""
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // If login was successful, navigate to dashboard
    if (submitted && user) {
      toast.success("Login successful")
      navigate("/dashboard")
      setSubmitted(false)
    }
  }, [user, navigate, submitted])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })

    // Clear error when user starts typing
    if (error) {
      dispatch(clearError())
    }
  }

  const validate = () => {

    const newErrors = {
      email: "",
      password: "",
      role: ""
    }

    if (!form.email) {
      newErrors.email = "Email is required"
    }

    if (!form.password) {
      newErrors.password = "Password is required"
    }

    if (!form.role) {
      newErrors.role = "Role is required"
    }

    setErrors(newErrors)

    return !newErrors.email && !newErrors.password && !newErrors.role
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (!validate()) return

    setSubmitted(true)

    dispatch(login({
      email: form.email,
      password: form.password,
      role: form.role
    }))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-1"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 w-full mb-1 mt-4"
        >
          <option value="user">User</option>
          <option value="agent">Agent</option>
          <option value="admin">Admin</option>
        </select>

        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 mt-6 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>

      </form>

    </div>
  )
}

export default Login