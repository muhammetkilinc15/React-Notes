import React from 'react';
import Product from '../components/Product';
import {products} from '../data/products'

function Products() {
    
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Ürünleri card yapısıyla listelemek */}
                {products.map((product) => (
                   <Product product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Products;
