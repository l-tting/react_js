import React from 'react'

export const LoginForm = ({user,loading,error,handleChange,handleSubmit}) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form onSubmit={handleSubmit}  className='w-full max-w-sm bg-white p-8 rounded-xl space-y-4'>
             <h2 className='font-bold text-center'> Login</h2>
             <input
              type="email" 
              className='w-full border p-2 rounded' 
              placeholder='Email'
              name='email'
              value={user.email}
              onChange={handleChange}
             />

             <input
              type="password" 
              className='w-full border p-2 rounded'
              placeholder='Password'  
              name='password'
              value={user.password}
              onChange={handleChange}
              />
             <button className='bg-blue-600 w-full text-white py-2 rounded'> Login</button>
        </form>
    </div>
  )
}


