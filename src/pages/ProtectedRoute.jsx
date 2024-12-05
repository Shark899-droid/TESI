import { useGlobalContext } from '../context'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useGlobalContext()
  return isLogged ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoute
