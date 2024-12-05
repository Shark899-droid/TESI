import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-8xl font-bold'>Victoria Hotel</h1>
          <p className='py-6 text-3xl'>
            Welcome to Victoria Hotel! <br /> Book Your Room Easily!
          </p>
          <Link to='/create-reservation' className='btn btn-primary'>
            Create Reservation
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home
