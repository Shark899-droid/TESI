import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Header = () => {
  const { isLogged, logout } = useGlobalContext()
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Reservation System</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/reservation'>My Reservations</Link>
          </li>
          <li>
            {!isLogged ? (
              <Link to='/login'>Login</Link>
            ) : (
              <button onClick={() => logout()}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
