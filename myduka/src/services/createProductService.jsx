import axios from 'axios'

const product_url = import.meta.env.VITE_PRODUCTS_URL

export const createProductService = async(product_details) =>{
    try{
        const response = await axios.post(URL,product_details)
        return response.data
    }catch(error){
        throw error
    }
}