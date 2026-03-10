import React from 'react'

const ProductsTable = () => {
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
                <tr>
                    <td>1</td>
                    <td>Milk</td>
                    <td>50</td>
                    <td>60</td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default ProductsTable
