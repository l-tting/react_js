import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const url = import.meta.env.VITE_API_URL

const AuthContext = createContext()

export const useAuth = useContext(AuthContext)

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState()
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    //a function t check if user is logged in
    const checkAuth = async () => {
      try{
        const response = await axios.get(`${url} + me`,{
            withCredentials:true
        })
        setUser(response.data)
        setIsAuthenticated(true)
      }catch(err){
        console.log(err)
        setUser(null)
        setIsAuthenticated(false)
      }
    }

    //run once when the app starts
    useEffect(()=>{
        checkAuth()
    },[])

    //logging out 
    const logout = async () =>{
        try{
            await axios.post(`${url} + logout`,{},{withCredentials:true})
        }
        catch(err){
            console.error(err)
        }
        setUser(null)
        setIsAuthenticated(false)

    }

    return (
        <AuthContext.Provider value={{user,isAuthenticated,logout}}>
           {children}
        </AuthContext.Provider>
    )
        
    

    
}