import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav className='bg-gray-200 p-4'>
        <Link to='/' className='text-gray-800'> Home </Link>

        {isAuthenticated && (
          <>

            <Link to='/products' className='text-gray-800'> Products </Link>
            <Link to='/sales' className='text-gray-800'> Sales </Link>
            <Link to='/stock' className='text-gray-800'> Stock</Link>

          </>
        )}
        {!isAuthenticated ? (
          <>

            <Link to='/login' className='text-gray-800'> Login</Link>
            <Link to='/register' className='text-gray-800'> Register</Link>
          </>
        ):(
          <>
               <span> {user.email}</span>
               <button onClick={handleLogout} className='bg-red-600 text-white rounded'> Logout </button>
          </>
         
        )}
      </div>
    </nav>
  )
}

export default NavBar
