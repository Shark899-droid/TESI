import { useState } from 'react'
import { createContext, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AppContext = createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  const navigate = useNavigate()
  //REGISTER LOGIN
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const register = async () => {
    const data = await axios.post('http://localhost:3000/register', {
      name,
      email,
      password,
    })
    console.log(data.data.data)
    navigate('/login')
  }
  const login = async () => {
    const data = await axios.post('http://localhost:3000/login', {
      email,
      password,
    })
    console.log(data.data)

    localStorage.setItem('token', data.data.token)
    localStorage.setItem('id', data.data.id)
    console.log(isLogged)
    setIsLogged(true)
    navigate('/home')
  }

  const logout = () => {
    console.log(isLogged)
    localStorage.clear()
    setIsLogged(false)
    navigate('/login')
  }
  //REGISTER LOGIN
  // RESERVATION
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(0)
  const [status, setStatus] = useState('')
  const [reservations, setReservations] = useState([])
  const [reservation, setReservation] = useState([])

  const createReservation = async () => {
    const s = date.indexOf('T')
    const simulatedDate = date.slice(0, s)
    const data = await axios.post(
      'http://localhost:3000/reservation',
      {
        userID: localStorage.getItem('id'),
        date: simulatedDate,
        time,
        guests,
        status,
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
    console.log(data.data)
    setDate('')
    setTime('')
    setGuests(0)
  }

  const getReservations = async () => {
    const data = await axios.get(
      `http://localhost:3000/myreservations/${localStorage.getItem('id')}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    )
    setReservations(data.data.data)
  }

  const deleteReservation = async (id) => {
    await axios.delete(`http://localhost:3000/reservation/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    getReservations()
  }
  const editReservation = async (id) => {
    const data = await axios.put(
      `http://localhost:3000/reservation/${id}`,
      { userID: localStorage.getItem('id'), date, time, guests, status },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    )
    console.log(data.data.data)
    getReservations()
    navigate('/reservation')
  }

  const getReservation = async (id) => {
    const data = await axios.get(`http://localhost:3000/reservation/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    setReservation(data.data.data)
  }
  // RESERVATION
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        register,
        login,
        date,
        setDate,
        time,
        setTime,
        guests,
        setGuests,
        createReservation,
        getReservations,
        reservations,
        setReservations,
        status,
        setStatus,
        deleteReservation,
        editReservation,
        reservation,
        setReservation,
        getReservation,
        setIsLogged,
        isLogged,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
