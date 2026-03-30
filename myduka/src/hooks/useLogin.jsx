import React, { useState } from 'react'
import { loginService } from '../services/loginService'
import { useNavigate } from "react-router-dom"


export const useLogin = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))

    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(false)
        setError(null)
        try {
            await loginService(user)

            navigate('/dashboard')

        } catch (error) {
            setError(error)
            console.log(error)

        }

    }

    return {
        user, loading, error, handleChange ,handleSubmit
    }

}


