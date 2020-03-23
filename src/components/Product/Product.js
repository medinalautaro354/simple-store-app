import React from 'react'
import {Link} from 'react-router-dom';

const Product =(props) =>{
        const {id, name, description, image, price } = props.product;
        return(
            <li>
                <img src={`img/${image}.png`} alt={name} />
                <p>{name} <span>$ {price}</span></p>
                <Link to={`/producto/${id}`}>
                    Mas Información
                </Link>
            </li>
        )
}

export default Product;