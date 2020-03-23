import React, { Component } from 'react'
import Product from '../Product/Product';
import './Products.css';
import SearchEngine from '../SearchEngine/SearchEngine';


class Products extends Component{

    render(){
        return(
            <div className='products'>
                <h2>Nuestros productos</h2>
                <SearchEngine searchProduct={this.props.searchProduct}/>

                <ul className='products'>
                    {Object.keys(this.props.products).map(i =>(
                        <Product key={i} product={this.props.products[i]}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products;