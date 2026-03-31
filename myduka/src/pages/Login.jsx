import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const auth = useLogin()
  return (
    <div>
       <LoginForm {...auth}/>
    </div>
  )
}

export default Login
