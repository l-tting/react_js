import React from 'react'

export const ProductsHero = ({data}) => {

  const numbers = [1,2,3]

  const doubled = numbers.map(num => num * 2)

  console.log(doubled) //[2,4,6]

  
  return (
    <div>
        <h4>This is the products page</h4>
        <h4>Products Header</h4>
        <h4>{data}</h4>
    </div>
  )
}

