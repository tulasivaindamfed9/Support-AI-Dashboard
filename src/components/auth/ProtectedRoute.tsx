import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"

interface Props {
  children: React.ReactNode
  allowedRoles: string[]
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {

  const user = useAppSelector(state => state.auth.user)

  if (!user) {
    return <Navigate to="/" />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />
  }

  return children
}

export default ProtectedRoute

// this checks if user is logged in and has the required role to access the route. 
// If not logged in, redirects to signup page.
//  If logged in but doesn't have required role, redirects to unauthorized page. 
// Otherwise, renders the children components.