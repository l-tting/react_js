import React from 'react'

export const ProductsTable = ({products}) => {
  console.log("this is products",products)
  return (
    <div>
      <div>
          <table>
              <thead>
                  <tr>
                    <th>Prod ID</th>
                    <th>Name</th>
                    <th>Buying</th>
                    <th>Selling price</th>
                  </tr>
              </thead>
              <tbody>
               { products.map((product)=> (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.buying_price}</td>
                    <td>{product.selling_price}</td>
                </tr>
               ))}
            
              </tbody>
          </table>
      </div>
    </div>
  )
}

