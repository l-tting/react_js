
import React, { useEffect, useState } from 'react'
import { getProductsService } from '../services/getProductsService'

export const useGetProducts = () => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProductsService()
            setProductData(data)
        }
        fetchProducts()

    }, [])

    return productData


}


