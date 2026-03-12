import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../redux/slices/authSlice"
import type { AppDispatch } from "../redux/store"
import { toast } from "react-toastify"

const Logout = () => {

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {

    dispatch(logout())

    localStorage.removeItem("user")

    toast.success("Logged out successfully")

    navigate("/")

  }, [])

  return null
}

export default Logout