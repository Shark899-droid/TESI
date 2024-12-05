import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CreateReservation from './pages/CreateReservation.jsx'
import MyReservations from './pages/MyReservations.jsx'
import Home from './pages/Home.jsx'
import EditReservation from './pages/EditReservation.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AppProvider from './context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route element={<ProtectedRoute />}>
            <Route path='/home' index element={<Home />} />
            <Route path='/reservation' index element={<MyReservations />} />
            <Route path='/create-reservation' element={<CreateReservation />} />
            <Route path='/edit-reservation/:id' element={<EditReservation />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </AppProvider>
  </BrowserRouter>
)
