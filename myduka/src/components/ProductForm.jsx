import React from 'react'

const ProductForm = ({ product, handleChange, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4 border-4 p-4' >
                <input
                    type="text"
                    name='product_name'
                    value={product.product_name}
                    onChange={handleChange}
                    className='border p-2 rounded'
                    placeholder='Product Name'
                /> <br />
                <input
                    type="number"
                    name='buying_price'
                    value={product.buying_price}
                    onChange={handleChange}
                    className='border p-2 rounded'
                    placeholder='Buying Price'
                /> <br />
                <input
                    type="number"
                    name='selling_price'
                    value={product.selling_price}
                    onChange={handleChange}
                    className='border p-2 rounded'
                    placeholder='Selling Price'
                /> <br />
                <button type='submit' className='bg-blue-200 px-4 py-2 rounded-xl'>Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm
