import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../data/products'
function ProductDetails({ product }) {

    const { id } = useParams(); // URL'den gelen id parametresini alıyoruz
    const currentP = products.find((product) => product.id === parseInt(id)); // id'yi sayıya çevirip karşılaştırıyoruz
  
    // Ürün bulunamadığında bir kontrol ekleyebiliriz
    if (!currentP) {
      return <div>Ürün Bulunamadı</div>;
    }
  
    return (
      <div className='container mt-5'>
        <div className='card' style={{ width: '18rem' }}>
          {/* Ürün görseli */}
          <img src={currentP.image} className='card-img-top' alt={currentP.name} />
          <div className='card-body'>
            <h5 className='card-title'>{currentP.name}</h5>
            <p className='card-text'>Fiyat: ${currentP.price}</p>
            <p className='card-text'>
              Ürün Detayları: {currentP.description || 'Bu ürün hakkında daha fazla bilgi bulunmamaktadır.'}
            </p>
            <a href='#' className='btn btn-primary'>Sepete Ekle</a>
          </div>
        </div>
      </div>
    );
}

export default ProductDetails