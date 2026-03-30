import React from 'react'
import { ProductsTable } from '../components/ProductsTable'
import { ProductsHero } from '../components/ProductsHero'
import { useGetProducts } from '../hooks/useGetProducts'
import ProductForm from '../components/ProductForm'
import { useCreateProduct } from '../hooks/useCreateProduct'


const Products = () => {

    const {productData} = useGetProducts()

    const productHook = useCreateProduct()



  return (
    <div>
      <div>
        <ProductsHero/>
      </div>

      <div>
          <ProductForm 
          
          />
      </div>

      <div>
        <ProductsTable products={productData} />
      </div>



    </div>
  )
}

export default Products
