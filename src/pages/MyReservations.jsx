import { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate, Link } from 'react-router-dom'

const MyReservations = () => {
  const navigate = useNavigate()
  const { getReservations, reservations, deleteReservation } =
    useGlobalContext()
  useEffect(() => {
    getReservations()
  }, [])
  return (
    <div>
      <h1 className='text-5xl text-bold text-center mb-12'>My Reservations</h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Time</th>
              <th>Guestes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => {
              return (
                <tr key={reservation._id}>
                  <td>1</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.guests}</td>
                  <td>{reservation.status}</td>
                  <Link
                    to={'/edit-reservation/' + reservation._id}
                    className='btn btn-neutral mr-5'
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-neutral'
                    onClick={() => deleteReservation(reservation._id)}
                  >
                    Delete
                  </button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default MyReservations
