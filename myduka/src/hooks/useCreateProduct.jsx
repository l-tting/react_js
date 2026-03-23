
import React, { useState } from 'react'
import { createProductService } from '../services/createProductService'


export const useCreateProduct = () => {
  
     //products ,loading & error states
    const [product,setProduct] = useState({
        product_name:'',
        buying_price:'',
        selling_price:''
    })
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    const handleChange = (e) => {
        const {name,value} = e.target 

       setProduct((prev) => ({
            ...prev,
            [name]:value
        }))

    }


    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            await createProductService(product)
            setProduct({product_name:"",buying_price:"",selling_price:""})
        }catch(error){
            setError("Failed to post product")
        }

    }

  return {
    product ,handleChange, handleSubmit
  }
}


