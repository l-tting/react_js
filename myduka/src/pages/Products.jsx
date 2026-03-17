import React from 'react'
import { ProductsTable } from '../components/ProductsTable'
import { ProductsHero } from '../components/ProductsHero'
import { useGetProducts } from '../hooks/useGetProducts'


const Products = () => {

    const {productData} = useGetProducts()

    const x = 10


  return (
    <div>
      <div>
        <ProductsHero data={x}/>
      </div>

      <div>
        <ProductsTable products={productData} />
      </div>



    </div>
  )
}

export default Products
