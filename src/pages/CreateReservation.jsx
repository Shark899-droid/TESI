import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const CreateReservation = () => {
  const {
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    createReservation,
    status,
    setStatus,
  } = useGlobalContext()
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-2xl font-bold mb-6'>
            Make a reservation
          </h2>
          <Link to='/home'>
            <FaArrowRight className='absolute top-5 right-5 cursor-pointer w-5 h-5' />
          </Link>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Date</span>
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                <input
                  type='date'
                  className='grow'
                  placeholder='Select date of your reservation'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div className='form-control mt-4'>
              <label className='label'>
                <span className='label-text'>Time</span>
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                <input
                  type='time'
                  className='grow'
                  placeholder='What time do you want enter ?'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
              <label className='label'>
                <span className='label-text'>Guests</span>
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                <input
                  type='number'
                  className='grow'
                  placeholder='Number of guestes'
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </label>
            </div>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>Status</span>
              </div>
              <select
                className='select select-bordered'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option disabled selected>
                  Status
                </option>
                <option>Attiva</option>
                <option>Cancellata</option>
              </select>
            </label>
            <div className='form-control mt-6'>
              <button
                className='btn btn-primary'
                onClick={() => createReservation()}
              >
                Submit Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CreateReservation
