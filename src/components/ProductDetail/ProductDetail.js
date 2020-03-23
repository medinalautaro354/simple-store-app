import React from 'react'
import './ProductDetail.css';

const ProductDetail = (props) =>{
    if(!props) return null;
    const {image, name, price, description } = props.product;
return(
    <div className='product-information'>
        <div className='image'>
            <img src={`/img/${image}.png`} alt={name} />

        </div>
        <div className='information'>
            <h2>{name}</h2>
            <p className='price'>$ {price} </p>
            <p>{description}</p>
        </div>
    </div>
)
}

export default ProductDetail;