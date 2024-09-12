import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) {

const navigate = useNavigate();

  return (
    <div key={product.id}           className="col-md-3 mb-4">
    <div className="card h-100">
         {/* Ürün görseli */}
         <img src={product.image} className="card-img-top" alt={product.name} />
         
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Fiyat: ${product.price}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-primary" onClick={()=>navigate("/product-details/"+product.id)}>Detay</button>
        </div>
    </div>
</div>
  )
}

export default Product