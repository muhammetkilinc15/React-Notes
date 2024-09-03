import React from 'react'
import Product from './product'

function Container({ products }) {
    return (
        <div>
            <h1>Container running</h1>
            <hr />
            {products.map((product, index) => (
                <Product
                    key={index}
                    productName={product.productName}
                    price={product.price}
                />
            ))}
        </div>
    )
}

export default Container
