import React from 'react'

function Product(props) {
    const { productName, price } = props;
    return (
        <div>

            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price} TL</div>
            </div>
            <hr />
        </div>
    )
}

export default Product
